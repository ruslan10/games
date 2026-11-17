/* Real-input completability v3. Policy inside the page; input through the
   game's real PointerEvent handlers; deterministic frame stepping. */
const { chromium } = require('playwright'),
  http = require('http'), fs = require('fs'), path = require('path');
(async () => {
  const server = http.createServer((req, res) => {
    let f = path.join(__dirname, '../..', decodeURI(req.url.split('?')[0]));
    if (req.url.split('?')[0].endsWith('/')) f = path.join(f, 'index.html');
    try {
      res.setHeader('Content-Type', f.endsWith('.js') ? 'application/javascript' : f.endsWith('.html') ? 'text/html' : 'text/plain');
      res.end(fs.readFileSync(f));
    } catch { res.statusCode = 404; res.end('not found'); }
  }).listen(0);
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const p = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
  const errors = [];
  p.on('pageerror', e => errors.push(e.message));
  await p.addInitScript(() => {
    window.requestAnimationFrame = (fn) => { window._qaFrame = fn; return 1; };
    window._qaTime = 1000;
    window._qaStep = (n) => { for (let j = 0; j < n; j++) { window._qaTime += 1000 / 120; window._qaFrame(window._qaTime); } };
  });
  await p.goto(`http://127.0.0.1:${server.address().port}/stickman/`);
  await p.waitForFunction(() => !!window.__game);
  await p.evaluate(() => _qaFrame(_qaTime));

  const args = process.argv.slice(2);
  const targets = args.length ? args : ['0'];
  const results = [];
  for (const t of targets) {
    const r = await p.evaluate(async (target) => {
      const press = () => document.getElementById('game').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
      const release = () => window.dispatchEvent(new PointerEvent('pointerup'));
      const noBoost = String(target).startsWith('nb:');
      const start = () => {
        if (String(target).startsWith('daily:')) __game.startDaily(target.slice(6));
        else if (target === 'daily') __game.startDaily();
        else __game.startLevel(+(noBoost ? target.slice(3) : target));
        __game.beginPlay();
      };
      let lastOutcome = 'unreached';
      for (let attempt = 0; attempt < 5; attempt++) {
        start();
        let held = false, reHoldAt = -1, groundedT = 0, boosts = 0, lastStreak = 0, fell = false, attachTick = 0, wasRope = false, lowT = 0;
        const maxSteps = 400; // 400*18 ticks = 60 sim seconds
        for (let step = 0; step < maxSteps; step++) {
          const w = __game.world, p0 = w.player;
          const st = {
            state: __game.state, rope: !!w.rope, tick: w.tick,
            perf: __game.state === 'play' && __game.perfectNow(),
            grounded: !!w.getState().grounded,
            spd: Math.hypot(p0.vx, p0.vy),
          };
          if (st.rope && !wasRope) attachTick = st.tick;
          wasRope = st.rope;
          if (st.state === 'clearing' || st.state === 'clear')
            return { outcome: 'clear', attempt, simT: Math.round(st.tick / 120), boosts };
          if (st.state === 'failing' || st.state === 'fail') { fell = true; break; }
          if (st.rope && !held) { press(); held = true; }
          else if (st.rope && held && noBoost) {
            // control: release just OUTSIDE the perfect window (ang >= 1.05), no boost fires
            const r = w.rope, a = r.anchor;
            const dx = p0.x - a.x, dy = p0.y - a.y, d = Math.hypot(dx, dy) || 1;
            const ang = Math.atan2(dx, dy);
            const vt = p0.vx * (dy / d) + p0.vy * (-dx / d);
            if ((vt > 320 && ang >= 1.06 && ang < 1.5) || st.tick - attachTick > 480) { release(); held = false; reHoldAt = st.tick + 40; }
          }
          else if (st.rope && held && (st.perf || (st.tick - attachTick > 360 && st.spd > 180) || (st.tick - attachTick > 480))) { release(); held = false; reHoldAt = st.tick + 40; }
          else if (!st.rope && !held) {
            if (reHoldAt < 0 || st.tick >= reHoldAt) { press(); held = true; reHoldAt = -1; }
          } else if (!st.rope && held && st.grounded) {
            if (++groundedT > 30) { release(); held = false; groundedT = 0; }
          } else if (!st.rope && held) groundedT = 0;
          const streak = __game.perfectStreak;
          if (streak > lastStreak) boosts++;
          lastStreak = streak;
          _qaStep(18);
        }
        if (held) { release(); held = false; }
        lastOutcome = fell ? 'fell' : 'stuck';
      }
      return { outcome: lastOutcome };
    }, t);
    const label = String(t).startsWith('nb:') ? 'L' + (+String(t).slice(3) + 1) + '-noboost' : (String(t).startsWith('daily') ? String(t) : 'L' + (+t + 1));
    results.push(label + ':' + r.outcome + (r.simT ? ' ' + r.simT + 's' : '') + (r.boosts !== undefined ? ' boosts=' + r.boosts : ''));
  }
  console.log('REAL-INPUT RESULTS:', results.join(' | '));
  console.log('page errors:', JSON.stringify(errors));
  await browser.close(); server.close();
})().catch(e => { console.error(e); process.exit(1); });

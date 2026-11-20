/* English Worlds QA: full bot playthrough of all 60 missions, save persistence,
   band unlock vs free world switching, overflow, audio fetching, fail-closed
   speech recognition. Run: node tests/english.cjs */
const {chromium} = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const MIME = {'.js': 'application/javascript', '.css': 'text/css', '.html': 'text/html', '.mp3': 'audio/mpeg', '.webp': 'image/webp', '.json': 'application/json'};
const server = http.createServer((req, res) => {
  let f = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (f.endsWith('/')) f += 'index.html';
  fs.readFile(f, (err, b) => {
    if (err) { res.writeHead(404); return res.end(); }
    res.setHeader('Content-Type', MIME[path.extname(f)] || 'application/octet-stream');
    res.end(b);
  });
});

(async () => {
  // 0. Content/audio correspondence: every referenced clip exists, no orphan files
  const contentSrc = fs.readFileSync(path.join(root, 'english/content.js'), 'utf8');
  eval(contentSrc + '; globalThis.__C = {WORLDS, BANDS};');
  const {WORLDS: CW, BANDS: CB} = globalThis.__C;
  const ids = new Set();
  for (const w of CW) for (const b of CB) for (const m of w.bands[b.id]) {
    if (m.clip) ids.add(m.clip);
    if (m.qClip) ids.add(m.qClip);
    if (m.options && m.type === 'story') for (const o of m.options) ids.add(o.c);
    if (m.type === 'build') for (const wd of m.say.split(' ')) ids.add('w-' + wd.toLowerCase());
  }
  const files = new Set(fs.readdirSync(path.join(root, 'english/audio')).filter(f => f.endsWith('.mp3')).map(f => f.slice(0, -4)));
  const missing = [...ids].filter(i => !files.has(i));
  const orphans = [...files].filter(f => !ids.has(f));
  assert.deepEqual(missing, [], 'referenced clips missing from audio/: ' + missing.join(','));
  assert.deepEqual(orphans, [], 'orphan audio files not referenced in content: ' + orphans.join(','));
  console.log('PASS content/audio correspondence:', ids.size, 'referenced clips, all present, no orphans');

  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({executablePath: '/opt/google/chrome/chrome', headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required']});
  const errors = [];
  const audioOK = new Set(), audioBad = [];

  // 1. Layout + overflow at 3 widths, hub and a world screen
  for (const width of [320, 390, 900]) {
    const c = await browser.newContext({viewport: {width, height: 900}, isMobile: width < 700, hasTouch: width < 700});
    const p = await c.newPage();
    p.on('pageerror', e => errors.push(e.message));
    p.on('response', r => { if (r.url().includes('/english/audio/')) (r.status() === 200 ? audioOK.add(r.url().split('/').pop()) : audioBad.push(r.url())); });
    await p.goto(`http://127.0.0.1:${port}/english/`);
    await p.waitForSelector('.world-card');
    assert.equal(await p.locator('.world-card').count(), 5, 'five world cards');
    assert.equal(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'hub overflow ' + width);
    await p.locator('.world-card').first().click();
    await p.waitForSelector('.mission, .finish');
    assert.equal(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'world overflow ' + width);
    if (width === 390) await p.screenshot({path: '/downloads/eng-hub-world-390.png'});
    await c.close();
  }
  console.log('PASS hub/world layout, 5 switchable worlds, no overflow at 320/390/900');

  // 2. Full bot playthrough: all 5 worlds x 3 bands x 4 missions
  const c = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
  const p = await c.newPage();
  p.on('pageerror', e => errors.push(e.message));
  p.on('response', r => { if (r.url().includes('/english/audio/')) (r.status() === 200 ? audioOK.add(r.url().split('/').pop()) : audioBad.push(r.url())); });
  await p.goto(`http://127.0.0.1:${port}/english/`);
  await p.waitForSelector('.world-card');

  const state = () => p.evaluate(() => ({
    screen: view.screen,
    worldId: view.worldId,
    band: view.band,
    mission: view.mission,
    xp: save.xp,
    finished: !!document.querySelector('.finish'),
    m: view.screen === 'world' ? WORLDS.find(w => w.id === view.worldId).bands[view.band][view.mission] : null,
  }));

  let shots = 0;
  for (const wId of ['island', 'space', 'pet', 'city', 'comic']) {
    // worlds are never locked: each must be directly clickable from hub
    await p.locator(`.world-card[data-world="${wId}"]`).click();
    await p.waitForSelector('.band-tabs');
    for (const band of ['b1', 'b2', 'b3']) {
      // play the band's missions until the finish card shows
      for (let step = 0; step < 8; step++) {
        const s = await state();
        if (s.finished) break;
        assert.equal(s.band, band, `band while playing ${wId}`);
        if (s.m.type === 'choose') {
          await p.waitForSelector('.choose-opt');
          if (shots === 0) { await p.screenshot({path: '/downloads/eng-choose-390.png'}); shots++; }
          await p.locator(`.choose-opt[data-opt="${s.m.answer}"]`).click();
          // wrong-tap path checked separately; right answer advances
        } else if (s.m.type === 'story') {
          await p.waitForSelector('.text-opt');
          if (shots === 2) { await p.screenshot({path: '/downloads/eng-story-390.png'}); shots++; }
          // hear every answer option first (nonreader-safe: separate hear vs select)
          for (const sp of await p.locator('.text-opt-row .speaker').all()) await sp.click();
          await p.locator(`.text-opt[data-opt="${s.m.answer}"]`).click();
        } else if (s.m.type === 'build') {
          await p.waitForSelector('.chip');
          if (shots === 3) { await p.screenshot({path: '/downloads/eng-build-390.png'}); shots++; }
          for (const wd of s.m.say.split(' ')) {
            await p.locator(`.chip[data-w="${wd}"]:not([disabled])`).first().click();
            await p.waitForTimeout(60);
          }
          await p.locator('#checkBuild').click();
        } else {
          await p.waitForSelector('#saidBtn');
          if (shots === 1) { await p.screenshot({path: '/downloads/eng-repeat-390.png'}); shots++; }
          await p.locator('#saidBtn').click();
        }
        await p.waitForSelector('#nextBtn', {timeout: 5000});
        await p.locator('#nextBtn').click();
        await p.waitForTimeout(150);
      }
      const s = await state();
      assert.equal(s.finished, true, `finished ${wId} ${band}`);
      if (band === 'b1') {
        // b2 tab must be unlocked now; b3 still locked
        assert.equal(await p.locator('.band-tab[data-band="b2"].locked').count(), 0, 'b2 unlocked after b1');
        assert.equal(await p.locator('.band-tab[data-band="b3"].locked').count(), 1, 'b3 still locked');
      }
      if (band !== 'b3') {
        await p.locator('#nextBandBtn').click();
        await p.waitForSelector('.mission, .finish');
        const s2 = await state();
        assert.equal(s2.band, band === 'b1' ? 'b2' : 'b3');
      } else {
        if (wId === 'island') await p.screenshot({path: '/downloads/eng-finish-390.png'});
        await p.locator('#hubBtn').click();
        await p.waitForSelector('.world-card');
      }
    }
    console.log('PASS world', wId, 'all 12 missions');
  }

  // expected XP: 54 repeat x 10 + 6 choose x 5 = 570
  const endState = await p.evaluate(() => ({xp: save.xp, worlds: save.worlds}));
  assert.equal(endState.xp, 570, 'xp total');
  for (const wId of ['island', 'space', 'pet', 'city', 'comic'])
    for (const b of ['b1', 'b2', 'b3']) assert.equal(endState.worlds[wId][b].length, 4, `${wId} ${b} complete`);
  console.log('PASS 60/60 missions, xp = 570');

  // 3. Save persistence across reload
  await p.reload();
  await p.waitForSelector('.world-card');
  const persisted = await p.evaluate(() => JSON.parse(localStorage.getItem('english-worlds:v1')));
  assert.equal(persisted.xp, 570, 'xp persisted');
  assert.equal(persisted.worlds.island.b3.length, 4, 'missions persisted');
  const dots = await p.locator('.world-card[data-world="island"] .dot.done').count();
  assert.equal(dots, 3, 'three done dots on island card');
  console.log('PASS save persistence after reload');

  // 3b. World-specific scenes reflect completed missions
  for (const [wId, sel, n] of [['island', '.scene .scene-items i', 12], ['pet', '.scene .scene-items i', 12], ['city', '.scene .scene-items i', 12], ['space', '.scene.thread .bubble', 6], ['comic', '.scene.panels .panel', 3]]) {
    await p.locator(`.world-card[data-world="${wId}"]`).click();
    await p.waitForSelector('.scene');
    assert.equal(await p.locator(sel).count(), n, wId + ' scene items');
    if (wId === 'pet') {
      const style = await p.locator('.pet-grow').getAttribute('style');
      assert.match(style, /--grow:1\.15/, 'dragon fully grown after 12 feedings');
    }
    // nonreaders: tapping any past item/panel/bubble replays its audio
    const tappable = await p.locator('.scene [data-clip]').count();
    assert.ok(tappable > 0, wId + ' scene items tappable');
    await p.locator('.scene [data-clip]').first().click();
    await p.waitForFunction(() => !!currentAudio, null, {timeout: 3000});
    // keyboard activation on the same replay elements
    await p.waitForFunction(() => !currentAudio, null, {timeout: 5000});
    await p.locator('.scene [data-clip]').first().focus();
    await p.keyboard.press('Enter');
    await p.waitForFunction(() => !!currentAudio, null, {timeout: 3000});
    await p.screenshot({path: `/downloads/eng-scene-${wId}-390.png`});
    await p.locator('#backBtn').click();
    await p.waitForSelector('.world-card');
  }
  console.log('PASS world scenes: island collection, pet growth, city building, space dialogue thread, comic panels');

  // 4. Audio: every clip preloaded/fetched with HTTP 200
  assert.equal(audioBad.length, 0, 'no failed audio fetches: ' + audioBad.join(','));
  assert.equal(audioOK.size, ids.size, 'all ' + ids.size + ' clips fetched, got ' + audioOK.size);
  console.log('PASS all ' + ids.size + ' audio clips served 200');

  // 5. Parent zone gate + fail-closed speech recognition in this browser (fresh save)
  await c.close();
  const c3 = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
  const p3 = await c3.newPage();
  p3.on('pageerror', e => errors.push(e.message));
  await p3.goto(`http://127.0.0.1:${port}/english/`);
  await p3.waitForSelector('.world-card');
  await p3.locator('#settingsBtn').click();
  await p3.waitForSelector('.gate-q');
  const qText = await p3.locator('.gate-q').textContent();
  const nums = qText.match(/\d+/g).map(Number);
  await p3.locator('#gateInput').fill(String(nums[0] * nums[1]));
  await p3.locator('#gateBtn').click();
  await p3.waitForSelector('input[name=voice]');
  const srSupported = await p3.evaluate(() => !!(window.SpeechRecognition || window.webkitSpeechRecognition));
  await p3.locator('input[name=voice][value="ondevice"]').check();
  await p3.screenshot({path: '/downloads/eng-settings-390.png'});
  await p3.locator('#closeBtn').click();
  await p3.waitForSelector('.world-card');
  await p3.locator('.world-card[data-world="island"]').click();
  await p3.waitForSelector('#micBtn, #saidBtn');
  const micVisible = await p3.locator('#micBtn').count();
  if (!srSupported) {
    assert.equal(micVisible, 1, 'mic button offered when mode set');
    await p3.locator('#micBtn').click();
    await p3.waitForTimeout(600);
    const fb = await p3.locator('#feedback').textContent();
    assert.match(fb, /לא זמינה/, 'fail-closed message');
    await p3.waitForSelector('#saidBtn', {timeout: 5000});
    const reverted = await p3.evaluate(() => JSON.parse(localStorage.getItem('english-worlds:v1')).settings.voice);
    assert.equal(reverted, 'off', 'mode reverted to self-report');
    console.log('PASS fail-closed: on-device recognition unavailable in headless Chrome -> honest fallback to self-report');
  } else {
    console.log('NOTE: SpeechRecognition exists in this Chrome (' + srSupported + '); fail-closed path not exercised, mic flow present:', micVisible === 1);
  }

  // 6. Wrong answer path on a choose mission
  const fresh = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
  const p2 = await fresh.newPage();
  p2.on('pageerror', e => errors.push(e.message));
  await p2.goto(`http://127.0.0.1:${port}/english/`);
  await p2.waitForSelector('.world-card');
  await p2.locator('.world-card[data-world="island"]').click();
  await p2.waitForSelector('.choose-opt', {timeout: 5000}).catch(() => {});
  // advance to the island b1 choose mission (mission index 1)
  await p2.locator('#saidBtn').click();
  await p2.waitForSelector('#nextBtn'); await p2.locator('#nextBtn').click();
  await p2.waitForSelector('.choose-opt');
  const answer = await p2.evaluate(() => WORLDS[0].bands.b1[1].answer);
  const wrong = await p2.evaluate(a => WORLDS[0].bands.b1[1].options.find(o => o !== a), answer);
  await p2.locator(`.choose-opt[data-opt="${wrong}"]`).click();
  const fb2 = await p2.locator('#feedback').textContent();
  assert.match(fb2, /מנסים עוד פעם/, 'wrong answer feedback');
  assert.equal(await p2.locator('#nextBtn').count(), 0, 'no advance on wrong answer');
  const xp0 = await p2.evaluate(() => save.xp);
  assert.equal(xp0, 10, 'wrong answer grants no xp');
  console.log('PASS wrong-answer path: honest feedback, no auto-pass');

  // 7. Stubbed recognition scenarios: fail-closed and matching, deterministically
  async function scenario(name, stubSrc, check) {
    const cx = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
    await cx.addInitScript(stubSrc);
    const pg = await cx.newPage();
    pg.on('pageerror', e => errors.push(name + ': ' + e.message));
    await pg.goto(`http://127.0.0.1:${port}/english/`);
    await pg.waitForSelector('.world-card');
    await pg.evaluate(() => { save.settings.voice = 'ondevice'; persist(); });
    await pg.locator('.world-card[data-world="island"]').click();
    await pg.waitForSelector('#micBtn');
    await pg.locator('#micBtn').click();
    await check(pg);
    await cx.close();
    console.log('PASS scenario:', name);
  }
  const NO_SR = `Object.defineProperty(window,'SpeechRecognition',{value:undefined});Object.defineProperty(window,'webkitSpeechRecognition',{value:undefined});`;
  const SR_CLASS = (available, behavior) => `window.SpeechRecognition=class{
    static available(){return Promise.resolve(${JSON.stringify(available)})}
    static install(){return Promise.resolve()}
    start(){${behavior}}
    abort(){}
  };`;

  await scenario('no SpeechRecognition API at all', NO_SR, async pg => {
    await pg.waitForTimeout(400);
    assert.match(await pg.locator('#feedback').textContent(), /לא זמינה/);
    await pg.waitForSelector('#saidBtn', {timeout: 5000});
    assert.equal(await pg.evaluate(() => save.settings.voice), 'off', 'reverted to self-report');
  });
  await scenario('on-device pack unavailable', SR_CLASS('unavailable', ''), async pg => {
    await pg.waitForTimeout(400);
    assert.match(await pg.locator('#feedback').textContent(), /לא זמינה/);
    await pg.waitForSelector('#saidBtn', {timeout: 5000});
    assert.equal(await pg.evaluate(() => save.settings.voice), 'off', 'reverted to self-report');
  });
  await scenario('available() throws', `window.SpeechRecognition=class{static available(){return Promise.reject(new Error('x'))} start(){}};`, async pg => {
    await pg.waitForTimeout(400);
    assert.match(await pg.locator('#feedback').textContent(), /לא זמינה/);
    assert.equal(await pg.evaluate(() => save.settings.voice), 'off', 'reverted to self-report');
  });
  await scenario('on-device success: matching transcript passes with transcript shown',
    SR_CLASS('available', `setTimeout(()=>this.onresult({results:[[{transcript:'a black cat'}]]}),50)`), async pg => {
      await pg.waitForSelector('#nextBtn', {timeout: 5000});
      assert.match(await pg.locator('#heard').textContent(), /a black cat/);
      assert.equal(await pg.evaluate(() => save.xp), 10, 'xp granted on real match');
      assert.equal(await pg.evaluate(() => save.settings.voice), 'ondevice', 'mode kept on success');
    });
  await scenario('on-device mismatch: no pass, no xp, heard text shown',
    SR_CLASS('available', `setTimeout(()=>this.onresult({results:[[{transcript:'pizza pizza pizza'}]]}),50)`), async pg => {
      await pg.waitForTimeout(500);
      assert.match(await pg.locator('#feedback').textContent(), /כמעט/);
      assert.equal(await pg.locator('#nextBtn').count(), 0, 'no auto-pass on mismatch');
      assert.equal(await pg.evaluate(() => save.xp), 0, 'no xp on mismatch');
      assert.match(await pg.locator('#heard').textContent(), /pizza/);
    });
  await scenario('mic permission denied: honest message, mode NOT silently changed',
    SR_CLASS('available', `setTimeout(()=>this.onerror({error:'not-allowed'}),50)`), async pg => {
      await pg.waitForTimeout(500);
      assert.match(await pg.locator('#feedback').textContent(), /מיקרופון/);
      assert.equal(await pg.evaluate(() => save.settings.voice), 'ondevice', 'mode kept on permission error');
      assert.equal(await pg.evaluate(() => save.xp), 0);
    });
  await scenario('navigation mid-listening: late recognition result completes nothing',
    SR_CLASS('available', `setTimeout(()=>this.onresult({results:[[{transcript:'a black cat'}]]}),800)`), async pg => {
      await pg.waitForTimeout(300);
      await pg.locator('#backBtn').click();
      await pg.waitForSelector('.world-card');
      await pg.waitForTimeout(900);
      assert.equal(await pg.evaluate(() => save.xp), 0, 'no xp after navigating away');
      assert.equal(await pg.evaluate(() => save.worlds.island.b1.length), 0, 'no mission completed after nav');
    });

  // 8. Audio failure shows a visible toast; streak uses local date
  const c5 = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
  const p5 = await c5.newPage();
  p5.on('pageerror', e => errors.push(e.message));
  await p5.goto(`http://127.0.0.1:${port}/english/`);
  await p5.waitForSelector('.world-card');
  await p5.evaluate(() => playClip('definitely-missing-clip', () => {}));
  await p5.waitForSelector('.toast.show', {timeout: 4000});
  assert.match(await p5.locator('#toast').textContent(), /לא הצלחנו להשמיע/);
  const browserDay = await p5.evaluate(() => localDay(0));
  const nodeDay = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  assert.equal(browserDay, nodeDay, 'streak uses local date');
  console.log('PASS audio-failure toast visible; streak local-date boundary');

  assert.deepEqual(errors, [], 'page errors: ' + errors.join(' | '));
  console.log('PASS zero page errors across all flows');
  await browser.close();
  server.close();
  console.log('ALL ENGLISH QA PASSED');
})().catch(e => { console.error(e); server.close(); process.exit(1); });

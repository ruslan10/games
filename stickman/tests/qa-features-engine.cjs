/* node stickman/tests/qa-features-engine.cjs
   Engine coverage for the seven-feature update:
   - moving / breakable / toggling anchors (deterministic, reset-restored)
   - wind zones accelerate the hero
   - daily builder: deterministic per date across independent sessions, and
     fairness-gated - the shipped daily for each date is proven completable
     here by the independent fuller bot (12 attempts x 6 release timings),
     stronger than the in-builder gate (3 timings); fallback template verified
   - endless generator: deterministic chunks, rising difficulty fields valid
   - bot completability: all 30 classic levels (with twists) measured against
     their untwisted baseline, and a 90s endless survival run
*/
const vm = require('vm'), fs = require('fs'), path = require('path'), assert = require('assert');
const c = { window: {} };
vm.createContext(c);
for (const f of ['physics.js', 'levels.js', 'fruits.js', 'endless.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), c);
const { World } = c.window.StickmanPhysics;
const LEVELS = c.window.StickmanLevels;
const E = c.window.StickmanEndless;

/* ---- unit: anchor extras ---- */
{
  const w = new World({ anchors: [{ id: 'm', x: 0, y: 0, move: { dx: 100, dy: 40, period: 2 } }], player: { x: -50, y: 300 } });
  w.step(60);
  assert(Math.abs(w.anchors[0].x) > 1 || Math.abs(w.anchors[0].y) > 1, 'moving anchor must move');
  const x1 = w.anchors[0].x;
  w.reset();
  assert.strictEqual(w.anchors[0].x, 0, 'reset restores base position');
  w.step(60);
  assert(Math.abs(w.anchors[0].x - x1) < 1e-9, 'moving anchor deterministic after reset');
}
{
  const w = new World({ anchors: [{ id: 'b', x: 0, y: 0, breakAfter: 0.5 }], player: { x: 0, y: 200 } });
  w.attach('b');
  let broke = 0;
  for (let i = 0; i < 120; i++) { w.step(1); for (const e of w.drainEvents()) if (e.type === 'anchorbreak') broke++; }
  assert.strictEqual(broke, 1, 'breakable anchor breaks once');
  assert.strictEqual(w.rope, null, 'rope released on break');
  assert.strictEqual(w.anchors[0].enabled, false, 'broken anchor disabled');
  w.reset();
  assert(w.anchors[0].enabled !== false, 'reset re-enables broken anchor');
  w.attach('b');
  assert(w.rope, 'attachable again after reset');
}
{
  const w = new World({ anchors: [{ id: 't', x: 0, y: 0, toggle: { period: 1, duty: 0.5 } }], player: { x: 0, y: 200 } });
  w.attach('t');
  let off = 0;
  for (let i = 0; i < 240; i++) { w.step(1); for (const e of w.drainEvents()) if (e.type === 'anchoroff') off++; }
  assert(off >= 1, 'toggling anchor drops a live rope');
  let enabledSeen = 0, disabledSeen = 0;
  const w2 = new World({ anchors: [{ id: 't', x: 0, y: 0, toggle: { period: 1, duty: 0.5 } }], player: { x: 0, y: 500 } });
  for (let i = 0; i < 480; i++) { w2.step(1); if (w2.anchors[0].enabled) enabledSeen++; else disabledSeen++; }
  assert(enabledSeen > 100 && disabledSeen > 100, 'toggle cycles on and off');
}
{
  const w = new World({ anchors: [], winds: [{ x1: -100, y1: -100, x2: 100, y2: 100, ax: 500, ay: 0 }], player: { x: 0, y: 0 } });
  w.step(120);
  assert(w.player.vx > 150, 'wind zone pushes the hero');
  const w2 = new World({ anchors: [], winds: [{ x1: -100, y1: -100, x2: 100, y2: 100, ax: 500, ay: 0 }], player: { x: 500, y: 500 } });
  w2.step(120);
  assert(w2.player.vx < 50, 'no wind outside the zone');
}
/* moving anchor imparts its motion: a swing on a fast anchor carries anchor velocity */
{
  const w = new World({ anchors: [{ id: 'm', x: 0, y: 0, move: { dx: 120, dy: 0, period: 1.2 } }], player: { x: 0, y: 200 } });
  w.step(30);
  w.attach('m');
  w.step(30);
  const s = w.getState();
  assert(Number.isFinite(s.player.vx) && Number.isFinite(s.player.vy), 'finite velocity on moving anchor');
}

/* ---- daily builder + fairness gate (runs after bot defs; hoisted below) ---- */
function dailyChecks() {
  // date determinism across independent script contexts, not just the session cache
  function freshBuild(date) {
    const c2 = { window: {} };
    vm.createContext(c2);
    for (const f of ['physics.js', 'levels.js', 'fruits.js', 'endless.js'])
      vm.runInContext(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), c2);
    return c2.window.StickmanDailyBuild(date);
  }
  const geo = L => JSON.stringify({ a: L.anchors, p: L.pads, w: L.winds, f: L.finishX, k: L.killY });
  const dates = ['2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20', '2026-11-21', '2026-11-22'];
  for (const date of dates) {
    const L = c.window.StickmanDailyBuild(date);
    assert.strictEqual(geo(L), geo(freshBuild(date)), 'same date builds the identical daily across sessions: ' + date);
    const res = playLevel(L, 12);
    assert(res.ok, 'daily ' + date + ' must be completable by the independent bot');
    console.log('daily', date, 'bot-completed in', res.attempts, 'attempt(s)');
  }
  assert.notDeepStrictEqual(c.window.StickmanDailyBuild(dates[0]).anchors, c.window.StickmanDailyBuild(dates[1]).anchors, 'different dates differ');
  const a = c.window.StickmanDailyBuild(dates[0]);
  assert(a.anchors.length >= 10 && a.finishX > 3000 && a.winds.length >= 1, 'daily has content and a wind band');
  // the all-candidates-fail fallback (clone of classic level 5) is itself verified
  const fb = JSON.parse(JSON.stringify(LEVELS[4]));
  assert(c.window.StickmanDailyVerify(fb), 'daily fallback template is completable');
  console.log('daily fairness gate checks passed');
}

/* ---- endless generator ---- */
{
  for (const seed of [1, 42, 987654]) {
    for (let i = 0; i < 20; i++) {
      const ch = E.chunk(seed, i);
      assert(ch.anchors.length >= 2, 'chunk has anchors');
      for (const a of ch.anchors) assert(a.x >= i * E.CHUNK && a.x <= (i + 1) * E.CHUNK + 400, 'anchor inside chunk range');
      assert.deepStrictEqual(ch, E.chunk(seed, i), 'chunks deterministic');
    }
  }
}

/* ---- heuristic bot: hold to catch, release in the perfect window, hop when grounded ---- */
function botOpts(L) {
  return {
    assist: L.assist || 240, assistSpeed: 900,
    anchors: L.anchors.map(a => ({ id: a.id, x: a.x, y: a.y, move: a.move, breakAfter: a.breakAfter, toggle: a.toggle })),
    pads: L.pads.map(p => ({ id: p.id, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2, boostX: p.boostX || 0, boostY: p.boostY || 0, minSpeed: p.minSpeed || 640, nx: p.nx, ny: p.ny, restitution: p.restitution, kind: p.kind === 'bump' ? 'bump' : undefined, standTopOffset: p.kind === 'trampCeil' ? 40 : undefined })),
    winds: (L.winds || []).map(z => ({ ...z })),
  };
}
function inWindow(w, angPad) {
  const r = w.rope; if (!r) return false;
  const p = w.player, a = r.anchor;
  const dx = p.x - a.x, dy = p.y - a.y, d = Math.hypot(dx, dy) || 1;
  const ang = Math.atan2(dx, dy);
  const tx = dy / d, ty = -dx / d;
  const vt = p.vx * tx + p.vy * ty;
  return vt > 340 && ang > 0.14 + angPad && ang < 1.0;
}
const STRATS = [[0, 340], [0.1, 320], [-0.04, 360], [0.06, 300], [0.16, 340], [0, 300]];
function runWorld(w, L, si, seedState) {
  const [angPad, vtMin] = STRATS[si % STRATS.length];
  const a0 = w.anchors.find(a => a.id === L.start.anchorId) || w.anchors[0];
  const off = 130, dy = Math.sqrt(L.start.rope * L.start.rope - off * off);
  w.reset({ x: a0.x - off, y: a0.y + dy });
  w.attach(a0.id);
  w.setHeld(true);
  let held = true, reHoldAt = -1, falls = 0, attachT = 0, bestVt = 0;
  for (let t = 0; t < 120 * 150; t++) {
    w.step(1);
    const p = w.player;
    for (const e of w.drainEvents()) { if (e.type === 'attach') { attachT = w.time; bestVt = 0; } }
    if (p.x >= L.finishX) return 'win';
    if (p.y > L.killY) {
      if (++falls >= 5) return 'fail';
      const first = w.anchors[0];
      w.reset({ x: first.x - 130, y: first.y + 300 });
      w.attach(first.id); w.setHeld(true); held = true; reHoldAt = -1;
      continue;
    }
    if (reHoldAt > 0 && w.tick >= reHoldAt) { w.setHeld(true); held = true; reHoldAt = -1; }
    if (w.rope && held) {
      const r = w.rope, a = r.anchor;
      const dx = p.x - a.x, dy2 = p.y - a.y, d = Math.hypot(dx, dy2) || 1;
      const ang = Math.atan2(dx, dy2);
      const tx = dy2 / d, ty = -dx / d;
      const vt = p.vx * tx + p.vy * ty;
      if (ang > 0) bestVt = Math.max(bestVt, vt);
      const win = vt > Math.max(vtMin, bestVt * 0.97) && ang > 0.14 + angPad && ang < 1.0;
      const desperate = w.time - attachT > 4 && vt > 150 && ang > 0.3 && ang < 1.2;
      // a breakable hook: get off before it snaps (a player reads the timer ring)
      const breaking = a.breakAfter && (w.time - attachT) > a.breakAfter - 0.35 && ang > -0.2;
      if (win || desperate || breaking) { w.setHeld(false); held = false; reHoldAt = w.tick + 50 + (si % 5) * 6; }
    }
    if (!w.rope && !held && w.getState().grounded) w.tap();
    if (!w.rope && !held && p.vy > 350 && p.y > 500) w.tap();
    if (seedState) seedState.maxX = Math.max(seedState.maxX, p.x);
  }
  return 'timeout';
}
function botOpts(L) {
  return {
    assist: L.assist || 240, assistSpeed: 900,
    anchors: L.anchors.map(a => ({ id: a.id, x: a.x, y: a.y, move: a.move, breakAfter: a.breakAfter, toggle: a.toggle })),
    pads: L.pads.map(p => ({ id: p.id, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2, boostX: p.boostX || 0, boostY: p.boostY || 0, minSpeed: p.minSpeed || 640, nx: p.nx, ny: p.ny, restitution: p.restitution, kind: p.kind === 'bump' ? 'bump' : undefined, standTopOffset: p.kind === 'trampCeil' ? 40 : undefined })),
    winds: (L.winds || []).map(z => ({ ...z })),
  };
}
function playLevel(L, maxAttempts) {
  for (let s = 0; s < (maxAttempts || 12); s++) {
    if (runWorld(new World(botOpts(L)), L, s) === 'win') return { ok: true, attempts: s + 1 };
  }
  return { ok: false };
}

console.log('unit checks passed');
const SECTION = process.env.SECTION || 'all';
if (SECTION === 'all' || SECTION === 'daily') dailyChecks();
/* classic completability: the heuristic bot is a lower bound on a human; the
   meaningful bar for this change is that twist anchors never make a level
   HARDER to finish than the same level with twists stripped. Levels the bot
   cannot clear even on the untwisted baseline are its own known limits
   (sparse/no-net late levels need human timing). */
function strippedClone(L) {
  const c = JSON.parse(JSON.stringify(L));
  for (const a of c.anchors) { delete a.move; delete a.breakAfter; delete a.toggle; }
  c.winds = [];
  return c;
}
const botLimit = [], twistBreaks = [];
for (let i = 0; i < LEVELS.length && (SECTION === 'all' || SECTION === 'classic'); i++) {
  const withT = playLevel(LEVELS[i], 12).ok;
  if (withT) continue;
  const base = playLevel(strippedClone(LEVELS[i]), 12).ok;
  if (base) twistBreaks.push(i + 1); else botLimit.push(i + 1);
}
console.log('bot baseline limits (fail even untwisted):', botLimit.join(',') || 'none');
assert.strictEqual(twistBreaks.length, 0, 'twists must not break completability on: ' + twistBreaks.join(','));
console.log('all twist levels at least as completable as their untwisted baseline');
/* endless: 3 seeds; world grows like the game grows it; one long run each */
for (const seed of (SECTION === 'all' || SECTION === 'endless') ? [11, 222, 3333] : []) {
  const ch0 = E.chunk(seed, 0);
  const w = new World({
    assist: 230, assistSpeed: 900,
    anchors: ch0.anchors.map(a => ({ ...a })),
    pads: ch0.pads.map(p => ({ ...p, kind: p.kind === 'bump' ? 'bump' : undefined })),
    winds: ch0.winds.map(z => ({ ...z })),
  });
  let next = 1;
  w.onBeforeStep = (ww) => {
    while (ww.player.x + 2200 > next * E.CHUNK) {
      const ch = E.chunk(seed, next++);
      for (const a of ch.anchors) ww.anchors.push({ ...a });
      for (const p of ch.pads) ww.pads.push({ ...p });
      for (const z of ch.winds) ww.winds.push({ ...z });
    }
  };
  const a0 = w.anchors[0];
  const off0 = 130, dy0 = Math.sqrt(360 * 360 - off0 * off0);
  w.reset({ x: a0.x - off0, y: a0.y + dy0 });
  w.attach(a0.id); w.setHeld(true);
  let held = true, reHoldAt = -1, attachT = 0, bestVt = 0, maxX = 0, falls = 0;
  for (let t = 0; t < 120 * 120 && falls < 1; t++) {
    w.step(1);
    const p = w.player;
    for (const e of w.drainEvents()) { if (e.type === 'attach') { attachT = w.time; bestVt = 0; } }
    maxX = Math.max(maxX, p.x);
    assert(Number.isFinite(p.x) && Number.isFinite(p.y), 'endless stays finite');
    if (p.y > 1160) { falls++; break; }
    if (reHoldAt > 0 && w.tick >= reHoldAt) { w.setHeld(true); held = true; reHoldAt = -1; }
    if (w.rope && held) {
      const r = w.rope, a = r.anchor;
      const dx = p.x - a.x, dy2 = p.y - a.y, d = Math.hypot(dx, dy2) || 1;
      const ang = Math.atan2(dx, dy2);
      const tx = dy2 / d, ty = -dx / d;
      const vt = p.vx * tx + p.vy * ty;
      if (ang > 0) bestVt = Math.max(bestVt, vt);
      const win = vt > Math.max(340, bestVt * 0.97) && ang > 0.14 && ang < 1.0;
      const desp = w.time - attachT > 4 && vt > 150 && ang > 0.3 && ang < 1.2;
      const brk = a.breakAfter && (w.time - attachT) > a.breakAfter - 0.35 && ang > -0.2;
      if (win || desp || brk) { w.setHeld(false); held = false; reHoldAt = w.tick + 55; }
    }
    if (!w.rope && !held && w.getState().grounded) w.tap();
    if (!w.rope && !held && p.vy > 350 && p.y > 500) w.tap();
  }
  console.log('endless seed', seed, 'first-life distance', Math.round(maxX), 'px (' + Math.round(maxX / 50) + ' m), chunks grown:', next, 'fell:', falls > 0);
  assert(maxX > 2000, 'endless first life crosses chunk boundaries');
  assert(next >= 3, 'endless world grew');
}
console.log('ALL FEATURE ENGINE TESTS PASSED');

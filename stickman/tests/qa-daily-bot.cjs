/* Independent daily-challenge completability check.
   Builds StickmanDailyBuild(date) for several dates and plays each with a
   heuristic bot through the real physics engine (no game-layer boost).
   A date passes if the bot wins within the attempt budget. */
const vm = require('vm'), fs = require('fs'), path = require('path');
const c = { window: {} };
vm.createContext(c);
for (const f of ['physics.js', 'levels.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), c);
const { World } = c.window.StickmanPhysics;
const daily = c.window.StickmanDailyBuild;

function makeWorld(L) {
  return new World({
    assist: L.assist || 240, assistSpeed: 900,
    anchors: L.anchors.map(a => ({ id: a.id, x: a.x, y: a.y, move: a.move, breakAfter: a.breakAfter, toggle: a.toggle })),
    pads: L.pads.map(p => ({ id: p.id, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2,
      boostX: p.boostX || 0, boostY: p.boostY || 0, minSpeed: p.minSpeed || 640,
      nx: p.nx, ny: p.ny, restitution: p.restitution,
      kind: p.kind === 'bump' ? 'bump' : undefined,
      standTopOffset: p.kind === 'trampCeil' ? 40 : undefined })),
    winds: (L.winds || []).map(z => ({ ...z })),
  });
}

function play(L, attempt) {
  const w = makeWorld(L);
  const a0 = w.anchors.find(a => a.id === L.start.anchorId);
  const off = 130, dy = Math.sqrt(L.start.rope * L.start.rope - off * off);
  w.reset({ x: a0.x - off, y: a0.y + dy });
  w.attach(a0.id); w.setHeld(true);
  let held = true, reHoldAt = -1, attachT = 0, bestVt = 0;
  const reHoldDelay = 50 + attempt * 7;          // vary re-catch timing per attempt
  const maxT = 90;                                // sim seconds per attempt
  for (let t = 0; t < maxT * 120; t++) {
    w.step(1);
    const p = w.player;
    for (const e of w.drainEvents()) if (e.type === 'attach') { attachT = w.time; bestVt = 0; }
    if (p.x > L.finishX) return 'win';
    if (p.y > L.killY) return 'fell';
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
      if (win || desp || brk) { w.setHeld(false); held = false; reHoldAt = w.tick + reHoldDelay; }
    }
    if (!w.rope && !held && w.getState().grounded) w.tap();
    if (!w.rope && !held && p.vy > 350 && p.y > 500) w.tap();
  }
  return 'timeout';
}

const dates = process.argv.slice(2);
const list = dates.length ? dates : ['2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20', '2026-11-21', '2026-11-22'];
let fail = 0;
for (const d of list) {
  const L = d.startsWith('classic:') ? c.window.StickmanLevels[+d.slice(8)] : daily(d);
  let done = null, tries = 0;
  for (let s = 0; s < 8 && !done; s++) { const r = play(L, s); tries++; if (r === 'win') done = true; }
  const info = `anchors=${L.anchors.length} finishX=${L.finishX} winds=${(L.winds || []).length} killY=${L.killY}`;
  console.log(`${d}: ${done ? 'WIN in ' + tries + ' attempt(s)' : 'NOT COMPLETED in ' + tries + ' attempts'} (${info})`);
  if (!done) fail++;
}
console.log(fail ? `DAILY BOT: ${fail} date(s) not completed` : 'DAILY BOT: all dates completable');
process.exit(fail ? 1 : 0);

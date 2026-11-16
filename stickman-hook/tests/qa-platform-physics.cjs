/* node stickman-hook/tests/qa-platform-physics.cjs */
const vm = require("vm"),
  fs = require("fs"),
  path = require("path"),
  assert = require("assert");
const c = { window: {} };
vm.createContext(c);
for (const f of ["physics.js", "levels.js"])
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", f), "utf8"), c);
const { World } = c.window.StickmanPhysics,
  levels = c.window.StickmanLevels;
const abilities = [
  {},
  { groundBoost: 1.45 },
  { catchRadius: 500 },
  { releaseBoost: 1.25 },
  {},
  { airThrust: 300 },
  { assist: 276, assistSpeed: 1000 },
  { airHops: 2 },
  { maxFallSpeed: 500 },
  { padBoostMult: 1.3 },
];
function opts(L, abil) {
  return {
    ...abil,
    anchors: L.anchors,
    pads: L.pads.map((p) => ({
      ...p,
      kind: p.kind === "bump" ? "bump" : undefined,
      standTopOffset: p.kind === "trampCeil" ? 40 : undefined,
    })),
  };
}
let cases = 0,
  plates = 0,
  bumps = 0;
for (const L of levels)
  for (const pad of L.pads) {
    if (pad.kind === "trampCeil") {
      plates++;
      for (const abil of abilities)
        for (const pos of [0.02, 0.5, 0.98])
          for (const hold of [6, 60]) {
            let x = Math.min(pad.x1, pad.x2) + Math.abs(pad.x2 - pad.x1) * pos,
              w = new World({
                ...opts(L, abil),
                player: { x, y: pad.y1 - 100 },
              });
            w.step(360);
            assert(w.getState().grounded);
            assert.equal(w.player.y, pad.y1 - 40 - w.player.radius);
            let start = w.player.x;
            // Include old trapped-rope state as well as a simple rest.
            if (pos === 0.5) {
              let a = w.nearestAnchor();
              if (a) w.attach(a);
              w.setHeld(true);
              w.step(60);
            }
            start = w.player.x;
            assert.equal(w.tap(), "jump");
            w.setHeld(true);
            w.step(6);
            assert(w.player.vy < -400);
            assert(w.player.x > start);
            w.step(hold - 6);
            w.setHeld(false);
            let maxX = w.player.x;
            for (let t = 0; t < 180; t++) {
              w.step();
              maxX = Math.max(maxX, w.player.x);
            }
            assert(
              maxX > Math.max(pad.x1, pad.x2) + 15,
              "must clear platform, not merely lift off",
            );
            cases++;
          }
      // Downward underside spring still works; upper face is one-way from below.
      let w = new World({
        ...opts(L, {}),
        player: { x: (pad.x1 + pad.x2) / 2, y: pad.y1 + 55, vx: 0, vy: -400 },
      });
      w.step(18);
      assert(w.player.vy > 0);
      cases++;
    } else if (pad.kind === "bump") {
      bumps++;
      for (const d of [
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        const r = Math.abs(pad.x2 - pad.x1);
        let w = new World({
          pads: opts(L, {}).pads.filter((p) => p.id === pad.id),
          player: {
            x: pad.x1 + d[0] * (r + 15),
            y: pad.y1 + d[1] * (r + 15),
            vx: -d[0] * 350,
            vy: -d[1] * 350,
          },
        });
        w.step(4);
        assert(w.drainEvents().some((e) => e.type === "pad"));
        assert(
          Math.hypot(w.player.x - pad.x1, w.player.y - pad.y1) >= r + 11.9,
        );
        cases++;
      }
    }
  }
console.log(JSON.stringify({ plates, bumps, cases, result: "PASS" }));

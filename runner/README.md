# ראנר / City Runner

Original browser runner for the games site. Three.js renders locally bundled, low-poly geometry. No external assets or runtime network dependencies. Character models, city geometry, physics and UI are original.

## Play

Automatic forward running. Swipe left/right to change lanes, up to jump, down to slide. Tap the road to jump. On-screen buttons work too. Keyboard: arrows or WASD, Space to jump, Escape/P to pause.

Jump crates and barriers. Slide under striped overhead gates and long canopies. Cars slide between lanes from level 3 - jump them or change lane; launch ramps before two-lane rows throw you over them. Gold coins unlock characters and upgrades; courier and fox are free from the start. Cat (150), bunny (350), panda (650). No real-money purchases. Each character has its own ability: the courier builds combo faster, the fox's magnet lasts 4 seconds longer, the cat jumps higher, the bunny double-jumps, and the panda starts every run with a shield. Shields absorb one hit; magnets attract coins; green shoes give super jumps; blue wings start a short flight with coins in the air.

A clean streak of pickups and dodges builds the combo multiplier (x2, then x3 coin value); any hit resets it. A first unshielded hit is only a stumble - but the dog starts chasing, and one more hit before it tires ends the run. After a fall you can revive once per run for coins. The menu adds missions with coin rewards, permanent power upgrades, and a daily seeded challenge that rolls over at midnight Israel time. Twenty levels grow faster and longer, with two-lane obstacle rows introduced at level 4 and district sky colors every five levels.

Progress is device/browser-local under `rulan-runner-v1`, separate from the swing game's saves. Completed/failed/abandoned runs are banked once. A completed level unlocks the next. No tracking, accounts or ads.

## Build

Node 18+:

```
npm ci
npm run build
npm test
```

`src.js` is the renderer/UI source, `game.js` its committed browser bundle. `engine.js` is a rendering-independent fixed-step simulation. Three.js's MIT license is in `THIRD_PARTY_NOTICES.txt`.

## QA

- `npm test`: 236 engine assertions, 100 lane-avoidance completions and 60 jump/slide completions across all 20 levels at 30, 60 and 120 Hz, 990 slide-gate passages, fireball policy checks, audio render checks, progression module tests.
- `node tests/mobile.cjs 390 844`: real touch-input UI/controls/save checks and screenshot capture in Playwright Chromium. Repeat with 320 568 and 844 390. Set the Chrome executable path in the script for your system.
- `node tests/preview.cjs`: initial gameplay character screenshots.
- `tests/server.cjs`: serves the repository for tests. No hosted service required.
- `window.__runner`: read-only snapshot getter for QA. No state injection/teleport controls. `?autopause=0` disables the 750ms frame-stall watchdog for software-GL test environments only.

Release QA additionally included independent natural-touch level 1 completion/death/retry, swipes, character purchases and persistence. Automated mobile emulation is not physical-device testing.

## Adventure additions

Choose the left rooftop ramp or jump into the right zipline. While riding, swipe left or down (or press either highlighted arrow) to drop off; the end of the cable releases automatically. On the board the rider holds a surf stance instead of running. Tap jump again in the air for a flip (bunny uses its double jump first). A landed flip grants one combo point; only the first five landed flips per run grant 3 coins each, never multiplied, capped at 15 coins per run. Skateboards add speed and absorb one hit; down brakes. Pogo sticks bounce automatically; down temporarily stops bouncing. Each vehicle lasts seven seconds. Zen practice never writes currency, missions, collectibles, unlocks or personal bests. Daily word hunt and monthly City Lights prizes are fixed; see COLLECTIONS.md. Personal-best signs use the prior distance for the same level or dated daily route.

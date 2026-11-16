# ראנר / City Runner

Original browser runner for the games site. Three.js renders locally bundled, low-poly geometry. No external assets or runtime network dependencies. Character models, city geometry, physics and UI are original.

## Play

Automatic forward running. Swipe left/right to change lanes, up to jump, down to slide. Tap the road to jump. On-screen buttons work too. Keyboard: arrows or WASD, Space to jump, Escape/P to pause.

Jump crates and barriers. Slide under striped overhead gates. Gold coins unlock cosmetic characters; courier and fox are free from the start. Cat (150), bunny (350), panda (650). No real-money purchases. All characters have identical collision/movement settings. Shields absorb one hit; magnets attract coins for eight seconds. Twenty levels grow faster and longer, with two-lane obstacle rows introduced at level 4 and district sky colors every five levels.

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

- `npm test`: 239 assertions, including 100 lane-avoidance completions and 60 jump/slide completions across all 20 levels at 30, 60 and 120 Hz.
- `node tests/mobile.cjs 390 844`: real touch-input UI/controls/save checks and screenshot capture in Playwright Chromium. Repeat with 320 568 and 844 390. Set the Chrome executable path in the script for your system.
- `node tests/preview.cjs`: initial gameplay character screenshots.
- `tests/server.cjs`: serves the repository for tests. No hosted service required.
- `window.__runner`: read-only snapshot getter for QA. No state injection/teleport controls.

Release QA additionally included independent natural-touch level 1 completion/death/retry, swipes, character purchases and persistence. Automated mobile emulation is not physical-device testing.

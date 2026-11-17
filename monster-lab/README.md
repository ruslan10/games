# Monster Lab
Original Hebrew RTL arithmetic game. Static, no build step or server API required.

- 3 stations: base-10 quantity building, rule deduction, and fraction comparison/equivalent-fraction painting.
- 3 selectable challenge bands (6-8, 8-10, 10-12). All stations open. After repeated errors, the next question uses gentler content.
- 6 questions per round. Unlimited corrections and visual hints. No lives lost.
- Optional 90-second challenge, off by default. Pause and background-tab handling stop the clock.
- Local-only progress under `monster-lab:v1`. No account, analytics, remote font calls, or network API.
- Original generated artwork, programmatic exact math visuals. Heebo and Noto Emoji fonts licensed under OFL, licenses included.

## QA
From repository root with `playwright` installed:
`node monster-lab/qa.cjs`
Uses installed Chrome `/opt/google/chrome/chrome`; change executablePath for other systems. Tests all nine station/band combinations, 9,000 generator cases, pause, local progress, and unrelated-save preservation. Screenshots are written to `/downloads/monster-qa/`.

Characters are original procedural WebGL 3D models with articulated limbs, moving eyes, blinking, idle breathing, error and success reactions. Tap the scene to wave. The environment is a character-free illustration. Three.js is self-hosted under its MIT license; license is included. No baked character images are used in gameplay or the hero. The renderer caps animation at about 30fps. Narrow or coarse-pointer devices start at pixel ratio 1, without antialiasing or shadows, and with lighter sphere/fur geometry. Desktop uses higher detail and drops pixel ratio/shadows when its measured frame rate is low. WebGL failure is shown explicitly, never replaced by a flat character.

Additional checks: `node monster-lab/qa-extra.cjs` checks responsive widths and negative flows. These two math suites block the 3D module to keep virtual-clock and arithmetic testing separate from rendering. `node monster-lab/qa-3d.cjs` renders actual 3D, records motion, verifies high-band multiplication does not reveal its product, and captures source-aligned corrective diagrams. It requires `npx playwright install ffmpeg` for recording. Headless software rendering is not a physical Pixel 6 performance measurement.

Sound defaults off and can be enabled with the music control. Some early readers may need an adult to read initial instructions; there is no spoken narration.

`node monster-lab/qa-perf.cjs` measures post-warm-up hero/feed/machine render rates without video capture and reports the actual WebGL renderer.

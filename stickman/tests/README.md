# Platform takeoff regression

Run the dependency-free physics checks:

    node stickman/tests/qa-platform-physics.cjs

For mobile input/render checks, install Playwright and Chromium, then run:

    npm install --no-save playwright
    npx playwright install chromium
    node stickman/tests/qa-platform-touch.cjs

The mobile replay starts level 11 as the superhero and uses real touch events.
Only animation-frame time is controlled to make the replay deterministic. It
lands on the last ceiling plate through gameplay, rests, taps to jump, clears
the edge, then continues with touch input to the finish card. It never changes
the player's position or velocity. Screenshots go to `qa-output/` by default.

Options: `LIVE` selects a deployed game URL, `QA_OUT` selects the screenshot
folder, and `QA_WIDTH` / `QA_HEIGHT` change the viewport. For a local before/after
comparison, `BASELINE_PHYSICS` supplies the old physics.js file. That mode asserts
the old stuck behavior instead of the fixed takeoff.

The physics checks cover 93 upper plates, 10 character configurations, three
landing positions and short/long presses, plus underside and balloon bounces.
They are targeted regression checks, not an all-level completion sweep.

Character economy checks (purchase per switch, balance display, remaining points):

    node stickman/tests/qa-char-unlocks.cjs

Fruit pickup radius checks (pass right over fruit; hog magnet reaches farther):

    node stickman/tests/qa-fruit-radius.cjs

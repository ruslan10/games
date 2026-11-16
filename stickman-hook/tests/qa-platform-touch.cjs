const { chromium } = require("playwright"),
  http = require("http"),
  fs = require("fs"),
  path = require("path"),
  assert = require("assert");
(async () => {
  const out = process.env.QA_OUT || path.join(process.cwd(), "qa-output");
  fs.mkdirSync(out, { recursive: true });
  const server = http
    .createServer((req, res) => {
      let f = path.join(__dirname, "../..", decodeURI(req.url.split("?")[0]));
      if (req.url.split("?")[0].endsWith("/")) f = path.join(f, "index.html");
      try {
        res.setHeader(
          "Content-Type",
          f.endsWith(".js")
            ? "application/javascript"
            : f.endsWith(".html")
              ? "text/html"
              : "text/plain",
        );
        res.end(
          fs.readFileSync(
            process.env.BASELINE_PHYSICS && f.endsWith("/physics.js")
              ? process.env.BASELINE_PHYSICS
              : f,
          ),
        );
      } catch {
        res.statusCode = 404;
        res.end("not found");
      }
    })
    .listen(0);
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  let p = await browser.newPage({
    viewport: {
      width: Number(process.env.QA_WIDTH || 390),
      height: Number(process.env.QA_HEIGHT || 844),
    },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });
  let errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  await p.addInitScript(() => {
    window.requestAnimationFrame = (fn) => {
      window._qaFrame = fn;
      return 1;
    };
    window._qaTime = 1000;
    window._qaStep = (n) => {
      for (let j = 0; j < n; j++) {
        window._qaTime += 1000 / 120;
        window._qaFrame(window._qaTime);
      }
    };
  });
  await p.goto(
    process.env.LIVE ||
      `http://127.0.0.1:${server.address().port}/stickman-hook/`,
  );
  await p.waitForFunction(() => !!window.__game);
  await p.evaluate(() => {
    localStorage.setItem("sh_unl_6", "1");
    __game.setSkin(6);
    _qaFrame(_qaTime);
    __game.startLevel(10);
    __game.beginPlay();
  });
  console.log("body", await p.evaluate(() => __game.body));
  const cdp = await p.context().newCDPSession(p);
  let held = false;
  async function touch(b) {
    if (b === held) return;
    held = b;
    await cdp.send("Input.dispatchTouchEvent", {
      type: b ? "touchStart" : "touchEnd",
      touchPoints: b ? [{ x: p.viewportSize().width * 0.75, y: p.viewportSize().height * 0.6 }] : [],
    });
  }
  const plan = JSON.parse(
    fs.readFileSync(path.join(__dirname, "l11-touch-plan.json")),
  );
  for (let i = 0; i < plan.length; i++) {
    await touch(plan[i]);
    await p.evaluate(() => _qaStep(18));
    let s = await p.evaluate(() => ({
      p: __game.world.player,
      standing: __game.world._standingPad?.id,
      state: __game.state,
    }));
    if (i % 8 === 0) console.log(i, s);
    if (s.standing === "oc11") {
      console.log("LANDED", s);
      break;
    }
  }
  assert(
    await p.evaluate(
      () =>
        __game.world.getState().grounded &&
        __game.world.player.x > 4786 &&
        __game.world.player.x < 5046,
    ),
    "natural gameplay must land on screenshot plate",
  );
  await touch(false);
  await p.evaluate(() => _qaStep(240));
  let start = await p.evaluate(() => ({ ...__game.world.player }));
  await p.screenshot({ path: path.join(out, "platform-standing.png") });
  await touch(true);
  await p.evaluate(() => _qaStep(10));
  let takeoff = await p.evaluate(() => __game.world.getState());
  await p.screenshot({ path: path.join(out, "platform-takeoff.png") });
  await touch(false);
  await p.evaluate(() => _qaStep(90));
  let after = await p.evaluate(() => __game.world.getState());
  await p.screenshot({ path: path.join(out, "platform-progress.png") });
  console.log(
    "TOUCH RESULT",
    JSON.stringify({
      start,
      takeoff,
      after,
      dx: after.player.x - start.x,
      errors,
    }),
  );
  if (!process.env.BASELINE_PHYSICS) {
    assert(takeoff.player.vy < -400, "touch must jump");
    assert(
      after.player.x > start.x + 170,
      "quick tap must make forward progress",
    );
    assert(after.player.x > 5046, "clear the right edge");
    assert(!after.grounded, "must not be stuck");
  } else
    assert(
      Math.abs(after.player.x - start.x) < 1,
      "baseline should demonstrate trap",
    );
  if (!process.env.BASELINE_PHYSICS) {
    for (const b of JSON.parse(
      fs.readFileSync(path.join(__dirname, "l11-finish-plan.json")),
    )) {
      await touch(b);
      await p.evaluate(() => _qaStep(18));
    }
    assert(
      ["clearing", "clear"].includes(await p.evaluate(() => __game.state)),
      "continue to finish after leaving plate",
    );
    await p.evaluate(() => _qaStep(360));
    assert.equal(await p.evaluate(() => __game.state), "clear");
    console.log("FINISH PASS");
  }
  await browser.close();
  server.close();
  if (errors.length) throw Error(errors);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

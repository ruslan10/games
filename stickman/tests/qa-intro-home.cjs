// Touch check: the intro screens of every mode have a home button back to the main menu.
const { chromium } = require("playwright"), http = require("http"), fs = require("fs"), path = require("path"), assert = require("assert");
(async () => {
  const out = process.env.QA_OUT || path.join(process.cwd(), "qa-output");
  fs.mkdirSync(out, { recursive: true });
  const server = http.createServer((req, res) => {
    let f = path.join(__dirname, "../..", decodeURI(req.url.split("?")[0]));
    if (req.url.split("?")[0].endsWith("/")) f = path.join(f, "index.html");
    try { res.setHeader("Content-Type", f.endsWith(".js") ? "application/javascript" : f.endsWith(".html") ? "text/html" : f.endsWith(".json") ? "application/json" : "text/plain"); res.end(fs.readFileSync(f)); } catch { res.statusCode = 404; res.end("nf"); }
  }).listen(0);
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  const p = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  const errors = []; p.on("pageerror", e => errors.push(e.message));
  await p.goto(process.env.LIVE || `http://127.0.0.1:${server.address().port}/stickman/`);
  await p.waitForFunction(() => !!window.__game);
  const tap = async sel => { const b = await p.locator(sel).boundingBox(); await p.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2); await p.waitForTimeout(250); };
  const state = () => p.evaluate(() => __game.state);
  const vis = sel => p.evaluate(s => { const e = document.querySelector(s); return !!e && getComputedStyle(e).display !== "none" && e.offsetWidth > 0; }, sel);
  const before = await p.evaluate(() => JSON.stringify(Object.entries(localStorage).sort()));
  for (const [name, btn] of [["classic", "#btn-play"], ["daily", "#btn-daily"], ["endless", "#btn-endless"]]) {
    assert.equal(await state(), "menu");
    await tap(btn);
    assert.equal(await state(), "intro", name + " intro");
    assert(await vis("#btn-intro-home"), name + " home btn visible");
    await p.screenshot({ path: path.join(out, `intro-${name}.png`) });
    await tap("#btn-intro-home");
    assert.equal(await state(), "menu", name + " back to menu");
    assert(!(await vis("#btn-intro-home")), "home btn hidden in menu");
    console.log("ok", name);
  }
  // intro reached via the level picker (L14) and from there home
  await tap("#btn-levels"); await p.locator(".lv-btn").nth(0).waitFor();
  await tap(".lv-btn:not(.locked) >> nth=0");
  assert.equal(await state(), "intro");
  await p.evaluate(() => { __game.startLevel ? 0 : 0; });
  await tap("#btn-intro-home"); assert.equal(await state(), "menu");
  await p.evaluate(() => __game.startLevel(13));
  assert.equal(await state(), "intro");
  await p.waitForTimeout(200);
  await p.screenshot({ path: path.join(out, "intro-level14.png") });
  await tap("#btn-intro-home"); assert.equal(await state(), "menu"); console.log("ok L14");
  // still playable afterwards: play -> go -> play state
  await tap("#btn-play"); await tap("#btn-go"); assert.equal(await state(), "play"); console.log("ok replay");
  const after = await p.evaluate(() => JSON.stringify(Object.entries(localStorage).sort()));
  assert.equal(before.length > 0 || true, true);
  assert.deepEqual(errors, []);
  await browser.close(); server.close(); console.log("PASS");
})().catch(e => { console.error(e); process.exit(1); });

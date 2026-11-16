/* Targeted fruit-pickup radius check: teleports the player next to fresh
   fruits at exact distances and steps real frames. Hog magnet should reach
   ~70, other bodies ~34. */
const { chromium } = require("playwright");
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");

(async () => {
  const server = http.createServer((req, res) => {
    let p = path.join(ROOT, decodeURIComponent(req.url.split("?")[0]));
    if (p.endsWith("/")) p += "index.html";
    fs.readFile(p, (e, d) => {
      if (e) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { "content-type": p.endsWith(".js") ? "text/javascript" : p.endsWith(".html") ? "text/html" : "application/octet-stream" });
      res.end(d);
    });
  });
  await new Promise((r) => server.listen(0, r));

  const browser = await chromium.launch();
  const p = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  await p.addInitScript(() => {
    window.requestAnimationFrame = (fn) => { window._qaFrame = fn; return 1; };
    window._qaTime = 1000;
    window._qaStep = (n) => { for (let j = 0; j < n; j++) { window._qaTime += 1000 / 120; window._qaFrame(window._qaTime); } };
  });
  await p.goto(`http://127.0.0.1:${server.address().port}/stickman/`);
  await p.waitForFunction(() => !!window.__game);

  async function probe(body, dists) {
    return p.evaluate(({ body, dists }) => {
      const out = {};
      __game.startLevel(0);
      __game.beginPlay();
      _qaStep(2);
      const pl = __game.world.player;
      let fi = 0;
      for (const d of dists) {
        // find a fresh fruit
        while (fi < __game.fruits.length && __game.fruits[fi].taken) fi++;
        const f = __game.fruits[fi++];
        if (!f) break;
        pl.x = f.x + d; pl.y = f.y; pl.vx = 0; pl.vy = 0;
        _qaStep(2);
        out[body + "@" + d] = f.taken;
      }
      return out;
    }, { body, dists });
  }

  // default skin 0 = hog (magnet); skin 1 = rabbit body
  const hog = await probe("hog", [45, 65, 80, 100]);
  await p.evaluate(() => __game.setSkin(1));
  const other = await probe("other", [20, 33, 40, 60]);
  console.log(JSON.stringify({ hog, other, errors }, null, 1));

  const assert = require("assert");
  assert(hog["hog@45"] && hog["hog@65"], "hog picks up within 70");
  assert(!hog["hog@80"] && !hog["hog@100"], "hog does not pick up beyond 70");
  assert(other["other@20"] && other["other@33"], "others pick up within 34");
  assert(!other["other@40"] && !other["other@60"], "others do not pick up beyond 34");
  assert(errors.length === 0, "no page errors");
  console.log("FRUIT RADIUS PASS");
  await browser.close();
  server.close();
})().catch((e) => { console.error(e); process.exit(1); });

/* node stickman/tests/qa-char-unlocks.cjs
   Character-unlock pacing + character-select score display checks.
   Serves the game dir statically, seeds localStorage saves, opens the real
   character picker on a Pixel-6-like mobile viewport and asserts which cards
   are unlocked, the accumulated-score line, and the remaining-points badges.

   Options: BASE_URL (default http://127.0.0.1:8901), QA_OUT for screenshots. */
const { chromium } = require("playwright");
const assert = require("assert");
const path = require("path");

const BASE = process.env.BASE_URL || "http://127.0.0.1:8901";
const OUT = process.env.QA_OUT || path.join(__dirname, "qa-output");
const VIEW = { width: 412, height: 915 }; // Pixel 6 Chrome viewport

async function newPage(browser, seed) {
  const ctx = await browser.newContext({
    viewport: VIEW,
    hasTouch: true,
    isMobile: true,
    userAgent:
      "Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36",
  });
  if (seed) {
    await ctx.addInitScript((s) => {
      for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v);
    }, seed);
  }
  const page = await ctx.newPage();
  page.on("pageerror", (e) => {
    throw new Error("page error: " + e.message);
  });
  await page.goto(BASE + "/stickman/", { waitUntil: "load" });
  return { ctx, page };
}

async function openPicker(page) {
  await page.tap("#btn-chars");
  await page.waitForSelector("#charsel.show");
}

async function cardStates(page) {
  return page.$$eval("#char-grid .char-card", (cards) =>
    cards.map((c) => ({
      name: c.querySelector(".char-name").textContent,
      locked: c.classList.contains("locked"),
      req: (c.querySelector(".char-req") || {}).textContent || null,
    }))
  );
}

(async () => {
  const browser = await chromium.launch();
  let checks = 0;
  const ok = (cond, msg) => {
    assert(cond, msg);
    checks++;
    console.log("ok -", msg);
  };

  // A: player partway through level 3 with 830 total pts, migration already
  // applied -> only the default hedgehog may be selectable.
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_pts_0: "450",
      sh_pts_1: "380",
      sh_mig_rewards2: "1",
      sh_mig_rewards3: "1",
    });
    await openPicker(page);
    const total = await page.textContent("#char-total");
    ok(
      total.includes("830"),
      "picker shows accumulated score (got: " + total.trim() + ")"
    );
    const cards = await cardStates(page);
    ok(cards.length === 10, "10 character cards render");
    const unlocked = cards.filter((c) => !c.locked).map((c) => c.name);
    ok(
      unlocked.length === 1 && unlocked[0] === "קיפוד",
      "at 830 pts only the default hedgehog is unlocked (got: " +
        unlocked.join(",") +
        ")"
    );
    const rabbit = cards.find((c) => c.name === "ארנב");
    ok(
      rabbit.req.includes("1200") && rabbit.req.includes("חסרו 370"),
      "rabbit card shows cost and remaining (got: " + rabbit.req + ")"
    );
    const echidna = cards.find((c) => c.name === "איכידנה");
    ok(
      echidna.req.includes("19000") && echidna.req.includes("חסרו 18170"),
      "echidna card shows cost and remaining (got: " + echidna.req + ")"
    );
    // a locked card cannot be selected
    await page.tap("#char-grid .char-card.locked >> nth=0");
    const sel = await page.$$eval("#char-grid .char-card.sel .char-name", (n) =>
      n.map((x) => x.textContent)
    );
    ok(
      sel.length === 1 && sel[0] === "קיפוד",
      "tapping a locked card does not select it"
    );
    await page.screenshot({
      path: path.join(OUT, "charsel-early-player.png"),
      fullPage: false,
    });
    await ctx.close();
  }

  // B: save from the previous version at 830 pts (rewards2 migration already
  // applied back then, no rewards3 key yet) -> skins earned under the
  // outgoing goals (rabbit 150, robot 400, ninja 750, super 600) are
  // grandfathered by the new one-time migration.
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_pts_0: "450",
      sh_pts_1: "380",
      sh_mig_rewards2: "1",
    });
    await openPicker(page);
    const cards = await cardStates(page);
    const unlocked = cards.filter((c) => !c.locked).map((c) => c.name);
    for (const n of ["קיפוד", "ארנב", "רובוט", "נינג׳ה", "גיבור על"])
      ok(unlocked.includes(n), "grandfathered unlock kept: " + n);
    ok(
      !unlocked.includes("חתול"),
      "cat (old goal 1250) stays locked at 830 pts"
    );
    const flags = await page.evaluate(() => ({
      mig: localStorage.getItem("sh_mig_rewards3"),
      rabbit: localStorage.getItem("sh_unl_1"),
      super: localStorage.getItem("sh_unl_6"),
    }));
    ok(
      flags.mig === "1" && flags.rabbit === "1" && flags.super === "1",
      "migration marked old-goal unlocks permanently"
    );
    await ctx.close();
  }

  // C: brand-new player -> total 0 line and full remaining amounts.
  {
    const { ctx, page } = await newPage(browser, {});
    await openPicker(page);
    const total = await page.textContent("#char-total");
    ok(
      total.includes("0"),
      "new player sees an accumulated-score line (got: " + total.trim() + ")"
    );
    const cards = await cardStates(page);
    const rabbit = cards.find((c) => c.name === "ארנב");
    ok(
      rabbit.req.includes("חסרו 1200"),
      "new player sees full remaining amount (got: " + rabbit.req + ")"
    );
    await page.screenshot({
      path: path.join(OUT, "charsel-new-player.png"),
      fullPage: false,
    });
    await ctx.close();
  }

  // D: picker reopens with refreshed totals after points change (render is
  // live, not cached).
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_pts_0: "450",
      sh_pts_1: "380",
      sh_mig_rewards2: "1",
      sh_mig_rewards3: "1",
    });
    await openPicker(page);
    await page.evaluate(() => localStorage.setItem("sh_pts_1", "1380"));
    await page.tap("#btn-chars-x");
    await openPicker(page);
    const total = await page.textContent("#char-total");
    ok(
      total.includes("1830"),
      "total refreshes when the picker reopens (got: " + total.trim() + ")"
    );
    const cards = await cardStates(page);
    const rabbit = cards.find((c) => c.name === "ארנב");
    ok(!rabbit.locked, "rabbit unlocks once 1200 pts are reached");
    await ctx.close();
  }

  await browser.close();
  console.log("\n" + checks + " character-unlock checks passed");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

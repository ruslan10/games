/* node stickman/tests/qa-char-unlocks.cjs
   Character purchase economy + character-select score display checks.
   Serves the game dir statically, seeds localStorage saves, opens the real
   character picker on a Pixel-6-like mobile viewport and asserts the
   spendable-score line, remaining-points badges, and the purchase rules:
   every character switch costs its price, the price leaves the balance at
   once, and switching back has to be earned again (no free switching).

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
      sel: c.classList.contains("sel"),
      locked: c.classList.contains("locked"),
      buy: c.classList.contains("buy"),
      req: (c.querySelector(".char-req") || {}).textContent || null,
    }))
  );
}

let checks = 0;
function ok(cond, label) {
  checks++;
  if (!cond) throw new Error("FAIL: " + label);
  console.log("ok - " + label);
}

(async () => {
  const browser = await chromium.launch();

  // A: player partway through level 3 with 830 pts; an old sh_unl flag from
  // the pre-purchase versions must NOT make the rabbit free anymore.
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_pts_0: "450",
      sh_pts_1: "380",
      sh_mig_rewards2: "1",
      sh_mig_rewards3: "1",
      sh_unl_1: "1",
    });
    await openPicker(page);
    const total = await page.textContent("#char-total");
    ok(
      total.includes("830"),
      "picker shows spendable score (got: " + total.trim() + ")"
    );
    const cards = await cardStates(page);
    ok(cards.length === 10, "10 character cards render");
    const sel = cards.filter((c) => c.sel).map((c) => c.name);
    ok(
      sel.length === 1 && sel[0] === "קיפוד",
      "hedgehog is the current character (got: " + sel.join(",") + ")"
    );
    const rabbit = cards.find((c) => c.name === "ארנב");
    ok(
      rabbit.locked && rabbit.req.includes("1200") && rabbit.req.includes("חסרות 370"),
      "old unlock flags no longer grant the rabbit (got: " + rabbit.req + ")"
    );
    const echidna = cards.find((c) => c.name === "איכידנה");
    ok(
      echidna.req.includes("19000") && echidna.req.includes("חסרות 18170"),
      "echidna card shows cost and remaining (got: " + echidna.req + ")"
    );
    // an unaffordable card cannot be bought or selected
    await page.tap("#char-grid .char-card.locked >> nth=0");
    const sel2 = await page.$$eval("#char-grid .char-card.sel .char-name", (n) =>
      n.map((x) => x.textContent)
    );
    ok(
      sel2.length === 1 && sel2[0] === "קיפוד",
      "tapping an unaffordable card does not select it"
    );
    const spent = await page.evaluate(() => localStorage.getItem("sh_spent"));
    ok(spent === null, "tapping an unaffordable card spends nothing");
    await page.screenshot({
      path: path.join(OUT, "charsel-early-player.png"),
      fullPage: false,
    });
    await ctx.close();
  }

  // B: a non-default equipped skin stays equipped with no charge, and the
  // free hedgehog is offered as a free pick.
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_skin: "1",
      sh_pts_0: "450",
      sh_pts_1: "380",
      sh_mig_rewards2: "1",
      sh_mig_rewards3: "1",
    });
    await openPicker(page);
    const cards = await cardStates(page);
    const sel = cards.filter((c) => c.sel).map((c) => c.name);
    ok(sel.length === 1 && sel[0] === "ארנב", "equipped rabbit stays current");
    const hog = cards.find((c) => c.name === "קיפוד");
    ok(
      hog.buy && hog.req.includes("חינם"),
      "hedgehog is a free pick (got: " + hog.req + ")"
    );
    const spent = await page.evaluate(() => localStorage.getItem("sh_spent"));
    ok(spent === null, "keeping the equipped character costs nothing");
    await ctx.close();
  }

  // C: brand-new player -> zero balance line and full remaining amounts.
  {
    const { ctx, page } = await newPage(browser, {});
    await openPicker(page);
    const total = await page.textContent("#char-total");
    ok(
      total.includes("0"),
      "new player sees a score line (got: " + total.trim() + ")"
    );
    const cards = await cardStates(page);
    const rabbit = cards.find((c) => c.name === "ארנב");
    ok(
      rabbit.req.includes("חסרות 1200"),
      "new player sees full remaining amount (got: " + rabbit.req + ")"
    );
    await page.screenshot({
      path: path.join(OUT, "charsel-new-player.png"),
      fullPage: false,
    });
    await ctx.close();
  }

  // D: the full purchase loop at 1830 pts: buy the rabbit (1200 deducted at
  // once), switch back to the free hedgehog, and the rabbit has to be earned
  // again - it becomes affordable only once the balance covers it anew.
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_pts_0: "450",
      sh_pts_1: "1380",
      sh_mig_rewards2: "1",
      sh_mig_rewards3: "1",
    });
    await openPicker(page);
    let total = await page.textContent("#char-total");
    ok(total.includes("1830"), "balance 1830 before purchase");
    let cards = await cardStates(page);
    const rabbitCard = cards.find((c) => c.name === "ארנב");
    ok(
      rabbitCard.buy && rabbitCard.req.includes("לחצו לקנייה"),
      "affordable character is marked for purchase (got: " + rabbitCard.req + ")"
    );
    await page.screenshot({
      path: path.join(OUT, "charsel-affordable.png"),
      fullPage: false,
    });

    // buy the rabbit
    await page.tap("#char-grid .char-card.buy >> nth=0");
    let state = await page.evaluate(() => ({
      spent: localStorage.getItem("sh_spent"),
      skin: localStorage.getItem("sh_skin"),
    }));
    ok(
      state.spent === "1200" && state.skin === "1",
      "buying deducts the price at once and equips the character " +
        JSON.stringify(state)
    );
    total = await page.textContent("#char-total");
    ok(
      total.includes("630"),
      "balance drops to 630 after purchase (got: " + total.trim() + ")"
    );
    cards = await cardStates(page);
    ok(
      cards.find((c) => c.name === "ארנב").sel,
      "bought character is the current one"
    );
    const robotAfter = cards.find((c) => c.name === "רובוט");
    ok(
      robotAfter.req.includes("חסרות 3370"),
      "remaining amounts track the new balance (got: " + robotAfter.req + ")"
    );

    // switch back to the free hedgehog
    await page.tap("#char-grid .char-card.buy >> nth=0");
    state = await page.evaluate(() => ({
      spent: localStorage.getItem("sh_spent"),
      skin: localStorage.getItem("sh_skin"),
    }));
    ok(
      state.spent === "1200" && state.skin === "0",
      "switching to the free hedgehog costs nothing " + JSON.stringify(state)
    );
    cards = await cardStates(page);
    const rabbitAgain = cards.find((c) => c.name === "ארנב");
    ok(
      rabbitAgain.locked && rabbitAgain.req.includes("חסרות 570"),
      "the rabbit has to be earned again (got: " + rabbitAgain.req + ")"
    );
    await page.screenshot({
      path: path.join(OUT, "charsel-after-switch.png"),
      fullPage: false,
    });

    // earn enough again -> the rabbit is buyable once more
    await page.evaluate(() => localStorage.setItem("sh_pts_1", "2000"));
    await page.tap("#btn-chars-x");
    await openPicker(page);
    cards = await cardStates(page);
    ok(
      cards.find((c) => c.name === "ארנב").buy,
      "rabbit is buyable again after earning the points anew"
    );
    await ctx.close();
  }

  // E: equipped skin and spent points survive a reload.
  {
    const { ctx, page } = await newPage(browser, {
      sh_level: "3",
      sh_pts_0: "450",
      sh_pts_1: "1380",
      sh_spent: "1200",
      sh_skin: "1",
      sh_mig_rewards2: "1",
      sh_mig_rewards3: "1",
    });
    await openPicker(page);
    const total = await page.textContent("#char-total");
    ok(total.includes("630"), "balance persists across reload");
    const cards = await cardStates(page);
    ok(
      cards.find((c) => c.name === "ארנב").sel,
      "equipped character persists across reload"
    );
    await ctx.close();
  }

  await browser.close();
  console.log("\n" + checks + " character-purchase checks passed");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

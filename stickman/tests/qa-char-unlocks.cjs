/* Permanent ownership, one-time spending and evidence-only save recovery.
   Pixel 6 mobile Chromium. BASE_URL can target a deployed games site. */
const { chromium } = require('playwright');
const assert = require('assert');
const http = require('http'), fs = require('fs'), path = require('path');
const OUT = process.env.QA_OUT || path.join(__dirname, 'qa-output');
fs.mkdirSync(OUT, {recursive:true});
let checks = 0;
function ok(value, label) { assert(value, label); checks++; console.log('ok - ' + label); }
(async () => {
  const root = path.join(__dirname, '../..');
  const server = http.createServer((req,res) => {
    let file = path.join(root, decodeURI(req.url.split('?')[0]));
    if (file.endsWith('/')) file += 'index.html';
    fs.readFile(file, (err,data) => { res.statusCode = err ? 404 : 200;
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html');
      res.end(err ? 'not found' : data); });
  }).listen(0);
  await new Promise(r => server.on('listening', r));
  const base = process.env.BASE_URL || `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const errors = [];
  async function pageWith(seed) {
    const ctx = await browser.newContext({viewport:{width:412,height:915},hasTouch:true,isMobile:true,
      userAgent:'Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36'});
    const p = await ctx.newPage(); p.on('pageerror', e => errors.push(e.message));
    await p.goto(base + '/stickman/');
    await p.evaluate(s => {localStorage.clear(); for(const [k,v] of Object.entries(s)) localStorage.setItem(k,v);}, seed);
    await p.reload(); await p.tap('#btn-chars'); return {ctx,p};
  }
  async function state(p) { return p.evaluate(() => ({spent:localStorage.getItem('sh_spent'), skin:localStorage.getItem('sh_skin'), balance:__game.balance(),total:__game.totalPts(),saved:Object.fromEntries(Object.entries(localStorage))})); }
  async function card(p,i) { return p.locator('.char-card').nth(i).evaluate(c => ({locked:c.classList.contains('locked'),owned:c.classList.contains('owned'),sel:c.classList.contains('sel'),buy:c.classList.contains('buy'),text:c.innerText})); }
  async function tap(p,i) { await p.locator('.char-card').nth(i).tap(); }
  {
    const {ctx,p} = await pageWith({sh_pts_0:'1830',sh_level:'3',sh_best_0:'12.34',sh_pct:'67',sh_mute:'1'});
    ok((await state(p)).balance === 1830,'original balance shown');
    ok((await p.locator('.char-card').count()) === 10,'all ten cards render');
    ok((await card(p,1)).buy,'affordable new rabbit offered for purchase');
    await tap(p,1);
    let s = await state(p);
    ok(s.spent === '1200' && s.balance === 630 && s.skin === '1','buy deducts exactly once and equips rabbit');
    ok(s.saved.sh_unl_1 === '1','purchase is saved as permanent ownership');
    await tap(p,1); ok((await state(p)).spent === '1200','tapping equipped skin never charges');
    await tap(p,0); s = await state(p);
    ok(s.skin === '0' && s.balance === 630,'switch to default free');
    ok((await card(p,1)).owned && (await card(p,1)).text.includes('שלך'),'rabbit visibly remains yours');
    await p.screenshot({path:path.join(OUT,'permanent-owned-after-switch.png')});
    await tap(p,1); s = await state(p);
    ok(s.skin === '1' && s.balance === 630 && s.spent === '1200','switch back to owned rabbit free despite low balance');
    ok((await card(p,2)).text.includes('חסרות 3370'),'new character needs more earnings');
    await tap(p,2); ok((await state(p)).skin === '1','unaffordable new character cannot be equipped');
    ok((await state(p)).spent === '1200','unaffordable tap spends nothing');
    await p.reload(); await p.tap('#btn-chars');
    s = await state(p); ok(s.skin === '1' && s.balance === 630,'purchase and balance survive reload');
    await tap(p,0); await tap(p,1); ok((await state(p)).spent === '1200','ownership survives reload and free switches');
    ok(s.saved.sh_level === '3' && s.saved.sh_best_0 === '12.34' && s.saved.sh_pct === '67' && s.saved.sh_mute === '1','level, best time, percent and mute unchanged');
    await p.evaluate(() => localStorage.setItem('sh_pts_1','3370'));
    await p.tap('#btn-chars-x'); await p.tap('#btn-chars');
    ok((await card(p,2)).buy,'new earnings make the robot affordable');
    await tap(p,2); s = await state(p);
    ok(s.balance === 0 && s.spent === '5200' && s.skin === '2','second new purchase deducts its own full price');
    await tap(p,1); await tap(p,2); ok((await state(p)).balance === 0 && (await state(p)).spent === '5200','both bought characters usable free at zero balance');
    await p.screenshot({path:path.join(OUT,'permanent-two-purchases.png')});
    await ctx.close();
  }
  {
    const {ctx,p} = await pageWith({sh_pts_0:'830',sh_unl_1:'1',sh_unl_6:'1',sh_mig_rewards3:'1'});
    ok((await card(p,1)).owned && (await card(p,6)).owned,'recorded legacy unlocks preserved');
    await tap(p,1); await tap(p,6);
    ok((await state(p)).spent === null && (await state(p)).balance === 830,'legacy ownership costs no points');
    ok((await card(p,2)).locked,'unrecorded legacy skins not invented');
    await ctx.close();
  }
  {
    const {ctx,p} = await pageWith({sh_pts_0:'1830',sh_spent:'1200',sh_skin:'1'});
    ok((await state(p)).saved.sh_unl_1 === '1','equipped character recovered from faulty version');
    await tap(p,0); await p.reload(); await p.tap('#btn-chars'); await tap(p,1);
    ok((await state(p)).skin === '1' && (await state(p)).spent === '1200','recovered character stays owned after reload');
    ok((await card(p,2)).locked,'spending total does not fabricate other ownership');
    await ctx.close();
  }
  {
    const {ctx,p} = await pageWith({sh_pts_0:'5200',sh_spent:'5200',sh_skin:'0'});
    ok((await card(p,1)).locked && (await card(p,2)).locked,'ambiguous spending not converted into guessed purchase history');
    ok((await state(p)).spent === '5200','historical spending left intact');
    await ctx.close();
  }
  {
    const {ctx,p} = await pageWith({sh_pts_0:'50000',sh_level:'30'});
    ok((await card(p,1)).buy && !(await card(p,1)).owned,'high score and level never grant unbought ownership');
    await ctx.close();
  }
  {
    const all = Object.fromEntries(Array.from({length:10},(_,i)=>['sh_unl_'+i,'1']));
    const {ctx,p} = await pageWith(all);
    await p.tap('#btn-chars-x');
    await p.evaluate(() => {__game.startLevel(0); __game.beginPlay(); __game.win();});
    await p.waitForSelector('#clear.show');
    ok((await p.textContent('#clear-time')).includes('כל הדמויות נרכשו'),'win screen recognizes full ownership');
    await ctx.close();
  }
  ok(errors.length === 0,'no JavaScript errors');
  await browser.close(); server.close();
  console.log(checks + ' permanent-ownership checks passed');
})().catch(e => {console.error(e);process.exit(1);});

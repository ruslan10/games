const {chromium}=require('../runner/node_modules/playwright');
const {serve}=require('../runner/tests/server.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const {server,url}=await serve();const browser=await chromium.launch();let checks=0;
 const ok=(v,s)=>{assert(v,s);console.log('ok - '+s);checks++;};
 const next='abcdef1234567890';
 async function setup(path,kind='new'){
  const ctx=await browser.newContext({viewport:{width:412,height:915},isMobile:true,hasTouch:true});
  const page=await ctx.newPage();let published=false;const errors=[];
  const current=JSON.parse(fs.readFileSync('version.json','utf8')).release;
  const release=async()=>{published=true;await page.evaluate(()=>{const original=Date.now;Date.now=()=>original()+61000;dispatchEvent(new Event('online'));});};
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/version.json?*',async route=>{
   if(!published)return route.fulfill({contentType:'application/json',body:JSON.stringify({release:current})});
   if(kind==='offline')return route.abort('internetdisconnected');
   await route.fulfill({contentType:'application/json',body:JSON.stringify({release:kind==='invalid'?'invalid':next})});});
  await page.route('**/*',async route=>{
   const req=route.request();if(req.isNavigationRequest()&&new URL(req.url()).searchParams.has('gv')){
    const response=await route.fetch();const body=(await response.text()).replace(/(name="games-release" content=")[^"]+/, '$1'+next);
    return route.fulfill({response,body});
   }return route.fallback();
  });
  await page.goto(url+path);
  return {ctx,page,release,errors};
 }
 for(const path of ['/','/stickman/','/runner/']){
  const {ctx,page,release,errors}=await setup(path);
  await page.evaluate(()=>{localStorage.setItem('qa-save','keep');localStorage.setItem('qa-owned','rabbit');});
  const before=await page.evaluate(()=>JSON.stringify({...localStorage}));await release();
  await page.waitForURL('**/*gv=*');await page.waitForLoadState('load');
  ok(await page.evaluate(()=>JSON.stringify({...localStorage}))===before,path+' refresh preserves every save byte');
  ok(new URL(page.url()).searchParams.get('gv')===next,path+' menu refreshes to detected release');
  ok(errors.length===0,path+' no JS errors');await page.screenshot({path:'/downloads/update-'+(path==='/'?'home':path.split('/')[1])+'.png'});await ctx.close();
 }
 {
  const {ctx,page,release}=await setup('/stickman/');
  await page.tap('#btn-play');await page.tap('#btn-go');
  ok(await page.evaluate(()=>__game.state)==='play','stickman real controls enter play');
  await release();await page.waitForTimeout(1500);ok(!page.url().includes('gv='),'stickman active level is not interrupted');
  await page.tap('#btn-pause');await page.waitForTimeout(1200);ok(!page.url().includes('gv='),'stickman pause preserves run');
  await page.tap('#btn-home');await page.waitForURL('**/*gv=*');ok(true,'stickman applies update after leaving level');await ctx.close();
 }
 {
  const {ctx,page,release}=await setup('/runner/');
  await page.tap('#play');if(await page.evaluate(()=>__runner.mode)==='playing')await page.keyboard.press('Escape');await release();await page.waitForTimeout(1300);
  ok(await page.evaluate(()=>__runner.mode)==='paused','runner remains paused with update pending');ok(!page.url().includes('gv='),'runner pause is not discarded');
  await page.tap('#home');await page.waitForURL('**/*gv=*');ok(true,'runner applies only after banking and returning home');await ctx.close();
 }
 {
  const {ctx,page,release}=await setup('/stickman/');await page.tap('#btn-chars');await release();await page.waitForTimeout(1300);
  ok(!page.url().includes('gv='),'character picker is not interrupted');await ctx.close();
 }
 for(const kind of ['offline','invalid']){
  const {ctx,page,release,errors}=await setup('/',kind);await release();await page.waitForTimeout(1100);
  ok(!page.url().includes('gv=')&&errors.length===0,kind+' check leaves page usable');await ctx.close();
 }
 await browser.close();server.close();console.log('PASS '+checks+' update checks');
})().catch(e=>{console.error(e);process.exit(1)});

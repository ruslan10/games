/* Replay persistence regression: state-level wins isolate storage behavior.
   Real-pointer completion/visual coverage is separate in check.cjs. */
const {chromium}=require('playwright');
const assert=require('assert'),http=require('http'),fs=require('fs'),path=require('path');
const server=http.createServer((req,res)=>{let f=path.join(__dirname,'../..',decodeURI(req.url.split('?')[0]));if(req.url.split('?')[0].endsWith('/'))f=path.join(f,'index.html');try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.html')?'text/html':'text/plain');res.end(fs.readFileSync(f))}catch{res.statusCode=404;res.end('not found')}}).listen(0);
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const p=await browser.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.addInitScript(()=>{window.requestAnimationFrame=f=>{window._frame=f;return 1};window._time=1000;window._step=n=>{for(let i=0;i<n;i++){_time+=1000/120;_frame(_time)}}});
 await p.goto(process.env.LIVE||`http://127.0.0.1:${server.address().port}/stickman/`);await p.waitForFunction(()=>!!window.__game);await p.evaluate(()=>_frame(_time));
 const result=await p.evaluate(()=>{
  const check=(v,m)=>{if(!v)throw Error(m)};const g=__game;
  localStorage.setItem('sh_best_0','0.1');localStorage.setItem('sh_level','9');
  const run=(ticks)=>{g.startLevel(0);g.beginPlay();_step(ticks);g.win()};
  const replayKey=()=>Object.keys(localStorage).find(k=>/^sh_ghost_l0:/.test(k));
  run(480);const k=replayKey();check(k,'first replay saved despite legacy best');const first=localStorage.getItem(k);
  check(g.store().best(0)===0.1,'legacy best untouched');check(localStorage.getItem('sh_level')==='9','progress untouched');
  run(600);check(localStorage.getItem(k)===first,'slower replay preserved');
  run(360);const faster=localStorage.getItem(k);check(faster!==first,'faster recorded replay replaces first despite old best');
  run(480);check(localStorage.getItem(k)===faster,'fastest replay preserved');
  g.startLevel(0);check(g.ghostData?.length>10,'replay loads on retry');
  // Simulate legacy replay arrays that have no companion duration.
  const tk=k.replace('sh_ghost_','sh_ghost_time_');localStorage.removeItem(tk);run(240);check(localStorage.getItem(k)!==faster,'legacy replay migrates by sample duration');
  // Daily uses the same fallback without changing its historical time.
  g.startDaily('2026-11-17');const d=g.dailyKey;localStorage.setItem('sh_daily_time_'+d,'0.1');g.beginPlay();_step(240);g.win();
  check(Object.keys(localStorage).some(k=>k.startsWith('sh_ghost_d'+d+':')),'daily first replay saved');check(g.store().dailyTime(d)===0.1,'daily old best unchanged');
  return {classic:true,slowerPreserved:true,fasterReplaced:true,legacyArray:true,progress:true,daily:true};
 });assert.deepStrictEqual(errors,[]);
 await p.evaluate(()=>_step(240));
 await p.click('#btn-next');
 await p.click('#btn-levels');
 assert.equal(await p.locator('#level-grid button:not([disabled])').count(),9,'current picker retains L9');
 await p.reload();await p.waitForFunction(()=>!!window.__game);await p.evaluate(()=>_frame(_time));
 await p.click('#btn-levels');
 assert.equal(await p.locator('#level-grid button:not([disabled])').count(),9,'reload picker retains L9');
 await p.evaluate(()=>{__game.startLevel(8);__game.beginPlay();_step(240);__game.win()});
 assert.equal(await p.evaluate(()=>__game.store().level),10,'next advancement still works');
 console.log('GHOST PERSISTENCE PASS',result,'current picker + reload + advancement PASS');await browser.close();server.close();
})().catch(e=>{console.error(e);server.close();process.exit(1)});

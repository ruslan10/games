const {chromium}=require('playwright');
const http=require('http'),fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(f.endsWith('/'))f+='index.html';fs.readFile(f,(err,b)=>{if(err){res.writeHead(404);return res.end()}res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.html')?'text/html':'application/octet-stream');res.end(b)})});
(async()=>{
 await new Promise(r=>server.listen(0,r));
 const browser=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const errors=[],thresholds=[0,20,60,120,240];
 for(const width of [320,390,900]){
  const c=await browser.newContext({viewport:{width,height:900},isMobile:width<700,hasTouch:width<700});
  const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));
  await p.goto(`http://127.0.0.1:${server.address().port}/monster-lab/`);
  for(const xp of [0,19,20,59,60,119,120,239,240,10000]){
   await p.evaluate(x=>localStorage.setItem('monster-lab:v1',JSON.stringify({xp:x,voice:false,band:1,medals:{feed1:2},times:{learned:{2:1},stars:{2:3}}})),xp);
   await p.reload();await p.evaluate(()=>document.fonts.ready);
   assert.equal(await p.locator('.discovery').count(),5);
   assert.equal(await p.locator('.discovery.unlocked').count(),thresholds.filter(t=>xp>=t).length);
   const cards=await p.locator('.discovery').allTextContents();
   thresholds.forEach((at,i)=>{assert(cards[i].includes(xp>=at?'באוסף שלכם':`עוד ${at-xp} גבישים לפתיחה`))});
   assert.equal(await p.locator('.collection button').count(),0);
   assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
   const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem('monster-lab:v1')));
   assert.equal(saved.xp,xp);assert.equal(saved.medals.feed1,2);assert.equal(saved.times.learned[2],1);
   if((width===320&&xp===0)||(width===900&&xp===60))await p.locator('.collection').screenshot({path:`/downloads/discovery-${width}-${xp}.png`});
  }
  console.log('PASS boundaries, saves, overflow at width',width);await c.close();
 }
 const c=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await c.addInitScript(()=>{if(!localStorage.getItem('monster-lab:v1'))localStorage.setItem('monster-lab:v1',JSON.stringify({xp:19,voice:false}))});
 const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(`http://127.0.0.1:${server.address().port}/monster-lab/`);
 await p.locator('[data-station="feed"]').tap();await p.locator('#lessonGo').tap();
 const q=(await p.evaluate(()=>MonsterLab.getState())).q;
 for(let i=0;i<Math.floor(q.target/10);i++)await p.locator('#srcRod').tap();
 for(let i=0;i<q.target%10;i++)await p.locator('#srcCube').tap();
 await p.locator('#check').tap();assert.equal((await p.evaluate(()=>MonsterLab.getState())).done,true);
 assert.equal(await p.evaluate(()=>JSON.parse(localStorage.getItem('monster-lab:v1')).xp),22);
 await p.locator('#exit').tap();await p.locator('[data-modal="1"]').tap();
 assert.equal(await p.locator('.discovery.unlocked').count(),2);
 assert((await p.locator('.collection-progress').textContent()).includes('22'));
 await p.reload();assert.equal(await p.locator('.discovery.unlocked').count(),2);
 assert.deepEqual(errors,[]);console.log('PASS real touch correct answer 19 to 22, automatic unlock, return home, reload, no page errors');
 await browser.close();server.close();
})().catch(e=>{console.error(e);server.close();process.exit(1)});

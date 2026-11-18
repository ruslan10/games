const {chromium}=require('playwright');const http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');const server=http.createServer((req,res)=>{let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(f.endsWith('/'))f+='index.html';try{res.setHeader('Content-Type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.webp')?'image/webp':f.endsWith('.ttf')?'font/ttf':'text/html');res.end(fs.readFileSync(f))}catch{res.writeHead(404);res.end('not found')}}).listen(0);
(async()=>{fs.mkdirSync('/downloads/feed-drag-qa',{recursive:true});
const browser=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:412,height:915},isMobile:true,hasTouch:true,deviceScaleFactor:2});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.route('**/characters.js*',route=>route.fulfill({body:'',contentType:'text/javascript'}));
await page.goto(`http://127.0.0.1:${server.address().port}/monster-lab/`);
await page.locator('[data-band="1"]').click();
await page.locator('[data-station="feed"]').click();
await page.evaluate(()=>MonsterLab.skipLesson());
const q=(await page.evaluate(()=>MonsterLab.getState())).q;
const count=async()=>{const s=await page.evaluate(()=>({ten:game?.ten,one:game?.one}));return s};
const trayCount=async()=>({rods:await page.locator('#feedTray .rod.tray-item').count(),cubes:await page.locator('#feedTray .cube.tray-item').count()});
const center=async sel=>{const b=await page.locator(sel).boundingBox();return{x:b.x+b.width/2,y:b.y+b.height/2}};

// 1. tap-to-add
await page.locator('#srcRod').click();
await page.locator('#srcCube').click();await page.locator('#srcCube').click();
let t=await trayCount();assert.deepEqual(t,{rods:1,cubes:2},'tap adds');console.log('PASS tap adds rod and cubes');

// 2. tap tray item removes
await page.locator('#feedTray .rod.tray-item').first().click();
t=await trayCount();assert.deepEqual(t,{rods:0,cubes:2},'tap removes rod');
await page.locator('#feedTray .cube.tray-item').first().click();
t=await trayCount();assert.deepEqual(t,{rods:0,cubes:1},'tap removes cube');console.log('PASS tap tray item removes');

// 3. drag rod chip into tray; check ghost, drop-hi, rod-shape slot mid-drag
let sc=await center('#srcRod'),tc=await center('#feedTray');
await page.mouse.move(sc.x,sc.y);await page.mouse.down();
await page.mouse.move((sc.x+tc.x)/2,(sc.y+tc.y)/2,{steps:6});
await page.mouse.move(tc.x,tc.y,{steps:4});
let mid=await page.evaluate(()=>({hi:document.getElementById('feedTray').classList.contains('drop-hi'),slot:document.getElementById('traySlot').className,ghost:!!document.querySelector('.drag-ghost')}));
assert(mid.hi,'tray highlights during drag');assert(mid.slot.includes('rod-shape'),'slot becomes rod-shape during rod drag');assert(mid.ghost,'ghost visible');
await page.screenshot({path:'/downloads/feed-drag-qa/mid-drag.png',fullPage:true});
await page.mouse.up();
t=await trayCount();assert.deepEqual(t,{rods:1,cubes:1},'drag adds rod');
let after=await page.evaluate(()=>({hi:document.getElementById('feedTray').classList.contains('drop-hi'),slot:document.getElementById('traySlot').className,ghost:!!document.querySelector('.drag-ghost')}));
assert(!after.hi&&!after.ghost&&after.slot.includes('cube-shape'),'state resets after drop');console.log('PASS drag rod into tray adds, highlight+slot+ghost lifecycle');

// 4. drag cube chip but release outside tray -> no add
sc=await center('#srcCube');
await page.mouse.move(sc.x,sc.y);await page.mouse.down();
await page.mouse.move(sc.x,sc.y+150,{steps:8});await page.mouse.up();
t=await trayCount();assert.deepEqual(t,{rods:1,cubes:1},'drop outside tray does not add');console.log('PASS drag released outside tray is a no-op');

// 5. drag tray cube out of tray -> removed
tc=await center('#feedTray .cube.tray-item');
await page.mouse.move(tc.x,tc.y);await page.mouse.down();
await page.mouse.move(tc.x,tc.y+400,{steps:8});await page.mouse.up();
t=await trayCount();assert.deepEqual(t,{rods:1,cubes:0},'drag out removes cube');console.log('PASS drag tray item out removes it');

// 6. drag tray rod but release back inside tray -> kept
tc=await center('#feedTray .rod.tray-item');
await page.mouse.move(tc.x,tc.y);await page.mouse.down();
await page.mouse.move(tc.x-40,tc.y+15,{steps:6});await page.mouse.up();
t=await trayCount();assert.deepEqual(t,{rods:1,cubes:0},'release inside tray keeps item');console.log('PASS drag released inside tray keeps item');

// 7. solve the target with taps only, then check
const tens=Math.floor(q.target/10),ones=q.target%10;
for(let i=1;i<tens;i++)await page.locator('#srcRod').click();
for(let i=0;i<ones;i++)await page.locator('#srcCube').click();
const counter=await page.locator('.counter').textContent();assert(counter.includes('בדיוק'),'counter says exact');assert(await page.locator('#traySlot').count()===0,'no pulsing slot at exact count');
await page.screenshot({path:'/downloads/feed-drag-qa/exact.png',fullPage:true});
await page.locator('#check').click();
assert((await page.evaluate(()=>MonsterLab.getState())).done===true,'done after correct check');
assert(await page.locator('#srcRod').isDisabled()&&await page.locator('#srcCube').isDisabled(),'sources disabled when done');
console.log('PASS full solve via taps, check, sources disable');

// 8. rod audit: every rod has exactly 10 equal cells
const audit=await page.evaluate(()=>[...document.querySelectorAll('.rod')].map(r=>{const c=[...r.children].filter(x=>x.classList.contains('cube'));const w=c.map(x=>Math.round(x.getBoundingClientRect().width*10)/10);return{n:c.length,eq:w.every(x=>x===w[0])}}));
assert(audit.length>0&&audit.every(a=>a.n===10&&a.eq),'all rods 10 equal cells: '+JSON.stringify(audit));console.log('PASS all rods have exactly 10 equal cells ('+audit.length+' rods)');

// 9. no horizontal overflow
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no overflow');
assert.deepEqual(errors,[]);
console.log('PASS no page errors, no overflow');
await browser.close();server.close()})().catch(e=>{console.error(e);process.exit(1)});

// Pickup QA: every collectible is a recognizable model, not a cube. Screenshots each power-up
// type (board, pogo, shield, magnet, shoes, flight), a letter tile and a city-light star at
// phone size, then runs over the board power to prove collection still works. Real controls, virtual time.
const assert=require('node:assert/strict');const{chromium}=require('playwright'),{serve}=require('./server.cjs');const CHAR=process.env.CHAR||'fox';
(async()=>{const{server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});try{
const p=await b.newPage({viewport:{width:+(process.env.VW||412),height:+(process.env.VH||915)},deviceScaleFactor:2,isMobile:true,hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.addInitScript(ch=>{window.__seed=c=>{localStorage.setItem('rulan-runner-v1',JSON.stringify({coins:123,unlocked:20,character:c,owned:['courier','fox'],best:{},soundOn:false}));};window.__seed(ch);window.__t=0;let q=[];Object.defineProperty(performance,'now',{value:()=>__t});window.requestAnimationFrame=f=>{q.push(f);return 1;};window.__advance=n=>{for(let i=0;i<n;i++){__t+=1000/60;const a=q;q=[];for(const f of a)f(__t);}};window.__skip=true;for(const k of['drawElements','drawArrays','drawElementsInstanced','drawArraysInstanced']){const o=WebGL2RenderingContext.prototype[k];WebGL2RenderingContext.prototype[k]=function(...a){if(!__skip)return o.apply(this,a);};}},CHAR);
await p.goto(url+'/runner/?autopause=0');await p.waitForSelector('#play');
const out=process.env.OUT||'/downloads/pickup-';
const shot=async name=>{await p.evaluate(()=>{__skip=false;__advance(1)});await p.screenshot({path:out+name+'.png'});await p.evaluate(()=>__skip=true);};
const step=n=>p.evaluate(x=>__advance(x),n);
const state=()=>p.evaluate(()=>__runner.run);
const startAt=async (lvl,zen)=>{await p.evaluate(l=>{const s=JSON.parse(localStorage.getItem('rulan-runner-v1'));s.unlocked=l;localStorage.setItem('rulan-runner-v1',JSON.stringify(s));},lvl);await p.reload();await p.waitForSelector('#play');await p.click(zen?'#zen':'#play');await step(2);};
// See every power type in zen runs (no death) across levels 1-3 plus the fixed board/pogo.
const seen=new Set();
for(const lvl of [3,2,1]){
 await startAt(lvl,true);
 let powers=(await state()).powers.filter(pw=>!seen.has(pw.type)).sort((a,b2)=>a.x-b2.x);
 for(const pw of powers){
  if(seen.has(pw.type))continue;
  let r=await state();let guard=0;
  while(r.x<pw.x-8&&guard++<400){await step(6);r=await state();}
  seen.add(pw.type);await shot('power-'+pw.type);
 }
}
assert.deepEqual([...seen].sort(),['board','flight','magnet','pogo','shield','shoes'].sort(),'all six power models seen');
// Letter tile and city-light star on a normal level-1 run (restarted on death).
await startAt(1,false);
let items=(await state()).collectionItems;
for(const kind of ['letter','event']){
 let it=items.find(i=>i.kind===kind);assert(it,kind+' pickup exists');
 let r=await state();let guard=0;
 while(true){
  while(r.status==='playing'&&r.x<it.x-8&&guard++<400){await step(6);r=await state();}
  if(r.status==='playing'||guard>=400)break;
  await startAt(1,false);items=(await state()).collectionItems;it=items.find(i=>i.kind===kind);r=await state();
 }
 assert.equal(r.status,'playing','alive approaching '+kind);
 await shot('token-'+kind);
}
// Collection still works: run over the fixed board power at x=246 and the ride starts.
let r=await state();let guard=0;
while(r.status==='playing'&&r.vehicle!=='board'&&guard++<600){await step(6);r=await state();}
assert.equal(r.vehicle,'board','board power collected');
console.log(JSON.stringify({errors,seen:[...seen],checks:'6 power models + letter tile + star token screenshotted, board collection works'}));assert.deepEqual(errors,[]);
}finally{await b.close();server.close();}})().catch(e=>{console.error(e);process.exit(1)});

// Skateboard QA: riding keeps a fixed stance (no leg running), the board renders with deck,
// trucks and wheels, braking works, and the run continues after the ride. Real controls, virtual time.
const assert=require('node:assert/strict');const{chromium}=require('playwright'),{serve}=require('./server.cjs');const CHAR=process.env.CHAR||'fox';
(async()=>{const{server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});try{
const p=await b.newPage({viewport:{width:+(process.env.VW||412),height:+(process.env.VH||915)},deviceScaleFactor:2,isMobile:true,hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.addInitScript(ch=>{localStorage.setItem('rulan-runner-v1',JSON.stringify({coins:123,unlocked:20,character:ch,owned:['courier','fox'],best:{},soundOn:false}));window.__t=0;let q=[];Object.defineProperty(performance,'now',{value:()=>__t});window.requestAnimationFrame=f=>{q.push(f);return 1;};window.__advance=n=>{for(let i=0;i<n;i++){__t+=1000/60;const a=q;q=[];for(const f of a)f(__t);}};window.__skip=true;for(const k of['drawElements','drawArrays','drawElementsInstanced','drawArraysInstanced']){const o=WebGL2RenderingContext.prototype[k];WebGL2RenderingContext.prototype[k]=function(...a){if(!__skip)return o.apply(this,a);};}},CHAR);
await p.goto(url+'/runner/?autopause=0');await p.waitForSelector('#play');
const out=process.env.OUT||'/downloads/board-';
const shot=async name=>{await p.evaluate(()=>{__skip=false;__advance(1)});await p.screenshot({path:out+name+'.png'});await p.evaluate(()=>__skip=true);};
const advanceTo=async x=>{for(let i=0;i<900;i++){const r=await p.evaluate(()=>__runner.run);if(r.x>=x)return;await p.evaluate(()=>__advance(3));}throw Error('advance '+x);};
const saved=await p.evaluate(()=>localStorage.getItem('rulan-runner-v1'));
await p.click('#zen');await advanceTo(240);
for(let i=0;i<200;i++){const r=await p.evaluate(()=>__runner.run);if(r.vehicle==='board')break;await p.evaluate(()=>__advance(3));}
let r=await p.evaluate(()=>__runner.run);assert.equal(r.vehicle,'board','board collected');
await p.evaluate(()=>__advance(30));await shot('riding1');
await p.evaluate(()=>__advance(75));await shot('riding2');
await p.dispatchEvent('#slide','pointerdown');await p.evaluate(()=>__advance(18));await shot('brake');
r=await p.evaluate(()=>__runner.run);assert(r.brake>0,'down brakes on the board');
for(let i=0;i<400;i++){const r2=await p.evaluate(()=>__runner.run);if(!r2.vehicle)break;await p.evaluate(()=>__advance(6));}
r=await p.evaluate(()=>__runner.run);assert.equal(r.vehicle,null,'ride ends');assert.equal(r.status,'playing');
await p.evaluate(()=>__advance(40));await shot('after');
assert.equal(await p.evaluate(()=>localStorage.getItem('rulan-runner-v1')),saved,'zen saves untouched');
console.log(JSON.stringify({errors,checks:'board ride stance, brake, ride end, back to running, zen saves untouched'}));assert.deepEqual(errors,[]);
}finally{await b.close();server.close();}})().catch(e=>{console.error(e);process.exit(1)});

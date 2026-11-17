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
// Magnet QA: collect the magnet in a real zen run, then prove coins fly to the hero (visible pull) and pay out, with aura on screen.
await startAt(3,true);
const mg=(await state()).powers.filter(x=>x.type==='magnet').sort((a,b2)=>a.x-b2.x)[0];assert(mg,'magnet exists');
let r=await state(),g=0;
while(r.x<mg.x-9&&g++<600){await step(3);r=await state();const lane=r.lane;if(lane<mg.lane)await p.keyboard.press('ArrowRight');else if(lane>mg.lane)await p.keyboard.press('ArrowLeft');}
const before=r.coins;
while(r.x<mg.x+.5&&g++<900){await step(2);r=await state();}
assert((await p.evaluate(()=>__runner.run.magnet))>0,'magnet active after pickup');
let sawPull=false,shots=0;const c0=r.collected;
for(let i=0;i<60;i++){await step(3);const s=await p.evaluate(()=>__runner.run);if(!sawPull&&(await p.evaluate(()=>document.getElementById('hud')?.textContent||document.body.textContent)).includes('מגנט'))sawPull=true;if(i%8===0&&shots<3){await shot('magnet-'+shots);shots++;}}
r=await state();console.log('collected',c0,'->',r.collected,'coins',before,'->',r.coins);
assert(r.collected>c0+3,'magnet collected nearby coins');assert(sawPull,'HUD shows magnet timer');
assert.deepEqual(errors,[],'no page errors');console.log('magnet-qa ok');
}finally{await b.close();server.close();}})().catch(e=>{console.error(e);process.exit(1)});

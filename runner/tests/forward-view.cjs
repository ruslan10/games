// Forward-view QA: during elevated routes, jumps and landings, the hero must not cover the road ahead. Real controls, virtual time.
const{chromium}=require('playwright'),{serve}=require('./server.cjs');
(async()=>{const{server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});try{
const p=await b.newPage({viewport:{width:+(process.env.VW||412),height:+(process.env.VH||915)},deviceScaleFactor:1,isMobile:true,hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.addInitScript(()=>{localStorage.setItem('rulan-runner-v1',JSON.stringify({coins:123,unlocked:20,character:'fox',owned:['courier','fox'],best:{},soundOn:false}));window.__t=0;let q=[];Object.defineProperty(performance,'now',{value:()=>__t});window.requestAnimationFrame=f=>{q.push(f);return 1;};window.__advance=n=>{for(let i=0;i<n;i++){__t+=1000/60;const a=q;q=[];for(const f of a)f(__t);}};window.__skip=true;for(const k of['drawElements','drawArrays','drawElementsInstanced','drawArraysInstanced']){const o=WebGL2RenderingContext.prototype[k];WebGL2RenderingContext.prototype[k]=function(...a){if(!__skip)return o.apply(this,a);};}});
await p.goto(url+'/runner/?autopause=0');await p.waitForSelector('#play');
const out=process.env.OUT||'/downloads/fv-';
const shot=async name=>{await p.evaluate(()=>{__skip=false;__advance(1)});await p.screenshot({path:out+name+'.png'});await p.evaluate(()=>__skip=true);};
const advanceTo=async x=>{for(let i=0;i<600;i++){const r=await p.evaluate(()=>__runner.run);if(r.x>=x)return;await p.evaluate(()=>__advance(3));}throw Error('advance '+x);};
await p.click('#zen');await p.dispatchEvent('#left','pointerdown');
for(const x of[84,90,100,141,148,152])await advanceTo(x).then(()=>shot('roof'+x));
await advanceTo(151);await p.dispatchEvent('#right','pointerdown');await p.dispatchEvent('#right','pointerdown');await advanceTo(176);await p.dispatchEvent('#jump','pointerdown');
for(const x of[178,184,200,216,222])await advanceTo(x).then(()=>shot('zip'+x));
console.log(JSON.stringify({errors}));}finally{await b.close();server.close();}})().catch(e=>{console.error(e);process.exit(1)});

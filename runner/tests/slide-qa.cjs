/* Real CDP touch swipes and button taps, normal generated tracks, no game-state writes. */
const {chromium}=require('playwright'),assert=require('assert'),{serve}=require('./server.cjs');
(async()=>{const {server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});const reports=[];try{
for(const n of (process.env.FULL?Array.from({length:20},(_,i)=>i+1):[1,10,20]))for(const method of ['swipe','button'])for(const lead of [.12,.4,1.1]){
 const p=await b.newPage({viewport:{width:412,height:915},deviceScaleFactor:1,isMobile:true,hasTouch:true});const c=await p.context().newCDPSession(p);const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.addInitScript(()=>{localStorage.setItem('rulan-runner-v1',JSON.stringify({coins:123,unlocked:20,character:'courier',owned:['courier','fox'],best:{},soundOn:false}));window.__t=0;let q=[];Object.defineProperty(performance,'now',{value:()=>__t});window.requestAnimationFrame=f=>{q.push(f);return 1;};window.__advance=(n,hz=60)=>{for(let i=0;i<n;i++){__t+=1000/hz;const a=q;q=[];for(const f of a)f(__t);}};window.__skip=true;for(const k of ['drawElements','drawArrays','drawElementsInstanced','drawArraysInstanced']){const o=WebGL2RenderingContext.prototype[k];WebGL2RenderingContext.prototype[k]=function(...a){if(!__skip)return o.apply(this,a);};}});
 await p.goto((process.env.LIVE_URL||url+'/runner/'));await p.waitForSelector('#play');
 const touch=async(type,x=200,y=430)=>c.send('Input.dispatchTouchEvent',{type,touchPoints:type==='touchEnd'?[]:[{x,y,id:1}]});
 const tap=async sel=>{const box=await p.locator(sel).boundingBox();await touch('touchStart',box.x+box.width/2,box.y+box.height/2);await touch('touchEnd');};
 await tap('#levels');await tap(`[data-level="${n}"]`);const gate=(await p.evaluate(()=>__runner.run.obs)).find(o=>o.type==='arch');let triggered=false,held=false,at=0,immediate=false;
 for(let i=0;i<2500;i++){
  const r=await p.evaluate(()=>__runner.run);assert.equal(r.status,'playing',JSON.stringify({n,method,lead,x:r.x,gate}));if(r.x>gate.x+3)break;
  let target=gate.lane;const near=r.obs.filter(o=>o.x>r.x-2&&o.x-r.x<18&&o.id!==gate.id);if(near.some(o=>o.lane===target))target=[-1,0,1].find(l=>near.every(o=>o.lane!==l));if(r.lane!==target)await tap(target<r.lane?'#left':'#right');
  if(!triggered&&(gate.x-r.x)/r.speed<=lead){triggered=true;at=r.x;if(method==='swipe'){await touch('touchStart');await touch('touchMove',202,461);held=true;}else await tap('#slide');immediate=(await p.evaluate(()=>__runner.run.slide))>1;assert(immediate,'slide must start before touch release');}
  if(held&&r.x-at>r.speed*.55){await touch('touchEnd');held=false;}
  if(n===1&&method==='swipe'&&lead===.4&&Math.abs(gate.x-r.x)<.9){await p.evaluate(()=>{__skip=false;__advance(1);});await p.screenshot({path:'/downloads/slide-under-gate.png'});await p.evaluate(()=>__skip=true);}
  await p.evaluate(()=>__advance(1));
 }
 if(n===1&&method==='swipe'&&lead===.4){await p.evaluate(()=>{__skip=false;__advance(1);});await p.screenshot({path:'/downloads/slide-cleared-gate.png'});}const r=await p.evaluate(()=>__runner.run);assert(triggered&&r.x>gate.x+3,'passed full gate');assert.deepStrictEqual(errors,[]);reports.push({n,method,lead,passed:true,triggerX:+at.toFixed(2),gateX:gate.x});await p.close();
}
console.log(JSON.stringify(reports));}finally{await b.close();server.close();}})().catch(e=>{console.error(e);process.exit(1);});

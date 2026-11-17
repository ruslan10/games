// Zipline exit QA: left lane change, down dismount (button, swipe, key) and the automatic
// cable-end release all let go, land normally and reset the ride hints. Real controls, virtual time.
const assert=require('node:assert/strict');const{chromium}=require('playwright'),{serve}=require('./server.cjs');
(async()=>{const{server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});try{
const p=await b.newPage({viewport:{width:+(process.env.VW||412),height:+(process.env.VH||915)},deviceScaleFactor:1,isMobile:true,hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.addInitScript(()=>{localStorage.setItem('rulan-runner-v1',JSON.stringify({coins:123,unlocked:20,character:'fox',owned:['courier','fox'],best:{},soundOn:false}));window.__t=0;let q=[];Object.defineProperty(performance,'now',{value:()=>__t});window.requestAnimationFrame=f=>{q.push(f);return 1;};window.__advance=n=>{for(let i=0;i<n;i++){__t+=1000/60;const a=q;q=[];for(const f of a)f(__t);}};window.__skip=true;for(const k of['drawElements','drawArrays','drawElementsInstanced','drawArraysInstanced']){const o=WebGL2RenderingContext.prototype[k];WebGL2RenderingContext.prototype[k]=function(...a){if(!__skip)return o.apply(this,a);};}});
await p.goto(url+'/runner/?autopause=0');await p.waitForSelector('#play');
const out=process.env.OUT||'/downloads/fv-';
const shot=async name=>{await p.evaluate(()=>{__skip=false;__advance(1)});await p.screenshot({path:out+name+'.png'});await p.evaluate(()=>__skip=true);};
const advanceTo=async x=>{for(let i=0;i<600;i++){const r=await p.evaluate(()=>__runner.run);if(r.x>=x)return;await p.evaluate(()=>__advance(3));}throw Error('advance '+x);};
const touchSwipe=async(x0,y0,x1,y1)=>{const cdp=await p.context().newCDPSession(p);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:x0,y:y0}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x1,y:y1}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await cdp.detach();};
const saved=await p.evaluate(()=>localStorage.getItem('rulan-runner-v1'));
for(const exit of ['left-button','left-swipe','left-key','down-button','down-swipe','down-key','automatic']){
 await p.click('#zen');await p.dispatchEvent('#right','pointerdown');await advanceTo(176);await p.dispatchEvent('#jump','pointerdown');await advanceTo(198);
 assert.equal((await p.evaluate(()=>__runner.run)).zip,1);
 assert.match(await p.locator('#powerlabel').textContent(),/לירידה: שמאלה/);
 assert.match(await p.locator('#powerlabel').textContent(),/או למטה/);
 assert.equal(await p.locator('#left').getAttribute('aria-label'),'שמאלה · ירידה מהזיפ־ליין');
 assert.equal(await p.locator('#slide').getAttribute('aria-label'),'למטה · ירידה מהזיפ־ליין');
 assert.equal(await p.locator('#slide small').textContent(),'ירידה');
 if(exit==='left-button'){await p.waitForTimeout(2500);await shot('riding');}
 if(exit==='left-button')await p.dispatchEvent('#left','pointerdown');
 if(exit==='left-key')await p.keyboard.press('ArrowLeft');
 if(exit==='left-swipe')await touchSwipe(220,220,160,220);
 if(exit==='down-button')await p.dispatchEvent('#slide','pointerdown');
 if(exit==='down-key')await p.keyboard.press('ArrowDown');
 if(exit==='down-swipe')await touchSwipe(220,180,220,260);
 await advanceTo(exit==='automatic'?224:206);
 let r=await p.evaluate(()=>__runner.run);assert.equal(r.zip,0);assert.equal(r.status,'playing');
 assert.equal(await p.locator('#left').getAttribute('aria-label'),'שמאלה');assert.equal(await p.locator('#left small').count(),0);
 assert.equal(await p.locator('#slide').getAttribute('aria-label'),'החלקה');assert.equal(await p.locator('#slide small').textContent(),'החלקה');
 assert.doesNotMatch(await p.locator('#powerlabel').textContent(),/לירידה/);
 await advanceTo(exit==='automatic'?231:216);r=await p.evaluate(()=>__runner.run);assert.equal(r.y,0);
 if(exit==='left-button')await shot('landed');
 if(exit==='down-button')await shot('down-landed');
 await p.click('#pause');await p.click('#home');
 assert.equal(await p.evaluate(()=>localStorage.getItem('rulan-runner-v1')),saved);
}
console.log(JSON.stringify({errors,checks:'left button, left touch swipe, left key, down button, down touch swipe, down key, automatic end, grounded, hints reset, zen saves untouched'}));assert.deepEqual(errors,[]);
}finally{await b.close();server.close();}})().catch(e=>{console.error(e);process.exit(1)});

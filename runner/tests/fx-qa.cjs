/* Controlled-clock browser QA for sound + fireball effects. Writes screenshots to /downloads. */
const {chromium}=require('playwright');const {serve}=require('./server.cjs');
(async()=>{const {server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--autoplay-policy=no-user-gesture-required']});
const p=await b.newPage({viewport:{width:300,height:650},deviceScaleFactor:1,isMobile:true,hasTouch:true});p.setDefaultTimeout(120000);const errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
await p.addInitScript(()=>{window.__t=0;let q=[];Object.defineProperty(performance,'now',{value:()=>__t});window.requestAnimationFrame=f=>{q.push(f);return 1;};window.__advance=n=>{for(let i=0;i<n;i++){__t+=1000/60;const a=q;q=[];for(const f of a)f(__t);}};
 window.__skip=true;for(const k of ['drawElements','drawArrays','drawElementsInstanced','drawArraysInstanced']){const o=WebGL2RenderingContext.prototype[k];WebGL2RenderingContext.prototype[k]=function(...a){if(__skip)return;return o.apply(this,a);};}
 window.__snd={osc:0,noise:0,resume:0};const C=window.AudioContext;window.AudioContext=class extends C{createOscillator(){__snd.osc++;return super.createOscillator();}createBufferSource(){__snd.noise++;return super.createBufferSource();}};});
await p.goto(url+'/runner/');await p.waitForSelector('#play');await p.waitForTimeout(300);
const store0=await p.evaluate(()=>__runner.store);
await p.locator('#play').tap();
const shots={};let jumped=false;
for(let f=0;f<150;f++){await p.evaluate(()=>__advance(6));const s=await p.evaluate(()=>__runner);if(s.mode!=='playing')break;const r=s.run;
 const next=r.obs.filter(o=>o.x>r.x-2&&o.x-r.x<14);if(next.length){const ok=[-1,0,1].filter(l=>next.every(o=>o.lane!==l));const safe=ok.find(l=>Math.abs(l-r.lane)<=1)??ok[0];if(safe!==r.lane)await p.locator(safe<r.lane?'#left':'#right').dispatchEvent('pointerdown');}
 const t=f/10;if(!shots.warn&&t>9.4){shots.warn=1;await p.evaluate(()=>{__skip=false;__advance(2);});await p.screenshot({path:'/downloads/fx-warning.png'});await p.evaluate(()=>{__skip=true;});}
 if(!shots.fly&&t>10.45){shots.fly=1;await p.evaluate(()=>{__skip=false;__advance(2);});await p.screenshot({path:'/downloads/fx-fireball.png'});await p.evaluate(()=>{__skip=true;});}
 if(shots.fly&&!jumped&&t>10.75){jumped=true;await p.locator('#jump').dispatchEvent('pointerdown');}
 if(t>11.6)break;}
const snd=await p.evaluate(()=>__snd);const st=await p.evaluate(()=>({mode:__runner.mode,hits:__runner.run?.status,toast:document.getElementById('toast').textContent,mute:document.getElementById('mute').textContent}));
await p.evaluate(()=>{__skip=false;__advance(2);});await p.screenshot({path:'/downloads/fx-after.png'});
await p.locator('#mute').dispatchEvent('click');const muted=await p.evaluate(()=>({store:__runner.store.soundOn,txt:document.getElementById('mute').textContent}));
console.log(JSON.stringify({errors,store0,snd,st,muted},null,1));await b.close();server.close();})();

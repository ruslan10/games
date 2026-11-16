const{chromium}=require('playwright');const{serve}=require('./server.cjs');
(async()=>{const{server,url}=await serve();const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
// missions contrast at 390px
let p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true});
await p.goto(url+'/runner/');await p.waitForSelector('#play');
await p.evaluate(()=>{window.requestAnimationFrame=()=>0;});
await p.click('text=משימות');await p.waitForTimeout(300);
await p.screenshot({path:'/downloads/v2-missions2.png'});
await p.close();
// toast vs chaser warning layout at 320px (forced DOM visibility, layout check only)
p=await b.newPage({viewport:{width:320,height:568},deviceScaleFactor:1,isMobile:true,hasTouch:true});
await p.goto(url+'/runner/');await p.waitForSelector('#play');
await p.evaluate(()=>{window.requestAnimationFrame=()=>0;});
await p.tap('#play');await p.waitForTimeout(1200);
await p.evaluate(()=>{const t=document.getElementById('toast');t.textContent='מחליקים או משתמשים בחצים · קפיצה ↑';t.classList.add('show');const c=document.getElementById('chaserwarn');c.hidden=false;});
await p.waitForTimeout(200);
await p.screenshot({path:'/downloads/v2-toast-chaser-320.png'});
await b.close();server.close();})();

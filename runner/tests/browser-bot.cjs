// Real-input browser bot: drives Arrow keys from read-only __runner snapshots.
// No state injection during play; optional test-profile save seeding via env SEED_SAVE.
const{chromium}=require('playwright');const{serve}=require('./server.cjs');
const eff=o=>o.type==='mover'?(o.laneF??o.lane):o.lane;
async function play(page,retries){retries=retries||0;
  let last=-100,sawFlight=0,sawShoes=0,maxMult=1,revives=0,maxX=0,errs=0,trail=[];const sched=new Set();
  const t0=Date.now();
  while(Date.now()-t0<240000){
    let s=null;try{s=await page.evaluate(()=>window.__runner);}catch(e){errs++;if(errs%5===1)console.log('EVALERR',e.message.slice(0,120));}
    if(!s){if(++errs>15)break;await page.waitForTimeout(500);continue;}
    errs=0;
    if(s.mode==='offer'){
      const has=s.store.coins;
      if(await page.$('#revive')&&has>=60){await page.click('#revive');revives++;await page.waitForTimeout(500);continue;}
      if(await page.$('#norevive')){await page.click('#norevive');await page.waitForTimeout(500);continue;}
    }
    if(s.mode==='dead'&&retries>0&&await page.$('#retry')){retries--;await page.click('#retry');await page.waitForTimeout(700);last=-100;continue;}
    if(s.mode!=='playing'||!s.run)break;
    const r=s.run;maxX=Math.max(maxX,r.x);
    if(r.flight>0)sawFlight=Math.max(sawFlight,+r.flight.toFixed(2));
    if(r.shoes>0)sawShoes=Math.max(sawShoes,+r.shoes.toFixed(2));
    if(r.mult>maxMult)maxMult=r.mult;
    if(r.status!=='playing'){await page.waitForTimeout(800);continue;}
    const near=r.obs.filter(o=>o.type!=='ramp'&&o.x>r.x-2&&o.x-r.x<13);
    const o=r.obs.find(o=>o.type!=='ramp'&&o.x>r.x-1.3);
    if(o){const d=o.x-r.x;const onMe=Math.abs(eff(o)-r.lane)<.45;
      const act=(o.type==='arch'||o.type==='tunnel')?'ArrowDown':'ArrowUp';
      if(onMe&&d<=6.2&&d>1.2&&r.x-last>8){try{await page.keyboard.press(act);}catch(e){break;}last=r.x;}
      else if(onMe&&d>6.2&&!sched.has(o.id)){sched.add(o.id);
        const eta=Math.max(0,((d-5.2)/r.speed)*1000-120);
        setTimeout(()=>page.keyboard.press(act).catch(()=>{}),eta);}
      if(!onMe&&d<9){ // my lane blocked soon? move now if a safe lane exists
        const safe=[-1,0,1].filter(l=>near.every(p=>Math.abs(eff(p)-l)>=.45)&&l!==r.lane);
        if(safe.length&&Math.abs(eff(o)-r.lane)>=.45){} // already safe
      }
      if(onMe&&d>9){ // move away early if a safe lane exists
        const safe=[-1,0,1].filter(l=>near.every(p=>Math.abs(eff(p)-l)>=.45)&&l!==r.lane);
        if(safe.length)await page.keyboard.press(safe[0]<r.lane?'ArrowLeft':'ArrowRight');
      }
    } else {
      const pw=r.powers.find(p=>!p.taken&&p.x>r.x+2&&p.x-r.x<20&&p.lane!==r.lane);
      if(pw&&near.every(p=>Math.abs(eff(p)-pw.lane)>=.45)&&Math.abs(pw.lane-r.lane)===1)
        await page.keyboard.press(pw.lane<r.lane?'ArrowLeft':'ArrowRight');
      else{ // mild coin seeking on a clear road
        const safe=[-1,0,1].filter(l=>near.every(p=>Math.abs(eff(p)-l)>=.45));
        const coins=r.coinLanes||[];
        let best=r.lane,bs=-1;for(const l of safe){const c=coins.filter(c=>c.lane===l).length;if(c>bs){bs=c;best=l;}}
        if(best!==r.lane&&Math.abs(best-r.lane)===1)await page.keyboard.press(best<r.lane?'ArrowLeft':'ArrowRight');
      }
    }
    trail.push([Math.round(r.x),r.lane,r.status,r.chaser>0?1:0,o?o.type+Math.round(o.x-r.x):'-']);if(trail.length>24)trail.shift();
    await page.waitForTimeout(45);
  }
  let end=null;for(let i=0;i<10&&!end;i++){try{end=await page.evaluate(()=>window.__runner);}catch(e){await page.waitForTimeout(500);}}
  return{mode:end&&end.mode,status:end&&end.run&&end.run.status,x:end&&end.run&&Math.round(end.run.x),length:end&&end.run&&end.run.length,
    collected:end&&end.run&&end.run.collected,coins:end&&end.run&&end.run.coins,wallet:end&&end.store.coins,
    flightTaken:end&&end.run&&end.run.powers.filter(p=>p.taken&&p.type==='flight').length,
    shoesTaken:end&&end.run&&end.run.powers.filter(p=>p.taken&&p.type==='shoes').length,
    sawFlight,sawShoes,maxMult,revives,maxX:Math.round(maxX),trail};
}
(async()=>{
  const target=process.argv[2]||'level1';
  const{server,url}=await serve();
  const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--enable-unsafe-swiftshader']});
  const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true});
  if(process.env.SEED_SAVE)await ctx.addInitScript(s=>localStorage.setItem('rulan-runner-v1',s),process.env.SEED_SAVE);
  const p=await ctx.newPage();
  p.on('pageerror',e=>console.log('PAGEERROR',e.message));
  await p.setViewportSize({width:320,height:400});await p.goto(url+'/runner/?autopause=0');await p.waitForSelector('#play');
  if(target==='daily'){await p.click('#daily');await p.waitForTimeout(400);await p.click('#dailyplay');}
  else if(target==='level1'){await p.tap('#play');}
  else{const n=+target.slice(5);await p.click('#levels');await p.waitForTimeout(400);await p.click(`[data-level="${n}"]`);}
  const res=await play(p,2);
  console.log(JSON.stringify(res));
  await b.close();server.close();
})();

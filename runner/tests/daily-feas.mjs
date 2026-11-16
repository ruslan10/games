// Daily challenge feasibility: a coin-greedy survival bot must beat the daily goal
// (ground-only coin denominator, flight-trail coins excluded) for a spread of days.
import pkg from '../engine.js';const {Run}=pkg;
import * as Prog from '../progression.mjs';
let failures=0;
function greedy(n,opts){
  const r=new Run(n,opts);let last=-100;const eff=p=>p.type==='mover'?(p.laneF??p.lane):p.lane;
  for(let t=0;t<30000&&r.status==='playing';t++){
    const o=r.level.obs.find(o=>o.type!=='ramp'&&o.x>r.x-1.3);
    if(o){const d=o.x-r.x;
      if(d<5.4&&d>3&&r.x-last>10){(o.type==='arch'||o.type==='tunnel')?r.duck():r.jump();last=r.x;}
      else if(d>5.4){
        const near=r.level.obs.filter(p=>p.type!=='ramp'&&p.x>r.x-2&&p.x-r.x<14);
        const safe=[-1,0,1].filter(l=>near.every(p=>Math.abs(eff(p)-l)>=.45));
        let best=r.lane,bs=-1;
        for(const l of safe){const c=r.level.coins.filter(c=>!c.taken&&c.x>r.x&&c.x-r.x<22&&c.lane===l).length;if(c>bs){bs=c;best=l;}}
        if(best!==r.lane)r.move(Math.sign(best-r.lane));
        const pw=r.level.powers.find(p=>!p.taken&&p.x>r.x&&p.x-r.x<10);
        if(pw&&pw.lane!==r.lane&&near.every(p=>Math.abs(eff(p)-pw.lane)>=.45))r.move(Math.sign(pw.lane-r.lane));
      }
    }
    r.step(1/60);
  }
  return r;
}
let worst=99;
for(let day=0;day<14;day++){
  const key=Prog.dateKey(new Date(Date.now()+day*864e5));
  const info=Prog.dailyInfo(key);const dm=info.mod||{};
  const opts={seed:info.seed,speedMul:dm.speedMul,lengthMul:dm.lengthMul,noStartShield:dm.noStartShield};
  const ground=new Run(info.level,opts).level.coins.filter(c=>!c.air).length;
  const goal=Prog.dailyGoal(info,ground);
  const r=greedy(info.level,opts);
  const margin=r.collected/goal;
  if(margin<worst)worst=margin;
  const ok=r.status==='won'&&margin>=1;
  console.log(`${key} lvl${info.level} ratio${info.goalRatio} ground${ground} goal${goal} got${r.collected} ${r.status} margin${margin.toFixed(2)} ${ok?'OK':'FAIL'}`);
  if(!ok)failures++;
}
console.log(`worst margin ${worst.toFixed(2)} over 14 days`);
if(failures){console.log('daily-feas: '+failures+' FAILURES');process.exit(1);}
console.log('daily-feas: all 14 days feasible');

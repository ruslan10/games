import {createRequire} from 'module';import {createFireballs,FB} from '../fireballs.mjs';
const {Run}=createRequire(import.meta.url)('../engine.js');
let fails=0;const check=(c,m)=>{if(!c){fails++;console.error('FAIL',m);}};
function sim(n,dt,bot){const r=new Run(n),f=createFireballs(r.level);let last=-9;
 for(let k=0;k<30000&&r.status==='playing';k++){
  if(bot){const next=r.level.obs.filter(o=>o.type!=='ramp'&&o.x>r.x-2&&o.x-r.x<14);if(next.length){const fl=f.list.filter(b=>b.phase==='fly'&&(b.x-r.x)/(r.level.speed+FB.approach)<1.1).map(b=>b.lane);const ok=[-1,0,1].filter(l=>next.every(o=>Math.abs((o.laneF??o.lane)-l)>=.45));const safe=ok.find(l=>!fl.includes(l)&&Math.abs(l-r.lane)<=1)??ok.find(l=>Math.abs(l-r.lane)<=1)??ok[0];if(safe!==undefined)r.move(Math.sign(safe-r.lane));}
   for(const b of f.list)if(b.phase==='fly'){const t=(b.x-r.x)/(r.level.speed+FB.approach);if((b.lane===r.lane||Math.abs(b.lane*2.6-r.lateral)<1.4)&&t<.36&&t>0&&r.y===0&&r.time-last>.8){r.jump();last=r.time;}}}
  r.step(dt);f.update(r,dt);r.drain();f.drain();}
 return {r,f};}
let idleHits=0,spawned=0;
for(let n=1;n<=20;n++){
 for(const dt of [1/120,1/60]){const {r,f}=sim(n,dt,true);check(r.status==='won',`bot level ${n} @${dt} status ${r.status} hits ${f.hits}`);check(f.hits===0,`bot hit by fireball level ${n}`);spawned+=f.spawned;}
 const {f}=sim(n,1/120,false);idleHits+=f.hits;
}
check(spawned>40,'fireballs spawn: '+spawned);
// shield absorbs one hit
{const r=new Run(3),f=createFireballs(r.level);r.shield=1;let broke=false;for(let k=0;k<20000&&r.status==='playing'&&!broke;k++){r.step(1/120);f.update(r,1/120);if(r.drain().some(e=>e.type==='break'))broke=true;}check(broke,'shield breaks on fireball or obstacle');}
console.log(fails?`${fails} fireball checks failed`:`fireball checks passed (spawned ${spawned}, idle hits ${idleHits})`);process.exit(fails?1:0);

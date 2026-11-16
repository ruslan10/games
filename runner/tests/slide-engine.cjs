const assert=require('assert'),{Run}=require('../engine.js');let count=0;
const eff=o=>o.laneF??o.lane;const isSlide=o=>o.type==='arch'||o.type==='tunnel';
for(let n=1;n<=20;n++)for(const hz of [30,60,120])for(const lead of [.12,.4,.8,1.1,1.25]){
 const r=new Run(n);let last=-1,cleared=0;for(let t=0;t<20000&&r.status==='playing';t++){
 const o=r.level.obs.find(o=>o.type!=='ramp'&&o.x>r.x-1.2);if(o){r.move(Math.sign(Math.round(eff(o))-r.lane));const ahead=(o.x-r.x)/r.level.speed;const need=o.type==='tunnel'?Math.max(lead,.5):isSlide(o)?lead:.31;if(o.id!==last&&ahead<=need&&ahead>0){isSlide(o)?r.duck():r.jump();last=o.id;if(isSlide(o))cleared++;}}
 r.step(1/hz);
 }assert.equal(r.status,'won',`level ${n}, ${hz}Hz, lead ${lead}, x ${r.x}`);assert(cleared>0);count+=cleared;
}
// Standing still cannot clear gates; sliding cannot pass crates/barriers.
// First hit stumbles (chaser), the follow-up obstacle catches the runner.
for(const type of ['arch','tunnel','crate','barrier','mover']){const r=new Run(1);const w=type==='tunnel'?7:1.55;
 const mk=(x,id)=>({id,x,lane:0,type,w,mover:type==='mover'?{a:0,b:0,speed:1,phase:0}:undefined});
 r.level.obs=[mk(10,0),mk(34,1)];if(type!=='arch'&&type!=='tunnel')r.duck();
 let stumbled=false;for(let i=0;i<600&&r.status==='playing';i++){r.step(1/120);if(r.drain().some(e=>e.type==='stumble'))stumbled=true;}
 assert(stumbled,type+' first hit stumbles');assert.equal(r.status,'dead',type+' remains hazardous');}
console.log(`${count} slide-gate passages across 20 levels, 30/60/120Hz, five early/late timings; wrong-action collisions retained`);

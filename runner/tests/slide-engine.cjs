const assert=require('assert'),{Run}=require('../engine.js');let count=0;
for(let n=1;n<=20;n++)for(const hz of [30,60,120])for(const lead of [.12,.4,.8,1.1,1.25]){
 const r=new Run(n);let last=-1,cleared=0;for(let t=0;t<20000&&r.status==='playing';t++){
 const o=r.level.obs.find(o=>o.x>r.x-1.2);if(o){r.move(Math.sign(o.lane-r.lane));const ahead=(o.x-r.x)/r.level.speed;if(o.id!==last&&ahead<=(o.type==='arch'?lead:.31)&&ahead>0){o.type==='arch'?r.duck():r.jump();last=o.id;if(o.type==='arch')cleared++;}}
 r.step(1/hz);
 }assert.equal(r.status,'won',`level ${n}, ${hz}Hz, lead ${lead}, x ${r.x}`);assert(cleared>0);count+=cleared;
}
// Standing still cannot clear gates; sliding cannot pass crates/barriers.
for(const type of ['arch','crate','barrier']){const r=new Run(1);r.level.obs=[{x:10,lane:0,type}];if(type!=='arch')r.duck();for(let i=0;i<150&&r.status==='playing';i++)r.step(1/120);assert.equal(r.status,'dead',type+' remains hazardous');}
console.log(`${count} slide-gate passages across 20 levels, 30/60/120Hz, five early/late timings; wrong-action collisions retained`);

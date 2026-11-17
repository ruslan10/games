const assert=require('node:assert/strict'),{Run}=require('../engine.js');
const tick=(r,s)=>{for(let t=0;t<s*120;t++)r.step(1/120)};
// Controlled mechanics tests; original suite also runs all levels with normal generated routes.
{const r=new Run(1);r.level.obs=[];r.level.powers=[];assert(r.jump());tick(r,.15);assert(r.trick());assert(!r.trick());tick(r,1);assert.equal(r.tricks,1);assert(r.coins>=3);assert(r.maxStreak>=1);assert.equal(r.trickCoins,3);}
{const r=new Run(1);r.level.obs=[];r.level.powers=[];r.jump();tick(r,.5);assert(!r.trick(),'too late for a safe spin');tick(r,1);assert.equal(r.tricks,0);}
{const r=new Run(1,{zen:true});for(let i=0;i<30;i++){r.invincible=0;r.hit('obs');assert.equal(r.status,'playing');}assert.equal(r.hits,0);}
{const r=new Run(1);r.level.obs=[];r.level.powers=[];r.move(-1);let peak=0,roof=false;for(let i=0;i<1600;i++){r.step(1/120);peak=Math.max(peak,r.ground);roof ||=r.route==='roof';}assert(roof&&peak>=3);assert(r.x>142);assert.equal(r.ground,0);}
{const r=new Run(1);r.level.obs=[];r.level.powers=[];r.move(1);while(r.x<176)r.step(1/120);r.jump();let zip=false;while(r.x<225){r.step(1/120);zip ||=r.zip>0;}assert(zip);assert.equal(r.zip,0);}
for(const type of ['board','pogo']){const r=new Run(1);r.level.obs=[];r.level.routes=[];r.level.powers=[{x:1,lane:0,type,taken:false}];tick(r,.2);assert.equal(r.vehicle,type);const old=r.x;r.duck();tick(r,.2);assert(r.brake>0);r.invincible=0;r.hit();assert.equal(r.vehicle,null);assert.equal(r.hits,0);}
{const r=new Run(1);r.level.obs=[];r.level.powers=[{x:1,lane:0,type:'pogo',taken:false}];tick(r,.7);assert(r.y>0,'pogo auto-bounces');tick(r,8);assert.equal(r.vehicle,null);}
for(const hz of[30,60,120])for(const character of['courier','fox','cat','bunny','panda']){const r=new Run(1,{character});r.level.obs=[];r.level.powers=[];r.jump();for(let i=0;i<Math.round(hz*.12);i++)r.step(1/hz);if(character==='bunny'){r.jump();for(let i=0;i<Math.round(hz*.12);i++)r.step(1/hz);}assert(r.trick());for(let i=0;i<2*hz;i++)r.step(1/hz);assert.equal(r.tricks,1,character+' trick landing at '+hz+' Hz');}
for(const zen of[false,true]){const r=new Run(20,{zen});r.level.obs=[];r.level.powers=[];r.level.coins=[];r.level.routes=[];r.level.length=1e6;for(let j=0;j<40;j++){assert(r.jump());tick(r,.15);assert(r.trick());tick(r,1);}assert.equal(r.tricks,40);assert.equal(r.trickCoins,zen?0:15);assert.equal(r.coins,zen?0:15);assert.equal(r.comboN,40);assert.equal(r.mult,3);}
console.log('adventures ok: tricks, zen, roofs, zipline, vehicles, brakes, duration');

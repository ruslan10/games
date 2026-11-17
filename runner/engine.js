/* Original fixed-step three-lane runner simulation. No rendering or browser dependencies.
   v2: combo multiplier, stumble/chaser, once-per-run revive, shoes/flight powers,
   moving obstacles, slide tunnels, launch ramps, distinct character abilities,
   upgrade effects (progression.mjs) and seeded daily-challenge modifiers. */
(function(root){'use strict';
const CHARS=[
 {id:'courier',name:'השליח',cost:0,color:'#29c9ba',ability:'combo',abilityText:'קומבו נבנה מהר יותר (כל 6 איסופים נקיים)'},
 {id:'fox',name:'פוקסי השועל',cost:0,color:'#ef9750',ability:'magnet',abilityText:'מגנט נמשך 4 שניות נוספות'},
 {id:'cat',name:'מוצ׳י החתול',cost:150,color:'#b2a1ed',ability:'jump',abilityText:'קפיצה גבוהה יותר'},
 {id:'bunny',name:'בוני הארנב',cost:350,color:'#f8d7df',ability:'double',abilityText:'קפיצה כפולה באוויר'},
 {id:'panda',name:'פנדה',cost:650,color:'#edf2ef',ability:'shield',abilityText:'מתחיל כל ריצה עם מגן'}];
const DEFAULT_UP={magnetSeconds:8,startShields:0,coinBonus:0,shoesSeconds:6,flightSeconds:4,reviveCost:60};
const SLIDE_TYPES={arch:1,tunnel:1};
function level(n,opts){n=Math.max(1,Math.min(20,Math.floor(n)||1));opts=opts||{};
 const seed=(opts.seed|0)||0,sk=seed%3,sp=(seed>>2)%2;
 const speed=(13+(n-1)*.43)*(opts.speedMul||1),length=Math.round((360+(n-1)*22)*(opts.lengthMul||1)),obs=[],coins=[],powers=[];let id=0;
 const add=(x,lane,type,ex)=>obs.push(Object.assign({id:id++,x,lane,type,w:type==='barrier'?1.6:type==='tunnel'?7:1.55},ex));
 for(let x=60,i=0;x<length-28;x+=Math.max(28,44-n*.55),i++){
  const lane=(i*2+n+sk)%3-1;let type=['crate','barrier','arch'][(i+sk)%3];
  if(n>=2&&(i+sk)%6===5)type='tunnel';
  if(n>=3&&(i+sk)%5===3)type='mover';
  if(n===1&&i===0)type='crate';
  if(type==='mover'){const dir=(i+sk)%2?1:-1,other=Math.max(-1,Math.min(1,lane+dir));
   add(x,lane,'mover',{mover:{a:lane,b:other,speed:.6+((i*7+sk)%3)*.15,phase:(((i*13+seed%97)%10)/10)*6.283}});}
  else add(x,lane,type);
  const second=((lane+2)%3)-1;
  if(n>=4&&i%3===1){add(x,second,'crate');const free=-lane-second;add(x-11,free,'ramp',{w:1.2});
   for(let j=0;j<6;j++)coins.push({x:x-15+j*2.2,lane:free,y:1.3+Math.sin(j/5*Math.PI)*1.9,taken:false});}
  const rewardLane=(i+sp)%2===0?lane:second;
  for(let j=0;j<7;j++)coins.push({x:x-10+j*2.7,lane:rewardLane,y:SLIDE_TYPES[type]&&rewardLane===lane?.6:rewardLane===lane?1.1+Math.sin(j/6*Math.PI)*1.6:.75,taken:false});
  if(type==='tunnel')for(let j=0;j<3;j++)coins.push({x:x-2+j*2,lane,y:.55,taken:false});
  if(i%3===1){const pool=['shield','magnet'];if(n>=2)pool.push('shoes');if(n>=3)pool.push('flight');const pt=pool[(Math.floor(i/3)+sk)%pool.length];
   powers.push({x:x+13,lane:(i%3)-1,type:pt,taken:false});
   if(pt==='flight')for(let j=0;j<14;j++)coins.push({x:x+21+j*2.6,lane:((Math.floor(j/5)+i)%3)-1,y:3.3+Math.sin(j*.9)*.5,taken:false,air:true});}
 }
 for(let j=0;j<7;j++)coins.push({x:17+j*3,lane:0,y:.8,taken:false});
 const routes=[{type:'roof',start:88,end:142,lane:-1,height:3},{type:'zip',start:178,end:218,lane:1,height:3.6}];
 for(const r of routes)for(let x=r.start+12;x<r.end-8;x+=4)coins.push({x,lane:r.lane,y:r.height+.7,taken:false,air:true});
 powers.push({x:246,lane:0,type:'board',taken:false},{x:Math.min(length-22,314),lane:1,type:'pogo',taken:false});
 return{n,speed,length,obs,coins,powers,routes,biome:Math.floor((n-1)/5),seed};}
class Run{
 constructor(n,opts){opts=opts||{};this.level=level(n,opts);this.char=CHARS.find(c=>c.id===opts.character)||CHARS[0];
  const up=this.up=Object.assign({},DEFAULT_UP,opts.upgrades);
  this.jumpV=8.6+(this.char.ability==='jump'?1.2:0);this.comboNeed=this.char.ability==='combo'?6:8;
  this.x=0;this.lane=0;this.lateral=0;this.y=0;this.vy=0;this.slide=0;this.coins=0;this.collected=0;this.time=0;this.status='playing';
  this.shield=opts.noStartShield?0:Math.min(3,up.startShields+(this.char.ability==='shield'?1:0));
  this.magnet=0;this.shoes=0;this.flight=0;this.invincible=0;this.chaser=0;
  this.comboN=0;this.mult=1;this.maxMult=1;this.maxStreak=0;this.airJumps=this.char.ability==='double'?1:0;
  this.revived=false;this.caught=false;this.coinMul=opts.coinMul||1;
  this.events=[];this.hits=0;this.zen=!!opts.zen;this.ground=0;this.route=null;this.zip=0;this.vehicle=null;this.vehicleTime=0;this.brake=0;this.trickTime=0;this.trickReady=false;this.trickRotation=0;this.tricks=0;this.trickCoins=0;}
 move(dir){if(!dir)return;if(this.status==='playing')this.lane=Math.max(-1,Math.min(1,this.lane+dir));}
 jump(){if(this.status!=='playing'||this.flight>0)return false;
  if(this.y<=this.ground+.02&&this.vy<=0){this.vy=this.vehicle==='pogo'?13:this.shoes>0?12.5+(this.char.ability==='jump'?.8:0):this.jumpV;this.slide=0;this.events.push({type:'jump'});return true;}
  if(this.airJumps>0){this.airJumps--;this.vy=Math.max(this.vy,this.jumpV*.94);this.slide=0;this.events.push({type:'jump',air:true});return true;}
  return false;}
 trick(){if(this.status!=='playing'||this.flight>0||this.zip>0||this.y-this.ground<.65||this.vy<0||this.trickTime>0||this.trickReady)return false;this.trickTime=.52;this.trickRotation=.01;this.events.push({type:'trick-start'});return true;}
 duck(){if(this.vehicle){this.brake=1.2;this.events.push({type:'brake'});}this.trickReady=false;if(this.status!=='playing')return;this.slide=1.35;if(this.y>0&&this.flight<=0)this.vy=-12;this.events.push({type:'slide'});}
 _comboPoint(){this.comboN++;this.maxStreak=Math.max(this.maxStreak,this.comboN);const m=Math.min(3,1+Math.floor(this.comboN/this.comboNeed));if(m>this.mult){this.mult=m;this.maxMult=Math.max(this.maxMult,m);this.events.push({type:'combo',mult:m});}}
 _comboReset(){if(this.mult>1)this.events.push({type:'combo-reset'});this.comboN=0;this.mult=1;}
 /* One landed hit: shield breaks first, otherwise the chaser closes in (stumble);
    a hit while the chaser is already on you ends the run (caught). */
 hit(src){if(this.status!=='playing'||this.invincible>0)return false;
  if(this.zen){this.invincible=1.4;this.events.push({type:'practice-hit'});return true;}
  if(this.vehicle){this.vehicle=null;this.vehicleTime=0;this.invincible=1.4;this.trickReady=false;this.events.push({type:'vehicle-break'});return true;}
  this.trickReady=false;this.trickTime=0;this.hits++;this._comboReset();
  if(this.shield>0){this.shield--;this.invincible=1.4;this.events.push({type:'break'});return true;}
  if(this.chaser<=0){this.chaser=12;this.invincible=1.4;this.events.push({type:'stumble'});return true;}
  this.status='dead';this.caught=true;this.events.push({type:'caught'});this.events.push({type:'dead'});return true;}
 /* Once per run, after death: back on the road with a short safety window. */
 revive(){if(this.status!=='dead'||this.revived)return false;
  this.revived=true;this.status='playing';this.invincible=2.5;this.chaser=0;this.y=0;this.vy=0;this.slide=0;this.caught=false;
  this.events.push({type:'revive'});return true;}
 step(dt){if(this.status!=='playing')return;dt=Math.min(dt,1/30);this.time+=dt;this.brake=Math.max(0,this.brake-dt);if(this.vehicleTime>0){this.vehicleTime-=dt;if(this.vehicleTime<=0){this.vehicle=null;this.invincible=Math.max(this.invincible,.8);this.events.push({type:'vehicle-end'});}}
  this.x+=this.level.speed*dt*(this.vehicle==='board'?(this.brake>0?.7:1.13):this.brake>0?.8:1);
  const oldRoute=this.route;this.ground=0;this.route=null;for(const r of this.level.routes||[]){if(this.x>=r.start&&this.x<=r.end&&Math.abs(this.lateral-r.lane*2.6)<1.1){if(r.type==='roof'&&(this.x<r.start+10||oldRoute==='roof'||this.y>=r.height-.2)){this.ground=r.height*Math.max(0,Math.min(1,(this.x-r.start)/10,(r.end-this.x)/10));this.route='roof';}else if(r.type==='zip'&&((this.x<r.start+9&&this.y>.65)||this.zip>0)){this.zip=1;this.route='zip';this.y=r.height-1;this.vy=0;}}}if(this.route!=='zip'&&this.zip){this.zip=0;this.invincible=Math.max(this.invincible,.6);}
  const wasAir=this.y>this.ground||this.vy<0;
  if(this.trickTime>0){this.trickTime=Math.max(0,this.trickTime-dt);this.trickRotation=(1-this.trickTime/.52)*Math.PI*2;if(!this.trickTime)this.trickReady=true;}
  this.lateral+=(this.lane*2.6-this.lateral)*Math.min(1,dt*17);
  if(this.zip>0){this.y=2.6;this.vy=0;}
  else if(this.flight>0){this.flight=Math.max(0,this.flight-dt);this.y+=(3.4-this.y)*Math.min(1,dt*5);this.vy=0;
   if(this.flight===0){this.invincible=Math.max(this.invincible,.8);this.events.push({type:'flightend'});}}
  else{this.vy-=24*dt;this.y=Math.max(this.ground,this.y+this.vy*dt);if(this.y===this.ground){this.vy=0;this.airJumps=this.char.ability==='double'?1:0;if(wasAir){if(this.trickReady){this.tricks++;this._comboPoint();const reward=!this.zen&&this.tricks<=5?3:0;this.coins+=reward;this.trickCoins+=reward;this.events.push({type:'trick-land',coins:reward});}else if(this.trickTime>0)this.events.push({type:'trick-miss'});this.trickReady=false;this.trickTime=0;this.trickRotation=0;}if(this.vehicle==='pogo'&&this.brake<=0&&this.slide<=0){this.vy=9.8;}}}
  this.slide=Math.max(0,this.slide-dt);this.magnet=Math.max(0,this.magnet-dt);this.shoes=Math.max(0,this.shoes-dt);
  this.invincible=Math.max(0,this.invincible-dt);this.chaser=Math.max(0,this.chaser-dt);
  for(const c of this.level.coins){if(c.taken)continue;
   const near=Math.abs(c.x-this.x)<1.3&&Math.abs(c.lane*2.6-this.lateral)<1.05&&Math.abs(c.y-this.y-.7)<1.4;
   const magnet=this.magnet>0&&Math.abs(c.x-this.x)<8&&Math.abs(c.lane*2.6-this.lateral)<6;
   if(near||magnet){c.taken=true;this.collected++;this.coins+=this.mult*this.coinMul;this._comboPoint();this.events.push({type:'coin'});}}
  for(const p of this.level.powers){if(!p.taken&&Math.abs(p.x-this.x)<1.3&&Math.abs(p.lane*2.6-this.lateral)<1){p.taken=true;
   if(p.type==='shield')this.shield=Math.min(3,this.shield+1);
   else if(p.type==='magnet')this.magnet=this.up.magnetSeconds+(this.char.ability==='magnet'?4:0);
   else if(p.type==='shoes')this.shoes=this.up.shoesSeconds;
   else if(p.type==='flight')this.flight=this.up.flightSeconds;
   else if(p.type==='board'||p.type==='pogo'){this.vehicle=p.type;this.vehicleTime=7;this.brake=0;}
   this.events.push({type:p.type});}}
  for(const o of this.level.obs){
   if(o.type==='mover'){const mv=o.mover,mid=(mv.a+mv.b)/2,amp=Math.abs(mv.a-mv.b)/2;o.laneF=mid+amp*Math.sin(this.time*mv.speed+mv.phase);}
   if(!o.passed&&o.x<this.x-2){o.passed=true;if(o.type!=='ramp'){this._comboPoint();if(o.type==='mover')this.events.push({type:'moving-pass'});}}
   if(o.type==='ramp'){if(Math.abs(o.x-this.x)<1.3&&Math.abs(o.lane*2.6-this.lateral)<1.0&&this.y<.1&&this.flight<=0){this.vy=11.5;this.slide=0;this.events.push({type:'ramp'});}continue;}
   const lanePos=(o.type==='mover'?o.laneF:o.lane)*2.6,hw=o.type==='tunnel'?3.6:1.1;
   if(Math.abs(o.x-this.x)>hw||Math.abs(lanePos-this.lateral)>1.0||this.invincible>0||this.flight>0||this.zip>0||this.y>2.9)continue;
   const slideType=!!SLIDE_TYPES[o.type];
   const clear=slideType?this.slide>0&&this.y<.2:this.y>(o.type==='barrier'?.75:1.05);
   if(clear&&slideType)this.slide=Math.max(this.slide,.12);// Once a grounded slide enters a gate, stay low until the whole gate is behind.
   if(!clear){this.hit('obs');if(this.status!=='playing')break;}}
  if(this.status==='playing'&&this.x>=this.level.length){this.status='won';this.events.push({type:'won'});}}
 drain(){return this.events.splice(0);}}
const api={Run,level,CHARS,DEFAULT_UP};if(typeof module!=='undefined')module.exports=api;root.RunnerEngine=api;
})(typeof window!=='undefined'?window:globalThis);

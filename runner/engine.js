/* Original fixed-step three-lane runner simulation. No rendering or browser dependencies. */
(function(root){'use strict';
const CHARS=[{id:'courier',name:'השליח',cost:0,color:'#29c9ba'},{id:'fox',name:'פוקסי השועל',cost:0,color:'#ef9750'},{id:'cat',name:'מוצ׳י החתול',cost:150,color:'#b2a1ed'},{id:'bunny',name:'בוני הארנב',cost:350,color:'#f8d7df'},{id:'panda',name:'פנדה',cost:650,color:'#edf2ef'}];
function level(n){n=Math.max(1,Math.min(20,n));const speed=13+(n-1)*.43,length=360+(n-1)*22,obs=[],coins=[],powers=[];let id=0;const add=(x,lane,type)=>obs.push({id:id++,x,lane,type,w:type==='barrier'?1.6:1.55});
for(let x=60,i=0;x<length-28;x+=Math.max(28,44-n*.55),i++){
 const lane=(i*2+n)%3-1;let type=['crate','barrier','arch'][i%3];if(n===1&&i===0)type='crate';add(x,lane,type);
 if(n>=4&&i%3===1)add(x,((lane+2)%3)-1,'crate');
 const rewardLane=i%2===0?lane:((lane+2)%3)-1;
 for(let j=0;j<7;j++)coins.push({x:x-10+j*2.7,lane:rewardLane,y:type==='arch'&&rewardLane===lane?.6:rewardLane===lane?1.1+Math.sin(j/6*Math.PI)*1.6:.75,taken:false});
 if(i%4===2)powers.push({x:x+13,lane:(i%3)-1,type:Math.floor(i/4)%2?'magnet':'shield',taken:false});
}
for(let j=0;j<7;j++)coins.push({x:17+j*3,lane:0,y:.8,taken:false});
return {n,speed,length,obs,coins,powers,biome:Math.floor((n-1)/5)};}
class Run{constructor(n){this.level=level(n);this.x=0;this.lane=0;this.lateral=0;this.y=0;this.vy=0;this.slide=0;this.coins=0;this.time=0;this.status='playing';this.shield=0;this.magnet=0;this.invincible=0;this.events=[];this.hits=0;this.distance=0;}
move(dir){if(this.status==='playing')this.lane=Math.max(-1,Math.min(1,this.lane+dir));}
jump(){if(this.status!=='playing'||this.y>.02||this.vy>0)return false;this.vy=8.6;this.slide=0;this.events.push({type:'jump'});return true;}
duck(){if(this.status!=='playing')return;this.slide=.9;if(this.y>0)this.vy=-12;this.events.push({type:'slide'});}
step(dt){if(this.status!=='playing')return;dt=Math.min(dt,1/30);this.time+=dt;this.x+=this.level.speed*dt;this.lateral+=(this.lane*2.6-this.lateral)*Math.min(1,dt*17);this.vy-=24*dt;this.y=Math.max(0,this.y+this.vy*dt);if(this.y===0)this.vy=0;this.slide=Math.max(0,this.slide-dt);this.magnet=Math.max(0,this.magnet-dt);this.invincible=Math.max(0,this.invincible-dt);
for(const c of this.level.coins){if(c.taken)continue;const near=Math.abs(c.x-this.x)<1.3&&Math.abs(c.lane*2.6-this.lateral)<1.05&&Math.abs(c.y-this.y-.7)<1.4;const magnet=this.magnet>0&&Math.abs(c.x-this.x)<8&&Math.abs(c.lane*2.6-this.lateral)<6;if(near||magnet){c.taken=true;this.coins++;this.events.push({type:'coin'});}}
for(const p of this.level.powers){if(!p.taken&&Math.abs(p.x-this.x)<1.3&&Math.abs(p.lane*2.6-this.lateral)<1){p.taken=true;if(p.type==='shield')this.shield=1;else this.magnet=8;this.events.push({type:p.type});}}
for(const o of this.level.obs){if(Math.abs(o.x-this.x)>1.1||Math.abs(o.lane*2.6-this.lateral)>1.0||this.invincible>0)continue;const clear=o.type==='arch'?this.slide>0&&this.y<.2:this.y>(o.type==='crate'?1.05:.75);if(!clear){if(this.shield){this.shield=0;this.invincible=1.4;this.hits++;this.events.push({type:'break'});}else{this.status='dead';this.events.push({type:'dead'});break;}}}
if(this.status==='playing'&&this.x>=this.level.length){this.status='won';this.events.push({type:'won'});}}
drain(){return this.events.splice(0);}}
const api={Run,level,CHARS};if(typeof module!=='undefined')module.exports=api;root.RunnerEngine=api;
})(typeof window!=='undefined'?window:globalThis);

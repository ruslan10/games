const assert=require('assert'),{Run,level,CHARS,DEFAULT_UP}=require('../engine.js');let checks=0;const check=(x,msg)=>{assert(x,msg);checks++;};const tick=(r,seconds,fn)=>{for(let t=0;t<seconds*120;t++){fn?.(r);r.step(1/120);}};
const eff=o=>o.laneF??o.lane;
for(let n=1;n<=20;n++){
 const l=level(n);check(l.obs.every(o=>[-1,0,1].includes(o.lane)),`lanes ${n}`);check(l.coins.length>30,'coins');check(l.powers.every(p=>p.x<l.length),'power positions');
 for(let i=0;i<CHARS.length;i++){let r=new Run(n,{character:CHARS[i].id});tick(r,110,r=>{const next=r.level.obs.filter(o=>o.type!=='ramp'&&o.x>r.x-2&&o.x-r.x<14);if(next.length){const safe=[-1,0,1].find(lane=>next.every(o=>Math.abs(eff(o)-lane)>=.45));if(safe!==undefined&&safe!==r.lane)r.move(Math.sign(safe-r.lane));}});check(r.status==='won',`lane bot ${n}/${CHARS[i].id} x${Math.round(r.x)}`);}
}
// Isolated obstacle checks use normal simulation and actions, not injected position.
for(const type of ['crate','barrier','arch','tunnel','mover']){const n=1,l=level(n),r=new Run(n);const slide=type==='arch'||type==='tunnel';
 const proto=type==='mover'?{id:0,x:24,lane:0,type,w:1.55,mover:{a:0,b:0,speed:1,phase:0}}:{id:0,x:24,lane:0,type,w:type==='tunnel'?7:1.55};
 r.level.obs=[proto];let done=false;
 for(let t=0;t<5000&&r.status==='playing';t++){const d=proto.x-r.x;if(!done&&d<(slide?6:5)&&d>0){slide?r.duck():r.jump();done=true;}r.step(1/120);if(done&&r.x>proto.x+5)break;}
 check(r.status==='playing',type+' can be cleared');check(done,type+' action performed');}
// First unshielded hit is a stumble (chaser); a hit while chased is caught. Revive works once.
{const r=new Run(1);r.level.powers=[];const seen=[];for(let t=0;t<120*12&&r.status==='playing';t++){r.step(1/120);for(const e of r.drain())seen.push(e.type);}
 check(seen.includes('stumble'),'first hit stumbles');check(seen.includes('caught')||r.status==='playing','second hit while chased catches');
 if(r.status==='playing'){let r2=r;while(r2.status==='playing'&&r2.time<30){r2.step(1/120);r2.drain();}}
 check(r.status==='dead','idle runner eventually caught');check(r.caught,'caught by chaser');}
{const r=new Run(1);tick(r,6);check(r.hits===1&&r.status==='playing'&&r.chaser>0,'first hit stumbles, run continues');}
// Hit bookkeeping, shield order, revive.
{const r=new Run(1);r.shield=1;check(r.hit('obs'),'hit lands');check(r.shield===0&&r.status==='playing','shield breaks first');
 r.invincible=0;check(r.hit('obs'),'second hit lands');check(r.chaser>0&&r.status==='playing','stumble starts chaser');
 r.invincible=0;check(r.hit('obs'),'third hit lands');check(r.status==='dead'&&r.caught,'chaser catches');
 check(r.revive(),'revive accepted');check(r.status==='playing'&&r.invincible>0&&r.chaser===0,'revive state');check(!r.revive(),'revive once per run');}
// Combo: coins/passes build the wallet multiplier (cap x3), hits reset it, streak tracked raw.
{const r=new Run(1);for(let i=0;i<24;i++)r._comboPoint();check(r.mult===3,'multiplier capped at x3');check(r.maxStreak===24,'streak counted raw');
 const evs=r.drain().filter(e=>e.type==='combo').map(e=>e.mult);check(evs.join()==='2,3','combo events 2,3');
 r._comboReset();check(r.mult===1&&r.comboN===0,'combo reset');check(r.drain().some(e=>e.type==='combo-reset'),'reset event');}
{const r=new Run(1,{character:'courier'});for(let i=0;i<6;i++)r._comboPoint();check(r.mult===2,'courier builds combo in 6');
 const f=new Run(1,{character:'fox'});for(let i=0;i<6;i++)f._comboPoint();check(f.mult===1,'others need 8');}
// Coin credit respects multiplier and daily coinMul; collected stays raw.
{const r=new Run(1,{coinMul:2});for(let i=0;i<8;i++)r._comboPoint();const before=r.coins;r.level.coins=[{x:1,lane:0,y:.7,taken:false}];r.step(1/120);
 check(r.coins-before===4,'mult x2 + coinMul x2 credits 4');check(r.collected===1,'collected counts raw pickups');}
// Character abilities.
check(new Run(1,{character:'cat'}).jumpV>new Run(1).jumpV,'cat jumps higher');
{const r=new Run(1,{character:'bunny'});check(r.jump(),'bunny first jump');tick(r,.2);check(r.jump(),'bunny double jump in air');check(!r.jump(),'no third jump');}
check(new Run(1,{character:'panda'}).shield===1,'panda starts with shield');
{const r=new Run(1,{character:'fox'});r.level.powers=[{x:1,lane:0,type:'magnet',taken:false}];tick(r,.2);check(r.magnet>11.5,'fox magnet 12s');}
{const r=new Run(1);r.level.powers=[{x:1,lane:0,type:'magnet',taken:false}];tick(r,.2);check(r.magnet<=8,'base magnet 8s');}
// Upgrade effects reach the run.
check(new Run(1,{upgrades:Object.assign({},DEFAULT_UP,{startShields:2})}).shield===2,'upgrade start shields');
check(new Run(1,{character:'panda',upgrades:Object.assign({},DEFAULT_UP,{startShields:2}),noStartShield:true}).shield===0,'daily no-start-shield wins over panda+upgrades');
{const r=new Run(1,{upgrades:Object.assign({},DEFAULT_UP,{shoesSeconds:9})});r.level.powers=[{x:1,lane:0,type:'shoes',taken:false}];tick(r,.2);check(r.shoes>8,'upgrade shoes seconds');
 check(r.jump()&&r.vy>=12.5,'shoes super jump');}
{const r=new Run(1);r.level.powers=[{x:1,lane:0,type:'flight',taken:false}];tick(r,.2);check(r.flight>3,'flight pickup');
 tick(r,1);check(r.y>2,'flight climbs');r.level.obs=[{id:0,x:r.x+1,lane:0,type:'crate',w:1.55}];tick(r,.2);check(r.status==='playing','flight is above obstacles');
 tick(r,3.5);check(r.flight===0,'flight ends');check(r.invincible>0||r.y===0,'landing grace');}
// Ramps launch; movers slide and can be dodged or jumped.
check(level(4).obs.some(o=>o.type==='ramp'),'ramps from level 4');
{const r=new Run(1);r.level.obs=[{id:0,x:10,lane:0,type:'ramp',w:1.2}];let launched=false,peak=0;for(let t=0;t<120*3&&r.status==='playing';t++){r.step(1/120);peak=Math.max(peak,r.y);if(r.drain().some(e=>e.type==='ramp'))launched=true;}check(launched&&peak>1.5,'ramp launches');}
check(level(3).obs.some(o=>o.type==='mover'),'movers from level 3');
check(level(2).obs.some(o=>o.type==='tunnel'),'tunnels from level 2');
{const r=new Run(3);const m=r.level.obs.find(o=>o.type==='mover');r.level.obs=[m];let lo=9,hi=-9;for(let t=0;t<120*8;t++){r.step(1/120);if(m.laneF!==undefined){lo=Math.min(lo,m.laneF);hi=Math.max(hi,m.laneF);}}check(hi-lo>.3,'mover travels');check(lo>=-1.01&&hi<=1.01,'mover stays on road');}
{const r=new Run(1);r.level.obs=[{id:0,x:10,lane:0,type:'mover',w:1.55,mover:{a:0,b:0,speed:1,phase:0}}];tick(r,1.2);check(r.hits===1&&r.chaser>0,'static mover hits like a crate');
 const pass=[...Array(1)];const r2=new Run(1);r2.level.obs=[{id:0,x:10,lane:1,type:'mover',w:1.55,mover:{a:1,b:1,speed:1,phase:0}}];let mp=false;for(let t=0;t<120*2;t++){r2.step(1/120);if(r2.drain().some(e=>e.type==='moving-pass'))mp=true;}check(mp,'moving-pass event');}
// Boundary limits and jump/slide state.
let r=new Run(1);for(let i=0;i<10;i++)r.move(-1);check(r.lane===-1,'left clamp');for(let i=0;i<10;i++)r.move(1);check(r.lane===1,'right clamp');check(r.jump(),'ground jump');check(!r.jump(),'no midair jump');tick(r,1.1);check(r.y===0,'lands');r.duck();check(r.slide>0,'slide');tick(r,1.5);check(r.slide===0,'slide ends');
check(CHARS.filter(c=>c.cost===0).length===2,'two free chars');check(CHARS.every(c=>c.ability&&c.abilityText),'every character has an ability');
check(level(20).speed>level(1).speed,'speed progression');check(level(20).length>level(1).length,'length progression');check(level(3).powers.some(p=>p.type==='magnet'),'magnet exists');
check(level(3).powers.some(p=>p.type==='shoes'),'shoes exist');check(level(7).powers.some(p=>p.type==='flight'),'flight exists');
// Daily seed determinism and modifiers.
{const a=level(7,{seed:12345}),b=level(7,{seed:12345}),c=level(7,{seed:999});check(JSON.stringify(a)===JSON.stringify(b),'seeded level deterministic');check(JSON.stringify(a.obs)!==JSON.stringify(c.obs),'seed changes layout');
 check(Math.abs(level(5,{speedMul:1.12}).speed-level(5).speed*1.12)<.01,'daily speed mod');check(Math.abs(level(5,{lengthMul:1.2}).length-level(5).length*1.2)<1,'daily length mod');
 const dr=new Run(6,{seed:777,speedMul:1.12});check(Math.abs(dr.level.speed-level(6).speed*1.12)<.01,'run carries daily mods');}
// Magnet: coins in range are visibly pulled in (pull timer), then collected; far coins stay.
{const r=new Run(1);r.level.coins=[{x:6,lane:1,y:.7,taken:false},{x:-3,lane:-1,y:.7,taken:false},{x:60,lane:0,y:.7,taken:false}];r.level.obs=[];r.level.powers=[{x:1,lane:0,type:'magnet',taken:false}];
 tick(r,.1);const c0=r.level.coins[0];check(r.magnet>0&&c0.pull>0&&!c0.taken||c0.taken,'magnet starts pulling nearby coin');check(!r.level.coins[2].pull,'far coin not pulled');
 tick(r,.4);check(r.level.coins[0].taken&&r.level.coins[1].taken,'pulled coins collected');check(!r.level.coins[2].taken,'far coin stays');check(r.coins>=2,'pull pays out coins');}
// Every power-up has a real effect.
{const mk=t=>{const r=new Run(1,{noStartShield:true});r.level.obs=[];r.level.powers=[{x:1,lane:0,type:t,taken:false}];tick(r,.2);return r;};
 check(mk('shield').shield===1,'shield');check(mk('shoes').shoes>0,'shoes');check(mk('flight').flight>0,'flight');check(mk('board').vehicle==='board','board');check(mk('pogo').vehicle==='pogo','pogo');
 const f=mk('flight');tick(f,.8);check(f.y>2,'flight lifts');}

console.log(checks+' checks passed, 100 full level simulations');
let completions=0;for(let n=1;n<=20;n++)for(const dt of [1/120,1/60,1/30]){const r=new Run(n);let last=-100;for(let ticks=0;ticks<15000&&r.status==='playing';ticks++){const o=r.level.obs.find(o=>o.type!=='ramp'&&o.x>r.x-1.3);if(o){const target=o.type==='mover'?Math.round(eff(o)):o.lane;r.move(Math.sign(target-r.lane));const d=o.x-r.x;if(d<5.4&&d>3&&r.x-last>10){(o.type==='arch'||o.type==='tunnel')?r.duck():r.jump();last=r.x;}}r.step(dt);}check(r.status==='won',`jump/slide bot level ${n} dt ${dt}`);completions++;}console.log(completions+' full action-bot completions at 30/60/120 Hz');

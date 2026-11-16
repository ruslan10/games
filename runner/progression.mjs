/* Runner progression: missions, daily seeded challenge, power upgrades.
   Pure logic, no DOM, no storage access. The game owns localStorage; this module only
   normalizes and mutates a plain `prog` object that lives at store.prog. Old saves without it load fine. */
export const VERSION=1;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const int=(v,a,b,d=0)=>{v=Math.floor(Number(v));return Number.isFinite(v)?clamp(v,a,b):d;};
export function rngFrom(seed){seed=seed>>>0;return()=>{seed=(seed+0x6D2B79F5)>>>0;let t=seed;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
export function hashStr(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}

/* ---------- Upgrades ---------- */
// costs[i] = price to go from level i to i+1. values[i] = effect at level i.
export const UPGRADES={
 magnet:{name:'מגנט ארוך',desc:'המגנט נשאר פעיל יותר זמן',costs:[120,260,480],values:[8,10,12,15],unit:'שנ׳'},
 shield:{name:'מגן מתחיל',desc:'מתחילים כל ריצה עם מגן',costs:[200,520],values:[0,1,2],unit:'מגנים'},
 coin:{name:'מטבעות כפולים',desc:'בונוס מטבעות בסוף כל ריצה',costs:[150,350,700],values:[0,.1,.2,.3],unit:'%'},
 shoes:{name:'נעלי קפיצה',desc:'נעלי הקפיצה נמשכות יותר זמן',costs:[140,300,560],values:[6,8,10,12],unit:'שנ׳'},
 flight:{name:'טיסה ארוכה',desc:'קטע הטיסה נמשך יותר זמן',costs:[160,340,620],values:[4,5,6,7],unit:'שנ׳'},
 revive:{name:'החייאה זולה',desc:'החייאה אחרי נפילה עולה פחות',costs:[180,420],values:[60,40,25],unit:'מטבעות'}
};
export const UPGRADE_IDS=Object.keys(UPGRADES);
export const upgradeLevel=(p,id)=>int(p.upgrades?.[id],0,UPGRADES[id].values.length-1);
export const upgradeValue=(p,id)=>UPGRADES[id].values[upgradeLevel(p,id)];
export const upgradeCost=(p,id)=>{const l=upgradeLevel(p,id);return l>=UPGRADES[id].costs.length?null:UPGRADES[id].costs[l];};
/** Effects the gameplay code reads at run start. */
export function effects(p){return{magnetSeconds:upgradeValue(p,'magnet'),startShields:upgradeValue(p,'shield'),coinBonus:upgradeValue(p,'coin'),shoesSeconds:upgradeValue(p,'shoes'),flightSeconds:upgradeValue(p,'flight'),reviveCost:upgradeValue(p,'revive')};}
/** Buys the next level. wallet = store (uses store.coins). Returns {ok,reason?,cost?,level?}. Atomic: no change on failure. */
export function buyUpgrade(wallet,id){const p=wallet.prog;if(!UPGRADES[id])return{ok:false,reason:'unknown'};const cost=upgradeCost(p,id);if(cost===null)return{ok:false,reason:'max'};if(!(wallet.coins>=cost))return{ok:false,reason:'coins'};wallet.coins-=cost;p.upgrades[id]=upgradeLevel(p,id)+1;return{ok:true,cost,level:p.upgrades[id]};}

/* ---------- Missions ---------- */
// scope 'run' = reach target inside one run; 'total' = accumulate across runs.
// stat names are what the game reports through tracker.add / tracker.event.
export const MISSIONS=[
 {id:'coins_run',stat:'coins',scope:'run',text:n=>`אסוף ${n} מטבעות בריצה אחת`,targets:[30,60,100],rewards:[25,50,90]},
 {id:'coins_total',stat:'coins',scope:'total',text:n=>`אסוף ${n} מטבעות בסך הכול`,targets:[150,400,900],rewards:[30,70,140]},
 {id:'dodge_fire',stat:'dodges',scope:'total',text:n=>`החמץ ${n} כדורי אש`,targets:[5,12,25],rewards:[30,60,110]},
 {id:'jumps',stat:'jumps',scope:'total',text:n=>`קפוץ ${n} פעמים`,targets:[25,60,120],rewards:[20,45,90]},
 {id:'slides',stat:'slides',scope:'total',text:n=>`החלק ${n} פעמים`,targets:[15,40,80],rewards:[20,45,90]},
 {id:'powerups',stat:'powerups',scope:'total',text:n=>`אסוף ${n} כוחות`,targets:[3,8,16],rewards:[25,55,100]},
 {id:'combo',stat:'combo',scope:'run',text:n=>`רצף נקי של ${n} התחמקויות או איסופים`,targets:[3,5,8],rewards:[30,60,110]},
 {id:'wins',stat:'wins',scope:'total',text:n=>`סיים ${n} שלבים`,targets:[2,5,10],rewards:[40,90,160]},
 {id:'distance',stat:'distance',scope:'run',text:n=>`רוץ ${n} מטרים בריצה אחת`,targets:[200,350,500],rewards:[25,55,100]},
 {id:'moving',stat:'moving',scope:'total',text:n=>`התחמק מ-${n} מכשולים נעים`,targets:[4,10,20],rewards:[30,60,110]},
 {id:'flight',stat:'flights',scope:'total',text:n=>`טוס ${n} פעמים`,targets:[1,3,6],rewards:[30,70,120]},
 {id:'revive',stat:'revives',scope:'total',text:n=>`החייה את עצמך ${n} פעמים`,targets:[1,2,4],rewards:[30,60,100]}
];
export const STATS=[...new Set(MISSIONS.map(m=>m.stat))];
const mdef=id=>MISSIONS.find(m=>m.id===id);
const SLOTS=3;
function makeMission(p,exclude){const r=rngFrom(hashStr('m'+p.seq++));const pool=MISSIONS.filter(m=>!exclude.includes(m.id));const d=pool[Math.floor(r()*pool.length)];const tier=Math.floor(r()*(1+Math.min(2,Math.floor(p.completed/4))));return{id:d.id,tier,progress:0};}
export const missionView=m=>{const d=mdef(m.id);return{id:m.id,text:d.text(d.targets[m.tier]),target:d.targets[m.tier],reward:d.rewards[m.tier],progress:Math.min(m.progress,d.targets[m.tier]),scope:d.scope};};
export const missionViews=p=>p.missions.map(missionView);

/* ---------- Daily seeded challenge ---------- */
export const DAILY_MODS=[
 {id:'rush',name:'ריצה מהירה',desc:'המהירות גבוהה ב-12%',speedMul:1.12},
 {id:'rich',name:'גשם מטבעות',desc:'מטבעות שווים כפול בריצה היומית',coinMul:2},
 {id:'fiery',name:'יום חם',desc:'יותר כדורי אש',fireMul:1.5},
 {id:'bare',name:'בלי מגן',desc:'לא מתחילים עם מגן',noStartShield:true},
 {id:'long',name:'מרתון',desc:'מסלול ארוך ב-20%',lengthMul:1.2}
];
/** dateKey: 'YYYY-MM-DD' at Asia/Jerusalem midnight (use dateKey()). Same key => same challenge on every device. */
export function dailyInfo(key){const r=rngFrom(hashStr('daily'+key));const mod=DAILY_MODS[Math.floor(r()*DAILY_MODS.length)];const level=3+Math.floor(r()*15);const goal=[0.5,0.6,0.7][Math.floor(r()*3)];return{key,seed:hashStr('seed'+key),level,mod,goalRatio:goal,reward:80};}
export const DAILY_TZ='Asia/Jerusalem';
/** Daily rollover is explicit: midnight in DAILY_TZ for every device (not the device clock zone). */
export function dateKey(d=new Date(),tz=DAILY_TZ){return new Intl.DateTimeFormat('en-CA',{timeZone:tz,year:'numeric',month:'2-digit',day:'2-digit'}).format(d);}
const prevKey=key=>{const [y,m,d]=key.split('-').map(Number);return new Date(Date.UTC(y,m-1,d-1)).toISOString().slice(0,10);};
export const dailyStatus=(p,key)=>({done:p.daily.lastDone===key,streak:p.daily.lastDone===key||p.daily.lastDone===prevKey(key)?p.daily.streak:0,best:p.daily.bestKey===key?p.daily.best:0});

/* ---------- Save normalization ---------- */
export function normalizeProg(raw){const r=raw&&typeof raw==='object'?raw:{};const p={v:VERSION,seq:int(r.seq,0,1e9),completed:int(r.completed,0,1e6),upgrades:{},missions:[],daily:{lastDone:typeof r.daily?.lastDone==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(r.daily.lastDone)?r.daily.lastDone:'',streak:int(r.daily?.streak,0,1e4),best:int(r.daily?.best,0,1e6),bestKey:typeof r.daily?.bestKey==='string'?r.daily.bestKey.slice(0,10):''},lifetime:{}};
for(const id of UPGRADE_IDS)p.upgrades[id]=upgradeLevel({upgrades:r.upgrades},id);
for(const m of Array.isArray(r.missions)?r.missions:[]){const d=m&&mdef(m.id);if(d&&p.missions.length<SLOTS&&!p.missions.some(x=>x.id===m.id))p.missions.push({id:m.id,tier:int(m.tier,0,2),progress:int(m.progress,0,1e7)});}
while(p.missions.length<SLOTS)p.missions.push(makeMission(p,p.missions.map(m=>m.id)));
for(const s of STATS)p.lifetime[s]=int(r.lifetime?.[s],0,1e9);
return p;}

/* ---------- Per-run tracker + settlement ---------- */
const EVENT_STATS={coin:'coins',jump:'jumps',slide:'slides',magnet:'powerups',shield:'powerups','fb-dodge':'dodges'};
/** Create one per run. Feed it engine events (run.drain()/fireballs.drain()) and extra stats. */
export function createTracker(){const s={};for(const k of STATS)s[k]=0;const t={stats:s,
 add(stat,n=1){if(stat in s)s[stat]+=n;},
 max(stat,v){if(stat in s&&v>s[stat])s[stat]=v;},
 event(e){const k=EVENT_STATS[e&&e.type];if(k)s[k]++;},
 events(list){for(const e of list||[])t.event(e);}};return t;}
/**
 * Call once when a run ends (win, death, quit). Mutates prog and returns what to show/credit.
 * info: {won,distance,dateKey?,daily?:bool,coinsCollected?}
 * Returns {missions:[{id,text,reward}],missionCoins,coinBonus,dailyCoins,dailyDone,coins} - game adds `coins` to store.coins.
 */
export function settleRun(p,stats,info={}){const st={...stats};if(info.won)st.wins=(st.wins||0)+1;st.distance=Math.max(st.distance||0,Math.floor(info.distance||0));
 const done=[];let missionCoins=0;
 for(let i=0;i<p.missions.length;i++){const m=p.missions[i],d=mdef(m.id),target=d.targets[m.tier];const v=st[d.stat]||0;
  if(d.scope==='run')m.progress=Math.max(m.progress,v);else m.progress+=v;
  if(m.progress>=target){done.push({id:m.id,text:d.text(target),reward:d.rewards[m.tier]});missionCoins+=d.rewards[m.tier];p.completed++;p.missions[i]=null;}}
 const kept=p.missions.filter(Boolean);const ex=kept.map(m=>m.id);p.missions=kept;while(p.missions.length<SLOTS){const m=makeMission(p,ex);ex.push(m.id);p.missions.push(m);}
 for(const k of STATS)p.lifetime[k]=Math.min(1e9,(p.lifetime[k]||0)+(k==='combo'||k==='distance'?0:(st[k]||0)));
 const coinBonus=Math.floor((st.coins||0)*effects(p).coinBonus);
 let dailyCoins=0,dailyDone=false;
 if(info.daily&&info.dateKey){const di=dailyInfo(info.dateKey);const c=st.coins||0;if(p.daily.bestKey!==info.dateKey||c>p.daily.best){p.daily.best=c;p.daily.bestKey=info.dateKey;}
  if(info.won&&p.daily.lastDone!==info.dateKey&&c>=(info.goalCoins??0)){p.daily.streak=p.daily.lastDone===prevKey(info.dateKey)?p.daily.streak+1:1;p.daily.lastDone=info.dateKey;dailyCoins=di.reward+Math.min(p.daily.streak-1,6)*10;dailyDone=true;}}
 return{missions:done,missionCoins,coinBonus,dailyCoins,dailyDone,coins:missionCoins+coinBonus+dailyCoins};}
/** Number of coins needed to pass today's challenge, given the level's total coin count (level.coins.length). */
export const dailyGoal=(info,totalCoins)=>Math.ceil(totalCoins*info.goalRatio);

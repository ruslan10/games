/* Pure collection state. The host owns localStorage and wallet crediting.
   No imports from rendering or engine; old save fields are not touched. */
import {dateKey as todayKey,hashStr,rngFrom} from './progression.mjs';
export const COLLECTION_VERSION=1;
export const WORD_REWARD=75;
export const WORDS=Object.freeze(['CITY','ROOF','JUMP','DASH','GLOW','STAR','ZOOM']);
export const EVENT_MILESTONES=Object.freeze([{target:5,coins:40},{target:15,coins:90},{target:30,coins:180}].map(Object.freeze));
const maxTokens=EVENT_MILESTONES.at(-1).target;
const integer=(v,max=1e6)=>{const n=Math.floor(Number(v));return Number.isFinite(n)?Math.max(0,Math.min(max,n)):0;};
const validDate=k=>typeof k==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(k)&&Number.isFinite(Date.parse(k+'T12:00:00Z'))&&new Date(k+'T12:00:00Z').toISOString().slice(0,10)===k;
const keyOrToday=k=>validDate(k)?k:todayKey();
const validMonth=k=>typeof k==='string'&&/^\d{4}-(0[1-9]|1[0-2])$/.test(k);
const levelNumber=n=>Math.max(1,Math.min(20,integer(n,20)||1));
const wordFor=key=>WORDS[hashStr('word:'+key)%WORDS.length];
const wordFresh=key=>({key,found:[],claimed:false});
const eventFresh=key=>({key:key.slice(0,7),count:0,claimed:[]});
const canonicalRecord=b=>({distance:integer(b?.distance),won:b?.won===true});
/** Add store.collections only. Missing/invalid input returns safe defaults. */
export function normalizeCollections(raw){
 const r=raw&&typeof raw==='object'?raw:{};
 const key=validDate(r.word?.key)?r.word.key:'';
 const month=validMonth(r.event?.key)?r.event.key:'';
 const found=[...new Set((Array.isArray(r.word?.found)?r.word.found:[]).filter(i=>Number.isInteger(i)&&i>=0&&i<4))].sort();
 const count=integer(r.event?.count,maxTokens);
 const claimed=[...new Set((Array.isArray(r.event?.claimed)?r.event.claimed:[]).filter(t=>EVENT_MILESTONES.some(m=>m.target===t&&count>=t)))].sort((a,b)=>a-b);
 const s={v:COLLECTION_VERSION,word:{key,found:key?found:[],claimed:!!key&&found.length===4&&r.word?.claimed===true},event:{key:month,count:month?count:0,claimed:month?claimed:[]},best:{normal:{},daily:{}}};
 for(let n=1;n<=20;n++)if(r.best?.normal?.[n])s.best.normal[n]=canonicalRecord(r.best.normal[n]);
 const entries=Object.entries(r.best?.daily&&typeof r.best.daily==='object'?r.best.daily:{}).filter(([id])=>/^\d{4}-\d{2}-\d{2}:\d{1,2}$/.test(id)&&validDate(id.slice(0,10))&&Number(id.slice(11))>=1&&Number(id.slice(11))<=20).sort(([a],[b])=>b.localeCompare(a)).slice(0,32);
 for(const [id,b] of entries)s.best.daily[id]=canonicalRecord(b);
 return s;
}
/** Display-only view. Does not reset the stored state just by opening a menu. */
export function collectionInfo(state,key=todayKey()){
 key=keyOrToday(key);const s=normalizeCollections(state),word=s.word.key===key?s.word:wordFresh(key),event=s.event.key===key.slice(0,7)?s.event:eventFresh(key);
 const text=wordFor(key),letters=[...text].map((char,index)=>({id:'letter:'+index,char,index,found:word.found.includes(index)}));
 return {word:{key,text,letters,found:word.found.length,total:4,done:word.claimed,reward:WORD_REWARD},event:{id:event.key,key:event.key,name:'אורות העיר',symbol:'✦',count:event.count,target:maxTokens,done:event.count>=maxTokens,milestones:EVENT_MILESTONES.map(m=>({...m,claimed:event.claimed.includes(m.target)})),next:EVENT_MILESTONES.find(m=>!event.claimed.includes(m.target))||null},best:s.best};
}
/** Seven safe ground pickups, in stable order. level = engine level object.
    Caller renders pickup.value (a Latin letter or ✦), uses y as world height.
    No collision with static obstacles, tunnels, ramps, or either moving-car lane.
    Dynamic hazards still require normal gameplay avoidance. */
export function createPickups(level,key=todayKey()){
 key=keyOrToday(key);if(!level||!Number.isFinite(level.length)||level.length<80)return[];
 const rnd=rngFrom(hashStr('collect:'+key+':'+level.n+':'+(level.seed||0))),out=[];
 const kinds=['letter','event','letter','event','letter','event','letter'];let letter=0,event=0;
 const safe=(x,lane)=>!(level.routes||[]).some(r=>r.lane===lane&&x>=r.start-5&&x<=r.end+5)&&!(level.obs||[]).some(o=>{const extent=o.type==='tunnel'?Math.max(3.6,(o.w||7)/2):Math.max(1.6,(o.w||2)/2);if(Math.abs(o.x-x)>extent+5)return false;return o.type==='mover'?lane>=Math.min(o.mover?.a??o.lane,o.mover?.b??o.lane)&&lane<=Math.max(o.mover?.a??o.lane,o.mover?.b??o.lane):lane===o.lane;});
 for(let i=0;i<kinds.length;i++){
  const desired=24+(level.length-55)*i/7,laneOffset=Math.floor(rnd()*3);let point=null;
  for(let d=0;d<=24&&!point;d+=2)for(const sign of d===0?[1]:[1,-1]){const x=Math.round(desired+d*sign);if(x<18||x>level.length-18||out.some(p=>Math.abs(p.x-x)<13))continue;for(let j=0;j<3;j++){const lane=(laneOffset+j)%3-1;if(safe(x,lane)){point={x,lane,y:.85};break;}}if(point)break;}
  if(!point)continue;
  const kind=kinds[i],index=kind==='letter'?letter++:event++;
  out.push({...point,id:kind+':'+index,kind,index,value:kind==='letter'?wordFor(key)[index]:'✦',dateKey:key,eventKey:key.slice(0,7),taken:false});
 }
 return out.sort((a,b)=>a.x-b.x);
}
const zero=()=>({coins:0,message:'',wordDone:false,eventRewards:[]});
/** Atomic pickup mutation + fixed reward return. CALLER credits returned coins and saves
    immediately. Module owns pickup.taken: call this BEFORE setting it in host code.
    Pickups are bound to their run date. After midnight an old run cannot erase/newly
    advance today's hunt. Optional {zen:true} guarantees no writes or rewards. */
export function collectPickup(state,pickup,key=todayKey(),opts={}){
 key=keyOrToday(key);const result=zero();
 if(opts.zen||!state||!pickup||pickup.taken||pickup.dateKey!==key||!['letter','event'].includes(pickup.kind))return result;
 // Date monotonicity prevents stale run completions from overwriting newer saves.
 if(state.word?.key>key||state.event?.key>key.slice(0,7))return result;
 if(pickup.kind==='letter'){
  const index=pickup.index??Number(String(pickup.id).split(':')[1]);
  if(!Number.isInteger(index)||index<0||index>=4||pickup.value!==wordFor(key)[index])return result;
  if(state.word?.key!==key)state.word=wordFresh(key);
  pickup.taken=true;if(state.word.found.includes(index)||state.word.claimed)return result;
  state.word.found.push(index);state.word.found.sort();
  result.message='אות נאספה · '+state.word.found.length+'/4';
  if(state.word.found.length===4){state.word.claimed=true;result.coins=WORD_REWARD;result.wordDone=true;result.message='המילה הושלמה! +'+WORD_REWARD+' מטבעות';}
 }else{
  if(pickup.eventKey!==key.slice(0,7))return result;
  if(state.event?.key!==key.slice(0,7))state.event=eventFresh(key);
  pickup.taken=true;if(state.event.count>=maxTokens)return result;
  state.event.count++;
  result.message='אורות העיר · '+state.event.count+'/'+maxTokens;
  for(const m of EVENT_MILESTONES)if(state.event.count>=m.target&&!state.event.claimed.includes(m.target)){state.event.claimed.push(m.target);result.coins+=m.coins;result.eventRewards.push({...m});}
  if(result.coins)result.message='אורות העיר! +'+result.coins+' מטבעות';
 }
 return result;
}
/** Prior distance for THIS route only. Daily and regular markers never mix. */
export function bestDistance(state,{level=1,daily=false,dateKey=todayKey(),zen=false}={}){
 if(zen)return 0;const s=state?.best,n=levelNumber(level),key=keyOrToday(dateKey);
 return integer((daily?s?.daily?.[key+':'+n]:s?.normal?.[n])?.distance);
}
/** Call once from bank(), before resetting the run. PB does not issue currency.
    Existing stars/coin-best remain in store.best, unchanged. Old saves have no
    distance record and intentionally show no invented marker on their first run. */
export function recordBest(state,{level=1,daily=false,distance=0,won=false,dateKey=todayKey(),zen=false}={}){
 if(zen||!state)return {newBest:false,previous:0,distance:0};
 const opts={level,daily,dateKey},previous=bestDistance(state,opts),value=integer(distance),n=levelNumber(level),key=keyOrToday(dateKey);
 if(value<=previous)return {newBest:false,previous,distance:previous};
 if(!state.best)state.best={normal:{},daily:{}};const group=daily?(state.best.daily??={}):(state.best.normal??={});
 group[daily?key+':'+n:n]={distance:value,won:won===true};
 if(daily){const keys=Object.keys(group).sort().reverse();for(const k of keys.slice(32))delete group[k];}
 return {newBest:true,previous,distance:value};
}

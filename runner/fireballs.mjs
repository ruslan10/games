/* Telegraphed fireball hazard, layered on the engine. Deterministic per level (and per daily seed).
   Hits route through run.hit(), so shield/stumble/chaser rules stay in one place. */
export const FB={warn:.9,launchDist:36,approach:16,hitX:.8,hitLane:.95,clearY:.9};
export function createFireballs(level,fireMul=1){
 let seed=(level.n*7919+13+(level.seed|0))>>>0;const rng=()=>{seed=(seed+0x6D2B79F5)>>>0;let t=seed;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
 const gap=()=>(Math.max(3.4,7.2-level.n*.2)+rng()*1.5)/Math.max(.2,fireMul);
 let nextAt=level.n===1?9:5+rng()*1.5;const list=[];const out={list,events:[],hits:0,dodges:0,spawned:0};
 out.update=function(run,dt){
  if(run.status!=='playing')return;const t=run.time;
  // Do not demand jumping a fireball while the same lane requires a slide/jump.
  // Estimate the intercept at current forward speed; retry later if a gate/box is nearby.
  const impactX=run.x+level.speed*(FB.warn+FB.launchDist/(level.speed+FB.approach));
  const conflict=run.level.obs.some(o=>o.type!=='ramp'&&o.type!=='mover'&&o.lane===run.lane&&o.x>run.x-level.speed*.8-2&&o.x<impactX+level.speed*1.1+3);
  const routeTransition=(level.routes||[]).some(r=>run.x>r.start-30&&run.x<r.end+20);
  if(t>=nextAt&&(conflict||routeTransition))nextAt=t+.5;
  if(t>=nextAt&&run.x<run.level.length-45){list.push({phase:'warn',t0:t,lane:run.lane,x:0});out.spawned++;out.events.push({type:'fb-warn'});nextAt=t+gap();}
  for(let i=list.length-1;i>=0;i--){const f=list[i];
   if(f.phase==='warn'){if(t-f.t0>=FB.warn){f.phase='fly';f.x=run.x+FB.launchDist;out.events.push({type:'fb-launch'});}continue;}
   f.x-=FB.approach*dt;const dx=f.x-run.x;
   if(Math.abs(dx)<FB.hitX&&Math.abs(f.lane*2.6-run.lateral)<FB.hitLane&&run.y<FB.clearY&&run.invincible<=0){
    list.splice(i,1);out.hits++;out.events.push({type:'fb-hit'});
    if(run.hit)run.hit('fireball');
    else if(run.shield){run.shield=0;run.invincible=1.4;run.hits++;run.events.push({type:'break'});}
    else{run.status='dead';run.events.push({type:'dead'});}
   }else if(dx<-1.3){list.splice(i,1);out.dodges++;out.events.push({type:'fb-dodge'});}
  }};
 out.drain=()=>out.events.splice(0);
 return out;}

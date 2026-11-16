import assert from 'node:assert/strict';import{createRequire}from'node:module';import{createFireballs,FB}from'../fireballs.mjs';const{Run}=createRequire(import.meta.url)('../engine.js');let checked=0;
for(let n=1;n<=20;n++)for(const lane of[-1,0,1]){const r=new Run(n),f=createFireballs(r.level);r.lane=lane;r.lateral=lane*2.6;
 // Advance a normal-speed route with invulnerability only to inspect every spawn policy.
 for(let k=0;k<10000&&r.x<r.level.length;k++){r.invincible=2;r.step(1/120);const before=f.spawned;f.update(r,1/120);if(f.spawned>before){const impact=r.x+r.level.speed*(FB.warn+FB.launchDist/(r.level.speed+FB.approach));assert(!r.level.obs.some(o=>o.type!=='ramp'&&o.type!=='mover'&&o.lane===lane&&o.x>r.x-r.level.speed*.8-2&&o.x<impact+r.level.speed*1.1+3),'warning/impact conflicts with static obstacle');checked++;}}}
assert(checked>100);console.log(checked+' fireball warnings/intercepts separated from same-lane static obstacles across 20 levels');

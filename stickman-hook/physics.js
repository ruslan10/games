/* StickmanPhysics 1.0. Original, dependency-free, plain-script circle/rope engine.
 * Coordinates: pixels, +Y down. Time: seconds. Velocity: px/s.
 * Load with <script src="physics.js"></script>; then new StickmanPhysics.World({...}).
 * No DOM, randomness, clock reads or rendering. Runs in browsers or a JS VM.
 *
 * World(options): options override DEFAULTS below; player:{x,y,vx,vy,radius};
 * anchors:[{id,x,y,enabled?}]; terrain:[{x,y}] ascending X (solid below);
 * pads:[{id,x1,y1,x2,y2,nx?,ny?,restitution?,minSpeed?,boostX?,boostY?}].
 * standTopOffset optionally adds a one-way, non-bouncing horizontal top at y1-offset.
 * Pad normal points out of its active face; default is segment's upward normal.
 * minSpeed is outward normal launch speed; boostX/Y are explicit added velocity.
 * Camera x/y are the world-space view CENTER, not its upper-left corner.
 *
 * update(dt): accumulate nonnegative real seconds, execute <=maxSteps fixed ticks,
 * return {steps,alpha,backlog}. Excess time is retained, NEVER silently discarded.
 * If backlog>0 call update(0) to catch up. alpha is clamped for interpolation.
 * step(n=1): execute exact fixed ticks (does not consume update's accumulator).
 * Replay determinism requires identical options and inputs at the same tick.
 * onBeforeStep(world) may apply scripted controls at exact tick boundaries.
 * setHeld(bool): auto-catch while held; false releases. release() also clears held.
 * attach(anchorOrId,length?): false when disabled, out of catchRadius, or unknown;
 * omitted length uses current distance. Explicit lengths clamp to min/maxRope.
 * release(): preserve velocity exactly. An attach removes ONLY outward radial
 * velocity (taut inelastic catch). A slack rope allows free ballistic movement.
 * reset(playerState?): reset time, rope, events, held state and camera.
 * drainEvents(): consumes [{type,tick,time,...}] for attach/release/pad/terrain.
 * getState(): detached numeric snapshot (does not include level geometry).
 * Public mutable data: player, rope, camera, anchors, pads, terrain, options,
 * held, tick, time. Don't mutate rope/player mid-tick. Terrain is piecewise-linear;
 * use heightfield(fn,x0,x1,spacing=12) for curves. No walls/overhangs or rope wrap.
 */
(function(root){
  'use strict';
  const DEFAULTS = Object.freeze({fixedDt:1/120,maxSteps:240,gravity:1050,
    airDrag:0.045,terminalVelocity:1400,maxSpeed:1900,catchRadius:390,
    minRope:35,maxRope:420,assist:70,assistSpeed:500,forward:1,regrabDelay:0.4,
    terrainRestitution:0.06,terrainFriction:0.12,bounceThreshold:100,
    cameraSharpness:7,cameraLookahead:0.24,cameraMaxLookahead:210,
    cameraOffsetX:100,cameraOffsetY:-30,collisionIterations:5});
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const finite=(v,f)=>Number.isFinite(v)?v:f;
  function heightfield(fn,x0,x1,spacing){
    spacing=spacing===undefined?12:spacing;
    if(!(spacing>0)||!(x1>x0)) throw new RangeError('Invalid heightfield interval');
    const a=[];for(let x=x0;x<x1;x+=spacing)a.push({x:x,y:fn(x)});
    a.push({x:x1,y:fn(x1)});return a;
  }
  class World{
    constructor(o){
      o=o||{};this.options=Object.assign({},DEFAULTS,o);
      if(!(this.options.fixedDt>0)||!Number.isFinite(this.options.fixedDt))throw new RangeError('fixedDt must be positive');
      this.anchors=o.anchors||[];this.pads=o.pads||[];this.terrain=o.terrain||[];
      this.onBeforeStep=typeof o.onBeforeStep==='function'?o.onBeforeStep:null;
      this._initial=Object.assign({x:0,y:0,vx:0,vy:0,radius:12},o.player);
      this.reset();
    }
    reset(p){
      this.player=Object.assign({},this._initial,p);this.player.radius=Math.max(1,this.player.radius);
      this.rope=null;this.held=false;this.tick=0;this.time=0;this.accumulator=0;
      this.events=[];this._padTimes=new Map();this._contact=false;this._airHops=this.options.airHops===undefined?1:this.options.airHops;
      this.camera={x:this.player.x+this.options.cameraOffsetX,y:this.player.y+this.options.cameraOffsetY};
      return this;
    }
    _event(type,data){this.events.push(Object.assign({type:type,tick:this.tick,time:this.time},data));}
    setHeld(held){this.held=!!held;if(!this.held)this.release();return this;}
    nearestAnchor(){
      let best=null,dist=this.options.catchRadius;
      const lr=this._lastRelease,block=lr&&(this.time-lr.time)<this.options.regrabDelay?lr.id:null;
      for(const a of this.anchors){if(a.enabled===false)continue;if(block&&a.id===block)continue;
        const d=Math.hypot(a.x-this.player.x,a.y-this.player.y);
        if(d<=dist){dist=d;best=a;}}
      return best;
    }
    attach(a,length){
      if(typeof a!=='object')a=this.anchors.find(v=>v.id===a);
      if(!a||a.enabled===false)return false;
      const p=this.player,o=this.options,dx=p.x-a.x,dy=p.y-a.y,d=Math.hypot(dx,dy);
      if(d>o.catchRadius)return false;
      const len=clamp(finite(length,d),o.minRope,o.maxRope);
      this.rope={anchor:a,length:len};this._solveRope();this._airHops=this.options.airHops===undefined?1:this.options.airHops;
      this._event('attach',{anchorId:a.id,length:len});return true;
    }
    release(){
      this.held=false;
      if(this.rope){
        const rb=this.options.releaseBoost===undefined?1:this.options.releaseBoost;
        if(rb!==1){const p=this.player,sp=Math.hypot(p.vx,p.vy)||1,cap=this.options.maxSpeed*1.15/sp,mul=Math.min(rb,cap);
          p.vx*=mul;p.vy*=mul;}
        this._event('release',{anchorId:this.rope.anchor.id,vx:this.player.vx,vy:this.player.vy});this._lastRelease={id:this.rope.anchor.id,time:this.time};this.rope=null;}
      return this;
    }
    /* tap(): poki-style tap. Hook the nearest in-range anchor; with no anchor
       in range, hop in the current direction (ground jump when in contact,
       one air-hop per airtime otherwise). Returns what happened. */
    tap(){
      if(this.rope)return 'swing';
      const a=this.nearestAnchor();
      if(a){this.attach(a);return 'hook';}
      const p=this.player,dir=Math.sign(p.vx||this.options.forward);
      if(this._contact){
        const gb=this.options.groundBoost===undefined?1:this.options.groundBoost;
        p.vy=Math.min(p.vy,0)-620*gb;p.vx+=260*gb*dir;
        this._event('jump',{kind:'ground'});return 'jump';
      }
      if(this._airHops>0){
        this._airHops--;
        p.vy=Math.min(p.vy,0)-430;p.vx+=210*dir;
        this._event('jump',{kind:'air'});return 'hop';
      }
      return 'none';
    }
    update(dt){
      if(!Number.isFinite(dt)||dt<0)throw new RangeError('dt must be finite and nonnegative');
      const h=this.options.fixedDt;this.accumulator+=dt;let n=0;
      while(this.accumulator+1e-12>=h&&n<this.options.maxSteps){this._tick();this.accumulator-=h;n++;}
      this.accumulator=Math.max(0,this.accumulator);
      return {steps:n,alpha:clamp(this.accumulator/h,0,1),backlog:Math.max(0,this.accumulator-h)};
    }
    step(n){n=n===undefined?1:n;if(!Number.isInteger(n)||n<0)throw new RangeError('tickCount must be a nonnegative integer');
      for(let i=0;i<n;i++)this._tick();return this;
    }
    _solveRope(){
      if(!this.rope)return;
      const p=this.player,r=this.rope,dx=p.x-r.anchor.x,dy=p.y-r.anchor.y,d=Math.hypot(dx,dy);
      if(d<r.length-1e-6||d<1e-9)return;
      const nx=dx/d,ny=dy/d;
      if(d>r.length){p.x=r.anchor.x+nx*r.length;p.y=r.anchor.y+ny*r.length;}
      const vr=p.vx*nx+p.vy*ny;if(vr>0){p.vx-=vr*nx;p.vy-=vr*ny;}
    }
    _reflect(nx,ny,e,minSpeed,bx,by){
      const p=this.player,vn=p.vx*nx+p.vy*ny;if(vn>=0)return false;
      const out=Math.max(-vn*e,minSpeed||0),impulse=out-vn;
      p.vx+=impulse*nx+(bx||0);p.vy+=impulse*ny+(by||0);return true;
    }
    _terrain(){
      const p=this.player,t=this.terrain,o=this.options;let contact=false;
      for(let i=1;i<t.length;i++){
        const a=t[i-1],b=t[i],dx=b.x-a.x,dy=b.y-a.y,l2=dx*dx+dy*dy;
        if(!l2||p.x+p.radius<a.x||p.x-p.radius>b.x)continue;
        const u=clamp(((p.x-a.x)*dx+(p.y-a.y)*dy)/l2,0,1),qx=a.x+dx*u,qy=a.y+dy*u;
        const len=Math.sqrt(l2);let nx=dy/len,ny=-dx/len;
        const signed=(p.x-qx)*nx+(p.y-qy)*ny;
        let penetration=p.radius-signed;
        // Restrict endpoint contacts to the circle, except when below this segment.
        if((u===0||u===1)&&signed>=0){const d=Math.hypot(p.x-qx,p.y-qy);if(d>=p.radius)continue;
          if(d>1e-8){nx=(p.x-qx)/d;ny=(p.y-qy)/d;}penetration=p.radius-d;}
        if(penetration<=0)continue;
        p.x+=nx*(penetration+0.0001);p.y+=ny*(penetration+0.0001);contact=true;
        const vn=p.vx*nx+p.vy*ny;
        this._reflect(nx,ny,Math.abs(vn)>o.bounceThreshold?o.terrainRestitution:0,0);
        // friction is applied once per microstep in _tick, not per solver iteration.
        this._groundNormal={x:nx,y:ny};
      }return contact;
    }
    _pads(previous){
      const p=this.player;
      for(let i=0;i<this.pads.length;i++){
        const a=this.pads[i];if(a.enabled===false)continue;
        const dx=a.x2-a.x1,dy=a.y2-a.y1,len=Math.hypot(dx,dy);if(!len)continue;
        if(a.kind==='bump'){
          // round balloon bumper: x1,y1 = center, len = radius; radial reflect
          const bm0=this.options.padBoostMult===undefined?1:this.options.padBoostMult;
          const ddx=p.x-a.x1,ddy=p.y-a.y1,d=Math.hypot(ddx,ddy)||1e-6;
          if(d>p.radius+len)continue;
          const bnx=ddx/d,bny=ddy/d;
          if(p.vx*bnx+p.vy*bny>=0)continue;
          p.x=a.x1+bnx*(len+p.radius+0.001);p.y=a.y1+bny*(len+p.radius+0.001);
          const blast=this._padTimes.get(a);if(blast!==undefined&&this.time-blast<0.08)continue;
          if(this._reflect(bnx,bny,finite(a.restitution,1.15)*bm0,finite(a.minSpeed,640)*bm0,(a.boostX||0)*bm0,(a.boostY||0)*bm0)){
            // balloon bumpers are friendly: never throw the hero backward
            p.vx=Math.max(p.vx,180);
            this._padTimes.set(a,this.time);this._event('pad',{padId:a.id===undefined?i:a.id});
          }continue;
        }
        let nx=finite(a.nx,dy/len),ny=finite(a.ny,-dx/len);const nl=Math.hypot(nx,ny);if(!nl)continue;nx/=nl;ny/=nl;
        const along=((p.x-a.x1)*dx+(p.y-a.y1)*dy)/len;
        const signed=(p.x-a.x1)*nx+(p.y-a.y1)*ny;
        const old=(previous.x-a.x1)*nx+(previous.y-a.y1)*ny;
        if(along < -p.radius||along > len+p.radius||signed>p.radius||old < -p.radius)continue;
        if(p.vx*nx+p.vy*ny>=0)continue;
        p.x+=nx*(p.radius-signed+0.001);p.y+=ny*(p.radius-signed+0.001);
        const last=this._padTimes.get(a);if(last!==undefined&&this.time-last<0.08)continue;
        const bm=this.options.padBoostMult===undefined?1:this.options.padBoostMult;
        if(a.kind==='slide'){
          // מגלשה: the chute redirects whatever arrives into a forward-up launch
          let tx=dx/len,ty=dy/len;if(tx<0){tx=-tx;ty=-ty;}
          const ex=tx,ey=Math.min(ty,0)-0.62,el=Math.hypot(ex,ey);
          const sp=Math.max(Math.hypot(p.vx,p.vy),finite(a.minSpeed,760)*bm);
          p.vx=ex/el*sp+(a.boostX||0)*bm;p.vy=ey/el*sp+(a.boostY||0)*bm;
          this._padTimes.set(a,this.time);this._event('pad',{padId:a.id===undefined?i:a.id});
          continue;
        }
        if(this._reflect(nx,ny,finite(a.restitution,1.1)*bm,finite(a.minSpeed,640)*bm,(a.boostX||0)*bm,(a.boostY||0)*bm)){
          this._padTimes.set(a,this.time);this._event('pad',{padId:a.id===undefined?i:a.id});
        }
      }
    }
    _platforms(previous){
      // The back of a ceiling spring is a one-way resting surface. Its active
      // underside still uses the original pad collision and downward bounce.
      const p=this.player;let contact=false;
      for(const a of this.pads){
        if(a.enabled===false||!Number.isFinite(a.standTopOffset))continue;
        const top=a.y1-a.standTopOffset,left=Math.min(a.x1,a.x2),right=Math.max(a.x1,a.x2);
        if(p.x<left||p.x>right||p.vy<0)continue;
        if(previous.y+p.radius>top+0.01||p.y+p.radius<top)continue;
        p.y=top-p.radius;p.vy=0;contact=true;
        this._groundNormal={x:0,y:-1};
      }
      return contact;
    }
    _tick(){
      if(this.onBeforeStep)this.onBeforeStep(this);
      const p=this.player,o=this.options,h=o.fixedDt;
      if(this.held&&!this.rope){const a=this.nearestAnchor();if(a)this.attach(a);}
      // Adaptive collision microsteps keep travel below 0.4 radii, preventing
      // tunneling at terminal speed without depending on the render frame rate.
      const speed=Math.hypot(p.vx,p.vy)+Math.abs(o.gravity)*h;
      const count=Math.max(1,Math.ceil(speed*h/(p.radius*0.4))),s=h/count;
      let contact=false;
      for(let m=0;m<count;m++){
        const prev={x:p.x,y:p.y};p.vy+=o.gravity*s;
        if(this.held&&!this.rope&&o.airThrust){
          // flutter toward the goal (never backward), capped like swing assist
          if(p.vx<400)p.vx+=o.airThrust*s*o.forward;
        }
        if(this.held&&this.rope&&o.assist){
          const r=this.rope,dx=p.x-r.anchor.x,dy=p.y-r.anchor.y,d=Math.hypot(dx,dy)||1;
          let tx=dy/d,ty=-dx/d;
          const vt=p.vx*tx+p.vy*ty;
          // Pump like a real swing: drive along the current tangential motion
          // (builds amplitude in either direction); from a dead hang, kick forward.
          if(vt<0){tx=-tx;ty=-ty;}
          else if(Math.abs(vt)<1e-6&&tx*o.forward<0){tx=-tx;ty=-ty;}
          if(Math.abs(vt)<o.assistSpeed){p.vx+=tx*o.assist*s;p.vy+=ty*o.assist*s;}
        }
        const drag=Math.exp(-Math.max(0,o.airDrag)*s);p.vx*=drag;p.vy*=drag;
        p.vy=Math.min(p.vy,o.terminalVelocity);
        if(!this.rope&&o.maxFallSpeed!==undefined)p.vy=Math.min(p.vy,o.maxFallSpeed);
        const v=Math.hypot(p.vx,p.vy);if(v>o.maxSpeed){p.vx*=o.maxSpeed/v;p.vy*=o.maxSpeed/v;}
        p.x+=p.vx*s;p.y+=p.vy*s;
        this._pads(prev);this._groundNormal=null;
        for(let j=0;j<o.collisionIterations;j++){this._solveRope();contact=this._platforms(prev)||contact;contact=this._terrain()||contact;}
        // Terrain wins if the rope and terrain form an impossible constraint.
        // Release rather than place the player in solid ground or jitter forever.
        if(this.rope&&Math.hypot(p.x-this.rope.anchor.x,p.y-this.rope.anchor.y)>this.rope.length+0.5)this.release();
        if(this._groundNormal){const n=this._groundNormal,tx=-n.y,ty=n.x,vt=p.vx*tx+p.vy*ty;
          const f=1-Math.exp(-o.terrainFriction*60*s);p.vx-=vt*tx*f;p.vy-=vt*ty*f;}
      }
      if(contact&&!this._contact)this._event('terrain',{});this._contact=contact;if(this._contact)this._airHops=o.airHops===undefined?1:o.airHops;
      const cx=p.x+o.cameraOffsetX+clamp(p.vx*o.cameraLookahead,-o.cameraMaxLookahead,o.cameraMaxLookahead);
      const cy=p.y+o.cameraOffsetY+clamp(p.vy*o.cameraLookahead*0.45,-o.cameraMaxLookahead/2,o.cameraMaxLookahead/2);
      const k=1-Math.exp(-o.cameraSharpness*h);this.camera.x+=(cx-this.camera.x)*k;this.camera.y+=(cy-this.camera.y)*k;
      this.tick++;this.time=this.tick*h;
    }
    drainEvents(){const e=this.events;this.events=[];return e;}
    getState(){return {tick:this.tick,time:this.time,held:this.held,grounded:this._contact,player:Object.assign({},this.player),camera:Object.assign({},this.camera),rope:this.rope?{anchorId:this.rope.anchor.id,x:this.rope.anchor.x,y:this.rope.anchor.y,length:this.rope.length}:null};}
  }
  root.StickmanPhysics=Object.freeze({World:World,DEFAULTS:DEFAULTS,heightfield:heightfield,version:'1.0.0'});
})(typeof window!=='undefined'?window:globalThis);

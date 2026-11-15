/* StickmanVisuals v1.0.0 - original procedural art; no assets or dependencies.
 * Plain script: window.StickmanVisuals (also globalThis for tests).
 * Coordinates are logical canvas pixels; time/dt seconds; angles radians.
 * Caller handles DPR, camera transforms for world entities, and physics.
 * All draw methods preserve canvas state. No timers, listeners or global loop.
 *
 * configure({colors,playerSize,lineWidth,headRadius,anchorRadius,cloudScale,
 *            hillHeight,particleScale,reducedMotion}) changes defaults.
 * Per-call options override defaults, including a partial `colors` object.
 * drawPlayer(ctx,{x=0,y=0,pose='idle',time=0,angle=0,scale=1,facing=1,
 *   vx=0,vy=0,stretch=0,curl=0,landing=0,alpha=1,colors,playerSize,
 *   lineWidth,headRadius,reducedMotion}) -> local/world hand,head,feet points.
 * x/y is the hip/pivot. Canonical player is about 70 px tall (head top -47,
 * feet +25). angle rotates about hip. facing is +1/-1. stretch,curl 0..1.
 * landing is impact strength 0..1; decay this to zero over ~0.22s.
 * Poses: idle, run, swing, fly, tumble, land. Unknown pose uses idle.
 * drawBackground(ctx,{x=0,y=0,width=canvas.width,height=canvas.height,
 *   time=0,colors,cloudScale,hillHeight,reducedMotion}) in SCREEN coordinates.
 * drawAnchor(ctx,{x,y,radius,inRange=false,active=false,time=0,colors,
 *   reducedMotion}) in WORLD coordinates.
 * Particles({maxParticles=700,colors,random=Math.random,particleScale=1,
 *   reducedMotion=false}): attach(x,y,options), trail(x,y,vx,vy,options),
 *   land(x,y,options), confetti(x,y,options), update(dt), draw(ctx), clear().
 * options can set count,scale,color; confetti also spread (px/s).
 * update accepts seconds, caps dt at 0.1, never retains dead particles.
 * Pool policy: drops oldest at cap. `count` getter reports live particles.
 * Tween(target,to,duration,{ease='outCubic',delay=0,onUpdate,onComplete}):
 *   update(dt) -> complete boolean; cancel(); complete/cancelled flags.
 * Only finite numeric target fields are animated. Duration/delay seconds.
 * Ease: linear,inQuad,outQuad,inOutQuad,outCubic,outBack,outElastic.
 * Helpers: clamp(value,min=0,max=1), lerp(a,b,t), damp(a,b,lambda,dt).
 */
(function(root){
  'use strict';
  const TAU=Math.PI*2;
  const colors={skyTop:'#69cef9',skyBottom:'#e0f9ff',cloud:'#ffffff',sun:'#fff2a7',hillFar:'#b4d4f7',hillMid:'#91d9ce',hillNear:'#60c8b2',player:'#ff586a',playerShade:'#d8305a',playerLight:'#ff9b91',eye:'#fff7ef',anchor:'#ffffff',anchorCore:'#6658c8',anchorRing:'#9484e9',spark:'#ffe881',trail:'#ffffff',dust:'#dff8ee',confetti:['#ff6078','#ffe17b','#7967dd','#ffffff','#57dfc4']};
  const defaults={colors,playerSize:1,lineWidth:6.5,headRadius:10,anchorRadius:10,cloudScale:1,hillHeight:1,particleScale:1,reducedMotion:false};
  let config=Object.assign({},defaults,{colors:Object.assign({},colors)});
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const lerp=(a,b,t)=>a+(b-a)*t;
  const damp=(a,b,lambda,dt)=>lerp(a,b,1-Math.exp(-lambda*Math.max(0,dt)));
  const palette=o=>Object.assign({},config.colors,o&&o.colors);
  const setting=(o,k)=>o[k]===undefined?config[k]:o[k];
  function configure(options={}){const c=Object.assign({},config.colors,options.colors);config=Object.assign({},config,options,{colors:c});return getConfig();}
  function getConfig(){return Object.assign({},config,{colors:Object.assign({},config.colors,{confetti:config.colors.confetti.slice()})});}
  function reset(){config=Object.assign({},defaults,{colors:Object.assign({},colors)});}
  function disk(ctx,x,y,r,color){ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,Math.max(.01,r),0,TAU);ctx.fill();}
  function line(ctx,points,color,width){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(...points[0]);for(let i=1;i<points.length;i++)ctx.lineTo(...points[i]);ctx.stroke();}
  function drawPlayer(ctx,s={}){
    const c=palette(s),t=s.time||0,pose=s.pose||'idle',rm=setting(s,'reducedMotion');
    const swing=rm?0:Math.sin(t*(pose==='run'?14:5));
    let hip=[0,0],neck=[0,-23],head=[0,-37],arms=[-11,-13,-15,-2,11,-13,15,-2],legs=[-8,13,-9,25,8,13,9,25];
    let lean=0,sy=1,sx=1;
    if(pose==='run'){
      neck=[5,-23];head=[6,-37];
      arms=[[-4,-13],[-13-9*swing,-8-6*swing],[14,-14],[15+10*swing,-7+8*swing]];
      legs=[[-3-12*swing,12],[-5-19*swing,23-7*Math.max(0,swing)],[3+12*swing,12],[5+19*swing,23-7*Math.max(0,-swing)]];
      hip[1]=rm?0:-Math.abs(Math.sin(t*14))*3;
    } else if(pose==='swing'){
      const curl=clamp(s.curl||0),stretch=clamp(s.stretch||0);
      arms=[[-6,-32],[-1,-48],[7,-32],[1,-48]];
      legs=[[-8,lerp(15,6,curl)],[-7,lerp(29,7,curl)],[10,lerp(14,5,curl)],[16,lerp(26,-1,curl)]];
      sy=1+stretch*.12;sx=1-stretch*.06;lean=swing*.025;
    } else if(pose==='fly'||pose==='tumble'){
      const curl=clamp(s.curl===undefined?(pose==='tumble'?.8:.15):s.curl);
      arms=[[-13,-15],[-23,-22+curl*18],[14,-17],[23,-25+curl*16]];
      legs=[[-12,10],[-19+curl*18,23-curl*12],[13,8],[22-curl*13,19-curl*23]];
      lean=rm?0:swing*.06;
    } else if(pose==='land'){
      const impact=clamp(s.landing===undefined?1:s.landing);sy=1-impact*.35;sx=1+impact*.24;
      arms=[[-14,-11],[-23,1],[14,-11],[23,1]];
      legs=[[-13,10],[-17,25],[13,10],[17,25]];
    } else {hip[1]=rm?0:swing*1.5;}
    arms=arms.flat();legs=legs.flat();
    const angle=(s.angle||0)+lean,scale=(s.scale===undefined?1:s.scale)*setting(s,'playerSize'),facing=s.facing<0?-1:1;
    const size=setting(s,'lineWidth'),r=setting(s,'headRadius');
    ctx.save();ctx.globalAlpha*=s.alpha===undefined?1:clamp(s.alpha);ctx.translate(s.x||0,s.y||0);ctx.rotate(angle);ctx.scale(scale*facing*sx,scale*sy);ctx.translate(...hip);
    line(ctx,[[0,0],[legs[0],legs[1]],[legs[2],legs[3]]],c.playerShade,size);
    line(ctx,[[0,0],[legs[4],legs[5]],[legs[6],legs[7]]],c.player,size);
    line(ctx,[neck,[arms[0],arms[1]],[arms[2],arms[3]]],c.playerShade,size);
    line(ctx,[[0,0],neck],c.player,size+1.5);
    line(ctx,[neck,[arms[4],arms[5]],[arms[6],arms[7]]],c.player,size);
    disk(ctx,head[0],head[1]+1.2,r+1,c.playerShade);disk(ctx,head[0],head[1]-1,r,c.player);
    ctx.globalAlpha*=.65;line(ctx,[[head[0]-r*.45,head[1]-r*.5],[head[0]-r*.1,head[1]-r*.68]],c.playerLight,2.5);ctx.globalAlpha/=.65;
    disk(ctx,head[0]+r*.38,head[1]-r*.18,r*.13,c.eye);ctx.restore();
    function world(p){const x=(p[0]+hip[0])*scale*facing*sx,y=(p[1]+hip[1])*scale*sy;return{x:(s.x||0)+x*Math.cos(angle)-y*Math.sin(angle),y:(s.y||0)+x*Math.sin(angle)+y*Math.cos(angle)};}
    return{hand:world([arms[6],arms[7]]),head:world(head),feet:[world([legs[2],legs[3]]),world([legs[6],legs[7]])]};
  }
  function drawBackground(ctx,camera={}){
    const c=palette(camera),w=camera.width===undefined?ctx.canvas.width:camera.width,h=camera.height===undefined?ctx.canvas.height:camera.height,x=camera.x||0,y=camera.y||0,t=setting(camera,'reducedMotion')?0:camera.time||0;
    ctx.save();const sky=ctx.createLinearGradient(0,0,0,h);sky.addColorStop(0,c.skyTop);sky.addColorStop(1,c.skyBottom);ctx.fillStyle=sky;ctx.fillRect(0,0,w,h);
    disk(ctx,w*.81-x*.01,h*.18-y*.01,35,c.sun);ctx.globalAlpha=.18;disk(ctx,w*.81-x*.01,h*.18-y*.01,49,c.sun);ctx.globalAlpha=1;
    const cs=setting(camera,'cloudScale');
    const wrap=(v,period)=>((v%period)+period)%period;
    for(let i=-1;i<Math.ceil(w/280)+1;i++){
      const cx=i*280+wrap(-x*.075+t*3,280),cy=h*(.18+(i%3+3)%3*.09)-y*.035;
      ctx.save();ctx.translate(cx,cy);ctx.scale(cs*(.8+(i%2+2)%2*.3),cs);ctx.globalAlpha=.76;disk(ctx,0,0,25,c.cloud);disk(ctx,29,-11,32,c.cloud);disk(ctx,62,1,23,c.cloud);ctx.fillStyle=c.cloud;ctx.fillRect(-5,0,72,23);ctx.restore();
    }
    const hh=setting(camera,'hillHeight');
    [[.035,.74,95,c.hillFar],[.09,.86,100,c.hillMid],[.17,1.03,100,c.hillNear]].forEach(([speed,base,amplitude,color],layer)=>{
      ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(0,h+1);
      for(let px=0;px<=w+12;px+=12){const u=px+x*speed;const yy=h*base-y*speed-(Math.sin(u/220+layer*2)+Math.sin(u/391+1)*.5)*amplitude*hh;ctx.lineTo(px,yy);}
      ctx.lineTo(w,h+1);ctx.closePath();ctx.fill();
    });ctx.restore();
  }
  function drawAnchor(ctx,a={}){
    const c=palette(a),r=a.radius===undefined?config.anchorRadius:a.radius,t=setting(a,'reducedMotion')?0:a.time||0,pulse=.5+.5*Math.sin(t*4),x=a.x||0,y=a.y||0;
    ctx.save();if(a.inRange||a.active){ctx.globalAlpha*=a.active?.3:.12+pulse*.12;disk(ctx,x,y,r*(2.4+pulse*.2),c.anchorRing);ctx.globalAlpha/=(a.active?.3:.12+pulse*.12);ctx.setLineDash([2,5]);ctx.strokeStyle=c.anchor;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,r*(2.4+pulse*.2),0,TAU);ctx.stroke();ctx.setLineDash([]);}
    disk(ctx,x,y+3,r+2,c.anchorCore);disk(ctx,x,y,r+1,c.anchor);disk(ctx,x,y,r*.56,a.active?c.player:c.anchorCore);disk(ctx,x-r*.15,y-r*.19,r*.15,c.anchor);ctx.restore();
  }
  class Particles{
    constructor(o={}){this.items=[];this.maxParticles=Math.max(0,Math.floor(o.maxParticles===undefined?700:o.maxParticles));this.colors=palette(o);this.random=o.random||Math.random;this.scale=o.particleScale===undefined?config.particleScale:o.particleScale;this.reducedMotion=o.reducedMotion===undefined?config.reducedMotion:o.reducedMotion;}
    get count(){return this.items.length;}
    clear(){this.items.length=0;}
    add(p){if(!this.maxParticles)return;if(this.items.length>=this.maxParticles)this.items.shift();this.items.push(p);}
    burst(kind,x,y,o={}){
      const rand=this.random,c=this.colors,s=(o.scale===undefined?1:o.scale)*this.scale;
      let n=o.count===undefined?({attach:16,trail:2,land:17,confetti:95}[kind]):Math.max(0,Math.floor(o.count));if(this.reducedMotion)n=Math.min(n,kind==='confetti'?18:4);
      for(let i=0;i<n;i++){
        const a=kind==='land'?-Math.PI*rand():rand()*TAU;
        const speed=(kind==='confetti'?180+rand()*270:kind==='land'?35+rand()*100:35+rand()*100)*s;
        const life=kind==='confetti'?1.6+rand()*1.6:kind==='trail'?.18+rand()*.16:.3+rand()*.35;
        const p={kind,x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life,max:life,size:(kind==='confetti'?3+rand()*4:kind==='trail'?2+rand()*3:1.5+rand()*3)*s,rotation:rand()*TAU,spin:(rand()-.5)*12,color:o.color||({attach:c.spark,trail:c.trail,land:c.dust,confetti:c.confetti[Math.floor(rand()*c.confetti.length)]}[kind]),gravity:kind==='confetti'?360:kind==='land'?100:0};
        if(kind==='confetti'){p.vx=(rand()-.5)*(o.spread||550)*s;p.vy=-(130+rand()*340)*s;}
        if(kind==='trail'){p.vx=-(o.vx||0)*.06+(rand()-.5)*18;p.vy=-(o.vy||0)*.06+(rand()-.5)*18;}
        this.add(p);
      }return this;
    }
    attach(x,y,o={}){return this.burst('attach',x,y,o);}
    trail(x,y,vx=0,vy=0,o={}){return this.burst('trail',x,y,Object.assign({},o,{vx,vy}));}
    land(x,y,o={}){return this.burst('land',x,y,o);}
    confetti(x,y,o={}){return this.burst('confetti',x,y,o);}
    update(dt){dt=clamp(Number.isFinite(dt)?dt:0,0,.1);for(let i=this.items.length-1;i>=0;i--){const p=this.items[i];p.life-=dt;if(p.life<=0){this.items.splice(i,1);continue;}p.vy+=p.gravity*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.rotation+=p.spin*dt;}}
    draw(ctx){ctx.save();for(const p of this.items){const f=clamp(p.life/p.max);ctx.save();ctx.globalAlpha*=Math.min(1,f*3);ctx.translate(p.x,p.y);ctx.rotate(p.rotation);ctx.fillStyle=p.color;if(p.kind==='confetti'){ctx.scale(Math.sin(p.rotation*1.7)*.7+.3,1);ctx.fillRect(-p.size,-p.size*.45,p.size*2,p.size*.9);}else if(p.kind==='attach'){ctx.beginPath();ctx.moveTo(0,-p.size*2);ctx.lineTo(p.size*.5,-p.size*.5);ctx.lineTo(p.size*2,0);ctx.lineTo(p.size*.5,p.size*.5);ctx.lineTo(0,p.size*2);ctx.lineTo(-p.size*.5,p.size*.5);ctx.lineTo(-p.size*2,0);ctx.lineTo(-p.size*.5,-p.size*.5);ctx.closePath();ctx.fill();}else{disk(ctx,0,0,p.size*(p.kind==='land'?1+(1-f)*1.3:f),p.color);}ctx.restore();}ctx.restore();}
  }
  const Ease={linear:t=>t,inQuad:t=>t*t,outQuad:t=>1-(1-t)*(1-t),inOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,outCubic:t=>1-Math.pow(1-t,3),outBack:t=>1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2),outElastic:t=>t===0||t===1?t:Math.pow(2,-10*t)*Math.sin((t*10-.75)*TAU/3)+1};
  class Tween{
    constructor(target,to,duration=.3,o={}){this.target=target;this.to=Object.assign({},to);this.from={};Object.keys(to).forEach(k=>{if(Number.isFinite(target[k])&&Number.isFinite(to[k]))this.from[k]=target[k];});this.duration=Math.max(0,duration);this.elapsed=-Math.max(0,o.delay||0);this.ease=typeof o.ease==='function'?o.ease:Ease[o.ease]||Ease.outCubic;this.onUpdate=o.onUpdate;this.onComplete=o.onComplete;this.complete=false;this.cancelled=false;}
    update(dt){if(this.cancelled||this.complete)return true;this.elapsed+=Math.max(0,Number.isFinite(dt)?dt:0);if(this.elapsed<0)return false;const p=this.duration===0?1:clamp(this.elapsed/this.duration),v=this.ease(p);Object.keys(this.from).forEach(k=>this.target[k]=lerp(this.from[k],this.to[k],v));if(this.onUpdate)this.onUpdate(this.target,p);if(p===1){this.complete=true;if(this.onComplete)this.onComplete(this.target);}return this.complete;}
    cancel(){this.cancelled=true;}
  }
  root.StickmanVisuals={version:'1.0.0',configure,getConfig,reset,drawPlayer,drawBackground,drawAnchor,Particles,Ease,Tween,clamp,lerp,damp};
})(typeof window!=='undefined'?window:globalThis);

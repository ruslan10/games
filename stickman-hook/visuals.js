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
 * x/y is the hip/pivot. The hero is an original chibi hedgehog about 73 px
 * tall at scale 1. angle rotates about hip. facing is +1/-1. stretch,curl
 * 0..1. landing is impact strength 0..1; decay to zero over ~0.22s.
 * Poses: idle, run, swing, fly (spinning ball), tumble, land.
 * Unknown pose uses idle.
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
  const colors={hogBlue:'#2f9bf0',hogBlueD:'#1d6fd0',hogBlueL:'#8fd0ff',hogTan:'#f7cf9f',hogTanD:'#e0aa6e',hogRed:'#e63b3b',hogRedD:'#b71f2e',hogRedL:'#ff8a7a',skyTop:'#69cef9',skyBottom:'#e0f9ff',cloud:'#ffffff',sun:'#fff2a7',hillFar:'#b4d4f7',hillMid:'#91d9ce',hillNear:'#60c8b2',player:'#ff586a',playerShade:'#d8305a',playerLight:'#ff9b91',eye:'#fff7ef',anchor:'#ffffff',anchorCore:'#6658c8',anchorRing:'#9484e9',spark:'#ffe881',trail:'#ffffff',dust:'#dff8ee',confetti:['#ff6078','#ffe17b','#7967dd','#ffffff','#57dfc4']};
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
  /* Chibi hedgehog hero (variant A, original art): big head, small body,
     swept quills, tan muzzle/belly, red shoes. Hip at local (0,0);
     concept units are scaled by 0.32 so the hero is ~58 px tall at scale 1.
     Coat colors come from the palette (hogBlue/hogBlueD/hogBlueL etc.) so
     unlockable skins can recolor the hero via configure({colors}). */
  const INK='#23213a',WHITE='#ffffff',GREEN='#2fbf71';
  function drawPlayer(ctx,s={}){
    const t=s.time||0,pose=s.pose||'idle',rm=setting(s,'reducedMotion');
    const pc=palette(s);
    const HC={blue:pc.hogBlue,blueD:pc.hogBlueD,blueL:pc.hogBlueL,tan:pc.hogTan,tanD:pc.hogTanD,red:pc.hogRed,redD:pc.hogRedD,redL:pc.hogRedL};
    const body=s.body||'hog';
    const bellyC=body==='bean'?HC.blue:body==='fox'?'#fff2df':HC.tan;
    const bellyCD=body==='bean'?HC.blueD:body==='fox'?'#ecd9b6':HC.tanD;
    const scale=(s.scale===undefined?1:s.scale)*setting(s,'playerSize')*0.32;
    const facing=s.facing<0?-1:1;
    const angle=s.angle||0;
    const curl=clamp(s.curl===undefined?0:s.curl),stretch=clamp(s.stretch||0);
    ctx.save();ctx.globalAlpha*=s.alpha===undefined?1:clamp(s.alpha);
    ctx.translate(s.x||0,s.y||0);ctx.rotate(angle);ctx.scale(scale*facing,scale);
    const ell=(x,y,rx,ry,rot,color)=>{ctx.beginPath();ctx.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),rot,0,TAU);ctx.fillStyle=color;ctx.fill();};
    const circ=(x,y,r,color)=>ell(x,y,r,r,0,color);
    const limb=(x1,y1,x2,y2,w,color)=>{ctx.strokeStyle=color;ctx.lineWidth=w;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();};
    const spike=(cx,cy,ang,len,wid,color)=>{const dx=Math.cos(ang),dy=Math.sin(ang),px=-dy,py=dx;
      ctx.beginPath();ctx.moveTo(cx-px*wid,cy-py*wid);
      ctx.quadraticCurveTo(cx+dx*len*.55+px*wid*.5,cy+dy*len*.55+py*wid*.5,cx+dx*len,cy+dy*len);
      ctx.quadraticCurveTo(cx+dx*len*.55-px*wid*.5,cy+dy*len*.55-py*wid*.5,cx-px*wid,cy-py*wid);
      ctx.closePath();ctx.fillStyle=color;ctx.fill();};
    const shadeOn=(x,y,r,a0,a1,color,w)=>{ctx.beginPath();ctx.arc(x,y,r,a0,a1);ctx.strokeStyle=color;ctx.lineWidth=w;ctx.lineCap='round';ctx.stroke();};
    const shoe=(x,y,ang)=>{ctx.save();ctx.translate(x,y);ctx.rotate(ang);
      ell(4,0,19,10,0,HC.redD);ell(5,-2,18,9.5,0,HC.red);ell(13,-3,10,8,0,HC.red);
      ell(8,-5.5,9,3.2,-0.15,HC.redL);
      ctx.fillStyle=WHITE;ctx.fillRect(-8,-11,6.5,20);ell(-9.5,0,5,10.5,0,WHITE);
      ctx.restore();};
    const glove=(x,y,r)=>{circ(x,y,r,WHITE);ell(x-r*.3,y-r*.3,r*.42,r*.3,-0.6,'#e8e4f8');};
    const torso=(x,y,rx,ry,rot)=>{ell(x,y,rx,ry,rot,HC.blueD);ell(x-rx*.06,y-ry*.10,rx*.94,ry*.9,rot,HC.blue);
      ell(x+rx*.24,y+ry*.16,rx*.62,ry*.64,rot,bellyCD);ell(x+rx*.22,y+ry*.12,rx*.56,ry*.58,rot,bellyC);};
    const headHog=(x,y,r,look)=>{const sl=r*1.25,sw=r*.34;
      spike(x-r*.30,y-r*.78,-2.5,sl*1.05,sw,HC.blueD);
      spike(x-r*.72,y-r*.45,-2.9,sl*1.15,sw,HC.blueD);
      spike(x-r*.85,y-r*.02,-3.3,sl,sw*.9,HC.blueD);
      spike(x-r*.28,y-r*.85,-2.62,sl,sw*.92,HC.blue);
      spike(x-r*.68,y-r*.52,-3.0,sl*1.08,sw*.92,HC.blue);
      spike(x-r*.80,y-r*.08,-3.42,sl*.92,sw*.85,HC.blue);
      spike(x-r*.60,y+r*.34,-3.85,sl*.7,sw*.7,HC.blue);
      ctx.beginPath();ctx.moveTo(x-r*.05,y-r*.92);ctx.lineTo(x+r*.30,y-r*1.26);ctx.lineTo(x+r*.44,y-r*.78);ctx.closePath();ctx.fillStyle=HC.blue;ctx.fill();
      ctx.beginPath();ctx.moveTo(x+r*.07,y-r*.93);ctx.lineTo(x+r*.26,y-r*1.11);ctx.lineTo(x+r*.33,y-r*.84);ctx.closePath();ctx.fillStyle=HC.tan;ctx.fill();
      circ(x,y,r,HC.blue);
      shadeOn(x,y,r*.97,-2.9,-1.4,HC.blueL,r*.09);
      shadeOn(x,y,r*.97,0.5,1.6,HC.blueD,r*.08);
      ell(x+r*.50,y+r*.40,r*.60,r*.42,0.08,HC.tan);
      ell(x+r*.44,y+r*.46,r*.44,r*.28,0.08,HC.tanD);
      ell(x+r*.50,y+r*.34,r*.52,r*.34,0.08,HC.tan);
      circ(x+r*.99,y+r*.16,r*.135,INK);
      circ(x+r*.94,y+r*.11,r*.04,WHITE);
      ell(x+r*.30,y-r*.24,r*.31,r*.46,-0.10,WHITE);
      ell(x+r*.80,y-r*.22,r*.27,r*.42,-0.05,WHITE);
      const lx=look||0;
      circ(x+r*.42+lx,y-r*.20,r*.155,GREEN);
      circ(x+r*.86+lx,y-r*.18,r*.14,GREEN);
      circ(x+r*.46+lx,y-r*.20,r*.075,INK);
      circ(x+r*.90+lx,y-r*.18,r*.07,INK);
      circ(x+r*.50+lx,y-r*.25,r*.035,WHITE);
      circ(x+r*.93+lx,y-r*.23,r*.032,WHITE);
      ctx.beginPath();ctx.moveTo(x+r*.38,y+r*.48);
      ctx.quadraticCurveTo(x+r*.62,y+r*.62,x+r*.85,y+r*.42);
      ctx.strokeStyle=INK;ctx.lineWidth=r*.065;ctx.lineCap='round';ctx.stroke();
      circ(x+r*.87,y+r*.40,r*.045,INK);};
    /* Chibi human hero head (original): round face, dark hair, forehead curl. */
    const headHero=(x,y,r,look)=>{
      circ(x,y,r,HC.tan);
      ctx.beginPath();ctx.arc(x-r*.06,y-r*.10,r*1.0,Math.PI*0.98,Math.PI*2.06);ctx.closePath();ctx.fillStyle='#26233a';ctx.fill();
      circ(x-r*.62,y-r*.60,r*.34,'#26233a');circ(x+r*.28,y-r*.82,r*.30,'#26233a');
      ctx.beginPath();ctx.arc(x+r*.28,y-r*.34,r*.20,0.3,Math.PI*1.45);ctx.strokeStyle='#26233a';ctx.lineWidth=r*.10;ctx.lineCap='round';ctx.stroke();
      ell(x+r*.30,y-r*.16,r*.27,r*.40,-0.10,WHITE);
      ell(x+r*.78,y-r*.15,r*.24,r*.37,-0.05,WHITE);
      const lx=look||0;
      circ(x+r*.40+lx,y-r*.13,r*.14,'#2f6fd0');circ(x+r*.84+lx,y-r*.12,r*.13,'#2f6fd0');
      circ(x+r*.44+lx,y-r*.13,r*.07,INK);circ(x+r*.88+lx,y-r*.12,r*.065,INK);
      circ(x+r*.48+lx,y-r*.18,r*.032,WHITE);circ(x+r*.92+lx,y-r*.17,r*.03,WHITE);
      ctx.beginPath();ctx.moveTo(x+r*.34,y+r*.44);
      ctx.quadraticCurveTo(x+r*.58,y+r*.58,x+r*.82,y+r*.38);
      ctx.strokeStyle=INK;ctx.lineWidth=r*.06;ctx.lineCap='round';ctx.stroke();
      ell(x+r*.88,y+r*.18,r*.16,r*.12,0.2,'#e8b48a');};
    /* Rounded space-crewmate head (original): capsule + big visor. */
    const headBean=(x,y,r)=>{
      ell(x,y,r*.95,r*1.04,0,HC.blueD);ell(x-r*.02,y-r*.04,r*.9,r*.98,0,HC.blue);
      ell(x-r*.72,y+r*.30,r*.34,r*.52,0,HC.blueD);
      ell(x+r*.40,y-r*.18,r*.58,r*.40,-0.06,'#6fa9bd');
      ell(x+r*.42,y-r*.18,r*.50,r*.33,-0.06,'#bfeef7');
      ell(x+r*.30,y-r*.28,r*.16,r*.09,-0.4,WHITE);};
    /* Fox head (original): pointy ears, slim snout. */
    const headFox=(x,y,r,look)=>{
      ctx.beginPath();ctx.moveTo(x-r*.55,y-r*.55);ctx.lineTo(x-r*.30,y-r*1.30);ctx.lineTo(x+r*.02,y-r*.72);ctx.closePath();ctx.fillStyle=HC.blueD;ctx.fill();
      ctx.beginPath();ctx.moveTo(x-r*.44,y-r*.62);ctx.lineTo(x-r*.30,y-r*1.10);ctx.lineTo(x-r*.06,y-r*.72);ctx.closePath();ctx.fillStyle=HC.tan;ctx.fill();
      ctx.beginPath();ctx.moveTo(x+r*.25,y-r*.62);ctx.lineTo(x+r*.55,y-r*1.25);ctx.lineTo(x+r*.85,y-r*.55);ctx.closePath();ctx.fillStyle=HC.blueD;ctx.fill();
      ctx.beginPath();ctx.moveTo(x+r*.34,y-r*.64);ctx.lineTo(x+r*.54,y-r*1.05);ctx.lineTo(x+r*.72,y-r*.58);ctx.closePath();ctx.fillStyle=HC.tan;ctx.fill();
      circ(x,y,r,HC.blueD);circ(x-r*.02,y-r*.03,r*.94,HC.blue);
      shadeOn(x,y,r*.97,-2.9,-1.2,HC.blueL,r*.08);
      ell(x+r*.62,y+r*.30,r*.55,r*.36,0.05,'#fff2df');
      ell(x+r*.60,y+r*.36,r*.42,r*.24,0.05,'#fff2df');
      circ(x+r*1.10,y+r*.12,r*.15,INK);circ(x+r*1.05,y+r*.07,r*.05,WHITE);
      ell(x+r*.28,y-r*.26,r*.30,r*.44,-0.10,WHITE);
      ell(x+r*.76,y-r*.24,r*.26,r*.40,-0.05,WHITE);
      const lx=look||0;
      circ(x+r*.40+lx,y-r*.22,r*.15,'#8a4b12');circ(x+r*.82+lx,y-r*.20,r*.14,'#8a4b12');
      circ(x+r*.44+lx,y-r*.22,r*.075,INK);circ(x+r*.86+lx,y-r*.20,r*.07,INK);
      circ(x+r*.48+lx,y-r*.27,r*.033,WHITE);circ(x+r*.90+lx,y-r*.25,r*.03,WHITE);
      ctx.beginPath();ctx.moveTo(x+r*.40,y+r*.42);
      ctx.quadraticCurveTo(x+r*.62,y+r*.54,x+r*.84,y+r*.36);
      ctx.strokeStyle=INK;ctx.lineWidth=r*.06;ctx.lineCap='round';ctx.stroke();};
    /* Echidna head (original): drooping back-quills, wide grin. */
    const headEkidna=(x,y,r,look)=>{
      const qs=[[-0.55,-0.95,-2.35,1.15],[-0.95,-0.55,-2.75,1.25],[-1.05,-0.05,-3.05,1.2],[-0.9,0.45,2.75,1.05],[-0.6,0.85,2.35,0.85]];
      for(const q of qs){spike(x+q[0]*r,y+q[1]*r,q[2],r*1.3*q[3],r*.30,HC.blueD);}
      for(const q of qs){spike(x+q[0]*r*.92,y+q[1]*r*.92-r*.05,q[2],r*1.15*q[3],r*.24,HC.blue);}
      circ(x,y,r,HC.blueD);circ(x-r*.02,y-r*.03,r*.94,HC.blue);
      shadeOn(x,y,r*.97,-2.7,-1.3,HC.blueL,r*.08);
      ell(x+r*.50,y+r*.38,r*.60,r*.42,0.08,HC.tan);
      ell(x+r*.46,y+r*.44,r*.44,r*.27,0.08,HC.tanD);
      ell(x+r*.50,y+r*.32,r*.52,r*.33,0.08,HC.tan);
      circ(x+r*1.0,y+r*.14,r*.14,INK);circ(x+r*.95,y+r*.09,r*.045,WHITE);
      ell(x+r*.30,y-r*.22,r*.31,r*.46,-0.10,WHITE);
      ell(x+r*.80,y-r*.20,r*.27,r*.42,-0.05,WHITE);
      const lx=look||0;
      circ(x+r*.42+lx,y-r*.18,r*.15,'#7a1f8a');circ(x+r*.86+lx,y-r*.16,r*.14,'#7a1f8a');
      circ(x+r*.46+lx,y-r*.18,r*.075,INK);circ(x+r*.90+lx,y-r*.16,r*.07,INK);
      circ(x+r*.50+lx,y-r*.23,r*.033,WHITE);circ(x+r*.93+lx,y-r*.21,r*.03,WHITE);
      ctx.beginPath();ctx.moveTo(x+r*.34,y+r*.46);
      ctx.quadraticCurveTo(x+r*.62,y+r*.64,x+r*.90,y+r*.40);
      ctx.strokeStyle=INK;ctx.lineWidth=r*.065;ctx.lineCap='round';ctx.stroke();};
    const head=(x,y,r,look)=>body==='super'?headHero(x,y,r,look):body==='bean'?headBean(x,y,r):body==='fox'?headFox(x,y,r,look):body==='echidna'?headEkidna(x,y,r,look):headHog(x,y,r,look);
    /* Flowing hero cape (original), anchored at the shoulders, streaming back. */
    const cape=(sx,sy)=>{
      const w1=rm?0:Math.sin(t*6)*7,w2=rm?0:Math.sin(t*6+1.2)*10;
      ctx.beginPath();
      ctx.moveTo(sx+10,sy-6);
      ctx.quadraticCurveTo(sx-34,sy-2+w1,sx-72,sy+10+w2);
      ctx.quadraticCurveTo(sx-80,sy+22+w2,sx-64,sy+34+w1);
      ctx.quadraticCurveTo(sx-30,sy+26,sx+4,sy+16);
      ctx.closePath();ctx.fillStyle=HC.redD;ctx.fill();
      ctx.beginPath();
      ctx.moveTo(sx+10,sy-6);
      ctx.quadraticCurveTo(sx-30,sy-1+w1,sx-62,sy+11+w2);
      ctx.quadraticCurveTo(sx-32,sy+16,sx+2,sy+10);
      ctx.closePath();ctx.fillStyle=HC.red;ctx.fill();
      ell(sx+10,sy-4,12,8,0,HC.red);};
    /* Twin fox tails (original): two bushy white-tipped tails from the hip. */
    const tails=(hx,hy)=>{
      const sw=rm?0:Math.sin(t*4.2)*0.14;
      const tail=(ang)=>{
        ctx.save();ctx.translate(hx,hy);ctx.rotate(ang+sw);
        ctx.beginPath();ctx.moveTo(0,-7);
        ctx.quadraticCurveTo(-34,-22,-62,-16);
        ctx.quadraticCurveTo(-84,-10,-88,2);
        ctx.quadraticCurveTo(-70,16,-40,16);
        ctx.quadraticCurveTo(-12,14,0,7);
        ctx.closePath();ctx.fillStyle=HC.blue;ctx.fill();
        ctx.beginPath();ctx.moveTo(-62,-16);
        ctx.quadraticCurveTo(-84,-10,-88,2);
        ctx.quadraticCurveTo(-72,14,-52,15);
        ctx.quadraticCurveTo(-62,2,-62,-16);
        ctx.closePath();ctx.fillStyle='#fff2df';ctx.fill();
        ctx.restore();};
      tail(Math.PI-0.35);tail(Math.PI+0.42);};
    /* White chest crescent for the echidna body. */
    const crescent=(cx,cy)=>{
      ctx.beginPath();ctx.arc(cx+7,cy+2,15,Math.PI*0.62,Math.PI*1.42);
      ctx.strokeStyle=WHITE;ctx.lineWidth=8;ctx.lineCap='round';ctx.stroke();};
    /* Horizontal super-style flight (original): arms ahead, body stretched,
       cape/tails streaming. Used for the level-finish fly-off and by the
       hero skin's fly pose. */
    const superFlight=()=>{
      const w1=rm?0:Math.sin(t*7)*6,w2=rm?0:Math.sin(t*7+1.1)*9;
      if(body==='super'){
        ctx.beginPath();
        ctx.moveTo(8,-16);
        ctx.quadraticCurveTo(-52,-28+w1,-104,-4+w2);
        ctx.quadraticCurveTo(-96,16+w2,-44,8);
        ctx.quadraticCurveTo(-18,2,4,4);
        ctx.closePath();ctx.fillStyle=HC.redD;ctx.fill();
        ctx.beginPath();
        ctx.moveTo(8,-16);
        ctx.quadraticCurveTo(-46,-24+w1,-88,-3+w2);
        ctx.quadraticCurveTo(-40,0,2,-2);
        ctx.closePath();ctx.fillStyle=HC.red;ctx.fill();}
      if(body==='fox'){
        ctx.save();ctx.translate(-24,4);ctx.rotate(Math.PI+ (rm?0:Math.sin(t*9)*0.1));
        for(const off of [-0.16,0.16]){
          ctx.save();ctx.rotate(off);
          ctx.beginPath();ctx.moveTo(0,-7);
          ctx.quadraticCurveTo(-40,-16,-72,-8);
          ctx.quadraticCurveTo(-88,-2,-86,6);
          ctx.quadraticCurveTo(-64,16,-30,13);
          ctx.quadraticCurveTo(-8,10,0,7);
          ctx.closePath();ctx.fillStyle=HC.blue;ctx.fill();
          ctx.beginPath();ctx.moveTo(-72,-8);ctx.quadraticCurveTo(-88,-2,-86,6);
          ctx.quadraticCurveTo(-70,13,-56,12);ctx.quadraticCurveTo(-66,2,-72,-8);
          ctx.closePath();ctx.fillStyle='#fff2df';ctx.fill();
          ctx.restore();}
        ctx.restore();}
      limb(-24,2,-64,0,12,HC.blueD);limb(-24,12,-62,14,12,HC.blue);
      shoe(-72,0,-0.15);shoe(-70,15,0.1);
      limb(6,8,26,26,12,HC.blueD);glove(30,30,10);
      ell(0,2,34,17,0.04,HC.blueD);ell(2,0,32,16,0.04,HC.blue);
      ell(8,7,17,10,0.08,bellyCD);ell(9,6,16,9,0.08,bellyC);
      if(body==='echidna')crescent(6,2);
      limb(22,-10,66,-26,12,HC.blue);glove(72,-29,11);
      head(46,-30,hr*.95,4);
      handL=[72,-29];headL=[46,-30-hr];feetL=[[-72,0],[-70,15]];};
    const hr=51,trx=28,try_=23,lw=13,legL=44;
    let handL=[6,-150],headL=[4,-77],feetL=[[-17,48],[18,48]];
    if(pose==='swing'){
      const ex=1+stretch*.18,k=28*curl;
      if(body==='super')cape(-2,-14*ex+6);
      if(body==='fox')tails(0,26);
      torso(0,10*ex,trx,try_*1.05,-0.06);
      if(body==='echidna')crescent(2,10*ex);
      const shY=-14*ex;
      limb(trx*.5,shY,10,-118,12,HC.blueD);
      limb(10,-118,6,-146,12,HC.blue);
      glove(6,-152,13);
      limb(-trx*.5,shY,-26,38,lw,HC.blue);glove(-30,44,11);
      limb(-10,26,-18-k,64,lw+2,HC.blueD);shoe(-22-k,76,-0.5);
      limb(12,26,30-k*.5,60,lw+2,HC.blue);shoe(36-k*.5,70,0.25);
      head(10,-58,hr,2);
      handL=[6,-152];headL=[10,-58-hr];feetL=[[-22-k,76],[36-k*.5,70]];
    } else if(pose==='super'||(body==='super'&&(pose==='fly'||pose==='tumble'))){
      superFlight();
    } else if(pose==='fly'||pose==='tumble'){
      const R=58;
      ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=4.5;ctx.lineCap='round';
      for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(0,0,R+14+i*10,2.4-i*.28,3.6-i*.28);ctx.stroke();}
      circ(0,0,R,HC.blueD);
      circ(0,-R*.06,R*.94,HC.blue);
      const a0=rm?0.8:((t*9)%TAU);
      if(body==='bean'){
        const vx=Math.cos(a0)*R*.34,vy=Math.sin(a0)*R*.34;
        ell(vx,vy,R*.5,R*.32,a0,'#6fa9bd');ell(vx,vy,R*.42,R*.26,a0,'#bfeef7');
        ell(vx-R*.16,vy-R*.12,R*.12,R*.06,a0-0.4,WHITE);
      } else {
        for(let i=0;i<6;i++){const a=a0+i*TAU/6;
          spike(Math.cos(a)*R*.82,Math.sin(a)*R*.82,a,R*.6,R*.15,i%2?HC.blue:HC.blueD);}
        ctx.beginPath();ctx.arc(0,0,R*.62,a0,a0+2.1);ctx.strokeStyle=HC.blueD;ctx.lineWidth=8;ctx.stroke();
        ctx.beginPath();ctx.arc(0,0,R*.36,a0+1.2,a0+3.0);ctx.strokeStyle=HC.blueL;ctx.lineWidth=6.5;ctx.stroke();
      }
      if(body==='fox'){
        ctx.save();ctx.rotate(rm?0.5:((t*11)%TAU));
        for(const off of [-0.3,0.3]){
          ctx.save();ctx.rotate(off);
          ctx.beginPath();ctx.moveTo(R*.7,-10);
          ctx.quadraticCurveTo(R*1.35,-26,R*1.8,-8);
          ctx.quadraticCurveTo(R*1.9,4,R*1.6,10);
          ctx.quadraticCurveTo(R*1.2,16,R*.75,10);
          ctx.closePath();ctx.fillStyle=HC.blue;ctx.fill();
          ctx.beginPath();ctx.moveTo(R*1.55,-14);ctx.quadraticCurveTo(R*1.85,-6,R*1.8,4);
          ctx.quadraticCurveTo(R*1.6,10,R*1.42,8);ctx.quadraticCurveTo(R*1.56,-2,R*1.55,-14);
          ctx.closePath();ctx.fillStyle='#fff2df';ctx.fill();
          ctx.restore();}
        ctx.restore();
      }
      handL=[0,-R];headL=[0,-R];feetL=[[-R*.5,R*.6],[R*.5,R*.6]];
    } else if(pose==='run'){
      const sw=rm?0:Math.sin(t*14);
      ctx.save();ctx.rotate(0.22);
      if(body==='super')cape(-4,-28);
      if(body==='fox')tails(0,-4);
      torso(0,-26,trx,try_,-0.12);
      if(body==='echidna')crescent(2,-26);
      const shY=-34,hipY=-4;
      limb(-trx*.5,shY,-trx*.5-22,-44,lw,HC.blueD);glove(-trx*.5-25,-49,11);
      limb(trx*.5,shY,trx*.5+20,4,lw,HC.blue);glove(trx*.5+23,9,11);
      limb(-10,hipY,-16-22*sw,hipY+legL*.5,lw+2,HC.blueD);
      limb(-16-22*sw,hipY+legL*.5,-20-30*sw,hipY+legL-12*Math.max(0,sw),lw+1,HC.blueD);
      shoe(-24-32*sw,hipY+legL+8-12*Math.max(0,sw),-0.4);
      limb(12,hipY,18+22*sw,hipY+legL*.45,lw+2,HC.blue);
      limb(18+22*sw,hipY+legL*.45,22+30*sw,hipY+legL-12*Math.max(0,-sw),lw+1,HC.blue);
      shoe(26+32*sw,hipY+legL+9-12*Math.max(0,-sw),0.3);
      head(12,shY-hr*.82,hr,4);
      ctx.restore();
      handL=[trx*.5+23,9];headL=[12,shY-hr*1.8];feetL=[[-24-32*sw,hipY+legL+8],[26+32*sw,hipY+legL+9]];
    } else if(pose==='land'){
      const impact=clamp(s.landing===undefined?1:s.landing);
      ctx.scale(1+impact*.22,1-impact*.3);
      if(body==='super')cape(-4,-26);
      if(body==='fox')tails(0,-2);
      torso(0,-24,trx*1.1,try_*.85,0);
      if(body==='echidna')crescent(2,-24);
      const shY=-30;
      limb(-trx*.5,shY,-34,0,lw,HC.blue);glove(-38,5,11);
      limb(trx*.5,shY,36,-2,lw,HC.blue);glove(40,3,11);
      limb(-11,-2,-20,34,lw+2,HC.blueD);shoe(-24,44,-0.15);
      limb(12,-2,22,34,lw+2,HC.blue);shoe(26,44,0.15);
      head(6,shY-hr*.8,hr,2);
      handL=[6,-40];headL=[6,shY-hr*1.8];feetL=[[-24,44],[26,44]];
    } else {
      const bob=rm?0:Math.sin(t*2.2)*2.5;
      ctx.translate(0,bob);
      if(body==='super')cape(-4,-30);
      if(body==='fox')tails(0,-6);
      torso(0,-28,trx,try_,0);
      if(body==='echidna')crescent(2,-28);
      const shY=-36,hipY=-6;
      limb(-trx*.55,shY,-trx*.55-15,2,lw,HC.blueD);glove(-trx*.55-17,8,11);
      limb(trx*.55,shY,trx*.62+11,-2,lw,HC.blue);glove(trx*.62+13,3,11);
      limb(-12,hipY,-15,hipY+legL,lw+2,HC.blueD);
      limb(13,hipY,16,hipY+legL,lw+2,HC.blue);
      shoe(-17,hipY+legL+10,0);
      shoe(18,hipY+legL+10,0);
      head(4,shY-hr*.82,hr,2);
      handL=[trx*.62+13,3];headL=[4,shY-hr*1.8];feetL=[[-17,hipY+legL+10],[18,hipY+legL+10]];
    }
    ctx.restore();
    const cs=Math.cos(angle),sn=Math.sin(angle),k=scale;
    const world=p=>{const lx=p[0]*facing*k,ly=p[1]*k;return{x:(s.x||0)+lx*cs-ly*sn,y:(s.y||0)+lx*sn+ly*cs};};
    return{hand:world(handL),head:world(headL),feet:[world(feetL[0]),world(feetL[1])]};
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

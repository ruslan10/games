/* Visual effects: fireballs, lane warning, coin sparkles, impact bursts. */
import * as T from 'three';
export function createFx(scene){
 const cv=document.createElement('canvas');cv.width=cv.height=64;const g=cv.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.35,'rgba(255,255,255,.7)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);
 const glow=new T.CanvasTexture(cv);
 const mk=(color,o=1,add=false)=>new T.Sprite(new T.SpriteMaterial({map:glow,color,transparent:true,opacity:o,blending:add?T.AdditiveBlending:T.NormalBlending,depthWrite:false,fog:false}));
 const root=new T.Group();scene.add(root);
 // fireball pool
 const balls=[];for(let i=0;i<4;i++){const gp=new T.Group(),halo=mk('#e5330a',.75),core=mk('#ff8a1a',1),hot=mk('#ffe27a',1),trail=[];halo.scale.setScalar(3.4);core.scale.setScalar(2);hot.scale.setScalar(.9);gp.add(halo,core,hot);for(let k=0;k<5;k++){const s=mk(k<2?'#ff7a12':'#d12a08',.7-k*.1);s.scale.setScalar(1.5-k*.2);s.position.z=-.0;gp.add(s);trail.push(s);}gp.visible=false;root.add(gp);balls.push({gp,halo,core,hot,trail});}
 // lane warning
 const warnMat=new T.MeshBasicMaterial({color:'#ff2a1f',side:T.DoubleSide,depthTest:false,transparent:true,opacity:0,depthWrite:false,fog:false});
 const warns=[];for(let i=0;i<3;i++){const m=new T.Mesh(new T.PlaneGeometry(2.2,46),warnMat.clone());m.rotation.x=-Math.PI/2;m.position.set(0,.16,-24);m.renderOrder=5;m.visible=false;root.add(m);const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');x.fillStyle='#ffdf3b';x.beginPath();x.moveTo(32,5);x.lineTo(60,56);x.lineTo(4,56);x.closePath();x.fill();x.fillStyle='#b3200f';x.font='bold 40px Arial';x.textAlign='center';x.fillText('!',32,52);const sp=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),transparent:true,depthWrite:false,fog:false}));sp.scale.setScalar(1.3);sp.position.set(0,2,-9);sp.visible=false;root.add(sp);warns.push({m,sp});}
 // particles
 const parts=[];for(let i=0;i<48;i++){const s=mk('#ffffff',0);s.visible=false;root.add(s);parts.push({s,vx:0,vy:0,vz:0,life:0,max:1,size:.3});}
 let pi=0;
 function burst(kind,x,y,z){const n=kind==='coin'?8:kind==='boom'?22:10;for(let i=0;i<n;i++){const p=parts[pi++%parts.length],a=Math.random()*6.283,sp=kind==='boom'?2+Math.random()*5:1+Math.random()*2.2;p.s.position.set(x,y,z);p.vx=Math.cos(a)*sp;p.vy=(kind==='boom'?1.5:.8)*Math.random()*sp+.5;p.vz=Math.sin(a)*sp*.6;p.life=p.max=kind==='boom'?.7+Math.random()*.4:.45;p.size=kind==='boom'?.9+Math.random()*.7:.28;p.s.material.color.set(kind==='coin'?'#ffe066':Math.random()<.5?'#ff8a1f':'#ffd34d');p.s.visible=true;}}
 let clock=0;
 function update(dt,view,fireballs,playing){
  if(playing)clock+=dt;
  const list=fireballs?fireballs.list:[];let bi=0,wi=0;
  for(const f of list){
   if(f.phase==='warn'&&wi<3){const w=warns[wi++],k=(view.t-f.t0)/.9,pulse=.34+.1*Math.sin(clock*22);w.m.position.x=f.lane*2.6;w.m.material.opacity=pulse*Math.min(1,k*3+.2);w.m.visible=true;w.sp.position.x=f.lane*2.6;w.sp.position.y=1.9+Math.sin(clock*14)*.12;w.sp.visible=true;}
   else if(f.phase==='fly'&&bi<4){const b=balls[bi++],z=-(f.x-view.x),fl=1+.12*Math.sin(clock*40+bi);b.gp.visible=z<4&&z>-60;b.gp.position.set(f.lane*2.6,.8+Math.sin(clock*9)*.08,z);b.halo.scale.setScalar(3.4*fl);b.core.scale.setScalar(2*fl);b.trail.forEach((s,k)=>{s.position.z=-(k+1)*.85;s.position.y=.1*k*Math.sin(clock*25+k);s.scale.setScalar((1.5-k*.2)*fl);});}
  }
  for(let i=wi;i<3;i++){warns[i].m.visible=false;warns[i].sp.visible=false;}
  for(let i=bi;i<4;i++)balls[i].gp.visible=false;
  for(const p of parts){if(p.life<=0){p.s.visible=false;continue;}if(playing||true){p.life-=dt;p.s.position.x+=p.vx*dt;p.s.position.y+=p.vy*dt;p.s.position.z+=p.vz*dt;p.vy-=3*dt;}const a=Math.max(0,p.life/p.max);p.s.material.opacity=a;p.s.scale.setScalar(p.size*(.6+a*.6));}
 }
 function reset(){for(const b of balls)b.gp.visible=false;for(const w of warns){w.m.visible=false;w.sp.visible=false;}for(const p of parts){p.life=0;p.s.visible=false;}}
 return{update,burst,reset};}

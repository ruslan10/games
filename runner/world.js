import * as T from 'three';
import {createCourier} from './courier.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

// Original procedural art. Every mesh and texture is made here, without external assets.
export function createWorld(canvas,character){
 const renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;
 renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
 const scene=new T.Scene();scene.background=new T.Color('#7fc8ed');scene.fog=new T.Fog('#a9d6e6',48,95);
 const camera=new T.PerspectiveCamera(57,1,.1,190);
 scene.add(new T.HemisphereLight('#e1f1ff','#a48967',1.0));
 const sun=new T.DirectionalLight('#fff0cc',2.8);sun.position.set(-12,23,9);sun.castShadow=true;
 sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-18,right:18,top:24,bottom:-18,near:.1,far:85});sun.shadow.bias=-.0006;sun.shadow.normalBias=.035;sun.shadow.radius=2;scene.add(sun);scene.add(sun.target);sun.target.position.set(0,0,0);
 const plaster=new T.TextureLoader().load('art/plaster.jpg');plaster.wrapS=plaster.wrapT=T.RepeatWrapping;plaster.colorSpace=T.SRGBColorSpace;plaster.anisotropy=4;
 const mainMat=new T.MeshStandardMaterial({vertexColors:true,roughness:.85});
mainMat.onBeforeCompile=shader=>{shader.uniforms.plaster={value:plaster};shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vSurfacePos;').replace('#include <begin_vertex>','#include <begin_vertex>\nvSurfacePos=position;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vSurfacePos;\nuniform sampler2D plaster;\nfloat grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}').replace('#include <color_fragment>','#include <color_fragment>\nfloat speckle=grain(floor(vSurfacePos*130.)); float patina=grain(floor(vSurfacePos*9.)); diffuseColor.rgb*=.94+speckle*.05+patina*.04; vec3 N=abs(normalize(cross(dFdx(vSurfacePos),dFdy(vSurfacePos)))); vec2 tc=N.x>N.z?vSurfacePos.zy:vSurfacePos.xy; if(diffuseColor.r>.45 && diffuseColor.g>.25 && diffuseColor.b>.15){diffuseColor.rgb*=texture2D(plaster,tc*.35).rgb*1.3;}');};
 const geo={box:new T.BoxGeometry(1,1,1),round:new RoundedBoxGeometry(1,1,1,1,.12),sphere:new T.SphereGeometry(1,12,8),small:new T.IcosahedronGeometry(1,0),leaf:new T.IcosahedronGeometry(1,1),cyl:new T.CylinderGeometry(1,1,1,10),cone:new T.ConeGeometry(1,1,12)};
 const leafGeom=new T.BufferGeometry();leafGeom.setAttribute('position',new T.Float32BufferAttribute([0,.2,0, 0,0,-1, -.65,0,-.4,-.8,0,.2,-.45,0,.7,0,0,1,.45,0,.7,.8,0,.2,.65,0,-.4],3));leafGeom.setAttribute('uv',new T.Float32BufferAttribute([.5,.5,.5,0,0,.2,0,.5,0,.8,.5,1,1,.8,1,.5,1,.2],2));leafGeom.setIndex([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,7,0,7,8,0,8,1]);leafGeom.computeVertexNormals();geo.leafy=leafGeom;
 const v=new T.Vector3(),q=new T.Quaternion(),s=new T.Vector3(),matrix=new T.Matrix4(),euler=new T.Euler(),color=new T.Color();
 let seed=801;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 function part(list,type,x,y,z,w,h,d,c,rx=0,ry=0,rz=0){const g=geo[type].index?geo[type].toNonIndexed():geo[type].clone();euler.set(rx,ry,rz);q.setFromEuler(euler);matrix.compose(v.set(x,y,z),q,s.set(w,h,d));g.applyMatrix4(matrix);color.set(c);const attr=new Float32Array(g.attributes.position.count*3);for(let i=0;i<attr.length;i+=3){attr[i]=color.r;attr[i+1]=color.g;attr[i+2]=color.b;}g.setAttribute('color',new T.BufferAttribute(attr,3));list.push(g);}
 const b=(l,x,y,z,w,h,d,c,rz=0)=>part(l,'box',x,y,z,w,h,d,c,0,0,rz);
 let buildingHero=false;
 const rb=(l,x,y,z,w,h,d,c,rx=0,ry=0,rz=0)=>part(l,buildingHero?'round':'box',x,y,z,w,h,d,c,rx,ry,rz);
 const ball=(l,x,y,z,w,h,d,c)=>part(l,buildingHero?'sphere':'small',x,y,z,w,h,d,c);
 const cyl=(l,x,y,z,r,h,c,rx=0,rz=0)=>part(l,'cyl',x,y,z,r,h,r,c,rx,0,rz);
 function mesh(list,parent=scene,shadows=true,material=mainMat){if(!list.length)return null;const g=mergeGeometries(list);for(const a of list)a.dispose();const m=new T.Mesh(g,material);m.castShadow=shadows;m.receiveShadow=true;parent.add(m);return m;}
 function texture(kind){const c=document.createElement('canvas');c.width=c.height=1024;const x=c.getContext('2d');x.fillStyle=kind==='stone'?'#ab9e8a':'#f5dfbd';x.fillRect(0,0,1024,1024);if(kind==='stone'){for(let row=0;row<16;row++)for(let col=-1;col<8;col++){const px=col*146+(row%2?73:0),py=row*64;const n=Math.floor(rnd()*17);x.fillStyle=`rgb(${176+n},${163+n},${144+n})`;x.fillRect(px+2,py+2,142,60);x.fillStyle='#e1d0b8';x.fillRect(px+3,py+2,140,2);x.fillStyle='#928575';x.fillRect(px+3,py+60,140,2);const gr=x.createLinearGradient(px,py,px+100,py+64);gr.addColorStop(0,'#fff4d71c');gr.addColorStop(.5,'#4e40370a');gr.addColorStop(1,'#8d7b641a');x.fillStyle=gr;x.fillRect(px+3,py+4,140,55);for(let k=0;k<12;k++){x.fillStyle=k%2?'#fff4d715':'#584f3e12';x.fillRect(px+5+rnd()*130,py+4+rnd()*50,3+rnd()*19,1+rnd()*2);}}}for(let i=0;i<20000;i++){x.fillStyle=rnd()>.5?'#ffffff0b':'#493a2408';x.fillRect(rnd()*1024,rnd()*1024,2+rnd()*5,1+rnd()*2);}const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return t;}
 const paving=new T.TextureLoader().load('art/paving.jpg');paving.colorSpace=T.SRGBColorSpace;paving.wrapS=paving.wrapT=T.RepeatWrapping;paving.anisotropy=8;paving.repeat.set(1.5,30);
 const bump=new T.TextureLoader().load('art/paving-height.jpg');bump.wrapS=bump.wrapT=T.RepeatWrapping;bump.repeat.copy(paving.repeat);
 const road=new T.Mesh(new T.PlaneGeometry(8.6,230),new T.MeshStandardMaterial({map:paving,bumpMap:bump,bumpScale:.055,roughness:.93}));road.rotation.x=-Math.PI/2;road.position.set(0,.012,-93);road.receiveShadow=true;scene.add(road);
 const sidewalkTex=paving.clone();sidewalkTex.needsUpdate=true;sidewalkTex.repeat.set(.6,30);
 const sidewalkMat=new T.MeshStandardMaterial({map:sidewalkTex,color:'#f2dfbf',roughness:.95});
 for(const side of [-1,1]){const m=new T.Mesh(new T.BoxGeometry(2.7,.24,230),sidewalkMat);m.position.set(side*5.65,-.03,-93);m.receiveShadow=true;scene.add(m);}
 const groundParts=[];b(groundParts,0,-.3,-90,150,.3,240,'#c6b28e');for(const x of [-1.3,1.3]){b(groundParts,x,.023,-90,.12,.035,240,'#dfc9a7');b(groundParts,x-.09,.025,-90,.025,.04,240,'#9d8d75');}mesh(groundParts,scene,false);
 const shadowCanvas=document.createElement('canvas');shadowCanvas.width=512;shadowCanvas.height=2048;const sc=shadowCanvas.getContext('2d');
 sc.fillStyle='#3d4b5c';sc.globalAlpha=.1;
 for(let j=0;j<4;j++){const yy=j*512+200;sc.beginPath();sc.moveTo(0,yy);sc.lineTo(270,yy+125);sc.lineTo(270,yy+395);sc.lineTo(0,yy+270);sc.fill();}
 sc.globalAlpha=.12;for(let j=0;j<3;j++){const xx=65,yy=j*690+230;sc.beginPath();sc.ellipse(xx+90,yy+95,110,55,.55,0,Math.PI*2);sc.fill();sc.save();sc.translate(xx,yy);sc.rotate(-.52);sc.fillRect(0,0,13,165);sc.restore();}
 const shadowTex=new T.CanvasTexture(shadowCanvas),shadowMat=new T.MeshBasicMaterial({map:shadowTex,transparent:true,depthWrite:false,opacity:.8});
 const chunks=[];
 const palettes=[['#f1c39e','#e8b28e'],['#f3ddbb','#ead1a5'],['#ed9f7e','#d79077'],['#eecda9','#d3b28c'],['#f3dfbd','#dfc5a1'],['#e9aa96','#d99d89']];
 function tree(l,x,z,scale=1){
 cyl(l,x,1.45*scale,z,.15*scale,2.9*scale,'#805335');
 for(let j=0;j<7;j++){const a=j*2.4;part(l,'cyl',x+Math.cos(a)*.3*scale,2.2*scale,z+Math.sin(a)*.3*scale,.08*scale,1.5*scale,.08*scale,'#8a623e',Math.cos(a)*.6,0,Math.sin(a)*.6);}
 const colors=['#579333','#76ab3d','#3f7d2c','#91b849','#6da43a','#a2bb52'];
 for(let j=0;j<1800;j++){const a=rnd()*Math.PI*2,rr=Math.cbrt(rnd()),yy=(rnd()-.5)*2,r=Math.sqrt(1-yy*yy)*rr*1.25*scale;const xx=x+Math.cos(a)*r,zz=z+Math.sin(a)*r,y=3.0*scale+yy*rr*1.05*scale;
 part(l,'leafy',xx,y,zz,.095*scale,.095*scale,.17*scale,colors[j%colors.length],rnd()*1.5,rnd()*6.28,rnd()*1.3);}
 }
 function pot(l,x,z,flowers=false){cyl(l,x,.3,z,.31,.58,'#bb7148');cyl(l,x,.58,z,.35,.11,'#df9661');cyl(l,x,.64,z,.25,.025,'#514333');for(let j=0;j<7;j++){const a=j*2.4;ball(l,x+Math.cos(a)*.18,.76+(j%3)*.09,z+Math.sin(a)*.18,.22,.22,.22,j%2?'#76a33b':'#4f8536');if(flowers)ball(l,x+Math.cos(a)*.25,.93+(j%3)*.09,z+Math.sin(a)*.25,.09,.08,.09,j%2?'#f065a2':'#f6c34f');}}
 function lamp(l,x,z){cyl(l,x,1.9,z,.055,3.8,'#294a4b');cyl(l,x,.17,z,.17,.32,'#314c4b');rb(l,x,3.55,z,.32,.5,.32,'#f7edc3');for(const dx of [-.18,.18])for(const dz of [-.18,.18])b(l,x+dx,3.55,z+dz,.032,.56,.032,'#2f4c4d');b(l,x,3.88,z,.49,.09,.49,'#29484c');part(l,'cone',x,4.02,z,.34,.23,.34,'#315050');ball(l,x,4.2,z,.055,.11,.055,'#29484c');}
 function bench(l,x,z,side){for(let j=0;j<4;j++)b(l,x,.5,z-.57+j*.36,.7,.09,.28,'#876047');for(let j=0;j<3;j++)b(l,x+side*.32,.75+j*.15,z,.1,.1,1.4,'#a7774e');for(const dz of [-.5,.5]){b(l,x,.25,z+dz,.55,.48,.07,'#315151');b(l,x+side*.31,.65,z+dz,.07,1,.07,'#315151');}}
 function building(l,side,z,index){const h=6.5+(index*7%5),w=4.8,depth=8.1,x=side*(9.1+(index%3)*.14),face=side*(6.68+(index%3)*.14),pal=palettes[index%palettes.length];
 b(l,x,h/2,z,w,h,depth,pal[0]);b(l,face,.55,z,.18,1.1,depth,'#d9ba96');for(let y=.18;y<1;y+=.27)for(let zz=-3.8;zz<4;zz+=.9)b(l,face-side*.03,y,z+zz,.06,.018,.86,'#be9e77');
 b(l,x,h-.1,z,w+.35,.24,depth+.3,'#fff0d6');b(l,x,h+.12,z,w+.45,.16,depth+.4,'#c77f54');
 // Roof tiles along the street edge and corners.
 for(let zz=-4.0;zz<=4;zz+=.32)cyl(l,face,h+.26,z+zz,.17,.48,index%2?'#bd6945':'#cf8252',0,Math.PI/2);
 b(l,x+side*.9,h+.65,z+1,1.1,1.4,.9,pal[1]);b(l,x+side*.9,h+1.37,z+1,1.3,.15,1.1,'#bb7651');
 for(let f=0;f<Math.floor((h-1.5)/2.25);f++)for(let k=0;k<3;k++){const yy=2.35+f*2.25,zz=z-2.7+k*2.65;
 b(l,face-side*.035,yy,zz,.12,1.5,1.06,'#fae9cd');b(l,face-side*.11,yy+.02,zz,.08,1.26,.83,'#335b60');b(l,face-side*.17,yy+.02,zz,.05,1.15,.035,'#c7d6c4');b(l,face-side*.17,yy+.02,zz,.05,.035,.8,'#c7d6c4');
 for(const off of [-.64,.64]){b(l,face-side*.08,yy,zz+off,.12,1.37,.36,'#438c7d');for(let sl=0;sl<7;sl++)b(l,face-side*.16,yy-.53+sl*.17,zz+off,.07,.035,.31,'#2f7769');}
 b(l,face-side*.22,yy-.8,zz,.47,.13,1.4,'#fff1d2');
 if(f===1&&k===1&&index%2===0){b(l,face-side*.52,yy-.86,zz,1.2,.17,1.8,'#ead3ae');for(let az=-.8;az<=.8;az+=.2)b(l,face-side*1.05,yy-.52,zz+az,.04,.75,.04,'#325c56');b(l,face-side*1.05,yy-.13,zz,.05,.055,1.85,'#325c56');for(let j=0;j<9;j++)ball(l,face-side*.98,yy-.4,zz-.7+j*.18,.14,.14,.14,j%2?'#d6558f':'#5c9537');}}
 // Ground-floor shop glazing, door trim and striped awning.
 b(l,face-side*.08,1.2,z,.08,2.1,3.7,'#396a6d');for(const dz of [-1.88,0,1.88])b(l,face-side*.17,1.2,z+dz,.12,2.25,.12,'#f9e6c9');b(l,face-side*.16,.2,z,.15,.15,3.9,'#e3c9a4');
 const awningColor=index%3===0?'#da765e':index%3===1?'#328d88':'#b4a354';for(let j=0;j<10;j++){const zz=z-2.02+j*.45;rb(l,face-side*.82,2.54,zz,1.8,.14,.46,j%2?'#fff0d2':awningColor,0,0,side*.12);rb(l,face-side*1.65,2.34,zz,.1,.36,.46,j%2?'#fff0d2':awningColor);}
 if(index%3===0){for(let j=0;j<80;j++){const zz=z-3.45+Math.sin(j*2.4)*.5,yy=3+rnd()*3.8;part(l,'small',face-side*(.18+rnd()*.16),yy,zz,.12,.18,.16,j%5===0?'#de5c99':j%2?'#568b2f':'#7baa3d');}}
 if(index%2===1){pot(l,side*5.2,z-2.8,true);const tableX=side*5.6; cyl(l,tableX,.73,z+1.1,.5,.09,'#b78555');cyl(l,tableX,.38,z+1.1,.06,.7,'#3c5550');for(const dz of [-.85,.85]){b(l,tableX,.42,z+1.1+dz,.53,.08,.5,'#a77b4e');b(l,tableX+side*.2,.7,z+1.1+dz,.09,.54,.5,'#a77b4e');for(const xx of [-.2,.2])b(l,tableX+xx,.2,z+1.1+dz,.04,.4,.04,'#3c5550');}}
 }
 for(let c=0;c<2;c++){const l=[],g=new T.Group();for(const side of [-1,1]){for(let j=0;j<4;j++)building(l,side,-j*11-5,c*8+j+(side>0?2:0));for(let j=0;j<3;j++){const z=-j*15-10;tree(l,side*5.35,z,.92);pot(l,side*5.35,z);lamp(l,side*4.65,z+5.4);}bench(l,side*5.4,-21,side);for(let j=0;j<44;j++)b(l,side*4.38,.095,-j*1.02,.25,.26,.96,j%3?'#e8d7b8':'#f7e8cd');}mesh(l,g,true);const shade=new T.Mesh(new T.PlaneGeometry(14,44),shadowMat);shade.rotation.x=-Math.PI/2;shade.position.set(0,.055,-22);g.add(shade);g.position.z=-c*44;scene.add(g);chunks.push({g,base:-c*44});}
 // Original generated distant background, not a gameplay screenshot.
 const farTexture=new T.TextureLoader().load('art/coast.jpg');farTexture.colorSpace=T.SRGBColorSpace;
 const far=new T.Mesh(new T.PlaneGeometry(270,152),new T.MeshBasicMaterial({map:farTexture,fog:false,toneMapped:false}));far.position.set(-55,40,-155);scene.add(far);
 // A proper masonry arch, with an open view through it, never a slab across the camera.
 const bridgeGroup=new T.Group(),bl=[];for(const side of [-1,1]){b(bl,side*5.3,2.7,0,1.3,5.4,1.9,'#d6c7a6');b(bl,side*5.3,.3,0,1.7,.6,2.2,'#b9ad91');}for(let i=0;i<22;i++){const a=i/22*Math.PI,an=(i+.99)/22*Math.PI,inner=4.7,outer=5.3;const sh=new T.Shape();sh.moveTo(Math.cos(a)*inner,Math.sin(a)*2.1+3.6);sh.lineTo(Math.cos(a)*outer,Math.sin(a)*2.6+3.6);sh.lineTo(Math.cos(an)*outer,Math.sin(an)*2.6+3.6);sh.lineTo(Math.cos(an)*inner,Math.sin(an)*2.1+3.6);sh.closePath();const gg=new T.ExtrudeGeometry(sh,{depth:1.6,bevelEnabled:false});gg.translate(0,0,-.8);const co=new T.Color(i%2?'#e2d4b4':'#d8c7a5');const ca=new Float32Array(gg.attributes.position.count*3);for(let n=0;n<ca.length;n+=3){ca[n]=co.r;ca[n+1]=co.g;ca[n+2]=co.b;}gg.setAttribute('color',new T.BufferAttribute(ca,3));bl.push(gg);}b(bl,0,6.45,0,12,.5,2.1,'#e4d3b2');for(let x=-5.8;x<6;x+=.4)b(bl,x,7.1,-.7,.055,1.05,.06,'#305953');b(bl,0,7.65,-.7,12,.09,.09,'#315c57');for(const x of [-4,-1.8,1.8,4]){cyl(bl,x,6.95,-.2,.3,.4,'#bb7952');for(let j=0;j<5;j++)ball(bl,x+(j-2)*.14,7.2,-.2,.19,.2,.2,j%2?'#dc669a':'#5d943e');}mesh(bl,bridgeGroup);scene.add(bridgeGroup);
 let hero,rig={},limbs=[],tail,bubble,heroId=character;
 function makeHero(id){buildingHero=true;heroId=id;if(hero){scene.remove(hero);hero.traverse(o=>{if(o.isMesh)o.geometry.dispose();});}hero=new T.Group();hero.scale.setScalar(1.16);scene.add(hero);rig={};limbs=[];tail=null;
 if(id==='courier'){scene.remove(hero);const made=createCourier(scene);hero=made.hero;rig=made.rig;limbs=made.limbs;hero.scale.setScalar(1.16);bubble=new T.Mesh(new T.SphereGeometry(1.22,16,12),new T.MeshBasicMaterial({color:'#83f1ee',transparent:true,opacity:.15,wireframe:true}));bubble.position.y=.9;bubble.visible=false;hero.add(bubble);buildingHero=false;return;}
const human=id==='courier',fox=id==='fox',cat=id==='cat',bunny=id==='bunny',panda=id==='panda';const fur=fox?'#d87932':cat?'#afa0d8':bunny?'#e8d4d0':'#f1eee1',dark=panda?'#35404a':'#4e3930',cream='#fff0d6';
 function group(name,x,y,z,list,parent=hero){const g=new T.Group();g.position.set(x,y,z);mesh(list,g,true);parent.add(g);rig[name]=g;return g;}
 const torso=[];if(human){rb(torso,0,.03,0,.62,.65,.4,'#109f9f');ball(torso,0,.34,.03,.35,.19,.3,'#0a888b');ball(torso,0,.36,.06,.28,.13,.24,'#1bb5b0');rb(torso,0,-.3,0,.55,.16,.39,'#0a7e82');for(const side of [-1,1]){rb(torso,side*.23,.04,.215,.065,.66,.055,'#574d37',0,0,side*-.08);}rb(torso,0,.02,.32,.48,.55,.23,'#e58028');rb(torso,0,.16,.45,.45,.2,.1,'#ffa634');rb(torso,0,-.1,.46,.37,.23,.08,'#f3932f');b(torso,0,.14,.51,.1,.09,.035,'#6d5a39');for(const side of [-1,1])b(torso,side*.19,-.04,.49,.035,.35,.025,'#d47025');}
 else {ball(torso,0,0,0,.34,.43,.28,fur);ball(torso,0,-.03,-.23,.23,.3,.055,panda?'#fff':cream);rb(torso,0,.21,.02,.68,.14,.54,'#169a99');rb(torso,-.25,.02,.27,.12,.33,.08,'#20b9ad',.12,.1,-.2);rb(torso,.08,.03,.25,.32,.37,.14,'#d99640');}
 group('body',0,human?1.02:.88,0,torso);
 const head=[];if(human){ball(head,0,0,0,.28,.3,.25,'#d8986c');ball(head,0,.08,.08,.31,.25,.26,'#4c2d20');for(let i=0;i<10;i++){const a=i*2.4;ball(head,Math.cos(a)*.23,.2+Math.sin(i)*.04,Math.sin(a)*.18,.13,.12,.14,i%2?'#5d3520':'#714227');}for(let i=0;i<5;i++)part(head,'cone',-.2+i*.09,.34+i*.01,.04,.12,.28,.13,i%2?'#6e3e23':'#4c2d20',.35,.2,-.6);for(const side of [-1,1])ball(head,side*.278,-.02,0,.06,.09,.06,'#d49468');}
 else {ball(head,0,0,0,.4,.37,.32,fur);ball(head,0,-.08,-.26,.25,.17,.23,cream);ball(head,0,-.03,-.46,.075,.055,.05,'#3c3432');for(const side of [-1,1]){if(bunny){ball(head,side*.19,.49,.01,.12,.44,.1,fur);ball(head,side*.19,.51,-.07,.06,.3,.035,'#d6a1a1');}else if(panda)ball(head,side*.31,.29,.01,.16,.17,.13,dark);else {part(head,'cone',side*.27,.35,.01,.22,.43,.19,fur,0,Math.PI/4,side*-.1);part(head,'cone',side*.27,.37,-.06,.12,.25,.08,'#f0c6ac',0,Math.PI/4,side*-.1);}ball(head,side*.2,.02,-.27,.055,.065,.025,'#2e3538');}}
 group('head',0,human?1.67:1.49,-.025,head);if(human)rig.head.scale.setScalar(.84);
 // Each limb has an upper joint, a bending knee/elbow and a distinct foot/paw.
 for(const side of [-1,1]){const upper=[],lower=[],shoe=[],leg=new T.Group();leg.position.set(side*(human?.17:.18),human?.74:.59,0);hero.add(leg);
 if(human){rb(upper,0,-.12,0,.26,.32,.29,'#37434b');cyl(upper,0,-.29,0,.09,.2,'#dca078');cyl(lower,0,-.12,0,.085,.28,'#dfa77d');cyl(lower,0,-.29,0,.09,.13,'#f4f0dc');cyl(lower,0,-.26,0,.095,.025,'#20a39e');rb(shoe,0,-.015,-.08,.235,.16,.39,'#fcf4df');rb(shoe,0,-.09,-.07,.25,.06,.41,'#d6cbb9');rb(shoe,0,.04,.015,.2,.08,.16,'#1c9c99');for(let j=0;j<3;j++)b(shoe,0,.07,-.06-j*.04,.14,.015,.017,'#fff6e2');for(let j=0;j<6;j++)rb(shoe,0,-.124,-.24+j*.06,.17,.013,.035,j%2?'#9b9b92':'#b6b7ac');}
 else{ball(upper,0,-.14,0,.13,.23,.14,panda?dark:fur);ball(lower,0,-.13,0,.105,.2,.11,panda?dark:fur);ball(shoe,0,-.02,-.09,.15,.09,.23,panda?dark:cream);}
 mesh(upper,leg);const knee=group(`knee${side}`,0,-.32,0,lower,leg);const foot=group(`foot${side}`,0,-.32,0,shoe,knee);limbs.push({side,kind:'leg',g:leg,knee,foot});
 const armList=[],fore=[],arm=new T.Group();arm.position.set(side*(human?.35:.34),human?1.25:1.07,0);hero.add(arm);ball(armList,0,-.13,0,.14,.23,.14,human?'#10a9a5':panda?dark:fur);ball(fore,0,-.12,0,.1,.19,.1,human?'#109b9d':panda?dark:fur);ball(fore,0,-.29,-.015,.09,.11,.085,human?'#dca079':panda?dark:cream);mesh(armList,arm);const elbow=group(`elbow${side}`,0,-.28,0,fore,arm);limbs.push({side,kind:'arm',g:arm,knee:elbow});}
 if(fox||cat){const a=[];ball(a,0,.18,.2,fox?.22:.09,.38,.17,fur);ball(a,0,.45,.33,fox?.19:.09,.22,.15,fox?cream:fur);tail=group('tail',0,.59,.17,a);tail.rotation.x=.7;}else if(bunny){const a=[];ball(a,0,0,0,.18,.18,.18,'#fff7e9');group('tail',0,.61,.3,a);}
 bubble=new T.Mesh(new T.SphereGeometry(1.22,16,12),new T.MeshBasicMaterial({color:'#83f1ee',transparent:true,opacity:.15,wireframe:true}));bubble.position.y=.9;bubble.visible=false;hero.add(bubble);buildingHero=false;
 }
 makeHero(character);
 // A soft contact decal anchors the running character even between shadow-map pixels.
 const dc=document.createElement('canvas');dc.width=dc.height=64;const dx=dc.getContext('2d'),grad=dx.createRadialGradient(32,32,0,32,32,31);grad.addColorStop(0,'#00000070');grad.addColorStop(.4,'#00000042');grad.addColorStop(1,'#00000000');dx.fillStyle=grad;dx.fillRect(0,0,64,64);const shadow=new T.Mesh(new T.PlaneGeometry(1.8,1.45),new T.MeshBasicMaterial({map:new T.CanvasTexture(dc),transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.035;scene.add(shadow);
 const objects=new T.Group();scene.add(objects);let coins=[],powers=[],movers=[],coinMesh=null,coinCount=0,obstacleMesh=null,finishMesh=null;const scratch=new T.Object3D();let pickups=[],pbMarker=null;
 function sign(text,bg='#176b70',w=2.2,h=1.0){const c=document.createElement('canvas');c.width=384;c.height=192;const ctx=c.getContext('2d');ctx.fillStyle=bg;ctx.beginPath();ctx.roundRect(4,4,376,184,28);ctx.fill();ctx.strokeStyle='#fff0d5';ctx.lineWidth=8;ctx.stroke();ctx.fillStyle='#fff7df';ctx.font='bold 65px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.direction='rtl';ctx.fillText(text,192,102,350);const map=new T.CanvasTexture(c),sp=new T.Sprite(new T.SpriteMaterial({map,depthTest:true}));sp.scale.set(w,h,1);return sp;}
 // A real little skateboard: kicktail deck, grip tape, painted edge, metal trucks, light wheels with hubs.
 const ride=new T.Group();{const a=[];rb(a,0,.17,0,.62,.075,1.36,'#e2692e');rb(a,0,.21,-.74,.54,.06,.26,'#e2692e',.45);rb(a,0,.21,.74,.54,.06,.26,'#e2692e',-.45);rb(a,0,.212,0,.58,.018,1.2,'#2e3742');rb(a,0,.14,0,.635,.028,1.28,'#ffd166');for(const zz of [-.46,.46]){cyl(a,0,.095,zz,.032,.74,'#aeb6bf',0,Math.PI/2);for(const xx of [-.36,.36]){cyl(a,xx,.085,zz,.088,.075,'#f4f6f8',0,Math.PI/2);ball(a,xx,.085,zz,.042,.042,.042,'#31516c');}}mesh(a,ride,true);}scene.add(ride);ride.visible=false;
 const pogo=new T.Group();{const a=[];cyl(a,0,.35,0,.055,.75,'#65d8ca');for(let i=0;i<7;i++){const ring=new T.Mesh(new T.TorusGeometry(.13,.025,5,12),new T.MeshStandardMaterial({color:'#ffcc61'}));ring.rotation.x=Math.PI/2;ring.position.y=.05+i*.055;pogo.add(ring);}b(a,0,.52,0,.68,.06,.2,'#d58bf2');mesh(a,pogo,true);}scene.add(pogo);pogo.visible=false;
 const zipHandle=new T.Group();{const a=[];cyl(a,0,0,0,.035,.5,'#6a5140');rb(a,0,-.25,.08,1.0,.075,.09,'#f5cb72');mesh(a,zipHandle,true);}scene.add(zipHandle);zipHandle.visible=false;
 // The chaser: a stocky dark street dog that looms behind the runner after a stumble.
 const chaser=new T.Group();{const c=[];ball(c,0,.62,0,.42,.4,.62,'#3c414d');ball(c,0,.95,-.5,.3,.28,.3,'#454b58');ball(c,0,.88,-.78,.14,.12,.2,'#2c313b');for(const s of [-1,1]){part(c,'cone',s*.16,1.18,-.5,.1,.22,.1,'#2c313b',-.2,0,s*.15);}for(const s of [-1,1]){cyl(c,s*.2,.3,.28,.09,.6,'#333845');cyl(c,s*.2,.3,-.3,.09,.6,'#333845');}part(c,'cone',0,.78,.62,.08,.4,.08,'#333845',1.1,0,0);mesh(c,chaser,true);const eyeM=new T.MeshBasicMaterial({color:'#ff453a',fog:false});for(const s of [-1,1]){const e=new T.Mesh(new T.SphereGeometry(.05,8,6),eyeM);e.position.set(s*.12,1.0,-.78);chaser.add(e);}}chaser.visible=false;scene.add(chaser);
 const coinParts=[];
 function coinPart(g,c){const ca=new Float32Array(g.attributes.position.count*3),co=new T.Color(c);for(let j=0;j<ca.length;j+=3){ca[j]=co.r;ca[j+1]=co.g;ca[j+2]=co.b;}g.setAttribute('color',new T.BufferAttribute(ca,3));coinParts.push(g);}
 coinPart(new T.CylinderGeometry(.3,.3,.09,24).rotateX(Math.PI/2),'#ffc526');
 for(const side of [-1,1]){coinPart(new T.CylinderGeometry(.247,.247,.014,24).rotateX(Math.PI/2).translate(0,0,side*.052),'#e99c12');coinPart(new T.TorusGeometry(.278,.026,6,24).translate(0,0,side*.058),'#ffe477');coinPart(new T.BoxGeometry(.17,.17,.02).rotateZ(Math.PI/4).translate(0,0,side*.071),'#ffde55');}
 const coinGeometry=mergeGeometries(coinParts);
 const gold=new T.MeshStandardMaterial({color:'#ffffff',vertexColors:true,metalness:.12,roughness:.35,emissive:'#8c5d00',emissiveIntensity:.12});
 function clearObjects(){for(const m of [...objects.children]){objects.remove(m);if(m!==coinMesh)m.geometry?.dispose();}objects.traverse(o=>{if(o.isSprite){o.material.map?.dispose();o.material.dispose();}});coins=[];powers=[];movers=[];pickups=[];pbMarker=null;coinMesh=null;}
 function populate(l){clearObjects();const a=[];for(const o of l.obs){const x=o.lane*2.6,z=-o.x;
 if(o.type==='crate'){rb(a,x,.63,z,1.62,1.26,1.18,'#a96f36');for(let j=0;j<5;j++){b(a,x-.63+j*.315,.63,z+.598,.29,1.08,.04,j%2?'#c18a46':'#b67d3c');b(a,x,.63,z-.598,.29,1.08,.04,'#b98140');}for(const y of [.09,1.17])rb(a,x,y,z+.64,1.67,.16,.12,'#d19a50');for(const xx of [-.73,.73])rb(a,x+xx,.63,z+.65,.16,1.16,.13,'#cf9953');rb(a,x,.63,z+.68,.16,1.67,.095,'#cd9750',0,0,-.87);for(const xx of [-.71,.71])for(const y of [.12,1.14])ball(a,x+xx,y,z+.726,.032,.032,.012,'#6c6654');for(let j=0;j<4;j++)b(a,x-.59+j*.39,1.27,z,.37,.025,1.05,j%2?'#bd8646':'#c28e4c');}
 else if(o.type==='barrier'){rb(a,x,.51,z,1.95,.97,.62,'#ef7d33');for(const xx of [-.73,0,.73])rb(a,x+xx,.52,z+.323,.23,.78,.025,'#fff0d2',0,0,-.48);for(const xx of [-.72,.72]){rb(a,x+xx,.08,z,.45,.16,.91,'#4c5556');rb(a,x+xx,.98,z,.2,.09,.2,'#55595a');}}
 else if(o.type==='tunnel'){for(const ze of [-3.4,3.4]){for(const xx of [-1,1]){rb(a,x+xx,1.42,z+ze,.22,2.84,.36,'#317b7b');rb(a,x+xx,.09,z+ze,.55,.17,.72,'#465e5c');}rb(a,x,1.9,z+ze,2.5,1.4,.5,'#d6814c');for(let xx=-.85;xx<1;xx+=.42)rb(a,x+xx,1.9,z+ze+.26,.18,1.2,.025,'#ffe8bc',0,0,-.22);}
  rb(a,x,1.9,z,2.44,1.5,6.6,'#cd7a4a');rb(a,x,2.72,z,2.6,.2,7.2,'#377d7b');for(let zz=-3;zz<=3;zz+=.75)rb(a,x,1.18,z+zz,2.5,.07,.3,'#ffe8bc');}
 else if(o.type==='ramp'){rb(a,x,.42,z,2.0,.5,3.4,'#c98d4b',.4);rb(a,x,.74,z,1.72,.07,2.9,'#f2c069',.4);for(let j=0;j<3;j++)rb(a,x,.78,z+1.0-j*.95,1.15,.06,.32,'#fff3d6',.4);for(const xx of [-.95,.95])rb(a,x+xx,.5,z,.14,.66,3.2,'#8a5a2e',.4);}
 else if(o.type==='mover'){/* dynamic mesh below */}
 else {for(const xx of [-1,1]){rb(a,x+xx,1.42,z,.22,2.84,.36,'#317b7b');rb(a,x+xx,.09,z,.55,.17,.72,'#465e5c');}rb(a,x,1.84,z,2.2,1.34,.48,'#d6814c');for(let xx=-.85;xx<1;xx+=.42)rb(a,x+xx,1.84,z+.25,.18,1.15,.025,'#ffe8bc',0,0,-.22);rb(a,x,2.57,z,2.44,.21,.59,'#377d7b');}
 }
 for(const r of l.routes||[]){const x=r.lane*2.6;if(r.type==='roof'){const angle=Math.atan(r.height/10);rb(a,x,r.height/2,-r.start-5,2.4,.16,Math.hypot(10,r.height),'#e6bb80',angle);rb(a,x,r.height-.1,-(r.start+r.end)/2,2.4,.22,r.end-r.start-20,'#e6bb80');rb(a,x,r.height/2,-r.end+5,2.4,.16,Math.hypot(10,r.height),'#e6bb80',-angle);for(let z=r.start+12;z<r.end-10;z+=8){rb(a,x,r.height/2,-z,2.2,r.height,.8,'#c98968');for(const side of [-1,1])rb(a,x+side*1.12,r.height+.3,-z,.08,.6,.1,'#287f80');}for(const side of [-1,1])rb(a,x+side*1.12,r.height+.6,-(r.start+r.end)/2,.08,.08,r.end-r.start-20,'#287f80');}else{for(const z of [r.start,r.end]){for(const side of [-1,1])cyl(a,x+side*1.15,2.5,-z,.07,5,'#398087');rb(a,x,5,-z,2.6,.15,.15,'#398087');}rb(a,x,5,-(r.start+r.end)/2,.05,.05,r.end-r.start,'#f2cc71');}
 const lab=sign(r.type==='roof'?'גגות ↑':'קפיצה לזיפ־ליין',r.type==='roof'?'#267e78':'#7d5ea4',2.6,1.1);lab.position.set(x,3.8,-r.start+8);objects.add(lab);}
 for(const p of l.pickups||[]){const g=sign(p.kind==='letter'?p.value:'✦',p.kind==='letter'?'#31895b':'#a45d99',.8,.8);g.position.set(p.lane*2.6,p.y+.35,-p.x);objects.add(g);pickups.push({p,g});}
 if(l.bestMarker>2){pbMarker=sign('השיא שלך','#bb7734',2.5,.95);pbMarker.position.set(0,3.2,-l.bestMarker);objects.add(pbMarker);rb(a,0,.045,-l.bestMarker,7.6,.04,.15,'#ffd46a');}
 obstacleMesh=mesh(a,objects,true);
 l.obs.forEach((o,i)=>{if(o.type!=='mover')return;const c=[],body=o.id%2?'#e8a13c':'#5b8fd9';
  rb(c,0,.62,0,1.7,.7,2.5,body);rb(c,0,1.18,-.1,1.5,.5,1.5,body);rb(c,0,1.2,.68,1.3,.34,.1,'#bfe3f0');rb(c,0,1.2,-.88,1.3,.34,.1,'#bfe3f0');
  for(const sx of [-1,1]){rb(c,sx*.87,.85,-.1,.06,.4,1.2,'#20303a');for(const sz of [-1,1])cyl(c,sx*.8,.34,sz*.8,.34,.2,'#2b2f33',0,Math.PI/2);rb(c,sx*.55,.6,1.27,.3,.18,.06,'#fff6c8');}
  rb(c,0,.34,1.29,1.5,.24,.08,'#f5edd8');const g=mesh(c,objects,true);g.position.set(o.lane*2.6,0,-o.x);movers.push({i,g});});coins=l.coins;coinCount=coins.length;coinMesh=new T.InstancedMesh(coinGeometry,gold,coinCount);coinMesh.instanceMatrix.setUsage(T.DynamicDrawUsage);coinMesh.frustumCulled=false;objects.add(coinMesh);
 for(const p of l.powers){const list=[],col=p.type==='shield'?'#76e5dc':p.type==='magnet'?'#d49aeb':p.type==='shoes'?'#8fe07a':p.type==='board'?'#f6a143':p.type==='pogo'?'#c291e7':'#86c9f5';
  ball(list,0,1,0,.39,.45,.27,col);b(list,0,1.03,.28,.14,.48,.04,'#fff8dc');
  if(p.type==='magnet')b(list,0,.83,.28,.43,.12,.04,'#fff8dc');
  if(p.type==='shoes'){b(list,0,.76,.3,.36,.13,.18,'#fff8dc');b(list,.1,.7,.38,.16,.1,.12,'#fff8dc');}
  if(p.type==='board'){rb(list,0,.64,0,.8,.1,.44,'#e2692e');rb(list,0,.695,0,.72,.03,.4,'#2e3742');rb(list,0,.585,0,.84,.03,.42,'#ffd166');for(const s of [-1,1])cyl(list,s*.3,.545,.18,.075,.07,'#f4f6f8',Math.PI/2,0);}
  if(p.type==='pogo'){cyl(list,0,1,.1,.04,1,'#fff1c5');b(list,0,1.4,.1,.55,.06,.1,'#c17be0');}
  if(p.type==='flight')for(const s of [-1,1])b(list,s*.32,1.08,.05,.42,.07,.2,'#fff8dc',s*.35);
  const g=mesh(list,objects,false);powers.push({p,g});}
 const f=[];for(const x of [-4.1,4.1])cyl(f,x,2.9,-l.length,.07,5.8,'#f4e1b7');for(let i=0;i<12;i++)for(let j=0;j<2;j++)b(f,-3.85+i*.7,5.1+j*.55,-l.length,.7,.55,.06,(i+j)%2?'#315c66':'#fff3da');finishMesh=mesh(f,objects,false);}
 let animTime=0,elev=0,smoothedX=0,lean=0,duck=0,runPhase=0,lastDistance=0,width=390,height=844;
 const stats={frames:0,frameMs:[],calls:0,triangles:0,dpr:renderer.getPixelRatio(),quality:'auto'};let slowFrames=0;
 function sampleFrame(dt,mode){if(mode!=='playing'||dt<=0)return;stats.frameMs.push(dt*1000);if(stats.frameMs.length>600)stats.frameMs.shift();if(stats.frames>45&&dt>.035)slowFrames++;else slowFrames=Math.max(0,slowFrames-1);if(slowFrames>25&&renderer.getPixelRatio()>1){renderer.setPixelRatio(1);renderer.setSize(width,height,false);stats.dpr=1;stats.quality='adaptive-native';slowFrames=0;}}
 function resize(){width=innerWidth;height=innerHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.fov=width>height?61:56;camera.updateProjectionMatrix();}
 function render(dt,state,mode){const playing=mode==='playing',menu=mode==='menu';if(playing||menu)animTime+=dt;const dist=state?.x??animTime*2.5,x=state?.lateral??0,y=state?.y??0;
 paving.offset.y=dist/230*30;bump.offset.copy(paving.offset);sidewalkTex.offset.y=dist/230*30;
 for(const c of chunks)c.g.position.z=((c.base+dist+44)%88+88)%88-44;
 bridgeGroup.position.z=((-100+dist+30)%240+240)%240-210;bridgeGroup.visible=bridgeGroup.position.z< -22;
 objects.position.z=dist;
 if(coinMesh){let visible=0;const ang=animTime*2.6;for(let i=0;i<coins.length;i++){const c=coins[i],z=dist-c.x;if(c.taken||z>8||z< -130)continue;scratch.position.set(c.lane*2.6,c.y,-c.x);scratch.rotation.set(0,ang,0);scratch.scale.setScalar(1);scratch.updateMatrix();coinMesh.setMatrixAt(visible++,scratch.matrix);}coinMesh.count=visible;coinMesh.instanceMatrix.needsUpdate=true;}
 for(const {p,g} of powers){g.position.set(p.lane*2.6,Math.sin(animTime*3)*.12,-p.x);g.rotation.y=animTime*.7;g.visible=!p.taken&&dist-p.x<10&&dist-p.x>-130;}
 for(const {p,g} of pickups){g.visible=!p.taken&&Math.abs(p.x-dist)<125;g.position.y=p.y+.35+Math.sin(animTime*3)*.1;}
 if(pbMarker)pbMarker.visible=dist< -pbMarker.position.z+7;
 for(const m of movers){const lf=state&&state.obs?state.obs[m.i].laneF:undefined;if(lf!==undefined)m.g.position.x=lf*2.6;}
 chaser.visible=playing&&!!state&&state.chaser>0;if(chaser.visible){const close=state.chaser<4?.55:0;chaser.position.set(x*.72+.85,Math.abs(Math.sin(animTime*9))*.22,2.45-close);chaser.rotation.y=Math.sin(animTime*9)*.06;}
 const delta=playing?Math.max(0,dist-lastDistance):menu?dt*13:0;lastDistance=dist;if(playing||menu)runPhase+=delta*1.2;
 const stride=Math.sin(runPhase),air=y>.04,targetDuck=state?.slide>0?1:0;duck+=(targetDuck-duck)*(1-Math.exp(-dt*20));
 const targetLean=state?(state.lane*2.6-x)*-.12:0;lean+=(targetLean-lean)*(1-Math.exp(-dt*14));
 const boarding=!!state&&state.vehicle==='board';
 hero.position.set(x,y+(boarding?.12:0)+(playing||menu?Math.sin(runPhase*2)*.024+.025:0),0);hero.rotation.set(-duck*.85-(state?.trickRotation||0),Math.sin(runPhase)*.025,lean);hero.scale.set(1.16,1.16*(1-duck*.38),1.16);
 rig.body.rotation.x=-.10+(air?-.06:0)+(boarding?-.13:0);rig.body.rotation.y=stride*.075;rig.head.rotation.y=-stride*.045;rig.head.rotation.x=air?-.05:Math.sin(runPhase*2)*.02;
 for(const l of limbs){if(l.kind==='leg'){const a=runPhase+(l.side>0?Math.PI:0);l.g.rotation.x=boarding?-.32*l.side:air?-.45*l.side:Math.sin(a)*.7;l.knee.rotation.x=boarding?-.55:air?-.85:-Math.max(0,-Math.sin(a))*1.15-.08;l.foot.rotation.x=boarding?.1:air?-.3:-Math.max(0,Math.sin(a))*.26;}else{l.g.rotation.x=state?.zip?3.0:air?-.65:boarding?-.35:-stride*l.side*.58;l.g.rotation.z=l.side*(boarding?-.5:-.08);l.knee.rotation.x=(state?.zip?.12:boarding?.5:.88)+Math.max(0,-stride*l.side)*(boarding?0:.3);}}
 if(tail){tail.rotation.z=Math.sin(runPhase*.55)*.19;tail.rotation.x=.65+Math.sin(runPhase)*.07;}
 bubble.visible=!!state?.shield;hero.visible=!(state?.invincible>0&&Math.floor(animTime*14)%2);
 ride.visible=!!state&&state.vehicle==='board';ride.position.set(x,y+.02,0);ride.rotation.z=lean;
 pogo.visible=!!state&&state.vehicle==='pogo';pogo.position.set(x,y-.35,0);
 zipHandle.visible=!!state?.zip;zipHandle.position.set(x,4.75,.05);
 shadow.position.x=x;shadow.position.y=(state?.ground||0)+.035;shadow.scale.setScalar(Math.max(.5,1-y*.13));shadow.material.opacity=Math.max(.2,1-y*.2);
 smoothedX+=(x*.88-smoothedX)*(1-Math.exp(-dt*18));const lift=Math.min(2,y*.6);const elevTarget=state&&playing?Math.min(1,Math.max(0,(y-.5)/2.2)):0;elev+=(elevTarget-elev)*(1-Math.exp(-dt*(elevTarget>elev?9:5)));const ee=elev*elev*(3-2*elev);camera.position.set(smoothedX,(width>height?4.0:3.4)+lift+ee*(width>height?1.1:1.9),(width>height?7.4:6.3)+ee*(width>height?.6:1.5));camera.lookAt(smoothedX*.85,.85+lift+ee*(width>height?1.3:2.5),width>height?-16-ee*6:-18-ee*10);
 renderer.render(scene,camera);stats.calls=renderer.info.render.calls;stats.triangles=renderer.info.render.triangles;stats.frames++;
 }
 resize();addEventListener('resize',resize);
 return {renderer,scene,camera,makeHero,populate,clearObjects,resize,render,sampleFrame,stats};
}

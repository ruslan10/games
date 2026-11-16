import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
// Original tailored surface modelling. Each garment is a continuous elliptical loft.
export function createCourier(parent,material){
 const hero=new T.Group();parent.add(hero);const rig={},limbs=[];
 const mats={};function mat(c){return mats[c]??=new T.MeshStandardMaterial({color:c,roughness:.88});}
 function add(g,c,p){const m=new T.Mesh(g,mat(c));m.castShadow=true;m.receiveShadow=true;p.add(m);return m;}
 function group(p,x,y,z){const o=new T.Group();o.position.set(x,y,z);p.add(o);return o;}
 function ball(p,c,x,y,z,rx,ry,rz){const m=add(new T.SphereGeometry(1,24,16),c,p);m.position.set(x,y,z);m.scale.set(rx,ry,rz);return m;}
 function box(p,c,x,y,z,w,h,d,r=.04){const m=add(new RoundedBoxGeometry(w,h,d,4,r),c,p);m.position.set(x,y,z);return m;}
 function line(p,c,pts,r=.006){const curve=new T.CatmullRomCurve3(pts.map(a=>new T.Vector3(...a)));return add(new T.TubeGeometry(curve,32,r,6,false),c,p);}
 function loft(p,c,rings,fold=.005){rings=[...rings].sort((a,b)=>a[0]-b[0]);let pos=[],uv=[],idx=[];const n=40;for(let j=0;j<rings.length;j++){const [y,rx,rz,z=0,x=0]=rings[j];for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,w=fold*(Math.sin(a*7+j*.8)+.4*Math.sin(a*13-j*.6));pos.push(x+Math.cos(a)*(rx+w),y,z+Math.sin(a)*(rz+w));uv.push(i/n,j/(rings.length-1));if(j&&i){const k=j*(n+1)+i;idx.push(k,k-n-2,k-1,k,k-n-1,k-n-2);}}}const g=new T.BufferGeometry();for(const end of [0,rings.length-1]){const [y,rx,rz,z=0,x=0]=rings[end],center=pos.length/3;pos.push(x,y,z);uv.push(.5,.5);for(let i=0;i<n;i++){const a=end*(n+1)+i,b=a+1;if(end===0)idx.push(center,a,b);else idx.push(center,b,a);}}g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return add(g,c,p);}
 // Soft, childlike hoodie with a fitted knit hem and a hood hanging down the back.
 const body=rig.body=group(hero,0,1.07,0);
 loft(body,'#009e99',[[-.39,.235,.16],[-.35,.27,.18],[-.28,.29,.19],[-.15,.295,.205],[0,.31,.21],[.13,.33,.205],[.22,.29,.17],[.27,.19,.145],[.29,.14,.125]],.008);
 loft(body,'#087b7b',[[-.39,.23,.16],[-.37,.267,.18],[-.32,.268,.18],[-.30,.255,.174]],.002);
 // The visible hood is a rolled fabric U rather than a second head.
 const hood=ball(body,'#0ab4ae',0,.225,.16,.29,.15,.22);hood.rotation.x=-.3;
 ball(body,'#047d7c',0,.285,.18,.21,.075,.15);
 for(const s of [-1,1]){
  line(body,'#106c68',[[s*.24,.21,.13],[s*.27,.09,.24],[s*.24,-.14,.255],[s*.19,-.3,.205]],.026);
  line(body,'#f4b442',[[s*.24,.21,.155],[s*.265,.08,.265],[s*.235,-.14,.28]],.012);
 }
 // Backpack with continuous fabric body, raised stitched pockets, piping, leather tabs.
 const pack=group(body,0,-.015,.32);
 box(pack,'#ec781d',0,0,0,.48,.58,.25,.08);box(pack,'#ff9b2d',0,.17,.085,.465,.23,.14,.055);
 box(pack,'#ee8c28',0,-.13,.143,.38,.215,.075,.04);
 const seam='#bc621b';
 line(pack,seam,[[-.18,-.225,.19],[-.205,-.16,.19],[-.205,-.04,.18],[-.16,-.015,.184],[.16,-.015,.184],[.205,-.05,.18],[.205,-.18,.18],[.18,-.225,.19]],.007);
 line(pack,'#ffb440',[[-.19,.25,.1],[-.22,.18,.14],[-.2,.09,.155],[0,.065,.16],[.2,.09,.155],[.22,.18,.14],[.19,.25,.1]],.009);
 box(pack,'#684c2b',0,.09,.174,.045,.115,.025,.008);box(pack,'#9d8460',0,.105,.194,.065,.065,.018,.008);box(pack,'#ef992f',0,.105,.205,.037,.035,.008,.004);
 line(pack,'#a6531a',[[-.075,.30,0],[-.075,.35,0],[.075,.35,0],[.075,.30,0]],.014);
 for(const s of [-1,1])box(pack,'#d2681b',s*.255,-.12,-.005,.055,.23,.16,.02);
 // Head and sculpted, swept hair locks.
 const head=rig.head=group(hero,0,1.69,-.015);
 ball(head,'#d99c76',0,-.035,0,.245,.285,.225);
 ball(head,'#3f2318',0,.075,.035,.26,.245,.235);
 for(const s of [-1,1]){ball(head,'#d99770',s*.244,-.075,0,.045,.077,.048);ball(head,'#b87551',s*.27,-.07,.013,.015,.038,.021);}
 function lock(x,y,z,dx,dy,dz,r){const path=new T.CatmullRomCurve3([new T.Vector3(x,y,z),new T.Vector3(x+dx*.4,y+dy*.5,z+dz*.45),new T.Vector3(x+dx,y+dy,z+dz)]);const g=new T.TubeGeometry(path,12,1,9,false),a=g.attributes.position;for(let k=0;k<=12;k++){const center=path.getPointAt(k/12),rad=r*Math.pow(1-k/12,.65)+.002;for(let j=0;j<=9;j++){const id=k*10+j;a.setXYZ(id,center.x+(a.getX(id)-center.x)*rad,center.y+(a.getY(id)-center.y)*rad,center.z+(a.getZ(id)-center.z)*rad);}}g.computeVertexNormals();add(g,['#4a291a','#57301d','#613721'][Math.abs(Math.floor(x*30))%3],head);}
 for(let j=0;j<7;j++){const a=j/7*Math.PI*2;lock(Math.cos(a)*.15,.18+Math.sin(a)*.025,Math.sin(a)*.145,.10+Math.cos(a)*.035,.075+(j%3)*.025,-.075,.105);}
 for(let j=0;j<4;j++)lock(-.16+j*.105,.07,.17,.065,.07,.045,.092);
 // Legs are tapered sewn shorts, skin, ankle socks and shaped running shoes.
 for(const side of [-1,1]){
 const leg=group(hero,side*.16,.74,0);
 loft(leg,'#303532',[[.055,.133,.16],[-.02,.145,.165],[-.12,.142,.16],[-.23,.138,.146],[-.285,.13,.14]],.003);
 loft(leg,'#3e423e',[[-.25,.141,.15],[-.28,.141,.15],[-.295,.133,.145]],.001);
 line(leg,'#202522',[[side*.135,-.04,.04],[side*.145,-.16,.04],[side*.136,-.25,.03]],.004);
 const knee=group(leg,0,-.32,0);loft(knee,'#e4aa82',[[.08,.091,.09],[.015,.096,.1],[-.09,.084,.085],[-.18,.068,.073],[-.245,.064,.068]],.001);
 loft(knee,'#fcf4df',[[-.22,.069,.073],[-.245,.077,.077],[-.29,.079,.078],[-.33,.07,.077]],.001);
 loft(knee,'#059a96',[[-.24,.077,.078],[-.25,.079,.08],[-.264,.079,.08]],0);
 const foot=group(knee,0,-.32,0);
 // Shoe outline is hand-authored, with a broad rounded toe and sculpted heel.
 const shoeShape=new T.Shape();shoeShape.moveTo(-.078,.12);shoeShape.bezierCurveTo(-.12,.1,-.125,-.09,-.124,-.21);shoeShape.bezierCurveTo(-.12,-.29,.095,-.3,.121,-.22);shoeShape.bezierCurveTo(.13,-.11,.115,.09,.075,.12);shoeShape.closePath();
 function sole(y,depth,c,bevel){const g=new T.ExtrudeGeometry(shoeShape,{depth,bevelEnabled:true,bevelThickness:bevel,bevelSize:bevel,bevelSegments:3,steps:1,curveSegments:10});g.rotateX(Math.PI/2);const m=add(g,c,foot);m.position.y=y;return m;}
 sole(-.07,.035,'#dad4c3',.012);sole(-.035,.045,'#fff5e0',.015);
 loft(foot,'#f9f0dd',[[-.02,.102,.18,-.075],[.015,.102,.18,-.075],[.06,.088,.145,-.06],[.105,.073,.095,-.008]],.001);
 ball(foot,'#079e99',0,.085,.053,.082,.06,.065);
 for(let j=0;j<4;j++)line(foot,'#fffbed',[[-.065,.078-j*.006,-.033-j*.03],[0,.088-j*.006,-.043-j*.03],[.065,.078-j*.006,-.033-j*.03]],.006);
 for(let j=0;j<7;j++)box(foot,j%2?'#a0a397':'#babbae',0,-.113,-.23+j*.047,.17,.012,.022,.003);
 for(const s of [-1,1])line(foot,'#d0c6b3',[[s*.102,-.015,.06],[s*.108,-.01,-.12],[s*.075,-.005,-.23]],.004);
 limbs.push({side,kind:'leg',g:leg,knee,foot});
 const arm=group(hero,side*.32,1.27,0);arm.rotation.z=side*-.12;
 loft(arm,'#08a7a0',[[.02,.12,.135],[-.04,.135,.14],[-.15,.128,.125],[-.25,.105,.105],[-.30,.098,.10]],.005);
 const elbow=group(arm,0,-.28,0);ball(arm,'#079e99',0,-.275,0,.102,.105,.106);
 loft(elbow,'#08a099',[[.02,.1,.105],[-.08,.108,.105],[-.19,.09,.085],[-.245,.075,.075]],.005);
 loft(elbow,'#077f7e',[[-.218,.078,.077],[-.25,.078,.077],[-.265,.07,.073]],0);
 ball(elbow,'#e2a178',0,-.30,0,.075,.092,.07);ball(elbow,'#ce8c66',side*-.06,-.29,-.028,.03,.047,.035);
 for(let j=0;j<3;j++)line(elbow,'#ba7956',[[side*.04,-.34+j*.018,.047],[side*-.01,-.347+j*.018,.06]],.002);
 limbs.push({side,kind:'arm',g:arm,knee:elbow});
 }
 return {hero,rig,limbs};
}

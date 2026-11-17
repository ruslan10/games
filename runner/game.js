(()=>{var Tu=0,Lc=1,wu=2;var ra=1,ko=2,Qs=3,Hi=0,gn=1,On=2,cs=0,Wi=1,hs=2,Dc=3,Nc=4,Au=5;var us=100,Eu=101,Cu=102,Ru=103,Iu=104,Pu=200,Lu=201,Du=202,Nu=203,Uc=204,Fc=205,Uu=206,Fu=207,Ou=208,Bu=209,zu=210,ku=211,Gu=212,Vu=213,Hu=214,so=0,ro=1,ao=2,Bs=3,oo=4,lo=5,co=6,ho=7,Oc=0,Wu=1,Xu=2,ii=0,Bc=1,zc=2,kc=3,aa=4,Gc=5,Vc=6,Hc=7;var Wc=300,ds=301,er=302,Go=303,Vo=304,xi=1e3,Kn=1001,uo=1002,jt=1003,qu=1004;var oa=1005;var mn=1006,Ho=1007;var bi=1008;var xn=1009,Xc=1010,qc=1011,tr=1012,Wo=1013,qn=1014,Bn=1015,Yn=1016,Xo=1017,qo=1018,fs=1020,Yc=35902,$c=35899,Zc=1021,Jc=1022,$n=1023,vi=1026,Ti=1027,Yo=1028,$o=1029,Xi=1030,Zo=1031;var Jo=1033,la=33776,ca=33777,ha=33778,ua=33779,Ko=35840,jo=35841,Qo=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37488,rl=37489,da=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,yl=37821,Ml=36492,Sl=36494,bl=36495,Tl=36283,wl=36284,fa=36285,Al=36286;var Ar=2300,fo=2301,to=2302,Sc=2303,bc=2400,Tc=2401,wc=2402;var Yu=3200;var El=0,$u=1,wi="",Ht="srgb",Er="srgb-linear",Cr="linear",At="srgb";var no=7680;var Zu=519,Ju=512,Ku=513,ju=514,Kc=515,Qu=516,ed=517,jc=518,Qc=519,eh=35044,th=35048;var nh="300 es",Nn=2e3,zs=2001;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Of(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){let i=ks("canvas");return i.style.display="block",i}var Hh={},Gs=null;function Rr(...i){let e="THREE."+i.shift();Gs?Gs("log",e,...i):console.log(e,...i)}function nd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=nd(i);let e="THREE."+i.shift();if(Gs)Gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=nd(i);let e="THREE."+i.shift();if(Gs)Gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function br(...i){let e=i.join(" ");e in Hh||(Hh[e]=!0,Ke(...i))}function id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sd={[so]:so,[ao]:co,[oo]:oo,[Bs]:lo,[ro]:ro,[co]:ao,[ho]:ho,[lo]:Bs},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jl=Math.PI/180,po=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function Bf(i,e){return(i%e+e)%e}function Kl(i,e,t){return(1-t)*i+t*e}function rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ad(i,e){if(e.constructor===Float32Array)return i;let t=Cl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function od(i,e){if(e.constructor===Float32Array)return i;let t=Cl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ve=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],_=r[a+2],T=r[a+3];if(u!==T||l!==d||c!==f||h!==_){let g=l*d+c*f+h*_+u*T;g<0&&(d=-d,f=-f,_=-_,T=-T,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),x=Math.sin(M);p=Math.sin(p*M)/x,o=Math.sin(o*M)/x,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+T*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+T*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new U,Wh=new Un,st=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],T=s[0],g=s[3],p=s[6],M=s[1],x=s[4],y=s[7],w=s[2],A=s[5],m=s[8];return r[0]=a*T+o*M+l*w,r[3]=a*g+o*x+l*A,r[6]=a*p+o*y+l*m,r[1]=c*T+h*M+u*w,r[4]=c*g+h*x+u*A,r[7]=c*p+h*y+u*m,r[2]=d*T+f*M+_*w,r[5]=d*g+f*x+_*A,r[8]=d*p+f*y+_*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=t*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return e[0]=u*T,e[1]=(s*c-h*n)*T,e[2]=(o*n-s*a)*T,e[3]=d*T,e[4]=(h*t-s*l)*T,e[5]=(s*r-o*t)*T,e[6]=f*T,e[7]=(n*l-c*t)*T,e[8]=(a*t-n*r)*T,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ql=new st,Xh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var _t=zf();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=ks("canvas")),xs.width=e.width,xs.height=e.height;let s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kf=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ec(s[a].image)):r.push(ec(s[a]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Gf=0,tc=new U,ln=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=mn,a=bi,o=$n,l=xn,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=qi(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Wc;ln.DEFAULT_ANISOTROPY=1;var Ft=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],T=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-T)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+T)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(f+1)/2,w=(p+1)/2,A=(h+d)/4,m=(u+T)/4,S=(_+g)/4;return x>y&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=m/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=m/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(u-T)*(u-T)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(u-T)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},go=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,_,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,T,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,T,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=T,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,T=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-T*c,t[9]=-o*l,t[2]=T-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,T=c*u;t[0]=d+T*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=T+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,T=c*u;t[0]=d-T*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=T-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,T=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+T,t[1]=l*u,t[5]=T*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,T=o*c;t[0]=l*h,t[4]=T-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-T*u}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,T=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+T,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=T*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vf,e,Hf)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ri.crossVectors(n,bn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ri.crossVectors(n,bn)),Ri.normalize(),Ra.crossVectors(bn,Ri),s[0]=Ri.x,s[4]=Ra.x,s[8]=bn.x,s[1]=Ri.y,s[5]=Ra.y,s[9]=bn.y,s[2]=Ri.z,s[6]=Ra.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],T=n[6],g=n[10],p=n[14],M=n[3],x=n[7],y=n[11],w=n[15],A=s[0],m=s[4],S=s[8],N=s[12],C=s[1],R=s[5],B=s[9],Y=s[13],D=s[2],X=s[6],Z=s[10],G=s[14],he=s[3],J=s[7],re=s[11],ae=s[15];return r[0]=a*A+o*C+l*D+c*he,r[4]=a*m+o*R+l*X+c*J,r[8]=a*S+o*B+l*Z+c*re,r[12]=a*N+o*Y+l*G+c*ae,r[1]=h*A+u*C+d*D+f*he,r[5]=h*m+u*R+d*X+f*J,r[9]=h*S+u*B+d*Z+f*re,r[13]=h*N+u*Y+d*G+f*ae,r[2]=_*A+T*C+g*D+p*he,r[6]=_*m+T*R+g*X+p*J,r[10]=_*S+T*B+g*Z+p*re,r[14]=_*N+T*Y+g*G+p*ae,r[3]=M*A+x*C+y*D+w*he,r[7]=M*m+x*R+y*X+w*J,r[11]=M*S+x*B+y*Z+w*re,r[15]=M*N+x*Y+y*G+w*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],T=e[7],g=e[11],p=e[15],M=l*f-c*d,x=o*f-c*u,y=o*d-l*u,w=a*f-c*h,A=a*d-l*h,m=a*u-o*h;return t*(T*M-g*x+p*y)-n*(_*M-g*w+p*A)+s*(_*x-T*w+p*m)-r*(_*y-T*A+g*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],T=e[13],g=e[14],p=e[15],M=t*o-n*a,x=t*l-s*a,y=t*c-r*a,w=n*l-s*o,A=n*c-r*o,m=s*c-r*l,S=h*T-u*_,N=h*g-d*_,C=h*p-f*_,R=u*g-d*T,B=u*p-f*T,Y=d*p-f*g,D=M*Y-x*B+y*R+w*C-A*N+m*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/D;return e[0]=(o*Y-l*B+c*R)*X,e[1]=(s*B-n*Y-r*R)*X,e[2]=(T*m-g*A+p*w)*X,e[3]=(d*A-u*m-f*w)*X,e[4]=(l*C-a*Y-c*N)*X,e[5]=(t*Y-s*C+r*N)*X,e[6]=(g*y-_*m-p*x)*X,e[7]=(h*m-d*y+f*x)*X,e[8]=(a*B-o*C+c*S)*X,e[9]=(n*C-t*B-r*S)*X,e[10]=(_*A-T*y+p*M)*X,e[11]=(u*y-h*A-f*M)*X,e[12]=(o*N-a*R-l*S)*X,e[13]=(t*R-n*N+s*S)*X,e[14]=(T*x-_*w-g*M)*X,e[15]=(h*w-u*x+d*M)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,T=a*h,g=a*u,p=o*u,M=l*c,x=l*h,y=l*u,w=n.x,A=n.y,m=n.z;return s[0]=(1-(T+p))*w,s[1]=(f+y)*w,s[2]=(_-x)*w,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(_+x)*m,s[9]=(g-M)*m,s[10]=(1-(d+T))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let c=1/a,h=1/o,u=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),_,T;if(l)_=r/(a-r),T=a*r/(a-r);else if(o===Nn)_=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===zs)_=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),_,T;if(l)_=1/(a-r),T=a/(a-r);else if(o===Nn)_=-2/(a-r),T=-(a+r)/(a-r);else if(o===zs)_=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new U,Gn=new bt,Vf=new U(0,0,0),Hf=new U(1,1,1),Ri=new U,Ra=new U,bn=new U,Yh=new bt,$h=new Un,Xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wf=0,Zh=new U,ys=new Un,ui=new bt,Ia=new U,fr=new U,Xf=new U,qf=new Un,Jh=new U(1,0,0),Kh=new U(0,1,0),jh=new U(0,0,1),Qh={type:"added"},Yf={type:"removed"},Ms={type:"childadded",child:null},nc={type:"childremoved",child:null},qt=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Xn,n=new Un,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new st}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(fr,Ia,this.up):ui.lookAt(Ia,fr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(ui),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yf),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let T of e.hand.values()){let g=t.getJointPose(T,n),p=this._getHandJoint(c,T);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Bf(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ic(a,r,e+1/3),this.g=ic(a,r,e),this.b=ic(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return _t.workingToColorSpace(on.copy(this),e),Math.round(mt(on.r*255,0,255))*65536+Math.round(mt(on.g*255,0,255))*256+Math.round(mt(on.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Ht){_t.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Pa);let n=Kl(Ii.h,Pa.h,t),s=Kl(Ii.s,Pa.s,t),r=Kl(Ii.l,Pa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ot;ot.NAMES=ld;var Lr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new U,di=new U,sc=new U,fi=new U,Ss=new U,bs=new U,eu=new U,rc=new U,ac=new U,oc=new U,lc=new Ft,cc=new Ft,hc=new Ft,gi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),di.subVectors(n,t),sc.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(di),l=Vn.dot(sc),c=di.dot(di),h=di.dot(sc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(hc,r.z),a}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),di.subVectors(e,t),Vn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),bs.subVectors(r,n),rc.subVectors(e,n);let l=Ss.dot(rc),c=bs.dot(rc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,s);let h=Ss.dot(ac),u=bs.dot(ac);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ss,a);oc.subVectors(e,r);let f=Ss.dot(oc),_=bs.dot(oc);if(_>=0&&f<=_)return t.copy(r);let T=f*c-l*_;if(T<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(bs,o);let g=h*_-f*u;if(g<=0&&u-h>=0&&f-_>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(eu,o);let p=1/(g+T+d);return a=T*p,o=d*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Da.subVectors(this.max,pr),Ts.subVectors(e.a,pr),ws.subVectors(e.b,pr),As.subVectors(e.c,pr),Pi.subVectors(ws,Ts),Li.subVectors(As,ws),ts.subVectors(Ts,As);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ts.z,ts.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ts.z,0,-ts.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ts.y,ts.x,0];return!uc(t,Ts,ws,As,Da)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Ts,ws,As,Da))?!1:(Na.crossVectors(Pi,Li),t=[Na.x,Na.y,Na.z],uc(t,Ts,ws,As,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new U,new U,new U,new U,new U,new U,new U,new U],Hn=new U,La=new Qn,Ts=new U,ws=new U,As=new U,Pi=new U,Li=new U,ts=new U,pr=new U,Da=new U,Na=new U,ns=new U;function uc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vt=new U,Ua=new ve,Zf=0,Xt=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?Cl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ad(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):od(e,this.array)}};var Nr=class extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jf=new Qn,mr=new U,dc=new U,Ni=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(dc)),this.expandByPoint(mr.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kf=0,Dn=new bt,fc=new qt,Es=new U,Tn=new Qn,gr=new Qn,Kt=new U,kt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Tn.min,gr.min),Tn.expandByPoint(Kt),Kt.addVectors(Tn.max,gr.max),Tn.expandByPoint(Kt)):(Tn.expandByPoint(gr.min),Tn.expandByPoint(gr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Kt.add(Es)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new U,l[N]=new U;let h=new U,u=new U,d=new U,f=new ve,_=new ve,T=new ve,g=new U,p=new U;function M(N,C,R){c[N]=c[C]=c[R]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,N),_.fromBufferAttribute(r,C),T.fromBufferAttribute(r,R),u.sub(h),d.sub(h),_.sub(f),T.sub(f);let B=1/(_.x*T.y-T.x*_.y);isFinite(B)&&(g.copy(u).multiplyScalar(T.y).addScaledVector(d,-_.y).multiplyScalar(B),p.copy(d).multiplyScalar(_.x).addScaledVector(u,-T.x).multiplyScalar(B),o[N].add(g),o[C].add(g),o[R].add(g),l[N].add(p),l[C].add(p),l[R].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,C=x.length;N<C;++N){let R=x[N],B=R.start,Y=R.count;for(let D=B,X=B+Y;D<X;D+=3)M(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new U,w=new U,A=new U,m=new U;function S(N){A.fromBufferAttribute(s,N),m.copy(A);let C=o[N];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(m,C);let B=w.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,B)}for(let N=0,C=n.count;N<C;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),T=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?f=l[T]*o.data.stride+o.offset:f=l[T]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Xt(d,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=qi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var fn=new U,Ws=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Cl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ad(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):od(e,this.data.array)}},pc=new U,jf=new U,Qf=new st,Wn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pc.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qf.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ep=0,yi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Wi,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ei=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cs,_r=new U,Rs=new U,Is=new U,Ps=new ve,xr=new ve,cd=new bt,Fa=new U,vr=new U,Oa=new U,nu=new ve,mc=new ve,iu=new ve,Mi=class extends qt{constructor(e=new ei){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new Ws(n,3,0,!1)),Cs.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ba(Fa.set(-.5,-.5,0),Is,a,Rs,s,r),Ba(vr.set(.5,-.5,0),Is,a,Rs,s,r),Ba(Oa.set(.5,.5,0),Is,a,Rs,s,r),nu.set(0,0),mc.set(1,0),iu.set(1,1);let o=e.ray.intersectTriangle(Fa,vr,Oa,!1,_r);if(o===null&&(Ba(vr.set(-.5,.5,0),Is,a,Rs,s,r),mc.set(0,1),o=e.ray.intersectTriangle(Fa,Oa,vr,!1,_r),o===null))return;let l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:gi.getInterpolation(_r,Fa,vr,Oa,nu,mc,iu,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ba(i,e,t,n,s,r){Ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xr.x=r*Ps.x-s*Ps.y,xr.y=s*Ps.x+r*Ps.y):xr.copy(Ps),i.copy(e),i.x+=xr.x,i.y+=xr.y,i.applyMatrix4(cd)}var mi=new U,gc=new U,za=new U,ka=new U,xo=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),ka.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=ka.dot(this.direction),l=-ka.dot(za),c=ka.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let T=1/h;u*=T,d*=T,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(za,d),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,_=t.x-a.x,T=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,x=n.z-a.z,y=Math.abs(l),w=Math.abs(c),A=Math.abs(h),m,S,N,C,R,B,Y,D,X,Z,G,he;if(y>=w&&y>=A?(N=l,B=u,X=_,he=p,l>=0?(m=c,S=h,C=d,R=f,Y=T,D=g,Z=M,G=x):(m=h,S=c,C=f,R=d,Y=g,D=T,Z=x,G=M)):w>=A?(N=c,B=d,X=T,he=M,c>=0?(m=h,S=l,C=f,R=u,Y=g,D=_,Z=x,G=p):(m=l,S=h,C=u,R=f,Y=_,D=g,Z=p,G=x)):(N=h,B=f,X=g,he=x,h>=0?(m=l,S=c,C=u,R=d,Y=_,D=T,Z=p,G=M):(m=c,S=l,C=d,R=u,Y=T,D=_,Z=M,G=p)),N===0)return null;let J=m/N,re=S/N,ae=1/N,Fe=C-J*B,$e=R-re*B,te=Y-J*X,Ce=D-re*X,Oe=Z-J*he,Ye=G-re*he,Re=Oe*Ce-Ye*te,Ve=Fe*Ye-$e*Oe,vt=te*$e-Ce*Fe;if(s){if(Re<0||Ve<0||vt<0)return null}else if((Re<0||Ve<0||vt<0)&&(Re>0||Ve>0||vt>0))return null;let De=Re+Ve+vt;if(De===0)return null;let et=ae*(Re*B+Ve*X+vt*he);return(De>0?et<0:et>0)?null:this.at(et/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},su=new bt,is=new xo,Ga=new Ni,ru=new U,Va=new U,Ha=new U,Wa=new U,_c=new U,Xa=new U,au=new U,qa=new U,Ct=class extends qt{constructor(e=new kt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_c.fromBufferAttribute(u,e),a?Xa.addScaledVector(_c,h):Xa.addScaledVector(_c.sub(t),h))}t.add(Xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(Ga.containsPoint(is.origin)===!1&&(is.intersectSphere(Ga,ru)===null||is.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(r).invert(),is.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,T=d.length;_<T;_++){let g=d[_],p=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,w=x;y<w;y+=3){let A=o.getX(y),m=o.getX(y+1),S=o.getX(y+2);s=Ya(this,p,e,n,c,h,u,A,m,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),T=Math.min(o.count,f.start+f.count);for(let g=_,p=T;g<p;g+=3){let M=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=Ya(this,a,e,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,T=d.length;_<T;_++){let g=d[_],p=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,w=x;y<w;y+=3){let A=y,m=y+1,S=y+2;s=Ya(this,p,e,n,c,h,u,A,m,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),T=Math.min(l.count,f.start+f.count);for(let g=_,p=T;g<p;g+=3){let M=g,x=g+1,y=g+2;s=Ya(this,a,e,n,c,h,u,M,x,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function tp(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Hi,o),l===null)return null;qa.copy(o),qa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:i}}function Ya(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Va),i.getVertexPosition(l,Ha),i.getVertexPosition(c,Wa);let h=tp(i,e,t,n,Va,Ha,Wa,au);if(h){let u=new U;gi.getBarycoord(au,Va,Ha,Wa,u),s&&(h.uv=gi.getInterpolatedAttribute(s,o,l,c,u,new ve)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,l,c,u,new ve)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};gi.getNormal(Va,Ha,Wa,d.normal),h.face=d,h.barycoord=u}return h}var Or=class extends ln{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,h=jt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new bt,ou=new bt,$a=[],lu=new Qn,np=new bt,yr=new Ct,Mr=new Ni,Br=class extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),lu.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Mr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),ou.multiplyMatrices(n,Ls),yr.matrixWorld=ou,yr.raycast(e,$a);for(let a=0,o=$a.length;a<o;a++){let l=$a[a];l.instanceId=r,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,Yo,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new Ni,ip=new ve(.5,.5),Za=new U,Ui=class{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],T=r[9],g=r[10],p=r[11],M=r[12],x=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-_,w-M).normalize(),s[1].setComponents(c+a,f+h,p+_,w+M).normalize(),s[2].setComponents(c+o,f+u,p+T,w+x).normalize(),s[3].setComponents(c-o,f-u,p-T,w-x).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,w-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,w-y).normalize(),t===Nn)s[5].setComponents(c+l,f+d,p+g,w+y).normalize();else if(t===zs)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=ip.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cu=new bt,vo=class i{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ui),n[s].setFromProjectionMatrix(cu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ui),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var zr=class extends ln{constructor(e=[],t=ds,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},En=class extends ln{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends ln{constructor(e,t,n=qn,s,r,a,o=jt,l=jt,c,h=vi,u=1){if(h!==vi&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},kr=class extends Si{constructor(e,t=qn,n=ds,s,r,a=jt,o=jt,l,c=vi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gr=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cn=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function _(T,g,p,M,x,y,w,A,m,S,N){let C=y/m,R=w/S,B=y/2,Y=w/2,D=A/2,X=m+1,Z=S+1,G=0,he=0,J=new U;for(let re=0;re<Z;re++){let ae=re*R-Y;for(let Fe=0;Fe<X;Fe++){let $e=Fe*C-B;J[T]=$e*M,J[g]=ae*x,J[p]=D,c.push(J.x,J.y,J.z),J[T]=0,J[g]=0,J[p]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push(Fe/m),u.push(1-re/S),G+=1}}for(let re=0;re<S;re++)for(let ae=0;ae<m;ae++){let Fe=d+ae+X*re,$e=d+ae+X*(re+1),te=d+(ae+1)+X*(re+1),Ce=d+(ae+1)+X*re;l.push(Fe,$e,Ce),l.push($e,te,Ce),he+=6}o.addGroup(f,he,N),f+=he,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Fi=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,T=[],g=n/2,p=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function M(){let y=new U,w=new U,A=0,m=(t-e)/n;for(let S=0;S<=r;S++){let N=[],C=S/r,R=C*(t-e)+e;for(let B=0;B<=s;B++){let Y=B/s,D=Y*l+o,X=Math.sin(D),Z=Math.cos(D);w.x=R*X,w.y=-C*n+g,w.z=R*Z,u.push(w.x,w.y,w.z),y.set(X,m,Z).normalize(),d.push(y.x,y.y,y.z),f.push(Y,1-C),N.push(_++)}T.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let C=T[N][S],R=T[N+1][S],B=T[N+1][S+1],Y=T[N][S+1];(e>0||N!==0)&&(h.push(C,R,Y),A+=3),(t>0||N!==r-1)&&(h.push(R,B,Y),A+=3)}c.addGroup(p,A,0),p+=A}function x(y){let w=_,A=new ve,m=new U,S=0,N=y===!0?e:t,C=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),_++;let R=_;for(let B=0;B<=s;B++){let D=B/s*l+o,X=Math.cos(D),Z=Math.sin(D);m.x=N*Z,m.y=g*C,m.z=N*X,u.push(m.x,m.y,m.z),d.push(0,C,0),A.x=X*.5+.5,A.y=Z*.5*C+.5,f.push(A.x,A.y),_++}for(let B=0;B<s;B++){let Y=w+B,D=R+B;y===!0?h.push(D,D+1,Y):h.push(D+1,D,Y),S+=3}c.addGroup(p,S,y===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vr=class i extends Fi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hr=class i extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new U,y=new U,w=new U;for(let A=0;A<t.length;A+=3)f(t[A+0],x),f(t[A+1],y),f(t[A+2],w),l(x,y,w,M)}function l(M,x,y,w){let A=w+1,m=[];for(let S=0;S<=A;S++){m[S]=[];let N=M.clone().lerp(y,S/A),C=x.clone().lerp(y,S/A),R=A-S;for(let B=0;B<=R;B++)B===0&&S===A?m[S][B]=N:m[S][B]=N.clone().lerp(C,B/R)}for(let S=0;S<A;S++)for(let N=0;N<2*(A-S)-1;N++){let C=Math.floor(N/2);N%2===0?(d(m[S][C+1]),d(m[S+1][C]),d(m[S][C])):(d(m[S][C+1]),d(m[S+1][C+1]),d(m[S+1][C]))}}function c(M){let x=new U;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(M),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let M=new U;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let y=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(y,1-w)}_(),u()}function u(){for(let M=0;M<a.length;M+=6){let x=a[M+0],y=a[M+2],w=a[M+4],A=Math.max(x,y,w),m=Math.min(x,y,w);A>.9&&m<.1&&(x<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){let y=M*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){let M=new U,x=new U,y=new U,w=new U,A=new ve,m=new ve,S=new ve;for(let N=0,C=0;N<r.length;N+=9,C+=6){M.set(r[N+0],r[N+1],r[N+2]),x.set(r[N+3],r[N+4],r[N+5]),y.set(r[N+6],r[N+7],r[N+8]),A.set(a[C+0],a[C+1]),m.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),w.copy(M).add(x).add(y).divideScalar(3);let R=g(w);T(A,C+0,M,R),T(m,C+2,x,R),T(S,C+4,y,R)}}function T(M,x,y,w){w<0&&M.x===1&&(a[x]=M.x-1),y.x===0&&y.z===0&&(a[x]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new bt;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(mt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(mt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},qs=class extends Rn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yo=class extends qs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var hu=new U,uu=new U,xc=new ih,vc=new ih,yc=new ih,as=class extends Rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uu.subVectors(s[0],s[1]).add(s[0]),c=uu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),T=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);T<1e-4&&(T=1),_<1e-4&&(_=T),g<1e-4&&(g=T),xc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,T,g),vc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,T,g),yc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,T,g)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),vc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(xc.calc(l),vc.calc(l),yc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function du(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function sp(i,e){let t=1-i;return t*t*e}function rp(i,e){return 2*(1-i)*i*e}function ap(i,e){return i*i*e}function Tr(i,e,t,n){return sp(i,e)+rp(i,t)+ap(i,n)}function op(i,e){let t=1-i;return t*t*t*e}function lp(i,e){let t=1-i;return 3*t*t*i*e}function cp(i,e){return 3*(1-i)*i*i*e}function hp(i,e){return i*i*i*e}function wr(i,e,t,n,s){return op(i,e)+lp(i,t)+cp(i,n)+hp(i,s)}var Wr=class extends Rn{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,s.x,r.x,a.x,o.x),wr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mo=class extends Rn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,s.x,r.x,a.x,o.x),wr(e,s.y,r.y,a.y,o.y),wr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends Rn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends Rn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Rn{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends Rn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y),Tr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(du(o,l.x,c.x,h.x,u.x),du(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},bo=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:as,CubicBezierCurve:Wr,CubicBezierCurve3:Mo,EllipseCurve:qs,LineCurve:Xr,LineCurve3:So,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Yr,SplineCurve:$r}),To=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zr=class extends To{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xr(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qr(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Wr(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $r(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new qs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends Zr{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Zr().fromJSON(s))}return this}};function up(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=hd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=gp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],_=i[d+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>u&&(u=_)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Jr(r,a,t,o,l,c,0),a}function hd(i,e,t,n,s){let r;if(s===Ep(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=fu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=fu(a/n|0,i[a],i[a+1],r);return r&&Ys(r,r.next)&&(jr(r),r=r.next),r}function os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ys(t,t.next)||zt(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Mp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?fp(i,n,s,r):dp(i)){e.push(l.i,i.i,c.i),jr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=pp(os(i),e),Jr(i,e,t,n,s,r,2)):a===2&&mp(i,e,t,n,s,r):Jr(os(i),e,t,n,s,r,1);break}}}function dp(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Sr(s,o,r,l,a,c,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function fp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(zt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),_=Math.min(h,u,d),T=Math.max(o,l,c),g=Math.max(h,u,d),p=Ac(f,_,e,t,n),M=Ac(T,g,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=M;){if(x.x>=f&&x.x<=T&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&Sr(o,h,l,u,c,d,x.x,x.y)&&zt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=T&&y.y>=_&&y.y<=g&&y!==s&&y!==a&&Sr(o,h,l,u,c,d,y.x,y.y)&&zt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=T&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&Sr(o,h,l,u,c,d,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=T&&y.y>=_&&y.y<=g&&y!==s&&y!==a&&Sr(o,h,l,u,c,d,y.x,y.y)&&zt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ys(n,s)&&dd(n,t,t.next,s)&&Kr(n,s)&&Kr(s,n)&&(e.push(n.i,t.i,s.i),jr(t),jr(t.next),t=i=s),t=t.next}while(t!==i);return os(t)}function mp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tp(a,o)){let l=fd(a,o);a=os(a,a.next),l=os(l,l.next),Jr(a,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=hd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bp(c))}s.sort(_p);for(let r=0;r<s.length;r++)t=xp(s[r],t);return t}function _p(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function xp(i,e){let t=vp(i,e);if(!t)return e;let n=fd(t,i);return os(n,n.next),os(t,t.next)}function vp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ys(i,t))return t;do{if(Ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ud(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Kr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&yp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function yp(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function Mp(i,e,t,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sp(s)}function Sp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ac(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ud(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Sr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ud(i,e,t,n,s,r,a,o)}function Tp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wp(i,e)&&(Kr(i,e)&&Kr(e,i)&&Ap(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||Ys(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ys(i,e){return i.x===e.x&&i.y===e.y}function dd(i,e,t,n){let s=Ka(zt(i,e,t)),r=Ka(zt(i,e,n)),a=Ka(zt(t,n,i)),o=Ka(zt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ja(i,t,e)||r===0&&Ja(i,n,e)||a===0&&Ja(t,i,n)||o===0&&Ja(t,e,n))}function Ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ka(i){return i>0?1:i<0?-1:0}function wp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kr(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function Ap(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fd(i,e){let t=Ec(i.i,i.x,i.y),n=Ec(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fu(i,e,t,n){let s=Ec(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ep(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Cc=class{static triangulate(e,t,n=2){return up(e,t,n)}},rs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pu(e),mu(n,e);let a=e.length;t.forEach(pu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,mu(n,t[l]);let o=Cc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function pu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ls=class i extends kt{constructor(e=new Oi([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,T=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Cp,x,y=!1,w,A,m,S;if(p){x=p.getSpacedPoints(h),y=!0,d=!1;let oe=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,oe),A=new U,m=new U,S=new U}d||(g=0,f=0,_=0,T=0);let N=o.extractPoints(c),C=N.shape,R=N.holes;if(!rs.isClockWise(C)){C=C.reverse();for(let oe=0,fe=R.length;oe<fe;oe++){let ye=R[oe];rs.isClockWise(ye)&&(R[oe]=ye.reverse())}}function Y(oe){let ye=10000000000000001e-36,Le=oe[0];for(let be=1;be<=oe.length;be++){let nt=be%oe.length,ze=oe[nt],rt=ze.x-Le.x,Ze=ze.y-Le.y,dt=rt*rt+Ze*Ze,O=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(Le.x),Math.abs(Le.y)),Nt=ye*O*O;if(dt<=Nt){oe.splice(nt,1),be--;continue}Le=ze}}Y(C),R.forEach(Y);let D=R.length,X=C;for(let oe=0;oe<D;oe++){let fe=R[oe];C=C.concat(fe)}function Z(oe,fe,ye){return fe||Qe("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(fe,ye)}let G=C.length;function he(oe,fe,ye){let Le,be,nt,ze=oe.x-fe.x,rt=oe.y-fe.y,Ze=ye.x-oe.x,dt=ye.y-oe.y,O=ze*ze+rt*rt,Nt=ze*dt-rt*Ze;if(Math.abs(Nt)>Number.EPSILON){let je=Math.sqrt(O),wt=Math.sqrt(Ze*Ze+dt*dt),Te=fe.x-rt/je,Ut=fe.y+ze/je,He=ye.x-dt/wt,Je=ye.y+Ze/wt,E=((He-Te)*dt-(Je-Ut)*Ze)/(ze*dt-rt*Ze);Le=Te+ze*E-oe.x,be=Ut+rt*E-oe.y;let b=Le*Le+be*be;if(b<=2)return new ve(Le,be);nt=Math.sqrt(b/2)}else{let je=!1;ze>Number.EPSILON?Ze>Number.EPSILON&&(je=!0):ze<-Number.EPSILON?Ze<-Number.EPSILON&&(je=!0):Math.sign(rt)===Math.sign(dt)&&(je=!0),je?(Le=-rt,be=ze,nt=Math.sqrt(O)):(Le=ze,be=rt,nt=Math.sqrt(O/2))}return new ve(Le/nt,be/nt)}let J=[];for(let oe=0,fe=X.length,ye=fe-1,Le=oe+1;oe<fe;oe++,ye++,Le++)ye===fe&&(ye=0),Le===fe&&(Le=0),J[oe]=he(X[oe],X[ye],X[Le]);let re=[],ae,Fe=J.concat();for(let oe=0,fe=D;oe<fe;oe++){let ye=R[oe];ae=[];for(let Le=0,be=ye.length,nt=be-1,ze=Le+1;Le<be;Le++,nt++,ze++)nt===be&&(nt=0),ze===be&&(ze=0),ae[Le]=he(ye[Le],ye[nt],ye[ze]);re.push(ae),Fe=Fe.concat(ae)}let $e;if(g===0)$e=rs.triangulateShape(X,R);else{let oe=[],fe=[];for(let ye=0;ye<g;ye++){let Le=ye/g,be=f*Math.cos(Le*Math.PI/2),nt=_*Math.sin(Le*Math.PI/2)+T;for(let ze=0,rt=X.length;ze<rt;ze++){let Ze=Z(X[ze],J[ze],nt);Ve(Ze.x,Ze.y,-be),Le===0&&oe.push(Ze)}for(let ze=0,rt=D;ze<rt;ze++){let Ze=R[ze];ae=re[ze];let dt=[];for(let O=0,Nt=Ze.length;O<Nt;O++){let je=Z(Ze[O],ae[O],nt);Ve(je.x,je.y,-be),Le===0&&dt.push(je)}Le===0&&fe.push(dt)}}$e=rs.triangulateShape(oe,fe)}let te=$e.length,Ce=_+T;for(let oe=0;oe<G;oe++){let fe=d?Z(C[oe],Fe[oe],Ce):C[oe];y?(m.copy(w.normals[0]).multiplyScalar(fe.x),A.copy(w.binormals[0]).multiplyScalar(fe.y),S.copy(x[0]).add(m).add(A),Ve(S.x,S.y,S.z)):Ve(fe.x,fe.y,0)}for(let oe=1;oe<=h;oe++)for(let fe=0;fe<G;fe++){let ye=d?Z(C[fe],Fe[fe],Ce):C[fe];y?(m.copy(w.normals[oe]).multiplyScalar(ye.x),A.copy(w.binormals[oe]).multiplyScalar(ye.y),S.copy(x[oe]).add(m).add(A),Ve(S.x,S.y,S.z)):Ve(ye.x,ye.y,u/h*oe)}for(let oe=g-1;oe>=0;oe--){let fe=oe/g,ye=f*Math.cos(fe*Math.PI/2),Le=_*Math.sin(fe*Math.PI/2)+T;for(let be=0,nt=X.length;be<nt;be++){let ze=Z(X[be],J[be],Le);Ve(ze.x,ze.y,u+ye)}for(let be=0,nt=R.length;be<nt;be++){let ze=R[be];ae=re[be];for(let rt=0,Ze=ze.length;rt<Ze;rt++){let dt=Z(ze[rt],ae[rt],Le);y?Ve(dt.x,dt.y+x[h-1].y,x[h-1].x+ye):Ve(dt.x,dt.y,u+ye)}}}Oe(),Ye();function Oe(){let oe=s.length/3;if(d){let fe=0,ye=G*fe;for(let Le=0;Le<te;Le++){let be=$e[Le];vt(be[2]+ye,be[1]+ye,be[0]+ye)}fe=h+g*2,ye=G*fe;for(let Le=0;Le<te;Le++){let be=$e[Le];vt(be[0]+ye,be[1]+ye,be[2]+ye)}}else{for(let fe=0;fe<te;fe++){let ye=$e[fe];vt(ye[2],ye[1],ye[0])}for(let fe=0;fe<te;fe++){let ye=$e[fe];vt(ye[0]+G*h,ye[1]+G*h,ye[2]+G*h)}}n.addGroup(oe,s.length/3-oe,0)}function Ye(){let oe=s.length/3,fe=0;Re(X,fe),fe+=X.length;for(let ye=0,Le=R.length;ye<Le;ye++){let be=R[ye];Re(be,fe),fe+=be.length}n.addGroup(oe,s.length/3-oe,1)}function Re(oe,fe){let ye=oe.length;for(;--ye>=0;){let Le=ye,be=ye-1;be<0&&(be=oe.length-1);for(let nt=0,ze=h+g*2;nt<ze;nt++){let rt=G*nt,Ze=G*(nt+1),dt=fe+Le+rt,O=fe+be+rt,Nt=fe+be+Ze,je=fe+Le+Ze;De(dt,O,Nt,je)}}}function Ve(oe,fe,ye){l.push(oe),l.push(fe),l.push(ye)}function vt(oe,fe,ye){et(oe),et(fe),et(ye);let Le=s.length/3,be=M.generateTopUV(n,s,Le-3,Le-2,Le-1);ct(be[0]),ct(be[1]),ct(be[2])}function De(oe,fe,ye,Le){et(oe),et(fe),et(Le),et(fe),et(ye),et(Le);let be=s.length/3,nt=M.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);ct(nt[0]),ct(nt[1]),ct(nt[3]),ct(nt[1]),ct(nt[2]),ct(nt[3])}function et(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function ct(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bo[s.type]().fromJSON(s)),new i(n,e.options)}},Cp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,a),new ve(o,l),new ve(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],_=e[s*3+2],T=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-u),new ve(d,1-_),new ve(T,1-p)]:[new ve(o,1-l),new ve(h,1-u),new ve(f,1-_),new ve(g,1-p)]}};function Rp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $s=class i extends Hr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Zs=class i extends Hr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Fn=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],T=[],g=[];for(let p=0;p<h;p++){let M=p*d-a;for(let x=0;x<c;x++){let y=x*u-r;_.push(y,-M,0),T.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let x=M+c*p,y=M+c*(p+1),w=M+1+c*(p+1),A=M+1+c*p;f.push(x,y,A),f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(T,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ti=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,f=[],_=[],T=[],g=[];for(let p=0;p<=n;p++){let M=[],x=p/n,y=a+x*o,w=e*Math.cos(y),A=Math.sqrt(e*e-w*w),m=0;p===0&&a===0?m=.5/t:p===n&&l===Math.PI&&(m=-.5/t);for(let S=0;S<=t;S++){let N=S/t,C=s+N*r;u.x=-A*Math.cos(C),u.y=w,u.z=A*Math.sin(C),_.push(u.x,u.y,u.z),d.copy(u).normalize(),T.push(d.x,d.y,d.z),g.push(N+m,1-x),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let x=h[p][M+1],y=h[p][M],w=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&f.push(x,y,A),(p!==n-1||l<Math.PI)&&f.push(y,w,A)}this.setIndex(f),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(T,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bi=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new U,f=new U,_=new U;for(let T=0;T<=n;T++){let g=a+T/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),_.subVectors(f,d).normalize(),h.push(_.x,_.y,_.z),u.push(p/s),u.push(T/n)}}for(let T=1;T<=n;T++)for(let g=1;g<=s;g++){let p=(s+1)*T+g-1,M=(s+1)*(T-1)+g-1,x=(s+1)*(T-1)+g,y=(s+1)*T+g;l.push(p,M,y),l.push(M,x,y)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Js=class i extends kt{constructor(e=new Yr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new ve,h=new U,u=[],d=[],f=[],_=[];T(),this.setIndex(_),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function T(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),M(),p()}function g(x){h=e.getPointAt(x/t,h);let y=a.normals[x],w=a.binormals[x];for(let A=0;A<=s;A++){let m=A/s*Math.PI*2,S=Math.sin(m),N=-Math.cos(m);l.x=N*y.x+S*w.x,l.y=N*y.y+S*w.y,l.z=N*y.z+S*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=s;y++){let w=(s+1)*(x-1)+(y-1),A=(s+1)*x+(y-1),m=(s+1)*x+y,S=(s+1)*(x-1)+y;_.push(w,A,S),_.push(A,m,S)}}function M(){for(let x=0;x<=t;x++)for(let y=0;y<=s;y++)c.x=x/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new bo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gu(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=ps(i[t]);for(let s in n)e[s]=n[s]}return e}function gu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ip(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var pd={clone:ps,merge:cn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_n=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ao=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eo=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ds(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ja(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tc:r=e,o=2*t-n;break;case wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:a=e,l=2*n-t;break;case wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),T=_*_,g=T*_,p=-d*g+2*d*T-d*_,M=(1+d)*g+(-1.5-2*d)*T+(-.5+d)*_+1,x=(-1-f)*g+(1.5+f)*T+.5*_,y=f*g-f*T;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[c+w]+x*a[l+w]+y*a[u+w];return r}},Ro=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Io=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Po=class extends zi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let _=(n-t)/(s-t),T=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*T+a[l+g]*_;return r}let d=o*2,f=e-1;for(let _=0;_!==o;++_){let T=a[c+_],g=a[l+_],p=f*d+_*2,M=u[p],x=u[p+1],y=e*d+_*2,w=h[y],A=h[y+1],m=Np(n,t,M,w,s);r[_]=md(m,T,x,A,g)}return r}};function md(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Dp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Np(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=md(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Dp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ja(e.settings)&&(n.settings={inTangents:Ds(e.settings.inTangents,Array),outTangents:Ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Po(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break;case Sc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return to;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ja(this.settings)&&(_u(this.settings.inTangents,e),_u(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ja(this.settings)&&(xu(this.settings.inTangents,e),xu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Of(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===to,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let T=t[u+_];if(T!==t[d+_]||T!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ja(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _u(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function xu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=fo;var ki=class extends In{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Ar;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Lo.prototype.ValueTypeName="color";var Do=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="number";var No=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qr=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends In{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ar;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Uo.prototype.ValueTypeName="vector";var io={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(vu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!vu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function vu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Fo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gd=new Fo,Ks=class{constructor(e){this.manager=e!==void 0?e:gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=new WeakMap,Oo=class extends Ks{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=io.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ns.get(a);u===void 0&&(u=[],Ns.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ks("img");function l(){h(),t&&t(this);let u=Ns.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ns.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),io.remove(`image:${e}`);let d=Ns.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}Ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),io.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Vi=class extends Ks{constructor(e){super(e)}load(e,t,n,s){let r=new ln,a=new Oo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ea=class extends qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ta=class extends ea{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Mc=new bt,yu=new U,Mu=new U,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qa=new U,eo=new Un,Jn=new U,na=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,eo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,eo,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qa,eo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,eo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new U,Su=new ve,bu=new ve,pn=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Su,bu),t.subVectors(bu,Su)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ia=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rc=class extends Bo{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Rc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Us=-90,Fs=1,js=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Us,Fs,e,t);s.layers=this.layers,this.add(s);let r=new pn(Us,Fs,e,t);r.layers=this.layers,this.add(r);let a=new pn(Us,Fs,e,t);a.layers=this.layers,this.add(a);let o=new pn(Us,Fs,e,t);o.layers=this.layers,this.add(o);let l=new pn(Us,Fs,e,t);l.layers=this.layers,this.add(l);let c=new pn(Us,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let T=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=T,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},zo=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var rh="\\[\\]\\.:\\/",Up=new RegExp("["+rh+"]","g"),ah="[^"+rh+"]",Fp="[^"+rh.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",ah),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),Gp=new RegExp("^"+Op+Bp+zp+kp+"$"),Vp=["material","materials","bones","map"],Ic=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(e){let t=Gp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Ic;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ev=new Float32Array(1);var Pc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function oh(i,e,t,n){let s=Hp(n);switch(t){case Zc:return i*e;case Yo:return i*e/s.components*s.byteLength;case $o:return i*e/s.components*s.byteLength;case Xi:return i*e*2/s.components*s.byteLength;case Zo:return i*e*2/s.components*s.byteLength;case Jc:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Jo:return i*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:case el:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case da:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hp(i){switch(i){case xn:case Xc:return{byteLength:1,components:1};case tr:case qc:case Yn:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case qn:case Wo:case Bn:return{byteLength:4,components:1};case Yc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],T=u[f];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++d,u[d]=T)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let T=u[f];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Jp,alphahash_pars_fragment:Kp,alphamap_fragment:jp,alphamap_pars_fragment:Qp,alphatest_fragment:em,alphatest_pars_fragment:tm,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Tm,colorspace_fragment:wm,colorspace_pars_fragment:Am,envmap_fragment:Em,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Gm,envmap_vertex:Pm,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:km,lights_toon_fragment:Vm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:$m,lights_fragment_maps:Zm,lights_fragment_end:Jm,lightprobes_pars_fragment:Km,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:bg,packing:Tg,premultiplied_alpha_fragment:wg,project_vertex:Ag,dithering_fragment:Eg,dithering_pars_fragment:Cg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Fg,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:kg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Vg,transmission_fragment:Hg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:qg,uv_vertex:Yg,worldpos_vertex:$g,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Kg,backgroundCube_frag:jg,cube_vert:Qg,cube_frag:e0,depth_vert:t0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:v0,meshphysical_frag:y0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:T0,shadow_vert:w0,shadow_frag:A0,sprite_vert:E0,sprite_frag:C0},Pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ri={basic:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:cn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:cn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:cn([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:cn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:cn([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:cn([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:cn([Pe.common,Pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:cn([Pe.lights,Pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ri.physical={uniforms:cn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Rl={r:0,b:0,g:0},R0=new bt,zd=new st;zd.set(-1,0,0,0,1,0,0,0,1);function I0(i,e,t,n,s,r){let a=new ot(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let x=M.isScene===!0?M.background:null;if(x&&x.isTexture){let y=M.backgroundBlurriness>0;x=e.get(x,y)}return x}function _(M){let x=!1,y=f(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),x=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,x){let y=f(x);y&&y.isCubeTexture?(c===void 0&&(c=new Ct(new Cn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ps(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(R0.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zd),c.material.toneMapped=_t.getTransfer(y.colorSpace)!==At,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ct(new Fn(2,2),new ni({name:"BackgroundMaterial",uniforms:ps(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_t.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,x){M.getRGB(Rl,sh(i)),t.buffers.color.setClear(Rl.r,Rl.g,Rl.b,x,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:_,addToRenderList:T,dispose:p}}function P0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(R,B,Y,D,X){let Z=!1,G=u(R,D,Y,B);r!==G&&(r=G,c(r.object)),Z=f(R,D,Y,X),Z&&_(R,D,Y,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(R,B,Y,D),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,B,Y,D){let X=D.wireframe===!0,Z=n[B.id];Z===void 0&&(Z={},n[B.id]=Z);let G=R.isInstancedMesh===!0?R.id:0,he=Z[G];he===void 0&&(he={},Z[G]=he);let J=he[Y.id];J===void 0&&(J={},he[Y.id]=J);let re=J[X];return re===void 0&&(re=d(l()),J[X]=re),re}function d(R){let B=[],Y=[],D=[];for(let X=0;X<t;X++)B[X]=0,Y[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:D,object:R,attributes:{},index:null}}function f(R,B,Y,D){let X=r.attributes,Z=B.attributes,G=0,he=Y.getAttributes();for(let J in he)if(he[J].location>=0){let ae=X[J],Fe=Z[J];if(Fe===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Fe=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Fe=R.instanceColor)),ae===void 0||ae.attribute!==Fe||Fe&&ae.data!==Fe.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function _(R,B,Y,D){let X={},Z=B.attributes,G=0,he=Y.getAttributes();for(let J in he)if(he[J].location>=0){let ae=Z[J];ae===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));let Fe={};Fe.attribute=ae,ae&&ae.data&&(Fe.data=ae.data),X[J]=Fe,G++}r.attributes=X,r.attributesNum=G,r.index=D}function T(){let R=r.newAttributes;for(let B=0,Y=R.length;B<Y;B++)R[B]=0}function g(R){p(R,0)}function p(R,B){let Y=r.newAttributes,D=r.enabledAttributes,X=r.attributeDivisors;Y[R]=1,D[R]===0&&(i.enableVertexAttribArray(R),D[R]=1),X[R]!==B&&(i.vertexAttribDivisor(R,B),X[R]=B)}function M(){let R=r.newAttributes,B=r.enabledAttributes;for(let Y=0,D=B.length;Y<D;Y++)B[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function x(R,B,Y,D,X,Z,G){G===!0?i.vertexAttribIPointer(R,B,Y,X,Z):i.vertexAttribPointer(R,B,Y,D,X,Z)}function y(R,B,Y,D){T();let X=D.attributes,Z=Y.getAttributes(),G=B.defaultAttributeValues;for(let he in Z){let J=Z[he];if(J.location>=0){let re=X[he];if(re===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){let ae=re.normalized,Fe=re.itemSize,$e=e.get(re);if($e===void 0)continue;let te=$e.buffer,Ce=$e.type,Oe=$e.bytesPerElement,Ye=Ce===i.INT||Ce===i.UNSIGNED_INT||re.gpuType===Wo;if(re.isInterleavedBufferAttribute){let Re=re.data,Ve=Re.isInterleavedBuffer===!0?Re.stride:Re.itemSize,vt=re.offset;if(Re.isInstancedInterleavedBuffer||Re.isInstancedBufferAttribute){for(let De=0;De<J.locationSize;De++)p(J.location+De,Re.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let De=0;De<J.locationSize;De++)g(J.location+De);i.bindBuffer(i.ARRAY_BUFFER,te);for(let De=0;De<J.locationSize;De++)x(J.location+De,Fe/J.locationSize,Ce,ae,Ve*Oe,(vt+Fe/J.locationSize*De)*Oe,Ye)}else{if(re.isInstancedBufferAttribute){for(let Re=0;Re<J.locationSize;Re++)p(J.location+Re,re.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<J.locationSize;Re++)g(J.location+Re);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Re=0;Re<J.locationSize;Re++)x(J.location+Re,Fe/J.locationSize,Ce,ae,Fe*Oe,Fe/J.locationSize*Re*Oe,Ye)}}else if(G!==void 0){let ae=G[he];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(J.location,ae);break;case 3:i.vertexAttrib3fv(J.location,ae);break;case 4:i.vertexAttrib4fv(J.location,ae);break;default:i.vertexAttrib1fv(J.location,ae)}}}}M()}function w(){N();for(let R in n){let B=n[R];for(let Y in B){let D=B[Y];for(let X in D){let Z=D[X];for(let G in Z)h(Z[G].object),delete Z[G];delete D[X]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;let B=n[R.id];for(let Y in B){let D=B[Y];for(let X in D){let Z=D[X];for(let G in Z)h(Z[G].object),delete Z[G];delete D[X]}}delete n[R.id]}function m(R){for(let B in n){let Y=n[B];for(let D in Y){let X=Y[D];if(X[R.id]===void 0)continue;let Z=X[R.id];for(let G in Z)h(Z[G].object),delete Z[G];delete X[R.id]}}}function S(R){for(let B in n){let Y=n[B],D=R.isInstancedMesh===!0?R.id:0,X=Y[D];if(X!==void 0){for(let Z in X){let G=X[Z];for(let he in G)h(G[he].object),delete G[he];delete X[Z]}delete Y[D],Object.keys(Y).length===0&&delete n[B]}}}function N(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:T,enableAttribute:g,disableUnusedAttributes:M}}function L0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function D0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==$n&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let S=m===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==xn&&m!==Bn&&!S&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,maxSamples:w,samples:A}}function N0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Wn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,T=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,x=M*4,y=p.clippingState||null;l.value=y,y=h(_,d,x,f);for(let w=0;w!==x;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){let T=u!==null?u.length:0,g=null;if(T!==0){if(g=l.value,_!==!0||g===null){let p=f+T*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==T;++x,y+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}var ga=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:cs});r.uniforms.tEquirect.value=t;let a=new Ct(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=mn),new js(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_d=256,U0=3,F0=20,kd=256,Gd=16,O0=3,B0=new U,z0=new ot,Pl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new Ct(new Cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=B0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,T=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,T===null&&(e.background=l.getClearColor(z0));let g=new js(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=_,e.background=T,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_d,rd(e))}_fromTexture(e,t){e.mapping===ds||e.mapping===er?this._setSize(e.image.length===0?_d:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=xd(e,!1,!1),n=Math.log2(e)-U0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ds||e.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=k0(),this._integrationMaterial=G0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-O0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(kd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=V0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function xd(i,e,t){return new ga(i,{minFilter:bi,generateMipmaps:e,type:Yn,colorSpace:Er,depthBuffer:t})}function _a(i,e,t){return new ni({name:i,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:gn,blending:cs,depthTest:!1,depthWrite:!1})}function k0(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function G0(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function V0(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${F0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vd(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yd(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function H0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Go||f===Vo)if(e.has(d)){let _=e.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let T=new ga(_.height);return T.fromEquirectangularTexture(i,d),e.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,_=f===Go||f===Vo,T=f===ds||f===er;if(_||T){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Pl(i)),g=_?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return _&&M&&M.height>0||T&&M&&l(M)?(n===null&&(n=new Pl(i)),g=_?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Go?d.mapping=ds:f===Vo&&(d.mapping=er),d}function l(d){let f=0,_=6;for(let T=0;T<_;T++)d[T]!==void 0&&f++;return f===_}function c(d){let f=d.target;f.removeEventListener("dispose",c);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function W0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&br("WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let T=r.get(_);T&&(e.remove(T),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,T){return s[T.id]!==void 0||(T.addEventListener("dispose",o),s[T.id]=new WeakRef(T),a.register(T,T.id,T),t.memory.geometries++),T}function h(_){let T=_.attributes;for(let g in T)e.update(T[g],i.ARRAY_BUFFER)}function u(_){let T=_.index,g=_.attributes.position,p=0;if(g===void 0)return;let M=T!==null?T.array.length:g.array.length/3-1,x=g.count>=65535?Ur:Nr,y=new x(Math.ceil(M/3)*6,1),w=y.array;if(T!==null){let m=T.array;p=T.version;for(let S=0,N=0;S<M;S+=3){let C=m[S+0],R=m[S+1],B=m[S+2];w[N++]=C,w[N++]=R,w[N++]=R,w[N++]=B,w[N++]=B,w[N++]=C}}else{p=g.version;for(let m=0,S=0;m<M;m+=3){let N=m+0,C=m+1,R=m+2;w[S++]=N,w[S++]=C,w[S++]=C,w[S++]=R,w[S++]=R,w[S++]=N}}y.version=p;let A=r.get(_);A&&e.remove(A),r.set(_,y)}function d(_){let T=r.get(_);if(T){let g=_.index;g!==null&&T.version<g.version&&u(_)}else u(_);return r.get(_)}function f(){for(let _ in s){let T=s[_].deref();T!==void 0&&l(T)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function q0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let T=0;for(let g=0;g<f;g++)T+=d[g];t.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Y0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,e,t){let n=new WeakMap,s=new Ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let N=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],x=0;f===!0&&(x=1),_===!0&&(x=2),T===!0&&(x=3);let y=o.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*w*4*u),m=new Ir(A,y,w,u);m.type=Bn,m.needsUpdate=!0;let S=x*4;for(let C=0;C<u;C++){let R=g[C],B=p[C],Y=M[C],D=y*w*4*C;for(let X=0;X<R.count;X++){let Z=X*S;f===!0&&(s.fromBufferAttribute(R,X),A[D+Z+0]=s.x,A[D+Z+1]=s.y,A[D+Z+2]=s.z,A[D+Z+3]=0),_===!0&&(s.fromBufferAttribute(B,X),A[D+Z+4]=s.x,A[D+Z+5]=s.y,A[D+Z+6]=s.z,A[D+Z+7]=0),T===!0&&(s.fromBufferAttribute(Y,X),A[D+Z+8]=s.x,A[D+Z+9]=s.y,A[D+Z+10]=s.z,A[D+Z+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:m,size:new ve(y,w)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let T=0;T<c.length;T++)f+=c[T];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var J0={[Bc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[kc]:"CINEON_TONE_MAPPING",[aa]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function K0(i,e,t,n,s,r){let a=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new kt;h.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xt([0,2,0,0,2,0],2));let u=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(h,u),f=new ia(-1,1,1,-1,0,1),_=null,T=null,g=!1,p,M=null,x=[],y=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let m=0;m<x.length;m++){let S=x[m];S.setSize&&S.setSize(w,A)}},this.setEffects=function(w){x=w,y=x.length>0&&x[0].isRenderPass===!0;let A=a.width,m=a.height;x.length>0&&o===null&&(o=new wn(A,m,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(A,m,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&x.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Si(A,m),r===!0&&(c.format=Ti,c.type=fs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<x.length;N++){let C=x[N];C.setSize&&C.setSize(A,m),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,A){if(g||w.toneMapping===ii&&x.length===0)return!1;if(M=A,A!==null){let m=A.width,S=A.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return y===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=ii,!0},this.hasRenderPass=function(){return y},this.end=function(w,A){w.toneMapping=p,g=!0;let m=a,S=o;for(let N=0;N<x.length;N++){let C=x[N];C.enabled!==!1&&(C.render(w,S,m,A),C.needsSwap!==!1&&(m=S,S=S===o?l:o))}if(_!==w.outputColorSpace||T!==w.toneMapping){_=w.outputColorSpace,T=w.toneMapping,u.defines={},_t.getTransfer(_)===At&&(u.defines.SRGB_TRANSFER="");let N=J0[T];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(M),w.render(d,f),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Vd=new ln,Hd=new Si(1,1),Wd=new kr(1),Xd=new Ir,qd=new _o,Yd=new zr,Md=[],Sd=[],bd=new Float32Array(16),Td=new Float32Array(9),wd=new Float32Array(4);function ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dl(i,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function n_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),$t(t,n)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Td.set(n),i.uniformMatrix3fv(this.addr,!1,Td),$t(t,n)}}function s_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),$t(t,n)}}function r_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Nl(i){return i.version===0&&(i.compareFunction=Qc,i.needsUpdate=!0),i}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Nl(Hd):r=Vd,t.setTexture2D(e||r,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qd,s)}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Nl(Wd):r=Yd,t.setTextureCube(e||r,s)}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function __(i){switch(i){case 5126:return j0;case 35664:return Q0;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(i,e){i.uniform1fv(this.addr,e)}function v_(i,e){let t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function y_(i,e){let t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function M_(i,e){let t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function S_(i,e){let t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function b_(i,e){let t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T_(i,e){let t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w_(i,e){i.uniform1iv(this.addr,e)}function A_(i,e){i.uniform2iv(this.addr,e)}function E_(i,e){i.uniform3iv(this.addr,e)}function C_(i,e){i.uniform4iv(this.addr,e)}function R_(i,e){i.uniform1uiv(this.addr,e)}function I_(i,e){i.uniform2uiv(this.addr,e)}function P_(i,e){i.uniform3uiv(this.addr,e)}function L_(i,e){i.uniform4uiv(this.addr,e)}function D_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nl(Hd):a=Vd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function N_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qd,r[a])}function U_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Nl(Wd):a=Yd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function F_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xd,r[a])}function O_(i){switch(i){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return E_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return I_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},lh=/(\w+)(\])?(\[|\.)?/g;function Ad(i,e){i.seq.push(e),i.map[e.id]=e}function B_(i,e,t){let n=i.name,s=n.length;for(lh.lastIndex=0;;){let r=lh.exec(n),a=lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ad(t,c===void 0?new hh(o,i,e):new uh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new dh(o),Ad(t,u)),t=u}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);B_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ed(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var z_=37297,k_=0;function G_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Cd=new st;function V_(i){_t._getMatrix(Cd,_t.workingColorSpace,i);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+G_(i.getShaderSource(e),o)}else return r}function H_(i,e){let t=V_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W_={[Bc]:"Linear",[zc]:"Reinhard",[kc]:"Cineon",[aa]:"ACESFilmic",[Vc]:"AgX",[Hc]:"Neutral",[Gc]:"Custom"};function X_(i,e){let t=W_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Il=new U;function q_(){_t.getLuminanceCoefficients(Il);let i=Il.x.toFixed(4),e=Il.y.toFixed(4),t=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function $_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ma(i){return i!==""}function Id(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(J_,K_)}function K_(i,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fh(t)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(j_,Q_)}function Q_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ex={[ra]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function tx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[er]:"ENVMAP_MODE_REFRACTION"};function ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sx={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[Wu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ax(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ix(t),u=rx(t),d=Y_(t),f=$_(r),_=s.createProgram(),T,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),T.length>0&&(T+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),g.length>0&&(g+=`
`)):(T=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),g=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ut.tonemapping_pars_fragment:"",t.toneMapping!==ii?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=fh(a),a=Id(a,t),a=Pd(a,t),o=fh(o),o=Id(o,t),o=Pd(o,t),a=Ld(a),o=Ld(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,T=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,g=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=p+T+a,x=p+g+o,y=Ed(s,s.VERTEX_SHADER,M),w=Ed(s,s.FRAGMENT_SHADER,x);s.attachShader(_,y),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(y)||"",Y=s.getShaderInfoLog(w)||"",D=R.trim(),X=B.trim(),Z=Y.trim(),G=!0,he=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,w);else{let J=Rd(s,y,"vertex"),re=Rd(s,w,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+J+`
`+re)}else D!==""?Ke("WebGLProgram: Program Info Log:",D):(X===""||Z==="")&&(he=!1);he&&(C.diagnostics={runnable:G,programLog:D,vertexShader:{log:X,prefix:T},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(y),s.deleteShader(w),m=new nr(s,_),S=Z_(s,_)}let m;this.getUniforms=function(){return m===void 0&&A(this),m};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,z_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}var ox=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mh(e),t.set(e,n)),n}},mh=class{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}};function lx(i){return i===Xi||i===da||i===fa}function cx(i,e,t,n,s,r){let a=new Pr,o=new ph,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}function _(m,S,N,C,R,B){let Y=C.fog,D=R.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,Z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,G=e.get(m.envMap||X,Z),he=d[m.type],J=n.precision;m.precision!==null&&(J=n.getMaxPrecision(m.precision),J!==m.precision&&Ke("WebGLProgram.getParameters:",m.precision,"not supported, using",J,"instead."));let re=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=re!==void 0?re.length:0,Fe=0;D.morphAttributes.position!==void 0&&(Fe=1),D.morphAttributes.normal!==void 0&&(Fe=2),D.morphAttributes.color!==void 0&&(Fe=3);let $e,te,Ce,Oe;if(he){let Ee=ri[he];$e=Ee.vertexShader,te=Ee.fragmentShader}else{$e=m.vertexShader,te=m.fragmentShader;let Ee=o.getVertexShaderStage(m),yt=o.getFragmentShaderStage(m);o.update(m,Ee,yt),Ce=Ee.id,Oe=yt.id}let Ye=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ve=R.isInstancedMesh===!0,vt=R.isBatchedMesh===!0,De=!!m.map,et=!!m.matcap,ct=!!G,oe=ct&&G.isPMREMTexture===!0,fe=!!m.aoMap,ye=!!m.lightMap,Le=!!m.bumpMap&&m.wireframe===!1,be=!!m.normalMap,nt=!!m.displacementMap,ze=!!m.emissiveMap,rt=!!m.metalnessMap,Ze=!!m.roughnessMap,dt=m.anisotropy>0,O=m.clearcoat>0,Nt=m.diffuseRoughness>0,je=m.dispersion>0,wt=m.retroreflectivity>0,Te=m.iridescence>0,Ut=m.sheen>0,He=m.transmission>0,Je=dt&&!!m.anisotropyMap,E=O&&!!m.clearcoatMap,b=O&&!!m.clearcoatNormalMap,H=O&&!!m.clearcoatRoughnessMap,ue=Nt&&!!m.diffuseRoughnessMap,ce=Te&&!!m.iridescenceMap,ge=Te&&!!m.iridescenceThicknessMap,we=Ut&&!!m.sheenColorMap,ne=Ut&&!!m.sheenRoughnessMap,se=!!m.specularMap,me=!!m.specularColorMap,L=!!m.specularIntensityMap,ie=He&&!!m.transmissionMap,Q=He&&!!m.thicknessMap,Me=!!m.gradientMap,pe=!!m.alphaMap,Se=m.alphaTest>0,We=!!m.alphaHash,ht=!!m.extensions,de=ii;m.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(de=i.toneMapping);let Be=oe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,tt={shaderID:he,shaderType:m.type,shaderName:m.name,vertexShader:$e,fragmentShader:te,defines:m.defines,customVertexShaderID:Ce,customFragmentShaderID:Oe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:J,batching:vt,batchingColor:vt&&R._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&R.instanceColor!==null,instancingMorph:Ve&&R.morphTexture!==null,outputColorSpace:Ye===null?i.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:De,matcap:et,envMap:ct,envMapMode:ct&&G.mapping,envMapPMREM:oe,envMapMaxLod:oe?Be.length-1:null,envMapSize:oe?Be[0].width:null,aoMap:fe,lightMap:ye,bumpMap:Le,normalMap:be,displacementMap:nt,emissiveMap:ze,normalMapObjectSpace:be&&m.normalMapType===$u,normalMapTangentSpace:be&&m.normalMapType===El,packedNormalMap:be&&m.normalMapType===El&&lx(m.normalMap.format),metalnessMap:rt,roughnessMap:Ze,anisotropy:dt,anisotropyMap:Je,clearcoat:O,clearcoatMap:E,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Nt,diffuseRoughnessMap:ue,dispersion:je,retroreflection:wt,iridescence:Te,iridescenceMap:ce,iridescenceThicknessMap:ge,sheen:Ut,sheenColorMap:we,sheenRoughnessMap:ne,specularMap:se,specularColorMap:me,specularIntensityMap:L,transmission:He,transmissionMap:ie,thicknessMap:Q,gradientMap:Me,opaque:m.transparent===!1&&m.blending===Wi&&m.alphaToCoverage===!1,alphaMap:pe,alphaTest:Se,alphaHash:We,combine:m.combine,mapUv:De&&f(m.map.channel),aoMapUv:fe&&f(m.aoMap.channel),lightMapUv:ye&&f(m.lightMap.channel),bumpMapUv:Le&&f(m.bumpMap.channel),normalMapUv:be&&f(m.normalMap.channel),displacementMapUv:nt&&f(m.displacementMap.channel),emissiveMapUv:ze&&f(m.emissiveMap.channel),metalnessMapUv:rt&&f(m.metalnessMap.channel),roughnessMapUv:Ze&&f(m.roughnessMap.channel),anisotropyMapUv:Je&&f(m.anisotropyMap.channel),clearcoatMapUv:E&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:we&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(m.sheenRoughnessMap.channel),specularMapUv:se&&f(m.specularMap.channel),specularColorMapUv:me&&f(m.specularColorMap.channel),specularIntensityMapUv:L&&f(m.specularIntensityMap.channel),transmissionMapUv:ie&&f(m.transmissionMap.channel),thicknessMapUv:Q&&f(m.thicknessMap.channel),alphaMapUv:pe&&f(m.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(be||dt),vertexNormals:!!D.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!D.attributes.uv&&(De||pe),fog:!!Y,useFog:m.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||D.attributes.normal===void 0&&be===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Fe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:De&&m.map.isVideoTexture===!0&&_t.getTransfer(m.map.colorSpace)===At,decodeVideoTextureEmissive:ze&&m.emissiveMap.isVideoTexture===!0&&_t.getTransfer(m.emissiveMap.colorSpace)===At,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===On,flipSided:m.side===gn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ht&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&m.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function T(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let N in m.defines)S.push(N),S.push(m.defines[N]);return m.isRawShaderMaterial===!1&&(g(S,m),p(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function g(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function p(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function M(m){let S=d[m.type],N;if(S){let C=ri[S];N=pd.clone(C.uniforms)}else N=m.uniforms;return N}function x(m,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new ax(i,S,m,s),c.push(N),h.set(S,N)),N}function y(m){if(--m.usedTimes===0){let S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:T,getUniforms:M,acquireProgram:x,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:A}}function hx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ux(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Nd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ud(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,T,g,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:g,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=_,M.materialVariant=a(d),M.groupOrder=T,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function l(d,f,_,T,g,p,M){M.reversedDepth===!0&&(g=-g);let x=o(d,f,_,T,g,p);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function c(d,f,_,T,g,p){let M=o(d,f,_,T,g,p);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||ux),n.length>1&&n.sort(f||Nd),s.length>1&&s.sort(f||Nd)}function u(){for(let d=e,f=i.length;d<f;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function dx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ud,i.set(n,[a])):s>=r.length?(a=new Ud,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function px(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mx=0;function gx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _x(i){let e=new fx,t=px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new bt,a=new bt;function o(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,_=0,T=0,g=0,p=0,M=0,x=0,y=0,w=0,A=0,m=0,S=0,N=0,C=0;c.sort(gx);for(let B=0,Y=c.length;B<Y;B++){let D=c[B],X=D.color,Z=D.intensity,G=D.distance,he=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Xi?he=D.shadow.map.texture:he=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=X.r*Z,u+=X.g*Z,d+=X.b*Z;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],Z);C++}else if(D.isSunLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let re=D.shadow,ae=t.get(D);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[_]=ae,n.sunShadowMap[_]=he;let Fe=re.getViewportCount();for(let $e=0;$e<Fe;$e++)n.sunShadowMatrix[T+$e]=re.getMatrix($e),n.sunShadowCascade[T+$e]=re._cascadeData[$e];T+=Fe,_++}n.sun[f]=J,f++}else if(D.isDirectionalLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let re=D.shadow,ae=t.get(D);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,n.directionalShadow[g]=ae,n.directionalShadowMap[g]=he,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=J,g++}else if(D.isSpotLight){let J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(X).multiplyScalar(Z),J.distance=G,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[M]=J;let re=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,re.updateMatrices(D),D.castShadow&&N++),n.spotLightMatrix[M]=re.matrix,D.castShadow){let ae=t.get(D);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,n.spotShadow[M]=ae,n.spotShadowMap[M]=he,m++}M++}else if(D.isRectAreaLight){let J=e.get(D);J.color.copy(X).multiplyScalar(Z),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=J,x++}else if(D.isPointLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let re=D.shadow,ae=t.get(D);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,ae.shadowCameraNear=re.camera.near,ae.shadowCameraFar=re.camera.far,n.pointShadow[p]=ae,n.pointShadowMap[p]=he,n.pointShadowMatrix[p]=D.shadow.matrix,A++}n.point[p]=J,p++}else if(D.isHemisphereLight){let J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(Z),J.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[y]=J,y++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==M||R.rectAreaLength!==x||R.hemiLength!==y||R.numSunShadows!==_||R.numDirectionalShadows!==w||R.numPointShadows!==A||R.numSpotShadows!==m||R.numSpotMaps!==S||R.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,R.sunLength=f,R.directionalLength=g,R.pointLength=p,R.spotLength=M,R.rectAreaLength=x,R.hemiLength=y,R.numSunShadows=_,R.numDirectionalShadows=w,R.numPointShadows=A,R.numSpotShadows=m,R.numSpotMaps=S,R.numLightProbes=C,n.version=mx++)}function l(c,h){let u=0,d=0,f=0,_=0,T=0,g=0,p=h.matrixWorldInverse;for(let M=0,x=c.length;M<x;M++){let y=c[M];if(y.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(y.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(y.isRectAreaLight){let w=n.rectArea[T];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),T++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Fd(i){let e=new _x(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Fd(i),e.set(s,[o])):r>=a.length?(o=new Fd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Sx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Od=new bt,pa=new U,ch=new U;function bx(i,e,t){let n=new Ui,s=new ve,r=new ve,a=new Ft,o=new Ao,l=new Eo,c={},h=t.maxTextureSize,u={[Hi]:gn,[gn]:Hi,[On]:On},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:vx,fragmentShader:yx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new kt;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Ct(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let p=this.type;this.render=function(A,m,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===ko&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ra);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(cs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=p!==this.type;Y&&m.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=A.length;D<X;D++){let Z=A[D],G=Z.shadow;if(G===void 0){Ke("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let he=G.getFrameExtents();s.multiply(he),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,G.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=J,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Qs){if(Z.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(s.x,s.y,{format:Xi,type:Yn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new Si(s.x,s.y,Bn),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=vi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else Z.isPointLight?(G.map=new ga(s.x),G.map.depthTexture=new kr(s.x,qn)):(G.map=new wn(s.x,s.y),G.map.depthTexture=new Si(s.x,s.y,qn)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=vi,this.type===ra?(G.map.depthTexture.compareFunction=J?jc:Kc,G.map.depthTexture.minFilter=mn,G.map.depthTexture.magFilter=mn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let re=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,S);let ae=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Fe=0;Fe<re;Fe++){let $e=G.getCamera(Fe);if(Z.isPointLight){let te=G.camera,Ce=G.matrix,Oe=Z.distance||te.far;Oe!==te.far&&(te.far=Oe,te.updateProjectionMatrix()),pa.setFromMatrixPosition(Z.matrixWorld),te.position.copy(pa),ch.copy(te.position),ch.add(Mx[Fe]),te.up.copy(Sx[Fe]),te.lookAt(ch),te.updateMatrixWorld(),Ce.makeTranslation(-pa.x,-pa.y,-pa.z),Od.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Od,te.coordinateSystem,te.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Fe),i.clear();else{Fe===0&&(i.setRenderTarget(G.map),i.clear());let te=G.getViewport(Fe);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),B.viewport(a)}n=G.getFrustum(Fe),y(m,S,$e,Z,ae,this.type)}G.isPointLightShadow!==!0&&this.type===Qs&&M(G,S),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(N,C,R)};function M(A,m){let S=e.update(T);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new wn(s.x,s.y,{format:Xi,type:Yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(m,null,S,d,T,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(m,null,S,f,T,null)}function x(A,m,S,N){let C=null,R=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)C=R;else if(C=S.isPointLight===!0?l:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let B=C.uuid,Y=m.uuid,D=c[B];D===void 0&&(D={},c[B]=D);let X=D[Y];X===void 0&&(X=C.clone(),D[Y]=X,m.addEventListener("dispose",w)),C=X}if(C.visible=m.visible,C.wireframe=m.wireframe,N===Qs?C.side=m.shadowSide!==null?m.shadowSide:m.side:C.side=m.shadowSide!==null?m.shadowSide:u[m.side],C.alphaMap=m.alphaMap,C.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,C.map=m.map,C.clipShadows=m.clipShadows,C.clippingPlanes=m.clippingPlanes,C.clipIntersection=m.clipIntersection,C.displacementMap=m.displacementMap,C.displacementScale=m.displacementScale,C.displacementBias=m.displacementBias,C.wireframeLinewidth=m.wireframeLinewidth,C.linewidth=m.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=S}return C}function y(A,m,S,N,C,R){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===Qs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let D=e.update(A),X=A.material;if(Array.isArray(X)){let Z=D.groups;for(let G=0,he=Z.length;G<he;G++){let J=Z[G],re=X[J.materialIndex];if(re&&re.visible){let ae=x(A,re,N,R);A.onBeforeShadow(i,A,m,S,D,ae,J),i.renderBufferDirect(S,null,D,ae,A,J),A.onAfterShadow(i,A,m,S,D,ae,J)}}}else if(X.visible){let Z=x(A,X,N,R);A.onBeforeShadow(i,A,m,S,D,Z,null),i.renderBufferDirect(S,null,D,Z,A,null),A.onAfterShadow(i,A,m,S,D,Z,null)}}let Y=A.children;for(let D=0,X=Y.length;D<X;D++)y(Y[D],m,S,N,C,R)}function w(A){A.target.removeEventListener("dispose",w);for(let S in c){let N=c[S],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function Tx(i,e){function t(){let L=!1,ie=new Ft,Q=null,Me=new Ft(0,0,0,0);return{setMask:function(pe){Q!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){L=pe},setClear:function(pe,Se,We,ht,de){de===!0&&(pe*=ht,Se*=ht,We*=ht),ie.set(pe,Se,We,ht),Me.equals(ie)===!1&&(i.clearColor(pe,Se,We,ht),Me.copy(ie))},reset:function(){L=!1,Q=null,Me.set(-1,0,0,0)}}}function n(){let L=!1,ie=!1,Q=null,Me=null,pe=null;return{setReversed:function(Se){if(ie!==Se){let We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ie=Se;let ht=pe;pe=null,this.setClear(ht)}},getReversed:function(){return ie},setTest:function(Se){Se?Re(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Se){Q!==Se&&!L&&(i.depthMask(Se),Q=Se)},setFunc:function(Se){if(ie&&(Se=sd[Se]),Me!==Se){switch(Se){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Se}},setLocked:function(Se){L=Se},setClear:function(Se){pe!==Se&&(pe=Se,ie&&(Se=1-Se),i.clearDepth(Se))},reset:function(){L=!1,Q=null,Me=null,pe=null,ie=!1}}}function s(){let L=!1,ie=null,Q=null,Me=null,pe=null,Se=null,We=null,ht=null,de=null;return{setTest:function(Be){L||(Be?Re(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(Be){ie!==Be&&!L&&(i.stencilMask(Be),ie=Be)},setFunc:function(Be,tt,Ee){(Q!==Be||Me!==tt||pe!==Ee)&&(i.stencilFunc(Be,tt,Ee),Q=Be,Me=tt,pe=Ee)},setOp:function(Be,tt,Ee){(Se!==Be||We!==tt||ht!==Ee)&&(i.stencilOp(Be,tt,Ee),Se=Be,We=tt,ht=Ee)},setLocked:function(Be){L=Be},setClear:function(Be){de!==Be&&(i.clearStencil(Be),de=Be)},reset:function(){L=!1,ie=null,Q=null,Me=null,pe=null,Se=null,We=null,ht=null,de=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,_=[],T=null,g=!1,p=null,M=null,x=null,y=null,w=null,A=null,m=null,S=new ot(0,0,0),N=0,C=!1,R=null,B=null,Y=null,D=null,X=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,he=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=he>=1):J.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=he>=2);let re=null,ae={},Fe=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),te=new Ft().fromArray(Fe),Ce=new Ft().fromArray($e);function Oe(L,ie,Q,Me){let pe=new Uint8Array(4),Se=i.createTexture();i.bindTexture(L,Se),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<Q;We++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ie+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Se}let Ye={};Ye[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ye[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ye[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ye[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Re(i.DEPTH_TEST),a.setFunc(Bs),Le(!1),be(Lc),Re(i.CULL_FACE),fe(cs);function Re(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ve(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function vt(L,ie){return d[L]!==ie?(i.bindFramebuffer(L,ie),d[L]=ie,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(L,ie){let Q=_,Me=!1;if(L){Q=f.get(ie),Q===void 0&&(Q=[],f.set(ie,Q));let pe=L.textures;if(Q.length!==pe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,We=pe.length;Se<We;Se++)Q[Se]=i.COLOR_ATTACHMENT0+Se;Q.length=pe.length,Me=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Me=!0);Me&&i.drawBuffers(Q)}function et(L){return T!==L?(i.useProgram(L),T=L,!0):!1}let ct={[us]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};ct[Ru]=i.MIN,ct[Iu]=i.MAX;let oe={[Pu]:i.ZERO,[Lu]:i.ONE,[Du]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(L,ie,Q,Me,pe,Se,We,ht,de,Be){if(L===cs){g===!0&&(Ve(i.BLEND),g=!1);return}if(g===!1&&(Re(i.BLEND),g=!0),L!==Au){if(L!==p||Be!==C){if((M!==us||w!==us)&&(i.blendEquation(i.FUNC_ADD),M=us,w=us),Be)switch(L){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",L);break}else switch(L){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",L);break}x=null,y=null,A=null,m=null,S.set(0,0,0),N=0,p=L,C=Be}return}pe=pe||ie,Se=Se||Q,We=We||Me,(ie!==M||pe!==w)&&(i.blendEquationSeparate(ct[ie],ct[pe]),M=ie,w=pe),(Q!==x||Me!==y||Se!==A||We!==m)&&(i.blendFuncSeparate(oe[Q],oe[Me],oe[Se],oe[We]),x=Q,y=Me,A=Se,m=We),(ht.equals(S)===!1||de!==N)&&(i.blendColor(ht.r,ht.g,ht.b,de),S.copy(ht),N=de),p=L,C=!1}function ye(L,ie){L.side===On?Ve(i.CULL_FACE):Re(i.CULL_FACE);let Q=L.side===gn;ie&&(Q=!Q),Le(Q),L.blending===Wi&&L.transparent===!1?fe(cs):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Me=L.stencilWrite;o.setTest(Me),Me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){R!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),R=L)}function be(L){L!==Tu?(Re(i.CULL_FACE),L!==B&&(L===Lc?i.cullFace(i.BACK):L===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),B=L}function nt(L){L!==Y&&(G&&i.lineWidth(L),Y=L)}function ze(L,ie,Q){L?(Re(i.POLYGON_OFFSET_FILL),(D!==ie||X!==Q)&&(D=ie,X=Q,a.getReversed()&&(ie=-ie,Q=-Q),i.polygonOffset(ie,Q))):Ve(i.POLYGON_OFFSET_FILL)}function rt(L){L?Re(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=i.TEXTURE0+Z-1),re!==L&&(i.activeTexture(L),re=L)}function dt(L,ie,Q){Q===void 0&&(re===null?Q=i.TEXTURE0+Z-1:Q=re);let Me=ae[Q];Me===void 0&&(Me={type:void 0,texture:void 0},ae[Q]=Me),(Me.type!==L||Me.texture!==ie)&&(re!==Q&&(i.activeTexture(Q),re=Q),i.bindTexture(L,ie||Ye[L]),Me.type=L,Me.texture=ie)}function O(){let L=ae[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Nt(){try{i.compressedTexImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function je(){try{i.compressedTexImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function wt(){try{i.texSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Te(){try{i.texSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Ut(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function Je(){try{i.texStorage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function E(){try{i.texStorage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function b(){try{i.texImage2D(...arguments)}catch(L){Qe("WebGLState:",L)}}function H(){try{i.texImage3D(...arguments)}catch(L){Qe("WebGLState:",L)}}function ue(L){return u[L]!==void 0?u[L]:i.getParameter(L)}function ce(L,ie){u[L]!==ie&&(i.pixelStorei(L,ie),u[L]=ie)}function ge(L){te.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function we(L){Ce.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ce.copy(L))}function ne(L,ie){let Q=c.get(ie);Q===void 0&&(Q=new WeakMap,c.set(ie,Q));let Me=Q.get(L);Me===void 0&&(Me=i.getUniformBlockIndex(ie,L.name),i.uniformBlockBinding(ie,Me,Me),Q.set(L,Me))}function se(L,ie,Q){let pe=c.get(ie).get(L);l[pe]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,Q),l[pe]=Q)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},re=null,ae={},d={},l={},f=new WeakMap,_=[],T=null,g=!1,p=null,M=null,x=null,y=null,w=null,A=null,m=null,S=new ot(0,0,0),N=0,C=!1,R=null,B=null,Y=null,D=null,X=null,te.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Re,disable:Ve,bindFramebuffer:vt,drawBuffers:De,useProgram:et,setBlending:fe,setMaterial:ye,setFlipSided:Le,setCullFace:be,setLineWidth:nt,setPolygonOffset:ze,setScissorTest:rt,activeTexture:Ze,bindTexture:dt,unbindTexture:O,compressedTexImage2D:Nt,compressedTexImage3D:je,texImage2D:b,texImage3D:H,pixelStorei:ce,getParameter:ue,updateUBOMapping:ne,uniformBlockBinding:se,texStorage2D:Je,texStorage3D:E,texSubImage2D:wt,texSubImage3D:Te,compressedTexSubImage2D:Ut,compressedTexSubImage3D:He,scissor:ge,viewport:we,reset:me}}function wx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u=new Set,d,f=new WeakMap,_=new Set,T=new FinalizationRegistry(E=>_.delete(E)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,b){return g?new OffscreenCanvas(E,b):ks("canvas")}function M(E,b,H){let ue=1,ce=Je(E);if((ce.width>H||ce.height>H)&&(ue=H/Math.max(ce.width,ce.height)),ue<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ge=Math.floor(ue*ce.width),we=Math.floor(ue*ce.height);d===void 0&&(d=p(ge,we));let ne=b?p(ge,we):d;return ne.width=ge,ne.height=we,ne.getContext("2d").drawImage(E,0,0,ge,we),Ke("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ge+"x"+we+")."),ne}else return"data"in E&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),E;return E}function x(E){return E.generateMipmaps}function y(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,b,H,ue,ce,ge=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let we;ue&&(we=e.get("EXT_texture_norm16"),we||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===i.RED&&(H===i.FLOAT&&(ne=i.R32F),H===i.HALF_FLOAT&&(ne=i.R16F),H===i.UNSIGNED_BYTE&&(ne=i.R8),H===i.UNSIGNED_SHORT&&we&&(ne=we.R16_EXT),H===i.SHORT&&we&&(ne=we.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.R8UI),H===i.UNSIGNED_SHORT&&(ne=i.R16UI),H===i.UNSIGNED_INT&&(ne=i.R32UI),H===i.BYTE&&(ne=i.R8I),H===i.SHORT&&(ne=i.R16I),H===i.INT&&(ne=i.R32I)),b===i.RG&&(H===i.FLOAT&&(ne=i.RG32F),H===i.HALF_FLOAT&&(ne=i.RG16F),H===i.UNSIGNED_BYTE&&(ne=i.RG8),H===i.UNSIGNED_SHORT&&we&&(ne=we.RG16_EXT),H===i.SHORT&&we&&(ne=we.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RG8UI),H===i.UNSIGNED_SHORT&&(ne=i.RG16UI),H===i.UNSIGNED_INT&&(ne=i.RG32UI),H===i.BYTE&&(ne=i.RG8I),H===i.SHORT&&(ne=i.RG16I),H===i.INT&&(ne=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),H===i.UNSIGNED_INT&&(ne=i.RGB32UI),H===i.BYTE&&(ne=i.RGB8I),H===i.SHORT&&(ne=i.RGB16I),H===i.INT&&(ne=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),H===i.UNSIGNED_INT&&(ne=i.RGBA32UI),H===i.BYTE&&(ne=i.RGBA8I),H===i.SHORT&&(ne=i.RGBA16I),H===i.INT&&(ne=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&we&&(ne=we.RGB16_EXT),H===i.SHORT&&we&&(ne=we.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),b===i.RGBA){let se=ge?Cr:_t.getTransfer(ce);H===i.FLOAT&&(ne=i.RGBA32F),H===i.HALF_FLOAT&&(ne=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ne=se===At?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&we&&(ne=we.RGBA16_EXT),H===i.SHORT&&we&&(ne=we.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function m(E,b){let H;return E?b===null||b===qn||b===fs?H=i.DEPTH24_STENCIL8:b===Bn?H=i.DEPTH32F_STENCIL8:b===tr&&(H=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qn||b===fs?H=i.DEPTH_COMPONENT24:b===Bn?H=i.DEPTH_COMPONENT32F:b===tr&&(H=i.DEPTH_COMPONENT16),H}function S(E,b){return x(E)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function N(E){let b=new WeakRef(E);n.get(E).__ref=b,_.add(b),T.register(E,b,b)}function C(E){let b=n.get(E).__ref;b!==void 0&&(_.delete(b),T.unregister(b))}function R(E){Y(E.target)}function B(E){D(E.target)}function Y(E){E.removeEventListener("dispose",R),C(E),Z(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function D(E){E.removeEventListener("dispose",B),C(E),he(E)}function X(){for(let E of _){let b=E.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):Y(b))}_.clear(),u.clear()}function Z(E){let b=n.get(E);if(b.__webglInit===void 0)return;let H=E.source,ue=f.get(H);if(ue){let ce=ue[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&G(E),Object.keys(ue).length===0&&f.delete(H)}n.remove(E)}function G(E){let b=n.get(E);i.deleteTexture(b.__webglTexture);let H=E.source,ue=f.get(H);delete ue[b.__cacheKey],a.memory.textures--}function he(E){let b=n.get(E);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=E.depthTexture;if(H&&H.renderTarget===E&&Y(H),E.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let ge=0;ge<b.__webglFramebuffer[ce].length;ge++)i.deleteFramebuffer(b.__webglFramebuffer[ce][ge]);else i.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)i.deleteFramebuffer(b.__webglFramebuffer[ce]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ue=E.textures;for(let ce=0,ge=ue.length;ce<ge;ce++){let we=n.get(ue[ce]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(ue[ce])}n.remove(E)}let J=0;function re(){J=0}function ae(){return J}function Fe(E){J=E}function $e(){let E=J;return E>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,E}function te(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.mipmapsAutoUpdate),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function Ce(E,b){let H=n.get(E);if(E.isVideoTexture&&Ut(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&H.__version!==E.version){let ue=E.image;if(ue===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,E,b);return}}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function Oe(E,b){let H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){ye(H,E,b);return}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function Ye(E,b){let H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){ye(H,E,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function Re(E,b){let H=n.get(E);if(E.version>0&&H.__version!==E.version){Le(H,E,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let Ve={[xi]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},vt={[jt]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},De={[Ju]:i.NEVER,[Qc]:i.ALWAYS,[Ku]:i.LESS,[Kc]:i.LEQUAL,[ju]:i.EQUAL,[jc]:i.GEQUAL,[Qu]:i.GREATER,[ed]:i.NOTEQUAL};function et(E,b){if(b.type===Bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===Ho||b.magFilter===oa||b.magFilter===bi||b.minFilter===mn||b.minFilter===Ho||b.minFilter===oa||b.minFilter===bi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ve[b.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ve[b.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ve[b.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,vt[b.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,De[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==oa&&b.minFilter!==bi||b.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ct(E,b){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R),N(b));let ue=b.source,ce=f.get(ue);ce===void 0&&(ce={},f.set(ue,ce));let ge=te(b);if(ge!==E.__cacheKey){ce[ge]===void 0&&(ce[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ce[ge].usedTimes++;let we=ce[E.__cacheKey];we!==void 0&&(ce[E.__cacheKey].usedTimes--,we.usedTimes===0&&G(b)),E.__cacheKey=ge,E.__webglTexture=ce[ge].texture}return H}function oe(E,b,H){return Math.floor(Math.floor(E/H)/b)}function fe(E,b,H,ue){let ge=E.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,ue,b.data);else{ge.sort((L,ie)=>L.start-ie.start);let we=0;for(let L=1;L<ge.length;L++){let ie=ge[we],Q=ge[L],Me=ie.start+ie.count,pe=oe(Q.start,b.width,4),Se=oe(ie.start,b.width,4);Q.start<=Me+1&&pe===Se&&oe(Q.start+Q.count-1,b.width,4)===pe?ie.count=Math.max(ie.count,Q.start+Q.count-ie.start):(++we,ge[we]=Q)}ge.length=we+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,ie=ge.length;L<ie;L++){let Q=ge[L],Me=Math.floor(Q.start/4),pe=Math.ceil(Q.count/4),Se=Me%b.width,We=Math.floor(Me/b.width),ht=pe,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Se,We,ht,de,H,ue,b.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ye(E,b,H){let ue=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=i.TEXTURE_3D);let ce=ct(E,b),ge=b.source;t.bindTexture(ue,E.__webglTexture,i.TEXTURE0+H);let we=n.get(ge);if(ge.version!==we.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let de=_t.getPrimaries(_t.workingColorSpace),Be=b.colorSpace===wi?null:_t.getPrimaries(b.colorSpace),tt=b.colorSpace===wi||de===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let se=M(b.image,!1,s.maxTextureSize);se=He(b,se);let me=r.convert(b.format,b.colorSpace),L=r.convert(b.type),ie=A(b.internalFormat,me,L,b.normalized,b.colorSpace,b.isVideoTexture);et(ue,b);let Q,Me=b.mipmaps,pe=b.isVideoTexture!==!0,Se=we.__version===void 0||ce===!0,We=ge.dataReady,ht=S(b,se);if(b.isDepthTexture)ie=m(b.format===Ti,b.type),Se&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ie,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ie,se.width,se.height,0,me,L,null));else if(b.isDataTexture)if(Me.length>0){pe&&Se&&t.texStorage2D(i.TEXTURE_2D,ht,ie,Me[0].width,Me[0].height);for(let de=0,Be=Me.length;de<Be;de++)Q=Me[de],pe?We&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Q.width,Q.height,me,L,Q.data):t.texImage2D(i.TEXTURE_2D,de,ie,Q.width,Q.height,0,me,L,Q.data);b.generateMipmaps=!1}else pe?(Se&&t.texStorage2D(i.TEXTURE_2D,ht,ie,se.width,se.height),We&&fe(b,se,me,L)):t.texImage2D(i.TEXTURE_2D,0,ie,se.width,se.height,0,me,L,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pe&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ie,Me[0].width,Me[0].height,se.depth);for(let de=0,Be=Me.length;de<Be;de++)if(Q=Me[de],b.format!==$n)if(me!==null)if(pe){if(We)if(b.layerUpdates.size>0){let tt=oh(Q.width,Q.height,b.format,b.type);for(let Ee of b.layerUpdates){let yt=Q.data.subarray(Ee*tt/Q.data.BYTES_PER_ELEMENT,(Ee+1)*tt/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Ee,Q.width,Q.height,1,me,yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Q.width,Q.height,se.depth,me,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,ie,Q.width,Q.height,se.depth,0,Q.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Q.width,Q.height,se.depth,me,L,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,ie,Q.width,Q.height,se.depth,0,me,L,Q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{pe&&Se&&t.texStorage2D(i.TEXTURE_2D,ht,ie,Me[0].width,Me[0].height);for(let de=0,Be=Me.length;de<Be;de++)Q=Me[de],b.format!==$n?me!==null?pe?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Q.width,Q.height,me,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,de,ie,Q.width,Q.height,0,Q.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?We&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Q.width,Q.height,me,L,Q.data):t.texImage2D(i.TEXTURE_2D,de,ie,Q.width,Q.height,0,me,L,Q.data)}else if(b.isDataArrayTexture)if(pe){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ie,se.width,se.height,se.depth),We)if(b.layerUpdates.size>0){let de=oh(se.width,se.height,b.format,b.type);for(let Be of b.layerUpdates){let tt=se.data.subarray(Be*de/se.data.BYTES_PER_ELEMENT,(Be+1)*de/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,se.width,se.height,1,me,L,tt)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,L,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,se.width,se.height,se.depth,0,me,L,se.data);else if(b.isData3DTexture)pe?(Se&&t.texStorage3D(i.TEXTURE_3D,ht,ie,se.width,se.height,se.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,L,se.data)):t.texImage3D(i.TEXTURE_3D,0,ie,se.width,se.height,se.depth,0,me,L,se.data);else if(b.isFramebufferTexture){if(Se)if(pe)t.texStorage2D(i.TEXTURE_2D,ht,ie,se.width,se.height);else{let de=se.width,Be=se.height;for(let tt=0;tt<ht;tt++)t.texImage2D(i.TEXTURE_2D,tt,ie,de,Be,0,me,L,null),de>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),se.parentNode!==de){de.appendChild(se),u.add(b),de.onpaint=Be=>{let tt=Be.changedElements;for(let Ee of u)tt.includes(Ee.image)&&(Ee.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let tt=i.RGBA,Ee=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Ee,yt,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(pe&&Se){let de=Je(Me[0]);t.texStorage2D(i.TEXTURE_2D,ht,ie,de.width,de.height)}for(let de=0,Be=Me.length;de<Be;de++)Q=Me[de],pe?We&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,me,L,Q):t.texImage2D(i.TEXTURE_2D,de,ie,me,L,Q);b.generateMipmaps=!1}else if(pe){if(Se){let de=Je(se);t.texStorage2D(i.TEXTURE_2D,ht,ie,de.width,de.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,L,se)}else t.texImage2D(i.TEXTURE_2D,0,ie,me,L,se);x(b)&&b.mipmapsAutoUpdate===!0&&y(ue),we.__version=ge.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Le(E,b,H){if(b.image.length!==6)return;let ue=ct(E,b),ce=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);let ge=n.get(ce);if(ce.version!==ge.__version||ue===!0){t.activeTexture(i.TEXTURE0+H);let we=_t.getPrimaries(_t.workingColorSpace),ne=b.colorSpace===wi?null:_t.getPrimaries(b.colorSpace),se=b.colorSpace===wi||we===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let me=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let Ee=0;Ee<6;Ee++)!me&&!L?ie[Ee]=M(b.image[Ee],!0,s.maxCubemapSize):ie[Ee]=L?b.image[Ee].image:b.image[Ee],ie[Ee]=He(b,ie[Ee]);let Q=ie[0],Me=r.convert(b.format,b.colorSpace),pe=r.convert(b.type),Se=A(b.internalFormat,Me,pe,b.normalized,b.colorSpace),We=b.isVideoTexture!==!0,ht=ge.__version===void 0||ue===!0,de=ce.dataReady,Be=S(b,Q);et(i.TEXTURE_CUBE_MAP,b);let tt;if(b.isDepthTexture){if(Se=m(b.format===Ti,b.type),ht)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,Q.width,Q.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,Q.width,Q.height,0,Me,pe,null)}else if(me){We&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Se,Q.width,Q.height);for(let Ee=0;Ee<6;Ee++){tt=ie[Ee].mipmaps;for(let yt=0;yt<tt.length;yt++){let Ot=tt[yt];b.format!==$n?Me!==null?We?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt,0,0,Ot.width,Ot.height,Me,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt,Se,Ot.width,Ot.height,0,Ot.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt,0,0,Ot.width,Ot.height,Me,pe,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt,Se,Ot.width,Ot.height,0,Me,pe,Ot.data)}}}else{if(tt=b.mipmaps,We&&ht){tt.length>0&&Be++;let Ee=Je(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Se,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(L){We?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ie[Ee].width,ie[Ee].height,Me,pe,ie[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,ie[Ee].width,ie[Ee].height,0,Me,pe,ie[Ee].data);for(let yt=0;yt<tt.length;yt++){let tn=tt[yt].image[Ee].image;We?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt+1,0,0,tn.width,tn.height,Me,pe,tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt+1,Se,tn.width,tn.height,0,Me,pe,tn.data)}}else{We?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Me,pe,ie[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,Me,pe,ie[Ee]);for(let yt=0;yt<tt.length;yt++){let Ot=tt[yt];We?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt+1,0,0,Me,pe,Ot.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,yt+1,Se,Me,pe,Ot.image[Ee])}}}x(b)&&b.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ge.__version=ce.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function be(E,b,H,ue,ce,ge){let we=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),se=A(H.internalFormat,we,ne,H.normalized,H.colorSpace),me=n.get(b),L=n.get(H);if(L.__renderTarget=b,!me.__hasExternalTextures){let ie=Math.max(1,b.width>>ge),Q=Math.max(1,b.height>>ge);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ge,se,ie,Q,b.depth,0,we,ne,null):t.texImage2D(ce,ge,se,ie,Q,0,we,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Te(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ce,L.__webglTexture,0,wt(b)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ce,L.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(E,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),b.depthBuffer){let ue=b.depthTexture,ce=ue&&ue.isDepthTexture?ue.type:null,ge=m(b.stencilBuffer,ce),we=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(b),ge,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(b),ge,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ge,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,E)}else{let ue=b.textures;for(let ce=0;ce<ue.length;ce++){let ge=ue[ce],we=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),se=A(ge.internalFormat,we,ne,ge.normalized,ge.colorSpace);Te(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(b),se,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(b),se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(E,b,H){let ue=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(b.depthTexture);ce.__renderTarget=b;let ge=ue?b.depthTexture.image[0]:b.depthTexture.image;(!ce.__webglTexture||ge.width!==b.width||ge.height!==b.height)&&(ge.width=b.width,ge.height=b.height,b.depthTexture.needsUpdate=!0),ue?Re(b.depthTexture,0):Ce(b.depthTexture,0);let we=ce.__webglTexture,ne=wt(b),se=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,me=b.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===vi)Te(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,se,we,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,me,se,we,0);else if(b.depthTexture.format===Ti)Te(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,se,we,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,me,se,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(E){let b=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let ue=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){let ce=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",ce)};ue.addEventListener("dispose",ce),b.__depthDisposeCallback=ce}b.__boundDepthTexture=ue}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ue=0;ue<6;ue++)ze(b.__webglFramebuffer[ue],E,ue);else E.texture.mipmaps.length>0?ze(b.__webglFramebuffer[0],E,0):ze(b.__webglFramebuffer,E,0);else if(H){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=i.createRenderbuffer(),nt(b.__webglDepthbuffer[ue],E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ge)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),nt(b.__webglDepthbuffer,E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(E,b,H){let ue=n.get(E);b!==void 0&&be(ue.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&rt(E)}function dt(E){let b=E.texture,H=n.get(E),ue=n.get(b);E.addEventListener("dispose",B),N(E);let ce=E.textures,ge=E.isWebGLCubeRenderTarget===!0,we=ce.length>1;if(we||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=b.version,a.memory.textures++),ge){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let se=0;se<b.mipmaps.length;se++)H.__webglFramebuffer[ne][se]=i.createFramebuffer()}else H.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)H.__webglFramebuffer[ne]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(we)for(let ne=0,se=ce.length;ne<se;ne++){let me=n.get(ce[ne]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Te(E)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<ce.length;ne++){let se=ce[ne];H.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);let me=r.convert(se.format,se.colorSpace),L=r.convert(se.type),ie=A(se.internalFormat,me,L,se.normalized,se.colorSpace,E.isXRRenderTarget===!0),Q=wt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),et(i.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)be(H.__webglFramebuffer[ne][se],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else be(H.__webglFramebuffer[ne],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);x(b)?y(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ne=0,se=ce.length;ne<se;ne++){let me=ce[ne],L=n.get(me),ie=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,L.__webglTexture),et(ie,me),be(H.__webglFramebuffer,E,me,i.COLOR_ATTACHMENT0+ne,ie,0),x(me)&&y(ie)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,ue.__webglTexture),et(ne,b),b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)be(H.__webglFramebuffer[se],E,b,i.COLOR_ATTACHMENT0,ne,se);else be(H.__webglFramebuffer,E,b,i.COLOR_ATTACHMENT0,ne,0);x(b)?y(ne):b.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&rt(E)}function O(E){let b=E.textures;for(let H=0,ue=b.length;H<ue;H++){let ce=b[H];if(x(ce)&&ce.mipmapsAutoUpdate===!0){let ge=w(E),we=n.get(ce).__webglTexture;t.bindTexture(ge,we),y(ge),t.unbindTexture()}}}let Nt=[];function je(E){if(E.samples>0){if(Te(E)===!1){let b=E.textures,H=E.width,ue=E.height,ce=i.COLOR_BUFFER_BIT,ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(E),ne=b.length>1;if(ne)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<b.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[me]);let L=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,H,ue,0,0,H,ue,ce,i.NEAREST),l===!0&&(Nt.length=0,Nt.push(i.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Nt.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,we.__webglColorRenderbuffer[me]);let L=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let b=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function wt(E){return Math.min(s.maxSamples,E.samples)}function Te(E){let b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(E){let b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function He(E,b){let H=E.colorSpace,ue=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==Er&&H!==wi&&(_t.getTransfer(H)===At?(ue!==$n||ce!==xn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",H)),b}function Je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$e,this.resetTextureUnits=re,this.getTextureUnits=ae,this.setTextureUnits=Fe,this.setTexture2D=Ce,this.setTexture2DArray=Oe,this.setTexture3D=Ye,this.setTextureCube=Re,this.rebindTextures=Ze,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Te,this.dispose=X}function Ax(i,e){function t(n,s=wi){let r,a=_t.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===$n)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===Xi)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===jo||n===Qo||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===da||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===da)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===wl||n===fa||n===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ni({vertexShader:Ex,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,T=typeof XRWebGLBinding<"u",g=new gh,p={},M=t.getContextAttributes(),x=null,y=null,w=[],A=[],m=new ve,S=null,N=null,C=new pn;C.viewport=new Ft;let R=new pn;R.viewport=new Ft;let B=[C,R],Y=new zo,D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Ce=w[te];return Ce===void 0&&(Ce=new Hs,w[te]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(te){let Ce=w[te];return Ce===void 0&&(Ce=new Hs,w[te]=Ce),Ce.getGripSpace()},this.getHand=function(te){let Ce=w[te];return Ce===void 0&&(Ce=new Hs,w[te]=Ce),Ce.getHandSpace()};function Z(te){let Ce=A.indexOf(te.inputSource);if(Ce===-1)return;let Oe=w[Ce];Oe!==void 0&&(Oe.update(te.inputSource,te.frame,c||a),Oe.dispatchEvent({type:te.type,data:te.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",he);for(let te=0;te<w.length;te++){let Ce=A[te];Ce!==null&&(A[te]=null,w[te].disconnect(Ce))}D=null,X=null,g.reset();for(let te in p)delete p[te];if(e.setRenderTarget(x),f=null,d=null,u=null,s=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),N!==null){let te=N.camera;te.fov=N.fov,te.zoom=N.zoom,te.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&T&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Ye=null,Re=null;M.depth&&(Re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=M.stencil?Ti:vi,Ye=M.stencil?fs:qn);let Ve={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new wn(d.textureWidth,d.textureHeight,{format:$n,type:xn,depthTexture:new Si(d.textureWidth,d.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new wn(f.framebufferWidth,f.framebufferHeight,{format:$n,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(te){for(let Ce=0;Ce<te.removed.length;Ce++){let Oe=te.removed[Ce],Ye=A.indexOf(Oe);Ye>=0&&(A[Ye]=null,w[Ye].disconnect(Oe))}for(let Ce=0;Ce<te.added.length;Ce++){let Oe=te.added[Ce],Ye=A.indexOf(Oe);if(Ye===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=A.length){A.push(Oe),Ye=Ve;break}else if(A[Ve]===null){A[Ve]=Oe,Ye=Ve;break}if(Ye===-1)break}let Re=w[Ye];Re&&Re.connect(Oe)}}function J(te,Ce){Ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let Ce=te.near,Oe=te.far;g.texture!==null&&(g.depthNear>0&&(Ce=g.depthNear),g.depthFar>0&&(Oe=g.depthFar)),Y.near=R.near=C.near=Ce,Y.far=R.far=C.far=Oe,(D!==Y.near||X!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),D=Y.near,X=Y.far),Y.layers.mask=te.layers.mask|6,C.layers.mask=Y.layers.mask&-5,R.layers.mask=Y.layers.mask&-3;let Ye=te.parent,Re=Y.cameras;J(Y,Ye);for(let Ve=0;Ve<Re.length;Ve++)J(Re[Ve],Ye);Y.projectionMatrix.copy(C.projectionMatrix),Y.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&te.isPerspectiveCamera&&(N={camera:te,fov:te.fov,zoom:te.zoom}),re(te,Y,Ye)};function re(te,Ce,Oe){Oe===null?te.matrix.copy(Ce.matrixWorld):(te.matrix.copy(Oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(Ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Ce.projectionMatrix),te.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=po*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function(te){return p[te]};let ae=null;function Fe(te,Ce){if(h=Ce.getViewerPose(c||a),_=Ce,h!==null){let Oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ye=!1;Oe.length!==Y.cameras.length&&(Y.cameras.length=0,Ye=!0);for(let De=0;De<Oe.length;De++){let et=Oe[De],ct=null;if(f!==null)ct=f.getViewport(et);else{let fe=u.getViewSubImage(d,et);ct=fe.viewport,De===0&&(e.setRenderTargetTextures(y,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(y))}let oe=B[De];oe===void 0&&(oe=new pn,oe.layers.enable(De),oe.viewport=new Ft,B[De]=oe),oe.matrix.fromArray(et.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(et.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ct.x,ct.y,ct.width,ct.height),De===0&&(Y.matrix.copy(oe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ye===!0&&Y.cameras.push(oe)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){u=n.getBinding();let De=u.getDepthInformation(Oe[0]);De&&De.isValid&&De.texture&&g.init(De,s.renderState)}if(Re&&Re.includes("camera-access")&&T){e.state.unbindTexture(),u=n.getBinding();for(let De=0;De<Oe.length;De++){let et=Oe[De].camera;if(et){let ct=p[et];ct||(ct=new Gr,p[et]=ct);let oe=u.getCameraImage(et);ct.sourceTexture=oe}}}}for(let Oe=0;Oe<w.length;Oe++){let Ye=A[Oe],Re=w[Oe];Ye!==null&&Re!==void 0&&Re.update(Ye,Ce,c||a)}ae&&ae(te,Ce),Ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ce}),_=null}let $e=new Bd;$e.setAnimationLoop(Fe),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}},Rx=new bt,$d=new st;$d.set(-1,0,0,0,1,0,0,0,1);function Ix(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,x,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),T(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),x=M.envMap,y=M.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($d),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function T(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Px(i,e,t,n){let s={},r={};function a(M,x){let y=x.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,x){let y=s[M.id];y===void 0&&(_(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",g));let w=x.program;n.updateUBOMapping(M,w);let A=e.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){let x=i.createBuffer(),y=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function c(M){let x=s[M.id],y=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,m=y.length;A<m;A++){let S=y[A];if(Array.isArray(S))for(let N=0,C=S.length;N<C;N++)h(S[N],A,N,w);else h(S,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,x,y,w){if(d(M,x,y,w)===!0){let A=M.__offset,m=M.value;if(Array.isArray(m)){let S=0;for(let N=0;N<m.length;N++){let C=m[N],R=T(C,!0);u(C,M.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(m,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function u(M,x,y){typeof M=="number"||typeof M=="boolean"?x[y]=M:M.isMatrix3?(x[y]=M.elements[0],x[y+1]=M.elements[1],x[y+2]=M.elements[2],x[y+3]=0,x[y+4]=M.elements[3],x[y+5]=M.elements[4],x[y+6]=M.elements[5],x[y+7]=0,x[y+8]=M.elements[6],x[y+9]=M.elements[7],x[y+10]=M.elements[8],x[y+11]=0):ArrayBuffer.isView(M)?x.set(M.subarray(0,x.length-y),y):M.toArray(x,y)}function d(M,x,y,w){let A=M.value,m=x+"_"+y;if(Array.isArray(A)){w[m]===void 0&&(w[m]=[]);let S=w[m],N=!1;for(let C=0;C<A.length;C++)f(A[C],S,C)===!0&&(N=!0);return N}return f(A,w,m)}function f(M,x,y){if(x[y]===void 0)return typeof M=="number"||typeof M=="boolean"?x[y]=M:ArrayBuffer.isView(M)?x[y]=M.slice():x[y]=M.clone(),!0;{let w=x[y];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return x[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function _(M){let x=M.uniforms,y=0,w=16;for(let m=0,S=x.length;m<S;m++){let N=Array.isArray(x[m])?x[m]:[x[m]];for(let C=0,R=N.length;C<R;C++){let B=N[C],Y=Array.isArray(B.value)?B.value:[B.value],D=Array.isArray(x[m])||Array.isArray(B.value),X=y;for(let G=0,he=Y.length;G<he;G++){let J=Y[G],re=T(J,D),ae=y%w,Fe=ae%re.boundary,$e=ae+Fe;y+=Fe,$e!==0&&w-$e<re.storage&&(y+=w-$e),G===0&&(X=y),y+=re.storage}let Z=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Z((y-X)/Float32Array.BYTES_PER_ELEMENT),B.__offset=X}}let A=y%w;return A>0&&(y+=w-A),M.__size=y,M.__cache={},this}function T(M,x){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",M),x===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(M){let x=M.target;x.removeEventListener("dispose",g),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function Dx(){return si===null&&(si=new Or(Lx,16,16,Xi,Yn),si.name="DFG_LUT",si.minFilter=mn,si.magFilter=mn,si.wrapS=Kn,si.wrapT=Kn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Ll=class{constructor(e={}){let{canvas:t=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let T=f,g=new Set([Jo,Zo,$o]),p=new Set([xn,qn,tr,fs,Xo,qo]),M=new Uint32Array(4),x=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,A=null,m=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,B=null,Y=null,D=null,X=null;this._outputColorSpace=Ht;let Z=0,G=0,he=null,J=-1,re=null,ae=new Ft,Fe=new Ft,$e=null,te=new ot(0),Ce=0,Oe=t.width,Ye=t.height,Re=1,Ve=null,vt=null,De=new Ft(0,0,Oe,Ye),et=new Ft(0,0,Oe,Ye),ct=!1,oe=new Ui,fe=new vo,ye=!1,Le=!1,be=new bt,nt=new U,ze=new Ft,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function dt(){return he===null?Re:1}let O=n;function Nt(v,I){return t.getContext(v,I)}let je,wt,Te,Ut,He,Je,E,b,H,ue,ce,ge,we,ne,se,me,L,ie,Q,Me,pe,Se,We;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),O===null){let I="webgl2";if(O=Nt(I,v),O===null)throw Nt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(v){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Qe("WebGLRenderer: "+v.message),v}function ht(){je=new W0(O),je.init(),pe=new Ax(O,je),wt=new D0(O,je,e,pe),Te=new Tx(O,je),wt.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),Y=O.createFramebuffer(),D=O.createFramebuffer(),X=O.createFramebuffer(),Ut=new Y0(O),He=new hx,Je=new wx(O,je,Te,He,wt,pe,Ut),E=new H0(C),b=new Zp(O),Se=new P0(O,b),H=new X0(O,b,Ut,Se),ue=new Z0(O,H,b,Se,Ut),ie=new $0(O,wt,Je),se=new N0(He),ce=new cx(C,E,je,wt,Se,se),ge=new Ix(C,He),we=new dx,ne=new xx(je),L=new I0(C,E,Te,ue,_,l),me=new bx(C,ue,wt),We=new Px(O,Ut,wt,Te),Q=new L0(O,je,Ut),Me=new q0(O,je,Ut),Ut.programs=ce.programs,C.capabilities=wt,C.extensions=je,C.properties=He,C.renderLists=we,C.shadowMap=me,C.state=Te,C.info=Ut}T!==xn&&(N=new K0(T,t.width,t.height,o,s,r));let de=new _h(C,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(v){v!==void 0&&(Re=v,this.setSize(Oe,Ye,!1))},this.getSize=function(v){return v.set(Oe,Ye)},this.setSize=function(v,I,V=!0){if(de.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=v,Ye=I,t.width=Math.floor(v*Re),t.height=Math.floor(I*Re),V===!0&&(t.style.width=v+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Oe*Re,Ye*Re).floor()},this.setDrawingBufferSize=function(v,I,V){Oe=v,Ye=I,Re=V,t.width=Math.floor(v*V),t.height=Math.floor(I*V),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(T===xn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ae)},this.getViewport=function(v){return v.copy(De)},this.setViewport=function(v,I,V,z){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,I,V,z),Te.viewport(ae.copy(De).multiplyScalar(dt()).round())},this.getScissor=function(v){return v.copy(et)},this.setScissor=function(v,I,V,z){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,I,V,z),Te.scissor(Fe.copy(et).multiplyScalar(dt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(v){Te.setScissorTest(ct=v)},this.setOpaqueSort=function(v){Ve=v},this.setTransparentSort=function(v){vt=v},this.getClearColor=function(v){return v.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,V=!0){let z=0;if(v){let k=!1;if(he!==null){let le=he.texture.format;k=g.has(le)}if(k){let le=he.texture.type,_e=p.has(le),xe=L.getClearColor(),Ae=L.getClearAlpha(),Ne=xe.r,it=xe.g,at=xe.b;_e?(M[0]=Ne,M[1]=it,M[2]=at,M[3]=Ae,O.clearBufferuiv(O.COLOR,0,M)):(x[0]=Ne,x[1]=it,x[2]=at,x[3]=Ae,O.clearBufferiv(O.COLOR,0,x))}else z|=O.COLOR_BUFFER_BIT}I&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),L.dispose(),we.dispose(),ne.dispose(),Je.dispose(),He.dispose(),E.dispose(),ue.dispose(),H.dispose(),Se.dispose(),We.dispose(),ce.dispose(),de.dispose(),de.removeEventListener("sessionstart",Sn),de.removeEventListener("sessionend",Ei),ci.stop()};function Be(v){v.preventDefault(),Rr("WebGLRenderer: Context Lost."),R=!0}function tt(){Rr("WebGLRenderer: Context Restored."),R=!1;let v=Ut.autoReset,I=me.enabled,V=me.autoUpdate,z=me.needsUpdate,k=me.type;ht(),Ut.autoReset=v,me.enabled=I,me.autoUpdate=V,me.needsUpdate=z,me.type=k}function Ee(v){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function yt(v){let I=v.target;I.removeEventListener("dispose",yt),Ot(I)}function Ot(v){tn(v),He.remove(v)}function tn(v){let I=He.get(v).programs;I!==void 0&&(I.forEach(function(V){ce.releaseProgram(V)}),v.isShaderMaterial&&ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,V,z,k,le){I===null&&(I=rt);let _e=k.isMesh&&k.matrixWorld.determinantAffine()<0,xe=Xe(v,I,V,z,k);Te.setMaterial(z,_e);let Ae=V.index,Ne=1;if(z.wireframe===!0){if(Ae=H.getWireframeAttribute(V),Ae===void 0)return;Ne=2}let it=V.drawRange,at=V.attributes.position,ke=it.start*Ne,gt=(it.start+it.count)*Ne;le!==null&&(ke=Math.max(ke,le.start*Ne),gt=Math.min(gt,(le.start+le.count)*Ne)),Ae!==null?(ke=Math.max(ke,0),gt=Math.min(gt,Ae.count)):at!=null&&(ke=Math.max(ke,0),gt=Math.min(gt,at.count));let Gt=gt-ke;if(Gt<0||Gt===1/0)return;Se.setup(k,z,xe,V,Ae);let It,Rt=Q;if(Ae!==null&&(It=b.get(Ae),Rt=Me,Rt.setIndex(It)),k.isMesh)z.wireframe===!0?(Te.setLineWidth(z.wireframeLinewidth*dt()),Rt.setMode(O.LINES)):Rt.setMode(O.TRIANGLES);else if(k.isLine){let sn=z.linewidth;sn===void 0&&(sn=1),Te.setLineWidth(sn*dt()),k.isLineSegments?Rt.setMode(O.LINES):k.isLineLoop?Rt.setMode(O.LINE_LOOP):Rt.setMode(O.LINE_STRIP)}else k.isPoints?Rt.setMode(O.POINTS):k.isSprite&&Rt.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let sn=k._multiDrawStarts,Ge=k._multiDrawCounts,dn=k._multiDrawCount,St=Ae?b.get(Ae).bytesPerElement:1,Qi=He.get(z).currentProgram.getUniforms();for(let rn=0;rn<dn;rn++)Qi.setValue(O,"_gl_DrawID",rn),Rt.render(sn[rn]/St,Ge[rn])}else if(k.isInstancedMesh)Rt.renderInstances(ke,Gt,k.count);else if(V.isInstancedBufferGeometry){let sn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ge=Math.min(V.instanceCount,sn);Rt.renderInstances(ke,Gt,Ge)}else Rt.render(ke,Gt)};function dr(v,I,V,z){B!==null&&v.isNodeMaterial&&B.setObject(z,v),ye===!0&&se.setState(v,V,!1),v.transparent===!0&&v.side===On&&v.forceSinglePass===!1?(v.side=gn,v.needsUpdate=!0,$(v,I,z),v.side=Hi,v.needsUpdate=!0,$(v,I,z),v.side=On):$(v,I,z)}this.compile=function(v,I,V=null){V===null&&(V=v),B!==null&&B.renderStart(v,I,V),A=ne.get(V),A.init(I),S.push(A),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),v!==V&&v.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),Le=this.localClippingEnabled,ye=se.init(this.clippingPlanes,Le),ye===!0&&se.setGlobalState(this.clippingPlanes,I),B!==null&&me.render(A.state.shadowsArray,V,I);let z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let le=k.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){let xe=le[_e];dr(xe,V,I,k),z.add(xe)}else dr(le,V,I,k),z.add(le)}),A=S.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(v,I,V=null){let z=this.compile(v,I,V);return new Promise(k=>{function le(){if(z.forEach(function(_e){let Ae=He.get(_e).currentProgram;(Ae===void 0||Ae.isReady())&&z.delete(_e)}),z.size===0){k(v);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let un=null;function Mn(v){un&&un(v)}function Sn(){ci.stop()}function Ei(){ci.start()}let ci=new Bd;ci.setAnimationLoop(Mn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(v){un=v,de.setAnimationLoop(v),v===null?ci.stop():ci.start()},de.addEventListener("sessionstart",Sn),de.addEventListener("sessionend",Ei),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;B!==null&&B.renderStart(v,I);let V=de.enabled===!0&&de.isPresenting===!0,z=N!==null&&(he===null||V)&&N.begin(C,he);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,I,he),A=ne.get(v,S.length),A.init(I),A.state.textureUnits=Je.getTextureUnits(),S.push(A),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?fe.setFromArrayCamera(I):oe.setFromProjectionMatrix(be,Nn,I.reversedDepth),Le=this.localClippingEnabled,ye=se.init(this.clippingPlanes,Le),w=we.get(v,m.length),w.init(),m.push(w),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let _e=C.xr.getDepthSensingMesh();_e!==null&&ji(_e,I,-1/0,C.sortObjects)}ji(v,I,0,C.sortObjects),w.finish(),B!==null&&B.updateLights(A.state.lightsArray),C.sortObjects===!0&&w.sort(Ve,vt),Ze=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ze&&L.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),ye===!0&&se.beginShadows();let k=A.state.shadowsArray;if(me.render(k,v,I),ye===!0&&se.endShadows(),(z&&N.hasRenderPass())===!1){let _e=w.opaque,xe=w.transmissive;if(A.setupLights(),I.isArrayCamera){let Ae=I.cameras;if(xe.length>0)for(let Ne=0,it=Ae.length;Ne<it;Ne++){let at=Ae[Ne];F(_e,xe,v,at)}Ze&&L.render(v);for(let Ne=0,it=Ae.length;Ne<it;Ne++){let at=Ae[Ne];Ea(w,v,at,at.viewport)}}else xe.length>0&&F(_e,xe,v,I),Ze&&L.render(v),Ea(w,v,I)}he!==null&&G===0&&(Je.updateMultisampleRenderTarget(he),Je.updateRenderTargetMipmap(he)),z&&N.end(C),v.isScene===!0&&v.onAfterRender(C,v,I),Se.resetDefaultState(),J=-1,re=null,S.pop(),S.length>0?(A=S[S.length-1],Je.setTextureUnits(A.state.textureUnits),ye===!0&&se.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,m.pop(),m.length>0?w=m[m.length-1]:w=null,B!==null&&B.renderEnd()};function ji(v,I,V,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let _e=I.isArrayCamera?fe:oe;if(!v.frustumCulled||v.intersectsFrustum(_e)){z&&ze.setFromMatrixPosition(v.matrixWorld).applyMatrix4(be);let xe=ue.update(v),Ae=v.material;Ae.visible&&w.push(v,xe,Ae,V,ze.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let _e=I.isArrayCamera?fe:oe;if(!v.frustumCulled||v.intersectsFrustum(_e)){let xe=ue.update(v),Ae=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ze.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ze.copy(xe.boundingSphere.center)),ze.applyMatrix4(v.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){let Ne=xe.groups;for(let it=0,at=Ne.length;it<at;it++){let ke=Ne[it],gt=Ae[ke.materialIndex];gt&&gt.visible&&w.push(v,xe,gt,V,ze.z,ke,I)}}else Ae.visible&&w.push(v,xe,Ae,V,ze.z,null,I)}}}let le=v.children;for(let _e=0,xe=le.length;_e<xe;_e++)ji(le[_e],I,V,z)}function Ea(v,I,V,z){let{opaque:k,transmissive:le,transparent:_e}=v;A.setupLightsView(V),ye===!0&&se.setGlobalState(C.clippingPlanes,V),z&&Te.viewport(ae.copy(z)),k.length>0&&P(k,I,V),le.length>0&&P(le,I,V),_e.length>0&&P(_e,I,V),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function F(v,I,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let ke=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new wn(1,1,{generateMipmaps:!0,type:ke?Yn:xn,minFilter:bi,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let le=A.state.transmissionRenderTarget[z.id],_e=z.viewport||ae;le.setSize(_e.z*C.transmissionResolutionScale,_e.w*C.transmissionResolutionScale);let xe=C.getRenderTarget(),Ae=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(le),C.getClearColor(te),Ce=C.getClearAlpha(),Ce<1&&C.setClearColor(16777215,.5),C.clear(),Ze&&L.render(V);let it=C.toneMapping;C.toneMapping=ii;let at=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),ye===!0&&se.setGlobalState(C.clippingPlanes,z),P(v,V,z),Je.updateMultisampleRenderTarget(le),Je.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let gt=0,Gt=I.length;gt<Gt;gt++){let It=I[gt],{object:Rt,geometry:sn,material:Ge,group:dn}=It;if(Ge.side===On&&Rt.layers.test(z.layers)){let St=Ge.side;Ge.side=gn,Ge.needsUpdate=!0,q(Rt,V,z,sn,Ge,dn),Ge.side=St,Ge.needsUpdate=!0,ke=!0}}ke===!0&&(Je.updateMultisampleRenderTarget(le),Je.updateRenderTargetMipmap(le))}C.setRenderTarget(xe,Ae,Ne),C.setClearColor(te,Ce),at!==void 0&&(z.viewport=at),C.toneMapping=it}function P(v,I,V){let z=I.isScene===!0?I.overrideMaterial:null;for(let k=0,le=v.length;k<le;k++){let _e=v[k],{object:xe,geometry:Ae,group:Ne}=_e,it=_e.material;it.allowOverride===!0&&z!==null&&(it=z),xe.layers.test(V.layers)&&q(xe,I,V,Ae,it,Ne)}}function q(v,I,V,z,k,le){B!==null&&k.isNodeMaterial&&B.setObject(v,k),v.onBeforeRender(C,I,V,z,k,le),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(C,I,V,z,v,le),k.transparent===!0&&k.side===On&&k.forceSinglePass===!1?(k.side=gn,k.needsUpdate=!0,C.renderBufferDirect(V,I,z,k,v,le),k.side=Hi,k.needsUpdate=!0,C.renderBufferDirect(V,I,z,k,v,le),k.side=On):C.renderBufferDirect(V,I,z,k,v,le),v.onAfterRender(C,I,V,z,k,le)}function W(v){let I=0;for(let V of v)V.texture!==null&&I++;return I}function $(v,I,V){I.isScene!==!0&&(I=rt);let z=He.get(v),k=A.state.lights,le=A.state.shadowsArray,_e=k.state.version,xe=ce.getParameters(v,k.state,le,I,V,A.state.lightProbeGridArray),Ae=ce.getProgramCacheKey(xe),Ne=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let it=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=E.get(v.envMap||z.environment,it),z.envMapRotation=z.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",yt),Ne=new Map,z.programs=Ne,z.programVariants=new Map);let at=Ne.get(Ae);if(at!==void 0){if(z.currentProgram===at&&z.lightsStateVersion===_e)return Ie(v,xe),at}else xe.uniforms=ce.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,V,xe),v.onBeforeCompile(xe,C),at=ce.acquireProgram(xe,Ae),Ne.set(Ae,at),z.uniforms=xe.uniforms;let ke=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ke.clippingPlanes=se.uniform),Ie(v,xe),z.needsLights=ft(v),z.lightsStateVersion=_e,z.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.sunLights.value=k.state.sun,ke.sunLightShadows.value=k.state.sunShadow,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.sunShadowMatrix.value=k.state.sunShadowMatrix,ke.sunShadowCascade.value=k.state.sunShadowCascade,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),z.numLightProbeGrids=W(A.state.lightProbeGridArray),z.currentProgram=at,z.uniformsList=null,at}function K(v,I,V,z,k){let le=He.get(v),_e=le.currentProgram.id+","+z+","+k,xe=le.programVariants.get(_e);return xe===void 0?(xe=$(v,I,V),le.programVariants.set(_e,xe)):(le.currentProgram=xe,le.uniformsList=null,le.outputColorSpace=z,le.toneMapping=k),xe}function ee(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=nr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ie(v,I){let V=He.get(v);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Xe(v,I,V,z,k){I.isScene!==!0&&(I=rt),Je.resetTextureUnits();let le=I.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,xe=he===null?C.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_t.workingColorSpace,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ne=E.get(z.envMap||_e,Ae),it=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,at=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ke=!!V.morphAttributes.position,gt=!!V.morphAttributes.normal,Gt=!!V.morphAttributes.color,It=ii;z.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(It=C.toneMapping);let Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,sn=Rt!==void 0?Rt.length:0,Ge=He.get(z),dn=A.state.lights;if(ye===!0&&(Le===!0||v!==re)){let Bt=v===re&&z.id===J;se.setState(z,v,Bt)}let St=!1,Qi=!1;z.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==dn.state.version||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isBatchedMesh&&Ge.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ge.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ge.instancingMorph===!1&&k.morphTexture!==null||Ge.envMap!==Ne||z.fog===!0&&Ge.fog!==le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==se.numPlanes||Ge.numIntersection!==se.numIntersection)||Ge.vertexAlphas!==it||Ge.vertexTangents!==at||Ge.morphTargets!==ke||Ge.morphNormals!==gt||Ge.morphColors!==Gt||Ge.morphTargetsCount!==sn||Ge.numLightProbeGrids!==W(A.state.lightProbeGridArray)?St=!0:(Ge.outputColorSpace!==xe||Ge.toneMapping!==It)&&(Qi=!0):(St=!0,Ge.__version=z.version);let rn=Ge.currentProgram;(St===!0||Qi===!0)&&(rn=Qi===!0?K(z,I,k,xe,It):$(z,I,k),B&&z.isNodeMaterial&&B.onUpdateProgram(z,rn,Ge));let Ca=!1,Ci=!1,es=!1,Mt=rn.getUniforms(),nn=Ge.uniforms;if(Te.useProgram(rn.program)&&(Ca=!0,Ci=!0,es=!0),z.id!==J&&(J=z.id,Ci=!0),Ca||re!==v){Te.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Mt.setValue(O,"projectionMatrix",v.projectionMatrix),Mt.setValue(O,"viewMatrix",v.matrixWorldInverse);let Jt=Mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(O,nt.setFromMatrixPosition(v.matrixWorld)),wt.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),re!==v&&(re=v,Ci=!0,es=!0)}if(Ge.needsLights&&(dn.state.sunShadowMap.length>0&&Mt.setValue(O,"sunShadowMap",dn.state.sunShadowMap,Je),dn.state.directionalShadowMap.length>0&&Mt.setValue(O,"directionalShadowMap",dn.state.directionalShadowMap,Je),dn.state.spotShadowMap.length>0&&Mt.setValue(O,"spotShadowMap",dn.state.spotShadowMap,Je),dn.state.pointShadowMap.length>0&&Mt.setValue(O,"pointShadowMap",dn.state.pointShadowMap,Je)),k.isSkinnedMesh){Mt.setOptional(O,k,"bindMatrix"),Mt.setOptional(O,k,"bindMatrixInverse");let Bt=k.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Mt.setValue(O,"boneTexture",Bt.boneTexture,Je))}k.isBatchedMesh&&(Mt.setOptional(O,k,"batchingTexture"),Mt.setValue(O,"batchingTexture",k._matricesTexture,Je),Mt.setOptional(O,k,"batchingIdTexture"),Mt.setValue(O,"batchingIdTexture",k._indirectTexture,Je),Mt.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(O,"batchingColorTexture",k._colorsTexture,Je));let kn=V.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&ie.update(k,V,rn),(Ci||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Mt.setValue(O,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(nn.envMapIntensity.value=I.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Dx()),Ci){if(Mt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ge.needsLights&&pt(nn,es),le&&z.fog===!0&&ge.refreshFogUniforms(nn,le),ge.refreshMaterialUniforms(nn,z,Re,Ye,A.state.transmissionRenderTarget[v.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let Bt=y,Jt=0;for(let hi of A.state.lightProbeGridArray)hi.texture!==null&&(Bt.textures[Jt]=hi.texture,Bt.min[Jt]=hi.boundingBox.min,Bt.max[Jt]=hi.boundingBox.max,Bt.resolution[Jt]=hi.resolution,Jt++);for(let hi in Bt)Bt[hi].length=Jt;nn.probesSH.value=Bt.textures,nn.probesMin.value=Bt.min,nn.probesMax.value=Bt.max,nn.probesResolution.value=Bt.resolution}nr.upload(O,ee(Ge),nn,Je)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(nr.upload(O,ee(Ge),nn,Je),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(O,"center",k.center),Mt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(O,"normalMatrix",k.normalMatrix),Mt.setValue(O,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let Bt=z.uniformsGroups;for(let Jt=0,hi=Bt.length;Jt<hi;Jt++){let Vh=Bt[Jt];We.update(Vh,rn),We.bind(Vh,rn)}}return rn}function pt(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function ft(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(v,I,V){let z=He.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),He.get(v.texture).__webglTexture=I,He.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let V=He.get(v);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,V=0){he=v,Z=I,G=V;let z=null,k=!1,le=!1;if(v){let xe=He.get(v);if(xe.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),ae.copy(v.viewport),Fe.copy(v.scissor),$e=v.scissorTest,Te.viewport(ae),Te.scissor(Fe),Te.setScissorTest($e),J=-1;return}else if(xe.__webglFramebuffer===void 0)Je.setupRenderTarget(v);else if(xe.__hasExternalTextures)Je.rebindTextures(v,He.get(v.texture).__webglTexture,He.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let it=v.depthTexture;if(xe.__boundDepthTexture!==it){if(it!==null&&He.has(it)&&(v.width!==it.image.width||v.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(v)}}let Ae=v.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);let Ne=He.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?z=Ne[I][V]:z=Ne[I],k=!0):v.samples>0&&Je.useMultisampledRTT(v)===!1?z=He.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[V]:z=Ne,ae.copy(v.viewport),Fe.copy(v.scissor),$e=v.scissorTest}else ae.copy(De).multiplyScalar(Re).floor(),Fe.copy(et).multiplyScalar(Re).floor(),$e=ct;if(V!==0&&(z=Y),Te.bindFramebuffer(O.FRAMEBUFFER,z)&&Te.drawBuffers(v,z),Te.viewport(ae),Te.scissor(Fe),Te.setScissorTest($e),k){let xe=He.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,V)}else if(le){let xe=I;for(let Ae=0;Ae<v.textures.length;Ae++){let Ne=He.get(v.textures[Ae]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,V,xe)}}else if(v!==null&&V!==0){let xe=He.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,V)}J=-1};function qe(v){let I=He.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=wt.textureFormatReadable(v.format),I.__typeReadable=wt.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,V,z,k,le,_e,xe=0){if(!(v&&v.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){Te.bindFramebuffer(O.FRAMEBUFFER,Ae);try{let Ne=v.textures[xe],it=Ne.format,at=Ne.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let ke=qe(Ne);if(ke.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&V>=0&&V<=v.height-k&&O.readPixels(I,V,z,k,pe.convert(it),pe.convert(at),le)}finally{let Ne=he!==null?He.get(he).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,I,V,z,k,le,_e,xe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(I>=0&&I<=v.width-z&&V>=0&&V<=v.height-k){Te.bindFramebuffer(O.FRAMEBUFFER,Ae);let Ne=v.textures[xe],it=Ne.format,at=Ne.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let ke=qe(Ne);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),O.readPixels(I,V,z,k,pe.convert(it),pe.convert(at),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Gt=he!==null?He.get(he).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,Gt);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await id(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(gt),O.deleteSync(It),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,V=0){let z=Math.pow(2,-V),k=Math.floor(v.image.width*z),le=Math.floor(v.image.height*z),_e=I!==null?I.x:0,xe=I!==null?I.y:0;Je.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,_e,xe,k,le),Te.unbindTexture()},this.copyTextureToTexture=function(v,I,V=null,z=null,k=0,le=0){let _e,xe,Ae,Ne,it,at,ke,gt,Gt,It=v.isCompressedTexture?v.mipmaps[le]:v.image;if(V!==null)_e=V.max.x-V.min.x,xe=V.max.y-V.min.y,Ae=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,it=V.min.y,at=V.isBox3?V.min.z:0;else{let Mt=Math.pow(2,-k);_e=Math.floor(It.width*Mt),xe=Math.floor(It.height*Mt),v.isDataArrayTexture?Ae=It.depth:v.isData3DTexture?Ae=Math.floor(It.depth*Mt):Ae=1,Ne=0,it=0,at=0}z!==null?(ke=z.x,gt=z.y,Gt=z.z):(ke=0,gt=0,Gt=0);let Rt=pe.convert(I.format),sn=pe.convert(I.type),Ge;I.isData3DTexture?(Je.setTexture3D(I,0),Ge=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Je.setTexture2DArray(I,0),Ge=O.TEXTURE_2D_ARRAY):(Je.setTexture2D(I,0),Ge=O.TEXTURE_2D),Te.activeTexture(O.TEXTURE0),Te.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),Te.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),Te.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);let dn=Te.getParameter(O.UNPACK_ROW_LENGTH),St=Te.getParameter(O.UNPACK_IMAGE_HEIGHT),Qi=Te.getParameter(O.UNPACK_SKIP_PIXELS),rn=Te.getParameter(O.UNPACK_SKIP_ROWS),Ca=Te.getParameter(O.UNPACK_SKIP_IMAGES);Te.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),Te.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),Te.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),Te.pixelStorei(O.UNPACK_SKIP_ROWS,it),Te.pixelStorei(O.UNPACK_SKIP_IMAGES,at);let Ci=v.isDataArrayTexture||v.isData3DTexture,es=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let Mt=He.get(v),nn=He.get(I),kn=He.get(Mt.__renderTarget),Bt=He.get(nn.__renderTarget);Te.bindFramebuffer(O.READ_FRAMEBUFFER,kn.__webglFramebuffer),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Jt=0;Jt<Ae;Jt++)Ci&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(v).__webglTexture,k,at+Jt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(I).__webglTexture,le,Gt+Jt)),O.blitFramebuffer(Ne,it,Ne+_e,it+xe,ke,gt,ke+_e,gt+xe,O.DEPTH_BUFFER_BIT,O.NEAREST);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||He.has(v)){let Mt=He.get(v),nn=He.get(I);Te.bindFramebuffer(O.READ_FRAMEBUFFER,D),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,X);for(let kn=0;kn<Ae;kn++)Ci?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,k,at+kn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,k),es?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,le,Gt+kn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,le),k!==0?O.blitFramebuffer(Ne,it,Ne+_e,it+xe,ke,gt,ke+_e,gt+xe,O.COLOR_BUFFER_BIT,O.NEAREST):es?O.copyTexSubImage3D(Ge,le,ke,gt,Gt+kn,Ne,it,_e,xe):O.copyTexSubImage2D(Ge,le,ke,gt,Ne,it,_e,xe);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else es?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Ge,le,ke,gt,Gt,_e,xe,Ae,Rt,sn,It.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(Ge,le,ke,gt,Gt,_e,xe,Ae,Rt,It.data):O.texSubImage3D(Ge,le,ke,gt,Gt,_e,xe,Ae,Rt,sn,It):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,le,ke,gt,_e,xe,Rt,sn,It.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,le,ke,gt,It.width,It.height,Rt,It.data):O.texSubImage2D(O.TEXTURE_2D,le,ke,gt,_e,xe,Rt,sn,It);Te.pixelStorei(O.UNPACK_ROW_LENGTH,dn),Te.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),Te.pixelStorei(O.UNPACK_SKIP_PIXELS,Qi),Te.pixelStorei(O.UNPACK_SKIP_ROWS,rn),Te.pixelStorei(O.UNPACK_SKIP_IMAGES,Ca),le===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&O.generateMipmap(Ge),Te.unbindTexture()},this.initRenderTarget=function(v){He.get(v).__webglFramebuffer===void 0&&Je.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Je.setTextureCube(v,0):v.isData3DTexture?Je.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Je.setTexture2DArray(v,0):Je.setTexture2D(v,0),Te.unbindTexture()},this.resetState=function(){Z=0,G=0,he=null,Te.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var xa=new U;function zn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;xa.copy(e),xa[n]=0,xa.normalize();let c=.5*a/(a+o),h=1-xa.angleTo(i)/l;return Math.sign(xa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var sr=class i extends Cn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new U,c=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,_=u.length/6,T=new U,g=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/_)){case 0:T.set(1,0,0),f[M+0]=zn(T,c,"z","y",r,n),f[M+1]=1-zn(T,c,"y","z",r,t);break;case 1:T.set(-1,0,0),f[M+0]=1-zn(T,c,"z","y",r,n),f[M+1]=1-zn(T,c,"y","z",r,t);break;case 2:T.set(0,1,0),f[M+0]=1-zn(T,c,"x","z",r,e),f[M+1]=zn(T,c,"z","x",r,n);break;case 3:T.set(0,-1,0),f[M+0]=1-zn(T,c,"x","z",r,e),f[M+1]=1-zn(T,c,"z","x",r,n);break;case 4:T.set(0,0,1),f[M+0]=1-zn(T,c,"x","y",r,e),f[M+1]=1-zn(T,c,"y","x",r,t);break;case 5:T.set(0,0,-1),f[M+0]=zn(T,c,"x","y",r,e),f[M+1]=1-zn(T,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Zd(i,e){let t=new Dt;i.add(t);let n={},s=[],r={};function a(x){return r[x]??=new _n({color:x,roughness:.88})}function o(x,y,w){let A=new Ct(x,a(y));return A.castShadow=!0,A.receiveShadow=!0,w.add(A),A}function l(x,y,w,A){let m=new Dt;return m.position.set(y,w,A),x.add(m),m}function c(x,y,w,A,m,S,N,C){let R=o(new ti(1,24,16),y,x);return R.position.set(w,A,m),R.scale.set(S,N,C),R}function h(x,y,w,A,m,S,N,C,R=.04){let B=o(new sr(S,N,C,4,R),y,x);return B.position.set(w,A,m),B}function u(x,y,w,A=.006){let m=new as(w.map(S=>new U(...S)));return o(new Js(m,32,A,6,!1),y,x)}function d(x,y,w,A=.005){w=[...w].sort((B,Y)=>B[0]-Y[0]);let m=[],S=[],N=[],C=40;for(let B=0;B<w.length;B++){let[Y,D,X,Z=0,G=0]=w[B];for(let he=0;he<=C;he++){let J=he/C*Math.PI*2,re=A*(Math.sin(J*7+B*.8)+.4*Math.sin(J*13-B*.6));if(m.push(G+Math.cos(J)*(D+re),Y,Z+Math.sin(J)*(X+re)),S.push(he/C,B/(w.length-1)),B&&he){let ae=B*(C+1)+he;N.push(ae,ae-C-2,ae-1,ae,ae-C-1,ae-C-2)}}}let R=new kt;for(let B of[0,w.length-1]){let[Y,D,X,Z=0,G=0]=w[B],he=m.length/3;m.push(G,Y,Z),S.push(.5,.5);for(let J=0;J<C;J++){let re=B*(C+1)+J,ae=re+1;B===0?N.push(he,re,ae):N.push(he,ae,re)}}return R.setAttribute("position",new xt(m,3)),R.setAttribute("uv",new xt(S,2)),R.setIndex(N),R.computeVertexNormals(),o(R,y,x)}let f=n.body=l(t,0,1.07,0);d(f,"#009e99",[[-.39,.235,.16],[-.35,.27,.18],[-.28,.29,.19],[-.15,.295,.205],[0,.31,.21],[.13,.33,.205],[.22,.29,.17],[.27,.19,.145],[.29,.14,.125]],.008),d(f,"#087b7b",[[-.39,.23,.16],[-.37,.267,.18],[-.32,.268,.18],[-.3,.255,.174]],.002);let _=c(f,"#0ab4ae",0,.225,.16,.29,.15,.22);_.rotation.x=-.3,c(f,"#047d7c",0,.285,.18,.21,.075,.15);for(let x of[-1,1])u(f,"#106c68",[[x*.24,.21,.13],[x*.27,.09,.24],[x*.24,-.14,.255],[x*.19,-.3,.205]],.026),u(f,"#f4b442",[[x*.24,.21,.155],[x*.265,.08,.265],[x*.235,-.14,.28]],.012);let T=l(f,0,-.015,.32);h(T,"#ec781d",0,0,0,.48,.58,.25,.08),h(T,"#ff9b2d",0,.17,.085,.465,.23,.14,.055),h(T,"#ee8c28",0,-.13,.143,.38,.215,.075,.04),u(T,"#bc621b",[[-.18,-.225,.19],[-.205,-.16,.19],[-.205,-.04,.18],[-.16,-.015,.184],[.16,-.015,.184],[.205,-.05,.18],[.205,-.18,.18],[.18,-.225,.19]],.007),u(T,"#ffb440",[[-.19,.25,.1],[-.22,.18,.14],[-.2,.09,.155],[0,.065,.16],[.2,.09,.155],[.22,.18,.14],[.19,.25,.1]],.009),h(T,"#684c2b",0,.09,.174,.045,.115,.025,.008),h(T,"#9d8460",0,.105,.194,.065,.065,.018,.008),h(T,"#ef992f",0,.105,.205,.037,.035,.008,.004),u(T,"#a6531a",[[-.075,.3,0],[-.075,.35,0],[.075,.35,0],[.075,.3,0]],.014);for(let x of[-1,1])h(T,"#d2681b",x*.255,-.12,-.005,.055,.23,.16,.02);let p=n.head=l(t,0,1.69,-.015);c(p,"#d99c76",0,-.035,0,.245,.285,.225),c(p,"#3f2318",0,.075,.035,.26,.245,.235);for(let x of[-1,1])c(p,"#d99770",x*.244,-.075,0,.045,.077,.048),c(p,"#b87551",x*.27,-.07,.013,.015,.038,.021);function M(x,y,w,A,m,S,N){let C=new as([new U(x,y,w),new U(x+A*.4,y+m*.5,w+S*.45),new U(x+A,y+m,w+S)]),R=new Js(C,12,1,9,!1),B=R.attributes.position;for(let Y=0;Y<=12;Y++){let D=C.getPointAt(Y/12),X=N*Math.pow(1-Y/12,.65)+.002;for(let Z=0;Z<=9;Z++){let G=Y*10+Z;B.setXYZ(G,D.x+(B.getX(G)-D.x)*X,D.y+(B.getY(G)-D.y)*X,D.z+(B.getZ(G)-D.z)*X)}}R.computeVertexNormals(),o(R,["#4a291a","#57301d","#613721"][Math.abs(Math.floor(x*30))%3],p)}for(let x=0;x<7;x++){let y=x/7*Math.PI*2;M(Math.cos(y)*.15,.18+Math.sin(y)*.025,Math.sin(y)*.145,.1+Math.cos(y)*.035,.075+x%3*.025,-.075,.105)}for(let x=0;x<4;x++)M(-.16+x*.105,.07,.17,.065,.07,.045,.092);for(let x of[-1,1]){let S=function(R,B,Y,D){let X=new ls(m,{depth:B,bevelEnabled:!0,bevelThickness:D,bevelSize:D,bevelSegments:3,steps:1,curveSegments:10});X.rotateX(Math.PI/2);let Z=o(X,Y,A);return Z.position.y=R,Z},y=l(t,x*.16,.74,0);d(y,"#303532",[[.055,.133,.16],[-.02,.145,.165],[-.12,.142,.16],[-.23,.138,.146],[-.285,.13,.14]],.003),d(y,"#3e423e",[[-.25,.141,.15],[-.28,.141,.15],[-.295,.133,.145]],.001),u(y,"#202522",[[x*.135,-.04,.04],[x*.145,-.16,.04],[x*.136,-.25,.03]],.004);let w=l(y,0,-.32,0);d(w,"#e4aa82",[[.08,.091,.09],[.015,.096,.1],[-.09,.084,.085],[-.18,.068,.073],[-.245,.064,.068]],.001),d(w,"#fcf4df",[[-.22,.069,.073],[-.245,.077,.077],[-.29,.079,.078],[-.33,.07,.077]],.001),d(w,"#059a96",[[-.24,.077,.078],[-.25,.079,.08],[-.264,.079,.08]],0);let A=l(w,0,-.32,0),m=new Oi;m.moveTo(-.078,.12),m.bezierCurveTo(-.12,.1,-.125,-.09,-.124,-.21),m.bezierCurveTo(-.12,-.29,.095,-.3,.121,-.22),m.bezierCurveTo(.13,-.11,.115,.09,.075,.12),m.closePath(),S(-.07,.035,"#dad4c3",.012),S(-.035,.045,"#fff5e0",.015),d(A,"#f9f0dd",[[-.02,.102,.18,-.075],[.015,.102,.18,-.075],[.06,.088,.145,-.06],[.105,.073,.095,-.008]],.001),c(A,"#079e99",0,.085,.053,.082,.06,.065);for(let R=0;R<4;R++)u(A,"#fffbed",[[-.065,.078-R*.006,-.033-R*.03],[0,.088-R*.006,-.043-R*.03],[.065,.078-R*.006,-.033-R*.03]],.006);for(let R=0;R<7;R++)h(A,R%2?"#a0a397":"#babbae",0,-.113,-.23+R*.047,.17,.012,.022,.003);for(let R of[-1,1])u(A,"#d0c6b3",[[R*.102,-.015,.06],[R*.108,-.01,-.12],[R*.075,-.005,-.23]],.004);s.push({side:x,kind:"leg",g:y,knee:w,foot:A});let N=l(t,x*.32,1.27,0);N.rotation.z=x*-.12,d(N,"#08a7a0",[[.02,.12,.135],[-.04,.135,.14],[-.15,.128,.125],[-.25,.105,.105],[-.3,.098,.1]],.005);let C=l(N,0,-.28,0);c(N,"#079e99",0,-.275,0,.102,.105,.106),d(C,"#08a099",[[.02,.1,.105],[-.08,.108,.105],[-.19,.09,.085],[-.245,.075,.075]],.005),d(C,"#077f7e",[[-.218,.078,.077],[-.25,.078,.077],[-.265,.07,.073]],0),c(C,"#e2a178",0,-.3,0,.075,.092,.07),c(C,"#ce8c66",x*-.06,-.29,-.028,.03,.047,.035);for(let R=0;R<3;R++)u(C,"#ba7956",[[x*.04,-.34+R*.018,.047],[x*-.01,-.347+R*.018,.06]],.002);s.push({side:x,kind:"arm",g:N,knee:C})}return{hero:t,rig:n,limbs:s}}function vh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new kt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in u.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(u.attributes[_]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in u.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(u.morphAttributes[_]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=u.index.count;else if(u.attributes.position!==void 0)_=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,h),c+=_}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let _=0;_<f.count;++_)u.push(f.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let T=0;T<a[h].length;++T)f.push(a[h][T][d]);let _=Jd(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}}return l}function Jd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Xt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let _=0;_<t;_++){let T=h.getComponent(d,_);o.setComponent(d+u,_,T)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Kd(i,e){let t=new Ll({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.outputColorSpace=Ht,t.toneMapping=aa,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=ko;let n=new Dr;n.background=new ot("#7fc8ed"),n.fog=new Lr("#a9d6e6",48,95);let s=new pn(57,1,.1,190);n.add(new ta("#e1f1ff","#a48967",1));let r=new sa("#fff0cc",2.8);r.position.set(-12,23,9),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-18,right:18,top:24,bottom:-18,near:.1,far:85}),r.shadow.bias=-6e-4,r.shadow.normalBias=.035,r.shadow.radius=2,n.add(r),n.add(r.target),r.target.position.set(0,0,0);let a=new Vi().load("art/plaster.jpg");a.wrapS=a.wrapT=xi,a.colorSpace=Ht,a.anisotropy=4;let o=new _n({vertexColors:!0,roughness:.85});o.onBeforeCompile=F=>{F.uniforms.plaster={value:a},F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSurfacePos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSurfacePos=position;`),F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSurfacePos;
uniform sampler2D plaster;
float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}`).replace("#include <color_fragment>",`#include <color_fragment>
float speckle=grain(floor(vSurfacePos*130.)); float patina=grain(floor(vSurfacePos*9.)); diffuseColor.rgb*=.94+speckle*.05+patina*.04; vec3 N=abs(normalize(cross(dFdx(vSurfacePos),dFdy(vSurfacePos)))); vec2 tc=N.x>N.z?vSurfacePos.zy:vSurfacePos.xy; if(diffuseColor.r>.45 && diffuseColor.g>.25 && diffuseColor.b>.15){diffuseColor.rgb*=texture2D(plaster,tc*.35).rgb*1.3;}`)};let l={box:new Cn(1,1,1),round:new sr(1,1,1,1,.12),sphere:new ti(1,12,8),small:new $s(1,0),leaf:new $s(1,1),cyl:new Fi(1,1,1,10),cone:new Vr(1,1,12)},c=new kt;c.setAttribute("position",new xt([0,.2,0,0,0,-1,-.65,0,-.4,-.8,0,.2,-.45,0,.7,0,0,1,.45,0,.7,.8,0,.2,.65,0,-.4],3)),c.setAttribute("uv",new xt([.5,.5,.5,0,0,.2,0,.5,0,.8,.5,1,1,.8,1,.5,1,.2],2)),c.setIndex([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,7,0,7,8,0,8,1]),c.computeVertexNormals(),l.leafy=c;let h=new U,u=new Un,d=new U,f=new bt,_=new Xn,T=new ot,g=801,p=()=>(g=Math.imul(g,1664525)+1013904223>>>0,g/4294967296);function M(F,P,q,W,$,K,ee,Ie,Xe,pt=0,ft=0,qe=0){let v=l[P].index?l[P].toNonIndexed():l[P].clone();_.set(pt,ft,qe),u.setFromEuler(_),f.compose(h.set(q,W,$),u,d.set(K,ee,Ie)),v.applyMatrix4(f),T.set(Xe);let I=new Float32Array(v.attributes.position.count*3);for(let V=0;V<I.length;V+=3)I[V]=T.r,I[V+1]=T.g,I[V+2]=T.b;v.setAttribute("color",new Xt(I,3)),F.push(v)}let x=(F,P,q,W,$,K,ee,Ie,Xe=0)=>M(F,"box",P,q,W,$,K,ee,Ie,0,0,Xe),y=!1,w=(F,P,q,W,$,K,ee,Ie,Xe=0,pt=0,ft=0)=>M(F,y?"round":"box",P,q,W,$,K,ee,Ie,Xe,pt,ft),A=(F,P,q,W,$,K,ee,Ie)=>M(F,y?"sphere":"small",P,q,W,$,K,ee,Ie),m=(F,P,q,W,$,K,ee,Ie=0,Xe=0)=>M(F,"cyl",P,q,W,$,K,$,ee,Ie,0,Xe);function S(F,P=n,q=!0,W=o){if(!F.length)return null;let $=vh(F);for(let ee of F)ee.dispose();let K=new Ct($,W);return K.castShadow=q,K.receiveShadow=!0,P.add(K),K}function N(F){let P=document.createElement("canvas");P.width=P.height=1024;let q=P.getContext("2d");if(q.fillStyle=F==="stone"?"#ab9e8a":"#f5dfbd",q.fillRect(0,0,1024,1024),F==="stone")for(let $=0;$<16;$++)for(let K=-1;K<8;K++){let ee=K*146+($%2?73:0),Ie=$*64,Xe=Math.floor(p()*17);q.fillStyle=`rgb(${176+Xe},${163+Xe},${144+Xe})`,q.fillRect(ee+2,Ie+2,142,60),q.fillStyle="#e1d0b8",q.fillRect(ee+3,Ie+2,140,2),q.fillStyle="#928575",q.fillRect(ee+3,Ie+60,140,2);let pt=q.createLinearGradient(ee,Ie,ee+100,Ie+64);pt.addColorStop(0,"#fff4d71c"),pt.addColorStop(.5,"#4e40370a"),pt.addColorStop(1,"#8d7b641a"),q.fillStyle=pt,q.fillRect(ee+3,Ie+4,140,55);for(let ft=0;ft<12;ft++)q.fillStyle=ft%2?"#fff4d715":"#584f3e12",q.fillRect(ee+5+p()*130,Ie+4+p()*50,3+p()*19,1+p()*2)}for(let $=0;$<2e4;$++)q.fillStyle=p()>.5?"#ffffff0b":"#493a2408",q.fillRect(p()*1024,p()*1024,2+p()*5,1+p()*2);let W=new En(P);return W.colorSpace=Ht,W.wrapS=W.wrapT=xi,W.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),W}let C=new Vi().load("art/paving.jpg");C.colorSpace=Ht,C.wrapS=C.wrapT=xi,C.anisotropy=8,C.repeat.set(1.5,30);let R=new Vi().load("art/paving-height.jpg");R.wrapS=R.wrapT=xi,R.repeat.copy(C.repeat);let B=new Ct(new Fn(8.6,230),new _n({map:C,bumpMap:R,bumpScale:.055,roughness:.93}));B.rotation.x=-Math.PI/2,B.position.set(0,.012,-93),B.receiveShadow=!0,n.add(B);let Y=C.clone();Y.needsUpdate=!0,Y.repeat.set(.6,30);let D=new _n({map:Y,color:"#f2dfbf",roughness:.95});for(let F of[-1,1]){let P=new Ct(new Cn(2.7,.24,230),D);P.position.set(F*5.65,-.03,-93),P.receiveShadow=!0,n.add(P)}let X=[];x(X,0,-.3,-90,150,.3,240,"#c6b28e");for(let F of[-1.3,1.3])x(X,F,.023,-90,.12,.035,240,"#dfc9a7"),x(X,F-.09,.025,-90,.025,.04,240,"#9d8d75");S(X,n,!1);let Z=document.createElement("canvas");Z.width=512,Z.height=2048;let G=Z.getContext("2d");G.fillStyle="#3d4b5c",G.globalAlpha=.1;for(let F=0;F<4;F++){let P=F*512+200;G.beginPath(),G.moveTo(0,P),G.lineTo(270,P+125),G.lineTo(270,P+395),G.lineTo(0,P+270),G.fill()}G.globalAlpha=.12;for(let F=0;F<3;F++){let q=F*690+230;G.beginPath(),G.ellipse(155,q+95,110,55,.55,0,Math.PI*2),G.fill(),G.save(),G.translate(65,q),G.rotate(-.52),G.fillRect(0,0,13,165),G.restore()}let he=new En(Z),J=new An({map:he,transparent:!0,depthWrite:!1,opacity:.8}),re=[],ae=[["#f1c39e","#e8b28e"],["#f3ddbb","#ead1a5"],["#ed9f7e","#d79077"],["#eecda9","#d3b28c"],["#f3dfbd","#dfc5a1"],["#e9aa96","#d99d89"]];function Fe(F,P,q,W=1){m(F,P,1.45*W,q,.15*W,2.9*W,"#805335");for(let K=0;K<7;K++){let ee=K*2.4;M(F,"cyl",P+Math.cos(ee)*.3*W,2.2*W,q+Math.sin(ee)*.3*W,.08*W,1.5*W,.08*W,"#8a623e",Math.cos(ee)*.6,0,Math.sin(ee)*.6)}let $=["#579333","#76ab3d","#3f7d2c","#91b849","#6da43a","#a2bb52"];for(let K=0;K<1800;K++){let ee=p()*Math.PI*2,Ie=Math.cbrt(p()),Xe=(p()-.5)*2,pt=Math.sqrt(1-Xe*Xe)*Ie*1.25*W,ft=P+Math.cos(ee)*pt,qe=q+Math.sin(ee)*pt,v=3*W+Xe*Ie*1.05*W;M(F,"leafy",ft,v,qe,.095*W,.095*W,.17*W,$[K%$.length],p()*1.5,p()*6.28,p()*1.3)}}function $e(F,P,q,W=!1){m(F,P,.3,q,.31,.58,"#bb7148"),m(F,P,.58,q,.35,.11,"#df9661"),m(F,P,.64,q,.25,.025,"#514333");for(let $=0;$<7;$++){let K=$*2.4;A(F,P+Math.cos(K)*.18,.76+$%3*.09,q+Math.sin(K)*.18,.22,.22,.22,$%2?"#76a33b":"#4f8536"),W&&A(F,P+Math.cos(K)*.25,.93+$%3*.09,q+Math.sin(K)*.25,.09,.08,.09,$%2?"#f065a2":"#f6c34f")}}function te(F,P,q){m(F,P,1.9,q,.055,3.8,"#294a4b"),m(F,P,.17,q,.17,.32,"#314c4b"),w(F,P,3.55,q,.32,.5,.32,"#f7edc3");for(let W of[-.18,.18])for(let $ of[-.18,.18])x(F,P+W,3.55,q+$,.032,.56,.032,"#2f4c4d");x(F,P,3.88,q,.49,.09,.49,"#29484c"),M(F,"cone",P,4.02,q,.34,.23,.34,"#315050"),A(F,P,4.2,q,.055,.11,.055,"#29484c")}function Ce(F,P,q,W){for(let $=0;$<4;$++)x(F,P,.5,q-.57+$*.36,.7,.09,.28,"#876047");for(let $=0;$<3;$++)x(F,P+W*.32,.75+$*.15,q,.1,.1,1.4,"#a7774e");for(let $ of[-.5,.5])x(F,P,.25,q+$,.55,.48,.07,"#315151"),x(F,P+W*.31,.65,q+$,.07,1,.07,"#315151")}function Oe(F,P,q,W){let $=6.5+W*7%5,K=4.8,ee=8.1,Ie=P*(9.1+W%3*.14),Xe=P*(6.68+W%3*.14),pt=ae[W%ae.length];x(F,Ie,$/2,q,K,$,ee,pt[0]),x(F,Xe,.55,q,.18,1.1,ee,"#d9ba96");for(let qe=.18;qe<1;qe+=.27)for(let v=-3.8;v<4;v+=.9)x(F,Xe-P*.03,qe,q+v,.06,.018,.86,"#be9e77");x(F,Ie,$-.1,q,K+.35,.24,ee+.3,"#fff0d6"),x(F,Ie,$+.12,q,K+.45,.16,ee+.4,"#c77f54");for(let qe=-4;qe<=4;qe+=.32)m(F,Xe,$+.26,q+qe,.17,.48,W%2?"#bd6945":"#cf8252",0,Math.PI/2);x(F,Ie+P*.9,$+.65,q+1,1.1,1.4,.9,pt[1]),x(F,Ie+P*.9,$+1.37,q+1,1.3,.15,1.1,"#bb7651");for(let qe=0;qe<Math.floor(($-1.5)/2.25);qe++)for(let v=0;v<3;v++){let I=2.35+qe*2.25,V=q-2.7+v*2.65;x(F,Xe-P*.035,I,V,.12,1.5,1.06,"#fae9cd"),x(F,Xe-P*.11,I+.02,V,.08,1.26,.83,"#335b60"),x(F,Xe-P*.17,I+.02,V,.05,1.15,.035,"#c7d6c4"),x(F,Xe-P*.17,I+.02,V,.05,.035,.8,"#c7d6c4");for(let z of[-.64,.64]){x(F,Xe-P*.08,I,V+z,.12,1.37,.36,"#438c7d");for(let k=0;k<7;k++)x(F,Xe-P*.16,I-.53+k*.17,V+z,.07,.035,.31,"#2f7769")}if(x(F,Xe-P*.22,I-.8,V,.47,.13,1.4,"#fff1d2"),qe===1&&v===1&&W%2===0){x(F,Xe-P*.52,I-.86,V,1.2,.17,1.8,"#ead3ae");for(let z=-.8;z<=.8;z+=.2)x(F,Xe-P*1.05,I-.52,V+z,.04,.75,.04,"#325c56");x(F,Xe-P*1.05,I-.13,V,.05,.055,1.85,"#325c56");for(let z=0;z<9;z++)A(F,Xe-P*.98,I-.4,V-.7+z*.18,.14,.14,.14,z%2?"#d6558f":"#5c9537")}}x(F,Xe-P*.08,1.2,q,.08,2.1,3.7,"#396a6d");for(let qe of[-1.88,0,1.88])x(F,Xe-P*.17,1.2,q+qe,.12,2.25,.12,"#f9e6c9");x(F,Xe-P*.16,.2,q,.15,.15,3.9,"#e3c9a4");let ft=W%3===0?"#da765e":W%3===1?"#328d88":"#b4a354";for(let qe=0;qe<10;qe++){let v=q-2.02+qe*.45;w(F,Xe-P*.82,2.54,v,1.8,.14,.46,qe%2?"#fff0d2":ft,0,0,P*.12),w(F,Xe-P*1.65,2.34,v,.1,.36,.46,qe%2?"#fff0d2":ft)}if(W%3===0)for(let qe=0;qe<80;qe++){let v=q-3.45+Math.sin(qe*2.4)*.5,I=3+p()*3.8;M(F,"small",Xe-P*(.18+p()*.16),I,v,.12,.18,.16,qe%5===0?"#de5c99":qe%2?"#568b2f":"#7baa3d")}if(W%2===1){$e(F,P*5.2,q-2.8,!0);let qe=P*5.6;m(F,qe,.73,q+1.1,.5,.09,"#b78555"),m(F,qe,.38,q+1.1,.06,.7,"#3c5550");for(let v of[-.85,.85]){x(F,qe,.42,q+1.1+v,.53,.08,.5,"#a77b4e"),x(F,qe+P*.2,.7,q+1.1+v,.09,.54,.5,"#a77b4e");for(let I of[-.2,.2])x(F,qe+I,.2,q+1.1+v,.04,.4,.04,"#3c5550")}}}for(let F=0;F<2;F++){let P=[],q=new Dt;for(let $ of[-1,1]){for(let K=0;K<4;K++)Oe(P,$,-K*11-5,F*8+K+($>0?2:0));for(let K=0;K<3;K++){let ee=-K*15-10;Fe(P,$*5.35,ee,.92),$e(P,$*5.35,ee),te(P,$*4.65,ee+5.4)}Ce(P,$*5.4,-21,$);for(let K=0;K<44;K++)x(P,$*4.38,.095,-K*1.02,.25,.26,.96,K%3?"#e8d7b8":"#f7e8cd")}S(P,q,!0);let W=new Ct(new Fn(14,44),J);W.rotation.x=-Math.PI/2,W.position.set(0,.055,-22),q.add(W),q.position.z=-F*44,n.add(q),re.push({g:q,base:-F*44})}let Ye=new Vi().load("art/coast.jpg");Ye.colorSpace=Ht;let Re=new Ct(new Fn(270,152),new An({map:Ye,fog:!1,toneMapped:!1}));Re.position.set(-55,40,-155),n.add(Re);let Ve=new Dt,vt=[];for(let F of[-1,1])x(vt,F*5.3,2.7,0,1.3,5.4,1.9,"#d6c7a6"),x(vt,F*5.3,.3,0,1.7,.6,2.2,"#b9ad91");for(let F=0;F<22;F++){let P=F/22*Math.PI,q=(F+.99)/22*Math.PI,W=4.7,$=5.3,K=new Oi;K.moveTo(Math.cos(P)*W,Math.sin(P)*2.1+3.6),K.lineTo(Math.cos(P)*$,Math.sin(P)*2.6+3.6),K.lineTo(Math.cos(q)*$,Math.sin(q)*2.6+3.6),K.lineTo(Math.cos(q)*W,Math.sin(q)*2.1+3.6),K.closePath();let ee=new ls(K,{depth:1.6,bevelEnabled:!1});ee.translate(0,0,-.8);let Ie=new ot(F%2?"#e2d4b4":"#d8c7a5"),Xe=new Float32Array(ee.attributes.position.count*3);for(let pt=0;pt<Xe.length;pt+=3)Xe[pt]=Ie.r,Xe[pt+1]=Ie.g,Xe[pt+2]=Ie.b;ee.setAttribute("color",new Xt(Xe,3)),vt.push(ee)}x(vt,0,6.45,0,12,.5,2.1,"#e4d3b2");for(let F=-5.8;F<6;F+=.4)x(vt,F,7.1,-.7,.055,1.05,.06,"#305953");x(vt,0,7.65,-.7,12,.09,.09,"#315c57");for(let F of[-4,-1.8,1.8,4]){m(vt,F,6.95,-.2,.3,.4,"#bb7952");for(let P=0;P<5;P++)A(vt,F+(P-2)*.14,7.2,-.2,.19,.2,.2,P%2?"#dc669a":"#5d943e")}S(vt,Ve),n.add(Ve);let De,et={},ct=[],oe,fe,ye=e;function Le(F){if(y=!0,ye=F,De&&(n.remove(De),De.traverse(v=>{v.isMesh&&v.geometry.dispose()})),De=new Dt,De.scale.setScalar(1.16),n.add(De),et={},ct=[],oe=null,F==="courier"){n.remove(De);let v=Zd(n);De=v.hero,et=v.rig,ct=v.limbs,De.scale.setScalar(1.16),fe=new Ct(new ti(1.22,16,12),new An({color:"#83f1ee",transparent:!0,opacity:.15,wireframe:!0})),fe.position.y=.9,fe.visible=!1,De.add(fe),y=!1;return}let P=F==="courier",q=F==="fox",W=F==="cat",$=F==="bunny",K=F==="panda",ee=q?"#d87932":W?"#afa0d8":$?"#e8d4d0":"#f1eee1",Ie=K?"#35404a":"#4e3930",Xe="#fff0d6";function pt(v,I,V,z,k,le=De){let _e=new Dt;return _e.position.set(I,V,z),S(k,_e,!0),le.add(_e),et[v]=_e,_e}let ft=[];if(P){w(ft,0,.03,0,.62,.65,.4,"#109f9f"),A(ft,0,.34,.03,.35,.19,.3,"#0a888b"),A(ft,0,.36,.06,.28,.13,.24,"#1bb5b0"),w(ft,0,-.3,0,.55,.16,.39,"#0a7e82");for(let v of[-1,1])w(ft,v*.23,.04,.215,.065,.66,.055,"#574d37",0,0,v*-.08);w(ft,0,.02,.32,.48,.55,.23,"#e58028"),w(ft,0,.16,.45,.45,.2,.1,"#ffa634"),w(ft,0,-.1,.46,.37,.23,.08,"#f3932f"),x(ft,0,.14,.51,.1,.09,.035,"#6d5a39");for(let v of[-1,1])x(ft,v*.19,-.04,.49,.035,.35,.025,"#d47025")}else A(ft,0,0,0,.34,.43,.28,ee),A(ft,0,-.03,-.23,.23,.3,.055,K?"#fff":Xe),w(ft,0,.21,.02,.68,.14,.54,"#169a99"),w(ft,-.25,.02,.27,.12,.33,.08,"#20b9ad",.12,.1,-.2),w(ft,.08,.03,.25,.32,.37,.14,"#d99640");pt("body",0,P?1.02:.88,0,ft);let qe=[];if(P){A(qe,0,0,0,.28,.3,.25,"#d8986c"),A(qe,0,.08,.08,.31,.25,.26,"#4c2d20");for(let v=0;v<10;v++){let I=v*2.4;A(qe,Math.cos(I)*.23,.2+Math.sin(v)*.04,Math.sin(I)*.18,.13,.12,.14,v%2?"#5d3520":"#714227")}for(let v=0;v<5;v++)M(qe,"cone",-.2+v*.09,.34+v*.01,.04,.12,.28,.13,v%2?"#6e3e23":"#4c2d20",.35,.2,-.6);for(let v of[-1,1])A(qe,v*.278,-.02,0,.06,.09,.06,"#d49468")}else{A(qe,0,0,0,.4,.37,.32,ee),A(qe,0,-.08,-.26,.25,.17,.23,Xe),A(qe,0,-.03,-.46,.075,.055,.05,"#3c3432");for(let v of[-1,1])$?(A(qe,v*.19,.49,.01,.12,.44,.1,ee),A(qe,v*.19,.51,-.07,.06,.3,.035,"#d6a1a1")):K?A(qe,v*.31,.29,.01,.16,.17,.13,Ie):(M(qe,"cone",v*.27,.35,.01,.22,.43,.19,ee,0,Math.PI/4,v*-.1),M(qe,"cone",v*.27,.37,-.06,.12,.25,.08,"#f0c6ac",0,Math.PI/4,v*-.1)),A(qe,v*.2,.02,-.27,.055,.065,.025,"#2e3538")}pt("head",0,P?1.67:1.49,-.025,qe),P&&et.head.scale.setScalar(.84);for(let v of[-1,1]){let I=[],V=[],z=[],k=new Dt;if(k.position.set(v*(P?.17:.18),P?.74:.59,0),De.add(k),P){w(I,0,-.12,0,.26,.32,.29,"#37434b"),m(I,0,-.29,0,.09,.2,"#dca078"),m(V,0,-.12,0,.085,.28,"#dfa77d"),m(V,0,-.29,0,.09,.13,"#f4f0dc"),m(V,0,-.26,0,.095,.025,"#20a39e"),w(z,0,-.015,-.08,.235,.16,.39,"#fcf4df"),w(z,0,-.09,-.07,.25,.06,.41,"#d6cbb9"),w(z,0,.04,.015,.2,.08,.16,"#1c9c99");for(let at=0;at<3;at++)x(z,0,.07,-.06-at*.04,.14,.015,.017,"#fff6e2");for(let at=0;at<6;at++)w(z,0,-.124,-.24+at*.06,.17,.013,.035,at%2?"#9b9b92":"#b6b7ac")}else A(I,0,-.14,0,.13,.23,.14,K?Ie:ee),A(V,0,-.13,0,.105,.2,.11,K?Ie:ee),A(z,0,-.02,-.09,.15,.09,.23,K?Ie:Xe);S(I,k);let le=pt(`knee${v}`,0,-.32,0,V,k),_e=pt(`foot${v}`,0,-.32,0,z,le);ct.push({side:v,kind:"leg",g:k,knee:le,foot:_e});let xe=[],Ae=[],Ne=new Dt;Ne.position.set(v*(P?.35:.34),P?1.25:1.07,0),De.add(Ne),A(xe,0,-.13,0,.14,.23,.14,P?"#10a9a5":K?Ie:ee),A(Ae,0,-.12,0,.1,.19,.1,P?"#109b9d":K?Ie:ee),A(Ae,0,-.29,-.015,.09,.11,.085,P?"#dca079":K?Ie:Xe),S(xe,Ne);let it=pt(`elbow${v}`,0,-.28,0,Ae,Ne);ct.push({side:v,kind:"arm",g:Ne,knee:it})}if(q||W){let v=[];A(v,0,.18,.2,q?.22:.09,.38,.17,ee),A(v,0,.45,.33,q?.19:.09,.22,.15,q?Xe:ee),oe=pt("tail",0,.59,.17,v),oe.rotation.x=.7}else if($){let v=[];A(v,0,0,0,.18,.18,.18,"#fff7e9"),pt("tail",0,.61,.3,v)}fe=new Ct(new ti(1.22,16,12),new An({color:"#83f1ee",transparent:!0,opacity:.15,wireframe:!0})),fe.position.y=.9,fe.visible=!1,De.add(fe),y=!1}Le(e);let be=document.createElement("canvas");be.width=be.height=64;let nt=be.getContext("2d"),ze=nt.createRadialGradient(32,32,0,32,32,31);ze.addColorStop(0,"#00000070"),ze.addColorStop(.4,"#00000042"),ze.addColorStop(1,"#00000000"),nt.fillStyle=ze,nt.fillRect(0,0,64,64);let rt=new Ct(new Fn(1.8,1.45),new An({map:new En(be),transparent:!0,depthWrite:!1}));rt.rotation.x=-Math.PI/2,rt.position.y=.035,n.add(rt);let Ze=new Dt;n.add(Ze);let dt=[],O=[],Nt=[],je=null,wt=0,Te=null,Ut=null,He=new qt,Je=[],E=null;function b(F,P="#176b70",q=2.2,W=1){let $=document.createElement("canvas");$.width=384,$.height=192;let K=$.getContext("2d");K.fillStyle=P,K.beginPath(),K.roundRect(4,4,376,184,28),K.fill(),K.strokeStyle="#fff0d5",K.lineWidth=8,K.stroke(),K.fillStyle="#fff7df",K.font="bold 65px sans-serif",K.textAlign="center",K.textBaseline="middle",K.direction="rtl",K.fillText(F,192,102,350);let ee=new En($),Ie=new Mi(new ei({map:ee,depthTest:!0}));return Ie.scale.set(q,W,1),Ie}let H=document.createElement("canvas");H.width=H.height=128;{let F=H.getContext("2d"),P=F.createRadialGradient(64,64,4,64,64,62);P.addColorStop(0,"#ffffffee"),P.addColorStop(.4,"#ffffff66"),P.addColorStop(1,"#ffffff00"),F.fillStyle=P,F.fillRect(0,0,128,128)}let ue=new En(H);function ce(F,P,q){let W=new Mi(new ei({map:ue,color:P,transparent:!0,opacity:.85,depthWrite:!1,blending:hs}));W.scale.set(q*1.4,q*1.4,1),F.add(W)}function ge(F,P){let q=F.index?F.toNonIndexed():F,W=new ot(P),$=new Float32Array(q.attributes.position.count*3);for(let K=0;K<$.length;K+=3)$[K]=W.r,$[K+1]=W.g,$[K+2]=W.b;return q.setAttribute("color",new Xt($,3)),q}function we(F){let P=[];if(F==="board"){w(P,0,0,0,.36,.05,.8,"#e2692e"),w(P,0,.02,-.46,.31,.04,.16,"#e2692e",.5),w(P,0,.02,.46,.31,.04,.16,"#e2692e",-.5),w(P,0,.032,0,.32,.014,.66,"#2e3742"),w(P,0,-.032,0,.38,.016,.7,"#ffd166");for(let q of[-.27,.27]){m(P,0,-.06,q,.018,.4,"#aeb6bf",0,Math.PI/2);for(let W of[-.19,.19])m(P,W,-.075,q,.052,.045,"#f4f6f8",0,Math.PI/2),A(P,W,-.075,q,.026,.026,.026,"#31516c")}}else if(F==="magnet"){P.push(ge(new Bi(.3,.1,10,20,Math.PI),"#e5484d"));for(let q of[-.3,.3])x(P,q,-.13,0,.2,.22,.2,"#eef2f6"),x(P,q,-.03,0,.23,.05,.23,"#c2c9d2")}else if(F==="shoes"){w(P,0,-.22,.02,.36,.1,.68,"#f6f1e3"),A(P,0,-.06,-.12,.18,.15,.28,"#54b06a"),w(P,0,0,.2,.3,.3,.26,"#3f9856");for(let q=0;q<3;q++)x(P,0,.08-q*.05,-.1+q*.09,.2,.02,.05,"#fff6e2");for(let q of[-1,1])x(P,q*.27,.16,.22,.26,.035,.12,"#eef4ff",q*.55),x(P,q*.34,.28,.2,.18,.03,.09,"#eef4ff",q*.85)}else if(F==="shield")A(P,0,.12,0,.46,.36,.17,"#2f8f88"),M(P,"cone",0,-.24,0,.46,.52,.17,"#2f8f88",Math.PI),A(P,0,.14,.045,.38,.3,.13,"#6fe0d6"),M(P,"cone",0,-.19,.045,.38,.46,.13,"#6fe0d6",Math.PI),x(P,0,.08,.17,.07,.3,.05,"#fff6da"),x(P,0,.15,.17,.24,.07,.05,"#fff6da");else if(F==="pogo"){m(P,0,0,0,.05,.8,"#43b9ac");for(let q=0;q<5;q++)P.push(ge(new Bi(.11,.024,6,14).rotateX(Math.PI/2).translate(0,-.26+q*.09,0),"#ffcc61"));x(P,0,.48,0,.56,.07,.12,"#c17be0");for(let q of[-1,1])m(P,q*.3,.48,0,.05,.14,"#8a5aa8",0,Math.PI/2);x(P,0,-.42,0,.5,.05,.12,"#37414c"),m(P,0,-.5,0,.04,.12,"#9aa4ae")}else{for(let q of[-1,1])m(P,q*.17,.05,0,.14,.55,"#5fb4d9"),A(P,q*.17,.36,0,.14,.1,.14,"#e2543e"),M(P,"cone",q*.17,-.32,0,.1,.2,"#ffb13d",Math.PI),A(P,q*.17,-.44,0,.06,.09,.06,"#ff7b3d");x(P,0,.05,.16,.2,.4,.06,"#7b8794"),x(P,0,.05,.2,.12,.44,.03,"#59636d")}return S(P,Ze,!1)}function ne(F){let P=$=>{let K=document.createElement("canvas");K.width=K.height=256;let ee=K.getContext("2d");ee.fillStyle="#2c8a57",ee.beginPath(),ee.roundRect(6,6,244,244,34),ee.fill(),ee.strokeStyle="#dff3e2",ee.lineWidth=10,ee.stroke(),ee.fillStyle="#f7ffe9",ee.font="bold 150px sans-serif",ee.textAlign="center",ee.textBaseline="middle",$&&(ee.translate(256,0),ee.scale(-1,1)),ee.fillText(F,128,142);let Ie=new En(K);return Ie.colorSpace=Ht,Ie},q=new _n({color:"#226b44",roughness:.8}),W=new Ct(new Cn(.6,.6,.16),[q,q,q,q,new _n({map:P(0),roughness:.8}),new _n({map:P(1),roughness:.8})]);return W.receiveShadow=!0,Ze.add(W),W}function se(){let F=[];return F.push(ge(new Zs(1,0).scale(.24,.5,.24),"#ffd34d")),F.push(ge(new Zs(1,0).scale(.13,.28,.13).rotateY(Math.PI/4),"#fff3c4")),S(F,Ze,!1)}let me=new Dt;{let F=[];w(F,0,.17,0,.62,.075,1.36,"#e2692e"),w(F,0,.21,-.74,.54,.06,.26,"#e2692e",.45),w(F,0,.21,.74,.54,.06,.26,"#e2692e",-.45),w(F,0,.212,0,.58,.018,1.2,"#2e3742"),w(F,0,.14,0,.635,.028,1.28,"#ffd166");for(let P of[-.46,.46]){m(F,0,.095,P,.032,.74,"#aeb6bf",0,Math.PI/2);for(let q of[-.36,.36])m(F,q,.085,P,.088,.075,"#f4f6f8",0,Math.PI/2),A(F,q,.085,P,.042,.042,.042,"#31516c")}S(F,me,!0)}n.add(me),me.visible=!1;let L=new Dt;{let F=[];m(F,0,.35,0,.055,.75,"#65d8ca");for(let P=0;P<7;P++){let q=new Ct(new Bi(.13,.025,5,12),new _n({color:"#ffcc61"}));q.rotation.x=Math.PI/2,q.position.y=.05+P*.055,L.add(q)}x(F,0,.52,0,.68,.06,.2,"#d58bf2"),S(F,L,!0)}n.add(L),L.visible=!1;let ie=new Dt;{let F=[];m(F,0,0,0,.035,.5,"#6a5140"),w(F,0,-.25,.08,1,.075,.09,"#f5cb72"),S(F,ie,!0)}n.add(ie),ie.visible=!1;let Q=new Dt;{let F=[];A(F,0,.62,0,.42,.4,.62,"#3c414d"),A(F,0,.95,-.5,.3,.28,.3,"#454b58"),A(F,0,.88,-.78,.14,.12,.2,"#2c313b");for(let q of[-1,1])M(F,"cone",q*.16,1.18,-.5,.1,.22,.1,"#2c313b",-.2,0,q*.15);for(let q of[-1,1])m(F,q*.2,.3,.28,.09,.6,"#333845"),m(F,q*.2,.3,-.3,.09,.6,"#333845");M(F,"cone",0,.78,.62,.08,.4,.08,"#333845",1.1,0,0),S(F,Q,!0);let P=new An({color:"#ff453a",fog:!1});for(let q of[-1,1]){let W=new Ct(new ti(.05,8,6),P);W.position.set(q*.12,1,-.78),Q.add(W)}}Q.visible=!1,n.add(Q);let Me=[];function pe(F,P){let q=new Float32Array(F.attributes.position.count*3),W=new ot(P);for(let $=0;$<q.length;$+=3)q[$]=W.r,q[$+1]=W.g,q[$+2]=W.b;F.setAttribute("color",new Xt(q,3)),Me.push(F)}pe(new Fi(.3,.3,.09,24).rotateX(Math.PI/2),"#ffc526");for(let F of[-1,1])pe(new Fi(.247,.247,.014,24).rotateX(Math.PI/2).translate(0,0,F*.052),"#e99c12"),pe(new Bi(.278,.026,6,24).translate(0,0,F*.058),"#ffe477"),pe(new Cn(.17,.17,.02).rotateZ(Math.PI/4).translate(0,0,F*.071),"#ffde55");let Se=vh(Me),We=new _n({color:"#ffffff",vertexColors:!0,metalness:.12,roughness:.35,emissive:"#8c5d00",emissiveIntensity:.12});function ht(){for(let F of[...Ze.children])Ze.remove(F),F!==je&&F.geometry?.dispose();Ze.traverse(F=>{F.isSprite&&(F.material.map?.dispose(),F.material.dispose())}),dt=[],O=[],Nt=[],Je=[],E=null,je=null}function de(F){ht();let P=[];for(let W of F.obs){let $=W.lane*2.6,K=-W.x;if(W.type==="crate"){w(P,$,.63,K,1.62,1.26,1.18,"#a96f36");for(let ee=0;ee<5;ee++)x(P,$-.63+ee*.315,.63,K+.598,.29,1.08,.04,ee%2?"#c18a46":"#b67d3c"),x(P,$,.63,K-.598,.29,1.08,.04,"#b98140");for(let ee of[.09,1.17])w(P,$,ee,K+.64,1.67,.16,.12,"#d19a50");for(let ee of[-.73,.73])w(P,$+ee,.63,K+.65,.16,1.16,.13,"#cf9953");w(P,$,.63,K+.68,.16,1.67,.095,"#cd9750",0,0,-.87);for(let ee of[-.71,.71])for(let Ie of[.12,1.14])A(P,$+ee,Ie,K+.726,.032,.032,.012,"#6c6654");for(let ee=0;ee<4;ee++)x(P,$-.59+ee*.39,1.27,K,.37,.025,1.05,ee%2?"#bd8646":"#c28e4c")}else if(W.type==="barrier"){w(P,$,.51,K,1.95,.97,.62,"#ef7d33");for(let ee of[-.73,0,.73])w(P,$+ee,.52,K+.323,.23,.78,.025,"#fff0d2",0,0,-.48);for(let ee of[-.72,.72])w(P,$+ee,.08,K,.45,.16,.91,"#4c5556"),w(P,$+ee,.98,K,.2,.09,.2,"#55595a")}else if(W.type==="tunnel"){for(let ee of[-3.4,3.4]){for(let Ie of[-1,1])w(P,$+Ie,1.42,K+ee,.22,2.84,.36,"#317b7b"),w(P,$+Ie,.09,K+ee,.55,.17,.72,"#465e5c");w(P,$,1.9,K+ee,2.5,1.4,.5,"#d6814c");for(let Ie=-.85;Ie<1;Ie+=.42)w(P,$+Ie,1.9,K+ee+.26,.18,1.2,.025,"#ffe8bc",0,0,-.22)}w(P,$,1.9,K,2.44,1.5,6.6,"#cd7a4a"),w(P,$,2.72,K,2.6,.2,7.2,"#377d7b");for(let ee=-3;ee<=3;ee+=.75)w(P,$,1.18,K+ee,2.5,.07,.3,"#ffe8bc")}else if(W.type==="ramp"){w(P,$,.42,K,2,.5,3.4,"#c98d4b",.4),w(P,$,.74,K,1.72,.07,2.9,"#f2c069",.4);for(let ee=0;ee<3;ee++)w(P,$,.78,K+1-ee*.95,1.15,.06,.32,"#fff3d6",.4);for(let ee of[-.95,.95])w(P,$+ee,.5,K,.14,.66,3.2,"#8a5a2e",.4)}else if(W.type!=="mover"){for(let ee of[-1,1])w(P,$+ee,1.42,K,.22,2.84,.36,"#317b7b"),w(P,$+ee,.09,K,.55,.17,.72,"#465e5c");w(P,$,1.84,K,2.2,1.34,.48,"#d6814c");for(let ee=-.85;ee<1;ee+=.42)w(P,$+ee,1.84,K+.25,.18,1.15,.025,"#ffe8bc",0,0,-.22);w(P,$,2.57,K,2.44,.21,.59,"#377d7b")}}for(let W of F.routes||[]){let $=W.lane*2.6;if(W.type==="roof"){let ee=Math.atan(W.height/10);w(P,$,W.height/2,-W.start-5,2.4,.16,Math.hypot(10,W.height),"#e6bb80",ee),w(P,$,W.height-.1,-(W.start+W.end)/2,2.4,.22,W.end-W.start-20,"#e6bb80"),w(P,$,W.height/2,-W.end+5,2.4,.16,Math.hypot(10,W.height),"#e6bb80",-ee);for(let Ie=W.start+12;Ie<W.end-10;Ie+=8){w(P,$,W.height/2,-Ie,2.2,W.height,.8,"#c98968");for(let Xe of[-1,1])w(P,$+Xe*1.12,W.height+.3,-Ie,.08,.6,.1,"#287f80")}for(let Ie of[-1,1])w(P,$+Ie*1.12,W.height+.6,-(W.start+W.end)/2,.08,.08,W.end-W.start-20,"#287f80")}else{for(let ee of[W.start,W.end]){for(let Ie of[-1,1])m(P,$+Ie*1.15,2.5,-ee,.07,5,"#398087");w(P,$,5,-ee,2.6,.15,.15,"#398087")}w(P,$,5,-(W.start+W.end)/2,.05,.05,W.end-W.start,"#f2cc71")}let K=b(W.type==="roof"?"\u05D2\u05D2\u05D5\u05EA \u2191":"\u05E7\u05E4\u05D9\u05E6\u05D4 \u05DC\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF",W.type==="roof"?"#267e78":"#7d5ea4",2.6,1.1);K.position.set($,3.8,-W.start+8),Ze.add(K)}for(let W of F.pickups||[]){let $=W.kind==="letter"?ne(W.value):se();ce($,W.kind==="letter"?"#8fe6b4":"#ffd34d",W.kind==="letter"?1.3:1.5),$.position.set(W.lane*2.6,W.y+.45,-W.x),Je.push({p:W,g:$})}F.bestMarker>2&&(E=b("\u05D4\u05E9\u05D9\u05D0 \u05E9\u05DC\u05DA","#bb7734",2.5,.95),E.position.set(0,3.2,-F.bestMarker),Ze.add(E),w(P,0,.045,-F.bestMarker,7.6,.04,.15,"#ffd46a")),Te=S(P,Ze,!0),F.obs.forEach((W,$)=>{if(W.type!=="mover")return;let K=[],ee=W.id%2?"#e8a13c":"#5b8fd9";w(K,0,.62,0,1.7,.7,2.5,ee),w(K,0,1.18,-.1,1.5,.5,1.5,ee),w(K,0,1.2,.68,1.3,.34,.1,"#bfe3f0"),w(K,0,1.2,-.88,1.3,.34,.1,"#bfe3f0");for(let Xe of[-1,1]){w(K,Xe*.87,.85,-.1,.06,.4,1.2,"#20303a");for(let pt of[-1,1])m(K,Xe*.8,.34,pt*.8,.34,.2,"#2b2f33",0,Math.PI/2);w(K,Xe*.55,.6,1.27,.3,.18,.06,"#fff6c8")}w(K,0,.34,1.29,1.5,.24,.08,"#f5edd8");let Ie=S(K,Ze,!0);Ie.position.set(W.lane*2.6,0,-W.x),Nt.push({i:$,g:Ie})}),dt=F.coins,wt=dt.length,je=new Br(Se,We,wt),je.instanceMatrix.setUsage(th),je.frustumCulled=!1,Ze.add(je);for(let W of F.powers){let $=we(W.type);ce($,W.type==="shield"?"#7ff0e6":W.type==="magnet"?"#ff9dae":W.type==="shoes"?"#9ff28a":W.type==="board"?"#ffb35c":W.type==="pogo"?"#d3a1f2":"#9ad4ff",1.5),O.push({p:W,g:$})}let q=[];for(let W of[-4.1,4.1])m(q,W,2.9,-F.length,.07,5.8,"#f4e1b7");for(let W=0;W<12;W++)for(let $=0;$<2;$++)x(q,-3.85+W*.7,5.1+$*.55,-F.length,.7,.55,.06,(W+$)%2?"#315c66":"#fff3da");Ut=S(q,Ze,!1)}let Be=0,tt=0,Ee=0,yt=0,Ot=0,tn=0,dr=0,un=390,Mn=844,Sn={frames:0,frameMs:[],calls:0,triangles:0,dpr:t.getPixelRatio(),quality:"auto"},Ei=0;function ci(F,P){P!=="playing"||F<=0||(Sn.frameMs.push(F*1e3),Sn.frameMs.length>600&&Sn.frameMs.shift(),Sn.frames>45&&F>.035?Ei++:Ei=Math.max(0,Ei-1),Ei>25&&t.getPixelRatio()>1&&(t.setPixelRatio(1),t.setSize(un,Mn,!1),Sn.dpr=1,Sn.quality="adaptive-native",Ei=0))}function ji(){un=innerWidth,Mn=innerHeight,t.setSize(un,Mn,!1),s.aspect=un/Mn,s.fov=un>Mn?61:56,s.updateProjectionMatrix()}function Ea(F,P,q){let W=q==="playing",$=q==="menu";(W||$)&&(Be+=F);let K=P?.x??Be*2.5,ee=P?.lateral??0,Ie=P?.y??0;C.offset.y=K/230*30,R.offset.copy(C.offset),Y.offset.y=K/230*30;for(let le of re)le.g.position.z=((le.base+K+44)%88+88)%88-44;if(Ve.position.z=((-100+K+30)%240+240)%240-210,Ve.visible=Ve.position.z<-22,Ze.position.z=K,je){let le=0,_e=Be*2.6;for(let xe=0;xe<dt.length;xe++){let Ae=dt[xe],Ne=K-Ae.x;Ae.taken||Ne>8||Ne<-130||(He.position.set(Ae.lane*2.6,Ae.y,-Ae.x),He.rotation.set(0,_e,0),He.scale.setScalar(1),He.updateMatrix(),je.setMatrixAt(le++,He.matrix))}je.count=le,je.instanceMatrix.needsUpdate=!0}for(let{p:le,g:_e}of O)_e.position.set(le.lane*2.6,1+Math.sin(Be*3)*.12,-le.x),_e.rotation.y=Be*.9,_e.visible=!le.taken&&K-le.x<10&&K-le.x>-130;for(let{p:le,g:_e}of Je)_e.visible=!le.taken&&Math.abs(le.x-K)<125,_e.position.y=le.y+.45+Math.sin(Be*3)*.1,_e.rotation.y=Be*1.5;E&&(E.visible=K<-E.position.z+7);for(let le of Nt){let _e=P&&P.obs?P.obs[le.i].laneF:void 0;_e!==void 0&&(le.g.position.x=_e*2.6)}if(Q.visible=W&&!!P&&P.chaser>0,Q.visible){let le=P.chaser<4?.55:0;Q.position.set(ee*.72+.85,Math.abs(Math.sin(Be*9))*.22,2.45-le),Q.rotation.y=Math.sin(Be*9)*.06}let Xe=W?Math.max(0,K-dr):$?F*13:0;dr=K,(W||$)&&(tn+=Xe*1.2);let pt=Math.sin(tn),ft=Ie>.04,qe=P?.slide>0?1:0;Ot+=(qe-Ot)*(1-Math.exp(-F*20));let v=P?(P.lane*2.6-ee)*-.12:0;yt+=(v-yt)*(1-Math.exp(-F*14));let I=!!P&&P.vehicle==="board";De.position.set(ee,Ie+(I?.12:0)+(W||$?Math.sin(tn*2)*.024+.025:0),0),De.rotation.set(-Ot*.85-(P?.trickRotation||0),Math.sin(tn)*.025,yt),De.scale.set(1.16,1.16*(1-Ot*.38),1.16),et.body.rotation.x=-.1+(ft?-.06:0)+(I?-.13:0),et.body.rotation.y=pt*.075,et.head.rotation.y=-pt*.045,et.head.rotation.x=ft?-.05:Math.sin(tn*2)*.02;for(let le of ct)if(le.kind==="leg"){let _e=tn+(le.side>0?Math.PI:0);le.g.rotation.x=I?-.32*le.side:ft?-.45*le.side:Math.sin(_e)*.7,le.knee.rotation.x=I?-.55:ft?-.85:-Math.max(0,-Math.sin(_e))*1.15-.08,le.foot.rotation.x=I?.1:ft?-.3:-Math.max(0,Math.sin(_e))*.26}else le.g.rotation.x=P?.zip?3:ft?-.65:I?-.35:-pt*le.side*.58,le.g.rotation.z=le.side*(I?-.5:-.08),le.knee.rotation.x=(P?.zip?.12:I?.5:.88)+Math.max(0,-pt*le.side)*(I?0:.3);oe&&(oe.rotation.z=Math.sin(tn*.55)*.19,oe.rotation.x=.65+Math.sin(tn)*.07),fe.visible=!!P?.shield,De.visible=!(P?.invincible>0&&Math.floor(Be*14)%2),me.visible=!!P&&P.vehicle==="board",me.position.set(ee,Ie+.02,0),me.rotation.z=yt,L.visible=!!P&&P.vehicle==="pogo",L.position.set(ee,Ie-.35,0),ie.visible=!!P?.zip,ie.position.set(ee,4.75,.05),rt.position.x=ee,rt.position.y=(P?.ground||0)+.035,rt.scale.setScalar(Math.max(.5,1-Ie*.13)),rt.material.opacity=Math.max(.2,1-Ie*.2),Ee+=(ee*.88-Ee)*(1-Math.exp(-F*18));let V=Math.min(2,Ie*.6),z=P&&W?Math.min(1,Math.max(0,(Ie-.5)/2.2)):0;tt+=(z-tt)*(1-Math.exp(-F*(z>tt?9:5)));let k=tt*tt*(3-2*tt);s.position.set(Ee,(un>Mn?4:3.4)+V+k*(un>Mn?1.1:1.9),(un>Mn?7.4:6.3)+k*(un>Mn?.6:1.5)),s.lookAt(Ee*.85,.85+V+k*(un>Mn?1.3:2.5),un>Mn?-16-k*6:-18-k*10),t.render(n,s),Sn.calls=t.info.render.calls,Sn.triangles=t.info.render.triangles,Sn.frames++}return ji(),addEventListener("resize",ji),{renderer:t,scene:n,camera:s,makeHero:Le,populate:de,clearObjects:ht,resize:ji,render:Ea,sampleFrame:ci,stats:Sn}}function jd(i){let t=null,n=null,s=null,r=i!==!1;function a(){if(!r)return!1;try{if(!t){let u=window.AudioContext||window.webkitAudioContext;if(!u)return!1;t=new u,n=t.createGain(),n.gain.value=.8;let d=t.createDynamicsCompressor();n.connect(d),d.connect(t.destination),s=t.createBuffer(1,t.sampleRate,t.sampleRate);let f=s.getChannelData(0);for(let _=0;_<f.length;_++)f[_]=Math.random()*2-1}return t.state!=="running"&&t.resume(),!0}catch{return!1}}function o(u,d,f,_,T,g=0){let p=t.currentTime+g,M=t.createOscillator(),x=t.createGain();M.type=_,M.frequency.setValueAtTime(u,p),d!==u&&M.frequency.exponentialRampToValueAtTime(d,p+f),x.gain.setValueAtTime(1e-4,p),x.gain.exponentialRampToValueAtTime(T*2.6,p+.012),x.gain.exponentialRampToValueAtTime(1e-4,p+f),M.connect(x),x.connect(n),M.start(p),M.stop(p+f+.03)}function l(u,d,f,_,T="bandpass",g=0,p=1){let M=t.currentTime+g,x=t.createBufferSource(),y=t.createBiquadFilter(),w=t.createGain();x.buffer=s,y.type=T,y.Q.value=p,y.frequency.setValueAtTime(d,M),y.frequency.exponentialRampToValueAtTime(f,M+u),w.gain.setValueAtTime(1e-4,M),w.gain.exponentialRampToValueAtTime(_*2.6,M+Math.min(.04,u/3)),w.gain.exponentialRampToValueAtTime(1e-4,M+u),x.connect(y),y.connect(w),w.connect(n),x.start(M),x.stop(M+u+.03)}let c=!1,h={step(){c=!c,o(c?200:170,110,.06,"triangle",.22),l(.05,1800,900,.14,"bandpass")},move(){l(.09,900,2200,.45,"bandpass",0,1)},jump(){o(300,720,.18,"square",.07),o(450,900,.16,"sine",.1)},slide(){l(.28,2400,500,.22,"bandpass",0,1.5)},coin(){o(988,988,.09,"square",.06),o(1480,1480,.22,"square",.06,.07),o(1480,1480,.22,"sine",.1,.07)},power(){[523,659,784,1047].forEach((u,d)=>{o(u,u,.16,"triangle",.14,d*.07)})},break(){l(.35,3e3,300,.4,"lowpass"),o(500,120,.3,"sawtooth",.1)},warn(){o(880,880,.11,"square",.07),o(880,880,.11,"square",.07,.17),o(1100,1100,.14,"square",.08,.34)},launch(){l(.8,300,2200,.35,"bandpass",0,.8),o(140,300,.7,"sawtooth",.07)},dodge(){l(.35,2600,500,.28,"bandpass",0,1.2),o(700,350,.3,"sine",.07)},boom(){l(.7,2200,60,.8,"lowpass",0,.7),o(160,35,.6,"sawtooth",.2),o(90,30,.7,"sine",.35)},dead(){o(330,110,.5,"sawtooth",.12,.05),o(247,82,.6,"triangle",.14,.2)},won(){[523,659,784,1047,1319].forEach((u,d)=>{o(u,u,.28,"triangle",.16,d*.1),o(u*2,u*2,.2,"sine",.05,d*.1)})},combo(){o(660,660,.08,"square",.09),o(880,880,.08,"square",.09,.07),o(1320,1320,.12,"sine",.1,.14)},stumble(){l(.3,400,120,.5,"lowpass"),o(220,90,.35,"sawtooth",.16),o(150,70,.4,"triangle",.12,.1)},revive(){[392,523,659,784,1047].forEach((u,d)=>{o(u,u,.2,"triangle",.14,d*.08)})},ramp(){l(.4,500,2600,.3,"bandpass",0,1.2),o(280,760,.35,"sine",.1)},fly(){l(.6,400,1800,.25,"bandpass",0,.8),o(520,1040,.5,"sine",.09)},click(){o(600,500,.06,"square",.2)}};return{get enabled(){return r},setEnabled(u){r=!!u,!r&&t&&t.state==="running"?t.suspend():r&&a()},unlock(){a()},suspend(){try{t&&t.state==="running"&&t.suspend()}catch{}},play(u){if(!(!h[u]||!a()))try{h[u]()}catch{}}}}function Qd(i){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new En(e),r=(g,p=1,M=!1)=>new Mi(new ei({map:s,color:g,transparent:!0,opacity:p,blending:M?hs:Wi,depthWrite:!1,fog:!1})),a=new Dt;i.add(a);let o=[];for(let g=0;g<4;g++){let p=new Dt,M=r("#e5330a",.75),x=r("#ff8a1a",1),y=r("#ffe27a",1),w=[];M.scale.setScalar(3.4),x.scale.setScalar(2),y.scale.setScalar(.9),p.add(M,x,y);for(let A=0;A<5;A++){let m=r(A<2?"#ff7a12":"#d12a08",.7-A*.1);m.scale.setScalar(1.5-A*.2),m.position.z=-0,p.add(m),w.push(m)}p.visible=!1,a.add(p),o.push({gp:p,halo:M,core:x,hot:y,trail:w})}let l=new An({color:"#ff2a1f",side:On,depthTest:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),c=[];for(let g=0;g<3;g++){let p=new Ct(new Fn(2.2,46),l.clone());p.rotation.x=-Math.PI/2,p.position.set(0,.16,-24),p.renderOrder=5,p.visible=!1,a.add(p);let M=document.createElement("canvas");M.width=M.height=64;let x=M.getContext("2d");x.fillStyle="#ffdf3b",x.beginPath(),x.moveTo(32,5),x.lineTo(60,56),x.lineTo(4,56),x.closePath(),x.fill(),x.fillStyle="#b3200f",x.font="bold 40px Arial",x.textAlign="center",x.fillText("!",32,52);let y=new Mi(new ei({map:new En(M),transparent:!0,depthWrite:!1,fog:!1}));y.scale.setScalar(1.3),y.position.set(0,2,-9),y.visible=!1,a.add(y),c.push({m:p,sp:y})}let h=[];for(let g=0;g<48;g++){let p=r("#ffffff",0);p.visible=!1,a.add(p),h.push({s:p,vx:0,vy:0,vz:0,life:0,max:1,size:.3})}let u=0;function d(g,p,M,x){let y=g==="coin"?8:g==="boom"?22:g==="jet"?2:10;for(let w=0;w<y;w++){let A=h[u++%h.length],m=Math.random()*6.283,S=g==="boom"?2+Math.random()*5:1+Math.random()*2.2;A.s.position.set(p,M,x),A.vx=Math.cos(m)*S,A.vy=(g==="boom"?1.5:.8)*Math.random()*S+.5,A.vz=Math.sin(m)*S*.6,A.life=A.max=g==="boom"?.7+Math.random()*.4:.45,A.size=g==="boom"?.9+Math.random()*.7:.28,A.s.material.color.set(g==="coin"?"#ffe066":g==="jet"?Math.random()<.5?"#ffb14d":"#ff7a2a":Math.random()<.5?"#ff8a1f":"#ffd34d"),A.s.visible=!0}}let f=0;function _(g,p,M,x){x&&(f+=g);let y=M?M.list:[],w=0,A=0;for(let m of y)if(m.phase==="warn"&&A<3){let S=c[A++],N=(p.t-m.t0)/.9,C=.34+.1*Math.sin(f*22);S.m.position.x=m.lane*2.6,S.m.material.opacity=C*Math.min(1,N*3+.2),S.m.visible=!0,S.sp.position.x=m.lane*2.6,S.sp.position.y=1.9+Math.sin(f*14)*.12,S.sp.visible=!0}else if(m.phase==="fly"&&w<4){let S=o[w++],N=-(m.x-p.x),C=1+.12*Math.sin(f*40+w);S.gp.visible=N<4&&N>-60,S.gp.position.set(m.lane*2.6,.8+Math.sin(f*9)*.08,N),S.halo.scale.setScalar(3.4*C),S.core.scale.setScalar(2*C),S.trail.forEach((R,B)=>{R.position.z=-(B+1)*.85,R.position.y=.1*B*Math.sin(f*25+B),R.scale.setScalar((1.5-B*.2)*C)})}for(let m=A;m<3;m++)c[m].m.visible=!1,c[m].sp.visible=!1;for(let m=w;m<4;m++)o[m].gp.visible=!1;for(let m of h){if(m.life<=0){m.s.visible=!1;continue}m.life-=g,m.s.position.x+=m.vx*g,m.s.position.y+=m.vy*g,m.s.position.z+=m.vz*g,m.vy-=3*g;let S=Math.max(0,m.life/m.max);m.s.material.opacity=S,m.s.scale.setScalar(m.size*(.6+S*.6))}}function T(){for(let g of o)g.gp.visible=!1;for(let g of c)g.m.visible=!1,g.sp.visible=!1;for(let g of h)g.life=0,g.s.visible=!1}return{update:_,burst:d,reset:T}}var Ai={warn:.9,launchDist:36,approach:16,hitX:.8,hitLane:.95,clearY:.9};function ef(i,e=1){let t=i.n*7919+13+(i.seed|0)>>>0,n=()=>{t=t+1831565813>>>0;let l=t;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296},s=()=>(Math.max(3.4,7.2-i.n*.2)+n()*1.5)/Math.max(.2,e),r=i.n===1?9:5+n()*1.5,a=[],o={list:a,events:[],hits:0,dodges:0,spawned:0};return o.update=function(l,c){if(l.status!=="playing")return;let h=l.time,u=l.x+i.speed*(Ai.warn+Ai.launchDist/(i.speed+Ai.approach)),d=l.level.obs.some(_=>_.type!=="ramp"&&_.type!=="mover"&&_.lane===l.lane&&_.x>l.x-i.speed*.8-2&&_.x<u+i.speed*1.1+3),f=(i.routes||[]).some(_=>l.x>_.start-30&&l.x<_.end+20);h>=r&&(d||f)&&(r=h+.5),h>=r&&l.x<l.level.length-45&&(a.push({phase:"warn",t0:h,lane:l.lane,x:0}),o.spawned++,o.events.push({type:"fb-warn"}),r=h+s());for(let _=a.length-1;_>=0;_--){let T=a[_];if(T.phase==="warn"){h-T.t0>=Ai.warn&&(T.phase="fly",T.x=l.x+Ai.launchDist,o.events.push({type:"fb-launch"}));continue}T.x-=Ai.approach*c;let g=T.x-l.x;Math.abs(g)<Ai.hitX&&Math.abs(T.lane*2.6-l.lateral)<Ai.hitLane&&l.y<Ai.clearY&&l.invincible<=0?(a.splice(_,1),o.hits++,o.events.push({type:"fb-hit"}),l.hit?l.hit("fireball"):l.shield?(l.shield=0,l.invincible=1.4,l.hits++,l.events.push({type:"break"})):(l.status="dead",l.events.push({type:"dead"}))):g<-1.3&&(a.splice(_,1),o.dodges++,o.events.push({type:"fb-dodge"}))}},o.drain=()=>o.events.splice(0),o}var Nx=(i,e,t)=>Math.max(e,Math.min(t,i)),Yi=(i,e,t,n=0)=>(i=Math.floor(Number(i)),Number.isFinite(i)?Nx(i,e,t):n);function Ul(i){return i=i>>>0,()=>{i=i+1831565813>>>0;let e=i;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ar(i){let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}var $i={magnet:{name:"\u05DE\u05D2\u05E0\u05D8 \u05D0\u05E8\u05D5\u05DA",desc:"\u05D4\u05DE\u05D2\u05E0\u05D8 \u05E0\u05E9\u05D0\u05E8 \u05E4\u05E2\u05D9\u05DC \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF",costs:[120,260,480],values:[8,10,12,15],unit:"\u05E9\u05E0\u05F3"},shield:{name:"\u05DE\u05D2\u05DF \u05DE\u05EA\u05D7\u05D9\u05DC",desc:"\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DB\u05DC \u05E8\u05D9\u05E6\u05D4 \u05E2\u05DD \u05DE\u05D2\u05DF",costs:[200,520],values:[0,1,2],unit:"\u05DE\u05D2\u05E0\u05D9\u05DD"},coin:{name:"\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DB\u05E4\u05D5\u05DC\u05D9\u05DD",desc:"\u05D1\u05D5\u05E0\u05D5\u05E1 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E1\u05D5\u05E3 \u05DB\u05DC \u05E8\u05D9\u05E6\u05D4",costs:[150,350,700],values:[0,.1,.2,.3],unit:"%"},shoes:{name:"\u05E0\u05E2\u05DC\u05D9 \u05E7\u05E4\u05D9\u05E6\u05D4",desc:"\u05E0\u05E2\u05DC\u05D9 \u05D4\u05E7\u05E4\u05D9\u05E6\u05D4 \u05E0\u05DE\u05E9\u05DB\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF",costs:[140,300,560],values:[6,8,10,12],unit:"\u05E9\u05E0\u05F3"},flight:{name:"\u05D8\u05D9\u05E1\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4",desc:"\u05E7\u05D8\u05E2 \u05D4\u05D8\u05D9\u05E1\u05D4 \u05E0\u05DE\u05E9\u05DA \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF",costs:[160,340,620],values:[4,5,6,7],unit:"\u05E9\u05E0\u05F3"},revive:{name:"\u05D4\u05D7\u05D9\u05D9\u05D0\u05D4 \u05D6\u05D5\u05DC\u05D4",desc:"\u05D4\u05D7\u05D9\u05D9\u05D0\u05D4 \u05D0\u05D7\u05E8\u05D9 \u05E0\u05E4\u05D9\u05DC\u05D4 \u05E2\u05D5\u05DC\u05D4 \u05E4\u05D7\u05D5\u05EA",costs:[180,420],values:[60,40,25],unit:"\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA"}},Mh=Object.keys($i),or=(i,e)=>Yi(i.upgrades?.[e],0,$i[e].values.length-1),rr=(i,e)=>$i[e].values[or(i,e)],Sh=(i,e)=>{let t=or(i,e);return t>=$i[e].costs.length?null:$i[e].costs[t]};function Fl(i){return{magnetSeconds:rr(i,"magnet"),startShields:rr(i,"shield"),coinBonus:rr(i,"coin"),shoesSeconds:rr(i,"shoes"),flightSeconds:rr(i,"flight"),reviveCost:rr(i,"revive")}}function nf(i,e){let t=i.prog;if(!$i[e])return{ok:!1,reason:"unknown"};let n=Sh(t,e);return n===null?{ok:!1,reason:"max"}:i.coins>=n?(i.coins-=n,t.upgrades[e]=or(t,e)+1,{ok:!0,cost:n,level:t.upgrades[e]}):{ok:!1,reason:"coins"}}var bh=[{id:"coins_run",stat:"coins",scope:"run",text:i=>`\u05D0\u05E1\u05D5\u05E3 ${i} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA`,targets:[30,60,100],rewards:[25,50,90]},{id:"coins_total",stat:"coins",scope:"total",text:i=>`\u05D0\u05E1\u05D5\u05E3 ${i} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E1\u05DA \u05D4\u05DB\u05D5\u05DC`,targets:[150,400,900],rewards:[30,70,140]},{id:"dodge_fire",stat:"dodges",scope:"total",text:i=>`\u05D4\u05D7\u05DE\u05E5 ${i} \u05DB\u05D3\u05D5\u05E8\u05D9 \u05D0\u05E9`,targets:[5,12,25],rewards:[30,60,110]},{id:"jumps",stat:"jumps",scope:"total",text:i=>`\u05E7\u05E4\u05D5\u05E5 ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[25,60,120],rewards:[20,45,90]},{id:"slides",stat:"slides",scope:"total",text:i=>`\u05D4\u05D7\u05DC\u05E7 ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[15,40,80],rewards:[20,45,90]},{id:"powerups",stat:"powerups",scope:"total",text:i=>`\u05D0\u05E1\u05D5\u05E3 ${i} \u05DB\u05D5\u05D7\u05D5\u05EA`,targets:[3,8,16],rewards:[25,55,100]},{id:"combo",stat:"combo",scope:"run",text:i=>`\u05E8\u05E6\u05E3 \u05E0\u05E7\u05D9 \u05E9\u05DC ${i} \u05D4\u05EA\u05D7\u05DE\u05E7\u05D5\u05D9\u05D5\u05EA \u05D0\u05D5 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD`,targets:[3,5,8],rewards:[30,60,110]},{id:"wins",stat:"wins",scope:"total",text:i=>`\u05E1\u05D9\u05D9\u05DD ${i} \u05E9\u05DC\u05D1\u05D9\u05DD`,targets:[2,5,10],rewards:[40,90,160]},{id:"distance",stat:"distance",scope:"run",text:i=>`\u05E8\u05D5\u05E5 ${i} \u05DE\u05D8\u05E8\u05D9\u05DD \u05D1\u05E8\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA`,targets:[200,350,500],rewards:[25,55,100]},{id:"moving",stat:"moving",scope:"total",text:i=>`\u05D4\u05EA\u05D7\u05DE\u05E7 \u05DE-${i} \u05DE\u05DB\u05E9\u05D5\u05DC\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD`,targets:[4,10,20],rewards:[30,60,110]},{id:"flight",stat:"flights",scope:"total",text:i=>`\u05D8\u05D5\u05E1 ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[1,3,6],rewards:[30,70,120]},{id:"revive",stat:"revives",scope:"total",text:i=>`\u05D4\u05D7\u05D9\u05D9\u05D4 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[1,2,4],rewards:[30,60,100]}],Th=[...new Set(bh.map(i=>i.stat))],wh=i=>bh.find(e=>e.id===i),yh=3;function sf(i,e){let t=Ul(ar("m"+i.seq++)),n=bh.filter(a=>!e.includes(a.id)),s=n[Math.floor(t()*n.length)],r=Math.floor(t()*(1+Math.min(2,Math.floor(i.completed/4))));return{id:s.id,tier:r,progress:0}}var Ux=i=>{let e=wh(i.id);return{id:i.id,text:e.text(e.targets[i.tier]),target:e.targets[i.tier],reward:e.rewards[i.tier],progress:Math.min(i.progress,e.targets[i.tier]),scope:e.scope}},rf=i=>i.missions.map(Ux),tf=[{id:"rush",name:"\u05E8\u05D9\u05E6\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4",desc:"\u05D4\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1-12%",speedMul:1.12},{id:"rich",name:"\u05D2\u05E9\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA",desc:"\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05DD \u05DB\u05E4\u05D5\u05DC \u05D1\u05E8\u05D9\u05E6\u05D4 \u05D4\u05D9\u05D5\u05DE\u05D9\u05EA",coinMul:2},{id:"fiery",name:"\u05D9\u05D5\u05DD \u05D7\u05DD",desc:"\u05D9\u05D5\u05EA\u05E8 \u05DB\u05D3\u05D5\u05E8\u05D9 \u05D0\u05E9",fireMul:1.5},{id:"bare",name:"\u05D1\u05DC\u05D9 \u05DE\u05D2\u05DF",desc:"\u05DC\u05D0 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05E2\u05DD \u05DE\u05D2\u05DF",noStartShield:!0},{id:"long",name:"\u05DE\u05E8\u05EA\u05D5\u05DF",desc:"\u05DE\u05E1\u05DC\u05D5\u05DC \u05D0\u05E8\u05D5\u05DA \u05D1-20%",lengthMul:1.2}];function Ah(i){let e=Ul(ar("daily"+i)),t=tf[Math.floor(e()*tf.length)],n=3+Math.floor(e()*15),s=[.3,.4,.5][Math.floor(e()*3)];return{key:i,seed:ar("seed"+i),level:n,mod:t,goalRatio:s,reward:80}}var Fx="Asia/Jerusalem";function vn(i=new Date,e=Fx){return new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).format(i)}var af=i=>{let[e,t,n]=i.split("-").map(Number);return new Date(Date.UTC(e,t-1,n-1)).toISOString().slice(0,10)},of=(i,e)=>({done:i.daily.lastDone===e,streak:i.daily.lastDone===e||i.daily.lastDone===af(e)?i.daily.streak:0,best:i.daily.bestKey===e?i.daily.best:0});function Ol(i){let e=i&&typeof i=="object"?i:{},t={v:1,seq:Yi(e.seq,0,1e9),completed:Yi(e.completed,0,1e6),upgrades:{},missions:[],daily:{lastDone:typeof e.daily?.lastDone=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.daily.lastDone)?e.daily.lastDone:"",streak:Yi(e.daily?.streak,0,1e4),best:Yi(e.daily?.best,0,1e6),bestKey:typeof e.daily?.bestKey=="string"?e.daily.bestKey.slice(0,10):""},lifetime:{}};for(let n of Mh)t.upgrades[n]=or({upgrades:e.upgrades},n);for(let n of Array.isArray(e.missions)?e.missions:[])n&&wh(n.id)&&t.missions.length<yh&&!t.missions.some(r=>r.id===n.id)&&t.missions.push({id:n.id,tier:Yi(n.tier,0,2),progress:Yi(n.progress,0,1e7)});for(;t.missions.length<yh;)t.missions.push(sf(t,t.missions.map(n=>n.id)));for(let n of Th)t.lifetime[n]=Yi(e.lifetime?.[n],0,1e9);return t}var Ox={coin:"coins",jump:"jumps",slide:"slides",magnet:"powerups",shield:"powerups","fb-dodge":"dodges"};function lf(){let i={};for(let t of Th)i[t]=0;let e={stats:i,add(t,n=1){t in i&&(i[t]+=n)},max(t,n){t in i&&n>i[t]&&(i[t]=n)},event(t){let n=Ox[t&&t.type];n&&i[n]++},events(t){for(let n of t||[])e.event(n)}};return e}function cf(i,e,t={}){let n={...e};t.won&&(n.wins=(n.wins||0)+1),n.distance=Math.max(n.distance||0,Math.floor(t.distance||0));let s=[],r=0;for(let u=0;u<i.missions.length;u++){let d=i.missions[u],f=wh(d.id),_=f.targets[d.tier],T=n[f.stat]||0;f.scope==="run"?d.progress=Math.max(d.progress,T):d.progress+=T,d.progress>=_&&(s.push({id:d.id,text:f.text(_),reward:f.rewards[d.tier]}),r+=f.rewards[d.tier],i.completed++,i.missions[u]=null)}let a=i.missions.filter(Boolean),o=a.map(u=>u.id);for(i.missions=a;i.missions.length<yh;){let u=sf(i,o);o.push(u.id),i.missions.push(u)}for(let u of Th)i.lifetime[u]=Math.min(1e9,(i.lifetime[u]||0)+(u==="combo"||u==="distance"?0:n[u]||0));let l=Math.floor((n.coins||0)*Fl(i).coinBonus),c=0,h=!1;if(t.daily&&t.dateKey){let u=Ah(t.dateKey),d=n.coins||0;(i.daily.bestKey!==t.dateKey||d>i.daily.best)&&(i.daily.best=d,i.daily.bestKey=t.dateKey),t.won&&i.daily.lastDone!==t.dateKey&&d>=(t.goalCoins??0)&&(i.daily.streak=i.daily.lastDone===af(t.dateKey)?i.daily.streak+1:1,i.daily.lastDone=t.dateKey,c=u.reward+Math.min(i.daily.streak-1,6)*10,h=!0)}return{missions:s,missionCoins:r,coinBonus:l,dailyCoins:c,dailyDone:h,coins:r+l+c}}var Bl=(i,e)=>Math.ceil(e*i.goalRatio);var zx=1,Eh=75,hf=Object.freeze(["CITY","ROOF","JUMP","DASH","GLOW","STAR","ZOOM"]),va=Object.freeze([{target:5,coins:40},{target:15,coins:90},{target:30,coins:180}].map(Object.freeze)),ya=va.at(-1).target,Ma=(i,e=1e6)=>{let t=Math.floor(Number(i));return Number.isFinite(t)?Math.max(0,Math.min(e,t)):0},Ch=i=>typeof i=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(i)&&Number.isFinite(Date.parse(i+"T12:00:00Z"))&&new Date(i+"T12:00:00Z").toISOString().slice(0,10)===i,Sa=i=>Ch(i)?i:vn(),kx=i=>typeof i=="string"&&/^\d{4}-(0[1-9]|1[0-2])$/.test(i),df=i=>Math.max(1,Math.min(20,Ma(i,20)||1)),Rh=i=>hf[ar("word:"+i)%hf.length],ff=i=>({key:i,found:[],claimed:!1}),pf=i=>({key:i.slice(0,7),count:0,claimed:[]}),uf=i=>({distance:Ma(i?.distance),won:i?.won===!0});function zl(i){let e=i&&typeof i=="object"?i:{},t=Ch(e.word?.key)?e.word.key:"",n=kx(e.event?.key)?e.event.key:"",s=[...new Set((Array.isArray(e.word?.found)?e.word.found:[]).filter(c=>Number.isInteger(c)&&c>=0&&c<4))].sort(),r=Ma(e.event?.count,ya),a=[...new Set((Array.isArray(e.event?.claimed)?e.event.claimed:[]).filter(c=>va.some(h=>h.target===c&&r>=c)))].sort((c,h)=>c-h),o={v:zx,word:{key:t,found:t?s:[],claimed:!!t&&s.length===4&&e.word?.claimed===!0},event:{key:n,count:n?r:0,claimed:n?a:[]},best:{normal:{},daily:{}}};for(let c=1;c<=20;c++)e.best?.normal?.[c]&&(o.best.normal[c]=uf(e.best.normal[c]));let l=Object.entries(e.best?.daily&&typeof e.best.daily=="object"?e.best.daily:{}).filter(([c])=>/^\d{4}-\d{2}-\d{2}:\d{1,2}$/.test(c)&&Ch(c.slice(0,10))&&Number(c.slice(11))>=1&&Number(c.slice(11))<=20).sort(([c],[h])=>h.localeCompare(c)).slice(0,32);for(let[c,h]of l)o.best.daily[c]=uf(h);return o}function Ih(i,e=vn()){e=Sa(e);let t=zl(i),n=t.word.key===e?t.word:ff(e),s=t.event.key===e.slice(0,7)?t.event:pf(e),r=Rh(e),a=[...r].map((o,l)=>({id:"letter:"+l,char:o,index:l,found:n.found.includes(l)}));return{word:{key:e,text:r,letters:a,found:n.found.length,total:4,done:n.claimed,reward:Eh},event:{id:s.key,key:s.key,name:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E2\u05D9\u05E8",symbol:"\u2726",count:s.count,target:ya,done:s.count>=ya,milestones:va.map(o=>({...o,claimed:s.claimed.includes(o.target)})),next:va.find(o=>!s.claimed.includes(o.target))||null},best:t.best}}function mf(i,e=vn()){if(e=Sa(e),!i||!Number.isFinite(i.length)||i.length<80)return[];let t=Ul(ar("collect:"+e+":"+i.n+":"+(i.seed||0))),n=[],s=["letter","event","letter","event","letter","event","letter"],r=0,a=0,o=(l,c)=>!(i.routes||[]).some(h=>h.lane===c&&l>=h.start-5&&l<=h.end+5)&&!(i.obs||[]).some(h=>{let u=h.type==="tunnel"?Math.max(3.6,(h.w||7)/2):Math.max(1.6,(h.w||2)/2);return Math.abs(h.x-l)>u+5?!1:h.type==="mover"?c>=Math.min(h.mover?.a??h.lane,h.mover?.b??h.lane)&&c<=Math.max(h.mover?.a??h.lane,h.mover?.b??h.lane):c===h.lane});for(let l=0;l<s.length;l++){let c=24+(i.length-55)*l/7,h=Math.floor(t()*3),u=null;for(let _=0;_<=24&&!u;_+=2)for(let T of _===0?[1]:[1,-1]){let g=Math.round(c+_*T);if(!(g<18||g>i.length-18||n.some(p=>Math.abs(p.x-g)<13))){for(let p=0;p<3;p++){let M=(h+p)%3-1;if(o(g,M)){u={x:g,lane:M,y:.85};break}}if(u)break}}if(!u)continue;let d=s[l],f=d==="letter"?r++:a++;n.push({...u,id:d+":"+f,kind:d,index:f,value:d==="letter"?Rh(e)[f]:"\u2726",dateKey:e,eventKey:e.slice(0,7),taken:!1})}return n.sort((l,c)=>l.x-c.x)}var Gx=()=>({coins:0,message:"",wordDone:!1,eventRewards:[]});function gf(i,e,t=vn(),n={}){t=Sa(t);let s=Gx();if(n.zen||!i||!e||e.taken||e.dateKey!==t||!["letter","event"].includes(e.kind)||i.word?.key>t||i.event?.key>t.slice(0,7))return s;if(e.kind==="letter"){let r=e.index??Number(String(e.id).split(":")[1]);if(!Number.isInteger(r)||r<0||r>=4||e.value!==Rh(t)[r]||(i.word?.key!==t&&(i.word=ff(t)),e.taken=!0,i.word.found.includes(r)||i.word.claimed))return s;i.word.found.push(r),i.word.found.sort(),s.message="\u05D0\u05D5\u05EA \u05E0\u05D0\u05E1\u05E4\u05D4 \xB7 "+i.word.found.length+"/4",i.word.found.length===4&&(i.word.claimed=!0,s.coins=Eh,s.wordDone=!0,s.message="\u05D4\u05DE\u05D9\u05DC\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4! +"+Eh+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA")}else{if(e.eventKey!==t.slice(0,7)||(i.event?.key!==t.slice(0,7)&&(i.event=pf(t)),e.taken=!0,i.event.count>=ya))return s;i.event.count++,s.message="\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E2\u05D9\u05E8 \xB7 "+i.event.count+"/"+ya;for(let r of va)i.event.count>=r.target&&!i.event.claimed.includes(r.target)&&(i.event.claimed.push(r.target),s.coins+=r.coins,s.eventRewards.push({...r}));s.coins&&(s.message="\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E2\u05D9\u05E8! +"+s.coins+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA")}return s}function Ph(i,{level:e=1,daily:t=!1,dateKey:n=vn(),zen:s=!1}={}){if(s)return 0;let r=i?.best,a=df(e),o=Sa(n);return Ma((t?r?.daily?.[o+":"+a]:r?.normal?.[a])?.distance)}function _f(i,{level:e=1,daily:t=!1,distance:n=0,won:s=!1,dateKey:r=vn(),zen:a=!1}={}){if(a||!i)return{newBest:!1,previous:0,distance:0};let o={level:e,daily:t,dateKey:r},l=Ph(i,o),c=Ma(n),h=df(e),u=Sa(r);if(c<=l)return{newBest:!1,previous:l,distance:l};i.best||(i.best={normal:{},daily:{}});let d=t?i.best.daily??={}:i.best.normal??={};if(d[t?u+":"+h:h]={distance:c,won:s===!0},t){let f=Object.keys(d).sort().reverse();for(let _ of f.slice(32))delete d[_]}return{newBest:!0,previous:l,distance:c}}var ai=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),li=i=>(i=Number(i),Number.isFinite(i)?Math.max(0,Math.floor(i)):0),oi=i=>li(i).toLocaleString("he-IL"),Lh=i=>`<span class="coinicon">\u25C6</span> ${oi(i)}`;function xf(i=[]){return`<p class="eyebrow">\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA</p><h2>\u05D4\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05DC\u05DA</h2><div class="missions">${i.map(t=>{let n=Math.max(1,li(t.target)),s=Math.min(n,li(t.progress)),r=Math.round(s/n*100);return`<div class="mcard${s>=n?" mdone":""}"><b>${ai(t.text)}</b><div class="mbar" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${s}"><div class="mfill" style="width:${r}%"></div></div><div class="smallrow"><small>${oi(s)} / ${oi(n)}</small><span class="mreward">${Lh(t.reward)}</span></div></div>`}).join("")||'<p class="muted">\u05D0\u05D9\u05DF \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DB\u05E8\u05D2\u05E2.</p>'}</div><p class="note">\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05D4\u05D5\u05E9\u05DC\u05DE\u05D4 \u05DE\u05D5\u05D7\u05DC\u05E4\u05EA \u05D1\u05D0\u05D7\u05E8\u05EA, \u05D5\u05D4\u05E4\u05E8\u05E1 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05E7\u05D5\u05E4\u05D4 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E8\u05D9\u05E6\u05D4.</p>`}function vf(i=[],e=0){let t=i.map(n=>{let s=Math.max(1,li(n.max)),r=Math.min(s,li(n.level)),a=n.cost===null||n.cost===void 0||r>=s,o=Array.from({length:s},(h,u)=>`<i class="pip${u<r?" on":""}"></i>`).join(""),l=n.nextValue!==void 0&&!a?` \xB7 \u05D4\u05D1\u05D0: ${ai(n.nextValue)} ${ai(n.unit||"")}`:"",c=a||!n.affordable?" disabled":"";return`<div class="shopitem"><div class="info"><b>${ai(n.name)}</b><small>${ai(n.desc)}${l}</small><div class="pips" aria-label="\u05E8\u05DE\u05D4 ${r} \u05DE\u05EA\u05D5\u05DA ${s}">${o}</div></div><button class="buy" data-upgrade="${ai(n.id)}"${c}>${a?"\u05DE\u05DC\u05D0":"\u25C6 "+oi(n.cost)}</button></div>`}).join("");return`<button class="quiet" id="back" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD</p><h2>\u05D7\u05D9\u05D6\u05D5\u05E7 \u05D4\u05DB\u05D5\u05D7\u05D5\u05EA</h2><span class="wallet">${Lh(e)} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</span><div class="shoplist">${t}</div><p class="note">\u05D0\u05D9\u05DF \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D1\u05DB\u05E1\u05E3 \u05D0\u05DE\u05D9\u05EA\u05D9. \u05D4\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8.</p>`}function yf({modName:i="",done:e=!1,streak:t=0}={}){let n=li(t)>1?` \xB7 \u{1F525} ${li(t)}`:"";return`<button class="secondary dailychip" id="daily"><b>\u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D9\u05D5\u05DE\u05D9</b><small>${e?"\u05D4\u05D5\u05E9\u05DC\u05DD \u05D4\u05D9\u05D5\u05DD \u2713":ai(i)}${n}</small></button>`}function Mf({info:i={},goalCoins:e=0,reward:t=0,status:n={}}={}){let s=i.mod||{},r=!!n.done;return`<button class="quiet" id="back" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E1\u05DC\u05D5\u05DC \u05DC\u05DB\u05D5\u05DC\u05DD, \u05D4\u05D9\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3</p><h2>\u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D9\u05D5\u05DE\u05D9</h2><p class="subtitle">\u05E9\u05DC\u05D1 ${li(i.level)} \xB7 ${ai(s.name)}</p><p class="muted">${ai(s.desc)}</p><div class="stats"><div><b>${oi(e)}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DC\u05E1\u05D9\u05D5\u05DD</small></div><div><b>+${oi(t)}</b><small>\u05E4\u05E8\u05E1 (\u05E4\u05E2\u05DD \u05D1\u05D9\u05D5\u05DD)</small></div></div><div class="stats"><div><b>${li(n.streak)}</b><small>\u05D9\u05DE\u05D9\u05DD \u05D1\u05E8\u05E6\u05E3</small></div><div><b>${oi(n.best)}</b><small>\u05D4\u05E9\u05D9\u05D0 \u05E9\u05DC \u05D4\u05D9\u05D5\u05DD</small></div></div>${r?'<p class="note">\u05DB\u05D1\u05E8 \u05E7\u05D9\u05D1\u05DC\u05EA \u05D0\u05EA \u05D4\u05E4\u05E8\u05E1 \u05D4\u05D9\u05D5\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05D7\u05E7 \u05E9\u05D5\u05D1 \u05DC\u05DB\u05D9\u05E3, \u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1 \u05E0\u05D5\u05E1\u05E3. \u05DE\u05D7\u05E8 \u05D9\u05D7\u05DB\u05D4 \u05D0\u05EA\u05D2\u05E8 \u05D7\u05D3\u05E9.</p>':""}<button class="primary" id="dailyplay">${r?"\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E9\u05D5\u05D1":"\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DC\u05D0\u05EA\u05D2\u05E8"}</button><p class="note">\u05D4\u05D0\u05EA\u05D2\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D7\u05E6\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC.</p>`}function Sf({missions:i=[],coinBonus:e=0,dailyCoins:t=0,dailyDone:n=!1}={}){let s=[];for(let r of i)s.push(`<div class="resline">\u2713 ${ai(r.text)} <span class="mreward">+${oi(r.reward)}</span></div>`);return li(e)&&s.push(`<div class="resline">\u05D1\u05D5\u05E0\u05D5\u05E1 \u05E9\u05D3\u05E8\u05D5\u05D2 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA <span class="mreward">+${oi(e)}</span></div>`),n&&s.push(`<div class="resline">\u{1F525} \u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D9\u05D5\u05DE\u05D9 \u05D4\u05D5\u05E9\u05DC\u05DD <span class="mreward">+${oi(t)}</span></div>`),s.length?`<div class="res">${s.join("")}</div>`:""}function bf(i){return`<div class="reviveoffer"><p class="eyebrow">\u05E2\u05D5\u05D3 \u05D4\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA \u05D0\u05D7\u05EA</p><h2>\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DE\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E7\u05D5\u05DD?</h2><p class="subtitle">${Lh(i)} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \xB7 \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4</p><button class="primary" id="revive">\u05DE\u05D7\u05D9\u05D9\u05DD</button><button class="secondary" id="norevive">\u05DC\u05D0, \u05EA\u05D5\u05D3\u05D4</button></div>`}var{Run:Wx,level:wf,CHARS:Ta}=window.RunnerEngine,lt=i=>document.getElementById(i),Ki=lt("scene"),cr=lt("panel"),$l=lt("overlay");function Af(i){let e=Ta.find(s=>s.id===i),t=e.color,n=i!=="courier";return`<svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true"><rect x="1" y="1" width="46" height="46" rx="16" fill="${t}" opacity=".18"/>${n?i==="bunny"?`<ellipse cx="17" cy="12" rx="5" ry="10" fill="${t}"/><ellipse cx="31" cy="12" rx="5" ry="10" fill="${t}"/>`:`<path d="M9 24L8 6L23 18L40 6L39 25Z" fill="${i==="panda"?"#44505b":t}"/>`:""}<ellipse cx="24" cy="27" rx="17" ry="15" fill="${n?t:"#f0bd93"}"/>${n?"":'<path d="M7 24C4 4 38 5 41 22L28 17L10 24" fill="#624437"/>'}<ellipse cx="24" cy="32" rx="10" ry="7" fill="#fff1dc"/><circle cx="18" cy="26" r="2" fill="#384554"/><circle cx="30" cy="26" r="2" fill="#384554"/><path d="M21 31Q24 35 27 31" fill="#384554"/></svg>`}var Xx=location.search.includes("autopause=0"),Ef="rulan-runner-v1";var Ue={coins:0,unlocked:1,character:"courier",owned:["courier","fox"],best:{},soundOn:!0,soundNotice:!1,prog:Ol(null),collections:zl(null)},Gl=!0;try{let i=JSON.parse(localStorage.getItem(Ef)||"null");if(i){Ue.coins=Math.max(0,Math.min(1e8,Number(i.coins)||0)),Ue.unlocked=Math.max(1,Math.min(20,Math.floor(Number(i.unlocked)||1))),Ue.owned=Ta.filter(e=>e.cost===0||Array.isArray(i.owned)&&i.owned.includes(e.id)).map(e=>e.id),Ue.character=Ue.owned.includes(i.character)?i.character:"courier",Ue.soundOn=i.soundOn!==!1,i.soundOn===void 0&&i.sound===!1&&(Ue.soundNotice=!0);for(let e=1;e<=20;e++){let t=i.best?.[e];t&&Number.isFinite(t.stars)&&Number.isFinite(t.coins)&&(Ue.best[e]={stars:Math.min(3,Math.max(0,t.stars)),coins:Math.max(0,t.coins)})}Ue.prog=Ol(i.prog),Ue.collections=zl(i.collections)}}catch{Gl=!1,Ue.prog=Ol(null)}function _s(){try{localStorage.setItem(Ef,JSON.stringify(Ue)),Gl=!0}catch{Gl=!1}}var ms=Kd(Ki,Ue.character),{renderer:Vl,scene:Hl,camera:_S,makeHero:qx,populate:Cf,clearObjects:Yx}=ms,j=null,Et="menu",Qt=1,Dh=!1;var wa=0,gs=0;var hn=null,Zt=null,en=!1,ba="",Wl=[],Xl=0,lr=Fl(Ue.prog);function Pt(i){lt("toast").textContent=i,lt("toast").classList.add("show"),clearTimeout(Pt.timer),Pt.timer=setTimeout(()=>lt("toast").classList.remove("show"),2400)}var hr=jd(Ue.soundOn),Wt=i=>hr.play(i),Aa=null,Nh=0,Zi=Qd(Hl),Tf=document.getElementById("flash");function Rf(i){Ue.soundOn=i,hr.setEnabled(i),_s();let e=lt("mute");e&&(e.textContent=i?"\u{1F50A}":"\u{1F507}"),i&&hr.play("click")}function Pn(i){$l.hidden=!1,cr.innerHTML=i,cr.scrollTop=0}var kh=()=>`<span class="wallet"><span class="coinicon">\u25C6</span> ${Ue.coins.toLocaleString("he-IL")} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</span>`;function Tt(i,e){lt(i)?.addEventListener("click",e)}function Ln(){Aa=null,Zi.reset(),Hl.fog.color.setHex(12182757),Vl.setClearColor(12182757),Et="menu",j=null,lt("hud").hidden=lt("controls").hidden=!0,Yx(),Cf(wf(1)),Pn(`<p class="eyebrow">CITY RUNNER</p><h1>\u05E8\u05D0<span>\u05E0\u05E8</span></h1><p class="subtitle">\u05D4\u05E2\u05D9\u05E8 \u05D4\u05D9\u05D0 \u05DE\u05D2\u05E8\u05E9 \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E9\u05DC\u05DA.<br>\u05E8\u05E6\u05D9\u05DD, \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05D5\u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05DC\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4 \u05D4\u05D1\u05D0\u05D4.</p><div class="previewchip">${Af(Ue.character)} ${Ta.find(i=>i.id===Ue.character).name}</div><br>${kh()}<button class="primary" id="play">\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DC\u05E8\u05D9\u05E6\u05D4 \xB7 \u05E9\u05DC\u05D1 ${Ue.unlocked}</button><div class="twocol"><button class="secondary" id="levels">\u05D1\u05D7\u05D9\u05E8\u05EA \u05E9\u05DC\u05D1</button><button class="secondary" id="characters">\u05D4\u05D3\u05DE\u05D5\u05D9\u05D5\u05EA \u05E9\u05DC\u05D9</button></div>${yf({modName:kl().info.mod.name,done:kl().status.done,streak:kl().status.streak})}<div class="twocol"><button class="secondary" id="missions">\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA</button><button class="secondary" id="upgrades">\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD</button></div><div class="twocol"><button class="secondary" id="zen">\u2601 \u05E8\u05D9\u05E6\u05EA \u05D6\u05DF</button><button class="secondary" id="collections">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D5\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05E2\u05D9\u05E8</button></div><div class="smallrow"><a href="../">\u2302 \u05DB\u05DC \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD</a><button class="quiet" id="help">\u05D0\u05D9\u05DA \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD?</button><button class="quiet" id="sound">\u05E6\u05DC\u05D9\u05DC ${Ue.soundOn?"\u05E4\u05D5\u05E2\u05DC":"\u05DB\u05D1\u05D5\u05D9"}</button></div>${Gl?"":'<p class="note">\u05D4\u05E9\u05DE\u05D9\u05E8\u05D4 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA \u05D0\u05D9\u05E0\u05D4 \u05D6\u05DE\u05D9\u05E0\u05D4 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D6\u05D4.</p>'}`),Tt("play",()=>Ji(Ue.unlocked)),Tt("zen",()=>Ji(Ue.unlocked,{zen:!0})),Tt("collections",$x),Tt("levels",If),Tt("characters",Lf),Tt("help",Kx),Tt("daily",Jx),Tt("missions",Zx),Tt("upgrades",Pf),Tt("sound",()=>{Rf(!Ue.soundOn),Ln()})}function $x(){Et="menu";let i=Ih(Ue.collections,vn());Pn('<p class="eyebrow">\u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05E2\u05D9\u05E8</p><h2>\u05E2\u05D5\u05D3 \u05E1\u05D9\u05D1\u05D4 \u05DC\u05E8\u05D5\u05E5</h2><div id="collectiondetails"></div><p class="note">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA \u05D5\u05E1\u05DE\u05DC\u05D9 \u05D0\u05D9\u05E8\u05D5\u05E2 \u05E1\u05D2\u05D5\u05DC\u05D9\u05DD \u05E0\u05DE\u05E6\u05D0\u05D9\u05DD \u05D1\u05DE\u05E1\u05DC\u05D5\u05DC. \u05D4\u05E4\u05E8\u05E1\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD, \u05D1\u05DC\u05D9 \u05D4\u05D2\u05E8\u05DC\u05D5\u05EA. \u05D1\u05DE\u05E6\u05D1 \u05D6\u05DF \u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D0\u05D5 \u05E9\u05D9\u05D0\u05D9\u05DD.</p><button class="primary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>'),lt("collectiondetails").innerHTML=`<div class="res"><h3>\u05E6\u05D9\u05D3 \u05D4\u05DE\u05D9\u05DC\u05D4 \u05D4\u05D9\u05D5\u05DE\u05D9\u05EA</h3><div class="wordletters" dir="ltr">${i.word.letters.map(e=>`<span class="letter ${e.found?"found":""}">${e.char}</span>`).join("")}</div><p>${i.word.done?"\u05D4\u05DE\u05D9\u05DC\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4!":i.word.found+" \u05DE\u05EA\u05D5\u05DA 4 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA"} \xB7 ${i.word.reward} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</p><small>\u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D7\u05E6\u05D5\u05EA \u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC. \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05E9\u05DB\u05D1\u05E8 \u05D0\u05E1\u05E4\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5\u05EA.</small></div><div class="res"><h3>\u2726 ${i.event.name}</h3><p>\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05D7\u05D5\u05D3\u05E9 \xB7 ${i.event.count} \u05DE\u05EA\u05D5\u05DA ${i.event.target} \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD</p>${i.event.milestones.map(e=>`<p>${e.claimed?"\u2713":"\u2606"} ${e.target} \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD = ${e.coins} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</p>`).join("")}<small>\u05E4\u05E8\u05E1 \u05E7\u05D1\u05D5\u05E2 \u05DC\u05DB\u05DC \u05D9\u05E2\u05D3, \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05D7\u05D5\u05D3\u05E9.</small></div>`,Tt("back",Ln)}function If(){Et="menu";let i="";for(let e=1;e<=20;e++)i+=`<button data-level="${e}" ${e>Ue.unlocked?"disabled":""} class="${e===Ue.unlocked?"current":""}">${e}<small>${Ue.best[e]?"\u2605".repeat(Ue.best[e].stars):e<=Ue.unlocked?"\u05E4\u05EA\u05D5\u05D7":"\u05E0\u05E2\u05D5\u05DC"}</small></button>`;Pn(`<p class="eyebrow">\u05D4\u05DE\u05E1\u05E2 \u05D1\u05E2\u05D9\u05E8</p><h2>20 \u05E9\u05DC\u05D1\u05D9\u05DD. \u05E7\u05D3\u05D9\u05DE\u05D4!</h2><p class="muted">\u05D4\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05D2\u05D3\u05DC\u05D9\u05DD \u05E2\u05DD \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD.</p><div class="levelgrid">${i}</div><button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4</button>`),cr.querySelectorAll("[data-level]").forEach(e=>e.onclick=()=>Ji(Number(e.dataset.level))),Tt("back",Ln)}function kl(){let i=vn(),e=Ah(i);return{key:i,info:e,status:of(Ue.prog,i)}}function Zx(){Et="menu",Pn(xf(rf(Ue.prog))+'<button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>'),Tt("back",Ln)}function Pf(){Et="menu";let i=Mh.map(e=>{let t=$i[e],n=or(Ue.prog,e),s=Sh(Ue.prog,e);return{id:e,name:t.name,desc:t.desc,unit:t.unit,level:n,max:t.values.length-1,cost:s,affordable:s!==null&&Ue.coins>=s,nextValue:s!==null?t.unit==="%"?Math.round(t.values[n+1]*100):t.values[n+1]:void 0}});Pn(vf(i,Ue.coins)),cr.querySelectorAll("[data-upgrade]").forEach(e=>e.onclick=()=>{let t=nf(Ue,e.dataset.upgrade);t.ok?(_s(),Wt("coin"),Pt("\u05D4\u05E9\u05D3\u05E8\u05D5\u05D2 \u05E0\u05E7\u05E0\u05D4!")):Pt(t.reason==="coins"?"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E2\u05D3\u05D9\u05D9\u05DF":"\u05DB\u05D1\u05E8 \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5"),Pf()}),Tt("back",Ln)}var Gh=i=>i.coins.filter(e=>!e.air).length;function Jx(){Et="menu";let{info:i,status:e}=kl(),t=wf(i.level,{seed:i.seed,speedMul:i.mod.speedMul,lengthMul:i.mod.lengthMul});Pn(Mf({info:i,goalCoins:Bl(i,Gh(t)),reward:i.reward,status:e})),Tt("back",Ln),Tt("dailyplay",()=>Ji(i.level,{daily:i}))}function Lf(){Et="menu",Pn(`<button class="quiet" id="close" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05DC\u05E8\u05D9\u05E6\u05D4</p><h2>\u05E2\u05DD \u05DE\u05D9 \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05D4\u05D9\u05D5\u05DD?</h2>${kh()}<p class="muted">\u05D4\u05E9\u05DC\u05D9\u05D7 \u05D5\u05D4\u05E9\u05D5\u05E2\u05DC \u05DB\u05D1\u05E8 \u05E9\u05DC\u05DA.<br>\u05DC\u05DB\u05DC \u05D3\u05DE\u05D5\u05EA \u05D9\u05DB\u05D5\u05DC\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05DE\u05E9\u05DC\u05D4.</p><div class="shoplist">${Ta.map(i=>`<div class="shopitem"><div class="charicon">${Af(i.id)}</div><div class="info"><b>${i.name}</b><small>${i.abilityText}</small><small>${Ue.owned.includes(i.id)?"\u05E4\u05EA\u05D5\u05D7 \u05DC\u05DE\u05E9\u05D7\u05E7":i.cost+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05E0\u05D0\u05E1\u05E4\u05D5 \u05D1\u05DE\u05E9\u05D7\u05E7"}</small></div><button class="buy" data-char="${i.id}" ${Ue.character===i.id||!Ue.owned.includes(i.id)&&Ue.coins<i.cost?"disabled":""}>${Ue.character===i.id?"\u05E0\u05D1\u05D7\u05E8":Ue.owned.includes(i.id)?"\u05DC\u05D1\u05D7\u05D5\u05E8":"\u25C6 "+i.cost}</button></div>`).join("")}</div><button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="note">\u05D0\u05D9\u05DF \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D1\u05DB\u05E1\u05E3 \u05D0\u05DE\u05D9\u05EA\u05D9.</p>`),cr.querySelectorAll("[data-char]").forEach(i=>i.onclick=()=>{let e=Ta.find(t=>t.id===i.dataset.char);if(!Ue.owned.includes(e.id)){if(Ue.coins<e.cost)return;Ue.coins-=e.cost,Ue.owned.push(e.id),Pt(e.name+" \u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4!")}Ue.character=e.id,_s(),qx(e.id),Lf()}),Tt("back",Ln),Tt("close",Ln)}function Kx(){Pn('<h2>\u05E8\u05E6\u05D9\u05DD \u05D1\u05E7\u05DC\u05D5\u05EA</h2><div class="help"><p>\u05D4\u05E8\u05D9\u05E6\u05D4 \u05E7\u05D3\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.</p><p>\u2194 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05E9\u05DE\u05D0\u05DC\u05D4 \u05D0\u05D5 \u05D9\u05DE\u05D9\u05E0\u05D4: \u05D4\u05D7\u05DC\u05E4\u05EA \u05E0\u05EA\u05D9\u05D1.<br>\u2191 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DE\u05E2\u05DC\u05D4: \u05E7\u05E4\u05D9\u05E6\u05D4 \u05DE\u05E2\u05DC \u05D0\u05E8\u05D2\u05D6\u05D9\u05DD \u05D5\u05DE\u05D7\u05E1\u05D5\u05DE\u05D9\u05DD.<br>\u2193 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DE\u05D8\u05D4: \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DE\u05EA\u05D7\u05EA \u05DC\u05E9\u05E2\u05E8\u05D9\u05DD.<br>\u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05DE\u05E2\u05D8 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05E2\u05E8. \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05DE\u05D9\u05D3 \u05D5\u05E0\u05DE\u05E9\u05DB\u05EA \u05E2\u05D3 \u05E9\u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5.</p><p>\u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D1\u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD \u05E9\u05E2\u05DC \u05D4\u05DE\u05E1\u05DA.<br>\u05D1\u05DE\u05D7\u05E9\u05D1: \u05D7\u05E6\u05D9\u05DD \u05D0\u05D5 WASD, \u05D5\u05E8\u05D5\u05D5\u05D7 \u05DC\u05E7\u05E4\u05D9\u05E6\u05D4.</p><p>\u{1F525} \u05DB\u05D3\u05D5\u05E8 \u05D0\u05E9? \u05E0\u05EA\u05D9\u05D1 \u05D0\u05D3\u05D5\u05DD \u05DE\u05D6\u05D4\u05D9\u05E8 \u05DE\u05E8\u05D0\u05E9.<br>\u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05E0\u05EA\u05D9\u05D1 \u05D0\u05D5 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DE\u05E2\u05DC\u05D9\u05D5.</p><p>\u25C6 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D7\u05D1\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05D5\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD.<br>\u05DE\u05D2\u05DF \u05D8\u05D5\u05E8\u05E7\u05D9\u05D6 \u05E1\u05D5\u05E4\u05D2 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA.<br>\u05DE\u05D2\u05E0\u05D8 \u05E1\u05D2\u05D5\u05DC \u05DE\u05D5\u05E9\u05DA \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA.<br>\u05E0\u05E2\u05DC\u05D9\u05D9\u05DD \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA: \u05E7\u05E4\u05D9\u05E6\u05D5\u05EA \u05E2\u05DC \u05DC\u05DB\u05DE\u05D4 \u05E9\u05E0\u05D9\u05D5\u05EA.<br>\u05DB\u05E0\u05E4\u05D9\u05D9\u05DD \u05EA\u05DB\u05D5\u05DC\u05D5\u05EA: \u05D8\u05D9\u05E1\u05D4 \u05E7\u05E6\u05E8\u05D4 \u05DE\u05E2\u05DC \u05D4\u05DB\u05DC, \u05E2\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8.</p><p>\u05E8\u05E6\u05E3 \u05E0\u05E7\u05D9 \u05E9\u05DC \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D5\u05D4\u05EA\u05D7\u05DE\u05E7\u05D5\u05D9\u05D5\u05EA \u05D1\u05D5\u05E0\u05D4 \u05E7\u05D5\u05DE\u05D1\u05D5 \u2014 \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05DD \xD72 \u05D5\u05D0\u05D6 \xD73. \u05E4\u05D2\u05D9\u05E2\u05D4 \u05DE\u05D0\u05E4\u05E1\u05EA.</p><p>\u05DE\u05DB\u05D5\u05E0\u05D9\u05D5\u05EA \u05E0\u05E2\u05D5\u05EA \u05D1\u05D9\u05DF \u05E0\u05EA\u05D9\u05D1\u05D9\u05DD \u2014 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DE\u05E2\u05DC\u05D9\u05D4\u05DF \u05D0\u05D5 \u05DE\u05D7\u05DC\u05D9\u05E4\u05D9\u05DD \u05E0\u05EA\u05D9\u05D1. \u05D2\u05E9\u05E8\u05D5\u05DF \u05DE\u05E7\u05E4\u05D9\u05E5 \u05DE\u05E2\u05DC \u05E9\u05D5\u05E8\u05D5\u05EA \u05DB\u05E4\u05D5\u05DC\u05D5\u05EA. \u05DE\u05EA\u05D7\u05EA \u05DC\u05D2\u05D2\u05D5\u05E0\u05D9\u05DD \u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05DE\u05D5\u05E7\u05D3\u05DD.</p><p>\u05E4\u05D2\u05D9\u05E2\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05DC\u05D9 \u05DE\u05D2\u05DF? \u05E8\u05E7 \u05DE\u05E2\u05D9\u05D3\u05D4 \u2014 \u05D0\u05D1\u05DC \u05D4\u05DB\u05DC\u05D1 \u05D9\u05D5\u05E6\u05D0 \u05D0\u05D7\u05E8\u05D9\u05DA. \u05E4\u05D2\u05D9\u05E2\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05D5\u05D0 \u05E2\u05D9\u05D9\u05E3 \u05D5\u05D4\u05E8\u05D9\u05E6\u05D4 \u05E0\u05D2\u05DE\u05E8\u05EA. \u05D0\u05D7\u05E8\u05D9 \u05E0\u05E4\u05D9\u05DC\u05D4 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D7\u05D9\u05D5\u05EA \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA.</p><p>\u05D1\u05EA\u05E4\u05E8\u05D9\u05D8: \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E2\u05DD \u05E4\u05E8\u05E1\u05D9\u05DD, \u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD \u05DC\u05DB\u05D5\u05D7\u05D5\u05EA, \u05D5\u05D0\u05EA\u05D2\u05E8 \u05D9\u05D5\u05DE\u05D9 \u05E9\u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D7\u05E6\u05D5\u05EA \u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC.</p><p>\u05D7\u05D3\u05E9: \u05D1\u05E0\u05EA\u05D9\u05D1 \u05D4\u05E9\u05DE\u05D0\u05DC\u05D9 \u05E2\u05D5\u05DC\u05D9\u05DD \u05DC\u05D2\u05D2\u05D5\u05EA. \u05D1\u05D9\u05DE\u05E0\u05D9 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF \u05DB\u05D3\u05D9 \u05DC\u05EA\u05E4\u05D5\u05E1 \u05D0\u05D5\u05EA\u05D5, \u05D5\u05D9\u05D5\u05E8\u05D3\u05D9\u05DD \u05D1\u05D4\u05D7\u05DC\u05E7\u05D4 \u05E9\u05DE\u05D0\u05DC\u05D4 \u05D0\u05D5 \u05DC\u05DE\u05D8\u05D4 \u05D0\u05D5 \u05D1\u05D7\u05E6\u05D9\u05DD. \u05D1\u05E1\u05D5\u05E3 \u05D4\u05DB\u05D1\u05DC \u05D9\u05D5\u05E8\u05D3\u05D9\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.<br>\u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05D5\u05D7\u05E6\u05D9\u05DD \u05E9\u05D5\u05D1 \u05E7\u05E4\u05D9\u05E6\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05E1\u05DC\u05D8\u05D4. \u05DE\u05E9\u05DC\u05D9\u05DE\u05D9\u05DD \u05E1\u05D9\u05D1\u05D5\u05D1 \u05D5\u05E0\u05D5\u05D7\u05EA\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E7\u05D3\u05DD \u05D0\u05EA \u05D4\u05E7\u05D5\u05DE\u05D1\u05D5. \u05D7\u05DE\u05E9 \u05D4\u05E0\u05D7\u05D9\u05EA\u05D5\u05EA \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D5\u05EA \u05DE\u05D6\u05DB\u05D5\u05EA \u05D1\u05BE3 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DB\u05DC \u05D0\u05D7\u05EA, \u05E2\u05D3 15 \u05D1\u05E8\u05D9\u05E6\u05D4, \u05D1\u05DC\u05D9 \u05DE\u05DB\u05E4\u05D9\u05DC. \u05E2\u05DD \u05D4\u05D0\u05E8\u05E0\u05D1: \u05D4\u05E7\u05E4\u05D9\u05E6\u05D4 \u05D4\u05DB\u05E4\u05D5\u05DC\u05D4 \u05E7\u05D5\u05D3\u05DE\u05EA \u05DC\u05E1\u05DC\u05D8\u05D4.<br>\u05E1\u05E7\u05D9\u05D9\u05D8 \u05DB\u05EA\u05D5\u05DD \u05DE\u05D2\u05D1\u05D9\u05E8 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA; \u05E4\u05D5\u05D2\u05D5 \u05E1\u05D2\u05D5\u05DC \u05DE\u05E7\u05E4\u05D9\u05E5 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA. \u05DB\u05E4\u05EA\u05D5\u05E8 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DE\u05D0\u05D8 \u05D0\u05EA \u05D4\u05E1\u05E7\u05D9\u05D9\u05D8 \u05D0\u05D5 \u05E2\u05D5\u05E6\u05E8 \u05D6\u05DE\u05E0\u05D9\u05EA \u05D0\u05EA \u05D4\u05E7\u05E4\u05D9\u05E6\u05D5\u05EA. \u05E9\u05E0\u05D9\u05D4\u05DD \u05E1\u05D5\u05E4\u05D2\u05D9\u05DD \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA \u05D5\u05E0\u05E2\u05DC\u05DE\u05D9\u05DD.<br>\u05E8\u05D9\u05E6\u05EA \u05D6\u05DF \u05D4\u05D9\u05D0 \u05EA\u05E8\u05D2\u05D5\u05DC \u05D1\u05DC\u05D9 \u05DE\u05D5\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1\u05D9\u05DD \u05D5\u05D1\u05DC\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA.</p><p>\u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05EA \u05E8\u05E7 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D5\u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4.</p></div><button class="primary" id="back">\u05D4\u05D1\u05E0\u05EA\u05D9!</button>'),Tt("back",Ln)}function Ji(i,e){e=e||{},Qt=i,Xl=0,en=!!e.zen,Zt=en?null:e.daily||null,ba=vn(),lr=Fl(Ue.prog);let t=Zt?Zt.mod:{};j=new Wx(i,{zen:en,character:Ue.character,upgrades:lr,seed:Zt?Zt.seed:0,speedMul:t.speedMul,lengthMul:t.lengthMul,coinMul:t.coinMul,noStartShield:t.noStartShield}),hn=lf();let n=[9554408,13160935,15714210,11457759][Math.floor((i-1)/5)];Hl.fog.color.setHex(n),Hl.background.setHex(n),Vl.setClearColor(n),Dh=!1,Et="playing",Zn=null,Uh=-1,Fh=-1,Oh="",Wl=en?[]:mf(j.level,ba),j.level.pickups=Wl,j.level.bestMarker=en?0:Ph(Ue.collections,{level:i,daily:!!Zt,dateKey:ba}),Cf(j.level),Aa=ef(j.level,Zt&&t.fireMul||1),Zi.reset(),hr.unlock(),Nh=0,Ue.soundNotice&&(Ue.soundNotice=!1,_s(),setTimeout(()=>Pt("\u05E0\u05D5\u05E1\u05E4\u05D5 \u05E6\u05DC\u05D9\u05DC\u05D9\u05DD \u05D5\u05D4\u05DD \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E9\u05EA\u05D9\u05E7 \u05D1\u05DB\u05E4\u05EA\u05D5\u05E8 \u{1F50A}"),2600)),$l.hidden=!0,lt("hud").hidden=lt("controls").hidden=!1,lt("levelnum").textContent=en?"\u05D6\u05DF":Zt?"\u05D9\u05D5\u05DE\u05D9":i,lt("runcoins").textContent="0",lt("progress").style.width="0%",lt("powerlabel").textContent="",lt("huntlabel").textContent="",lt("combo").textContent="",Bh="",lt("chaserwarn").hidden=!0,zh=!1,en?Pt("\u05DE\u05E6\u05D1 \u05D6\u05DF \xB7 \u05DE\u05EA\u05E8\u05D2\u05DC\u05D9\u05DD \u05D1\u05DC\u05D9 \u05DE\u05D5\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1\u05D9\u05DD \u05D5\u05D1\u05DC\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA"):i===1&&!Zt&&Pt("\u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D7\u05E6\u05D9\u05DD \xB7 \u05E7\u05E4\u05D9\u05E6\u05D4 \u2191 \xB7 \u05D4\u05D7\u05DC\u05E7\u05D4 \u2193"),Zt&&Pt("\u05D4\u05D0\u05EA\u05D2\u05E8: \u05DC\u05E1\u05D9\u05D9\u05DD \u05E2\u05DD "+Bl(Zt,Gh(j.level))+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA"),gs=0,wa=performance.now()}function ur(){Et==="playing"&&(Et="paused",clearTimeout(Pt.timer),lt("toast").classList.remove("show"),Pn(`<p class="eyebrow">\u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05D0\u05D5\u05D5\u05D9\u05E8</p><h2>\u05D4\u05E8\u05D9\u05E6\u05D4 \u05DE\u05D7\u05DB\u05D4 \u05DC\u05DA</h2><p class="subtitle">\u05E9\u05DC\u05D1 ${Qt} \xB7 ${j.coins} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4</p><button class="primary" id="resume">\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E8\u05D5\u05E5</button><button class="secondary" id="retry">\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DC\u05D1 \u05DE\u05D7\u05D3\u05E9</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05E9\u05D7\u05E7</button><p class="note">${en?"\u05DE\u05E6\u05D1 \u05D6\u05DF: \u05EA\u05E8\u05D2\u05D5\u05DC \u05D1\u05DC\u05D1\u05D3, \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05EA \u05E4\u05E8\u05E1\u05D9\u05DD.":"\u05D2\u05DD \u05D1\u05D9\u05E6\u05D9\u05D0\u05D4, \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D0\u05E1\u05E4\u05EA \u05D9\u05D9\u05E9\u05DE\u05E8\u05D5."}</p>`),Tt("resume",()=>{Et="playing",$l.hidden=!0,gs=0,wa=performance.now(),Zn=null}),Tt("retry",()=>{ql(!1),Ji(Qt,en?{zen:!0}:Zt?{daily:Zt}:{})}),Tt("home",()=>{ql(!1),Ln()}))}function ql(i){if(Dh||!j)return{bonus:0,r:null};if(Dh=!0,en)return{bonus:0,r:null};_f(Ue.collections,{level:Qt,daily:!!Zt,distance:j.x,won:i,dateKey:ba}),hn&&hn.max("combo",j.maxStreak);let e=!!Zt,t=e?Bl(Zt,Gh(j.level)):0,n=cf(Ue.prog,hn?hn.stats:{},{won:i,distance:j.x,daily:e,dateKey:vn(),goalCoins:t}),s=i&&!e?20+Qt*2:0;if(Ue.coins+=j.coins+s+n.coins,i&&!e){Ue.unlocked=Math.min(20,Math.max(Ue.unlocked,Qt+1));let r=j.collected>=j.level.coins.length*.7?3:j.collected>=j.level.coins.length*.35?2:1,a=Ue.best[Qt]||{stars:0,coins:0};Ue.best[Qt]={stars:Math.max(r,a.stars),coins:Math.max(j.coins,a.coins)}}return _s(),{bonus:s,r:n}}function Yl(i){if(en){ql(!1),Et="won",lt("controls").hidden=!0,Pn(`<p class="eyebrow">\u05E8\u05D9\u05E6\u05EA \u05D6\u05DF</p><h2>\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D5\u05E6\u05DC\u05D7!</h2><p class="subtitle">${j.tricks} \u05E1\u05DC\u05D8\u05D5\u05EA \u05E2\u05DD \u05E0\u05D7\u05D9\u05EA\u05D4 \xB7 ${j.collected} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC</p><p class="note">\u05D4\u05E7\u05D5\u05E4\u05D4, \u05D4\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05D4\u05E9\u05D9\u05D0\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D5 \u05DC\u05DC\u05D0 \u05E9\u05D9\u05E0\u05D5\u05D9.</p><button id="retry" class="primary">\u05E2\u05D5\u05D3 \u05E8\u05D9\u05E6\u05EA \u05D6\u05DF</button><button id="home" class="secondary">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>`),Tt("retry",()=>Ji(Qt,{zen:!0})),Tt("home",Ln);return}Et=i?"won":"dead",lt("controls").hidden=!0,lt("chaserwarn").hidden=!0;let{bonus:e,r:t}=ql(i),n=t?Sf(t):"";if(i){let s=j.collected>=j.level.coins.length*.7?3:j.collected>=j.level.coins.length*.35?2:1;Pn(`<p class="eyebrow">${Qt===20?"\u05DB\u05DC \u05D4\u05E2\u05D9\u05E8 \u05DB\u05D1\u05E8 \u05DE\u05DB\u05D9\u05E8\u05D4 \u05D0\u05D5\u05EA\u05DA":"\u05E2\u05D5\u05D3 \u05E6\u05E2\u05D3 \u05D1\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4"}</p><h2>${Qt===20?"\u05D0\u05DC\u05D5\u05E3 \u05D4\u05E2\u05D9\u05E8!":"\u05E9\u05DC\u05D1 "+Qt+" \u05D4\u05D5\u05E9\u05DC\u05DD!"}</h2><div class="stars">${"\u2605".repeat(s)}${"\u2606".repeat(3-s)}</div><div class="stats"><div><b>${j.coins}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D0\u05E1\u05E4\u05EA</small></div><div><b>+${e}</b><small>\u05D1\u05D5\u05E0\u05D5\u05E1 \u05E1\u05D9\u05D5\u05DD</small></div></div>${n}${kh()}<button class="primary" id="next">${Qt<20?"\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E9\u05DC\u05D1 "+(Qt+1):"\u05DC\u05DE\u05E4\u05EA \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD"}</button><div class="twocol"><button class="secondary" id="retry">\u05E9\u05D5\u05D1 \u05D0\u05D5\u05EA\u05D5 \u05E9\u05DC\u05D1</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button></div>`),Tt("next",()=>Qt<20?Ji(Qt+1):If())}else Pn(`<p class="eyebrow">\u05E2\u05D5\u05D3 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF. \u05E2\u05D5\u05D3 \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8 \u05E8\u05D7\u05D5\u05E7.</p><h2>\u05DB\u05DE\u05E2\u05D8 \u05E2\u05D1\u05E8\u05EA!</h2><p class="subtitle">${Math.floor(Math.min(100,j.x/j.level.length*100))}% \u05DE\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \xB7 \u05E9\u05DC\u05D1 ${Qt}</p><div class="stats"><div><b>+${j.coins}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05E7\u05D5\u05E4\u05D4</small></div></div>${j.caught?'<p class="note">\u05D4\u05DB\u05DC\u05D1 \u05D4\u05E9\u05EA\u05DC\u05D8 \u05E2\u05DC\u05D9\u05DA \u05D0\u05D7\u05E8\u05D9 \u05E9\u05EA\u05D9 \u05DE\u05E2\u05D9\u05D3\u05D5\u05EA.</p>':""}${n}<button class="primary" id="retry">\u05DE\u05E0\u05E1\u05D9\u05DD \u05E9\u05D5\u05D1</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05E9\u05D7\u05E7</button><p class="note">\u05D8\u05D9\u05E4: \u05D0\u05E8\u05D2\u05D6 \u05D5\u05DE\u05D7\u05E1\u05D5\u05DD? \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD. \u05E9\u05E2\u05E8 \u05D2\u05D1\u05D5\u05D4? \u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD.</p>`);Tt("retry",()=>Ji(Qt,en?{zen:!0}:Zt?{daily:Zt}:{})),Tt("home",Ln)}function jx(){Et="offer",lt("controls").hidden=!0,lt("chaserwarn").hidden=!0,Pn(bf(lr.reviveCost)),Tt("revive",()=>{if(Ue.coins<lr.reviveCost){Yl(!1);return}Ue.coins-=lr.reviveCost,_s(),j.revive(),hn&&hn.add("revives"),Wt("revive"),$l.hidden=!0,lt("controls").hidden=!1,Et="playing",gs=0,wa=performance.now(),Zn=null,Pt("\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05DC\u05E8\u05D5\u05E5!")}),Tt("norevive",()=>Yl(!1))}function Zl(i){if(Et!=="playing")return;let e=j.lane;i==="left"&&j.move(-1),i==="right"&&j.move(1),j.lane!==e&&Wt("move"),i==="jump"&&(j.jump()||j.trick()),i==="slide"&&j.duck()}for(let i of["left","right","jump","slide"])lt(i).addEventListener("pointerdown",e=>{e.preventDefault(),Zl(i)});Tt("pause",ur);Tt("mute",()=>Rf(!Ue.soundOn));lt("mute").textContent=Ue.soundOn?"\u{1F50A}":"\u{1F507}";for(let i of["pointerdown","keydown","touchstart"])addEventListener(i,()=>hr.unlock(),{passive:!0});var yn=null;function Df(i){if(!yn||yn.id!==i.pointerId||yn.done)return;let e=i.clientX-yn.x,t=i.clientY-yn.y;Math.max(Math.abs(e),Math.abs(t))<20||(yn.done=!0,Zl(Math.abs(e)>Math.abs(t)?e<0?"left":"right":t<0?"jump":"slide"))}Ki.addEventListener("pointerdown",i=>{Et==="playing"&&!yn&&(yn={id:i.pointerId,x:i.clientX,y:i.clientY,done:!1},Ki.setPointerCapture(i.pointerId))});Ki.addEventListener("pointermove",Df);Ki.addEventListener("pointerup",i=>{!yn||yn.id!==i.pointerId||(Df(i),yn.done||Zl("jump"),yn=null)});Ki.addEventListener("pointercancel",()=>yn=null);Ki.addEventListener("lostpointercapture",()=>yn=null);document.addEventListener("keydown",i=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(i.key)&&i.preventDefault(),i.repeat)return;let e={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"jump",w:"jump",W:"jump"," ":"jump",ArrowDown:"slide",s:"slide",S:"slide"};i.key==="Escape"||i.key==="p"?Et==="playing"?ur():Et==="paused"&&lt("resume").click():e[i.key]&&Zl(e[i.key])});document.addEventListener("visibilitychange",()=>{document.hidden&&(ur(),hr.suspend())});window.addEventListener("blur",ur);Ki.addEventListener("webglcontextlost",i=>{i.preventDefault(),ur(),Pt("\u05EA\u05E6\u05D5\u05D2\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E0\u05E2\u05E6\u05E8\u05D4. \u05E8\u05E2\u05E0\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA.")});var Zn=null,Uh=-1,Fh=-1,Oh="",Bh="",zh=!1;function Nf(){return j?{x:j.x,y:j.y,lateral:j.lateral,lane:j.lane,slide:j.slide,shield:j.shield,invincible:j.invincible,chaser:j.chaser,flight:j.flight,shoes:j.shoes,ground:j.ground,zip:j.zip,route:j.route,vehicle:j.vehicle,trickRotation:j.trickRotation,mult:j.mult,obs:j.level.obs,coins:j.level.coins,powers:j.level.powers}:null}function Qx(i){let e=Nf();if(e&&Zn&&Et==="playing"){let t=Math.min(1,gs*120);e={...e,x:Zn.x+(e.x-Zn.x)*t,y:Zn.y+(e.y-Zn.y)*t,lateral:Zn.lateral+(e.lateral-Zn.lateral)*t}}if(Zi.update(i,e?{...e,t:j.time}:{x:0,t:0},Et==="menu"?null:Aa,Et==="playing"),ms.render(i,e,Et),j&&j.flight>0&&Et==="playing"&&Zi.burst("jet",e?e.lateral:0,j.y+.2,.5),j){let t=Math.floor(Math.min(100,j.x/j.level.length*100)),n=(j.shield?"\u05DE\u05D2\u05DF \xD7"+j.shield+"  ":"")+(j.magnet>0?"\u05DE\u05D2\u05E0\u05D8 "+Math.ceil(j.magnet)+" \u05E9\u05E0\u05F3  ":"")+(j.shoes>0?"\u05E0\u05E2\u05DC\u05D9\u05D9\u05DD "+Math.ceil(j.shoes)+" \u05E9\u05E0\u05F3  ":"")+(en?"\u2601 \u05D6\u05DF \xB7 ":"")+(j.route==="roof"?"\u05D2\u05D2\u05D5\u05EA! ":j.zip?"\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF \xB7 \u05DC\u05D9\u05E8\u05D9\u05D3\u05D4: \u05E9\u05DE\u05D0\u05DC\u05D4 \u2190 \u05D0\u05D5 \u05DC\u05DE\u05D8\u05D4 \u2193 ":"")+(j.vehicle==="board"?"\u05E1\u05E7\u05D9\u05D9\u05D8 "+Math.ceil(j.vehicleTime)+" \u05E9\u05E0\u05F3 ":j.vehicle==="pogo"?"\u05E4\u05D5\u05D2\u05D5 "+Math.ceil(j.vehicleTime)+" \u05E9\u05E0\u05F3 ":"")+(j.flight>0?"\u05D8\u05D9\u05E1\u05D4!":"")+(j.chaser>0?"\u{1F3C3}\u{1F4A8} \u05D4\u05DB\u05DC\u05D1 \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9\u05DA!":"");if(Uh!==j.coins&&(lt("runcoins").textContent=j.coins,Uh=j.coins),Fh!==t&&(lt("progress").style.width=t+"%",Fh=t),j.time>=Xl){let o=Ih(Ue.collections,vn());lt("huntlabel").textContent=en?"\u05EA\u05E8\u05D2\u05D5\u05DC \u05D1\u05DC\u05D1\u05D3":o.word.text+" "+o.word.found+"/4 \xB7 \u2726 "+o.event.count+"/30",Xl=j.time+1}Oh!==n&&(lt("powerlabel").textContent=n,Oh=n);let s=j.zip>0;lt("powerlabel").classList.toggle("zip-hint",s),lt("left").classList.contains("zip-exit")!==s&&(lt("left").classList.toggle("zip-exit",s),lt("left").innerHTML=s?"\u2190<small>\u05D9\u05E8\u05D9\u05D3\u05D4</small>":"\u2190",lt("left").setAttribute("aria-label",s?"\u05E9\u05DE\u05D0\u05DC\u05D4 \xB7 \u05D9\u05E8\u05D9\u05D3\u05D4 \u05DE\u05D4\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF":"\u05E9\u05DE\u05D0\u05DC\u05D4")),lt("slide").classList.contains("zip-exit")!==s&&(lt("slide").classList.toggle("zip-exit",s),lt("slide").innerHTML=s?"\u2193<small>\u05D9\u05E8\u05D9\u05D3\u05D4</small>":"\u2193<small>\u05D4\u05D7\u05DC\u05E7\u05D4</small>",lt("slide").setAttribute("aria-label",s?"\u05DC\u05DE\u05D8\u05D4 \xB7 \u05D9\u05E8\u05D9\u05D3\u05D4 \u05DE\u05D4\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF":"\u05D4\u05D7\u05DC\u05E7\u05D4"));let r=j.mult>1?"\xD7"+j.mult:"";Bh!==r&&(lt("combo").textContent=r,Bh=r);let a=j.chaser>0;zh!==a&&(lt("chaserwarn").hidden=!a,zh=a)}}function Uf(i){let e=Math.max(0,(i-wa)/1e3||0),t=Math.min(e,.75);if(wa=i,ms.sampleFrame(e,Et),!Xx&&Et==="playing"&&e>.75&&(ur(),cr.insertAdjacentHTML("afterbegin",'<p class="note">\u05D4\u05E8\u05D9\u05E6\u05D4 \u05D4\u05D5\u05E9\u05D4\u05EA\u05D4 \u05D1\u05D2\u05DC\u05DC \u05E2\u05E6\u05D9\u05E8\u05D4 \u05D1\u05EA\u05E6\u05D5\u05D2\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05DB\u05E9\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05DE\u05D5\u05DB\u05DF.</p>')),Et==="playing")for(gs+=t;gs>=1/120&&Et==="playing";){if(Zn=Nf(),j.step(1/120),Aa.update(j,1/120),!en){for(let r of Wl)if(!r.taken&&Math.abs(r.x-j.x)<1.4&&Math.abs(r.lane*2.6-j.lateral)<1.05&&Math.abs(r.y-j.y-.7)<1.3){let a=gf(Ue.collections,r,vn(),{zen:en});Ue.coins+=a.coins||0,_s(),a.message&&Pt(a.message),Xl=0}}gs-=1/120,j.status==="playing"&&j.y<.02&&j.slide<=0&&j.x-Nh>=3.4&&(Nh=j.x,Wt("step"));for(let r of Aa.drain())r.type==="fb-warn"&&Wt("warn"),r.type==="fb-launch"&&Wt("launch"),r.type==="fb-dodge"&&(Wt("dodge"),Pt("\u05D4\u05EA\u05D7\u05DE\u05E7\u05EA \u05DE\u05DB\u05D3\u05D5\u05E8 \u05D4\u05D0\u05E9!")),r.type==="fb-hit"&&(Wt("boom"),Zi.burst("boom",j.lateral,.9,0),Tf.classList.add("on"),setTimeout(()=>Tf.classList.remove("on"),160));let n=j.drain();hn&&hn.events(n);let s=n.some(r=>r.type==="caught");for(let r of n)["jump","slide","coin","won"].includes(r.type)&&Wt(r.type),r.type==="dead"&&!s&&Wt("dead"),r.type==="coin"&&Zi.burst("coin",j.lateral,j.y+1,0),r.type==="combo"&&Wt("combo"),(r.type==="shield"||r.type==="magnet")&&Wt("power"),r.type==="break"&&Wt("break"),r.type==="shield"&&Pt("\u05DE\u05D2\u05DF! \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA \u05DC\u05D0 \u05EA\u05E2\u05E6\u05D5\u05E8 \u05D0\u05D5\u05EA\u05DA"),r.type==="magnet"&&Pt("\u05DE\u05D2\u05E0\u05D8! \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA"),r.type==="break"&&Pt("\u05D4\u05DE\u05D2\u05DF \u05D4\u05E6\u05D9\u05DC \u05D0\u05D5\u05EA\u05DA"),r.type==="stumble"&&(Wt("stumble"),Zi.burst("boom",j.lateral,.5,0),Pt("\u05DE\u05E2\u05D3\u05EA! \u05D4\u05DB\u05DC\u05D1 \u05E8\u05D5\u05D3\u05E3 \u05D0\u05D7\u05E8\u05D9\u05DA \u2014 \u05E2\u05D5\u05D3 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D5\u05D4\u05D5\u05D0 \u05EA\u05D5\u05E4\u05E1")),r.type==="caught"&&Wt("dead"),r.type==="ramp"&&(Wt("ramp"),Zi.burst("coin",j.lateral,.5,0)),r.type==="shoes"&&(Wt("power"),hn&&hn.add("powerups"),Pt("\u05E0\u05E2\u05DC\u05D9 \u05E7\u05E4\u05D9\u05E6\u05D4! \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DC\u05E9\u05DE\u05D9\u05D9\u05DD")),r.type==="flight"&&(Wt("fly"),hn&&(hn.add("powerups"),hn.add("flights")),Pt("\u05D8\u05D9\u05E1\u05D4! \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DE\u05D7\u05DB\u05D9\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4")),r.type==="trick-land"&&(Wt("combo"),Pt(en?"\u05E0\u05D7\u05D9\u05EA\u05D4 \u05DE\u05D5\u05E6\u05DC\u05D7\u05EA!":r.coins?"\u05E1\u05DC\u05D8\u05D4 \u05DE\u05D5\u05E6\u05DC\u05D7\u05EA! +"+r.coins+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D5\u05E7\u05D5\u05DE\u05D1\u05D5":"\u05E1\u05DC\u05D8\u05D4 \u05DE\u05D5\u05E6\u05DC\u05D7\u05EA! \u05D4\u05E7\u05D5\u05DE\u05D1\u05D5 \u05DE\u05EA\u05E7\u05D3\u05DD")),r.type==="trick-miss"&&Pt("\u05E2\u05D5\u05D3 \u05E7\u05E6\u05EA \u05D2\u05D5\u05D1\u05D4 \u05D1\u05E4\u05E2\u05DD \u05D4\u05D1\u05D0\u05D4"),r.type==="board"&&Pt("\u05E1\u05E7\u05D9\u05D9\u05D8! \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \xB7 \u2193 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05DC\u05D5\u05DD"),r.type==="pogo"&&Pt("\u05E4\u05D5\u05D2\u05D5! \u05E7\u05D5\u05E4\u05E5 \u05DC\u05D1\u05D3 \xB7 \u2193 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D9\u05E9\u05D0\u05E8 \u05E0\u05DE\u05D5\u05DA"),r.type==="vehicle-break"&&Pt("\u05D4\u05DB\u05DC\u05D9 \u05E1\u05E4\u05D2 \u05D0\u05EA \u05D4\u05E4\u05D2\u05D9\u05E2\u05D4!"),r.type==="vehicle-end"&&Pt("\u05D1\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E8\u05D9\u05E6\u05D4"),r.type==="zip-exit"&&Wt("move"),r.type==="moving-pass"&&hn&&hn.add("moving");j.status==="won"?Yl(!0):j.status==="dead"&&(!j.revived&&Ue.coins>=lr.reviveCost?jx():Yl(!1))}Qx(t),requestAnimationFrame(Uf)}Object.defineProperty(window,"__runner",{get:()=>({mode:Et,store:JSON.parse(JSON.stringify(Ue)),run:j?{x:j.x,y:j.y,lane:j.lane,lateral:j.lateral,slide:j.slide,coins:j.coins,collected:j.collected,mult:j.mult,maxStreak:j.maxStreak,chaser:j.chaser,flight:j.flight,shoes:j.shoes,shield:j.shield,revived:j.revived,caught:j.caught,daily:!!Zt,zen:en,ground:j.ground,route:j.route,zip:j.zip,vehicle:j.vehicle,vehicleTime:j.vehicleTime,brake:j.brake,trickTime:j.trickTime,trickReady:j.trickReady,tricks:j.tricks,trickCoins:j.trickCoins,runKey:ba,collectionItems:Wl.map(i=>({...i})),routes:j.level.routes,status:j.status,speed:j.level.speed,length:j.level.length,obs:j.level.obs.map(i=>({...i})),powers:j.level.powers.map(i=>({...i})),allCoins:j.level.coins.length,coinLanes:j.level.coins.filter(i=>!i.taken&&i.x>j.x-2&&i.x<j.x+30).map(i=>({x:i.x,lane:i.lane}))}:null,render:{calls:Vl.info.render.calls,triangles:Vl.info.render.triangles,dpr:ms.stats.dpr,frames:ms.stats.frames,frameMs:ms.stats.frameMs.slice(-180),quality:ms.stats.quality}})});Ln();requestAnimationFrame(Uf);window.GamesUpdate?.setSafeToReload(()=>Et==="menu"&&!!document.getElementById("play"));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

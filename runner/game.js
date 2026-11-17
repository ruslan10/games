(()=>{var bu=0,Pc=1,wu=2;var ia=1,zo=2,js=3,Wi=0,vn=1,Bn=2,cs=0,Xi=1,sa=2,Lc=3,Dc=4,Tu=5;var hs=100,Au=101,Eu=102,Cu=103,Ru=104,Iu=200,Pu=201,Lu=202,Du=203,Nc=204,Uc=205,Nu=206,Uu=207,Fu=208,Ou=209,Bu=210,zu=211,ku=212,Gu=213,Vu=214,no=0,io=1,so=2,Os=3,ro=4,ao=5,oo=6,lo=7,Fc=0,Hu=1,Wu=2,ai=0,Oc=1,Bc=2,zc=3,ra=4,kc=5,Gc=6,Vc=7;var Hc=300,us=301,Qs=302,ko=303,Go=304,yi=1e3,ti=1001,co=1002,nn=1003,Xu=1004;var aa=1005;var xn=1006,Vo=1007;var Ti=1008;var yn=1009,Wc=1010,Xc=1011,er=1012,Ho=1013,Zn=1014,zn=1015,Jn=1016,Wo=1017,Xo=1018,ds=1020,qc=35902,Yc=35899,$c=1021,Zc=1022,Kn=1023,Mi=1026,Ai=1027,qo=1028,Yo=1029,qi=1030,$o=1031;var Zo=1033,oa=33776,la=33777,ca=33778,ha=33779,Jo=35840,Ko=35841,jo=35842,Qo=35843,el=36196,tl=37492,nl=37496,il=37488,sl=37489,ua=37490,rl=37491,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,vl=37821,yl=36492,Ml=36494,Sl=36495,bl=36283,wl=36284,da=36285,Tl=36286;var Tr=2300,ho=2301,Qa=2302,Mc=2303,Sc=2400,bc=2401,wc=2402;var qu=3200;var Al=0,Yu=1,Ei="",Yt="srgb",Ar="srgb-linear",Er="linear",It="srgb";var eo=7680;var $u=519,Zu=512,Ju=513,Ku=514,Jc=515,ju=516,Qu=517,Kc=518,jc=519,Qc=35044,eh=35048;var th="300 es",Nn=2e3,Bs=2001;function Uf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){let i=zs("canvas");return i.style.display="block",i}var Vh={},ks=null;function Cr(...i){let e="THREE."+i.shift();ks?ks("log",e,...i):console.log(e,...i)}function td(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=td(i);let e="THREE."+i.shift();if(ks)ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=td(i);let e="THREE."+i.shift();if(ks)ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Sr(...i){let e=i.join(" ");e in Vh||(Vh[e]=!0,et(...i))}function nd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var id={[no]:no,[so]:oo,[ro]:ro,[Os]:ao,[io]:io,[oo]:so,[lo]:lo,[ao]:Os},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,uo=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Of(i,e){return(i%e+e)%e}function Jl(i,e,t){return(1-t)*i+t*e}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function El(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rd(i,e){if(e.constructor===Float32Array)return i;let t=El(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ad(i,e){if(e.constructor===Float32Array)return i;let t=El(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var _e=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],_=r[a+2],b=r[a+3];if(u!==b||l!==d||c!==f||h!==_){let g=l*d+c*f+h*_+u*b;g<0&&(d=-d,f=-f,_=-_,b=-b,g=-g);let p=1-o;if(g<.9995){let y=Math.acos(g),x=Math.sin(y);p=Math.sin(p*y)/x,o=Math.sin(o*y)/x,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+b*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+b*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kl=new D,Hh=new Un,rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],b=s[0],g=s[3],p=s[6],y=s[1],x=s[4],v=s[7],w=s[2],T=s[5],m=s[8];return r[0]=a*b+o*y+l*w,r[3]=a*g+o*x+l*T,r[6]=a*p+o*v+l*m,r[1]=c*b+h*y+u*w,r[4]=c*g+h*x+u*T,r[7]=c*p+h*v+u*m,r[2]=d*b+f*y+_*w,r[5]=d*g+f*x+_*T,r[8]=d*p+f*v+_*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=t*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=u*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(e,t)),this}rotate(e){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jl=new rt,Wh=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){let i={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===It&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ar]:{primaries:e,whitePoint:n,transfer:Er,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var yt=Bf();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,fo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_s===void 0&&(_s=zs("canvas")),_s.width=e.width,_s.height=e.height;let s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zf=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ql(s[a].image)):r.push(Ql(s[a]))}else r=Ql(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var kf=0,ec=new D,dn=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=xn,a=Ti,o=Kn,l=yn,c=i.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Yi(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Hc;dn.DEFAULT_ANISOTROPY=1;var kt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(f+1)/2,w=(p+1)/2,T=(h+d)/4,m=(u+b)/4,M=(_+g)/4;return x>v&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=m/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=m/r,s=M/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-_)*(g-_)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},po=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends po{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Et=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,_,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,b,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,b=c*u;t[0]=d+b*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,b=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,Vf)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ii.crossVectors(n,bn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ii.crossVectors(n,bn)),Ii.normalize(),Ea.crossVectors(bn,Ii),s[0]=Ii.x,s[4]=Ea.x,s[8]=bn.x,s[1]=Ii.y,s[5]=Ea.y,s[9]=bn.y,s[2]=Ii.z,s[6]=Ea.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],b=n[6],g=n[10],p=n[14],y=n[3],x=n[7],v=n[11],w=n[15],T=s[0],m=s[4],M=s[8],L=s[12],C=s[1],R=s[5],F=s[9],W=s[13],I=s[2],V=s[6],Y=s[10],z=s[14],ce=s[3],$=s[7],ne=s[11],ae=s[15];return r[0]=a*T+o*C+l*I+c*ce,r[4]=a*m+o*R+l*V+c*$,r[8]=a*M+o*F+l*Y+c*ne,r[12]=a*L+o*W+l*z+c*ae,r[1]=h*T+u*C+d*I+f*ce,r[5]=h*m+u*R+d*V+f*$,r[9]=h*M+u*F+d*Y+f*ne,r[13]=h*L+u*W+d*z+f*ae,r[2]=_*T+b*C+g*I+p*ce,r[6]=_*m+b*R+g*V+p*$,r[10]=_*M+b*F+g*Y+p*ne,r[14]=_*L+b*W+g*z+p*ae,r[3]=y*T+x*C+v*I+w*ce,r[7]=y*m+x*R+v*V+w*$,r[11]=y*M+x*F+v*Y+w*ne,r[15]=y*L+x*W+v*z+w*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],b=e[7],g=e[11],p=e[15],y=l*f-c*d,x=o*f-c*u,v=o*d-l*u,w=a*f-c*h,T=a*d-l*h,m=a*u-o*h;return t*(b*y-g*x+p*v)-n*(_*y-g*w+p*T)+s*(_*x-b*w+p*m)-r*(_*v-b*T+g*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],b=e[13],g=e[14],p=e[15],y=t*o-n*a,x=t*l-s*a,v=t*c-r*a,w=n*l-s*o,T=n*c-r*o,m=s*c-r*l,M=h*b-u*_,L=h*g-d*_,C=h*p-f*_,R=u*g-d*b,F=u*p-f*b,W=d*p-f*g,I=y*W-x*F+v*R+w*C-T*L+m*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(o*W-l*F+c*R)*V,e[1]=(s*F-n*W-r*R)*V,e[2]=(b*m-g*T+p*w)*V,e[3]=(d*T-u*m-f*w)*V,e[4]=(l*C-a*W-c*L)*V,e[5]=(t*W-s*C+r*L)*V,e[6]=(g*v-_*m-p*x)*V,e[7]=(h*m-d*v+f*x)*V,e[8]=(a*F-o*C+c*M)*V,e[9]=(n*C-t*F-r*M)*V,e[10]=(_*T-b*v+p*y)*V,e[11]=(u*v-h*T-f*y)*V,e[12]=(o*L-a*R-l*M)*V,e[13]=(t*R-n*L+s*M)*V,e[14]=(b*x-_*w-g*y)*V,e[15]=(h*w-u*x+d*y)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,b=a*h,g=a*u,p=o*u,y=l*c,x=l*h,v=l*u,w=n.x,T=n.y,m=n.z;return s[0]=(1-(b+p))*w,s[1]=(f+v)*w,s[2]=(_-x)*w,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(_+x)*m,s[9]=(g-y)*m,s[10]=(1-(d+b))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Vn.copy(this);let c=1/a,h=1/o,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),_,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===Nn)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Bs)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),_,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===Nn)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===Bs)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xs=new D,Vn=new Et,Gf=new D(0,0,0),Vf=new D(1,1,1),Ii=new D,Ea=new D,bn=new D,qh=new Et,Yh=new Un,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hf=0,$h=new D,vs=new Un,fi=new Et,Ca=new D,dr=new D,Wf=new D,Xf=new Un,Zh=new D(1,0,0),Jh=new D(0,1,0),Kh=new D(0,0,1),jh={type:"added"},qf={type:"removed"},ys={type:"childadded",child:null},tc={type:"childremoved",child:null},$t=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new qn,n=new Un,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new rt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(dr,Ca,this.up):fi.lookAt(Ca,dr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(fi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),ys.child=e,this.dispatchEvent(ys),ys.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new D(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yf={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=Of(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nc(a,r,e+1/3),this.g=nc(a,r,e),this.b=nc(a,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return yt.workingToColorSpace(un.copy(this),e),Math.round(gt(un.r*255,0,255))*65536+Math.round(gt(un.g*255,0,255))*256+Math.round(gt(un.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(un.copy(this),t);let n=un.r,s=un.g,r=un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Yt){yt.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,s=un.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Ra);let n=Jl(Pi.h,Ra.h,t),s=Jl(Pi.s,Ra.s,t),r=Jl(Pi.l,Ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new lt;lt.NAMES=od;var Pr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new lt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new D,pi=new D,ic=new D,mi=new D,Ms=new D,Ss=new D,Qh=new D,sc=new D,rc=new D,ac=new D,oc=new kt,lc=new kt,cc=new kt,xi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),pi.subVectors(n,t),ic.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(pi),l=Hn.dot(ic),c=pi.dot(pi),h=pi.dot(ic),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),pi.subVectors(e,t),Hn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),sc.subVectors(e,n);let l=Ms.dot(sc),c=Ss.dot(sc);if(l<=0&&c<=0)return t.copy(n);rc.subVectors(e,s);let h=Ms.dot(rc),u=Ss.dot(rc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);ac.subVectors(e,r);let f=Ms.dot(ac),_=Ss.dot(ac);if(_>=0&&f<=_)return t.copy(r);let b=f*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ss,o);let g=h*_-f*u;if(g<=0&&u-h>=0&&f-_>=0)return Qh.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(Qh,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Pa.subVectors(this.max,fr),bs.subVectors(e.a,fr),ws.subVectors(e.b,fr),Ts.subVectors(e.c,fr),Li.subVectors(ws,bs),Di.subVectors(Ts,ws),ts.subVectors(bs,Ts);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ts.z,ts.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ts.z,0,-ts.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ts.y,ts.x,0];return!hc(t,bs,ws,Ts,Pa)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,bs,ws,Ts,Pa))?!1:(La.crossVectors(Li,Di),t=[La.x,La.y,La.z],hc(t,bs,ws,Ts,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Wn=new D,Ia=new ii,bs=new D,ws=new D,Ts=new D,Li=new D,Di=new D,ts=new D,fr=new D,Pa=new D,La=new D,ns=new D;function hc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qt=new D,Da=new _e,$f=0,tn=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=e!==void 0?El(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ad(e,this.array)}};var Dr=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Nr=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zf=new ii,pr=new D,uc=new D,Ui=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(uc)),this.expandByPoint(pr.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jf=0,Dn=new Et,dc=new $t,As=new D,wn=new ii,mr=new ii,en=new D,Wt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?Nr:Dr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(wn.min,mr.min),wn.expandByPoint(en),en.addVectors(wn.max,mr.max),wn.expandByPoint(en)):(wn.expandByPoint(mr.min),wn.expandByPoint(mr.max))}wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),en.add(As)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;let h=new D,u=new D,d=new D,f=new _e,_=new _e,b=new _e,g=new D,p=new D;function y(L,C,R){c[L]=c[C]=c[R]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,L),_.fromBufferAttribute(r,C),b.fromBufferAttribute(r,R),u.sub(h),d.sub(h),_.sub(f),b.sub(f);let F=1/(_.x*b.y-b.x*_.y);isFinite(F)&&(g.copy(u).multiplyScalar(b.y).addScaledVector(d,-_.y).multiplyScalar(F),p.copy(d).multiplyScalar(_.x).addScaledVector(u,-b.x).multiplyScalar(F),o[L].add(g),o[C].add(g),o[R].add(g),l[L].add(p),l[C].add(p),l[R].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,C=x.length;L<C;++L){let R=x[L],F=R.start,W=R.count;for(let I=F,V=F+W;I<V;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new D,w=new D,T=new D,m=new D;function M(L){T.fromBufferAttribute(s,L),m.copy(T);let C=o[L];v.copy(C),v.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(m,C);let F=w.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,F)}for(let L=0,C=n.count;L<C;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new tn(d,h,u)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=eu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function eu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Yi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var gn=new D,Hs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?El(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ad(e,this.data.array)}},fc=new D,Kf=new D,jf=new rt,Xn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fc.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jf.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qf=0,Si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Xi,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Uc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bi=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,gr=new D,Cs=new D,Rs=new D,Is=new _e,_r=new _e,ld=new Et,Na=new D,xr=new D,Ua=new D,tu=new _e,pc=new _e,nu=new _e,Fi=class extends $t{constructor(e=new bi){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ur(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Hs(n,3,0,!1)),Es.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Fa(Na.set(-.5,-.5,0),Rs,a,Cs,s,r),Fa(xr.set(.5,-.5,0),Rs,a,Cs,s,r),Fa(Ua.set(.5,.5,0),Rs,a,Cs,s,r),tu.set(0,0),pc.set(1,0),nu.set(1,1);let o=e.ray.intersectTriangle(Na,xr,Ua,!1,gr);if(o===null&&(Fa(xr.set(-.5,.5,0),Rs,a,Cs,s,r),pc.set(0,1),o=e.ray.intersectTriangle(Na,Ua,xr,!1,gr),o===null))return;let l=e.ray.origin.distanceTo(gr);l<e.near||l>e.far||t.push({distance:l,point:gr.clone(),uv:xi.getInterpolation(gr,Na,xr,Ua,tu,pc,nu,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Fa(i,e,t,n,s,r){Is.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(_r.x=r*Is.x-s*Is.y,_r.y=s*Is.x+r*Is.y):_r.copy(Is),i.copy(e),i.x+=_r.x,i.y+=_r.y,i.applyMatrix4(ld)}var _i=new D,mc=new D,Oa=new D,Ba=new D,go=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Ba.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Ba.dot(this.direction),l=-Ba.dot(Oa),c=Ba.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mc).addScaledVector(Oa,d),f}intersectSphere(e,t){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,_=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=n.x-a.x,y=n.y-a.y,x=n.z-a.z,v=Math.abs(l),w=Math.abs(c),T=Math.abs(h),m,M,L,C,R,F,W,I,V,Y,z,ce;if(v>=w&&v>=T?(L=l,F=u,V=_,ce=p,l>=0?(m=c,M=h,C=d,R=f,W=b,I=g,Y=y,z=x):(m=h,M=c,C=f,R=d,W=g,I=b,Y=x,z=y)):w>=T?(L=c,F=d,V=b,ce=y,c>=0?(m=h,M=l,C=f,R=u,W=g,I=_,Y=x,z=p):(m=l,M=h,C=u,R=f,W=_,I=g,Y=p,z=x)):(L=h,F=f,V=g,ce=x,h>=0?(m=l,M=c,C=u,R=d,W=_,I=b,Y=p,z=y):(m=c,M=l,C=d,R=u,W=b,I=_,Y=y,z=p)),L===0)return null;let $=m/L,ne=M/L,ae=1/L,Ue=C-$*F,Je=R-ne*F,ee=W-$*V,Ee=I-ne*V,Fe=Y-$*ce,Ze=z-ne*ce,Ce=Fe*Ee-Ze*ee,Xe=Ue*Ze-Je*Fe,bt=ee*Je-Ee*Ue;if(s){if(Ce<0||Xe<0||bt<0)return null}else if((Ce<0||Xe<0||bt<0)&&(Ce>0||Xe>0||bt>0))return null;let De=Ce+Xe+bt;if(De===0)return null;let it=ae*(Ce*F+Xe*V+bt*ce);return(De>0?it<0:it>0)?null:this.at(it/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},iu=new Et,is=new go,za=new Ui,su=new D,ka=new D,Ga=new D,Va=new D,gc=new D,Ha=new D,ru=new D,Wa=new D,Dt=class extends $t{constructor(e=new Wt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(gc.fromBufferAttribute(u,e),a?Ha.addScaledVector(gc,h):Ha.addScaledVector(gc.sub(t),h))}t.add(Ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(za.containsPoint(is.origin)===!1&&(is.intersectSphere(za,su)===null||is.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(r).invert(),is.copy(e.ray).applyMatrix4(iu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){let g=d[_],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,w=x;v<w;v+=3){let T=o.getX(v),m=o.getX(v+1),M=o.getX(v+2);s=Xa(this,p,e,n,c,h,u,T,m,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=_,p=b;g<p;g+=3){let y=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);s=Xa(this,a,e,n,c,h,u,y,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){let g=d[_],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,w=x;v<w;v+=3){let T=v,m=v+1,M=v+2;s=Xa(this,p,e,n,c,h,u,T,m,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=_,p=b;g<p;g+=3){let y=g,x=g+1,v=g+2;s=Xa(this,a,e,n,c,h,u,y,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ep(i,e,t,n,s,r,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Wi,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Ga),i.getVertexPosition(c,Va);let h=ep(i,e,t,n,ka,Ga,Va,ru);if(h){let u=new D;xi.getBarycoord(ru,ka,Ga,Va,u),s&&(h.uv=xi.getInterpolatedAttribute(s,o,l,c,u,new _e)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,l,c,u,new _e)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};xi.getNormal(ka,Ga,Va,d.normal),h.face=d,h.barycoord=u}return h}var Fr=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ws=class extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new Et,au=new Et,qa=[],ou=new ii,tp=new Et,vr=new Dt,yr=new Ui,Or=class extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),ou.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(ou)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),yr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),au.multiplyMatrices(n,Ps),vr.matrixWorld=au,vr.raycast(e,qa);for(let a=0,o=qa.length;a<o;a++){let l=qa[a];l.instanceId=r,l.object=this,t.push(l)}qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(s*this.count),s,this.count,qo,zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new Ui,np=new _e(.5,.5),Ya=new D,Oi=class{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],b=r[9],g=r[10],p=r[11],y=r[12],x=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-_,w-y).normalize(),s[1].setComponents(c+a,f+h,p+_,w+y).normalize(),s[2].setComponents(c+o,f+u,p+b,w+x).normalize(),s[3].setComponents(c-o,f-u,p-b,w-x).normalize(),n)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,p-g,w-v).normalize();else if(s[4].setComponents(c-l,f-d,p-g,w-v).normalize(),t===Nn)s[5].setComponents(c+l,f+d,p+g,w+v).normalize();else if(t===Bs)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=np.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lu=new Et,_o=class i{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];lu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Oi),n[s].setFromProjectionMatrix(lu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Oi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Br=class extends dn{constructor(e=[],t=us,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yn=class extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends dn{constructor(e,t,n=Zn,s,r,a,o=nn,l=nn,c,h=Mi,u=1){if(h!==Mi&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zr=class extends wi{constructor(e,t=Zn,n=us,s,r,a=nn,o=nn,l,c=Mi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},kr=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class i extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function _(b,g,p,y,x,v,w,T,m,M,L){let C=v/m,R=w/M,F=v/2,W=w/2,I=T/2,V=m+1,Y=M+1,z=0,ce=0,$=new D;for(let ne=0;ne<Y;ne++){let ae=ne*R-W;for(let Ue=0;Ue<V;Ue++){let Je=Ue*C-F;$[b]=Je*y,$[g]=ae*x,$[p]=I,c.push($.x,$.y,$.z),$[b]=0,$[g]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Ue/m),u.push(1-ne/M),z+=1}}for(let ne=0;ne<M;ne++)for(let ae=0;ae<m;ae++){let Ue=d+ae+V*ne,Je=d+ae+V*(ne+1),ee=d+(ae+1)+V*(ne+1),Ee=d+(ae+1)+V*ne;l.push(Ue,Je,Ee),l.push(Je,ee,Ee),ce+=6}o.addGroup(f,ce,L),f+=ce,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bi=class i extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,b=[],g=n/2,p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function y(){let v=new D,w=new D,T=0,m=(t-e)/n;for(let M=0;M<=r;M++){let L=[],C=M/r,R=C*(t-e)+e;for(let F=0;F<=s;F++){let W=F/s,I=W*l+o,V=Math.sin(I),Y=Math.cos(I);w.x=R*V,w.y=-C*n+g,w.z=R*Y,u.push(w.x,w.y,w.z),v.set(V,m,Y).normalize(),d.push(v.x,v.y,v.z),f.push(W,1-C),L.push(_++)}b.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){let C=b[L][M],R=b[L+1][M],F=b[L+1][M+1],W=b[L][M+1];(e>0||L!==0)&&(h.push(C,R,W),T+=3),(t>0||L!==r-1)&&(h.push(R,F,W),T+=3)}c.addGroup(p,T,0),p+=T}function x(v){let w=_,T=new _e,m=new D,M=0,L=v===!0?e:t,C=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),_++;let R=_;for(let F=0;F<=s;F++){let I=F/s*l+o,V=Math.cos(I),Y=Math.sin(I);m.x=L*Y,m.y=g*C,m.z=L*V,u.push(m.x,m.y,m.z),d.push(0,C,0),T.x=V*.5+.5,T.y=Y*.5*C+.5,f.push(T.x,T.y),_++}for(let F=0;F<s;F++){let W=w+F,I=R+F;v===!0?h.push(I,I+1,W):h.push(I+1,I,W),M+=3}c.addGroup(p,M,v===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gr=class i extends Bi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class i extends Wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new D,v=new D,w=new D;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],v),f(t[T+2],w),l(x,v,w,y)}function l(y,x,v,w){let T=w+1,m=[];for(let M=0;M<=T;M++){m[M]=[];let L=y.clone().lerp(v,M/T),C=x.clone().lerp(v,M/T),R=T-M;for(let F=0;F<=R;F++)F===0&&M===T?m[M][F]=L:m[M][F]=L.clone().lerp(C,F/R)}for(let M=0;M<T;M++)for(let L=0;L<2*(T-M)-1;L++){let C=Math.floor(L/2);L%2===0?(d(m[M][C+1]),d(m[M+1][C]),d(m[M][C])):(d(m[M][C+1]),d(m[M+1][C+1]),d(m[M+1][C]))}}function c(y){let x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let v=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(v,1-w)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],v=a[y+2],w=a[y+4],T=Math.max(x,v,w),m=Math.min(x,v,w);T>.9&&m<.1&&(x<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){let v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function _(){let y=new D,x=new D,v=new D,w=new D,T=new _e,m=new _e,M=new _e;for(let L=0,C=0;L<r.length;L+=9,C+=6){y.set(r[L+0],r[L+1],r[L+2]),x.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),T.set(a[C+0],a[C+1]),m.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),w.copy(y).add(x).add(v).divideScalar(3);let R=g(w);b(T,C+0,y,R),b(m,C+2,x,R),b(M,C+4,v,R)}}function b(y,x,v,w){w<0&&y.x===1&&(a[x]=y.x-1),v.x===0&&v.z===0&&(a[x]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new _e:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new Et;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Xs=class extends En{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vo=class extends Xs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var cu=new D,hu=new D,_c=new nh,xc=new nh,vc=new nh,as=class extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(hu.subVectors(s[0],s[1]).add(s[0]),c=hu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(cu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),_<1e-4&&(_=b),g<1e-4&&(g=b),_c.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,b,g),xc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,b,g),vc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,b,g)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(_c.calc(l),xc.calc(l),vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ip(i,e){let t=1-i;return t*t*e}function sp(i,e){return 2*(1-i)*i*e}function rp(i,e){return i*i*e}function br(i,e,t,n){return ip(i,e)+sp(i,t)+rp(i,n)}function ap(i,e){let t=1-i;return t*t*t*e}function op(i,e){let t=1-i;return 3*t*t*i*e}function lp(i,e){return 3*(1-i)*i*i*e}function cp(i,e){return i*i*i*e}function wr(i,e,t,n,s){return ap(i,e)+op(i,t)+lp(i,n)+cp(i,s)}var Vr=class extends En{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,s.x,r.x,a.x,o.x),wr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yo=class extends En{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,s.x,r.x,a.x,o.x),wr(e,s.y,r.y,a.y,o.y),wr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hr=class extends En{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends En{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends En{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(br(e,s.x,r.x,a.x),br(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends En{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(br(e,s.x,r.x,a.x),br(e,s.y,r.y,a.y),br(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uu(o,l.x,c.x,h.x,u.x),uu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},So=Object.freeze({__proto__:null,ArcCurve:vo,CatmullRomCurve3:as,CubicBezierCurve:Vr,CubicBezierCurve3:yo,EllipseCurve:Xs,LineCurve:Hr,LineCurve3:Mo,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:Xr,SplineCurve:qr}),bo=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new So[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Yr=class extends bo{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Hr(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wr(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Vr(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Xs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zi=class extends Yr{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yr().fromJSON(s))}return this}};function hp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=mp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],_=i[d+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>u&&(u=_)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return $r(r,a,t,o,l,c,0),a}function cd(i,e,t,n,s){let r;if(s===Ap(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=du(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=du(a/n|0,i[a],i[a+1],r);return r&&qs(r,r.next)&&(Jr(r),r=r.next),r}function os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qs(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(i,e,t,n,s,r,a){if(!i)return;!a&&r&&yp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?dp(i,n,s,r):up(i)){e.push(l.i,i.i,c.i),Jr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=fp(os(i),e),$r(i,e,t,n,s,r,2)):a===2&&pp(i,e,t,n,s,r):$r(os(i),e,t,n,s,r,1);break}}}function up(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Mr(s,o,r,l,a,c,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function dp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),_=Math.min(h,u,d),b=Math.max(o,l,c),g=Math.max(h,u,d),p=Tc(f,_,e,t,n),y=Tc(b,g,e,t,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=b&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&Mr(o,h,l,u,c,d,x.x,x.y)&&Vt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=b&&v.y>=_&&v.y<=g&&v!==s&&v!==a&&Mr(o,h,l,u,c,d,v.x,v.y)&&Vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=b&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&Mr(o,h,l,u,c,d,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=b&&v.y>=_&&v.y<=g&&v!==s&&v!==a&&Mr(o,h,l,u,c,d,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!qs(n,s)&&ud(n,t,t.next,s)&&Zr(n,s)&&Zr(s,n)&&(e.push(n.i,t.i,s.i),Jr(t),Jr(t.next),t=i=s),t=t.next}while(t!==i);return os(t)}function pp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bp(a,o)){let l=dd(a,o);a=os(a,a.next),l=os(l,l.next),$r(a,e,t,n,s,r,0),$r(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function mp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=cd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Sp(c))}s.sort(gp);for(let r=0;r<s.length;r++)t=_p(s[r],t);return t}function gp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _p(i,e){let t=xp(i,e);if(!t)return e;let n=dd(t,i);return os(n,n.next),os(t,t.next)}function xp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(qs(i,t))return t;do{if(qs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Zr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&vp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function vp(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function yp(i,e,t,n){let s=i;do s.z===0&&(s.z=Tc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mp(s)}function Mp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Tc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Mr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&hd(i,e,t,n,s,r,a,o)}function bp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wp(i,e)&&(Zr(i,e)&&Zr(e,i)&&Tp(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||qs(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qs(i,e){return i.x===e.x&&i.y===e.y}function ud(i,e,t,n){let s=Za(Vt(i,e,t)),r=Za(Vt(i,e,n)),a=Za(Vt(t,n,i)),o=Za(Vt(t,n,e));return!!(s!==r&&a!==o||s===0&&$a(i,t,e)||r===0&&$a(i,n,e)||a===0&&$a(t,i,n)||o===0&&$a(t,e,n))}function $a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Za(i){return i>0?1:i<0?-1:0}function wp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ud(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zr(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Tp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function dd(i,e){let t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function du(i,e,t,n){let s=Ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ap(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ec=class{static triangulate(e,t,n=2){return hp(e,t,n)}},rs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fu(e),pu(n,e);let a=e.length;t.forEach(fu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,pu(n,t[l]);let o=Ec.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function fu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ls=class i extends Wt{constructor(e=new zi([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ep,x,v=!1,w,T,m,M;if(p){x=p.getSpacedPoints(h),v=!0,d=!1;let oe=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,oe),T=new D,m=new D,M=new D}d||(g=0,f=0,_=0,b=0);let L=o.extractPoints(c),C=L.shape,R=L.holes;if(!rs.isClockWise(C)){C=C.reverse();for(let oe=0,de=R.length;oe<de;oe++){let xe=R[oe];rs.isClockWise(xe)&&(R[oe]=xe.reverse())}}function W(oe){let xe=10000000000000001e-36,Le=oe[0];for(let ye=1;ye<=oe.length;ye++){let st=ye%oe.length,ze=oe[st],at=ze.x-Le.x,Qe=ze.y-Le.y,mt=at*at+Qe*Qe,U=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(Le.x),Math.abs(Le.y)),Bt=xe*U*U;if(mt<=Bt){oe.splice(st,1),ye--;continue}Le=ze}}W(C),R.forEach(W);let I=R.length,V=C;for(let oe=0;oe<I;oe++){let de=R[oe];C=C.concat(de)}function Y(oe,de,xe){return de||nt("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(de,xe)}let z=C.length;function ce(oe,de,xe){let Le,ye,st,ze=oe.x-de.x,at=oe.y-de.y,Qe=xe.x-oe.x,mt=xe.y-oe.y,U=ze*ze+at*at,Bt=ze*mt-at*Qe;if(Math.abs(Bt)>Number.EPSILON){let tt=Math.sqrt(U),Rt=Math.sqrt(Qe*Qe+mt*mt),be=de.x-at/tt,zt=de.y+ze/tt,qe=xe.x-mt/Rt,je=xe.y+Qe/Rt,E=((qe-be)*mt-(je-zt)*Qe)/(ze*mt-at*Qe);Le=be+ze*E-oe.x,ye=zt+at*E-oe.y;let S=Le*Le+ye*ye;if(S<=2)return new _e(Le,ye);st=Math.sqrt(S/2)}else{let tt=!1;ze>Number.EPSILON?Qe>Number.EPSILON&&(tt=!0):ze<-Number.EPSILON?Qe<-Number.EPSILON&&(tt=!0):Math.sign(at)===Math.sign(mt)&&(tt=!0),tt?(Le=-at,ye=ze,st=Math.sqrt(U)):(Le=ze,ye=at,st=Math.sqrt(U/2))}return new _e(Le/st,ye/st)}let $=[];for(let oe=0,de=V.length,xe=de-1,Le=oe+1;oe<de;oe++,xe++,Le++)xe===de&&(xe=0),Le===de&&(Le=0),$[oe]=ce(V[oe],V[xe],V[Le]);let ne=[],ae,Ue=$.concat();for(let oe=0,de=I;oe<de;oe++){let xe=R[oe];ae=[];for(let Le=0,ye=xe.length,st=ye-1,ze=Le+1;Le<ye;Le++,st++,ze++)st===ye&&(st=0),ze===ye&&(ze=0),ae[Le]=ce(xe[Le],xe[st],xe[ze]);ne.push(ae),Ue=Ue.concat(ae)}let Je;if(g===0)Je=rs.triangulateShape(V,R);else{let oe=[],de=[];for(let xe=0;xe<g;xe++){let Le=xe/g,ye=f*Math.cos(Le*Math.PI/2),st=_*Math.sin(Le*Math.PI/2)+b;for(let ze=0,at=V.length;ze<at;ze++){let Qe=Y(V[ze],$[ze],st);Xe(Qe.x,Qe.y,-ye),Le===0&&oe.push(Qe)}for(let ze=0,at=I;ze<at;ze++){let Qe=R[ze];ae=ne[ze];let mt=[];for(let U=0,Bt=Qe.length;U<Bt;U++){let tt=Y(Qe[U],ae[U],st);Xe(tt.x,tt.y,-ye),Le===0&&mt.push(tt)}Le===0&&de.push(mt)}}Je=rs.triangulateShape(oe,de)}let ee=Je.length,Ee=_+b;for(let oe=0;oe<z;oe++){let de=d?Y(C[oe],Ue[oe],Ee):C[oe];v?(m.copy(w.normals[0]).multiplyScalar(de.x),T.copy(w.binormals[0]).multiplyScalar(de.y),M.copy(x[0]).add(m).add(T),Xe(M.x,M.y,M.z)):Xe(de.x,de.y,0)}for(let oe=1;oe<=h;oe++)for(let de=0;de<z;de++){let xe=d?Y(C[de],Ue[de],Ee):C[de];v?(m.copy(w.normals[oe]).multiplyScalar(xe.x),T.copy(w.binormals[oe]).multiplyScalar(xe.y),M.copy(x[oe]).add(m).add(T),Xe(M.x,M.y,M.z)):Xe(xe.x,xe.y,u/h*oe)}for(let oe=g-1;oe>=0;oe--){let de=oe/g,xe=f*Math.cos(de*Math.PI/2),Le=_*Math.sin(de*Math.PI/2)+b;for(let ye=0,st=V.length;ye<st;ye++){let ze=Y(V[ye],$[ye],Le);Xe(ze.x,ze.y,u+xe)}for(let ye=0,st=R.length;ye<st;ye++){let ze=R[ye];ae=ne[ye];for(let at=0,Qe=ze.length;at<Qe;at++){let mt=Y(ze[at],ae[at],Le);v?Xe(mt.x,mt.y+x[h-1].y,x[h-1].x+xe):Xe(mt.x,mt.y,u+xe)}}}Fe(),Ze();function Fe(){let oe=s.length/3;if(d){let de=0,xe=z*de;for(let Le=0;Le<ee;Le++){let ye=Je[Le];bt(ye[2]+xe,ye[1]+xe,ye[0]+xe)}de=h+g*2,xe=z*de;for(let Le=0;Le<ee;Le++){let ye=Je[Le];bt(ye[0]+xe,ye[1]+xe,ye[2]+xe)}}else{for(let de=0;de<ee;de++){let xe=Je[de];bt(xe[2],xe[1],xe[0])}for(let de=0;de<ee;de++){let xe=Je[de];bt(xe[0]+z*h,xe[1]+z*h,xe[2]+z*h)}}n.addGroup(oe,s.length/3-oe,0)}function Ze(){let oe=s.length/3,de=0;Ce(V,de),de+=V.length;for(let xe=0,Le=R.length;xe<Le;xe++){let ye=R[xe];Ce(ye,de),de+=ye.length}n.addGroup(oe,s.length/3-oe,1)}function Ce(oe,de){let xe=oe.length;for(;--xe>=0;){let Le=xe,ye=xe-1;ye<0&&(ye=oe.length-1);for(let st=0,ze=h+g*2;st<ze;st++){let at=z*st,Qe=z*(st+1),mt=de+Le+at,U=de+ye+at,Bt=de+ye+Qe,tt=de+Le+Qe;De(mt,U,Bt,tt)}}}function Xe(oe,de,xe){l.push(oe),l.push(de),l.push(xe)}function bt(oe,de,xe){it(oe),it(de),it(xe);let Le=s.length/3,ye=y.generateTopUV(n,s,Le-3,Le-2,Le-1);ct(ye[0]),ct(ye[1]),ct(ye[2])}function De(oe,de,xe,Le){it(oe),it(de),it(Le),it(de),it(xe),it(Le);let ye=s.length/3,st=y.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);ct(st[0]),ct(st[1]),ct(st[3]),ct(st[1]),ct(st[2]),ct(st[3])}function it(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function ct(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new So[s.type]().fromJSON(s)),new i(n,e.options)}},Ep={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new _e(r,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],_=e[s*3+2],b=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-u),new _e(d,1-_),new _e(b,1-p)]:[new _e(o,1-l),new _e(h,1-u),new _e(f,1-_),new _e(g,1-p)]}};function Cp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ys=class i extends xo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var On=class i extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],b=[],g=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<c;x++){let v=x*u-r;_.push(v,-y,0),b.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,v=y+c*(p+1),w=y+1+c*(p+1),T=y+1+c*p;f.push(x,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var si=class i extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],_=[],b=[],g=[];for(let p=0;p<=n;p++){let y=[],x=p/n,v=a+x*o,w=e*Math.cos(v),T=Math.sqrt(e*e-w*w),m=0;p===0&&a===0?m=.5/t:p===n&&l===Math.PI&&(m=-.5/t);for(let M=0;M<=t;M++){let L=M/t,C=s+L*r;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),_.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(L+m,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let x=h[p][y+1],v=h[p][y],w=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(x,v,T),(p!==n-1||l<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $s=class i extends Wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,f=new D,_=new D;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),_.subVectors(f,d).normalize(),h.push(_.x,_.y,_.z),u.push(p/s),u.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=s;g++){let p=(s+1)*b+g-1,y=(s+1)*(b-1)+g-1,x=(s+1)*(b-1)+g,v=(s+1)*b+g;l.push(p,y,v),l.push(y,x,v)}this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Zs=class i extends Wt{constructor(e=new Xr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new _e,h=new D,u=[],d=[],f=[],_=[];b(),this.setIndex(_),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function b(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),y(),p()}function g(x){h=e.getPointAt(x/t,h);let v=a.normals[x],w=a.binormals[x];for(let T=0;T<=s;T++){let m=T/s*Math.PI*2,M=Math.sin(m),L=-Math.cos(m);l.x=L*v.x+M*w.x,l.y=L*v.y+M*w.y,l.z=L*v.z+M*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){let w=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),m=(s+1)*x+v,M=(s+1)*(x-1)+v;_.push(w,T,M),_.push(T,m,M)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)c.x=x/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new So[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(mu(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=fs(i[t]);for(let s in n)e[s]=n[s]}return e}function mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var fd={clone:fs,merge:fn},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var To=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ls(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ja(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Eo=class extends ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=e,o=2*t-n;break;case wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=e,l=2*n-t;break;case wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),b=_*_,g=b*_,p=-d*g+2*d*b-d*_,y=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*_+1,x=(-1-f)*g+(1.5+f)*b+.5*_,v=f*g-f*b;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[c+w]+x*a[l+w]+v*a[u+w];return r}},Co=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ro=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Io=class extends ki{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let _=(n-t)/(s-t),b=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*_;return r}let d=o*2,f=e-1;for(let _=0;_!==o;++_){let b=a[c+_],g=a[l+_],p=f*d+_*2,y=u[p],x=u[p+1],v=e*d+_*2,w=h[v],T=h[v+1],m=Dp(n,t,y,w,s);r[_]=pd(m,b,x,T,g)}return r}};function pd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Lp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Dp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=pd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Lp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ja(e.settings)&&(n.settings={inTangents:Ls(e.settings.inTangents,Array),outTangents:Ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break;case Mc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Qa;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ja(this.settings)&&(gu(this.settings.inTangents,e),gu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ja(this.settings)&&(_u(this.settings.inTangents,e),_u(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){nt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ff(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let b=t[u+_];if(b!==t[d+_]||b!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ja(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function _u(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ho;var Gi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Tr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Po.prototype.ValueTypeName="color";var Lo=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Lo.prototype.ValueTypeName="number";var Do=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Kr=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Tr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};No.prototype.ValueTypeName="vector";var to={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(xu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!xu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Uo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},md=new Uo,Js=class{constructor(e){this.manager=e!==void 0?e:md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Js.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=new WeakMap,Fo=class extends Js{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=to.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ds.get(a);u===void 0&&(u=[],Ds.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=zs("img");function l(){h(),t&&t(this);let u=Ds.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),to.remove(`image:${e}`);let d=Ds.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),to.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Hi=class extends Js{constructor(e){super(e)}load(e,t,n,s){let r=new dn,a=new Fo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},jr=class extends $t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qr=class extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yc=new Et,vu=new D,yu=new D,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Bs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ka=new D,ja=new Un,ei=new D,ea=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,ja,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ka,ja,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,ja,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new D,Mu=new _e,Su=new _e,_n=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ta=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cc=class extends Oo{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Cc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ns=-90,Us=1,Ks=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Ns,Us,e,t);s.layers=this.layers,this.add(s);let r=new _n(Ns,Us,e,t);r.layers=this.layers,this.add(r);let a=new _n(Ns,Us,e,t);a.layers=this.layers,this.add(a);let o=new _n(Ns,Us,e,t);o.layers=this.layers,this.add(o);let l=new _n(Ns,Us,e,t);l.layers=this.layers,this.add(l);let c=new _n(Ns,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Bo=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var sh="\\[\\]\\.:\\/",Np=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",Up="[^"+sh.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",rh),Op=/(WCOD+)?/.source.replace("WCOD",Up),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),kp=new RegExp("^"+Fp+Op+Bp+zp+"$"),Gp=["material","materials","bones","map"],Rc=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(e){let t=kp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Rc;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=new Float32Array(1);var Ic=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ah(i,e,t,n){let s=Vp(n);switch(t){case $c:return i*e;case qo:return i*e/s.components*s.byteLength;case Yo:return i*e/s.components*s.byteLength;case qi:return i*e*2/s.components*s.byteLength;case $o:return i*e*2/s.components*s.byteLength;case Zc:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case Zo:return i*e*4/s.components*s.byteLength;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case Qo:return Math.max(i,16)*Math.max(e,8)/4;case Jo:case jo:return Math.max(i,8)*Math.max(e,8)/2;case el:case tl:case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nl:case ua:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yl:case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vp(i){switch(i){case yn:case Wc:return{byteLength:1,components:1};case er:case Xc:case Jn:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Zn:case Ho:case zn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Od(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $p(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],b=u[f];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let b=u[f];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,qm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
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
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform float backgroundBlurriness;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
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
}`,g0=`#define PHONG
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
}`,_0=`#define PHONG
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
}`,x0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,M0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:Kp,alphamap_pars_fragment:jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,defaultnormal_vertex:vm,displacementmap_pars_vertex:ym,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:wm,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Em,envmap_pars_fragment:Cm,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:km,envmap_vertex:Im,fog_vertex:Pm,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:$m,lights_fragment_end:Zm,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphinstance_vertex:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Ag,dithering_pars_fragment:Eg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:zg,tonemapping_fragment:kg,tonemapping_pars_fragment:Gg,transmission_fragment:Vg,transmission_pars_fragment:Hg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:$g,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:Kg,cube_vert:jg,cube_frag:Qg,depth_vert:e0,depth_frag:t0,distance_vert:n0,distance_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:a0,linedashed_frag:o0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:_0,meshphysical_vert:x0,meshphysical_frag:v0,meshtoon_vert:y0,meshtoon_frag:M0,points_vert:S0,points_frag:b0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:E0},Ie={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},li={basic:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:fn([Ie.points,Ie.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:fn([Ie.common,Ie.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:fn([Ie.sprite,Ie.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:fn([Ie.lights,Ie.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};li.physical={uniforms:fn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Cl={r:0,b:0,g:0},C0=new Et,Bd=new rt;Bd.set(-1,0,0,0,1,0,0,0,1);function R0(i,e,t,n,s,r){let a=new lt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let x=y.isScene===!0?y.background:null;if(x&&x.isTexture){let v=y.backgroundBlurriness>0;x=e.get(x,v)}return x}function _(y){let x=!1,v=f(y);v===null?g(a,o):v&&v.isColor&&(g(v,1),x=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,x){let v=f(x);v&&v.isCubeTexture?(c===void 0&&(c=new Dt(new Fn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:fs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(x.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bd),c.material.toneMapped=yt.getTransfer(v.colorSpace)!==It,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dt(new On(2,2),new ri({name:"BackgroundMaterial",uniforms:fs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=yt.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,x){y.getRGB(Cl,ih(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,x,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:_,addToRenderList:b,dispose:p}}function I0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(R,F,W,I,V){let Y=!1,z=u(R,I,W,F);r!==z&&(r=z,c(r.object)),Y=f(R,I,W,V),Y&&_(R,I,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(R,F,W,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,F,W,I){let V=I.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let z=R.isInstancedMesh===!0?R.id:0,ce=Y[z];ce===void 0&&(ce={},Y[z]=ce);let $=ce[W.id];$===void 0&&($={},ce[W.id]=$);let ne=$[V];return ne===void 0&&(ne=d(l()),$[V]=ne),ne}function d(R){let F=[],W=[],I=[];for(let V=0;V<t;V++)F[V]=0,W[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:I,object:R,attributes:{},index:null}}function f(R,F,W,I){let V=r.attributes,Y=F.attributes,z=0,ce=W.getAttributes();for(let $ in ce)if(ce[$].location>=0){let ae=V[$],Ue=Y[$];if(Ue===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Ue=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Ue=R.instanceColor)),ae===void 0||ae.attribute!==Ue||Ue&&ae.data!==Ue.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function _(R,F,W,I){let V={},Y=F.attributes,z=0,ce=W.getAttributes();for(let $ in ce)if(ce[$].location>=0){let ae=Y[$];ae===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));let Ue={};Ue.attribute=ae,ae&&ae.data&&(Ue.data=ae.data),V[$]=Ue,z++}r.attributes=V,r.attributesNum=z,r.index=I}function b(){let R=r.newAttributes;for(let F=0,W=R.length;F<W;F++)R[F]=0}function g(R){p(R,0)}function p(R,F){let W=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;W[R]=1,I[R]===0&&(i.enableVertexAttribArray(R),I[R]=1),V[R]!==F&&(i.vertexAttribDivisor(R,F),V[R]=F)}function y(){let R=r.newAttributes,F=r.enabledAttributes;for(let W=0,I=F.length;W<I;W++)F[W]!==R[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function x(R,F,W,I,V,Y,z){z===!0?i.vertexAttribIPointer(R,F,W,V,Y):i.vertexAttribPointer(R,F,W,I,V,Y)}function v(R,F,W,I){b();let V=I.attributes,Y=W.getAttributes(),z=F.defaultAttributeValues;for(let ce in Y){let $=Y[ce];if($.location>=0){let ne=V[ce];if(ne===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){let ae=ne.normalized,Ue=ne.itemSize,Je=e.get(ne);if(Je===void 0)continue;let ee=Je.buffer,Ee=Je.type,Fe=Je.bytesPerElement,Ze=Ee===i.INT||Ee===i.UNSIGNED_INT||ne.gpuType===Ho;if(ne.isInterleavedBufferAttribute){let Ce=ne.data,Xe=Ce.isInterleavedBuffer===!0?Ce.stride:Ce.itemSize,bt=ne.offset;if(Ce.isInstancedInterleavedBuffer||Ce.isInstancedBufferAttribute){for(let De=0;De<$.locationSize;De++)p($.location+De,Ce.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let De=0;De<$.locationSize;De++)g($.location+De);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let De=0;De<$.locationSize;De++)x($.location+De,Ue/$.locationSize,Ee,ae,Xe*Fe,(bt+Ue/$.locationSize*De)*Fe,Ze)}else{if(ne.isInstancedBufferAttribute){for(let Ce=0;Ce<$.locationSize;Ce++)p($.location+Ce,ne.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ce=0;Ce<$.locationSize;Ce++)g($.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ce=0;Ce<$.locationSize;Ce++)x($.location+Ce,Ue/$.locationSize,Ee,ae,Ue*Fe,Ue/$.locationSize*Ce*Fe,Ze)}}else if(z!==void 0){let ae=z[ce];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv($.location,ae);break;case 3:i.vertexAttrib3fv($.location,ae);break;case 4:i.vertexAttrib4fv($.location,ae);break;default:i.vertexAttrib1fv($.location,ae)}}}}y()}function w(){L();for(let R in n){let F=n[R];for(let W in F){let I=F[W];for(let V in I){let Y=I[V];for(let z in Y)h(Y[z].object),delete Y[z];delete I[V]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let F=n[R.id];for(let W in F){let I=F[W];for(let V in I){let Y=I[V];for(let z in Y)h(Y[z].object),delete Y[z];delete I[V]}}delete n[R.id]}function m(R){for(let F in n){let W=n[F];for(let I in W){let V=W[I];if(V[R.id]===void 0)continue;let Y=V[R.id];for(let z in Y)h(Y[z].object),delete Y[z];delete V[R.id]}}}function M(R){for(let F in n){let W=n[F],I=R.isInstancedMesh===!0?R.id:0,V=W[I];if(V!==void 0){for(let Y in V){let z=V[Y];for(let ce in z)h(z[ce].object),delete z[ce];delete V[Y]}delete W[I],Object.keys(W).length===0&&delete n[F]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:m,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function P0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function L0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==Kn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let M=m===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==yn&&m!==zn&&!M&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,maxSamples:w,samples:T}}function D0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Xn,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,x=y*4,v=p.clippingState||null;l.value=v,v=h(_,d,x,f);for(let w=0;w!==x;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,_!==!0||g===null){let p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=f;x!==b;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var ma=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:cs});r.uniforms.tEquirect.value=t;let a=new Dt(s,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=xn),new Ks(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},gd=256,N0=3,U0=20,zd=256,kd=16,F0=3,O0=new D,B0=new lt,Il=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ks(1,10,null),this._boxMesh=new Dt(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=O0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(B0));let g=new Ks(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=_,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gd,sd(e))}_fromTexture(e,t){e.mapping===us||e.mapping===Qs?this._setSize(e.image.length===0?gd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_d(e,!1,!1),n=Math.log2(e)-N0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_d(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===us||e.mapping===Qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=z0(),this._integrationMaterial=k0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/kd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-F0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(zd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=G0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function _d(i,e,t){return new ma(i,{minFilter:Ti,generateMipmaps:e,type:Jn,colorSpace:Ar,depthBuffer:t})}function ga(i,e,t){return new ri({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:vn,blending:cs,depthTest:!1,depthWrite:!1})}function z0(){return ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zd}u

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
	`)}function k0(){return ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kd}},`

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
	`)}function G0(){return ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${U0}
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
	`)}function xd(){return ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vd(){return ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function V0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ko||f===Go)if(e.has(d)){let _=e.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let b=new ma(_.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,_=f===ko||f===Go,b=f===us||f===Qs;if(_||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Il(i)),g=_?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return _&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new Il(i)),g=_?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===ko?d.mapping=us:f===Go&&(d.mapping=Qs),d}function l(d){let f=0,_=6;for(let b=0;b<_;b++)d[b]!==void 0&&f++;return f===_}function c(d){let f=d.target;f.removeEventListener("dispose",c);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function H0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Sr("WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let b=r.get(_);b&&(e.remove(b),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(_){let b=_.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}function u(_){let b=_.index,g=_.attributes.position,p=0;if(g===void 0)return;let y=b!==null?b.array.length:g.array.length/3-1,x=g.count>=65535?Nr:Dr,v=new x(Math.ceil(y/3)*6,1),w=v.array;if(b!==null){let m=b.array;p=b.version;for(let M=0,L=0;M<y;M+=3){let C=m[M+0],R=m[M+1],F=m[M+2];w[L++]=C,w[L++]=R,w[L++]=R,w[L++]=F,w[L++]=F,w[L++]=C}}else{p=g.version;for(let m=0,M=0;m<y;m+=3){let L=m+0,C=m+1,R=m+2;w[M++]=L,w[M++]=C,w[M++]=C,w[M++]=R,w[M++]=R,w[M++]=L}}v.version=p;let T=r.get(_);T&&e.remove(T),r.set(_,v)}function d(_){let b=r.get(_);if(b){let g=_.index;g!==null&&b.version<g.version&&u(_)}else u(_);return r.get(_)}function f(){for(let _ in s){let b=s[_].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function X0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function q0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Y0(i,e,t){let n=new WeakMap,s=new kt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let L=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;f===!0&&(x=1),_===!0&&(x=2),b===!0&&(x=3);let v=o.attributes.position.count*x,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*w*4*u),m=new Rr(T,v,w,u);m.type=zn,m.needsUpdate=!0;let M=x*4;for(let C=0;C<u;C++){let R=g[C],F=p[C],W=y[C],I=v*w*4*C;for(let V=0;V<R.count;V++){let Y=V*M;f===!0&&(s.fromBufferAttribute(R,V),T[I+Y+0]=s.x,T[I+Y+1]=s.y,T[I+Y+2]=s.z,T[I+Y+3]=0),_===!0&&(s.fromBufferAttribute(F,V),T[I+Y+4]=s.x,T[I+Y+5]=s.y,T[I+Y+6]=s.z,T[I+Y+7]=0),b===!0&&(s.fromBufferAttribute(W,V),T[I+Y+8]=s.x,T[I+Y+9]=s.y,T[I+Y+10]=s.z,T[I+Y+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:m,size:new _e(v,w)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Z0={[Oc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[ra]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function J0(i,e,t,n,s,r){let a=new Tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Wt;h.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let u=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Dt(h,u),f=new ta(-1,1,1,-1,0,1),_=null,b=null,g=!1,p,y=null,x=[],v=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let m=0;m<x.length;m++){let M=x[m];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){x=w,v=x.length>0&&x[0].isRenderPass===!0;let T=a.width,m=a.height;x.length>0&&o===null&&(o=new Tn(T,m,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(T,m,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&x.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new wi(T,m),r===!0&&(c.format=Ai,c.type=ds)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<x.length;L++){let C=x[L];C.setSize&&C.setSize(T,m),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===ai&&x.length===0)return!1;if(y=T,T!==null){let m=T.width,M=T.height;(a.width!==m||a.height!==M)&&this.setSize(m,M)}return v===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=ai,!0},this.hasRenderPass=function(){return v},this.end=function(w,T){w.toneMapping=p,g=!0;let m=a,M=o;for(let L=0;L<x.length;L++){let C=x[L];C.enabled!==!1&&(C.render(w,M,m,T),C.needsSwap!==!1&&(m=M,M=M===o?l:o))}if(_!==w.outputColorSpace||b!==w.toneMapping){_=w.outputColorSpace,b=w.toneMapping,u.defines={},yt.getTransfer(_)===It&&(u.defines.SRGB_TRANSFER="");let L=Z0[b];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(y),w.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Gd=new dn,Vd=new wi(1,1),Hd=new zr(1),Wd=new Rr,Xd=new mo,qd=new Br,yd=[],Md=[],Sd=new Float32Array(16),bd=new Float32Array(9),wd=new Float32Array(4);function nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ll(i,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),Jt(t,n)}}function n_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),Jt(t,n)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),Jt(t,n)}}function s_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function Dl(i){return i.version===0&&(i.compareFunction=jc,i.needsUpdate=!0),i}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Dl(Vd):r=Gd,t.setTexture2D(e||r,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xd,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Dl(Hd):r=qd,t.setTextureCube(e||r,s)}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wd,s)}function g_(i){switch(i){case 5126:return K0;case 35664:return j0;case 35665:return Q0;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(i,e){i.uniform1fv(this.addr,e)}function x_(i,e){let t=nr(e,this.size,2);i.uniform2fv(this.addr,t)}function v_(i,e){let t=nr(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=nr(e,this.size,4);i.uniform4fv(this.addr,t)}function M_(i,e){let t=nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S_(i,e){let t=nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b_(i,e){let t=nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w_(i,e){i.uniform1iv(this.addr,e)}function T_(i,e){i.uniform2iv(this.addr,e)}function A_(i,e){i.uniform3iv(this.addr,e)}function E_(i,e){i.uniform4iv(this.addr,e)}function C_(i,e){i.uniform1uiv(this.addr,e)}function R_(i,e){i.uniform2uiv(this.addr,e)}function I_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function L_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dl(Vd):a=Gd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function D_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xd,r[a])}function N_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Dl(Hd):a=qd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function U_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wd,r[a])}function F_(i){switch(i){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return w_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return E_;case 5125:return C_;case 36294:return R_;case 36295:return I_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}var ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g_(t.type)}},hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Td(t,c===void 0?new ch(o,i,e):new hh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new uh(o),Td(t,u)),t=u}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);O_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var B_=37297,z_=0;function k_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ed=new rt;function G_(i){yt._getMatrix(Ed,yt.workingColorSpace,i);let e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Er:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+k_(i.getShaderSource(e),o)}else return r}function V_(i,e){let t=G_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var H_={[Oc]:"Linear",[Bc]:"Reinhard",[zc]:"Cineon",[ra]:"ACESFilmic",[Gc]:"AgX",[Vc]:"Neutral",[kc]:"Custom"};function W_(i,e){let t=H_[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rl=new D;function X_(){yt.getLuminanceCoefficients(Rl);let i=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Y_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pa(i){return i!==""}function Rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(Z_,J_)}function J_(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return dh(t)}var K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(K_,j_)}function j_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Q_={[ia]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function ex(i){return Q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tx={[Qs]:"ENVMAP_MODE_REFRACTION"};function nx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ix={[Fc]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function sx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ix[i.combine]||"ENVMAP_BLENDING_NONE"}function rx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ex(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=nx(t),u=sx(t),d=q_(t),f=Y_(r),_=s.createProgram(),b,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(pa).join(`
`),g.length>0&&(g+=`
`)):(b=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),g=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ft.tonemapping_pars_fragment:"",t.toneMapping!==ai?W_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),X_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=dh(a),a=Rd(a,t),a=Id(a,t),o=dh(o),o=Rd(o,t),o=Id(o,t),a=Pd(a),o=Pd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=p+b+a,x=p+g+o,v=Ad(s,s.VERTEX_SHADER,y),w=Ad(s,s.FRAGMENT_SHADER,x);s.attachShader(_,v),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(v)||"",W=s.getShaderInfoLog(w)||"",I=R.trim(),V=F.trim(),Y=W.trim(),z=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,w);else{let $=Cd(s,v,"vertex"),ne=Cd(s,w,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+$+`
`+ne)}else I!==""?et("WebGLProgram: Program Info Log:",I):(V===""||Y==="")&&(ce=!1);ce&&(C.diagnostics={runnable:z,programLog:I,vertexShader:{log:V,prefix:b},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(v),s.deleteShader(w),m=new tr(s,_),M=$_(s,_)}let m;this.getUniforms=function(){return m===void 0&&T(this),m};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,B_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=w,this}var ax=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ph(e),t.set(e,n)),n}},ph=class{constructor(e){this.id=ax++,this.code=e,this.usedTimes=0}};function ox(i){return i===qi||i===ua||i===da}function lx(i,e,t,n,s,r){let a=new Ir,o=new fh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}function _(m,M,L,C,R,F){let W=C.fog,I=R.geometry,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||V,Y),ce=d[m.type],$=n.precision;m.precision!==null&&($=n.getMaxPrecision(m.precision),$!==m.precision&&et("WebGLProgram.getParameters:",m.precision,"not supported, using",$,"instead."));let ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ae=ne!==void 0?ne.length:0,Ue=0;I.morphAttributes.position!==void 0&&(Ue=1),I.morphAttributes.normal!==void 0&&(Ue=2),I.morphAttributes.color!==void 0&&(Ue=3);let Je,ee,Ee,Fe;if(ce){let Te=li[ce];Je=Te.vertexShader,ee=Te.fragmentShader}else{Je=m.vertexShader,ee=m.fragmentShader;let Te=o.getVertexShaderStage(m),Tt=o.getFragmentShaderStage(m);o.update(m,Te,Tt),Ee=Te.id,Fe=Tt.id}let Ze=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Xe=R.isInstancedMesh===!0,bt=R.isBatchedMesh===!0,De=!!m.map,it=!!m.matcap,ct=!!z,oe=ct&&z.isPMREMTexture===!0,de=!!m.aoMap,xe=!!m.lightMap,Le=!!m.bumpMap&&m.wireframe===!1,ye=!!m.normalMap,st=!!m.displacementMap,ze=!!m.emissiveMap,at=!!m.metalnessMap,Qe=!!m.roughnessMap,mt=m.anisotropy>0,U=m.clearcoat>0,Bt=m.diffuseRoughness>0,tt=m.dispersion>0,Rt=m.retroreflectivity>0,be=m.iridescence>0,zt=m.sheen>0,qe=m.transmission>0,je=mt&&!!m.anisotropyMap,E=U&&!!m.clearcoatMap,S=U&&!!m.clearcoatNormalMap,G=U&&!!m.clearcoatRoughnessMap,he=Bt&&!!m.diffuseRoughnessMap,se=be&&!!m.iridescenceMap,fe=be&&!!m.iridescenceThicknessMap,Me=zt&&!!m.sheenColorMap,Q=zt&&!!m.sheenRoughnessMap,te=!!m.specularMap,ve=!!m.specularColorMap,P=!!m.specularIntensityMap,ie=qe&&!!m.transmissionMap,K=qe&&!!m.thicknessMap,ge=!!m.gradientMap,pe=!!m.alphaMap,me=m.alphaTest>0,Oe=!!m.alphaHash,ht=!!m.extensions,ue=ai;m.toneMapped&&(Ze===null||Ze.isXRRenderTarget===!0)&&(ue=i.toneMapping);let ke=oe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ke={shaderID:ce,shaderType:m.type,shaderName:m.name,vertexShader:Je,fragmentShader:ee,defines:m.defines,customVertexShaderID:Ee,customFragmentShaderID:Fe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:$,batching:bt,batchingColor:bt&&R._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&R.instanceColor!==null,instancingMorph:Xe&&R.morphTexture!==null,outputColorSpace:Ze===null?i.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:De,matcap:it,envMap:ct,envMapMode:ct&&z.mapping,envMapPMREM:oe,envMapMaxLod:oe?ke.length-1:null,envMapSize:oe?ke[0].width:null,aoMap:de,lightMap:xe,bumpMap:Le,normalMap:ye,displacementMap:st,emissiveMap:ze,normalMapObjectSpace:ye&&m.normalMapType===Yu,normalMapTangentSpace:ye&&m.normalMapType===Al,packedNormalMap:ye&&m.normalMapType===Al&&ox(m.normalMap.format),metalnessMap:at,roughnessMap:Qe,anisotropy:mt,anisotropyMap:je,clearcoat:U,clearcoatMap:E,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:Bt,diffuseRoughnessMap:he,dispersion:tt,retroreflection:Rt,iridescence:be,iridescenceMap:se,iridescenceThicknessMap:fe,sheen:zt,sheenColorMap:Me,sheenRoughnessMap:Q,specularMap:te,specularColorMap:ve,specularIntensityMap:P,transmission:qe,transmissionMap:ie,thicknessMap:K,gradientMap:ge,opaque:m.transparent===!1&&m.blending===Xi&&m.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:Oe,combine:m.combine,mapUv:De&&f(m.map.channel),aoMapUv:de&&f(m.aoMap.channel),lightMapUv:xe&&f(m.lightMap.channel),bumpMapUv:Le&&f(m.bumpMap.channel),normalMapUv:ye&&f(m.normalMap.channel),displacementMapUv:st&&f(m.displacementMap.channel),emissiveMapUv:ze&&f(m.emissiveMap.channel),metalnessMapUv:at&&f(m.metalnessMap.channel),roughnessMapUv:Qe&&f(m.roughnessMap.channel),anisotropyMapUv:je&&f(m.anisotropyMap.channel),clearcoatMapUv:E&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(m.sheenRoughnessMap.channel),specularMapUv:te&&f(m.specularMap.channel),specularColorMapUv:ve&&f(m.specularColorMap.channel),specularIntensityMapUv:P&&f(m.specularIntensityMap.channel),transmissionMapUv:ie&&f(m.transmissionMap.channel),thicknessMapUv:K&&f(m.thicknessMap.channel),alphaMapUv:pe&&f(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ye||mt),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(De||pe),fog:!!W,useFog:m.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&ye===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ue,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:De&&m.map.isVideoTexture===!0&&yt.getTransfer(m.map.colorSpace)===It,decodeVideoTextureEmissive:ze&&m.emissiveMap.isVideoTexture===!0&&yt.getTransfer(m.emissiveMap.colorSpace)===It,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Bn,flipSided:m.side===vn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ht&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&m.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function b(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let L in m.defines)M.push(L),M.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(g(M,m),p(M,m),M.push(i.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function g(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapPMREM),m.push(M.envMapMaxLod),m.push(M.envMapSize),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.diffuseRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.numLightProbeGrids),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function p(m,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function y(m){let M=d[m.type],L;if(M){let C=li[M];L=fd.clone(C.uniforms)}else L=m.uniforms;return L}function x(m,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new rx(i,M,m,s),c.push(L),h.set(M,L)),L}function v(m){if(--m.usedTimes===0){let M=c.indexOf(m);c[M]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:y,acquireProgram:x,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:T}}function cx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,b,g,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=_,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=g,y.group=p),e++,y}function l(d,f,_,b,g,p,y){y.reversedDepth===!0&&(g=-g);let x=o(d,f,_,b,g,p);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function c(d,f,_,b,g,p){let y=o(d,f,_,b,g,p);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||hx),n.length>1&&n.sort(f||Dd),s.length>1&&s.sort(f||Dd)}function u(){for(let d=e,f=i.length;d<f;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function ux(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Nd,i.set(n,[a])):s>=r.length?(a=new Nd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new lt};break;case"SpotLight":t={position:new D,direction:new D,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var px=0;function mx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gx(i){let e=new dx,t=fx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Et,a=new Et;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,_=0,b=0,g=0,p=0,y=0,x=0,v=0,w=0,T=0,m=0,M=0,L=0,C=0;c.sort(mx);for(let F=0,W=c.length;F<W;F++){let I=c[F],V=I.color,Y=I.intensity,z=I.distance,ce=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qi?ce=I.shadow.map.texture:ce=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*Y,u+=V.g*Y,d+=V.b*Y;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],Y);C++}else if(I.isSunLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[_]=ae,n.sunShadowMap[_]=ce;let Ue=ne.getViewportCount();for(let Je=0;Je<Ue;Je++)n.sunShadowMatrix[b+Je]=ne.getMatrix(Je),n.sunShadowCascade[b+Je]=ne._cascadeData[Je];b+=Ue,_++}n.sun[f]=$,f++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.directionalShadow[g]=ae,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=I.shadow.matrix,w++}n.directional[g]=$,g++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(V).multiplyScalar(Y),$.distance=z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[y]=$;let ne=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,ne.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[y]=ne.matrix,I.castShadow){let ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.spotShadow[y]=ae,n.spotShadowMap[y]=ce,m++}y++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(V).multiplyScalar(Y),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[x]=$,x++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let ne=I.shadow,ae=t.get(I);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,n.pointShadow[p]=ae,n.pointShadowMap[p]=ce,n.pointShadowMatrix[p]=I.shadow.matrix,T++}n.point[p]=$,p++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(Y),$.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[v]=$,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==y||R.rectAreaLength!==x||R.hemiLength!==v||R.numSunShadows!==_||R.numDirectionalShadows!==w||R.numPointShadows!==T||R.numSpotShadows!==m||R.numSpotMaps!==M||R.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=x,n.point.length=p,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,R.sunLength=f,R.directionalLength=g,R.pointLength=p,R.spotLength=y,R.rectAreaLength=x,R.hemiLength=v,R.numSunShadows=_,R.numDirectionalShadows=w,R.numPointShadows=T,R.numSpotShadows=m,R.numSpotMaps=M,R.numLightProbes=C,n.version=px++)}function l(c,h){let u=0,d=0,f=0,_=0,b=0,g=0,p=h.matrixWorldInverse;for(let y=0,x=c.length;y<x;y++){let v=c[y];if(v.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(v.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(v.isRectAreaLight){let w=n.rectArea[b];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Ud(i){let e=new gx(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _x(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ud(i),e.set(s,[o])):r>=a.length?(o=new Ud(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`,yx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Mx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Fd=new Et,fa=new D,lh=new D;function Sx(i,e,t){let n=new Oi,s=new _e,r=new _e,a=new kt,o=new To,l=new Ao,c={},h=t.maxTextureSize,u={[Wi]:vn,[vn]:Wi,[Bn]:Bn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:xx,fragmentShader:vx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Wt;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Dt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let p=this.type;this.render=function(T,m,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===zo&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);let L=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(cs),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=p!==this.type;W&&m.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=T.length;I<V;I++){let Y=T[I],z=Y.shadow;if(z===void 0){et("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ce=z.getFrameExtents();s.multiply(ce),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,z.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===js){if(Y.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Tn(s.x,s.y,{format:qi,type:Jn,minFilter:xn,magFilter:xn,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new wi(s.x,s.y,zn),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=Mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=nn,z.map.depthTexture.magFilter=nn}else Y.isPointLight?(z.map=new ma(s.x),z.map.depthTexture=new zr(s.x,Zn)):(z.map=new Tn(s.x,s.y),z.map.depthTexture=new wi(s.x,s.y,Zn)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=Mi,this.type===ia?(z.map.depthTexture.compareFunction=$?Kc:Jc,z.map.depthTexture.minFilter=xn,z.map.depthTexture.magFilter=xn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=nn,z.map.depthTexture.magFilter=nn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let ne=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Y.isPointLight!==!0&&z.updateMatrices(Y,M);let ae=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let Ue=0;Ue<ne;Ue++){let Je=z.getCamera(Ue);if(Y.isPointLight){let ee=z.camera,Ee=z.matrix,Fe=Y.distance||ee.far;Fe!==ee.far&&(ee.far=Fe,ee.updateProjectionMatrix()),fa.setFromMatrixPosition(Y.matrixWorld),ee.position.copy(fa),lh.copy(ee.position),lh.add(yx[Ue]),ee.up.copy(Mx[Ue]),ee.lookAt(lh),ee.updateMatrixWorld(),Ee.makeTranslation(-fa.x,-fa.y,-fa.z),Fd.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Fd,ee.coordinateSystem,ee.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ue),i.clear();else{Ue===0&&(i.setRenderTarget(z.map),i.clear());let ee=z.getViewport(Ue);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),F.viewport(a)}n=z.getFrustum(Ue),v(m,M,Je,Y,ae,this.type)}z.isPointLightShadow!==!0&&this.type===js&&y(z,M),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(L,C,R)};function y(T,m){let M=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Tn(s.x,s.y,{format:qi,type:Jn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(m,null,M,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(m,null,M,f,b,null)}function x(T,m,M,L){let C=null,R=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)C=R;else if(C=M.isPointLight===!0?l:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let F=C.uuid,W=m.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let V=I[W];V===void 0&&(V=C.clone(),I[W]=V,m.addEventListener("dispose",w)),C=V}if(C.visible=m.visible,C.wireframe=m.wireframe,L===js?C.side=m.shadowSide!==null?m.shadowSide:m.side:C.side=m.shadowSide!==null?m.shadowSide:u[m.side],C.alphaMap=m.alphaMap,C.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,C.map=m.map,C.clipShadows=m.clipShadows,C.clippingPlanes=m.clippingPlanes,C.clipIntersection=m.clipIntersection,C.displacementMap=m.displacementMap,C.displacementScale=m.displacementScale,C.displacementBias=m.displacementBias,C.wireframeLinewidth=m.wireframeLinewidth,C.linewidth=m.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=M}return C}function v(T,m,M,L,C,R){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===js)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=e.update(T),V=T.material;if(Array.isArray(V)){let Y=I.groups;for(let z=0,ce=Y.length;z<ce;z++){let $=Y[z],ne=V[$.materialIndex];if(ne&&ne.visible){let ae=x(T,ne,L,R);T.onBeforeShadow(i,T,m,M,I,ae,$),i.renderBufferDirect(M,null,I,ae,T,$),T.onAfterShadow(i,T,m,M,I,ae,$)}}}else if(V.visible){let Y=x(T,V,L,R);T.onBeforeShadow(i,T,m,M,I,Y,null),i.renderBufferDirect(M,null,I,Y,T,null),T.onAfterShadow(i,T,m,M,I,Y,null)}}let W=T.children;for(let I=0,V=W.length;I<V;I++)v(W[I],m,M,L,C,R)}function w(T){T.target.removeEventListener("dispose",w);for(let M in c){let L=c[M],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function bx(i,e){function t(){let P=!1,ie=new kt,K=null,ge=new kt(0,0,0,0);return{setMask:function(pe){K!==pe&&!P&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){P=pe},setClear:function(pe,me,Oe,ht,ue){ue===!0&&(pe*=ht,me*=ht,Oe*=ht),ie.set(pe,me,Oe,ht),ge.equals(ie)===!1&&(i.clearColor(pe,me,Oe,ht),ge.copy(ie))},reset:function(){P=!1,K=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,ie=!1,K=null,ge=null,pe=null;return{setReversed:function(me){if(ie!==me){let Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ie=me;let ht=pe;pe=null,this.setClear(ht)}},getReversed:function(){return ie},setTest:function(me){me?Ce(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(me){K!==me&&!P&&(i.depthMask(me),K=me)},setFunc:function(me){if(ie&&(me=id[me]),ge!==me){switch(me){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=me}},setLocked:function(me){P=me},setClear:function(me){pe!==me&&(pe=me,ie&&(me=1-me),i.clearDepth(me))},reset:function(){P=!1,K=null,ge=null,pe=null,ie=!1}}}function s(){let P=!1,ie=null,K=null,ge=null,pe=null,me=null,Oe=null,ht=null,ue=null;return{setTest:function(ke){P||(ke?Ce(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(ke){ie!==ke&&!P&&(i.stencilMask(ke),ie=ke)},setFunc:function(ke,Ke,Te){(K!==ke||ge!==Ke||pe!==Te)&&(i.stencilFunc(ke,Ke,Te),K=ke,ge=Ke,pe=Te)},setOp:function(ke,Ke,Te){(me!==ke||Oe!==Ke||ht!==Te)&&(i.stencilOp(ke,Ke,Te),me=ke,Oe=Ke,ht=Te)},setLocked:function(ke){P=ke},setClear:function(ke){ue!==ke&&(i.clearStencil(ke),ue=ke)},reset:function(){P=!1,ie=null,K=null,ge=null,pe=null,me=null,Oe=null,ht=null,ue=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,_=[],b=null,g=!1,p=null,y=null,x=null,v=null,w=null,T=null,m=null,M=new lt(0,0,0),L=0,C=!1,R=null,F=null,W=null,I=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ce=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec($)[1]),z=ce>=1):$.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=ce>=2);let ne=null,ae={},Ue=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),ee=new kt().fromArray(Ue),Ee=new kt().fromArray(Je);function Fe(P,ie,K,ge){let pe=new Uint8Array(4),me=i.createTexture();i.bindTexture(P,me),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<K;Oe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ie+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return me}let Ze={};Ze[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ze[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ze[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ce(i.DEPTH_TEST),a.setFunc(Os),Le(!1),ye(Pc),Ce(i.CULL_FACE),de(cs);function Ce(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Xe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function bt(P,ie){return d[P]!==ie?(i.bindFramebuffer(P,ie),d[P]=ie,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(P,ie){let K=_,ge=!1;if(P){K=f.get(ie),K===void 0&&(K=[],f.set(ie,K));let pe=P.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Oe=pe.length;me<Oe;me++)K[me]=i.COLOR_ATTACHMENT0+me;K.length=pe.length,ge=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ge=!0);ge&&i.drawBuffers(K)}function it(P){return b!==P?(i.useProgram(P),b=P,!0):!1}let ct={[hs]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};ct[Cu]=i.MIN,ct[Ru]=i.MAX;let oe={[Iu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function de(P,ie,K,ge,pe,me,Oe,ht,ue,ke){if(P===cs){g===!0&&(Xe(i.BLEND),g=!1);return}if(g===!1&&(Ce(i.BLEND),g=!0),P!==Tu){if(P!==p||ke!==C){if((y!==hs||w!==hs)&&(i.blendEquation(i.FUNC_ADD),y=hs,w=hs),ke)switch(P){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sa:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",P);break}else switch(P){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",P);break}x=null,v=null,T=null,m=null,M.set(0,0,0),L=0,p=P,C=ke}return}pe=pe||ie,me=me||K,Oe=Oe||ge,(ie!==y||pe!==w)&&(i.blendEquationSeparate(ct[ie],ct[pe]),y=ie,w=pe),(K!==x||ge!==v||me!==T||Oe!==m)&&(i.blendFuncSeparate(oe[K],oe[ge],oe[me],oe[Oe]),x=K,v=ge,T=me,m=Oe),(ht.equals(M)===!1||ue!==L)&&(i.blendColor(ht.r,ht.g,ht.b,ue),M.copy(ht),L=ue),p=P,C=!1}function xe(P,ie){P.side===Bn?Xe(i.CULL_FACE):Ce(i.CULL_FACE);let K=P.side===vn;ie&&(K=!K),Le(K),P.blending===Xi&&P.transparent===!1?de(cs):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ge=P.stencilWrite;o.setTest(ge),ge&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ze(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){R!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),R=P)}function ye(P){P!==bu?(Ce(i.CULL_FACE),P!==F&&(P===Pc?i.cullFace(i.BACK):P===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),F=P}function st(P){P!==W&&(z&&i.lineWidth(P),W=P)}function ze(P,ie,K){P?(Ce(i.POLYGON_OFFSET_FILL),(I!==ie||V!==K)&&(I=ie,V=K,a.getReversed()&&(ie=-ie,K=-K),i.polygonOffset(ie,K))):Xe(i.POLYGON_OFFSET_FILL)}function at(P){P?Ce(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function Qe(P){P===void 0&&(P=i.TEXTURE0+Y-1),ne!==P&&(i.activeTexture(P),ne=P)}function mt(P,ie,K){K===void 0&&(ne===null?K=i.TEXTURE0+Y-1:K=ne);let ge=ae[K];ge===void 0&&(ge={type:void 0,texture:void 0},ae[K]=ge),(ge.type!==P||ge.texture!==ie)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(P,ie||Ze[P]),ge.type=P,ge.texture=ie)}function U(){let P=ae[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Bt(){try{i.compressedTexImage2D(...arguments)}catch(P){nt("WebGLState:",P)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(P){nt("WebGLState:",P)}}function Rt(){try{i.texSubImage2D(...arguments)}catch(P){nt("WebGLState:",P)}}function be(){try{i.texSubImage3D(...arguments)}catch(P){nt("WebGLState:",P)}}function zt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){nt("WebGLState:",P)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(P){nt("WebGLState:",P)}}function je(){try{i.texStorage2D(...arguments)}catch(P){nt("WebGLState:",P)}}function E(){try{i.texStorage3D(...arguments)}catch(P){nt("WebGLState:",P)}}function S(){try{i.texImage2D(...arguments)}catch(P){nt("WebGLState:",P)}}function G(){try{i.texImage3D(...arguments)}catch(P){nt("WebGLState:",P)}}function he(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function se(P,ie){u[P]!==ie&&(i.pixelStorei(P,ie),u[P]=ie)}function fe(P){ee.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function Me(P){Ee.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ee.copy(P))}function Q(P,ie){let K=c.get(ie);K===void 0&&(K=new WeakMap,c.set(ie,K));let ge=K.get(P);ge===void 0&&(ge=i.getUniformBlockIndex(ie,P.name),i.uniformBlockBinding(ie,ge,ge),K.set(P,ge))}function te(P,ie,K){let pe=c.get(ie).get(P);l[pe]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,K),l[pe]=K)}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,ae={},d={},l={},f=new WeakMap,_=[],b=null,g=!1,p=null,y=null,x=null,v=null,w=null,T=null,m=null,M=new lt(0,0,0),L=0,C=!1,R=null,F=null,W=null,I=null,V=null,ee.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ce,disable:Xe,bindFramebuffer:bt,drawBuffers:De,useProgram:it,setBlending:de,setMaterial:xe,setFlipSided:Le,setCullFace:ye,setLineWidth:st,setPolygonOffset:ze,setScissorTest:at,activeTexture:Qe,bindTexture:mt,unbindTexture:U,compressedTexImage2D:Bt,compressedTexImage3D:tt,texImage2D:S,texImage3D:G,pixelStorei:se,getParameter:he,updateUBOMapping:Q,uniformBlockBinding:te,texStorage2D:je,texStorage3D:E,texSubImage2D:Rt,texSubImage3D:be,compressedTexSubImage2D:zt,compressedTexSubImage3D:qe,scissor:fe,viewport:Me,reset:ve}}function wx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u=new Set,d,f=new WeakMap,_=new Set,b=new FinalizationRegistry(E=>_.delete(E)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,S){return g?new OffscreenCanvas(E,S):zs("canvas")}function y(E,S,G){let he=1,se=je(E);if((se.width>G||se.height>G)&&(he=G/Math.max(se.width,se.height)),he<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let fe=Math.floor(he*se.width),Me=Math.floor(he*se.height);d===void 0&&(d=p(fe,Me));let Q=S?p(fe,Me):d;return Q.width=fe,Q.height=Me,Q.getContext("2d").drawImage(E,0,0,fe,Me),et("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+fe+"x"+Me+")."),Q}else return"data"in E&&et("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function x(E){return E.generateMipmaps}function v(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,S,G,he,se,fe=!1){if(E!==null){if(i[E]!==void 0)return i[E];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Me;he&&(Me=e.get("EXT_texture_norm16"),Me||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&Me&&(Q=Me.R16_EXT),G===i.SHORT&&Me&&(Q=Me.R16_SNORM_EXT)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),S===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&Me&&(Q=Me.RG16_EXT),G===i.SHORT&&Me&&(Q=Me.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_SHORT&&Me&&(Q=Me.RGB16_EXT),G===i.SHORT&&Me&&(Q=Me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),S===i.RGBA){let te=fe?Er:yt.getTransfer(se);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=te===It?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Me&&(Q=Me.RGBA16_EXT),G===i.SHORT&&Me&&(Q=Me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function m(E,S){let G;return E?S===null||S===Zn||S===ds?G=i.DEPTH24_STENCIL8:S===zn?G=i.DEPTH32F_STENCIL8:S===er&&(G=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zn||S===ds?G=i.DEPTH_COMPONENT24:S===zn?G=i.DEPTH_COMPONENT32F:S===er&&(G=i.DEPTH_COMPONENT16),G}function M(E,S){return x(E)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function L(E){let S=new WeakRef(E);n.get(E).__ref=S,_.add(S),b.register(E,S,S)}function C(E){let S=n.get(E).__ref;S!==void 0&&(_.delete(S),b.unregister(S))}function R(E){W(E.target)}function F(E){I(E.target)}function W(E){E.removeEventListener("dispose",R),C(E),Y(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function I(E){E.removeEventListener("dispose",F),C(E),ce(E)}function V(){for(let E of _){let S=E.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):W(S))}_.clear(),u.clear()}function Y(E){let S=n.get(E);if(S.__webglInit===void 0)return;let G=E.source,he=f.get(G);if(he){let se=he[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&z(E),Object.keys(he).length===0&&f.delete(G)}n.remove(E)}function z(E){let S=n.get(E);i.deleteTexture(S.__webglTexture);let G=E.source,he=f.get(G);delete he[S.__cacheKey],a.memory.textures--}function ce(E){let S=n.get(E);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=E.depthTexture;if(G&&G.renderTarget===E&&W(G),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let fe=0;fe<S.__webglFramebuffer[se].length;fe++)i.deleteFramebuffer(S.__webglFramebuffer[se][fe]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let he=E.textures;for(let se=0,fe=he.length;se<fe;se++){let Me=n.get(he[se]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(he[se])}n.remove(E)}let $=0;function ne(){$=0}function ae(){return $}function Ue(E){$=E}function Je(){let E=$;return E>=s.maxTextures&&et("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,E}function ee(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.mipmapsAutoUpdate),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function Ee(E,S){let G=n.get(E);if(E.isVideoTexture&&zt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&G.__version!==E.version){let he=E.image;if(he===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,E,S);return}}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function Fe(E,S){let G=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){xe(G,E,S);return}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function Ze(E,S){let G=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){xe(G,E,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function Ce(E,S){let G=n.get(E);if(E.version>0&&G.__version!==E.version){Le(G,E,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let Xe={[yi]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},bt={[nn]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},De={[Zu]:i.NEVER,[jc]:i.ALWAYS,[Ju]:i.LESS,[Jc]:i.LEQUAL,[Ku]:i.EQUAL,[Kc]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function it(E,S){if(S.type===zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===xn||S.magFilter===Vo||S.magFilter===aa||S.magFilter===Ti||S.minFilter===xn||S.minFilter===Vo||S.minFilter===aa||S.minFilter===Ti)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Xe[S.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Xe[S.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Xe[S.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,bt[S.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,bt[S.minFilter]),S.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,De[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==aa&&S.minFilter!==Ti||S.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ct(E,S){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",R),L(S));let he=S.source,se=f.get(he);se===void 0&&(se={},f.set(he,se));let fe=ee(S);if(fe!==E.__cacheKey){se[fe]===void 0&&(se[fe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),se[fe].usedTimes++;let Me=se[E.__cacheKey];Me!==void 0&&(se[E.__cacheKey].usedTimes--,Me.usedTimes===0&&z(S)),E.__cacheKey=fe,E.__webglTexture=se[fe].texture}return G}function oe(E,S,G){return Math.floor(Math.floor(E/G)/S)}function de(E,S,G,he){let fe=E.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,he,S.data);else{fe.sort((P,ie)=>P.start-ie.start);let Me=0;for(let P=1;P<fe.length;P++){let ie=fe[Me],K=fe[P],ge=ie.start+ie.count,pe=oe(K.start,S.width,4),me=oe(ie.start,S.width,4);K.start<=ge+1&&pe===me&&oe(K.start+K.count-1,S.width,4)===pe?ie.count=Math.max(ie.count,K.start+K.count-ie.start):(++Me,fe[Me]=K)}fe.length=Me+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let P=0,ie=fe.length;P<ie;P++){let K=fe[P],ge=Math.floor(K.start/4),pe=Math.ceil(K.count/4),me=ge%S.width,Oe=Math.floor(ge/S.width),ht=pe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,me,Oe,ht,ue,G,he,S.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function xe(E,S,G){let he=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(he=i.TEXTURE_3D);let se=ct(E,S),fe=S.source;t.bindTexture(he,E.__webglTexture,i.TEXTURE0+G);let Me=n.get(fe);if(fe.version!==Me.__version||se===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ue=yt.getPrimaries(yt.workingColorSpace),ke=S.colorSpace===Ei?null:yt.getPrimaries(S.colorSpace),Ke=S.colorSpace===Ei||ue===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let te=y(S.image,!1,s.maxTextureSize);te=qe(S,te);let ve=r.convert(S.format,S.colorSpace),P=r.convert(S.type),ie=T(S.internalFormat,ve,P,S.normalized,S.colorSpace,S.isVideoTexture);it(he,S);let K,ge=S.mipmaps,pe=S.isVideoTexture!==!0,me=Me.__version===void 0||se===!0,Oe=fe.dataReady,ht=M(S,te);if(S.isDepthTexture)ie=m(S.format===Ai,S.type),me&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ie,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ie,te.width,te.height,0,ve,P,null));else if(S.isDataTexture)if(ge.length>0){pe&&me&&t.texStorage2D(i.TEXTURE_2D,ht,ie,ge[0].width,ge[0].height);for(let ue=0,ke=ge.length;ue<ke;ue++)K=ge[ue],pe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,ve,P,K.data):t.texImage2D(i.TEXTURE_2D,ue,ie,K.width,K.height,0,ve,P,K.data);S.generateMipmaps=!1}else pe?(me&&t.texStorage2D(i.TEXTURE_2D,ht,ie,te.width,te.height),Oe&&de(S,te,ve,P)):t.texImage2D(i.TEXTURE_2D,0,ie,te.width,te.height,0,ve,P,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ie,ge[0].width,ge[0].height,te.depth);for(let ue=0,ke=ge.length;ue<ke;ue++)if(K=ge[ue],S.format!==Kn)if(ve!==null)if(pe){if(Oe)if(S.layerUpdates.size>0){let Ke=ah(K.width,K.height,S.format,S.type);for(let Te of S.layerUpdates){let Tt=K.data.subarray(Te*Ke/K.data.BYTES_PER_ELEMENT,(Te+1)*Ke/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Te,K.width,K.height,1,ve,Tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,te.depth,ve,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ie,K.width,K.height,te.depth,0,K.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,te.depth,ve,P,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ie,K.width,K.height,te.depth,0,ve,P,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{pe&&me&&t.texStorage2D(i.TEXTURE_2D,ht,ie,ge[0].width,ge[0].height);for(let ue=0,ke=ge.length;ue<ke;ue++)K=ge[ue],S.format!==Kn?ve!==null?pe?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,ve,K.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ie,K.width,K.height,0,K.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,ve,P,K.data):t.texImage2D(i.TEXTURE_2D,ue,ie,K.width,K.height,0,ve,P,K.data)}else if(S.isDataArrayTexture)if(pe){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ie,te.width,te.height,te.depth),Oe)if(S.layerUpdates.size>0){let ue=ah(te.width,te.height,S.format,S.type);for(let ke of S.layerUpdates){let Ke=te.data.subarray(ke*ue/te.data.BYTES_PER_ELEMENT,(ke+1)*ue/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,te.width,te.height,1,ve,P,Ke)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,P,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,te.width,te.height,te.depth,0,ve,P,te.data);else if(S.isData3DTexture)pe?(me&&t.texStorage3D(i.TEXTURE_3D,ht,ie,te.width,te.height,te.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,P,te.data)):t.texImage3D(i.TEXTURE_3D,0,ie,te.width,te.height,te.depth,0,ve,P,te.data);else if(S.isFramebufferTexture){if(me)if(pe)t.texStorage2D(i.TEXTURE_2D,ht,ie,te.width,te.height);else{let ue=te.width,ke=te.height;for(let Ke=0;Ke<ht;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,ie,ue,ke,0,ve,P,null),ue>>=1,ke>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),te.parentNode!==ue){ue.appendChild(te),u.add(S),ue.onpaint=ke=>{let Ke=ke.changedElements;for(let Te of u)Ke.includes(Te.image)&&(Te.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Ke=i.RGBA,Te=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Te,Tt,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(pe&&me){let ue=je(ge[0]);t.texStorage2D(i.TEXTURE_2D,ht,ie,ue.width,ue.height)}for(let ue=0,ke=ge.length;ue<ke;ue++)K=ge[ue],pe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve,P,K):t.texImage2D(i.TEXTURE_2D,ue,ie,ve,P,K);S.generateMipmaps=!1}else if(pe){if(me){let ue=je(te);t.texStorage2D(i.TEXTURE_2D,ht,ie,ue.width,ue.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,P,te)}else t.texImage2D(i.TEXTURE_2D,0,ie,ve,P,te);x(S)&&S.mipmapsAutoUpdate===!0&&v(he),Me.__version=fe.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Le(E,S,G){if(S.image.length!==6)return;let he=ct(E,S),se=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+G);let fe=n.get(se);if(se.version!==fe.__version||he===!0){t.activeTexture(i.TEXTURE0+G);let Me=yt.getPrimaries(yt.workingColorSpace),Q=S.colorSpace===Ei?null:yt.getPrimaries(S.colorSpace),te=S.colorSpace===Ei||Me===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let Te=0;Te<6;Te++)!ve&&!P?ie[Te]=y(S.image[Te],!0,s.maxCubemapSize):ie[Te]=P?S.image[Te].image:S.image[Te],ie[Te]=qe(S,ie[Te]);let K=ie[0],ge=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),me=T(S.internalFormat,ge,pe,S.normalized,S.colorSpace),Oe=S.isVideoTexture!==!0,ht=fe.__version===void 0||he===!0,ue=se.dataReady,ke=M(S,K);it(i.TEXTURE_CUBE_MAP,S);let Ke;if(S.isDepthTexture){if(me=m(S.format===Ai,S.type),ht)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,me,K.width,K.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,me,K.width,K.height,0,ge,pe,null)}else if(ve){Oe&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,me,K.width,K.height);for(let Te=0;Te<6;Te++){Ke=ie[Te].mipmaps;for(let Tt=0;Tt<Ke.length;Tt++){let Ht=Ke[Tt];S.format!==Kn?ge!==null?Oe?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,0,0,Ht.width,Ht.height,ge,Ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,me,Ht.width,Ht.height,0,Ht.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,0,0,Ht.width,Ht.height,ge,pe,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt,me,Ht.width,Ht.height,0,ge,pe,Ht.data)}}}else{if(Ke=S.mipmaps,Oe&&ht){Ke.length>0&&ke++;let Te=je(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,me,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(P){Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ie[Te].width,ie[Te].height,ge,pe,ie[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,me,ie[Te].width,ie[Te].height,0,ge,pe,ie[Te].data);for(let Tt=0;Tt<Ke.length;Tt++){let Qn=Ke[Tt].image[Te].image;Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,0,0,Qn.width,Qn.height,ge,pe,Qn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,me,Qn.width,Qn.height,0,ge,pe,Qn.data)}}else{Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge,pe,ie[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,me,ge,pe,ie[Te]);for(let Tt=0;Tt<Ke.length;Tt++){let Ht=Ke[Tt];Oe?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,0,0,ge,pe,Ht.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Tt+1,me,ge,pe,Ht.image[Te])}}}x(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),fe.__version=se.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ye(E,S,G,he,se,fe){let Me=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),te=T(G.internalFormat,Me,Q,G.normalized,G.colorSpace),ve=n.get(S),P=n.get(G);if(P.__renderTarget=S,!ve.__hasExternalTextures){let ie=Math.max(1,S.width>>fe),K=Math.max(1,S.height>>fe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,fe,te,ie,K,S.depth,0,Me,Q,null):t.texImage2D(se,fe,te,ie,K,0,Me,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,se,P.__webglTexture,0,Rt(S)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,se,P.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,E),S.depthBuffer){let he=S.depthTexture,se=he&&he.isDepthTexture?he.type:null,fe=m(S.stencilBuffer,se),Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt(S),fe,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt(S),fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{let he=S.textures;for(let se=0;se<he.length;se++){let fe=he[se],Me=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),te=T(fe.internalFormat,Me,Q,fe.normalized,fe.colorSpace);be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt(S),te,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(E,S,G){let he=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(S.depthTexture);se.__renderTarget=S;let fe=he?S.depthTexture.image[0]:S.depthTexture.image;(!se.__webglTexture||fe.width!==S.width||fe.height!==S.height)&&(fe.width=S.width,fe.height=S.height,S.depthTexture.needsUpdate=!0),he?Ce(S.depthTexture,0):Ee(S.depthTexture,0);let Me=se.__webglTexture,Q=Rt(S),te=he?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ve=S.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Mi)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,te,Me,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ve,te,Me,0);else if(S.depthTexture.format===Ai)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,te,Me,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ve,te,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(E){let S=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let he=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),he){let se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,he.removeEventListener("dispose",se)};he.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=he}if(E.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)ze(S.__webglFramebuffer[he],E,he);else E.texture.mipmaps.length>0?ze(S.__webglFramebuffer[0],E,0):ze(S.__webglFramebuffer,E,0);else if(G){S.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[he]),S.__webglDepthbuffer[he]===void 0)S.__webglDepthbuffer[he]=i.createRenderbuffer(),st(S.__webglDepthbuffer[he],E,!1);else{let se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,fe)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),st(S.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(E,S,G){let he=n.get(E);S!==void 0&&ye(he.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&at(E)}function mt(E){let S=E.texture,G=n.get(E),he=n.get(S);E.addEventListener("dispose",F),L(E);let se=E.textures,fe=E.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=S.version,a.memory.textures++),fe){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let te=0;te<S.mipmaps.length;te++)G.__webglFramebuffer[Q][te]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Me)for(let Q=0,te=se.length;Q<te;Q++){let ve=n.get(se[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&be(E)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<se.length;Q++){let te=se[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let ve=r.convert(te.format,te.colorSpace),P=r.convert(te.type),ie=T(te.internalFormat,ve,P,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),K=Rt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),st(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),it(i.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ye(G.__webglFramebuffer[Q][te],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else ye(G.__webglFramebuffer[Q],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);x(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let Q=0,te=se.length;Q<te;Q++){let ve=se[Q],P=n.get(ve),ie=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,P.__webglTexture),it(ie,ve),ye(G.__webglFramebuffer,E,ve,i.COLOR_ATTACHMENT0+Q,ie,0),x(ve)&&v(ie)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,he.__webglTexture),it(Q,S),S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ye(G.__webglFramebuffer[te],E,S,i.COLOR_ATTACHMENT0,Q,te);else ye(G.__webglFramebuffer,E,S,i.COLOR_ATTACHMENT0,Q,0);x(S)?v(Q):S.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&at(E)}function U(E){let S=E.textures;for(let G=0,he=S.length;G<he;G++){let se=S[G];if(x(se)&&se.mipmapsAutoUpdate===!0){let fe=w(E),Me=n.get(se).__webglTexture;t.bindTexture(fe,Me),v(fe),t.unbindTexture()}}}let Bt=[];function tt(E){if(E.samples>0){if(be(E)===!1){let S=E.textures,G=E.width,he=E.height,se=i.COLOR_BUFFER_BIT,fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),Q=S.length>1;if(Q)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let P=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,G,he,0,0,G,he,se,i.NEAREST),l===!0&&(Bt.length=0,Bt.push(i.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Bt.push(fe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let P=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let S=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Rt(E){return Math.min(s.maxSamples,E.samples)}function be(E){let S=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function zt(E){let S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function qe(E,S){let G=E.colorSpace,he=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==Ar&&G!==Ei&&(yt.getTransfer(G)===It?(he!==Kn||se!==yn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",G)),S}function je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Je,this.resetTextureUnits=ne,this.getTextureUnits=ae,this.setTextureUnits=Ue,this.setTexture2D=Ee,this.setTexture2DArray=Fe,this.setTexture3D=Ze,this.setTextureCube=Ce,this.rebindTextures=Qe,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=be,this.dispose=V}function Tx(i,e){function t(n,s=Ei){let r,a=yt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Kn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ha)if(a===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Ko||n===jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===ua||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===tl)return a===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===il)return r.COMPRESSED_R11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yl||n===Ml||n===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yl)return a===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===wl||n===da||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ri({vertexShader:Ax,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,b=typeof XRWebGLBinding<"u",g=new mh,p={},y=t.getContextAttributes(),x=null,v=null,w=[],T=[],m=new _e,M=null,L=null,C=new _n;C.viewport=new kt;let R=new _n;R.viewport=new kt;let F=[C,R],W=new Bo,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Ee=w[ee];return Ee===void 0&&(Ee=new Vs,w[ee]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ee){let Ee=w[ee];return Ee===void 0&&(Ee=new Vs,w[ee]=Ee),Ee.getGripSpace()},this.getHand=function(ee){let Ee=w[ee];return Ee===void 0&&(Ee=new Vs,w[ee]=Ee),Ee.getHandSpace()};function Y(ee){let Ee=T.indexOf(ee.inputSource);if(Ee===-1)return;let Fe=w[Ee];Fe!==void 0&&(Fe.update(ee.inputSource,ee.frame,c||a),Fe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<w.length;ee++){let Ee=T[ee];Ee!==null&&(T[ee]=null,w[ee].disconnect(Ee))}I=null,V=null,g.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(x),f=null,d=null,u=null,s=null,v=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(m.width,m.height,!1),L!==null){let ee=L.camera;ee.fov=L.fov,ee.zoom=L.zoom,ee.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(m),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Ze=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=y.stencil?Ai:Mi,Ze=y.stencil?ds:Zn);let Xe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Tn(d.textureWidth,d.textureHeight,{format:Kn,type:yn,depthTexture:new wi(d.textureWidth,d.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Tn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ce(ee){for(let Ee=0;Ee<ee.removed.length;Ee++){let Fe=ee.removed[Ee],Ze=T.indexOf(Fe);Ze>=0&&(T[Ze]=null,w[Ze].disconnect(Fe))}for(let Ee=0;Ee<ee.added.length;Ee++){let Fe=ee.added[Ee],Ze=T.indexOf(Fe);if(Ze===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=T.length){T.push(Fe),Ze=Xe;break}else if(T[Xe]===null){T[Xe]=Fe,Ze=Xe;break}if(Ze===-1)break}let Ce=w[Ze];Ce&&Ce.connect(Fe)}}function $(ee,Ee){Ee===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Ee.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let Ee=ee.near,Fe=ee.far;g.texture!==null&&(g.depthNear>0&&(Ee=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),W.near=R.near=C.near=Ee,W.far=R.far=C.far=Fe,(I!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,V=W.far),W.layers.mask=ee.layers.mask|6,C.layers.mask=W.layers.mask&-5,R.layers.mask=W.layers.mask&-3;let Ze=ee.parent,Ce=W.cameras;$(W,Ze);for(let Xe=0;Xe<Ce.length;Xe++)$(Ce[Xe],Ze);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&ee.isPerspectiveCamera&&(L={camera:ee,fov:ee.fov,zoom:ee.zoom}),ne(ee,W,Ze)};function ne(ee,Ee,Fe){Fe===null?ee.matrix.copy(Ee.matrixWorld):(ee.matrix.copy(Fe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Ee.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Ee.projectionMatrix),ee.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=uo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(ee){return p[ee]};let ae=null;function Ue(ee,Ee){if(h=Ee.getViewerPose(c||a),_=Ee,h!==null){let Fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ze=!1;Fe.length!==W.cameras.length&&(W.cameras.length=0,Ze=!0);for(let De=0;De<Fe.length;De++){let it=Fe[De],ct=null;if(f!==null)ct=f.getViewport(it);else{let de=u.getViewSubImage(d,it);ct=de.viewport,De===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let oe=F[De];oe===void 0&&(oe=new _n,oe.layers.enable(De),oe.viewport=new kt,F[De]=oe),oe.matrix.fromArray(it.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(it.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ct.x,ct.y,ct.width,ct.height),De===0&&(W.matrix.copy(oe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ze===!0&&W.cameras.push(oe)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let De=u.getDepthInformation(Fe[0]);De&&De.isValid&&De.texture&&g.init(De,s.renderState)}if(Ce&&Ce.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let De=0;De<Fe.length;De++){let it=Fe[De].camera;if(it){let ct=p[it];ct||(ct=new kr,p[it]=ct);let oe=u.getCameraImage(it);ct.sourceTexture=oe}}}}for(let Fe=0;Fe<w.length;Fe++){let Ze=T[Fe],Ce=w[Fe];Ze!==null&&Ce!==void 0&&Ce.update(Ze,Ee,c||a)}ae&&ae(ee,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),_=null}let Je=new Od;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}},Cx=new Et,Yd=new rt;Yd.set(-1,0,0,0,1,0,0,0,1);function Rx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ih(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,x,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===vn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===vn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(v)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,e,t,n){let s={},r={};function a(y,x){let v=x.program;n.uniformBlockBinding(y,v,s[y.id])}function o(y,x){let v=s[y.id];v===void 0&&(_(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",g));let w=x.program;n.updateUBOMapping(y,w);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let x=i.createBuffer(),v=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function c(y){let x=s[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,m=v.length;T<m;T++){let M=v[T];if(Array.isArray(M))for(let L=0,C=M.length;L<C;L++)h(M[L],T,L,w);else h(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,x,v,w){if(d(y,x,v,w)===!0){let T=y.__offset,m=y.value;if(Array.isArray(m)){let M=0;for(let L=0;L<m.length;L++){let C=m[L],R=b(C,!0);u(C,y.__data,M),M+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(m,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function u(y,x,v){typeof y=="number"||typeof y=="boolean"?x[v]=y:y.isMatrix3?(x[v]=y.elements[0],x[v+1]=y.elements[1],x[v+2]=y.elements[2],x[v+3]=0,x[v+4]=y.elements[3],x[v+5]=y.elements[4],x[v+6]=y.elements[5],x[v+7]=0,x[v+8]=y.elements[6],x[v+9]=y.elements[7],x[v+10]=y.elements[8],x[v+11]=0):ArrayBuffer.isView(y)?x.set(y.subarray(0,x.length-v),v):y.toArray(x,v)}function d(y,x,v,w){let T=y.value,m=x+"_"+v;if(Array.isArray(T)){w[m]===void 0&&(w[m]=[]);let M=w[m],L=!1;for(let C=0;C<T.length;C++)f(T[C],M,C)===!0&&(L=!0);return L}return f(T,w,m)}function f(y,x,v){if(x[v]===void 0)return typeof y=="number"||typeof y=="boolean"?x[v]=y:ArrayBuffer.isView(y)?x[v]=y.slice():x[v]=y.clone(),!0;{let w=x[v];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return x[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function _(y){let x=y.uniforms,v=0,w=16;for(let m=0,M=x.length;m<M;m++){let L=Array.isArray(x[m])?x[m]:[x[m]];for(let C=0,R=L.length;C<R;C++){let F=L[C],W=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(x[m])||Array.isArray(F.value),V=v;for(let z=0,ce=W.length;z<ce;z++){let $=W[z],ne=b($,I),ae=v%w,Ue=ae%ne.boundary,Je=ae+Ue;v+=Ue,Je!==0&&w-Je<ne.storage&&(v+=w-Je),z===0&&(V=v),v+=ne.storage}let Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((v-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}let T=v%w;return T>0&&(v+=w-T),y.__size=v,y.__cache={},this}function b(y,x){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),x===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let x=y.target;x.removeEventListener("dispose",g),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function Lx(){return oi===null&&(oi=new Fr(Px,16,16,qi,Jn),oi.name="DFG_LUT",oi.minFilter=xn,oi.magFilter=xn,oi.wrapS=ti,oi.wrapT=ti,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Pl=class{constructor(e={}){let{canvas:t=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let b=f,g=new Set([Zo,$o,Yo]),p=new Set([yn,Zn,er,ds,Wo,Xo]),y=new Uint32Array(4),x=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,T=null,m=[],M=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,F=null,W=null,I=null,V=null;this._outputColorSpace=Yt;let Y=0,z=0,ce=null,$=-1,ne=null,ae=new kt,Ue=new kt,Je=null,ee=new lt(0),Ee=0,Fe=t.width,Ze=t.height,Ce=1,Xe=null,bt=null,De=new kt(0,0,Fe,Ze),it=new kt(0,0,Fe,Ze),ct=!1,oe=new Oi,de=new _o,xe=!1,Le=!1,ye=new Et,st=new D,ze=new kt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function mt(){return ce===null?Ce:1}let U=n;function Bt(A,N){return t.getContext(A,N)}let tt,Rt,be,zt,qe,je,E,S,G,he,se,fe,Me,Q,te,ve,P,ie,K,ge,pe,me,Oe;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Te,!1),U===null){let N="webgl2";if(U=Bt(N,A),U===null)throw Bt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(A){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),nt("WebGLRenderer: "+A.message),A}function ht(){tt=new H0(U),tt.init(),pe=new Tx(U,tt),Rt=new L0(U,tt,e,pe),be=new bx(U,tt),Rt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),W=U.createFramebuffer(),I=U.createFramebuffer(),V=U.createFramebuffer(),zt=new q0(U),qe=new cx,je=new wx(U,tt,be,qe,Rt,pe,zt),E=new V0(C),S=new $p(U),me=new I0(U,S),G=new W0(U,S,zt,me),he=new $0(U,G,S,me,zt),ie=new Y0(U,Rt,je),te=new D0(qe),se=new lx(C,E,tt,Rt,me,te),fe=new Rx(C,qe),Me=new ux,Q=new _x(tt),P=new R0(C,E,be,he,_,l),ve=new Sx(C,he,Rt),Oe=new Ix(U,zt,Rt,be),K=new P0(U,tt,zt),ge=new X0(U,tt,zt),zt.programs=se.programs,C.capabilities=Rt,C.extensions=tt,C.properties=qe,C.renderLists=Me,C.shadowMap=ve,C.state=be,C.info=zt}b!==yn&&(L=new J0(b,t.width,t.height,o,s,r));let ue=new gh(C,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(Fe,Ze,!1))},this.getSize=function(A){return A.set(Fe,Ze)},this.setSize=function(A,N,Z=!0){if(ue.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,Ze=N,t.width=Math.floor(A*Ce),t.height=Math.floor(N*Ce),Z===!0&&(t.style.width=A+"px",t.style.height=N+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(Fe*Ce,Ze*Ce).floor()},this.setDrawingBufferSize=function(A,N,Z){Fe=A,Ze=N,Ce=Z,t.width=Math.floor(A*Z),t.height=Math.floor(N*Z),this.setViewport(0,0,A,N)},this.setEffects=function(A){if(b===yn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let N=0;N<A.length;N++)if(A[N].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ae)},this.getViewport=function(A){return A.copy(De)},this.setViewport=function(A,N,Z,k){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,N,Z,k),be.viewport(ae.copy(De).multiplyScalar(mt()).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,N,Z,k){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,N,Z,k),be.scissor(Ue.copy(it).multiplyScalar(mt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){be.setScissorTest(ct=A)},this.setOpaqueSort=function(A){Xe=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(A=!0,N=!0,Z=!0){let k=0;if(A){let H=!1;if(ce!==null){let Ae=ce.texture.format;H=g.has(Ae)}if(H){let Ae=ce.texture.type,Be=p.has(Ae),we=P.getClearColor(),Pe=P.getClearAlpha(),We=we.r,ot=we.g,xt=we.b;Be?(y[0]=We,y[1]=ot,y[2]=xt,y[3]=Pe,U.clearBufferuiv(U.COLOR,0,y)):(x[0]=We,x[1]=ot,x[2]=xt,x[3]=Pe,U.clearBufferiv(U.COLOR,0,x))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),P.dispose(),Me.dispose(),Q.dispose(),je.dispose(),qe.dispose(),E.dispose(),he.dispose(),G.dispose(),me.dispose(),Oe.dispose(),se.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",X),ue.removeEventListener("sessionend",q),J.stop()};function ke(A){A.preventDefault(),Cr("WebGLRenderer: Context Lost."),R=!0}function Ke(){Cr("WebGLRenderer: Context Restored."),R=!1;let A=zt.autoReset,N=ve.enabled,Z=ve.autoUpdate,k=ve.needsUpdate,H=ve.type;ht(),zt.autoReset=A,ve.enabled=N,ve.autoUpdate=Z,ve.needsUpdate=k,ve.type=H}function Te(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Tt(A){let N=A.target;N.removeEventListener("dispose",Tt),Ht(N)}function Ht(A){Qn(A),qe.remove(A)}function Qn(A){let N=qe.get(A).programs;N!==void 0&&(N.forEach(function(Z){se.releaseProgram(Z)}),A.isShaderMaterial&&se.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,Z,k,H,Ae){N===null&&(N=at);let Be=H.isMesh&&H.matrixWorld.determinantAffine()<0,we=an(A,N,Z,k,H);be.setMaterial(k,Be);let Pe=Z.index,We=1;if(k.wireframe===!0){if(Pe=G.getWireframeAttribute(Z),Pe===void 0)return;We=2}let ot=Z.drawRange,xt=Z.attributes.position,Ge=ot.start*We,vt=(ot.start+ot.count)*We;Ae!==null&&(Ge=Math.max(Ge,Ae.start*We),vt=Math.min(vt,(Ae.start+Ae.count)*We)),Pe!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Pe.count)):xt!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,xt.count));let Xt=vt-Ge;if(Xt<0||Xt===1/0)return;me.setup(H,k,we,Z,Pe);let Nt,Lt=K;if(Pe!==null&&(Nt=S.get(Pe),Lt=ge,Lt.setIndex(Nt)),H.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*mt()),Lt.setMode(U.LINES)):Lt.setMode(U.TRIANGLES);else if(H.isLine){let ln=k.linewidth;ln===void 0&&(ln=1),be.setLineWidth(ln*mt()),H.isLineSegments?Lt.setMode(U.LINES):H.isLineLoop?Lt.setMode(U.LINE_LOOP):Lt.setMode(U.LINE_STRIP)}else H.isPoints?Lt.setMode(U.POINTS):H.isSprite&&Lt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ln=H._multiDrawStarts,Ve=H._multiDrawCounts,mn=H._multiDrawCount,At=Pe?S.get(Pe).bytesPerElement:1,Qi=qe.get(k).currentProgram.getUniforms();for(let cn=0;cn<mn;cn++)Qi.setValue(U,"_gl_DrawID",cn),Lt.render(ln[cn]/At,Ve[cn])}else if(H.isInstancedMesh)Lt.renderInstances(Ge,Xt,H.count);else if(Z.isInstancedBufferGeometry){let ln=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ve=Math.min(Z.instanceCount,ln);Lt.renderInstances(Ge,Xt,Ve)}else Lt.render(Ge,Xt)};function B(A,N,Z,k){F!==null&&A.isNodeMaterial&&F.setObject(k,A),xe===!0&&te.setState(A,Z,!1),A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,Se(A,N,k),A.side=Wi,A.needsUpdate=!0,Se(A,N,k),A.side=Bn):Se(A,N,k)}this.compile=function(A,N,Z=null){Z===null&&(Z=A),F!==null&&F.renderStart(A,N,Z),T=Q.get(Z),T.init(N),M.push(T),Z.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),A!==Z&&A.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Le=this.localClippingEnabled,xe=te.init(this.clippingPlanes,Le),xe===!0&&te.setGlobalState(this.clippingPlanes,N),F!==null&&ve.render(T.state.shadowsArray,Z,N);let k=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Ae=H.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){let we=Ae[Be];B(we,Z,N,H),k.add(we)}else B(Ae,Z,N,H),k.add(Ae)}),T=M.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(A,N,Z=null){let k=this.compile(A,N,Z);return new Promise(H=>{function Ae(){if(k.forEach(function(Be){let Pe=qe.get(Be).currentProgram;(Pe===void 0||Pe.isReady())&&k.delete(Be)}),k.size===0){H(A);return}setTimeout(Ae,10)}tt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let O=null;function re(A){O&&O(A)}function X(){J.stop()}function q(){J.start()}let J=new Od;J.setAnimationLoop(re),typeof self<"u"&&J.setContext(self),this.setAnimationLoop=function(A){O=A,ue.setAnimationLoop(A),A===null?J.stop():J.start()},ue.addEventListener("sessionstart",X),ue.addEventListener("sessionend",q),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;F!==null&&F.renderStart(A,N);let Z=ue.enabled===!0&&ue.isPresenting===!0,k=L!==null&&(ce===null||Z)&&L.begin(C,ce);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,N,ce),T=Q.get(A,M.length),T.init(N),T.state.textureUnits=je.getTextureUnits(),M.push(T),ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?de.setFromArrayCamera(N):oe.setFromProjectionMatrix(ye,Nn,N.reversedDepth),Le=this.localClippingEnabled,xe=te.init(this.clippingPlanes,Le),w=Me.get(A,m.length),w.init(),m.push(w),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Be=C.xr.getDepthSensingMesh();Be!==null&&le(Be,N,-1/0,C.sortObjects)}le(A,N,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Xe,bt),Qe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Qe&&P.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),xe===!0&&te.beginShadows();let H=T.state.shadowsArray;if(ve.render(H,A,N),xe===!0&&te.endShadows(),(k&&L.hasRenderPass())===!1){let Be=w.opaque,we=w.transmissive;if(T.setupLights(),N.isArrayCamera){let Pe=N.cameras;if(we.length>0)for(let We=0,ot=Pe.length;We<ot;We++){let xt=Pe[We];Ye(Be,we,A,xt)}Qe&&P.render(A);for(let We=0,ot=Pe.length;We<ot;We++){let xt=Pe[We];Re(w,A,xt,xt.viewport)}}else we.length>0&&Ye(Be,we,A,N),Qe&&P.render(A),Re(w,A,N)}ce!==null&&z===0&&(je.updateMultisampleRenderTarget(ce),je.updateRenderTargetMipmap(ce)),k&&L.end(C),A.isScene===!0&&A.onAfterRender(C,A,N),me.resetDefaultState(),$=-1,ne=null,M.pop(),M.length>0?(T=M[M.length-1],je.setTextureUnits(T.state.textureUnits),xe===!0&&te.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,m.pop(),m.length>0?w=m[m.length-1]:w=null,F!==null&&F.renderEnd()};function le(A,N,Z,k){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let Be=N.isArrayCamera?de:oe;if(!A.frustumCulled||A.intersectsFrustum(Be)){k&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);let we=he.update(A),Pe=A.material;Pe.visible&&w.push(A,we,Pe,Z,ze.z,null,N)}}else if(A.isMesh||A.isLine||A.isPoints){let Be=N.isArrayCamera?de:oe;if(!A.frustumCulled||A.intersectsFrustum(Be)){let we=he.update(A),Pe=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ze.copy(we.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Pe)){let We=we.groups;for(let ot=0,xt=We.length;ot<xt;ot++){let Ge=We[ot],vt=Pe[Ge.materialIndex];vt&&vt.visible&&w.push(A,we,vt,Z,ze.z,Ge,N)}}else Pe.visible&&w.push(A,we,Pe,Z,ze.z,null,N)}}}let Ae=A.children;for(let Be=0,we=Ae.length;Be<we;Be++)le(Ae[Be],N,Z,k)}function Re(A,N,Z,k){let{opaque:H,transmissive:Ae,transparent:Be}=A;T.setupLightsView(Z),xe===!0&&te.setGlobalState(C.clippingPlanes,Z),k&&be.viewport(ae.copy(k)),H.length>0&&ut(H,N,Z),Ae.length>0&&ut(Ae,N,Z),Be.length>0&&ut(Be,N,Z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ye(A,N,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ge=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Tn(1,1,{generateMipmaps:!0,type:Ge?Jn:yn,minFilter:Ti,samples:Math.max(4,Rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Ae=T.state.transmissionRenderTarget[k.id],Be=k.viewport||ae;Ae.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),Pe=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ae),C.getClearColor(ee),Ee=C.getClearAlpha(),Ee<1&&C.setClearColor(16777215,.5),C.clear(),Qe&&P.render(Z);let ot=C.toneMapping;C.toneMapping=ai;let xt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),xe===!0&&te.setGlobalState(C.clippingPlanes,k),ut(A,Z,k),je.updateMultisampleRenderTarget(Ae),je.updateRenderTargetMipmap(Ae),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,Xt=N.length;vt<Xt;vt++){let Nt=N[vt],{object:Lt,geometry:ln,material:Ve,group:mn}=Nt;if(Ve.side===Bn&&Lt.layers.test(k.layers)){let At=Ve.side;Ve.side=vn,Ve.needsUpdate=!0,pt(Lt,Z,k,ln,Ve,mn),Ve.side=At,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(je.updateMultisampleRenderTarget(Ae),je.updateRenderTargetMipmap(Ae))}C.setRenderTarget(we,Pe,We),C.setClearColor(ee,Ee),xt!==void 0&&(k.viewport=xt),C.toneMapping=ot}function ut(A,N,Z){let k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,Ae=A.length;H<Ae;H++){let Be=A[H],{object:we,geometry:Pe,group:We}=Be,ot=Be.material;ot.allowOverride===!0&&k!==null&&(ot=k),we.layers.test(Z.layers)&&pt(we,N,Z,Pe,ot,We)}}function pt(A,N,Z,k,H,Ae){F!==null&&H.isNodeMaterial&&F.setObject(A,H),A.onBeforeRender(C,N,Z,k,H,Ae),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(C,N,Z,k,A,Ae),H.transparent===!0&&H.side===Bn&&H.forceSinglePass===!1?(H.side=vn,H.needsUpdate=!0,C.renderBufferDirect(Z,N,k,H,A,Ae),H.side=Wi,H.needsUpdate=!0,C.renderBufferDirect(Z,N,k,H,A,Ae),H.side=Bn):C.renderBufferDirect(Z,N,k,H,A,Ae),A.onAfterRender(C,N,Z,k,H,Ae)}function $e(A){let N=0;for(let Z of A)Z.texture!==null&&N++;return N}function Se(A,N,Z){N.isScene!==!0&&(N=at);let k=qe.get(A),H=T.state.lights,Ae=T.state.shadowsArray,Be=H.state.version,we=se.getParameters(A,H.state,Ae,N,Z,T.state.lightProbeGridArray),Pe=se.getProgramCacheKey(we),We=k.programs;k.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;k.envMap=E.get(A.envMap||k.environment,ot),k.envMapRotation=k.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Tt),We=new Map,k.programs=We,k.programVariants=new Map);let xt=We.get(Pe);if(xt!==void 0){if(k.currentProgram===xt&&k.lightsStateVersion===Be)return dt(A,we),xt}else we.uniforms=se.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,Z,we),A.onBeforeCompile(we,C),xt=se.acquireProgram(we,Pe),We.set(Pe,xt),k.uniforms=we.uniforms;let Ge=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=te.uniform),dt(A,we),k.needsLights=Ln(A),k.lightsStateVersion=Be,k.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.sunLights.value=H.state.sun,Ge.sunLightShadows.value=H.state.sunShadow,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.sunShadowMatrix.value=H.state.sunShadowMatrix,Ge.sunShadowCascade.value=H.state.sunShadowCascade,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),k.numLightProbeGrids=$e(T.state.lightProbeGridArray),k.currentProgram=xt,k.uniformsList=null,xt}function _t(A,N,Z,k,H){let Ae=qe.get(A),Be=Ae.currentProgram.id+","+k+","+H,we=Ae.programVariants.get(Be);return we===void 0?(we=Se(A,N,Z),Ae.programVariants.set(Be,we)):(Ae.currentProgram=we,Ae.uniformsList=null,Ae.outputColorSpace=k,Ae.toneMapping=H),we}function He(A){if(A.uniformsList===null){let N=A.currentProgram.getUniforms();A.uniformsList=tr.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function dt(A,N){let Z=qe.get(A);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function an(A,N,Z,k,H){N.isScene!==!0&&(N=at),je.resetTextureUnits();let Ae=N.fog,Be=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,we=ce===null?C.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:yt.workingColorSpace,Pe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,We=E.get(k.envMap||Be,Pe),ot=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,xt=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ge=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,Xt=!!Z.morphAttributes.color,Nt=ai;k.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let Lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ln=Lt!==void 0?Lt.length:0,Ve=qe.get(k),mn=T.state.lights;if(xe===!0&&(Le===!0||A!==ne)){let Gt=A===ne&&k.id===$;te.setState(k,A,Gt)}let At=!1,Qi=!1;k.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==mn.state.version||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isBatchedMesh&&Ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==We||k.fog===!0&&Ve.fog!==Ae||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==te.numPlanes||Ve.numIntersection!==te.numIntersection)||Ve.vertexAlphas!==ot||Ve.vertexTangents!==xt||Ve.morphTargets!==Ge||Ve.morphNormals!==vt||Ve.morphColors!==Xt||Ve.morphTargetsCount!==ln||Ve.numLightProbeGrids!==$e(T.state.lightProbeGridArray)?At=!0:(Ve.outputColorSpace!==we||Ve.toneMapping!==Nt)&&(Qi=!0):(At=!0,Ve.__version=k.version);let cn=Ve.currentProgram;(At===!0||Qi===!0)&&(cn=Qi===!0?_t(k,N,H,we,Nt):Se(k,N,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,cn,Ve));let Aa=!1,Ri=!1,es=!1,wt=cn.getUniforms(),on=Ve.uniforms;if(be.useProgram(cn.program)&&(Aa=!0,Ri=!0,es=!0),k.id!==$&&($=k.id,Ri=!0),Aa||ne!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),wt.setValue(U,"projectionMatrix",A.projectionMatrix),wt.setValue(U,"viewMatrix",A.matrixWorldInverse);let Qt=wt.map.cameraPosition;Qt!==void 0&&Qt.setValue(U,st.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&wt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,Ri=!0,es=!0)}if(Ve.needsLights&&(mn.state.sunShadowMap.length>0&&wt.setValue(U,"sunShadowMap",mn.state.sunShadowMap,je),mn.state.directionalShadowMap.length>0&&wt.setValue(U,"directionalShadowMap",mn.state.directionalShadowMap,je),mn.state.spotShadowMap.length>0&&wt.setValue(U,"spotShadowMap",mn.state.spotShadowMap,je),mn.state.pointShadowMap.length>0&&wt.setValue(U,"pointShadowMap",mn.state.pointShadowMap,je)),H.isSkinnedMesh){wt.setOptional(U,H,"bindMatrix"),wt.setOptional(U,H,"bindMatrixInverse");let Gt=H.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),wt.setValue(U,"boneTexture",Gt.boneTexture,je))}H.isBatchedMesh&&(wt.setOptional(U,H,"batchingTexture"),wt.setValue(U,"batchingTexture",H._matricesTexture,je),wt.setOptional(U,H,"batchingIdTexture"),wt.setValue(U,"batchingIdTexture",H._indirectTexture,je),wt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",H._colorsTexture,je));let Gn=Z.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ie.update(H,Z,cn),(Ri||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,wt.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=Lx()),Ri){if(wt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&Pn(on,es),Ae&&k.fog===!0&&fe.refreshFogUniforms(on,Ae),fe.refreshMaterialUniforms(on,k,Ce,Ze,T.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Gt=v,Qt=0;for(let di of T.state.lightProbeGridArray)di.texture!==null&&(Gt.textures[Qt]=di.texture,Gt.min[Qt]=di.boundingBox.min,Gt.max[Qt]=di.boundingBox.max,Gt.resolution[Qt]=di.resolution,Qt++);for(let di in Gt)Gt[di].length=Qt;on.probesSH.value=Gt.textures,on.probesMin.value=Gt.min,on.probesMax.value=Gt.max,on.probesResolution.value=Gt.resolution}tr.upload(U,He(Ve),on,je)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(tr.upload(U,He(Ve),on,je),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&wt.setValue(U,"center",H.center),wt.setValue(U,"modelViewMatrix",H.modelViewMatrix),wt.setValue(U,"normalMatrix",H.normalMatrix),wt.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let Gt=k.uniformsGroups;for(let Qt=0,di=Gt.length;Qt<di;Qt++){let Gh=Gt[Qt];Oe.update(Gh,cn),Oe.bind(Gh,cn)}}return cn}function Pn(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.sunLights.needsUpdate=N,A.sunLightShadows.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Ln(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(A,N,Z){let k=qe.get(A);k.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=N,qe.get(A.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,N){let Z=qe.get(A);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,Z=0){ce=A,Y=N,z=Z;let k=null,H=!1,Ae=!1;if(A){let we=qe.get(A);if(we.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(U.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(A.viewport),Ue.copy(A.scissor),Je=A.scissorTest,be.viewport(ae),be.scissor(Ue),be.setScissorTest(Je),$=-1;return}else if(we.__webglFramebuffer===void 0)je.setupRenderTarget(A);else if(we.__hasExternalTextures)je.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ot=A.depthTexture;if(we.__boundDepthTexture!==ot){if(ot!==null&&qe.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(A)}}let Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ae=!0);let We=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[N])?k=We[N][Z]:k=We[N],H=!0):A.samples>0&&je.useMultisampledRTT(A)===!1?k=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?k=We[Z]:k=We,ae.copy(A.viewport),Ue.copy(A.scissor),Je=A.scissorTest}else ae.copy(De).multiplyScalar(Ce).floor(),Ue.copy(it).multiplyScalar(Ce).floor(),Je=ct;if(Z!==0&&(k=W),be.bindFramebuffer(U.FRAMEBUFFER,k)&&be.drawBuffers(A,k),be.viewport(ae),be.scissor(Ue),be.setScissorTest(Je),H){let we=qe.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,Z)}else if(Ae){let we=N;for(let Pe=0;Pe<A.textures.length;Pe++){let We=qe.get(A.textures[Pe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pe,We.__webglTexture,Z,we)}}else if(A!==null&&Z!==0){let we=qe.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,Z)}$=-1};function ur(A){let N=qe.get(A);return(N.__readFormat!==A.format||N.__readType!==A.type)&&(N.__readFormat=A.format,N.__readType=A.type,N.__formatReadable=Rt.textureFormatReadable(A.format),N.__typeReadable=Rt.textureTypeReadable(A.type)),N}this.readRenderTargetPixels=function(A,N,Z,k,H,Ae,Be,we=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Pe=Pe[Be],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){be.bindFramebuffer(U.FRAMEBUFFER,Pe);try{let We=A.textures[we],ot=We.format,xt=We.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we);let Ge=ur(We);if(Ge.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-k&&Z>=0&&Z<=A.height-H&&U.readPixels(N,Z,k,H,pe.convert(ot),pe.convert(xt),Ae)}finally{let We=ce!==null?qe.get(ce).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,N,Z,k,H,Ae,Be,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Pe=Pe[Be],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(N>=0&&N<=A.width-k&&Z>=0&&Z<=A.height-H){be.bindFramebuffer(U.FRAMEBUFFER,Pe);let We=A.textures[we],ot=We.format,xt=We.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+we);let Ge=ur(We);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(N,Z,k,H,pe.convert(ot),pe.convert(xt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Xt=ce!==null?qe.get(ce).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Xt);let Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nd(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(vt),U.deleteSync(Nt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,N=null,Z=0){let k=Math.pow(2,-Z),H=Math.floor(A.image.width*k),Ae=Math.floor(A.image.height*k),Be=N!==null?N.x:0,we=N!==null?N.y:0;je.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Be,we,H,Ae),be.unbindTexture()},this.copyTextureToTexture=function(A,N,Z=null,k=null,H=0,Ae=0){let Be,we,Pe,We,ot,xt,Ge,vt,Xt,Nt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(Z!==null)Be=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,We=Z.min.x,ot=Z.min.y,xt=Z.isBox3?Z.min.z:0;else{let wt=Math.pow(2,-H);Be=Math.floor(Nt.width*wt),we=Math.floor(Nt.height*wt),A.isDataArrayTexture?Pe=Nt.depth:A.isData3DTexture?Pe=Math.floor(Nt.depth*wt):Pe=1,We=0,ot=0,xt=0}k!==null?(Ge=k.x,vt=k.y,Xt=k.z):(Ge=0,vt=0,Xt=0);let Lt=pe.convert(N.format),ln=pe.convert(N.type),Ve;N.isData3DTexture?(je.setTexture3D(N,0),Ve=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(je.setTexture2DArray(N,0),Ve=U.TEXTURE_2D_ARRAY):(je.setTexture2D(N,0),Ve=U.TEXTURE_2D),be.activeTexture(U.TEXTURE0),be.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),be.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),be.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let mn=be.getParameter(U.UNPACK_ROW_LENGTH),At=be.getParameter(U.UNPACK_IMAGE_HEIGHT),Qi=be.getParameter(U.UNPACK_SKIP_PIXELS),cn=be.getParameter(U.UNPACK_SKIP_ROWS),Aa=be.getParameter(U.UNPACK_SKIP_IMAGES);be.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),be.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),be.pixelStorei(U.UNPACK_SKIP_PIXELS,We),be.pixelStorei(U.UNPACK_SKIP_ROWS,ot),be.pixelStorei(U.UNPACK_SKIP_IMAGES,xt);let Ri=A.isDataArrayTexture||A.isData3DTexture,es=N.isDataArrayTexture||N.isData3DTexture;if(A.isDepthTexture){let wt=qe.get(A),on=qe.get(N),Gn=qe.get(wt.__renderTarget),Gt=qe.get(on.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,Gn.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Qt=0;Qt<Pe;Qt++)Ri&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,H,xt+Qt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.get(N).__webglTexture,Ae,Xt+Qt)),U.blitFramebuffer(We,ot,We+Be,ot+we,Ge,vt,Ge+Be,vt+we,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||qe.has(A)){let wt=qe.get(A),on=qe.get(N);be.bindFramebuffer(U.READ_FRAMEBUFFER,I),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let Gn=0;Gn<Pe;Gn++)Ri?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,H,xt+Gn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,H),es?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,Ae,Xt+Gn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,Ae),H!==0?U.blitFramebuffer(We,ot,We+Be,ot+we,Ge,vt,Ge+Be,vt+we,U.COLOR_BUFFER_BIT,U.NEAREST):es?U.copyTexSubImage3D(Ve,Ae,Ge,vt,Xt+Gn,We,ot,Be,we):U.copyTexSubImage2D(Ve,Ae,Ge,vt,We,ot,Be,we);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else es?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ve,Ae,Ge,vt,Xt,Be,we,Pe,Lt,ln,Nt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ve,Ae,Ge,vt,Xt,Be,we,Pe,Lt,Nt.data):U.texSubImage3D(Ve,Ae,Ge,vt,Xt,Be,we,Pe,Lt,ln,Nt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Ge,vt,Be,we,Lt,ln,Nt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Ge,vt,Nt.width,Nt.height,Lt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Ge,vt,Be,we,Lt,ln,Nt);be.pixelStorei(U.UNPACK_ROW_LENGTH,mn),be.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At),be.pixelStorei(U.UNPACK_SKIP_PIXELS,Qi),be.pixelStorei(U.UNPACK_SKIP_ROWS,cn),be.pixelStorei(U.UNPACK_SKIP_IMAGES,Aa),Ae===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Ve),be.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?je.setTextureCube(A,0):A.isData3DTexture?je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?je.setTexture2DArray(A,0):je.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){Y=0,z=0,ce=null,be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var _a=new D;function kn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;_a.copy(e),_a[n]=0,_a.normalize();let c=.5*a/(a+o),h=1-_a.angleTo(i)/l;return Math.sign(_a[t])===1?h*c:o/(a+o)+c+c*(1-h)}var ir=class i extends Fn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,_=u.length/6,b=new D,g=.5/a;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/_)){case 0:b.set(1,0,0),f[y+0]=kn(b,c,"z","y",r,n),f[y+1]=1-kn(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),f[y+0]=1-kn(b,c,"z","y",r,n),f[y+1]=1-kn(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),f[y+0]=1-kn(b,c,"x","z",r,e),f[y+1]=kn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),f[y+0]=1-kn(b,c,"x","z",r,e),f[y+1]=1-kn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),f[y+0]=1-kn(b,c,"x","y",r,e),f[y+1]=1-kn(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),f[y+0]=kn(b,c,"x","y",r,e),f[y+1]=1-kn(b,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function $d(i,e){let t=new Ot;i.add(t);let n={},s=[],r={};function a(x){return r[x]??=new $n({color:x,roughness:.88})}function o(x,v,w){let T=new Dt(x,a(v));return T.castShadow=!0,T.receiveShadow=!0,w.add(T),T}function l(x,v,w,T){let m=new Ot;return m.position.set(v,w,T),x.add(m),m}function c(x,v,w,T,m,M,L,C){let R=o(new si(1,24,16),v,x);return R.position.set(w,T,m),R.scale.set(M,L,C),R}function h(x,v,w,T,m,M,L,C,R=.04){let F=o(new ir(M,L,C,4,R),v,x);return F.position.set(w,T,m),F}function u(x,v,w,T=.006){let m=new as(w.map(M=>new D(...M)));return o(new Zs(m,32,T,6,!1),v,x)}function d(x,v,w,T=.005){w=[...w].sort((F,W)=>F[0]-W[0]);let m=[],M=[],L=[],C=40;for(let F=0;F<w.length;F++){let[W,I,V,Y=0,z=0]=w[F];for(let ce=0;ce<=C;ce++){let $=ce/C*Math.PI*2,ne=T*(Math.sin($*7+F*.8)+.4*Math.sin($*13-F*.6));if(m.push(z+Math.cos($)*(I+ne),W,Y+Math.sin($)*(V+ne)),M.push(ce/C,F/(w.length-1)),F&&ce){let ae=F*(C+1)+ce;L.push(ae,ae-C-2,ae-1,ae,ae-C-1,ae-C-2)}}}let R=new Wt;for(let F of[0,w.length-1]){let[W,I,V,Y=0,z=0]=w[F],ce=m.length/3;m.push(z,W,Y),M.push(.5,.5);for(let $=0;$<C;$++){let ne=F*(C+1)+$,ae=ne+1;F===0?L.push(ce,ne,ae):L.push(ce,ae,ne)}}return R.setAttribute("position",new Mt(m,3)),R.setAttribute("uv",new Mt(M,2)),R.setIndex(L),R.computeVertexNormals(),o(R,v,x)}let f=n.body=l(t,0,1.07,0);d(f,"#009e99",[[-.39,.235,.16],[-.35,.27,.18],[-.28,.29,.19],[-.15,.295,.205],[0,.31,.21],[.13,.33,.205],[.22,.29,.17],[.27,.19,.145],[.29,.14,.125]],.008),d(f,"#087b7b",[[-.39,.23,.16],[-.37,.267,.18],[-.32,.268,.18],[-.3,.255,.174]],.002);let _=c(f,"#0ab4ae",0,.225,.16,.29,.15,.22);_.rotation.x=-.3,c(f,"#047d7c",0,.285,.18,.21,.075,.15);for(let x of[-1,1])u(f,"#106c68",[[x*.24,.21,.13],[x*.27,.09,.24],[x*.24,-.14,.255],[x*.19,-.3,.205]],.026),u(f,"#f4b442",[[x*.24,.21,.155],[x*.265,.08,.265],[x*.235,-.14,.28]],.012);let b=l(f,0,-.015,.32);h(b,"#ec781d",0,0,0,.48,.58,.25,.08),h(b,"#ff9b2d",0,.17,.085,.465,.23,.14,.055),h(b,"#ee8c28",0,-.13,.143,.38,.215,.075,.04),u(b,"#bc621b",[[-.18,-.225,.19],[-.205,-.16,.19],[-.205,-.04,.18],[-.16,-.015,.184],[.16,-.015,.184],[.205,-.05,.18],[.205,-.18,.18],[.18,-.225,.19]],.007),u(b,"#ffb440",[[-.19,.25,.1],[-.22,.18,.14],[-.2,.09,.155],[0,.065,.16],[.2,.09,.155],[.22,.18,.14],[.19,.25,.1]],.009),h(b,"#684c2b",0,.09,.174,.045,.115,.025,.008),h(b,"#9d8460",0,.105,.194,.065,.065,.018,.008),h(b,"#ef992f",0,.105,.205,.037,.035,.008,.004),u(b,"#a6531a",[[-.075,.3,0],[-.075,.35,0],[.075,.35,0],[.075,.3,0]],.014);for(let x of[-1,1])h(b,"#d2681b",x*.255,-.12,-.005,.055,.23,.16,.02);let p=n.head=l(t,0,1.69,-.015);c(p,"#d99c76",0,-.035,0,.245,.285,.225),c(p,"#3f2318",0,.075,.035,.26,.245,.235);for(let x of[-1,1])c(p,"#d99770",x*.244,-.075,0,.045,.077,.048),c(p,"#b87551",x*.27,-.07,.013,.015,.038,.021);function y(x,v,w,T,m,M,L){let C=new as([new D(x,v,w),new D(x+T*.4,v+m*.5,w+M*.45),new D(x+T,v+m,w+M)]),R=new Zs(C,12,1,9,!1),F=R.attributes.position;for(let W=0;W<=12;W++){let I=C.getPointAt(W/12),V=L*Math.pow(1-W/12,.65)+.002;for(let Y=0;Y<=9;Y++){let z=W*10+Y;F.setXYZ(z,I.x+(F.getX(z)-I.x)*V,I.y+(F.getY(z)-I.y)*V,I.z+(F.getZ(z)-I.z)*V)}}R.computeVertexNormals(),o(R,["#4a291a","#57301d","#613721"][Math.abs(Math.floor(x*30))%3],p)}for(let x=0;x<7;x++){let v=x/7*Math.PI*2;y(Math.cos(v)*.15,.18+Math.sin(v)*.025,Math.sin(v)*.145,.1+Math.cos(v)*.035,.075+x%3*.025,-.075,.105)}for(let x=0;x<4;x++)y(-.16+x*.105,.07,.17,.065,.07,.045,.092);for(let x of[-1,1]){let M=function(R,F,W,I){let V=new ls(m,{depth:F,bevelEnabled:!0,bevelThickness:I,bevelSize:I,bevelSegments:3,steps:1,curveSegments:10});V.rotateX(Math.PI/2);let Y=o(V,W,T);return Y.position.y=R,Y},v=l(t,x*.16,.74,0);d(v,"#303532",[[.055,.133,.16],[-.02,.145,.165],[-.12,.142,.16],[-.23,.138,.146],[-.285,.13,.14]],.003),d(v,"#3e423e",[[-.25,.141,.15],[-.28,.141,.15],[-.295,.133,.145]],.001),u(v,"#202522",[[x*.135,-.04,.04],[x*.145,-.16,.04],[x*.136,-.25,.03]],.004);let w=l(v,0,-.32,0);d(w,"#e4aa82",[[.08,.091,.09],[.015,.096,.1],[-.09,.084,.085],[-.18,.068,.073],[-.245,.064,.068]],.001),d(w,"#fcf4df",[[-.22,.069,.073],[-.245,.077,.077],[-.29,.079,.078],[-.33,.07,.077]],.001),d(w,"#059a96",[[-.24,.077,.078],[-.25,.079,.08],[-.264,.079,.08]],0);let T=l(w,0,-.32,0),m=new zi;m.moveTo(-.078,.12),m.bezierCurveTo(-.12,.1,-.125,-.09,-.124,-.21),m.bezierCurveTo(-.12,-.29,.095,-.3,.121,-.22),m.bezierCurveTo(.13,-.11,.115,.09,.075,.12),m.closePath(),M(-.07,.035,"#dad4c3",.012),M(-.035,.045,"#fff5e0",.015),d(T,"#f9f0dd",[[-.02,.102,.18,-.075],[.015,.102,.18,-.075],[.06,.088,.145,-.06],[.105,.073,.095,-.008]],.001),c(T,"#079e99",0,.085,.053,.082,.06,.065);for(let R=0;R<4;R++)u(T,"#fffbed",[[-.065,.078-R*.006,-.033-R*.03],[0,.088-R*.006,-.043-R*.03],[.065,.078-R*.006,-.033-R*.03]],.006);for(let R=0;R<7;R++)h(T,R%2?"#a0a397":"#babbae",0,-.113,-.23+R*.047,.17,.012,.022,.003);for(let R of[-1,1])u(T,"#d0c6b3",[[R*.102,-.015,.06],[R*.108,-.01,-.12],[R*.075,-.005,-.23]],.004);s.push({side:x,kind:"leg",g:v,knee:w,foot:T});let L=l(t,x*.32,1.27,0);L.rotation.z=x*-.12,d(L,"#08a7a0",[[.02,.12,.135],[-.04,.135,.14],[-.15,.128,.125],[-.25,.105,.105],[-.3,.098,.1]],.005);let C=l(L,0,-.28,0);c(L,"#079e99",0,-.275,0,.102,.105,.106),d(C,"#08a099",[[.02,.1,.105],[-.08,.108,.105],[-.19,.09,.085],[-.245,.075,.075]],.005),d(C,"#077f7e",[[-.218,.078,.077],[-.25,.078,.077],[-.265,.07,.073]],0),c(C,"#e2a178",0,-.3,0,.075,.092,.07),c(C,"#ce8c66",x*-.06,-.29,-.028,.03,.047,.035);for(let R=0;R<3;R++)u(C,"#ba7956",[[x*.04,-.34+R*.018,.047],[x*-.01,-.347+R*.018,.06]],.002);s.push({side:x,kind:"arm",g:L,knee:C})}return{hero:t,rig:n,limbs:s}}function xh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Wt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in u.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(u.attributes[_]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in u.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(u.morphAttributes[_]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=u.index.count;else if(u.attributes.position!==void 0)_=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,h),c+=_}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let _=0;_<f.count;++_)u.push(f.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let _=Zd(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}}return l}function Zd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new tn(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let _=0;_<t;_++){let b=h.getComponent(d,_);o.setComponent(d+u,_,b)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Jd(i,e){let t=new Pl({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.outputColorSpace=Yt,t.toneMapping=ra,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=zo;let n=new Lr;n.background=new lt("#7fc8ed"),n.fog=new Pr("#a9d6e6",48,95);let s=new _n(57,1,.1,190);n.add(new Qr("#e1f1ff","#a48967",1));let r=new na("#fff0cc",2.8);r.position.set(-12,23,9),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-18,right:18,top:24,bottom:-18,near:.1,far:85}),r.shadow.bias=-6e-4,r.shadow.normalBias=.035,r.shadow.radius=2,n.add(r),n.add(r.target),r.target.position.set(0,0,0);let a=new Hi().load("art/plaster.jpg");a.wrapS=a.wrapT=yi,a.colorSpace=Yt,a.anisotropy=4;let o=new $n({vertexColors:!0,roughness:.85});o.onBeforeCompile=B=>{B.uniforms.plaster={value:a},B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSurfacePos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSurfacePos=position;`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSurfacePos;
uniform sampler2D plaster;
float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}`).replace("#include <color_fragment>",`#include <color_fragment>
float speckle=grain(floor(vSurfacePos*130.)); float patina=grain(floor(vSurfacePos*9.)); diffuseColor.rgb*=.94+speckle*.05+patina*.04; vec3 N=abs(normalize(cross(dFdx(vSurfacePos),dFdy(vSurfacePos)))); vec2 tc=N.x>N.z?vSurfacePos.zy:vSurfacePos.xy; if(diffuseColor.r>.45 && diffuseColor.g>.25 && diffuseColor.b>.15){diffuseColor.rgb*=texture2D(plaster,tc*.35).rgb*1.3;}`)};let l={box:new Fn(1,1,1),round:new ir(1,1,1,1,.12),sphere:new si(1,12,8),small:new Ys(1,0),leaf:new Ys(1,1),cyl:new Bi(1,1,1,10),cone:new Gr(1,1,12)},c=new Wt;c.setAttribute("position",new Mt([0,.2,0,0,0,-1,-.65,0,-.4,-.8,0,.2,-.45,0,.7,0,0,1,.45,0,.7,.8,0,.2,.65,0,-.4],3)),c.setAttribute("uv",new Mt([.5,.5,.5,0,0,.2,0,.5,0,.8,.5,1,1,.8,1,.5,1,.2],2)),c.setIndex([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,7,0,7,8,0,8,1]),c.computeVertexNormals(),l.leafy=c;let h=new D,u=new Un,d=new D,f=new Et,_=new qn,b=new lt,g=801,p=()=>(g=Math.imul(g,1664525)+1013904223>>>0,g/4294967296);function y(B,O,re,X,q,J,le,Re,Ye,ut=0,pt=0,$e=0){let Se=l[O].index?l[O].toNonIndexed():l[O].clone();_.set(ut,pt,$e),u.setFromEuler(_),f.compose(h.set(re,X,q),u,d.set(J,le,Re)),Se.applyMatrix4(f),b.set(Ye);let _t=new Float32Array(Se.attributes.position.count*3);for(let He=0;He<_t.length;He+=3)_t[He]=b.r,_t[He+1]=b.g,_t[He+2]=b.b;Se.setAttribute("color",new tn(_t,3)),B.push(Se)}let x=(B,O,re,X,q,J,le,Re,Ye=0)=>y(B,"box",O,re,X,q,J,le,Re,0,0,Ye),v=!1,w=(B,O,re,X,q,J,le,Re,Ye=0,ut=0,pt=0)=>y(B,v?"round":"box",O,re,X,q,J,le,Re,Ye,ut,pt),T=(B,O,re,X,q,J,le,Re)=>y(B,v?"sphere":"small",O,re,X,q,J,le,Re),m=(B,O,re,X,q,J,le,Re=0,Ye=0)=>y(B,"cyl",O,re,X,q,J,q,le,Re,0,Ye);function M(B,O=n,re=!0,X=o){if(!B.length)return null;let q=xh(B);for(let le of B)le.dispose();let J=new Dt(q,X);return J.castShadow=re,J.receiveShadow=!0,O.add(J),J}function L(B){let O=document.createElement("canvas");O.width=O.height=1024;let re=O.getContext("2d");if(re.fillStyle=B==="stone"?"#ab9e8a":"#f5dfbd",re.fillRect(0,0,1024,1024),B==="stone")for(let q=0;q<16;q++)for(let J=-1;J<8;J++){let le=J*146+(q%2?73:0),Re=q*64,Ye=Math.floor(p()*17);re.fillStyle=`rgb(${176+Ye},${163+Ye},${144+Ye})`,re.fillRect(le+2,Re+2,142,60),re.fillStyle="#e1d0b8",re.fillRect(le+3,Re+2,140,2),re.fillStyle="#928575",re.fillRect(le+3,Re+60,140,2);let ut=re.createLinearGradient(le,Re,le+100,Re+64);ut.addColorStop(0,"#fff4d71c"),ut.addColorStop(.5,"#4e40370a"),ut.addColorStop(1,"#8d7b641a"),re.fillStyle=ut,re.fillRect(le+3,Re+4,140,55);for(let pt=0;pt<12;pt++)re.fillStyle=pt%2?"#fff4d715":"#584f3e12",re.fillRect(le+5+p()*130,Re+4+p()*50,3+p()*19,1+p()*2)}for(let q=0;q<2e4;q++)re.fillStyle=p()>.5?"#ffffff0b":"#493a2408",re.fillRect(p()*1024,p()*1024,2+p()*5,1+p()*2);let X=new Yn(O);return X.colorSpace=Yt,X.wrapS=X.wrapT=yi,X.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),X}let C=new Hi().load("art/paving.jpg");C.colorSpace=Yt,C.wrapS=C.wrapT=yi,C.anisotropy=8,C.repeat.set(1.5,30);let R=new Hi().load("art/paving-height.jpg");R.wrapS=R.wrapT=yi,R.repeat.copy(C.repeat);let F=new Dt(new On(8.6,230),new $n({map:C,bumpMap:R,bumpScale:.055,roughness:.93}));F.rotation.x=-Math.PI/2,F.position.set(0,.012,-93),F.receiveShadow=!0,n.add(F);let W=C.clone();W.needsUpdate=!0,W.repeat.set(.6,30);let I=new $n({map:W,color:"#f2dfbf",roughness:.95});for(let B of[-1,1]){let O=new Dt(new Fn(2.7,.24,230),I);O.position.set(B*5.65,-.03,-93),O.receiveShadow=!0,n.add(O)}let V=[];x(V,0,-.3,-90,150,.3,240,"#c6b28e");for(let B of[-1.3,1.3])x(V,B,.023,-90,.12,.035,240,"#dfc9a7"),x(V,B-.09,.025,-90,.025,.04,240,"#9d8d75");M(V,n,!1);let Y=document.createElement("canvas");Y.width=512,Y.height=2048;let z=Y.getContext("2d");z.fillStyle="#3d4b5c",z.globalAlpha=.1;for(let B=0;B<4;B++){let O=B*512+200;z.beginPath(),z.moveTo(0,O),z.lineTo(270,O+125),z.lineTo(270,O+395),z.lineTo(0,O+270),z.fill()}z.globalAlpha=.12;for(let B=0;B<3;B++){let re=B*690+230;z.beginPath(),z.ellipse(155,re+95,110,55,.55,0,Math.PI*2),z.fill(),z.save(),z.translate(65,re),z.rotate(-.52),z.fillRect(0,0,13,165),z.restore()}let ce=new Yn(Y),$=new An({map:ce,transparent:!0,depthWrite:!1,opacity:.8}),ne=[],ae=[["#f1c39e","#e8b28e"],["#f3ddbb","#ead1a5"],["#ed9f7e","#d79077"],["#eecda9","#d3b28c"],["#f3dfbd","#dfc5a1"],["#e9aa96","#d99d89"]];function Ue(B,O,re,X=1){m(B,O,1.45*X,re,.15*X,2.9*X,"#805335");for(let J=0;J<7;J++){let le=J*2.4;y(B,"cyl",O+Math.cos(le)*.3*X,2.2*X,re+Math.sin(le)*.3*X,.08*X,1.5*X,.08*X,"#8a623e",Math.cos(le)*.6,0,Math.sin(le)*.6)}let q=["#579333","#76ab3d","#3f7d2c","#91b849","#6da43a","#a2bb52"];for(let J=0;J<1800;J++){let le=p()*Math.PI*2,Re=Math.cbrt(p()),Ye=(p()-.5)*2,ut=Math.sqrt(1-Ye*Ye)*Re*1.25*X,pt=O+Math.cos(le)*ut,$e=re+Math.sin(le)*ut,Se=3*X+Ye*Re*1.05*X;y(B,"leafy",pt,Se,$e,.095*X,.095*X,.17*X,q[J%q.length],p()*1.5,p()*6.28,p()*1.3)}}function Je(B,O,re,X=!1){m(B,O,.3,re,.31,.58,"#bb7148"),m(B,O,.58,re,.35,.11,"#df9661"),m(B,O,.64,re,.25,.025,"#514333");for(let q=0;q<7;q++){let J=q*2.4;T(B,O+Math.cos(J)*.18,.76+q%3*.09,re+Math.sin(J)*.18,.22,.22,.22,q%2?"#76a33b":"#4f8536"),X&&T(B,O+Math.cos(J)*.25,.93+q%3*.09,re+Math.sin(J)*.25,.09,.08,.09,q%2?"#f065a2":"#f6c34f")}}function ee(B,O,re){m(B,O,1.9,re,.055,3.8,"#294a4b"),m(B,O,.17,re,.17,.32,"#314c4b"),w(B,O,3.55,re,.32,.5,.32,"#f7edc3");for(let X of[-.18,.18])for(let q of[-.18,.18])x(B,O+X,3.55,re+q,.032,.56,.032,"#2f4c4d");x(B,O,3.88,re,.49,.09,.49,"#29484c"),y(B,"cone",O,4.02,re,.34,.23,.34,"#315050"),T(B,O,4.2,re,.055,.11,.055,"#29484c")}function Ee(B,O,re,X){for(let q=0;q<4;q++)x(B,O,.5,re-.57+q*.36,.7,.09,.28,"#876047");for(let q=0;q<3;q++)x(B,O+X*.32,.75+q*.15,re,.1,.1,1.4,"#a7774e");for(let q of[-.5,.5])x(B,O,.25,re+q,.55,.48,.07,"#315151"),x(B,O+X*.31,.65,re+q,.07,1,.07,"#315151")}function Fe(B,O,re,X){let q=6.5+X*7%5,J=4.8,le=8.1,Re=O*(9.1+X%3*.14),Ye=O*(6.68+X%3*.14),ut=ae[X%ae.length];x(B,Re,q/2,re,J,q,le,ut[0]),x(B,Ye,.55,re,.18,1.1,le,"#d9ba96");for(let $e=.18;$e<1;$e+=.27)for(let Se=-3.8;Se<4;Se+=.9)x(B,Ye-O*.03,$e,re+Se,.06,.018,.86,"#be9e77");x(B,Re,q-.1,re,J+.35,.24,le+.3,"#fff0d6"),x(B,Re,q+.12,re,J+.45,.16,le+.4,"#c77f54");for(let $e=-4;$e<=4;$e+=.32)m(B,Ye,q+.26,re+$e,.17,.48,X%2?"#bd6945":"#cf8252",0,Math.PI/2);x(B,Re+O*.9,q+.65,re+1,1.1,1.4,.9,ut[1]),x(B,Re+O*.9,q+1.37,re+1,1.3,.15,1.1,"#bb7651");for(let $e=0;$e<Math.floor((q-1.5)/2.25);$e++)for(let Se=0;Se<3;Se++){let _t=2.35+$e*2.25,He=re-2.7+Se*2.65;x(B,Ye-O*.035,_t,He,.12,1.5,1.06,"#fae9cd"),x(B,Ye-O*.11,_t+.02,He,.08,1.26,.83,"#335b60"),x(B,Ye-O*.17,_t+.02,He,.05,1.15,.035,"#c7d6c4"),x(B,Ye-O*.17,_t+.02,He,.05,.035,.8,"#c7d6c4");for(let dt of[-.64,.64]){x(B,Ye-O*.08,_t,He+dt,.12,1.37,.36,"#438c7d");for(let an=0;an<7;an++)x(B,Ye-O*.16,_t-.53+an*.17,He+dt,.07,.035,.31,"#2f7769")}if(x(B,Ye-O*.22,_t-.8,He,.47,.13,1.4,"#fff1d2"),$e===1&&Se===1&&X%2===0){x(B,Ye-O*.52,_t-.86,He,1.2,.17,1.8,"#ead3ae");for(let dt=-.8;dt<=.8;dt+=.2)x(B,Ye-O*1.05,_t-.52,He+dt,.04,.75,.04,"#325c56");x(B,Ye-O*1.05,_t-.13,He,.05,.055,1.85,"#325c56");for(let dt=0;dt<9;dt++)T(B,Ye-O*.98,_t-.4,He-.7+dt*.18,.14,.14,.14,dt%2?"#d6558f":"#5c9537")}}x(B,Ye-O*.08,1.2,re,.08,2.1,3.7,"#396a6d");for(let $e of[-1.88,0,1.88])x(B,Ye-O*.17,1.2,re+$e,.12,2.25,.12,"#f9e6c9");x(B,Ye-O*.16,.2,re,.15,.15,3.9,"#e3c9a4");let pt=X%3===0?"#da765e":X%3===1?"#328d88":"#b4a354";for(let $e=0;$e<10;$e++){let Se=re-2.02+$e*.45;w(B,Ye-O*.82,2.54,Se,1.8,.14,.46,$e%2?"#fff0d2":pt,0,0,O*.12),w(B,Ye-O*1.65,2.34,Se,.1,.36,.46,$e%2?"#fff0d2":pt)}if(X%3===0)for(let $e=0;$e<80;$e++){let Se=re-3.45+Math.sin($e*2.4)*.5,_t=3+p()*3.8;y(B,"small",Ye-O*(.18+p()*.16),_t,Se,.12,.18,.16,$e%5===0?"#de5c99":$e%2?"#568b2f":"#7baa3d")}if(X%2===1){Je(B,O*5.2,re-2.8,!0);let $e=O*5.6;m(B,$e,.73,re+1.1,.5,.09,"#b78555"),m(B,$e,.38,re+1.1,.06,.7,"#3c5550");for(let Se of[-.85,.85]){x(B,$e,.42,re+1.1+Se,.53,.08,.5,"#a77b4e"),x(B,$e+O*.2,.7,re+1.1+Se,.09,.54,.5,"#a77b4e");for(let _t of[-.2,.2])x(B,$e+_t,.2,re+1.1+Se,.04,.4,.04,"#3c5550")}}}for(let B=0;B<2;B++){let O=[],re=new Ot;for(let q of[-1,1]){for(let J=0;J<4;J++)Fe(O,q,-J*11-5,B*8+J+(q>0?2:0));for(let J=0;J<3;J++){let le=-J*15-10;Ue(O,q*5.35,le,.92),Je(O,q*5.35,le),ee(O,q*4.65,le+5.4)}Ee(O,q*5.4,-21,q);for(let J=0;J<44;J++)x(O,q*4.38,.095,-J*1.02,.25,.26,.96,J%3?"#e8d7b8":"#f7e8cd")}M(O,re,!0);let X=new Dt(new On(14,44),$);X.rotation.x=-Math.PI/2,X.position.set(0,.055,-22),re.add(X),re.position.z=-B*44,n.add(re),ne.push({g:re,base:-B*44})}let Ze=new Hi().load("art/coast.jpg");Ze.colorSpace=Yt;let Ce=new Dt(new On(270,152),new An({map:Ze,fog:!1,toneMapped:!1}));Ce.position.set(-55,40,-155),n.add(Ce);let Xe=new Ot,bt=[];for(let B of[-1,1])x(bt,B*5.3,2.7,0,1.3,5.4,1.9,"#d6c7a6"),x(bt,B*5.3,.3,0,1.7,.6,2.2,"#b9ad91");for(let B=0;B<22;B++){let O=B/22*Math.PI,re=(B+.99)/22*Math.PI,X=4.7,q=5.3,J=new zi;J.moveTo(Math.cos(O)*X,Math.sin(O)*2.1+3.6),J.lineTo(Math.cos(O)*q,Math.sin(O)*2.6+3.6),J.lineTo(Math.cos(re)*q,Math.sin(re)*2.6+3.6),J.lineTo(Math.cos(re)*X,Math.sin(re)*2.1+3.6),J.closePath();let le=new ls(J,{depth:1.6,bevelEnabled:!1});le.translate(0,0,-.8);let Re=new lt(B%2?"#e2d4b4":"#d8c7a5"),Ye=new Float32Array(le.attributes.position.count*3);for(let ut=0;ut<Ye.length;ut+=3)Ye[ut]=Re.r,Ye[ut+1]=Re.g,Ye[ut+2]=Re.b;le.setAttribute("color",new tn(Ye,3)),bt.push(le)}x(bt,0,6.45,0,12,.5,2.1,"#e4d3b2");for(let B=-5.8;B<6;B+=.4)x(bt,B,7.1,-.7,.055,1.05,.06,"#305953");x(bt,0,7.65,-.7,12,.09,.09,"#315c57");for(let B of[-4,-1.8,1.8,4]){m(bt,B,6.95,-.2,.3,.4,"#bb7952");for(let O=0;O<5;O++)T(bt,B+(O-2)*.14,7.2,-.2,.19,.2,.2,O%2?"#dc669a":"#5d943e")}M(bt,Xe),n.add(Xe);let De,it={},ct=[],oe,de,xe=e;function Le(B){if(v=!0,xe=B,De&&(n.remove(De),De.traverse(Se=>{Se.isMesh&&Se.geometry.dispose()})),De=new Ot,De.scale.setScalar(1.16),n.add(De),it={},ct=[],oe=null,B==="courier"){n.remove(De);let Se=$d(n);De=Se.hero,it=Se.rig,ct=Se.limbs,De.scale.setScalar(1.16),de=new Dt(new si(1.22,16,12),new An({color:"#83f1ee",transparent:!0,opacity:.15,wireframe:!0})),de.position.y=.9,de.visible=!1,De.add(de),v=!1;return}let O=B==="courier",re=B==="fox",X=B==="cat",q=B==="bunny",J=B==="panda",le=re?"#d87932":X?"#afa0d8":q?"#e8d4d0":"#f1eee1",Re=J?"#35404a":"#4e3930",Ye="#fff0d6";function ut(Se,_t,He,dt,an,Pn=De){let Ln=new Ot;return Ln.position.set(_t,He,dt),M(an,Ln,!0),Pn.add(Ln),it[Se]=Ln,Ln}let pt=[];if(O){w(pt,0,.03,0,.62,.65,.4,"#109f9f"),T(pt,0,.34,.03,.35,.19,.3,"#0a888b"),T(pt,0,.36,.06,.28,.13,.24,"#1bb5b0"),w(pt,0,-.3,0,.55,.16,.39,"#0a7e82");for(let Se of[-1,1])w(pt,Se*.23,.04,.215,.065,.66,.055,"#574d37",0,0,Se*-.08);w(pt,0,.02,.32,.48,.55,.23,"#e58028"),w(pt,0,.16,.45,.45,.2,.1,"#ffa634"),w(pt,0,-.1,.46,.37,.23,.08,"#f3932f"),x(pt,0,.14,.51,.1,.09,.035,"#6d5a39");for(let Se of[-1,1])x(pt,Se*.19,-.04,.49,.035,.35,.025,"#d47025")}else T(pt,0,0,0,.34,.43,.28,le),T(pt,0,-.03,-.23,.23,.3,.055,J?"#fff":Ye),w(pt,0,.21,.02,.68,.14,.54,"#169a99"),w(pt,-.25,.02,.27,.12,.33,.08,"#20b9ad",.12,.1,-.2),w(pt,.08,.03,.25,.32,.37,.14,"#d99640");ut("body",0,O?1.02:.88,0,pt);let $e=[];if(O){T($e,0,0,0,.28,.3,.25,"#d8986c"),T($e,0,.08,.08,.31,.25,.26,"#4c2d20");for(let Se=0;Se<10;Se++){let _t=Se*2.4;T($e,Math.cos(_t)*.23,.2+Math.sin(Se)*.04,Math.sin(_t)*.18,.13,.12,.14,Se%2?"#5d3520":"#714227")}for(let Se=0;Se<5;Se++)y($e,"cone",-.2+Se*.09,.34+Se*.01,.04,.12,.28,.13,Se%2?"#6e3e23":"#4c2d20",.35,.2,-.6);for(let Se of[-1,1])T($e,Se*.278,-.02,0,.06,.09,.06,"#d49468")}else{T($e,0,0,0,.4,.37,.32,le),T($e,0,-.08,-.26,.25,.17,.23,Ye),T($e,0,-.03,-.46,.075,.055,.05,"#3c3432");for(let Se of[-1,1])q?(T($e,Se*.19,.49,.01,.12,.44,.1,le),T($e,Se*.19,.51,-.07,.06,.3,.035,"#d6a1a1")):J?T($e,Se*.31,.29,.01,.16,.17,.13,Re):(y($e,"cone",Se*.27,.35,.01,.22,.43,.19,le,0,Math.PI/4,Se*-.1),y($e,"cone",Se*.27,.37,-.06,.12,.25,.08,"#f0c6ac",0,Math.PI/4,Se*-.1)),T($e,Se*.2,.02,-.27,.055,.065,.025,"#2e3538")}ut("head",0,O?1.67:1.49,-.025,$e),O&&it.head.scale.setScalar(.84);for(let Se of[-1,1]){let _t=[],He=[],dt=[],an=new Ot;if(an.position.set(Se*(O?.17:.18),O?.74:.59,0),De.add(an),O){w(_t,0,-.12,0,.26,.32,.29,"#37434b"),m(_t,0,-.29,0,.09,.2,"#dca078"),m(He,0,-.12,0,.085,.28,"#dfa77d"),m(He,0,-.29,0,.09,.13,"#f4f0dc"),m(He,0,-.26,0,.095,.025,"#20a39e"),w(dt,0,-.015,-.08,.235,.16,.39,"#fcf4df"),w(dt,0,-.09,-.07,.25,.06,.41,"#d6cbb9"),w(dt,0,.04,.015,.2,.08,.16,"#1c9c99");for(let k=0;k<3;k++)x(dt,0,.07,-.06-k*.04,.14,.015,.017,"#fff6e2");for(let k=0;k<6;k++)w(dt,0,-.124,-.24+k*.06,.17,.013,.035,k%2?"#9b9b92":"#b6b7ac")}else T(_t,0,-.14,0,.13,.23,.14,J?Re:le),T(He,0,-.13,0,.105,.2,.11,J?Re:le),T(dt,0,-.02,-.09,.15,.09,.23,J?Re:Ye);M(_t,an);let Pn=ut(`knee${Se}`,0,-.32,0,He,an),Ln=ut(`foot${Se}`,0,-.32,0,dt,Pn);ct.push({side:Se,kind:"leg",g:an,knee:Pn,foot:Ln});let ur=[],A=[],N=new Ot;N.position.set(Se*(O?.35:.34),O?1.25:1.07,0),De.add(N),T(ur,0,-.13,0,.14,.23,.14,O?"#10a9a5":J?Re:le),T(A,0,-.12,0,.1,.19,.1,O?"#109b9d":J?Re:le),T(A,0,-.29,-.015,.09,.11,.085,O?"#dca079":J?Re:Ye),M(ur,N);let Z=ut(`elbow${Se}`,0,-.28,0,A,N);ct.push({side:Se,kind:"arm",g:N,knee:Z})}if(re||X){let Se=[];T(Se,0,.18,.2,re?.22:.09,.38,.17,le),T(Se,0,.45,.33,re?.19:.09,.22,.15,re?Ye:le),oe=ut("tail",0,.59,.17,Se),oe.rotation.x=.7}else if(q){let Se=[];T(Se,0,0,0,.18,.18,.18,"#fff7e9"),ut("tail",0,.61,.3,Se)}de=new Dt(new si(1.22,16,12),new An({color:"#83f1ee",transparent:!0,opacity:.15,wireframe:!0})),de.position.y=.9,de.visible=!1,De.add(de),v=!1}Le(e);let ye=document.createElement("canvas");ye.width=ye.height=64;let st=ye.getContext("2d"),ze=st.createRadialGradient(32,32,0,32,32,31);ze.addColorStop(0,"#00000070"),ze.addColorStop(.4,"#00000042"),ze.addColorStop(1,"#00000000"),st.fillStyle=ze,st.fillRect(0,0,64,64);let at=new Dt(new On(1.8,1.45),new An({map:new Yn(ye),transparent:!0,depthWrite:!1}));at.rotation.x=-Math.PI/2,at.position.y=.035,n.add(at);let Qe=new Ot;n.add(Qe);let mt=[],U=[],Bt=[],tt=null,Rt=0,be=null,zt=null,qe=new $t,je=[],E=null;function S(B,O="#176b70",re=2.2,X=1){let q=document.createElement("canvas");q.width=384,q.height=192;let J=q.getContext("2d");J.fillStyle=O,J.beginPath(),J.roundRect(4,4,376,184,28),J.fill(),J.strokeStyle="#fff0d5",J.lineWidth=8,J.stroke(),J.fillStyle="#fff7df",J.font="bold 65px sans-serif",J.textAlign="center",J.textBaseline="middle",J.direction="rtl",J.fillText(B,192,102,350);let le=new Yn(q),Re=new Fi(new bi({map:le,depthTest:!0}));return Re.scale.set(re,X,1),Re}let G=new Ot;{let B=[];w(B,0,.13,0,.7,.16,1.25,"#ec8e3e");for(let O of[-.38,.38])for(let re of[-.4,.4])T(B,O,.08,re,.12,.12,.12,"#31516c");M(B,G,!0)}n.add(G),G.visible=!1;let he=new Ot;{let B=[];m(B,0,.35,0,.055,.75,"#65d8ca");for(let O=0;O<7;O++){let re=new Dt(new $s(.13,.025,5,12),new $n({color:"#ffcc61"}));re.rotation.x=Math.PI/2,re.position.y=.05+O*.055,he.add(re)}x(B,0,.52,0,.68,.06,.2,"#d58bf2"),M(B,he,!0)}n.add(he),he.visible=!1;let se=new Ot;{let B=[];m(B,0,0,0,.035,.5,"#6a5140"),w(B,0,-.25,.08,1,.075,.09,"#f5cb72"),M(B,se,!0)}n.add(se),se.visible=!1;let fe=new Ot;{let B=[];T(B,0,.62,0,.42,.4,.62,"#3c414d"),T(B,0,.95,-.5,.3,.28,.3,"#454b58"),T(B,0,.88,-.78,.14,.12,.2,"#2c313b");for(let re of[-1,1])y(B,"cone",re*.16,1.18,-.5,.1,.22,.1,"#2c313b",-.2,0,re*.15);for(let re of[-1,1])m(B,re*.2,.3,.28,.09,.6,"#333845"),m(B,re*.2,.3,-.3,.09,.6,"#333845");y(B,"cone",0,.78,.62,.08,.4,.08,"#333845",1.1,0,0),M(B,fe,!0);let O=new An({color:"#ff453a",fog:!1});for(let re of[-1,1]){let X=new Dt(new si(.05,8,6),O);X.position.set(re*.12,1,-.78),fe.add(X)}}fe.visible=!1,n.add(fe);let Me=[];function Q(B,O){let re=new Float32Array(B.attributes.position.count*3),X=new lt(O);for(let q=0;q<re.length;q+=3)re[q]=X.r,re[q+1]=X.g,re[q+2]=X.b;B.setAttribute("color",new tn(re,3)),Me.push(B)}Q(new Bi(.3,.3,.09,24).rotateX(Math.PI/2),"#ffc526");for(let B of[-1,1])Q(new Bi(.247,.247,.014,24).rotateX(Math.PI/2).translate(0,0,B*.052),"#e99c12"),Q(new $s(.278,.026,6,24).translate(0,0,B*.058),"#ffe477"),Q(new Fn(.17,.17,.02).rotateZ(Math.PI/4).translate(0,0,B*.071),"#ffde55");let te=xh(Me),ve=new $n({color:"#ffffff",vertexColors:!0,metalness:.12,roughness:.35,emissive:"#8c5d00",emissiveIntensity:.12});function P(){for(let B of[...Qe.children])Qe.remove(B),B!==tt&&B.geometry?.dispose();Qe.traverse(B=>{B.isSprite&&(B.material.map?.dispose(),B.material.dispose())}),mt=[],U=[],Bt=[],je=[],E=null,tt=null}function ie(B){P();let O=[];for(let X of B.obs){let q=X.lane*2.6,J=-X.x;if(X.type==="crate"){w(O,q,.63,J,1.62,1.26,1.18,"#a96f36");for(let le=0;le<5;le++)x(O,q-.63+le*.315,.63,J+.598,.29,1.08,.04,le%2?"#c18a46":"#b67d3c"),x(O,q,.63,J-.598,.29,1.08,.04,"#b98140");for(let le of[.09,1.17])w(O,q,le,J+.64,1.67,.16,.12,"#d19a50");for(let le of[-.73,.73])w(O,q+le,.63,J+.65,.16,1.16,.13,"#cf9953");w(O,q,.63,J+.68,.16,1.67,.095,"#cd9750",0,0,-.87);for(let le of[-.71,.71])for(let Re of[.12,1.14])T(O,q+le,Re,J+.726,.032,.032,.012,"#6c6654");for(let le=0;le<4;le++)x(O,q-.59+le*.39,1.27,J,.37,.025,1.05,le%2?"#bd8646":"#c28e4c")}else if(X.type==="barrier"){w(O,q,.51,J,1.95,.97,.62,"#ef7d33");for(let le of[-.73,0,.73])w(O,q+le,.52,J+.323,.23,.78,.025,"#fff0d2",0,0,-.48);for(let le of[-.72,.72])w(O,q+le,.08,J,.45,.16,.91,"#4c5556"),w(O,q+le,.98,J,.2,.09,.2,"#55595a")}else if(X.type==="tunnel"){for(let le of[-3.4,3.4]){for(let Re of[-1,1])w(O,q+Re,1.42,J+le,.22,2.84,.36,"#317b7b"),w(O,q+Re,.09,J+le,.55,.17,.72,"#465e5c");w(O,q,1.9,J+le,2.5,1.4,.5,"#d6814c");for(let Re=-.85;Re<1;Re+=.42)w(O,q+Re,1.9,J+le+.26,.18,1.2,.025,"#ffe8bc",0,0,-.22)}w(O,q,1.9,J,2.44,1.5,6.6,"#cd7a4a"),w(O,q,2.72,J,2.6,.2,7.2,"#377d7b");for(let le=-3;le<=3;le+=.75)w(O,q,1.18,J+le,2.5,.07,.3,"#ffe8bc")}else if(X.type==="ramp"){w(O,q,.42,J,2,.5,3.4,"#c98d4b",.4),w(O,q,.74,J,1.72,.07,2.9,"#f2c069",.4);for(let le=0;le<3;le++)w(O,q,.78,J+1-le*.95,1.15,.06,.32,"#fff3d6",.4);for(let le of[-.95,.95])w(O,q+le,.5,J,.14,.66,3.2,"#8a5a2e",.4)}else if(X.type!=="mover"){for(let le of[-1,1])w(O,q+le,1.42,J,.22,2.84,.36,"#317b7b"),w(O,q+le,.09,J,.55,.17,.72,"#465e5c");w(O,q,1.84,J,2.2,1.34,.48,"#d6814c");for(let le=-.85;le<1;le+=.42)w(O,q+le,1.84,J+.25,.18,1.15,.025,"#ffe8bc",0,0,-.22);w(O,q,2.57,J,2.44,.21,.59,"#377d7b")}}for(let X of B.routes||[]){let q=X.lane*2.6;if(X.type==="roof"){let le=Math.atan(X.height/10);w(O,q,X.height/2,-X.start-5,2.4,.16,Math.hypot(10,X.height),"#e6bb80",le),w(O,q,X.height-.1,-(X.start+X.end)/2,2.4,.22,X.end-X.start-20,"#e6bb80"),w(O,q,X.height/2,-X.end+5,2.4,.16,Math.hypot(10,X.height),"#e6bb80",-le);for(let Re=X.start+12;Re<X.end-10;Re+=8){w(O,q,X.height/2,-Re,2.2,X.height,.8,"#c98968");for(let Ye of[-1,1])w(O,q+Ye*1.12,X.height+.3,-Re,.08,.6,.1,"#287f80")}for(let Re of[-1,1])w(O,q+Re*1.12,X.height+.6,-(X.start+X.end)/2,.08,.08,X.end-X.start-20,"#287f80")}else{for(let le of[X.start,X.end]){for(let Re of[-1,1])m(O,q+Re*1.15,2.5,-le,.07,5,"#398087");w(O,q,5,-le,2.6,.15,.15,"#398087")}w(O,q,5,-(X.start+X.end)/2,.05,.05,X.end-X.start,"#f2cc71")}let J=S(X.type==="roof"?"\u05D2\u05D2\u05D5\u05EA \u2191":"\u05E7\u05E4\u05D9\u05E6\u05D4 \u05DC\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF",X.type==="roof"?"#267e78":"#7d5ea4",2.6,1.1);J.position.set(q,3.8,-X.start+8),Qe.add(J)}for(let X of B.pickups||[]){let q=S(X.kind==="letter"?X.value:"\u2726",X.kind==="letter"?"#31895b":"#a45d99",.8,.8);q.position.set(X.lane*2.6,X.y+.35,-X.x),Qe.add(q),je.push({p:X,g:q})}B.bestMarker>2&&(E=S("\u05D4\u05E9\u05D9\u05D0 \u05E9\u05DC\u05DA","#bb7734",2.5,.95),E.position.set(0,3.2,-B.bestMarker),Qe.add(E),w(O,0,.045,-B.bestMarker,7.6,.04,.15,"#ffd46a")),be=M(O,Qe,!0),B.obs.forEach((X,q)=>{if(X.type!=="mover")return;let J=[],le=X.id%2?"#e8a13c":"#5b8fd9";w(J,0,.62,0,1.7,.7,2.5,le),w(J,0,1.18,-.1,1.5,.5,1.5,le),w(J,0,1.2,.68,1.3,.34,.1,"#bfe3f0"),w(J,0,1.2,-.88,1.3,.34,.1,"#bfe3f0");for(let Ye of[-1,1]){w(J,Ye*.87,.85,-.1,.06,.4,1.2,"#20303a");for(let ut of[-1,1])m(J,Ye*.8,.34,ut*.8,.34,.2,"#2b2f33",0,Math.PI/2);w(J,Ye*.55,.6,1.27,.3,.18,.06,"#fff6c8")}w(J,0,.34,1.29,1.5,.24,.08,"#f5edd8");let Re=M(J,Qe,!0);Re.position.set(X.lane*2.6,0,-X.x),Bt.push({i:q,g:Re})}),mt=B.coins,Rt=mt.length,tt=new Or(te,ve,Rt),tt.instanceMatrix.setUsage(eh),tt.frustumCulled=!1,Qe.add(tt);for(let X of B.powers){let q=[],J=X.type==="shield"?"#76e5dc":X.type==="magnet"?"#d49aeb":X.type==="shoes"?"#8fe07a":X.type==="board"?"#f6a143":X.type==="pogo"?"#c291e7":"#86c9f5";if(T(q,0,1,0,.39,.45,.27,J),x(q,0,1.03,.28,.14,.48,.04,"#fff8dc"),X.type==="magnet"&&x(q,0,.83,.28,.43,.12,.04,"#fff8dc"),X.type==="shoes"&&(x(q,0,.76,.3,.36,.13,.18,"#fff8dc"),x(q,.1,.7,.38,.16,.1,.12,"#fff8dc")),X.type==="board"){w(q,0,.62,0,.8,.12,.45,"#e98b34");for(let Re of[-1,1])T(q,Re*.3,.52,.2,.09,.09,.09,"#31516c")}if(X.type==="pogo"&&(m(q,0,1,.1,.04,1,"#fff1c5"),x(q,0,1.4,.1,.55,.06,.1,"#c17be0")),X.type==="flight")for(let Re of[-1,1])x(q,Re*.32,1.08,.05,.42,.07,.2,"#fff8dc",Re*.35);let le=M(q,Qe,!1);U.push({p:X,g:le})}let re=[];for(let X of[-4.1,4.1])m(re,X,2.9,-B.length,.07,5.8,"#f4e1b7");for(let X=0;X<12;X++)for(let q=0;q<2;q++)x(re,-3.85+X*.7,5.1+q*.55,-B.length,.7,.55,.06,(X+q)%2?"#315c66":"#fff3da");zt=M(re,Qe,!1)}let K=0,ge=0,pe=0,me=0,Oe=0,ht=0,ue=390,ke=844,Ke={frames:0,frameMs:[],calls:0,triangles:0,dpr:t.getPixelRatio(),quality:"auto"},Te=0;function Tt(B,O){O!=="playing"||B<=0||(Ke.frameMs.push(B*1e3),Ke.frameMs.length>600&&Ke.frameMs.shift(),Ke.frames>45&&B>.035?Te++:Te=Math.max(0,Te-1),Te>25&&t.getPixelRatio()>1&&(t.setPixelRatio(1),t.setSize(ue,ke,!1),Ke.dpr=1,Ke.quality="adaptive-native",Te=0))}function Ht(){ue=innerWidth,ke=innerHeight,t.setSize(ue,ke,!1),s.aspect=ue/ke,s.fov=ue>ke?61:56,s.updateProjectionMatrix()}function Qn(B,O,re){let X=re==="playing",q=re==="menu";(X||q)&&(K+=B);let J=O?.x??K*2.5,le=O?.lateral??0,Re=O?.y??0;C.offset.y=J/230*30,R.offset.copy(C.offset),W.offset.y=J/230*30;for(let He of ne)He.g.position.z=((He.base+J+44)%88+88)%88-44;if(Xe.position.z=((-100+J+30)%240+240)%240-210,Xe.visible=Xe.position.z<-22,Qe.position.z=J,tt){let He=0,dt=K*2.6;for(let an=0;an<mt.length;an++){let Pn=mt[an],Ln=J-Pn.x;Pn.taken||Ln>8||Ln<-130||(qe.position.set(Pn.lane*2.6,Pn.y,-Pn.x),qe.rotation.set(0,dt,0),qe.scale.setScalar(1),qe.updateMatrix(),tt.setMatrixAt(He++,qe.matrix))}tt.count=He,tt.instanceMatrix.needsUpdate=!0}for(let{p:He,g:dt}of U)dt.position.set(He.lane*2.6,Math.sin(K*3)*.12,-He.x),dt.rotation.y=K*.7,dt.visible=!He.taken&&J-He.x<10&&J-He.x>-130;for(let{p:He,g:dt}of je)dt.visible=!He.taken&&Math.abs(He.x-J)<125,dt.position.y=He.y+.35+Math.sin(K*3)*.1;E&&(E.visible=J<-E.position.z+7);for(let He of Bt){let dt=O&&O.obs?O.obs[He.i].laneF:void 0;dt!==void 0&&(He.g.position.x=dt*2.6)}if(fe.visible=X&&!!O&&O.chaser>0,fe.visible){let He=O.chaser<4?.55:0;fe.position.set(le*.72+.85,Math.abs(Math.sin(K*9))*.22,2.45-He),fe.rotation.y=Math.sin(K*9)*.06}let Ye=X?Math.max(0,J-ht):q?B*13:0;ht=J,(X||q)&&(Oe+=Ye*1.2);let ut=Math.sin(Oe),pt=Re>.04,$e=O?.slide>0?1:0;me+=($e-me)*(1-Math.exp(-B*20));let Se=O?(O.lane*2.6-le)*-.12:0;pe+=(Se-pe)*(1-Math.exp(-B*14)),De.position.set(le,Re+(X||q?Math.sin(Oe*2)*.024+.025:0),0),De.rotation.set(-me*.85-(O?.trickRotation||0),Math.sin(Oe)*.025,pe),De.scale.set(1.16,1.16*(1-me*.38),1.16),it.body.rotation.x=-.1+(pt?-.06:0),it.body.rotation.y=ut*.075,it.head.rotation.y=-ut*.045,it.head.rotation.x=pt?-.05:Math.sin(Oe*2)*.02;for(let He of ct)if(He.kind==="leg"){let dt=Oe+(He.side>0?Math.PI:0);He.g.rotation.x=pt?-.45*He.side:Math.sin(dt)*.7,He.knee.rotation.x=pt?-.85:-Math.max(0,-Math.sin(dt))*1.15-.08,He.foot.rotation.x=pt?-.3:-Math.max(0,Math.sin(dt))*.26}else He.g.rotation.x=O?.zip?3:pt?-.65:-ut*He.side*.58,He.g.rotation.z=He.side*-.08,He.knee.rotation.x=(O?.zip?.12:.88)+Math.max(0,-ut*He.side)*.3;oe&&(oe.rotation.z=Math.sin(Oe*.55)*.19,oe.rotation.x=.65+Math.sin(Oe)*.07),de.visible=!!O?.shield,De.visible=!(O?.invincible>0&&Math.floor(K*14)%2),G.visible=!!O&&O.vehicle==="board",G.position.set(le,Re+.02,0),G.rotation.z=pe,he.visible=!!O&&O.vehicle==="pogo",he.position.set(le,Re-.35,0),se.visible=!!O?.zip,se.position.set(le,4.75,.05),at.position.x=le,at.position.y=(O?.ground||0)+.035,at.scale.setScalar(Math.max(.5,1-Re*.13)),at.material.opacity=Math.max(.2,1-Re*.2),ge+=(le*.88-ge)*(1-Math.exp(-B*18));let _t=Math.min(2,Re*.6);s.position.set(ge,(ue>ke?4:3.4)+_t,ue>ke?7.4:6.3),s.lookAt(ge*.85,.85+_t,ue>ke?-16:-18),t.render(n,s),Ke.calls=t.info.render.calls,Ke.triangles=t.info.render.triangles,Ke.frames++}return Ht(),addEventListener("resize",Ht),{renderer:t,scene:n,camera:s,makeHero:Le,populate:ie,clearObjects:P,resize:Ht,render:Qn,sampleFrame:Tt,stats:Ke}}function Kd(i){let t=null,n=null,s=null,r=i!==!1;function a(){if(!r)return!1;try{if(!t){let u=window.AudioContext||window.webkitAudioContext;if(!u)return!1;t=new u,n=t.createGain(),n.gain.value=.8;let d=t.createDynamicsCompressor();n.connect(d),d.connect(t.destination),s=t.createBuffer(1,t.sampleRate,t.sampleRate);let f=s.getChannelData(0);for(let _=0;_<f.length;_++)f[_]=Math.random()*2-1}return t.state!=="running"&&t.resume(),!0}catch{return!1}}function o(u,d,f,_,b,g=0){let p=t.currentTime+g,y=t.createOscillator(),x=t.createGain();y.type=_,y.frequency.setValueAtTime(u,p),d!==u&&y.frequency.exponentialRampToValueAtTime(d,p+f),x.gain.setValueAtTime(1e-4,p),x.gain.exponentialRampToValueAtTime(b*2.6,p+.012),x.gain.exponentialRampToValueAtTime(1e-4,p+f),y.connect(x),x.connect(n),y.start(p),y.stop(p+f+.03)}function l(u,d,f,_,b="bandpass",g=0,p=1){let y=t.currentTime+g,x=t.createBufferSource(),v=t.createBiquadFilter(),w=t.createGain();x.buffer=s,v.type=b,v.Q.value=p,v.frequency.setValueAtTime(d,y),v.frequency.exponentialRampToValueAtTime(f,y+u),w.gain.setValueAtTime(1e-4,y),w.gain.exponentialRampToValueAtTime(_*2.6,y+Math.min(.04,u/3)),w.gain.exponentialRampToValueAtTime(1e-4,y+u),x.connect(v),v.connect(w),w.connect(n),x.start(y),x.stop(y+u+.03)}let c=!1,h={step(){c=!c,o(c?200:170,110,.06,"triangle",.22),l(.05,1800,900,.14,"bandpass")},move(){l(.09,900,2200,.45,"bandpass",0,1)},jump(){o(300,720,.18,"square",.07),o(450,900,.16,"sine",.1)},slide(){l(.28,2400,500,.22,"bandpass",0,1.5)},coin(){o(988,988,.09,"square",.06),o(1480,1480,.22,"square",.06,.07),o(1480,1480,.22,"sine",.1,.07)},power(){[523,659,784,1047].forEach((u,d)=>{o(u,u,.16,"triangle",.14,d*.07)})},break(){l(.35,3e3,300,.4,"lowpass"),o(500,120,.3,"sawtooth",.1)},warn(){o(880,880,.11,"square",.07),o(880,880,.11,"square",.07,.17),o(1100,1100,.14,"square",.08,.34)},launch(){l(.8,300,2200,.35,"bandpass",0,.8),o(140,300,.7,"sawtooth",.07)},dodge(){l(.35,2600,500,.28,"bandpass",0,1.2),o(700,350,.3,"sine",.07)},boom(){l(.7,2200,60,.8,"lowpass",0,.7),o(160,35,.6,"sawtooth",.2),o(90,30,.7,"sine",.35)},dead(){o(330,110,.5,"sawtooth",.12,.05),o(247,82,.6,"triangle",.14,.2)},won(){[523,659,784,1047,1319].forEach((u,d)=>{o(u,u,.28,"triangle",.16,d*.1),o(u*2,u*2,.2,"sine",.05,d*.1)})},combo(){o(660,660,.08,"square",.09),o(880,880,.08,"square",.09,.07),o(1320,1320,.12,"sine",.1,.14)},stumble(){l(.3,400,120,.5,"lowpass"),o(220,90,.35,"sawtooth",.16),o(150,70,.4,"triangle",.12,.1)},revive(){[392,523,659,784,1047].forEach((u,d)=>{o(u,u,.2,"triangle",.14,d*.08)})},ramp(){l(.4,500,2600,.3,"bandpass",0,1.2),o(280,760,.35,"sine",.1)},fly(){l(.6,400,1800,.25,"bandpass",0,.8),o(520,1040,.5,"sine",.09)},click(){o(600,500,.06,"square",.2)}};return{get enabled(){return r},setEnabled(u){r=!!u,!r&&t&&t.state==="running"?t.suspend():r&&a()},unlock(){a()},suspend(){try{t&&t.state==="running"&&t.suspend()}catch{}},play(u){if(!(!h[u]||!a()))try{h[u]()}catch{}}}}function jd(i){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Yn(e),r=(g,p=1,y=!1)=>new Fi(new bi({map:s,color:g,transparent:!0,opacity:p,blending:y?sa:Xi,depthWrite:!1,fog:!1})),a=new Ot;i.add(a);let o=[];for(let g=0;g<4;g++){let p=new Ot,y=r("#e5330a",.75),x=r("#ff8a1a",1),v=r("#ffe27a",1),w=[];y.scale.setScalar(3.4),x.scale.setScalar(2),v.scale.setScalar(.9),p.add(y,x,v);for(let T=0;T<5;T++){let m=r(T<2?"#ff7a12":"#d12a08",.7-T*.1);m.scale.setScalar(1.5-T*.2),m.position.z=-0,p.add(m),w.push(m)}p.visible=!1,a.add(p),o.push({gp:p,halo:y,core:x,hot:v,trail:w})}let l=new An({color:"#ff2a1f",side:Bn,depthTest:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),c=[];for(let g=0;g<3;g++){let p=new Dt(new On(2.2,46),l.clone());p.rotation.x=-Math.PI/2,p.position.set(0,.16,-24),p.renderOrder=5,p.visible=!1,a.add(p);let y=document.createElement("canvas");y.width=y.height=64;let x=y.getContext("2d");x.fillStyle="#ffdf3b",x.beginPath(),x.moveTo(32,5),x.lineTo(60,56),x.lineTo(4,56),x.closePath(),x.fill(),x.fillStyle="#b3200f",x.font="bold 40px Arial",x.textAlign="center",x.fillText("!",32,52);let v=new Fi(new bi({map:new Yn(y),transparent:!0,depthWrite:!1,fog:!1}));v.scale.setScalar(1.3),v.position.set(0,2,-9),v.visible=!1,a.add(v),c.push({m:p,sp:v})}let h=[];for(let g=0;g<48;g++){let p=r("#ffffff",0);p.visible=!1,a.add(p),h.push({s:p,vx:0,vy:0,vz:0,life:0,max:1,size:.3})}let u=0;function d(g,p,y,x){let v=g==="coin"?8:g==="boom"?22:g==="jet"?2:10;for(let w=0;w<v;w++){let T=h[u++%h.length],m=Math.random()*6.283,M=g==="boom"?2+Math.random()*5:1+Math.random()*2.2;T.s.position.set(p,y,x),T.vx=Math.cos(m)*M,T.vy=(g==="boom"?1.5:.8)*Math.random()*M+.5,T.vz=Math.sin(m)*M*.6,T.life=T.max=g==="boom"?.7+Math.random()*.4:.45,T.size=g==="boom"?.9+Math.random()*.7:.28,T.s.material.color.set(g==="coin"?"#ffe066":g==="jet"?Math.random()<.5?"#ffb14d":"#ff7a2a":Math.random()<.5?"#ff8a1f":"#ffd34d"),T.s.visible=!0}}let f=0;function _(g,p,y,x){x&&(f+=g);let v=y?y.list:[],w=0,T=0;for(let m of v)if(m.phase==="warn"&&T<3){let M=c[T++],L=(p.t-m.t0)/.9,C=.34+.1*Math.sin(f*22);M.m.position.x=m.lane*2.6,M.m.material.opacity=C*Math.min(1,L*3+.2),M.m.visible=!0,M.sp.position.x=m.lane*2.6,M.sp.position.y=1.9+Math.sin(f*14)*.12,M.sp.visible=!0}else if(m.phase==="fly"&&w<4){let M=o[w++],L=-(m.x-p.x),C=1+.12*Math.sin(f*40+w);M.gp.visible=L<4&&L>-60,M.gp.position.set(m.lane*2.6,.8+Math.sin(f*9)*.08,L),M.halo.scale.setScalar(3.4*C),M.core.scale.setScalar(2*C),M.trail.forEach((R,F)=>{R.position.z=-(F+1)*.85,R.position.y=.1*F*Math.sin(f*25+F),R.scale.setScalar((1.5-F*.2)*C)})}for(let m=T;m<3;m++)c[m].m.visible=!1,c[m].sp.visible=!1;for(let m=w;m<4;m++)o[m].gp.visible=!1;for(let m of h){if(m.life<=0){m.s.visible=!1;continue}m.life-=g,m.s.position.x+=m.vx*g,m.s.position.y+=m.vy*g,m.s.position.z+=m.vz*g,m.vy-=3*g;let M=Math.max(0,m.life/m.max);m.s.material.opacity=M,m.s.scale.setScalar(m.size*(.6+M*.6))}}function b(){for(let g of o)g.gp.visible=!1;for(let g of c)g.m.visible=!1,g.sp.visible=!1;for(let g of h)g.life=0,g.s.visible=!1}return{update:_,burst:d,reset:b}}var Ci={warn:.9,launchDist:36,approach:16,hitX:.8,hitLane:.95,clearY:.9};function Qd(i,e=1){let t=i.n*7919+13+(i.seed|0)>>>0,n=()=>{t=t+1831565813>>>0;let l=t;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296},s=()=>(Math.max(3.4,7.2-i.n*.2)+n()*1.5)/Math.max(.2,e),r=i.n===1?9:5+n()*1.5,a=[],o={list:a,events:[],hits:0,dodges:0,spawned:0};return o.update=function(l,c){if(l.status!=="playing")return;let h=l.time,u=l.x+i.speed*(Ci.warn+Ci.launchDist/(i.speed+Ci.approach)),d=l.level.obs.some(_=>_.type!=="ramp"&&_.type!=="mover"&&_.lane===l.lane&&_.x>l.x-i.speed*.8-2&&_.x<u+i.speed*1.1+3),f=(i.routes||[]).some(_=>l.x>_.start-30&&l.x<_.end+20);h>=r&&(d||f)&&(r=h+.5),h>=r&&l.x<l.level.length-45&&(a.push({phase:"warn",t0:h,lane:l.lane,x:0}),o.spawned++,o.events.push({type:"fb-warn"}),r=h+s());for(let _=a.length-1;_>=0;_--){let b=a[_];if(b.phase==="warn"){h-b.t0>=Ci.warn&&(b.phase="fly",b.x=l.x+Ci.launchDist,o.events.push({type:"fb-launch"}));continue}b.x-=Ci.approach*c;let g=b.x-l.x;Math.abs(g)<Ci.hitX&&Math.abs(b.lane*2.6-l.lateral)<Ci.hitLane&&l.y<Ci.clearY&&l.invincible<=0?(a.splice(_,1),o.hits++,o.events.push({type:"fb-hit"}),l.hit?l.hit("fireball"):l.shield?(l.shield=0,l.invincible=1.4,l.hits++,l.events.push({type:"break"})):(l.status="dead",l.events.push({type:"dead"}))):g<-1.3&&(a.splice(_,1),o.dodges++,o.events.push({type:"fb-dodge"}))}},o.drain=()=>o.events.splice(0),o}var Dx=(i,e,t)=>Math.max(e,Math.min(t,i)),$i=(i,e,t,n=0)=>(i=Math.floor(Number(i)),Number.isFinite(i)?Dx(i,e,t):n);function Nl(i){return i=i>>>0,()=>{i=i+1831565813>>>0;let e=i;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function rr(i){let e=2166136261;for(let t of String(i))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}var Zi={magnet:{name:"\u05DE\u05D2\u05E0\u05D8 \u05D0\u05E8\u05D5\u05DA",desc:"\u05D4\u05DE\u05D2\u05E0\u05D8 \u05E0\u05E9\u05D0\u05E8 \u05E4\u05E2\u05D9\u05DC \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF",costs:[120,260,480],values:[8,10,12,15],unit:"\u05E9\u05E0\u05F3"},shield:{name:"\u05DE\u05D2\u05DF \u05DE\u05EA\u05D7\u05D9\u05DC",desc:"\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DB\u05DC \u05E8\u05D9\u05E6\u05D4 \u05E2\u05DD \u05DE\u05D2\u05DF",costs:[200,520],values:[0,1,2],unit:"\u05DE\u05D2\u05E0\u05D9\u05DD"},coin:{name:"\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DB\u05E4\u05D5\u05DC\u05D9\u05DD",desc:"\u05D1\u05D5\u05E0\u05D5\u05E1 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E1\u05D5\u05E3 \u05DB\u05DC \u05E8\u05D9\u05E6\u05D4",costs:[150,350,700],values:[0,.1,.2,.3],unit:"%"},shoes:{name:"\u05E0\u05E2\u05DC\u05D9 \u05E7\u05E4\u05D9\u05E6\u05D4",desc:"\u05E0\u05E2\u05DC\u05D9 \u05D4\u05E7\u05E4\u05D9\u05E6\u05D4 \u05E0\u05DE\u05E9\u05DB\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF",costs:[140,300,560],values:[6,8,10,12],unit:"\u05E9\u05E0\u05F3"},flight:{name:"\u05D8\u05D9\u05E1\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4",desc:"\u05E7\u05D8\u05E2 \u05D4\u05D8\u05D9\u05E1\u05D4 \u05E0\u05DE\u05E9\u05DA \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF",costs:[160,340,620],values:[4,5,6,7],unit:"\u05E9\u05E0\u05F3"},revive:{name:"\u05D4\u05D7\u05D9\u05D9\u05D0\u05D4 \u05D6\u05D5\u05DC\u05D4",desc:"\u05D4\u05D7\u05D9\u05D9\u05D0\u05D4 \u05D0\u05D7\u05E8\u05D9 \u05E0\u05E4\u05D9\u05DC\u05D4 \u05E2\u05D5\u05DC\u05D4 \u05E4\u05D7\u05D5\u05EA",costs:[180,420],values:[60,40,25],unit:"\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA"}},yh=Object.keys(Zi),ar=(i,e)=>$i(i.upgrades?.[e],0,Zi[e].values.length-1),sr=(i,e)=>Zi[e].values[ar(i,e)],Mh=(i,e)=>{let t=ar(i,e);return t>=Zi[e].costs.length?null:Zi[e].costs[t]};function Ul(i){return{magnetSeconds:sr(i,"magnet"),startShields:sr(i,"shield"),coinBonus:sr(i,"coin"),shoesSeconds:sr(i,"shoes"),flightSeconds:sr(i,"flight"),reviveCost:sr(i,"revive")}}function tf(i,e){let t=i.prog;if(!Zi[e])return{ok:!1,reason:"unknown"};let n=Mh(t,e);return n===null?{ok:!1,reason:"max"}:i.coins>=n?(i.coins-=n,t.upgrades[e]=ar(t,e)+1,{ok:!0,cost:n,level:t.upgrades[e]}):{ok:!1,reason:"coins"}}var Sh=[{id:"coins_run",stat:"coins",scope:"run",text:i=>`\u05D0\u05E1\u05D5\u05E3 ${i} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA`,targets:[30,60,100],rewards:[25,50,90]},{id:"coins_total",stat:"coins",scope:"total",text:i=>`\u05D0\u05E1\u05D5\u05E3 ${i} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E1\u05DA \u05D4\u05DB\u05D5\u05DC`,targets:[150,400,900],rewards:[30,70,140]},{id:"dodge_fire",stat:"dodges",scope:"total",text:i=>`\u05D4\u05D7\u05DE\u05E5 ${i} \u05DB\u05D3\u05D5\u05E8\u05D9 \u05D0\u05E9`,targets:[5,12,25],rewards:[30,60,110]},{id:"jumps",stat:"jumps",scope:"total",text:i=>`\u05E7\u05E4\u05D5\u05E5 ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[25,60,120],rewards:[20,45,90]},{id:"slides",stat:"slides",scope:"total",text:i=>`\u05D4\u05D7\u05DC\u05E7 ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[15,40,80],rewards:[20,45,90]},{id:"powerups",stat:"powerups",scope:"total",text:i=>`\u05D0\u05E1\u05D5\u05E3 ${i} \u05DB\u05D5\u05D7\u05D5\u05EA`,targets:[3,8,16],rewards:[25,55,100]},{id:"combo",stat:"combo",scope:"run",text:i=>`\u05E8\u05E6\u05E3 \u05E0\u05E7\u05D9 \u05E9\u05DC ${i} \u05D4\u05EA\u05D7\u05DE\u05E7\u05D5\u05D9\u05D5\u05EA \u05D0\u05D5 \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD`,targets:[3,5,8],rewards:[30,60,110]},{id:"wins",stat:"wins",scope:"total",text:i=>`\u05E1\u05D9\u05D9\u05DD ${i} \u05E9\u05DC\u05D1\u05D9\u05DD`,targets:[2,5,10],rewards:[40,90,160]},{id:"distance",stat:"distance",scope:"run",text:i=>`\u05E8\u05D5\u05E5 ${i} \u05DE\u05D8\u05E8\u05D9\u05DD \u05D1\u05E8\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA`,targets:[200,350,500],rewards:[25,55,100]},{id:"moving",stat:"moving",scope:"total",text:i=>`\u05D4\u05EA\u05D7\u05DE\u05E7 \u05DE-${i} \u05DE\u05DB\u05E9\u05D5\u05DC\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD`,targets:[4,10,20],rewards:[30,60,110]},{id:"flight",stat:"flights",scope:"total",text:i=>`\u05D8\u05D5\u05E1 ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[1,3,6],rewards:[30,70,120]},{id:"revive",stat:"revives",scope:"total",text:i=>`\u05D4\u05D7\u05D9\u05D9\u05D4 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA ${i} \u05E4\u05E2\u05DE\u05D9\u05DD`,targets:[1,2,4],rewards:[30,60,100]}],bh=[...new Set(Sh.map(i=>i.stat))],wh=i=>Sh.find(e=>e.id===i),vh=3;function nf(i,e){let t=Nl(rr("m"+i.seq++)),n=Sh.filter(a=>!e.includes(a.id)),s=n[Math.floor(t()*n.length)],r=Math.floor(t()*(1+Math.min(2,Math.floor(i.completed/4))));return{id:s.id,tier:r,progress:0}}var Nx=i=>{let e=wh(i.id);return{id:i.id,text:e.text(e.targets[i.tier]),target:e.targets[i.tier],reward:e.rewards[i.tier],progress:Math.min(i.progress,e.targets[i.tier]),scope:e.scope}},sf=i=>i.missions.map(Nx),ef=[{id:"rush",name:"\u05E8\u05D9\u05E6\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4",desc:"\u05D4\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1-12%",speedMul:1.12},{id:"rich",name:"\u05D2\u05E9\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA",desc:"\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05DD \u05DB\u05E4\u05D5\u05DC \u05D1\u05E8\u05D9\u05E6\u05D4 \u05D4\u05D9\u05D5\u05DE\u05D9\u05EA",coinMul:2},{id:"fiery",name:"\u05D9\u05D5\u05DD \u05D7\u05DD",desc:"\u05D9\u05D5\u05EA\u05E8 \u05DB\u05D3\u05D5\u05E8\u05D9 \u05D0\u05E9",fireMul:1.5},{id:"bare",name:"\u05D1\u05DC\u05D9 \u05DE\u05D2\u05DF",desc:"\u05DC\u05D0 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05E2\u05DD \u05DE\u05D2\u05DF",noStartShield:!0},{id:"long",name:"\u05DE\u05E8\u05EA\u05D5\u05DF",desc:"\u05DE\u05E1\u05DC\u05D5\u05DC \u05D0\u05E8\u05D5\u05DA \u05D1-20%",lengthMul:1.2}];function Th(i){let e=Nl(rr("daily"+i)),t=ef[Math.floor(e()*ef.length)],n=3+Math.floor(e()*15),s=[.3,.4,.5][Math.floor(e()*3)];return{key:i,seed:rr("seed"+i),level:n,mod:t,goalRatio:s,reward:80}}var Ux="Asia/Jerusalem";function Mn(i=new Date,e=Ux){return new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).format(i)}var rf=i=>{let[e,t,n]=i.split("-").map(Number);return new Date(Date.UTC(e,t-1,n-1)).toISOString().slice(0,10)},af=(i,e)=>({done:i.daily.lastDone===e,streak:i.daily.lastDone===e||i.daily.lastDone===rf(e)?i.daily.streak:0,best:i.daily.bestKey===e?i.daily.best:0});function Fl(i){let e=i&&typeof i=="object"?i:{},t={v:1,seq:$i(e.seq,0,1e9),completed:$i(e.completed,0,1e6),upgrades:{},missions:[],daily:{lastDone:typeof e.daily?.lastDone=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(e.daily.lastDone)?e.daily.lastDone:"",streak:$i(e.daily?.streak,0,1e4),best:$i(e.daily?.best,0,1e6),bestKey:typeof e.daily?.bestKey=="string"?e.daily.bestKey.slice(0,10):""},lifetime:{}};for(let n of yh)t.upgrades[n]=ar({upgrades:e.upgrades},n);for(let n of Array.isArray(e.missions)?e.missions:[])n&&wh(n.id)&&t.missions.length<vh&&!t.missions.some(r=>r.id===n.id)&&t.missions.push({id:n.id,tier:$i(n.tier,0,2),progress:$i(n.progress,0,1e7)});for(;t.missions.length<vh;)t.missions.push(nf(t,t.missions.map(n=>n.id)));for(let n of bh)t.lifetime[n]=$i(e.lifetime?.[n],0,1e9);return t}var Fx={coin:"coins",jump:"jumps",slide:"slides",magnet:"powerups",shield:"powerups","fb-dodge":"dodges"};function of(){let i={};for(let t of bh)i[t]=0;let e={stats:i,add(t,n=1){t in i&&(i[t]+=n)},max(t,n){t in i&&n>i[t]&&(i[t]=n)},event(t){let n=Fx[t&&t.type];n&&i[n]++},events(t){for(let n of t||[])e.event(n)}};return e}function lf(i,e,t={}){let n={...e};t.won&&(n.wins=(n.wins||0)+1),n.distance=Math.max(n.distance||0,Math.floor(t.distance||0));let s=[],r=0;for(let u=0;u<i.missions.length;u++){let d=i.missions[u],f=wh(d.id),_=f.targets[d.tier],b=n[f.stat]||0;f.scope==="run"?d.progress=Math.max(d.progress,b):d.progress+=b,d.progress>=_&&(s.push({id:d.id,text:f.text(_),reward:f.rewards[d.tier]}),r+=f.rewards[d.tier],i.completed++,i.missions[u]=null)}let a=i.missions.filter(Boolean),o=a.map(u=>u.id);for(i.missions=a;i.missions.length<vh;){let u=nf(i,o);o.push(u.id),i.missions.push(u)}for(let u of bh)i.lifetime[u]=Math.min(1e9,(i.lifetime[u]||0)+(u==="combo"||u==="distance"?0:n[u]||0));let l=Math.floor((n.coins||0)*Ul(i).coinBonus),c=0,h=!1;if(t.daily&&t.dateKey){let u=Th(t.dateKey),d=n.coins||0;(i.daily.bestKey!==t.dateKey||d>i.daily.best)&&(i.daily.best=d,i.daily.bestKey=t.dateKey),t.won&&i.daily.lastDone!==t.dateKey&&d>=(t.goalCoins??0)&&(i.daily.streak=i.daily.lastDone===rf(t.dateKey)?i.daily.streak+1:1,i.daily.lastDone=t.dateKey,c=u.reward+Math.min(i.daily.streak-1,6)*10,h=!0)}return{missions:s,missionCoins:r,coinBonus:l,dailyCoins:c,dailyDone:h,coins:r+l+c}}var Ol=(i,e)=>Math.ceil(e*i.goalRatio);var Bx=1,Ah=75,cf=Object.freeze(["CITY","ROOF","JUMP","DASH","GLOW","STAR","ZOOM"]),xa=Object.freeze([{target:5,coins:40},{target:15,coins:90},{target:30,coins:180}].map(Object.freeze)),va=xa.at(-1).target,ya=(i,e=1e6)=>{let t=Math.floor(Number(i));return Number.isFinite(t)?Math.max(0,Math.min(e,t)):0},Eh=i=>typeof i=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(i)&&Number.isFinite(Date.parse(i+"T12:00:00Z"))&&new Date(i+"T12:00:00Z").toISOString().slice(0,10)===i,Ma=i=>Eh(i)?i:Mn(),zx=i=>typeof i=="string"&&/^\d{4}-(0[1-9]|1[0-2])$/.test(i),uf=i=>Math.max(1,Math.min(20,ya(i,20)||1)),Ch=i=>cf[rr("word:"+i)%cf.length],df=i=>({key:i,found:[],claimed:!1}),ff=i=>({key:i.slice(0,7),count:0,claimed:[]}),hf=i=>({distance:ya(i?.distance),won:i?.won===!0});function Bl(i){let e=i&&typeof i=="object"?i:{},t=Eh(e.word?.key)?e.word.key:"",n=zx(e.event?.key)?e.event.key:"",s=[...new Set((Array.isArray(e.word?.found)?e.word.found:[]).filter(c=>Number.isInteger(c)&&c>=0&&c<4))].sort(),r=ya(e.event?.count,va),a=[...new Set((Array.isArray(e.event?.claimed)?e.event.claimed:[]).filter(c=>xa.some(h=>h.target===c&&r>=c)))].sort((c,h)=>c-h),o={v:Bx,word:{key:t,found:t?s:[],claimed:!!t&&s.length===4&&e.word?.claimed===!0},event:{key:n,count:n?r:0,claimed:n?a:[]},best:{normal:{},daily:{}}};for(let c=1;c<=20;c++)e.best?.normal?.[c]&&(o.best.normal[c]=hf(e.best.normal[c]));let l=Object.entries(e.best?.daily&&typeof e.best.daily=="object"?e.best.daily:{}).filter(([c])=>/^\d{4}-\d{2}-\d{2}:\d{1,2}$/.test(c)&&Eh(c.slice(0,10))&&Number(c.slice(11))>=1&&Number(c.slice(11))<=20).sort(([c],[h])=>h.localeCompare(c)).slice(0,32);for(let[c,h]of l)o.best.daily[c]=hf(h);return o}function Rh(i,e=Mn()){e=Ma(e);let t=Bl(i),n=t.word.key===e?t.word:df(e),s=t.event.key===e.slice(0,7)?t.event:ff(e),r=Ch(e),a=[...r].map((o,l)=>({id:"letter:"+l,char:o,index:l,found:n.found.includes(l)}));return{word:{key:e,text:r,letters:a,found:n.found.length,total:4,done:n.claimed,reward:Ah},event:{id:s.key,key:s.key,name:"\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E2\u05D9\u05E8",symbol:"\u2726",count:s.count,target:va,done:s.count>=va,milestones:xa.map(o=>({...o,claimed:s.claimed.includes(o.target)})),next:xa.find(o=>!s.claimed.includes(o.target))||null},best:t.best}}function pf(i,e=Mn()){if(e=Ma(e),!i||!Number.isFinite(i.length)||i.length<80)return[];let t=Nl(rr("collect:"+e+":"+i.n+":"+(i.seed||0))),n=[],s=["letter","event","letter","event","letter","event","letter"],r=0,a=0,o=(l,c)=>!(i.routes||[]).some(h=>h.lane===c&&l>=h.start-5&&l<=h.end+5)&&!(i.obs||[]).some(h=>{let u=h.type==="tunnel"?Math.max(3.6,(h.w||7)/2):Math.max(1.6,(h.w||2)/2);return Math.abs(h.x-l)>u+5?!1:h.type==="mover"?c>=Math.min(h.mover?.a??h.lane,h.mover?.b??h.lane)&&c<=Math.max(h.mover?.a??h.lane,h.mover?.b??h.lane):c===h.lane});for(let l=0;l<s.length;l++){let c=24+(i.length-55)*l/7,h=Math.floor(t()*3),u=null;for(let _=0;_<=24&&!u;_+=2)for(let b of _===0?[1]:[1,-1]){let g=Math.round(c+_*b);if(!(g<18||g>i.length-18||n.some(p=>Math.abs(p.x-g)<13))){for(let p=0;p<3;p++){let y=(h+p)%3-1;if(o(g,y)){u={x:g,lane:y,y:.85};break}}if(u)break}}if(!u)continue;let d=s[l],f=d==="letter"?r++:a++;n.push({...u,id:d+":"+f,kind:d,index:f,value:d==="letter"?Ch(e)[f]:"\u2726",dateKey:e,eventKey:e.slice(0,7),taken:!1})}return n.sort((l,c)=>l.x-c.x)}var kx=()=>({coins:0,message:"",wordDone:!1,eventRewards:[]});function mf(i,e,t=Mn(),n={}){t=Ma(t);let s=kx();if(n.zen||!i||!e||e.taken||e.dateKey!==t||!["letter","event"].includes(e.kind)||i.word?.key>t||i.event?.key>t.slice(0,7))return s;if(e.kind==="letter"){let r=e.index??Number(String(e.id).split(":")[1]);if(!Number.isInteger(r)||r<0||r>=4||e.value!==Ch(t)[r]||(i.word?.key!==t&&(i.word=df(t)),e.taken=!0,i.word.found.includes(r)||i.word.claimed))return s;i.word.found.push(r),i.word.found.sort(),s.message="\u05D0\u05D5\u05EA \u05E0\u05D0\u05E1\u05E4\u05D4 \xB7 "+i.word.found.length+"/4",i.word.found.length===4&&(i.word.claimed=!0,s.coins=Ah,s.wordDone=!0,s.message="\u05D4\u05DE\u05D9\u05DC\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4! +"+Ah+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA")}else{if(e.eventKey!==t.slice(0,7)||(i.event?.key!==t.slice(0,7)&&(i.event=ff(t)),e.taken=!0,i.event.count>=va))return s;i.event.count++,s.message="\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E2\u05D9\u05E8 \xB7 "+i.event.count+"/"+va;for(let r of xa)i.event.count>=r.target&&!i.event.claimed.includes(r.target)&&(i.event.claimed.push(r.target),s.coins+=r.coins,s.eventRewards.push({...r}));s.coins&&(s.message="\u05D0\u05D5\u05E8\u05D5\u05EA \u05D4\u05E2\u05D9\u05E8! +"+s.coins+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA")}return s}function Ih(i,{level:e=1,daily:t=!1,dateKey:n=Mn(),zen:s=!1}={}){if(s)return 0;let r=i?.best,a=uf(e),o=Ma(n);return ya((t?r?.daily?.[o+":"+a]:r?.normal?.[a])?.distance)}function gf(i,{level:e=1,daily:t=!1,distance:n=0,won:s=!1,dateKey:r=Mn(),zen:a=!1}={}){if(a||!i)return{newBest:!1,previous:0,distance:0};let o={level:e,daily:t,dateKey:r},l=Ih(i,o),c=ya(n),h=uf(e),u=Ma(r);if(c<=l)return{newBest:!1,previous:l,distance:l};i.best||(i.best={normal:{},daily:{}});let d=t?i.best.daily??={}:i.best.normal??={};if(d[t?u+":"+h:h]={distance:c,won:s===!0},t){let f=Object.keys(d).sort().reverse();for(let _ of f.slice(32))delete d[_]}return{newBest:!0,previous:l,distance:c}}var ci=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ui=i=>(i=Number(i),Number.isFinite(i)?Math.max(0,Math.floor(i)):0),hi=i=>ui(i).toLocaleString("he-IL"),Ph=i=>`<span class="coinicon">\u25C6</span> ${hi(i)}`;function _f(i=[]){return`<p class="eyebrow">\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA</p><h2>\u05D4\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05DC\u05DA</h2><div class="missions">${i.map(t=>{let n=Math.max(1,ui(t.target)),s=Math.min(n,ui(t.progress)),r=Math.round(s/n*100);return`<div class="mcard${s>=n?" mdone":""}"><b>${ci(t.text)}</b><div class="mbar" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${s}"><div class="mfill" style="width:${r}%"></div></div><div class="smallrow"><small>${hi(s)} / ${hi(n)}</small><span class="mreward">${Ph(t.reward)}</span></div></div>`}).join("")||'<p class="muted">\u05D0\u05D9\u05DF \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DB\u05E8\u05D2\u05E2.</p>'}</div><p class="note">\u05DE\u05E9\u05D9\u05DE\u05D4 \u05E9\u05D4\u05D5\u05E9\u05DC\u05DE\u05D4 \u05DE\u05D5\u05D7\u05DC\u05E4\u05EA \u05D1\u05D0\u05D7\u05E8\u05EA, \u05D5\u05D4\u05E4\u05E8\u05E1 \u05E0\u05DB\u05E0\u05E1 \u05DC\u05E7\u05D5\u05E4\u05D4 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E8\u05D9\u05E6\u05D4.</p>`}function xf(i=[],e=0){let t=i.map(n=>{let s=Math.max(1,ui(n.max)),r=Math.min(s,ui(n.level)),a=n.cost===null||n.cost===void 0||r>=s,o=Array.from({length:s},(h,u)=>`<i class="pip${u<r?" on":""}"></i>`).join(""),l=n.nextValue!==void 0&&!a?` \xB7 \u05D4\u05D1\u05D0: ${ci(n.nextValue)} ${ci(n.unit||"")}`:"",c=a||!n.affordable?" disabled":"";return`<div class="shopitem"><div class="info"><b>${ci(n.name)}</b><small>${ci(n.desc)}${l}</small><div class="pips" aria-label="\u05E8\u05DE\u05D4 ${r} \u05DE\u05EA\u05D5\u05DA ${s}">${o}</div></div><button class="buy" data-upgrade="${ci(n.id)}"${c}>${a?"\u05DE\u05DC\u05D0":"\u25C6 "+hi(n.cost)}</button></div>`}).join("");return`<button class="quiet" id="back" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD</p><h2>\u05D7\u05D9\u05D6\u05D5\u05E7 \u05D4\u05DB\u05D5\u05D7\u05D5\u05EA</h2><span class="wallet">${Ph(e)} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</span><div class="shoplist">${t}</div><p class="note">\u05D0\u05D9\u05DF \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D1\u05DB\u05E1\u05E3 \u05D0\u05DE\u05D9\u05EA\u05D9. \u05D4\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8.</p>`}function vf({modName:i="",done:e=!1,streak:t=0}={}){let n=ui(t)>1?` \xB7 \u{1F525} ${ui(t)}`:"";return`<button class="secondary dailychip" id="daily"><b>\u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D9\u05D5\u05DE\u05D9</b><small>${e?"\u05D4\u05D5\u05E9\u05DC\u05DD \u05D4\u05D9\u05D5\u05DD \u2713":ci(i)}${n}</small></button>`}function yf({info:i={},goalCoins:e=0,reward:t=0,status:n={}}={}){let s=i.mod||{},r=!!n.done;return`<button class="quiet" id="back" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E1\u05DC\u05D5\u05DC \u05DC\u05DB\u05D5\u05DC\u05DD, \u05D4\u05D9\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3</p><h2>\u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D9\u05D5\u05DE\u05D9</h2><p class="subtitle">\u05E9\u05DC\u05D1 ${ui(i.level)} \xB7 ${ci(s.name)}</p><p class="muted">${ci(s.desc)}</p><div class="stats"><div><b>${hi(e)}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DC\u05E1\u05D9\u05D5\u05DD</small></div><div><b>+${hi(t)}</b><small>\u05E4\u05E8\u05E1 (\u05E4\u05E2\u05DD \u05D1\u05D9\u05D5\u05DD)</small></div></div><div class="stats"><div><b>${ui(n.streak)}</b><small>\u05D9\u05DE\u05D9\u05DD \u05D1\u05E8\u05E6\u05E3</small></div><div><b>${hi(n.best)}</b><small>\u05D4\u05E9\u05D9\u05D0 \u05E9\u05DC \u05D4\u05D9\u05D5\u05DD</small></div></div>${r?'<p class="note">\u05DB\u05D1\u05E8 \u05E7\u05D9\u05D1\u05DC\u05EA \u05D0\u05EA \u05D4\u05E4\u05E8\u05E1 \u05D4\u05D9\u05D5\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05D7\u05E7 \u05E9\u05D5\u05D1 \u05DC\u05DB\u05D9\u05E3, \u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1 \u05E0\u05D5\u05E1\u05E3. \u05DE\u05D7\u05E8 \u05D9\u05D7\u05DB\u05D4 \u05D0\u05EA\u05D2\u05E8 \u05D7\u05D3\u05E9.</p>':""}<button class="primary" id="dailyplay">${r?"\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E9\u05D5\u05D1":"\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DC\u05D0\u05EA\u05D2\u05E8"}</button><p class="note">\u05D4\u05D0\u05EA\u05D2\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D7\u05E6\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC.</p>`}function Mf({missions:i=[],coinBonus:e=0,dailyCoins:t=0,dailyDone:n=!1}={}){let s=[];for(let r of i)s.push(`<div class="resline">\u2713 ${ci(r.text)} <span class="mreward">+${hi(r.reward)}</span></div>`);return ui(e)&&s.push(`<div class="resline">\u05D1\u05D5\u05E0\u05D5\u05E1 \u05E9\u05D3\u05E8\u05D5\u05D2 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA <span class="mreward">+${hi(e)}</span></div>`),n&&s.push(`<div class="resline">\u{1F525} \u05D4\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D9\u05D5\u05DE\u05D9 \u05D4\u05D5\u05E9\u05DC\u05DD <span class="mreward">+${hi(t)}</span></div>`),s.length?`<div class="res">${s.join("")}</div>`:""}function Sf(i){return`<div class="reviveoffer"><p class="eyebrow">\u05E2\u05D5\u05D3 \u05D4\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA \u05D0\u05D7\u05EA</p><h2>\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DE\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E7\u05D5\u05DD?</h2><p class="subtitle">${Ph(i)} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \xB7 \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4</p><button class="primary" id="revive">\u05DE\u05D7\u05D9\u05D9\u05DD</button><button class="secondary" id="norevive">\u05DC\u05D0, \u05EA\u05D5\u05D3\u05D4</button></div>`}var{Run:Hx,level:wf,CHARS:ba}=window.RunnerEngine,St=i=>document.getElementById(i),ji=St("scene"),lr=St("panel"),Yl=St("overlay");function Tf(i){let e=ba.find(s=>s.id===i),t=e.color,n=i!=="courier";return`<svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true"><rect x="1" y="1" width="46" height="46" rx="16" fill="${t}" opacity=".18"/>${n?i==="bunny"?`<ellipse cx="17" cy="12" rx="5" ry="10" fill="${t}"/><ellipse cx="31" cy="12" rx="5" ry="10" fill="${t}"/>`:`<path d="M9 24L8 6L23 18L40 6L39 25Z" fill="${i==="panda"?"#44505b":t}"/>`:""}<ellipse cx="24" cy="27" rx="17" ry="15" fill="${n?t:"#f0bd93"}"/>${n?"":'<path d="M7 24C4 4 38 5 41 22L28 17L10 24" fill="#624437"/>'}<ellipse cx="24" cy="32" rx="10" ry="7" fill="#fff1dc"/><circle cx="18" cy="26" r="2" fill="#384554"/><circle cx="30" cy="26" r="2" fill="#384554"/><path d="M21 31Q24 35 27 31" fill="#384554"/></svg>`}var Wx=location.search.includes("autopause=0"),Af="rulan-runner-v1";var Ne={coins:0,unlocked:1,character:"courier",owned:["courier","fox"],best:{},soundOn:!0,soundNotice:!1,prog:Fl(null),collections:Bl(null)},kl=!0;try{let i=JSON.parse(localStorage.getItem(Af)||"null");if(i){Ne.coins=Math.max(0,Math.min(1e8,Number(i.coins)||0)),Ne.unlocked=Math.max(1,Math.min(20,Math.floor(Number(i.unlocked)||1))),Ne.owned=ba.filter(e=>e.cost===0||Array.isArray(i.owned)&&i.owned.includes(e.id)).map(e=>e.id),Ne.character=Ne.owned.includes(i.character)?i.character:"courier",Ne.soundOn=i.soundOn!==!1,i.soundOn===void 0&&i.sound===!1&&(Ne.soundNotice=!0);for(let e=1;e<=20;e++){let t=i.best?.[e];t&&Number.isFinite(t.stars)&&Number.isFinite(t.coins)&&(Ne.best[e]={stars:Math.min(3,Math.max(0,t.stars)),coins:Math.max(0,t.coins)})}Ne.prog=Fl(i.prog),Ne.collections=Bl(i.collections)}}catch{kl=!1,Ne.prog=Fl(null)}function gs(){try{localStorage.setItem(Af,JSON.stringify(Ne)),kl=!0}catch{kl=!1}}var ps=Jd(ji,Ne.character),{renderer:Gl,scene:Vl,camera:_S,makeHero:Xx,populate:Ef,clearObjects:qx}=ps,j=null,Pt="menu",sn=1,Lh=!1;var wa=0,ms=0;var pn=null,jt=null,rn=!1,Sa="",Hl=[],Wl=0,or=Ul(Ne.prog);function Ut(i){St("toast").textContent=i,St("toast").classList.add("show"),clearTimeout(Ut.timer),Ut.timer=setTimeout(()=>St("toast").classList.remove("show"),2400)}var cr=Kd(Ne.soundOn),Kt=i=>cr.play(i),Ta=null,Dh=0,Ji=jd(Vl),bf=document.getElementById("flash");function Cf(i){Ne.soundOn=i,cr.setEnabled(i),gs();let e=St("mute");e&&(e.textContent=i?"\u{1F50A}":"\u{1F507}"),i&&cr.play("click")}function Rn(i){Yl.hidden=!1,lr.innerHTML=i,lr.scrollTop=0}var zh=()=>`<span class="wallet"><span class="coinicon">\u25C6</span> ${Ne.coins.toLocaleString("he-IL")} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</span>`;function Ct(i,e){St(i)?.addEventListener("click",e)}function In(){Ta=null,Ji.reset(),Vl.fog.color.setHex(12182757),Gl.setClearColor(12182757),Pt="menu",j=null,St("hud").hidden=St("controls").hidden=!0,qx(),Ef(wf(1)),Rn(`<p class="eyebrow">CITY RUNNER</p><h1>\u05E8\u05D0<span>\u05E0\u05E8</span></h1><p class="subtitle">\u05D4\u05E2\u05D9\u05E8 \u05D4\u05D9\u05D0 \u05DE\u05D2\u05E8\u05E9 \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E9\u05DC\u05DA.<br>\u05E8\u05E6\u05D9\u05DD, \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05D5\u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05DC\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4 \u05D4\u05D1\u05D0\u05D4.</p><div class="previewchip">${Tf(Ne.character)} ${ba.find(i=>i.id===Ne.character).name}</div><br>${zh()}<button class="primary" id="play">\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DC\u05E8\u05D9\u05E6\u05D4 \xB7 \u05E9\u05DC\u05D1 ${Ne.unlocked}</button><div class="twocol"><button class="secondary" id="levels">\u05D1\u05D7\u05D9\u05E8\u05EA \u05E9\u05DC\u05D1</button><button class="secondary" id="characters">\u05D4\u05D3\u05DE\u05D5\u05D9\u05D5\u05EA \u05E9\u05DC\u05D9</button></div>${vf({modName:zl().info.mod.name,done:zl().status.done,streak:zl().status.streak})}<div class="twocol"><button class="secondary" id="missions">\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA</button><button class="secondary" id="upgrades">\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD</button></div><div class="twocol"><button class="secondary" id="zen">\u2601 \u05E8\u05D9\u05E6\u05EA \u05D6\u05DF</button><button class="secondary" id="collections">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D5\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05E2\u05D9\u05E8</button></div><div class="smallrow"><a href="../">\u2302 \u05DB\u05DC \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD</a><button class="quiet" id="help">\u05D0\u05D9\u05DA \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD?</button><button class="quiet" id="sound">\u05E6\u05DC\u05D9\u05DC ${Ne.soundOn?"\u05E4\u05D5\u05E2\u05DC":"\u05DB\u05D1\u05D5\u05D9"}</button></div>${kl?"":'<p class="note">\u05D4\u05E9\u05DE\u05D9\u05E8\u05D4 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA \u05D0\u05D9\u05E0\u05D4 \u05D6\u05DE\u05D9\u05E0\u05D4 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D6\u05D4.</p>'}`),Ct("play",()=>Ki(Ne.unlocked)),Ct("zen",()=>Ki(Ne.unlocked,{zen:!0})),Ct("collections",Yx),Ct("levels",Rf),Ct("characters",Pf),Ct("help",Jx),Ct("daily",Zx),Ct("missions",$x),Ct("upgrades",If),Ct("sound",()=>{Cf(!Ne.soundOn),In()})}function Yx(){Pt="menu";let i=Rh(Ne.collections,Mn());Rn('<p class="eyebrow">\u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05E2\u05D9\u05E8</p><h2>\u05E2\u05D5\u05D3 \u05E1\u05D9\u05D1\u05D4 \u05DC\u05E8\u05D5\u05E5</h2><div id="collectiondetails"></div><p class="note">\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA \u05D5\u05E1\u05DE\u05DC\u05D9 \u05D0\u05D9\u05E8\u05D5\u05E2 \u05E1\u05D2\u05D5\u05DC\u05D9\u05DD \u05E0\u05DE\u05E6\u05D0\u05D9\u05DD \u05D1\u05DE\u05E1\u05DC\u05D5\u05DC. \u05D4\u05E4\u05E8\u05E1\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD, \u05D1\u05DC\u05D9 \u05D4\u05D2\u05E8\u05DC\u05D5\u05EA. \u05D1\u05DE\u05E6\u05D1 \u05D6\u05DF \u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D0\u05D5 \u05E9\u05D9\u05D0\u05D9\u05DD.</p><button class="primary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>'),St("collectiondetails").innerHTML=`<div class="res"><h3>\u05E6\u05D9\u05D3 \u05D4\u05DE\u05D9\u05DC\u05D4 \u05D4\u05D9\u05D5\u05DE\u05D9\u05EA</h3><div class="wordletters" dir="ltr">${i.word.letters.map(e=>`<span class="letter ${e.found?"found":""}">${e.char}</span>`).join("")}</div><p>${i.word.done?"\u05D4\u05DE\u05D9\u05DC\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4!":i.word.found+" \u05DE\u05EA\u05D5\u05DA 4 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA"} \xB7 ${i.word.reward} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</p><small>\u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D7\u05E6\u05D5\u05EA \u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC. \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA \u05E9\u05DB\u05D1\u05E8 \u05D0\u05E1\u05E4\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5\u05EA.</small></div><div class="res"><h3>\u2726 ${i.event.name}</h3><p>\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D4\u05D7\u05D5\u05D3\u05E9 \xB7 ${i.event.count} \u05DE\u05EA\u05D5\u05DA ${i.event.target} \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD</p>${i.event.milestones.map(e=>`<p>${e.claimed?"\u2713":"\u2606"} ${e.target} \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD = ${e.coins} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</p>`).join("")}<small>\u05E4\u05E8\u05E1 \u05E7\u05D1\u05D5\u05E2 \u05DC\u05DB\u05DC \u05D9\u05E2\u05D3, \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05D7\u05D5\u05D3\u05E9.</small></div>`,Ct("back",In)}function Rf(){Pt="menu";let i="";for(let e=1;e<=20;e++)i+=`<button data-level="${e}" ${e>Ne.unlocked?"disabled":""} class="${e===Ne.unlocked?"current":""}">${e}<small>${Ne.best[e]?"\u2605".repeat(Ne.best[e].stars):e<=Ne.unlocked?"\u05E4\u05EA\u05D5\u05D7":"\u05E0\u05E2\u05D5\u05DC"}</small></button>`;Rn(`<p class="eyebrow">\u05D4\u05DE\u05E1\u05E2 \u05D1\u05E2\u05D9\u05E8</p><h2>20 \u05E9\u05DC\u05D1\u05D9\u05DD. \u05E7\u05D3\u05D9\u05DE\u05D4!</h2><p class="muted">\u05D4\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05D2\u05D3\u05DC\u05D9\u05DD \u05E2\u05DD \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD.</p><div class="levelgrid">${i}</div><button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4</button>`),lr.querySelectorAll("[data-level]").forEach(e=>e.onclick=()=>Ki(Number(e.dataset.level))),Ct("back",In)}function zl(){let i=Mn(),e=Th(i);return{key:i,info:e,status:af(Ne.prog,i)}}function $x(){Pt="menu",Rn(_f(sf(Ne.prog))+'<button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>'),Ct("back",In)}function If(){Pt="menu";let i=yh.map(e=>{let t=Zi[e],n=ar(Ne.prog,e),s=Mh(Ne.prog,e);return{id:e,name:t.name,desc:t.desc,unit:t.unit,level:n,max:t.values.length-1,cost:s,affordable:s!==null&&Ne.coins>=s,nextValue:s!==null?t.unit==="%"?Math.round(t.values[n+1]*100):t.values[n+1]:void 0}});Rn(xf(i,Ne.coins)),lr.querySelectorAll("[data-upgrade]").forEach(e=>e.onclick=()=>{let t=tf(Ne,e.dataset.upgrade);t.ok?(gs(),Kt("coin"),Ut("\u05D4\u05E9\u05D3\u05E8\u05D5\u05D2 \u05E0\u05E7\u05E0\u05D4!")):Ut(t.reason==="coins"?"\u05D0\u05D9\u05DF \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E2\u05D3\u05D9\u05D9\u05DF":"\u05DB\u05D1\u05E8 \u05D1\u05DE\u05DC\u05D5\u05D0\u05D5"),If()}),Ct("back",In)}var kh=i=>i.coins.filter(e=>!e.air).length;function Zx(){Pt="menu";let{info:i,status:e}=zl(),t=wf(i.level,{seed:i.seed,speedMul:i.mod.speedMul,lengthMul:i.mod.lengthMul});Rn(yf({info:i,goalCoins:Ol(i,kh(t)),reward:i.reward,status:e})),Ct("back",In),Ct("dailyplay",()=>Ki(i.level,{daily:i}))}function Pf(){Pt="menu",Rn(`<button class="quiet" id="close" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05DC\u05E8\u05D9\u05E6\u05D4</p><h2>\u05E2\u05DD \u05DE\u05D9 \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05D4\u05D9\u05D5\u05DD?</h2>${zh()}<p class="muted">\u05D4\u05E9\u05DC\u05D9\u05D7 \u05D5\u05D4\u05E9\u05D5\u05E2\u05DC \u05DB\u05D1\u05E8 \u05E9\u05DC\u05DA.<br>\u05DC\u05DB\u05DC \u05D3\u05DE\u05D5\u05EA \u05D9\u05DB\u05D5\u05DC\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05DE\u05E9\u05DC\u05D4.</p><div class="shoplist">${ba.map(i=>`<div class="shopitem"><div class="charicon">${Tf(i.id)}</div><div class="info"><b>${i.name}</b><small>${i.abilityText}</small><small>${Ne.owned.includes(i.id)?"\u05E4\u05EA\u05D5\u05D7 \u05DC\u05DE\u05E9\u05D7\u05E7":i.cost+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05E0\u05D0\u05E1\u05E4\u05D5 \u05D1\u05DE\u05E9\u05D7\u05E7"}</small></div><button class="buy" data-char="${i.id}" ${Ne.character===i.id||!Ne.owned.includes(i.id)&&Ne.coins<i.cost?"disabled":""}>${Ne.character===i.id?"\u05E0\u05D1\u05D7\u05E8":Ne.owned.includes(i.id)?"\u05DC\u05D1\u05D7\u05D5\u05E8":"\u25C6 "+i.cost}</button></div>`).join("")}</div><button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="note">\u05D0\u05D9\u05DF \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D1\u05DB\u05E1\u05E3 \u05D0\u05DE\u05D9\u05EA\u05D9.</p>`),lr.querySelectorAll("[data-char]").forEach(i=>i.onclick=()=>{let e=ba.find(t=>t.id===i.dataset.char);if(!Ne.owned.includes(e.id)){if(Ne.coins<e.cost)return;Ne.coins-=e.cost,Ne.owned.push(e.id),Ut(e.name+" \u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4!")}Ne.character=e.id,gs(),Xx(e.id),Pf()}),Ct("back",In),Ct("close",In)}function Jx(){Rn('<h2>\u05E8\u05E6\u05D9\u05DD \u05D1\u05E7\u05DC\u05D5\u05EA</h2><div class="help"><p>\u05D4\u05E8\u05D9\u05E6\u05D4 \u05E7\u05D3\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.</p><p>\u2194 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05E9\u05DE\u05D0\u05DC\u05D4 \u05D0\u05D5 \u05D9\u05DE\u05D9\u05E0\u05D4: \u05D4\u05D7\u05DC\u05E4\u05EA \u05E0\u05EA\u05D9\u05D1.<br>\u2191 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DE\u05E2\u05DC\u05D4: \u05E7\u05E4\u05D9\u05E6\u05D4 \u05DE\u05E2\u05DC \u05D0\u05E8\u05D2\u05D6\u05D9\u05DD \u05D5\u05DE\u05D7\u05E1\u05D5\u05DE\u05D9\u05DD.<br>\u2193 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DE\u05D8\u05D4: \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DE\u05EA\u05D7\u05EA \u05DC\u05E9\u05E2\u05E8\u05D9\u05DD.<br>\u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05DE\u05E2\u05D8 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E9\u05E2\u05E8. \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D4 \u05DE\u05D9\u05D3 \u05D5\u05E0\u05DE\u05E9\u05DB\u05EA \u05E2\u05D3 \u05E9\u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5.</p><p>\u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D1\u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD \u05E9\u05E2\u05DC \u05D4\u05DE\u05E1\u05DA.<br>\u05D1\u05DE\u05D7\u05E9\u05D1: \u05D7\u05E6\u05D9\u05DD \u05D0\u05D5 WASD, \u05D5\u05E8\u05D5\u05D5\u05D7 \u05DC\u05E7\u05E4\u05D9\u05E6\u05D4.</p><p>\u{1F525} \u05DB\u05D3\u05D5\u05E8 \u05D0\u05E9? \u05E0\u05EA\u05D9\u05D1 \u05D0\u05D3\u05D5\u05DD \u05DE\u05D6\u05D4\u05D9\u05E8 \u05DE\u05E8\u05D0\u05E9.<br>\u05E2\u05D5\u05D1\u05E8\u05D9\u05DD \u05E0\u05EA\u05D9\u05D1 \u05D0\u05D5 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DE\u05E2\u05DC\u05D9\u05D5.</p><p>\u25C6 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D7\u05D1\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05D5\u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD.<br>\u05DE\u05D2\u05DF \u05D8\u05D5\u05E8\u05E7\u05D9\u05D6 \u05E1\u05D5\u05E4\u05D2 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA.<br>\u05DE\u05D2\u05E0\u05D8 \u05E1\u05D2\u05D5\u05DC \u05DE\u05D5\u05E9\u05DA \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA.<br>\u05E0\u05E2\u05DC\u05D9\u05D9\u05DD \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA: \u05E7\u05E4\u05D9\u05E6\u05D5\u05EA \u05E2\u05DC \u05DC\u05DB\u05DE\u05D4 \u05E9\u05E0\u05D9\u05D5\u05EA.<br>\u05DB\u05E0\u05E4\u05D9\u05D9\u05DD \u05EA\u05DB\u05D5\u05DC\u05D5\u05EA: \u05D8\u05D9\u05E1\u05D4 \u05E7\u05E6\u05E8\u05D4 \u05DE\u05E2\u05DC \u05D4\u05DB\u05DC, \u05E2\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8.</p><p>\u05E8\u05E6\u05E3 \u05E0\u05E7\u05D9 \u05E9\u05DC \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05D5\u05D4\u05EA\u05D7\u05DE\u05E7\u05D5\u05D9\u05D5\u05EA \u05D1\u05D5\u05E0\u05D4 \u05E7\u05D5\u05DE\u05D1\u05D5 \u2014 \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05DD \xD72 \u05D5\u05D0\u05D6 \xD73. \u05E4\u05D2\u05D9\u05E2\u05D4 \u05DE\u05D0\u05E4\u05E1\u05EA.</p><p>\u05DE\u05DB\u05D5\u05E0\u05D9\u05D5\u05EA \u05E0\u05E2\u05D5\u05EA \u05D1\u05D9\u05DF \u05E0\u05EA\u05D9\u05D1\u05D9\u05DD \u2014 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DE\u05E2\u05DC\u05D9\u05D4\u05DF \u05D0\u05D5 \u05DE\u05D7\u05DC\u05D9\u05E4\u05D9\u05DD \u05E0\u05EA\u05D9\u05D1. \u05D2\u05E9\u05E8\u05D5\u05DF \u05DE\u05E7\u05E4\u05D9\u05E5 \u05DE\u05E2\u05DC \u05E9\u05D5\u05E8\u05D5\u05EA \u05DB\u05E4\u05D5\u05DC\u05D5\u05EA. \u05DE\u05EA\u05D7\u05EA \u05DC\u05D2\u05D2\u05D5\u05E0\u05D9\u05DD \u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05DE\u05D5\u05E7\u05D3\u05DD.</p><p>\u05E4\u05D2\u05D9\u05E2\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05DC\u05D9 \u05DE\u05D2\u05DF? \u05E8\u05E7 \u05DE\u05E2\u05D9\u05D3\u05D4 \u2014 \u05D0\u05D1\u05DC \u05D4\u05DB\u05DC\u05D1 \u05D9\u05D5\u05E6\u05D0 \u05D0\u05D7\u05E8\u05D9\u05DA. \u05E4\u05D2\u05D9\u05E2\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05D5\u05D0 \u05E2\u05D9\u05D9\u05E3 \u05D5\u05D4\u05E8\u05D9\u05E6\u05D4 \u05E0\u05D2\u05DE\u05E8\u05EA. \u05D0\u05D7\u05E8\u05D9 \u05E0\u05E4\u05D9\u05DC\u05D4 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D7\u05D9\u05D5\u05EA \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA.</p><p>\u05D1\u05EA\u05E4\u05E8\u05D9\u05D8: \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E2\u05DD \u05E4\u05E8\u05E1\u05D9\u05DD, \u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD \u05DC\u05DB\u05D5\u05D7\u05D5\u05EA, \u05D5\u05D0\u05EA\u05D2\u05E8 \u05D9\u05D5\u05DE\u05D9 \u05E9\u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D7\u05E6\u05D5\u05EA \u05E9\u05E2\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC.</p><p>\u05D7\u05D3\u05E9: \u05D1\u05E0\u05EA\u05D9\u05D1 \u05D4\u05E9\u05DE\u05D0\u05DC\u05D9 \u05E2\u05D5\u05DC\u05D9\u05DD \u05DC\u05D2\u05D2\u05D5\u05EA. \u05D1\u05D9\u05DE\u05E0\u05D9 \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF \u05DB\u05D3\u05D9 \u05DC\u05EA\u05E4\u05D5\u05E1 \u05D0\u05D5\u05EA\u05D5, \u05D5\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05D1\u05D4\u05D7\u05DC\u05E4\u05EA \u05E0\u05EA\u05D9\u05D1.<br>\u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05D5\u05D7\u05E6\u05D9\u05DD \u05E9\u05D5\u05D1 \u05E7\u05E4\u05D9\u05E6\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05E1\u05DC\u05D8\u05D4. \u05DE\u05E9\u05DC\u05D9\u05DE\u05D9\u05DD \u05E1\u05D9\u05D1\u05D5\u05D1 \u05D5\u05E0\u05D5\u05D7\u05EA\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E7\u05D1\u05DC \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D5\u05E7\u05D5\u05DE\u05D1\u05D5. \u05E2\u05DD \u05D4\u05D0\u05E8\u05E0\u05D1: \u05D4\u05E7\u05E4\u05D9\u05E6\u05D4 \u05D4\u05DB\u05E4\u05D5\u05DC\u05D4 \u05E7\u05D5\u05D3\u05DE\u05EA \u05DC\u05E1\u05DC\u05D8\u05D4.<br>\u05E1\u05E7\u05D9\u05D9\u05D8 \u05DB\u05EA\u05D5\u05DD \u05DE\u05D2\u05D1\u05D9\u05E8 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA; \u05E4\u05D5\u05D2\u05D5 \u05E1\u05D2\u05D5\u05DC \u05DE\u05E7\u05E4\u05D9\u05E5 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA. \u05DB\u05E4\u05EA\u05D5\u05E8 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DE\u05D0\u05D8 \u05D0\u05EA \u05D4\u05E1\u05E7\u05D9\u05D9\u05D8 \u05D0\u05D5 \u05E2\u05D5\u05E6\u05E8 \u05D6\u05DE\u05E0\u05D9\u05EA \u05D0\u05EA \u05D4\u05E7\u05E4\u05D9\u05E6\u05D5\u05EA. \u05E9\u05E0\u05D9\u05D4\u05DD \u05E1\u05D5\u05E4\u05D2\u05D9\u05DD \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA \u05D5\u05E0\u05E2\u05DC\u05DE\u05D9\u05DD.<br>\u05E8\u05D9\u05E6\u05EA \u05D6\u05DF \u05D4\u05D9\u05D0 \u05EA\u05E8\u05D2\u05D5\u05DC \u05D1\u05DC\u05D9 \u05DE\u05D5\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1\u05D9\u05DD \u05D5\u05D1\u05DC\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA.</p><p>\u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05EA \u05E8\u05E7 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D5\u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4.</p></div><button class="primary" id="back">\u05D4\u05D1\u05E0\u05EA\u05D9!</button>'),Ct("back",In)}function Ki(i,e){e=e||{},sn=i,Wl=0,rn=!!e.zen,jt=rn?null:e.daily||null,Sa=Mn(),or=Ul(Ne.prog);let t=jt?jt.mod:{};j=new Hx(i,{zen:rn,character:Ne.character,upgrades:or,seed:jt?jt.seed:0,speedMul:t.speedMul,lengthMul:t.lengthMul,coinMul:t.coinMul,noStartShield:t.noStartShield}),pn=of();let n=[9554408,13160935,15714210,11457759][Math.floor((i-1)/5)];Vl.fog.color.setHex(n),Vl.background.setHex(n),Gl.setClearColor(n),Lh=!1,Pt="playing",jn=null,Nh=-1,Uh=-1,Fh="",Hl=rn?[]:pf(j.level,Sa),j.level.pickups=Hl,j.level.bestMarker=rn?0:Ih(Ne.collections,{level:i,daily:!!jt,dateKey:Sa}),Ef(j.level),Ta=Qd(j.level,jt&&t.fireMul||1),Ji.reset(),cr.unlock(),Dh=0,Ne.soundNotice&&(Ne.soundNotice=!1,gs(),setTimeout(()=>Ut("\u05E0\u05D5\u05E1\u05E4\u05D5 \u05E6\u05DC\u05D9\u05DC\u05D9\u05DD \u05D5\u05D4\u05DD \u05D3\u05D5\u05DC\u05E7\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E9\u05EA\u05D9\u05E7 \u05D1\u05DB\u05E4\u05EA\u05D5\u05E8 \u{1F50A}"),2600)),Yl.hidden=!0,St("hud").hidden=St("controls").hidden=!1,St("levelnum").textContent=rn?"\u05D6\u05DF":jt?"\u05D9\u05D5\u05DE\u05D9":i,St("runcoins").textContent="0",St("progress").style.width="0%",St("powerlabel").textContent="",St("huntlabel").textContent="",St("combo").textContent="",Oh="",St("chaserwarn").hidden=!0,Bh=!1,rn?Ut("\u05DE\u05E6\u05D1 \u05D6\u05DF \xB7 \u05DE\u05EA\u05E8\u05D2\u05DC\u05D9\u05DD \u05D1\u05DC\u05D9 \u05DE\u05D5\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05E4\u05E8\u05E1\u05D9\u05DD \u05D5\u05D1\u05DC\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA"):i===1&&!jt&&Ut("\u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D7\u05E6\u05D9\u05DD \xB7 \u05E7\u05E4\u05D9\u05E6\u05D4 \u2191 \xB7 \u05D4\u05D7\u05DC\u05E7\u05D4 \u2193"),jt&&Ut("\u05D4\u05D0\u05EA\u05D2\u05E8: \u05DC\u05E1\u05D9\u05D9\u05DD \u05E2\u05DD "+Ol(jt,kh(j.level))+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA"),ms=0,wa=performance.now()}function hr(){Pt==="playing"&&(Pt="paused",clearTimeout(Ut.timer),St("toast").classList.remove("show"),Rn(`<p class="eyebrow">\u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05D0\u05D5\u05D5\u05D9\u05E8</p><h2>\u05D4\u05E8\u05D9\u05E6\u05D4 \u05DE\u05D7\u05DB\u05D4 \u05DC\u05DA</h2><p class="subtitle">\u05E9\u05DC\u05D1 ${sn} \xB7 ${j.coins} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4</p><button class="primary" id="resume">\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E8\u05D5\u05E5</button><button class="secondary" id="retry">\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DC\u05D1 \u05DE\u05D7\u05D3\u05E9</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05E9\u05D7\u05E7</button><p class="note">${rn?"\u05DE\u05E6\u05D1 \u05D6\u05DF: \u05EA\u05E8\u05D2\u05D5\u05DC \u05D1\u05DC\u05D1\u05D3, \u05DC\u05DC\u05D0 \u05E9\u05DE\u05D9\u05E8\u05EA \u05E4\u05E8\u05E1\u05D9\u05DD.":"\u05D2\u05DD \u05D1\u05D9\u05E6\u05D9\u05D0\u05D4, \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D0\u05E1\u05E4\u05EA \u05D9\u05D9\u05E9\u05DE\u05E8\u05D5."}</p>`),Ct("resume",()=>{Pt="playing",Yl.hidden=!0,ms=0,wa=performance.now(),jn=null}),Ct("retry",()=>{Xl(!1),Ki(sn,rn?{zen:!0}:jt?{daily:jt}:{})}),Ct("home",()=>{Xl(!1),In()}))}function Xl(i){if(Lh||!j)return{bonus:0,r:null};if(Lh=!0,rn)return{bonus:0,r:null};gf(Ne.collections,{level:sn,daily:!!jt,distance:j.x,won:i,dateKey:Sa}),pn&&pn.max("combo",j.maxStreak);let e=!!jt,t=e?Ol(jt,kh(j.level)):0,n=lf(Ne.prog,pn?pn.stats:{},{won:i,distance:j.x,daily:e,dateKey:Mn(),goalCoins:t}),s=i&&!e?20+sn*2:0;if(Ne.coins+=j.coins+s+n.coins,i&&!e){Ne.unlocked=Math.min(20,Math.max(Ne.unlocked,sn+1));let r=j.collected>=j.level.coins.length*.7?3:j.collected>=j.level.coins.length*.35?2:1,a=Ne.best[sn]||{stars:0,coins:0};Ne.best[sn]={stars:Math.max(r,a.stars),coins:Math.max(j.coins,a.coins)}}return gs(),{bonus:s,r:n}}function ql(i){if(rn){Xl(!1),Pt="won",St("controls").hidden=!0,Rn(`<p class="eyebrow">\u05E8\u05D9\u05E6\u05EA \u05D6\u05DF</p><h2>\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D5\u05E6\u05DC\u05D7!</h2><p class="subtitle">${j.tricks} \u05E1\u05DC\u05D8\u05D5\u05EA \u05E2\u05DD \u05E0\u05D7\u05D9\u05EA\u05D4 \xB7 ${j.collected} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DC\u05EA\u05E8\u05D2\u05D5\u05DC</p><p class="note">\u05D4\u05E7\u05D5\u05E4\u05D4, \u05D4\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05D4\u05E9\u05D9\u05D0\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D5 \u05DC\u05DC\u05D0 \u05E9\u05D9\u05E0\u05D5\u05D9.</p><button id="retry" class="primary">\u05E2\u05D5\u05D3 \u05E8\u05D9\u05E6\u05EA \u05D6\u05DF</button><button id="home" class="secondary">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button>`),Ct("retry",()=>Ki(sn,{zen:!0})),Ct("home",In);return}Pt=i?"won":"dead",St("controls").hidden=!0,St("chaserwarn").hidden=!0;let{bonus:e,r:t}=Xl(i),n=t?Mf(t):"";if(i){let s=j.collected>=j.level.coins.length*.7?3:j.collected>=j.level.coins.length*.35?2:1;Rn(`<p class="eyebrow">${sn===20?"\u05DB\u05DC \u05D4\u05E2\u05D9\u05E8 \u05DB\u05D1\u05E8 \u05DE\u05DB\u05D9\u05E8\u05D4 \u05D0\u05D5\u05EA\u05DA":"\u05E2\u05D5\u05D3 \u05E6\u05E2\u05D3 \u05D1\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4"}</p><h2>${sn===20?"\u05D0\u05DC\u05D5\u05E3 \u05D4\u05E2\u05D9\u05E8!":"\u05E9\u05DC\u05D1 "+sn+" \u05D4\u05D5\u05E9\u05DC\u05DD!"}</h2><div class="stars">${"\u2605".repeat(s)}${"\u2606".repeat(3-s)}</div><div class="stats"><div><b>${j.coins}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D0\u05E1\u05E4\u05EA</small></div><div><b>+${e}</b><small>\u05D1\u05D5\u05E0\u05D5\u05E1 \u05E1\u05D9\u05D5\u05DD</small></div></div>${n}${zh()}<button class="primary" id="next">${sn<20?"\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E9\u05DC\u05D1 "+(sn+1):"\u05DC\u05DE\u05E4\u05EA \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD"}</button><div class="twocol"><button class="secondary" id="retry">\u05E9\u05D5\u05D1 \u05D0\u05D5\u05EA\u05D5 \u05E9\u05DC\u05D1</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button></div>`),Ct("next",()=>sn<20?Ki(sn+1):Rf())}else Rn(`<p class="eyebrow">\u05E2\u05D5\u05D3 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF. \u05E2\u05D5\u05D3 \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8 \u05E8\u05D7\u05D5\u05E7.</p><h2>\u05DB\u05DE\u05E2\u05D8 \u05E2\u05D1\u05E8\u05EA!</h2><p class="subtitle">${Math.floor(Math.min(100,j.x/j.level.length*100))}% \u05DE\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \xB7 \u05E9\u05DC\u05D1 ${sn}</p><div class="stats"><div><b>+${j.coins}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05E7\u05D5\u05E4\u05D4</small></div></div>${j.caught?'<p class="note">\u05D4\u05DB\u05DC\u05D1 \u05D4\u05E9\u05EA\u05DC\u05D8 \u05E2\u05DC\u05D9\u05DA \u05D0\u05D7\u05E8\u05D9 \u05E9\u05EA\u05D9 \u05DE\u05E2\u05D9\u05D3\u05D5\u05EA.</p>':""}${n}<button class="primary" id="retry">\u05DE\u05E0\u05E1\u05D9\u05DD \u05E9\u05D5\u05D1</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05E9\u05D7\u05E7</button><p class="note">\u05D8\u05D9\u05E4: \u05D0\u05E8\u05D2\u05D6 \u05D5\u05DE\u05D7\u05E1\u05D5\u05DD? \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD. \u05E9\u05E2\u05E8 \u05D2\u05D1\u05D5\u05D4? \u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD.</p>`);Ct("retry",()=>Ki(sn,rn?{zen:!0}:jt?{daily:jt}:{})),Ct("home",In)}function Kx(){Pt="offer",St("controls").hidden=!0,St("chaserwarn").hidden=!0,Rn(Sf(or.reviveCost)),Ct("revive",()=>{if(Ne.coins<or.reviveCost){ql(!1);return}Ne.coins-=or.reviveCost,gs(),j.revive(),pn&&pn.add("revives"),Kt("revive"),Yl.hidden=!0,St("controls").hidden=!1,Pt="playing",ms=0,wa=performance.now(),jn=null,Ut("\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05DC\u05E8\u05D5\u05E5!")}),Ct("norevive",()=>ql(!1))}function $l(i){if(Pt!=="playing")return;let e=j.lane;i==="left"&&j.move(-1),i==="right"&&j.move(1),j.lane!==e&&Kt("move"),i==="jump"&&(j.jump()||j.trick()),i==="slide"&&j.duck()}for(let i of["left","right","jump","slide"])St(i).addEventListener("pointerdown",e=>{e.preventDefault(),$l(i)});Ct("pause",hr);Ct("mute",()=>Cf(!Ne.soundOn));St("mute").textContent=Ne.soundOn?"\u{1F50A}":"\u{1F507}";for(let i of["pointerdown","keydown","touchstart"])addEventListener(i,()=>cr.unlock(),{passive:!0});var Sn=null;function Lf(i){if(!Sn||Sn.id!==i.pointerId||Sn.done)return;let e=i.clientX-Sn.x,t=i.clientY-Sn.y;Math.max(Math.abs(e),Math.abs(t))<20||(Sn.done=!0,$l(Math.abs(e)>Math.abs(t)?e<0?"left":"right":t<0?"jump":"slide"))}ji.addEventListener("pointerdown",i=>{Pt==="playing"&&!Sn&&(Sn={id:i.pointerId,x:i.clientX,y:i.clientY,done:!1},ji.setPointerCapture(i.pointerId))});ji.addEventListener("pointermove",Lf);ji.addEventListener("pointerup",i=>{!Sn||Sn.id!==i.pointerId||(Lf(i),Sn.done||$l("jump"),Sn=null)});ji.addEventListener("pointercancel",()=>Sn=null);ji.addEventListener("lostpointercapture",()=>Sn=null);document.addEventListener("keydown",i=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(i.key)&&i.preventDefault(),i.repeat)return;let e={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"jump",w:"jump",W:"jump"," ":"jump",ArrowDown:"slide",s:"slide",S:"slide"};i.key==="Escape"||i.key==="p"?Pt==="playing"?hr():Pt==="paused"&&St("resume").click():e[i.key]&&$l(e[i.key])});document.addEventListener("visibilitychange",()=>{document.hidden&&(hr(),cr.suspend())});window.addEventListener("blur",hr);ji.addEventListener("webglcontextlost",i=>{i.preventDefault(),hr(),Ut("\u05EA\u05E6\u05D5\u05D2\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E0\u05E2\u05E6\u05E8\u05D4. \u05E8\u05E2\u05E0\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA.")});var jn=null,Nh=-1,Uh=-1,Fh="",Oh="",Bh=!1;function Df(){return j?{x:j.x,y:j.y,lateral:j.lateral,lane:j.lane,slide:j.slide,shield:j.shield,invincible:j.invincible,chaser:j.chaser,flight:j.flight,shoes:j.shoes,ground:j.ground,zip:j.zip,route:j.route,vehicle:j.vehicle,trickRotation:j.trickRotation,mult:j.mult,obs:j.level.obs,coins:j.level.coins,powers:j.level.powers}:null}function jx(i){let e=Df();if(e&&jn&&Pt==="playing"){let t=Math.min(1,ms*120);e={...e,x:jn.x+(e.x-jn.x)*t,y:jn.y+(e.y-jn.y)*t,lateral:jn.lateral+(e.lateral-jn.lateral)*t}}if(Ji.update(i,e?{...e,t:j.time}:{x:0,t:0},Pt==="menu"?null:Ta,Pt==="playing"),ps.render(i,e,Pt),j&&j.flight>0&&Pt==="playing"&&Ji.burst("jet",e?e.lateral:0,j.y+.2,.5),j){let t=Math.floor(Math.min(100,j.x/j.level.length*100)),n=(j.shield?"\u05DE\u05D2\u05DF \xD7"+j.shield+"  ":"")+(j.magnet>0?"\u05DE\u05D2\u05E0\u05D8 "+Math.ceil(j.magnet)+" \u05E9\u05E0\u05F3  ":"")+(j.shoes>0?"\u05E0\u05E2\u05DC\u05D9\u05D9\u05DD "+Math.ceil(j.shoes)+" \u05E9\u05E0\u05F3  ":"")+(rn?"\u2601 \u05D6\u05DF \xB7 ":"")+(j.route==="roof"?"\u05D2\u05D2\u05D5\u05EA! ":j.zip?"\u05D6\u05D9\u05E4\u05BE\u05DC\u05D9\u05D9\u05DF! ":"")+(j.vehicle==="board"?"\u05E1\u05E7\u05D9\u05D9\u05D8 "+Math.ceil(j.vehicleTime)+" \u05E9\u05E0\u05F3 ":j.vehicle==="pogo"?"\u05E4\u05D5\u05D2\u05D5 "+Math.ceil(j.vehicleTime)+" \u05E9\u05E0\u05F3 ":"")+(j.flight>0?"\u05D8\u05D9\u05E1\u05D4!":"")+(j.chaser>0?"\u{1F3C3}\u{1F4A8} \u05D4\u05DB\u05DC\u05D1 \u05DE\u05D0\u05D7\u05D5\u05E8\u05D9\u05DA!":"");if(Nh!==j.coins&&(St("runcoins").textContent=j.coins,Nh=j.coins),Uh!==t&&(St("progress").style.width=t+"%",Uh=t),j.time>=Wl){let a=Rh(Ne.collections,Mn());St("huntlabel").textContent=rn?"\u05EA\u05E8\u05D2\u05D5\u05DC \u05D1\u05DC\u05D1\u05D3":a.word.text+" "+a.word.found+"/4 \xB7 \u2726 "+a.event.count+"/30",Wl=j.time+1}Fh!==n&&(St("powerlabel").textContent=n,Fh=n);let s=j.mult>1?"\xD7"+j.mult:"";Oh!==s&&(St("combo").textContent=s,Oh=s);let r=j.chaser>0;Bh!==r&&(St("chaserwarn").hidden=!r,Bh=r)}}function Nf(i){let e=Math.max(0,(i-wa)/1e3||0),t=Math.min(e,.75);if(wa=i,ps.sampleFrame(e,Pt),!Wx&&Pt==="playing"&&e>.75&&(hr(),lr.insertAdjacentHTML("afterbegin",'<p class="note">\u05D4\u05E8\u05D9\u05E6\u05D4 \u05D4\u05D5\u05E9\u05D4\u05EA\u05D4 \u05D1\u05D2\u05DC\u05DC \u05E2\u05E6\u05D9\u05E8\u05D4 \u05D1\u05EA\u05E6\u05D5\u05D2\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05DB\u05E9\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05DE\u05D5\u05DB\u05DF.</p>')),Pt==="playing")for(ms+=t;ms>=1/120&&Pt==="playing";){if(jn=Df(),j.step(1/120),Ta.update(j,1/120),!rn){for(let r of Hl)if(!r.taken&&Math.abs(r.x-j.x)<1.4&&Math.abs(r.lane*2.6-j.lateral)<1.05&&Math.abs(r.y-j.y-.7)<1.3){let a=mf(Ne.collections,r,Mn(),{zen:rn});Ne.coins+=a.coins||0,gs(),a.message&&Ut(a.message),Wl=0}}ms-=1/120,j.status==="playing"&&j.y<.02&&j.slide<=0&&j.x-Dh>=3.4&&(Dh=j.x,Kt("step"));for(let r of Ta.drain())r.type==="fb-warn"&&Kt("warn"),r.type==="fb-launch"&&Kt("launch"),r.type==="fb-dodge"&&(Kt("dodge"),Ut("\u05D4\u05EA\u05D7\u05DE\u05E7\u05EA \u05DE\u05DB\u05D3\u05D5\u05E8 \u05D4\u05D0\u05E9!")),r.type==="fb-hit"&&(Kt("boom"),Ji.burst("boom",j.lateral,.9,0),bf.classList.add("on"),setTimeout(()=>bf.classList.remove("on"),160));let n=j.drain();pn&&pn.events(n);let s=n.some(r=>r.type==="caught");for(let r of n)["jump","slide","coin","won"].includes(r.type)&&Kt(r.type),r.type==="dead"&&!s&&Kt("dead"),r.type==="coin"&&Ji.burst("coin",j.lateral,j.y+1,0),r.type==="combo"&&Kt("combo"),(r.type==="shield"||r.type==="magnet")&&Kt("power"),r.type==="break"&&Kt("break"),r.type==="shield"&&Ut("\u05DE\u05D2\u05DF! \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA \u05DC\u05D0 \u05EA\u05E2\u05E6\u05D5\u05E8 \u05D0\u05D5\u05EA\u05DA"),r.type==="magnet"&&Ut("\u05DE\u05D2\u05E0\u05D8! \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA"),r.type==="break"&&Ut("\u05D4\u05DE\u05D2\u05DF \u05D4\u05E6\u05D9\u05DC \u05D0\u05D5\u05EA\u05DA"),r.type==="stumble"&&(Kt("stumble"),Ji.burst("boom",j.lateral,.5,0),Ut("\u05DE\u05E2\u05D3\u05EA! \u05D4\u05DB\u05DC\u05D1 \u05E8\u05D5\u05D3\u05E3 \u05D0\u05D7\u05E8\u05D9\u05DA \u2014 \u05E2\u05D5\u05D3 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D5\u05D4\u05D5\u05D0 \u05EA\u05D5\u05E4\u05E1")),r.type==="caught"&&Kt("dead"),r.type==="ramp"&&(Kt("ramp"),Ji.burst("coin",j.lateral,.5,0)),r.type==="shoes"&&(Kt("power"),pn&&pn.add("powerups"),Ut("\u05E0\u05E2\u05DC\u05D9 \u05E7\u05E4\u05D9\u05E6\u05D4! \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05DC\u05E9\u05DE\u05D9\u05D9\u05DD")),r.type==="flight"&&(Kt("fly"),pn&&(pn.add("powerups"),pn.add("flights")),Ut("\u05D8\u05D9\u05E1\u05D4! \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DE\u05D7\u05DB\u05D9\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4")),r.type==="trick-land"&&(Kt("combo"),Ut(rn?"\u05E0\u05D7\u05D9\u05EA\u05D4 \u05DE\u05D5\u05E6\u05DC\u05D7\u05EA!":"\u05E1\u05DC\u05D8\u05D4 \u05DE\u05D5\u05E6\u05DC\u05D7\u05EA! +"+8*j.mult+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D5\u05E7\u05D5\u05DE\u05D1\u05D5")),r.type==="trick-miss"&&Ut("\u05E2\u05D5\u05D3 \u05E7\u05E6\u05EA \u05D2\u05D5\u05D1\u05D4 \u05D1\u05E4\u05E2\u05DD \u05D4\u05D1\u05D0\u05D4"),r.type==="board"&&Ut("\u05E1\u05E7\u05D9\u05D9\u05D8! \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \xB7 \u2193 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05DC\u05D5\u05DD"),r.type==="pogo"&&Ut("\u05E4\u05D5\u05D2\u05D5! \u05E7\u05D5\u05E4\u05E5 \u05DC\u05D1\u05D3 \xB7 \u2193 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D9\u05E9\u05D0\u05E8 \u05E0\u05DE\u05D5\u05DA"),r.type==="vehicle-break"&&Ut("\u05D4\u05DB\u05DC\u05D9 \u05E1\u05E4\u05D2 \u05D0\u05EA \u05D4\u05E4\u05D2\u05D9\u05E2\u05D4!"),r.type==="vehicle-end"&&Ut("\u05D1\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E8\u05D9\u05E6\u05D4"),r.type==="moving-pass"&&pn&&pn.add("moving");j.status==="won"?ql(!0):j.status==="dead"&&(!j.revived&&Ne.coins>=or.reviveCost?Kx():ql(!1))}jx(t),requestAnimationFrame(Nf)}Object.defineProperty(window,"__runner",{get:()=>({mode:Pt,store:JSON.parse(JSON.stringify(Ne)),run:j?{x:j.x,y:j.y,lane:j.lane,lateral:j.lateral,slide:j.slide,coins:j.coins,collected:j.collected,mult:j.mult,maxStreak:j.maxStreak,chaser:j.chaser,flight:j.flight,shoes:j.shoes,shield:j.shield,revived:j.revived,caught:j.caught,daily:!!jt,zen:rn,ground:j.ground,route:j.route,zip:j.zip,vehicle:j.vehicle,vehicleTime:j.vehicleTime,brake:j.brake,trickTime:j.trickTime,trickReady:j.trickReady,tricks:j.tricks,runKey:Sa,collectionItems:Hl.map(i=>({...i})),routes:j.level.routes,status:j.status,speed:j.level.speed,length:j.level.length,obs:j.level.obs.map(i=>({...i})),powers:j.level.powers.map(i=>({...i})),allCoins:j.level.coins.length,coinLanes:j.level.coins.filter(i=>!i.taken&&i.x>j.x-2&&i.x<j.x+30).map(i=>({x:i.x,lane:i.lane}))}:null,render:{calls:Gl.info.render.calls,triangles:Gl.info.render.triangles,dpr:ps.stats.dpr,frames:ps.stats.frames,frameMs:ps.stats.frameMs.slice(-180),quality:ps.stats.quality}})});In();requestAnimationFrame(Nf);window.GamesUpdate?.setSafeToReload(()=>Pt==="menu"&&!!document.getElementById("play"));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

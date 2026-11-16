(()=>{var rh=0,El=1,ah=2;var yr=1,Ya=2,ys=3,bi=0,an=1,zn=2,Bi=0,Ms=1,Rl=2,Cl=3,Il=4,oh=5;var zi=100,lh=101,ch=102,hh=103,uh=104,dh=200,fh=201,ph=202,mh=203,Pl=204,Ll=205,gh=206,_h=207,xh=208,vh=209,yh=210,Mh=211,Sh=212,bh=213,Th=214,ua=0,da=1,fa=2,os=3,pa=4,ma=5,ga=6,_a=7,Dl=0,wh=1,Ah=2,kn=0,Nl=1,Ul=2,Fl=3,Mr=4,Ol=5,Bl=6,zl=7;var kl=300,ki=301,Ss=302,Za=303,Ja=304,jn=1e3,Ln=1001,xa=1002,Wt=1003,Eh=1004;var Sr=1005;var rn=1006,$a=1007;var ii=1008;var on=1009,Gl=1010,Vl=1011,bs=1012,Ka=1013,En=1014,xn=1015,Rn=1016,Qa=1017,ja=1018,Gi=1020,Hl=35902,Wl=35899,Xl=1021,ql=1022,Cn=1023,ei=1026,si=1027,eo=1028,to=1029,Ti=1030,no=1031;var io=1033,br=33776,Tr=33777,wr=33778,Ar=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37488,fo=37489,Er=37490,po=37491,mo=37808,go=37809,_o=37810,xo=37811,vo=37812,yo=37813,Mo=37814,So=37815,bo=37816,To=37817,wo=37818,Ao=37819,Eo=37820,Ro=37821,Co=36492,Io=36494,Po=36495,Lo=36283,Do=36284,Rr=36285,No=36286;var Hs=2300,va=2301,la=2302,_l=2303,xl=2400,vl=2401,yl=2402;var Rh=3200;var Uo=0,Ch=1,ri="",Ot="srgb",Ws="srgb-linear",Xs="linear",yt="srgb";var ca=7680;var Ih=519,Ph=512,Lh=513,Dh=514,Yl=515,Nh=516,Uh=517,Zl=518,Jl=519,Fh=35044,$l=35048;var Kl="300 es",mn=2e3,ls=2001;function Hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){let i=cs("canvas");return i.style.display="block",i}var Ec={},hs=null;function Ql(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function Bh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=Bh(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Bh(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ks(...i){let e=i.join(" ");e in Ec||(Ec[e]=!0,Ze(...i))}function zh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kh={[ua]:ua,[fa]:ga,[pa]:pa,[os]:ma,[da]:da,[ga]:fa,[_a]:_a,[ma]:os},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,ya=180/Math.PI;function Ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Xu(i,e){return(i%e+e)%e}function Yo(i,e,t){return(1-t)*i+t*e}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qu(i,e){if(e.constructor===Float32Array)return i;let t=jl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Yu(i,e){if(e.constructor===Float32Array)return i;let t=jl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||c!==u||l!==f||h!==_){let g=c*u+l*f+h*_+d*S;g<0&&(u=-u,f=-f,_=-_,S=-S,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),x=Math.sin(M);p=Math.sin(p*M)/x,o=Math.sin(o*M)/x,c=c*p+u*o,l=l*p+f*o,h=h*p+_*o,d=d*p+S*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+_*o,d=d*p+S*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+c*f-l*u,e[t+1]=c*_+h*u+l*d-o*f,e[t+2]=l*_+h*f+o*u-c*d,e[t+3]=h*_-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zo=new U,Rc=new gn,Qe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],S=s[0],g=s[3],p=s[6],M=s[1],x=s[4],v=s[7],A=s[2],w=s[5],m=s[8];return r[0]=a*S+o*M+c*A,r[3]=a*g+o*x+c*w,r[6]=a*p+o*v+c*m,r[1]=l*S+h*M+d*A,r[4]=l*g+h*x+d*w,r[7]=l*p+h*v+d*m,r[2]=u*S+f*M+_*A,r[5]=u*g+f*x+_*w,r[8]=u*p+f*v+_*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,_=t*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new Qe,Cc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){let i={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ws]:{primaries:e,whitePoint:n,transfer:Xs,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var pt=Zu();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,Ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=cs("canvas")),Xi.width=e.width,Xi.height=e.height;let s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ju=0,us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($o(s[a].image)):r.push($o(s[a]))}else r=$o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var $u=0,Ko=new U,Qt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=rn,a=ii,o=Cn,c=on,l=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ts(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=kl;Qt.DEFAULT_ANISOTROPY=1;var Rt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],S=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+u)/4,m=(d+S)/4,b=(_+g)/4;return x>v&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=m/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=m/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Sa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qs=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,_,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,_,S,g)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,_,S,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,_=o*h,S=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,_=l*h,S=l*d;t[0]=u+S*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,_=l*h,S=l*d;t[0]=u-S*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,_=o*h,S=o*d;t[0]=c*h,t[4]=_*l-f,t[8]=u*l+S,t[1]=c*d,t[5]=S*l+u,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=S-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+_,t[10]=u-S*d}else if(e.order==="XZY"){let u=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+S,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,Qu)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),li.crossVectors(n,ln),li.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),li.crossVectors(n,ln)),li.normalize(),zr.crossVectors(ln,li),s[0]=li.x,s[4]=zr.x,s[8]=ln.x,s[1]=li.y,s[5]=zr.y,s[9]=ln.y,s[2]=li.z,s[6]=zr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],S=n[6],g=n[10],p=n[14],M=n[3],x=n[7],v=n[11],A=n[15],w=s[0],m=s[4],b=s[8],D=s[12],R=s[1],C=s[5],O=s[9],q=s[13],L=s[2],G=s[6],Y=s[10],k=s[14],oe=s[3],Z=s[7],ie=s[11],re=s[15];return r[0]=a*w+o*R+c*L+l*oe,r[4]=a*m+o*C+c*G+l*Z,r[8]=a*b+o*O+c*Y+l*ie,r[12]=a*D+o*q+c*k+l*re,r[1]=h*w+d*R+u*L+f*oe,r[5]=h*m+d*C+u*G+f*Z,r[9]=h*b+d*O+u*Y+f*ie,r[13]=h*D+d*q+u*k+f*re,r[2]=_*w+S*R+g*L+p*oe,r[6]=_*m+S*C+g*G+p*Z,r[10]=_*b+S*O+g*Y+p*ie,r[14]=_*D+S*q+g*k+p*re,r[3]=M*w+x*R+v*L+A*oe,r[7]=M*m+x*C+v*G+A*Z,r[11]=M*b+x*O+v*Y+A*ie,r[15]=M*D+x*q+v*k+A*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],S=e[7],g=e[11],p=e[15],M=c*f-l*u,x=o*f-l*d,v=o*u-c*d,A=a*f-l*h,w=a*u-c*h,m=a*d-o*h;return t*(S*M-g*x+p*v)-n*(_*M-g*A+p*w)+s*(_*x-S*A+p*m)-r*(_*v-S*w+g*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],S=e[13],g=e[14],p=e[15],M=t*o-n*a,x=t*c-s*a,v=t*l-r*a,A=n*c-s*o,w=n*l-r*o,m=s*l-r*c,b=h*S-d*_,D=h*g-u*_,R=h*p-f*_,C=d*g-u*S,O=d*p-f*S,q=u*p-f*g,L=M*q-x*O+v*C+A*R-w*D+m*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return e[0]=(o*q-c*O+l*C)*G,e[1]=(s*O-n*q-r*C)*G,e[2]=(S*m-g*w+p*A)*G,e[3]=(u*w-d*m-f*A)*G,e[4]=(c*R-a*q-l*D)*G,e[5]=(t*q-s*R+r*D)*G,e[6]=(g*v-_*m-p*x)*G,e[7]=(h*m-u*v+f*x)*G,e[8]=(a*O-o*R+l*b)*G,e[9]=(n*R-t*O-r*b)*G,e[10]=(_*w-S*v+p*M)*G,e[11]=(d*v-h*w-f*M)*G,e[12]=(o*D-a*C-c*b)*G,e[13]=(t*C-n*D+s*b)*G,e[14]=(S*x-_*A-g*M)*G,e[15]=(h*A-d*x+u*M)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,_=r*d,S=a*h,g=a*d,p=o*d,M=c*l,x=c*h,v=c*d,A=n.x,w=n.y,m=n.z;return s[0]=(1-(S+p))*A,s[1]=(f+v)*A,s[2]=(_-x)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+p))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(_+x)*m,s[9]=(g-M)*m,s[10]=(1-(u+S))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=qi.set(s[0],s[1],s[2]).length(),o=qi.set(s[4],s[5],s[6]).length(),c=qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let l=1/a,h=1/o,d=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),_,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===mn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ls)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),_,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===mn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ls)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qi=new U,Sn=new Mt,Ku=new U(0,0,0),Qu=new U(1,1,1),li=new U,zr=new U,ln=new U,Pc=new Mt,Lc=new gn,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ju=0,Dc=new U,Yi=new gn,Yn=new Mt,kr=new U,Ds=new U,ed=new U,td=new gn,Nc=new U(1,0,0),Uc=new U(0,1,0),Fc=new U(0,0,1),Oc={type:"added"},nd={type:"removed"},Zi={type:"childadded",child:null},Qo={type:"childremoved",child:null},Xt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new An,n=new gn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ds,kr,this.up):Yn.lookAt(kr,Ds,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new U(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},id={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),p=this._getHandJoint(l,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(id)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Xu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jo(a,r,e+1/3),this.g=jo(a,r,e),this.b=jo(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return pt.workingToColorSpace(Kt.copy(this),e),Math.round(ut(Kt.r*255,0,255))*65536+Math.round(ut(Kt.g*255,0,255))*256+Math.round(ut(Kt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ot){pt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Gr);let n=Yo(ci.h,Gr.h,t),s=Yo(ci.s,Gr.s,t),r=Yo(ci.l,Gr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new it;it.NAMES=Vh;var Zs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new U,Zn=new U,el=new U,Jn=new U,Ji=new U,$i=new U,Bc=new U,tl=new U,nl=new U,il=new U,sl=new Rt,rl=new Rt,al=new Rt,fi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),Zn.subVectors(n,t),el.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(Zn),c=bn.dot(el),l=Zn.dot(Zn),h=Zn.dot(el),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return sl.setScalar(0),rl.setScalar(0),al.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),al.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(sl,r.x),a.addScaledVector(rl,r.y),a.addScaledVector(al,r.z),a}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Zn.subVectors(e,t),bn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ji.subVectors(s,n),$i.subVectors(r,n),tl.subVectors(e,n);let c=Ji.dot(tl),l=$i.dot(tl);if(c<=0&&l<=0)return t.copy(n);nl.subVectors(e,s);let h=Ji.dot(nl),d=$i.dot(nl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ji,a);il.subVectors(e,r);let f=Ji.dot(il),_=$i.dot(il);if(_>=0&&f<=_)return t.copy(r);let S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector($i,o);let g=h*_-f*d;if(g<=0&&d-h>=0&&f-_>=0)return Bc.subVectors(r,s),o=(d-h)/(d-h+(f-_)),t.copy(s).addScaledVector(Bc,o);let p=1/(g+S+u);return a=S*p,o=u*p,t.copy(n).addScaledVector(Ji,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Hr.subVectors(this.max,Ns),Ki.subVectors(e.a,Ns),Qi.subVectors(e.b,Ns),ji.subVectors(e.c,Ns),hi.subVectors(Qi,Ki),ui.subVectors(ji,Qi),Ci.subVectors(Ki,ji);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!ol(t,Ki,Qi,ji,Hr)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,Ki,Qi,ji,Hr))?!1:(Wr.crossVectors(hi,ui),t=[Wr.x,Wr.y,Wr.z],ol(t,Ki,Qi,ji,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,Vr=new Nn,Ki=new U,Qi=new U,ji=new U,hi=new U,ui=new U,Ci=new U,Ns=new U,Hr=new U,Wr=new U,Ii=new U;function ol(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ut=new U,Xr=new be,sd=0,Yt=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fh,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=e!==void 0?jl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yu(e,this.array)}};var $s=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ks=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},rd=new Nn,Us=new U,ll=new U,pi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(ll)),this.expandByPoint(Us.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ad=0,pn=new Mt,cl=new Xt,es=new U,cn=new Nn,Fs=new Nn,Vt=new U,Ft=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?Ks:$s)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(cn.min,Fs.min),cn.expandByPoint(Vt),Vt.addVectors(cn.max,Fs.max),cn.expandByPoint(Vt)):(cn.expandByPoint(Fs.min),cn.expandByPoint(Fs.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Vt.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(e,l),Vt.add(es)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new U,c[D]=new U;let h=new U,d=new U,u=new U,f=new be,_=new be,S=new be,g=new U,p=new U;function M(D,R,C){l[D]=l[R]=l[C]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,D),_.fromBufferAttribute(r,R),S.fromBufferAttribute(r,C),d.sub(h),u.sub(h),_.sub(f),S.sub(f);let O=1/(_.x*S.y-S.x*_.y);isFinite(O)&&(g.copy(d).multiplyScalar(S.y).addScaledVector(u,-_.y).multiplyScalar(O),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(O),o[D].add(g),o[R].add(g),o[C].add(g),c[D].add(p),c[R].add(p),c[C].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,R=x.length;D<R;++D){let C=x[D],O=C.start,q=C.count;for(let L=O,G=O+q;L<G;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new U,A=new U,w=new U,m=new U;function b(D){w.fromBufferAttribute(s,D),m.copy(w);let R=o[D];v.copy(R),v.sub(w.multiplyScalar(w.dot(R))).normalize(),A.crossVectors(m,R);let O=A.dot(c[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,O)}for(let D=0,R=n.count;D<R;++D)l[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let _=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,_=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let p=0;p<h;p++)u[_++]=l[f++]}return new Yt(u,h,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hl=new U,od=new U,ld=new Qe,wn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hl.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ld.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cd=0,mi=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Ms,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ll,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Kn=new U,ul=new U,qr=new U,Yr=new U,Ta=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ul.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(ul);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Yr.dot(this.direction),c=-Yr.dot(qr),l=Yr.lengthSq(),h=Math.abs(1-a*a),d,u,f,_;if(h>0)if(d=a*c-o,u=a*o-c,_=r*h,d>=0)if(u>=-_)if(u<=_){let S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ul).addScaledVector(qr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,S=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,x=n.z-a.z,v=Math.abs(c),A=Math.abs(l),w=Math.abs(h),m,b,D,R,C,O,q,L,G,Y,k,oe;if(v>=A&&v>=w?(D=c,O=d,G=_,oe=p,c>=0?(m=l,b=h,R=u,C=f,q=S,L=g,Y=M,k=x):(m=h,b=l,R=f,C=u,q=g,L=S,Y=x,k=M)):A>=w?(D=l,O=u,G=S,oe=M,l>=0?(m=h,b=c,R=f,C=d,q=g,L=_,Y=x,k=p):(m=c,b=h,R=d,C=f,q=_,L=g,Y=p,k=x)):(D=h,O=f,G=g,oe=x,h>=0?(m=c,b=l,R=d,C=u,q=_,L=S,Y=p,k=M):(m=l,b=c,R=u,C=d,q=S,L=_,Y=M,k=p)),D===0)return null;let Z=m/D,ie=b/D,re=1/D,Ie=R-Z*O,We=C-ie*O,ee=q-Z*G,Te=L-ie*G,Pe=Y-Z*oe,Ve=k-ie*oe,we=Pe*Te-Ve*ee,Be=Ie*Ve-We*Pe,gt=ee*We-Te*Ie;if(s){if(we<0||Be<0||gt<0)return null}else if((we<0||Be<0||gt<0)&&(we>0||Be>0||gt>0))return null;let Ce=we+Be+gt;if(Ce===0)return null;let Je=re*(we*O+Be*G+gt*oe);return(Ce>0?Je<0:Je>0)?null:this.at(Je/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zc=new Mt,Pi=new Ta,Zr=new pi,kc=new U,Jr=new U,$r=new U,Kr=new U,dl=new U,Qr=new U,Gc=new U,jr=new U,Pt=class extends Xt{constructor(e=new Ft,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(dl.fromBufferAttribute(d,e),a?Qr.addScaledVector(dl,h):Qr.addScaledVector(dl.sub(t),h))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Zr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Zr,kc)===null||Pi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(zc.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let g=u[_],p=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,A=x;v<A;v+=3){let w=o.getX(v),m=o.getX(v+1),b=o.getX(v+2);s=ea(this,p,e,n,l,h,d,w,m,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let g=_,p=S;g<p;g+=3){let M=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);s=ea(this,a,e,n,l,h,d,M,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let g=u[_],p=a[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,A=x;v<A;v+=3){let w=v,m=v+1,b=v+2;s=ea(this,p,e,n,l,h,d,w,m,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let g=_,p=S;g<p;g+=3){let M=g,x=g+1,v=g+2;s=ea(this,a,e,n,l,h,d,M,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function hd(i,e,t,n,s,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===bi,o),c===null)return null;jr.copy(o),jr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(jr);return l<t.near||l>t.far?null:{distance:l,point:jr.clone(),object:i}}function ea(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Jr),i.getVertexPosition(c,$r),i.getVertexPosition(l,Kr);let h=hd(i,e,t,n,Jr,$r,Kr,Gc);if(h){let d=new U;fi.getBarycoord(Gc,Jr,$r,Kr,d),s&&(h.uv=fi.getInterpolatedAttribute(s,o,c,l,d,new be)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,c,l,d,new be)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new U,materialIndex:0};fi.getNormal(Jr,$r,Kr,u.normal),h.face=u,h.barycoord=d}return h}var Qs=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,h=Wt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new Mt,Vc=new Mt,ta=[],Hc=new Nn,ud=new Mt,Os=new Pt,Bs=new pi,js=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ud)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Hc.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(Hc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Bs.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Vc.multiplyMatrices(n,ts),Os.matrixWorld=Vc,Os.raycast(e,ta);for(let a=0,o=ta.length;a<o;a++){let c=ta[a];c.instanceId=r,c.object=this,t.push(c)}ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(s*this.count),s,this.count,eo,xn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new pi,dd=new be(.5,.5),na=new U,gi=class{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],S=r[9],g=r[10],p=r[11],M=r[12],x=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,f-h,p-_,A-M).normalize(),s[1].setComponents(l+a,f+h,p+_,A+M).normalize(),s[2].setComponents(l+o,f+d,p+S,A+x).normalize(),s[3].setComponents(l-o,f-d,p-S,A-x).normalize(),n)s[4].setComponents(c,u,g,v).normalize(),s[5].setComponents(l-c,f-u,p-g,A-v).normalize();else if(s[4].setComponents(l-c,f-u,p-g,A-v).normalize(),t===mn)s[5].setComponents(l+c,f+u,p+g,A+v).normalize();else if(t===ls)s[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=dd.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wc=new Mt,wa=class i{constructor(){this.coordinateSystem=mn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Wc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new gi),n[s].setFromProjectionMatrix(Wc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var er=class extends Qt{constructor(e=[],t=ki,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ni=class extends Qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends Qt{constructor(e,t,n=En,s,r,a,o=Wt,c=Wt,l,h=ei,d=1){if(h!==ei&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},tr=class extends ti{constructor(e,t=En,n=ki,s,r,a=Wt,o=Wt,c,l=ei){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function _(S,g,p,M,x,v,A,w,m,b,D){let R=v/m,C=A/b,O=v/2,q=A/2,L=w/2,G=m+1,Y=b+1,k=0,oe=0,Z=new U;for(let ie=0;ie<Y;ie++){let re=ie*C-q;for(let Ie=0;Ie<G;Ie++){let We=Ie*R-O;Z[S]=We*M,Z[g]=re*x,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[S]=0,Z[g]=0,Z[p]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ie/m),d.push(1-ie/b),k+=1}}for(let ie=0;ie<b;ie++)for(let re=0;re<m;re++){let Ie=u+re+G*ie,We=u+re+G*(ie+1),ee=u+(re+1)+G*(ie+1),Te=u+(re+1)+G*ie;c.push(Ie,We,Te),c.push(We,ee,Te),oe+=6}o.addGroup(f,oe,D),f+=oe,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _i=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,S=[],g=n/2,p=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function M(){let v=new U,A=new U,w=0,m=(t-e)/n;for(let b=0;b<=r;b++){let D=[],R=b/r,C=R*(t-e)+e;for(let O=0;O<=s;O++){let q=O/s,L=q*c+o,G=Math.sin(L),Y=Math.cos(L);A.x=C*G,A.y=-R*n+g,A.z=C*Y,d.push(A.x,A.y,A.z),v.set(G,m,Y).normalize(),u.push(v.x,v.y,v.z),f.push(q,1-R),D.push(_++)}S.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let R=S[D][b],C=S[D+1][b],O=S[D+1][b+1],q=S[D][b+1];(e>0||D!==0)&&(h.push(R,C,q),w+=3),(t>0||D!==r-1)&&(h.push(C,O,q),w+=3)}l.addGroup(p,w,0),p+=w}function x(v){let A=_,w=new be,m=new U,b=0,D=v===!0?e:t,R=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),_++;let C=_;for(let O=0;O<=s;O++){let L=O/s*c+o,G=Math.cos(L),Y=Math.sin(L);m.x=D*Y,m.y=g*R,m.z=D*G,d.push(m.x,m.y,m.z),u.push(0,R,0),w.x=G*.5+.5,w.y=Y*.5*R+.5,f.push(w.x,w.y),_++}for(let O=0;O<s;O++){let q=A+O,L=C+O;v===!0?h.push(L,L+1,q):h.push(L+1,L,q),b+=3}l.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class i extends _i{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Aa=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let x=new U,v=new U,A=new U;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],v),f(t[w+2],A),c(x,v,A,M)}function c(M,x,v,A){let w=A+1,m=[];for(let b=0;b<=w;b++){m[b]=[];let D=M.clone().lerp(v,b/w),R=x.clone().lerp(v,b/w),C=w-b;for(let O=0;O<=C;O++)O===0&&b===w?m[b][O]=D:m[b][O]=D.clone().lerp(R,O/C)}for(let b=0;b<w;b++)for(let D=0;D<2*(w-b)-1;D++){let R=Math.floor(D/2);D%2===0?(u(m[b][R+1]),u(m[b+1][R]),u(m[b][R])):(u(m[b][R+1]),u(m[b+1][R+1]),u(m[b+1][R]))}}function l(M){let x=new U;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let M=new U;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let v=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(v,1-A)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){let x=a[M+0],v=a[M+2],A=a[M+4],w=Math.max(x,v,A),m=Math.min(x,v,A);w>.9&&m<.1&&(x<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,x){let v=M*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function _(){let M=new U,x=new U,v=new U,A=new U,w=new be,m=new be,b=new be;for(let D=0,R=0;D<r.length;D+=9,R+=6){M.set(r[D+0],r[D+1],r[D+2]),x.set(r[D+3],r[D+4],r[D+5]),v.set(r[D+6],r[D+7],r[D+8]),w.set(a[R+0],a[R+1]),m.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),A.copy(M).add(x).add(v).divideScalar(3);let C=g(A);S(w,R+0,M,C),S(m,R+2,x,C),S(b,R+4,v,C)}}function S(M,x,v,A){A<0&&M.x===1&&(a[x]=M.x-1),v.x===0&&v.z===0&&(a[x]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new be:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,c=new Mt;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ps=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ea=class extends ps{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ec(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Xc=new U,qc=new U,fl=new ec,pl=new ec,ml=new ec,Ui=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(qc.subVectors(s[0],s[1]).add(s[0]),l=qc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),_<1e-4&&(_=S),g<1e-4&&(g=S),fl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,_,S,g),pl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,_,S,g),ml.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,_,S,g)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),pl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ml.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(fl.calc(c),pl.calc(c),ml.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function fd(i,e){let t=1-i;return t*t*e}function pd(i,e){return 2*(1-i)*i*e}function md(i,e){return i*i*e}function Gs(i,e,t,n){return fd(i,e)+pd(i,t)+md(i,n)}function gd(i,e){let t=1-i;return t*t*t*e}function _d(i,e){let t=1-i;return 3*t*t*i*e}function xd(i,e){return 3*(1-i)*i*i*e}function vd(i,e){return i*i*i*e}function Vs(i,e,t,n,s){return gd(i,e)+_d(i,t)+xd(i,n)+vd(i,s)}var sr=class extends un{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(e,s.x,r.x,a.x,o.x),Vs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends un{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(e,s.x,r.x,a.x,o.x),Vs(e,s.y,r.y,a.y,o.y),Vs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rr=class extends un{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends un{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ar=class extends un{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(e,s.x,r.x,a.x),Gs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},or=class extends un{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(e,s.x,r.x,a.x),Gs(e,s.y,r.y,a.y),Gs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Yc(o,c.x,l.x,h.x,d.x),Yc(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Ia=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Ui,CubicBezierCurve:sr,CubicBezierCurve3:Ra,EllipseCurve:ps,LineCurve:rr,LineCurve3:Ca,QuadraticBezierCurve:ar,QuadraticBezierCurve3:or,SplineCurve:lr}),Pa=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ia[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ia[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},cr=class extends Pa{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new rr(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ar(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new sr(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new ps(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xi=class extends cr{constructor(e){super(e),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new cr().fromJSON(s))}return this}};function yd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=wd(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let u=t;u<s;u+=t){let f=i[u],_=i[u+1];f<o&&(o=f),_<c&&(c=_),f>h&&(h=f),_>d&&(d=_)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return hr(r,a,t,o,c,l,0),a}function Hh(i,e,t,n,s){let r;if(s===Fd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Zc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Zc(a/n|0,i[a],i[a+1],r);return r&&ms(r,r.next)&&(dr(r),r=r.next),r}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||It(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Id(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Sd(i,n,s,r):Md(i)){e.push(c.i,i.i,l.i),dr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=bd(Fi(i),e),hr(i,e,t,n,s,r,2)):a===2&&Td(i,e,t,n,s,r):hr(Fi(i),e,t,n,s,r,1);break}}}function Md(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&zs(s,o,r,c,a,l,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Sd(i,e,t,n){let s=i.prev,r=i,a=i.next;if(It(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),_=Math.min(h,d,u),S=Math.max(o,c,l),g=Math.max(h,d,u),p=Ml(f,_,e,t,n),M=Ml(S,g,e,t,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=f&&x.x<=S&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&zs(o,h,c,d,l,u,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=S&&v.y>=_&&v.y<=g&&v!==s&&v!==a&&zs(o,h,c,d,l,u,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=S&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&zs(o,h,c,d,l,u,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=S&&v.y>=_&&v.y<=g&&v!==s&&v!==a&&zs(o,h,c,d,l,u,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ms(n,s)&&Xh(n,t,t.next,s)&&ur(n,s)&&ur(s,n)&&(e.push(n.i,t.i,s.i),dr(t),dr(t.next),t=i=s),t=t.next}while(t!==i);return Fi(t)}function Td(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dd(a,o)){let c=qh(a,o);a=Fi(a,a.next),c=Fi(c,c.next),hr(a,e,t,n,s,r,0),hr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wd(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Hh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ld(l))}s.sort(Ad);for(let r=0;r<s.length;r++)t=Ed(s[r],t);return t}function Ad(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ed(i,e){let t=Rd(i,e);if(!t)return e;let n=qh(t,i);return Fi(n,n.next),Fi(t,t.next)}function Rd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ms(i,t))return t;do{if(ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Wh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);ur(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Cd(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Cd(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function Id(i,e,t,n){let s=i;do s.z===0&&(s.z=Ml(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pd(s)}function Pd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ml(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ld(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Wh(i,e,t,n,s,r,a,o)}function Dd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Nd(i,e)&&(ur(i,e)&&ur(e,i)&&Ud(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||ms(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ms(i,e){return i.x===e.x&&i.y===e.y}function Xh(i,e,t,n){let s=sa(It(i,e,t)),r=sa(It(i,e,n)),a=sa(It(t,n,i)),o=sa(It(t,n,e));return!!(s!==r&&a!==o||s===0&&ia(i,t,e)||r===0&&ia(i,n,e)||a===0&&ia(t,i,n)||o===0&&ia(t,e,n))}function ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sa(i){return i>0?1:i<0?-1:0}function Nd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ur(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function Ud(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qh(i,e){let t=Sl(i.i,i.x,i.y),n=Sl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zc(i,e,t,n){let s=Sl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bl=class{static triangulate(e,t,n=2){return yd(e,t,n)}},Di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jc(e),$c(n,e);let a=e.length;t.forEach(Jc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,$c(n,t[c]);let o=bl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Jc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $c(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends Ft{constructor(e=new xi([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Od,x,v=!1,A,w,m,b;if(p){x=p.getSpacedPoints(h),v=!0,u=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,ae),w=new U,m=new U,b=new U}u||(g=0,f=0,_=0,S=0);let D=o.extractPoints(l),R=D.shape,C=D.holes;if(!Di.isClockWise(R)){R=R.reverse();for(let ae=0,he=C.length;ae<he;ae++){let me=C[ae];Di.isClockWise(me)&&(C[ae]=me.reverse())}}function q(ae){let me=10000000000000001e-36,Re=ae[0];for(let xe=1;xe<=ae.length;xe++){let Ke=xe%ae.length,Ne=ae[Ke],et=Ne.x-Re.x,je=Ne.y-Re.y,lt=et*et+je*je,F=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Re.x),Math.abs(Re.y)),xt=me*F*F;if(lt<=xt){ae.splice(Ke,1),xe--;continue}Re=Ne}}q(R),C.forEach(q);let L=C.length,G=R;for(let ae=0;ae<L;ae++){let he=C[ae];R=R.concat(he)}function Y(ae,he,me){return he||$e("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(he,me)}let k=R.length;function oe(ae,he,me){let Re,xe,Ke,Ne=ae.x-he.x,et=ae.y-he.y,je=me.x-ae.x,lt=me.y-ae.y,F=Ne*Ne+et*et,xt=Ne*lt-et*je;if(Math.abs(xt)>Number.EPSILON){let st=Math.sqrt(F),St=Math.sqrt(je*je+lt*lt),ve=he.x-et/st,bt=he.y+Ne/st,He=me.x-lt/St,Ye=me.y+je/St,E=((He-ve)*lt-(Ye-bt)*je)/(Ne*lt-et*je);Re=ve+Ne*E-ae.x,xe=bt+et*E-ae.y;let y=Re*Re+xe*xe;if(y<=2)return new be(Re,xe);Ke=Math.sqrt(y/2)}else{let st=!1;Ne>Number.EPSILON?je>Number.EPSILON&&(st=!0):Ne<-Number.EPSILON?je<-Number.EPSILON&&(st=!0):Math.sign(et)===Math.sign(lt)&&(st=!0),st?(Re=-et,xe=Ne,Ke=Math.sqrt(F)):(Re=Ne,xe=et,Ke=Math.sqrt(F/2))}return new be(Re/Ke,xe/Ke)}let Z=[];for(let ae=0,he=G.length,me=he-1,Re=ae+1;ae<he;ae++,me++,Re++)me===he&&(me=0),Re===he&&(Re=0),Z[ae]=oe(G[ae],G[me],G[Re]);let ie=[],re,Ie=Z.concat();for(let ae=0,he=L;ae<he;ae++){let me=C[ae];re=[];for(let Re=0,xe=me.length,Ke=xe-1,Ne=Re+1;Re<xe;Re++,Ke++,Ne++)Ke===xe&&(Ke=0),Ne===xe&&(Ne=0),re[Re]=oe(me[Re],me[Ke],me[Ne]);ie.push(re),Ie=Ie.concat(re)}let We;if(g===0)We=Di.triangulateShape(G,C);else{let ae=[],he=[];for(let me=0;me<g;me++){let Re=me/g,xe=f*Math.cos(Re*Math.PI/2),Ke=_*Math.sin(Re*Math.PI/2)+S;for(let Ne=0,et=G.length;Ne<et;Ne++){let je=Y(G[Ne],Z[Ne],Ke);Be(je.x,je.y,-xe),Re===0&&ae.push(je)}for(let Ne=0,et=L;Ne<et;Ne++){let je=C[Ne];re=ie[Ne];let lt=[];for(let F=0,xt=je.length;F<xt;F++){let st=Y(je[F],re[F],Ke);Be(st.x,st.y,-xe),Re===0&&lt.push(st)}Re===0&&he.push(lt)}}We=Di.triangulateShape(ae,he)}let ee=We.length,Te=_+S;for(let ae=0;ae<k;ae++){let he=u?Y(R[ae],Ie[ae],Te):R[ae];v?(m.copy(A.normals[0]).multiplyScalar(he.x),w.copy(A.binormals[0]).multiplyScalar(he.y),b.copy(x[0]).add(m).add(w),Be(b.x,b.y,b.z)):Be(he.x,he.y,0)}for(let ae=1;ae<=h;ae++)for(let he=0;he<k;he++){let me=u?Y(R[he],Ie[he],Te):R[he];v?(m.copy(A.normals[ae]).multiplyScalar(me.x),w.copy(A.binormals[ae]).multiplyScalar(me.y),b.copy(x[ae]).add(m).add(w),Be(b.x,b.y,b.z)):Be(me.x,me.y,d/h*ae)}for(let ae=g-1;ae>=0;ae--){let he=ae/g,me=f*Math.cos(he*Math.PI/2),Re=_*Math.sin(he*Math.PI/2)+S;for(let xe=0,Ke=G.length;xe<Ke;xe++){let Ne=Y(G[xe],Z[xe],Re);Be(Ne.x,Ne.y,d+me)}for(let xe=0,Ke=C.length;xe<Ke;xe++){let Ne=C[xe];re=ie[xe];for(let et=0,je=Ne.length;et<je;et++){let lt=Y(Ne[et],re[et],Re);v?Be(lt.x,lt.y+x[h-1].y,x[h-1].x+me):Be(lt.x,lt.y,d+me)}}}Pe(),Ve();function Pe(){let ae=s.length/3;if(u){let he=0,me=k*he;for(let Re=0;Re<ee;Re++){let xe=We[Re];gt(xe[2]+me,xe[1]+me,xe[0]+me)}he=h+g*2,me=k*he;for(let Re=0;Re<ee;Re++){let xe=We[Re];gt(xe[0]+me,xe[1]+me,xe[2]+me)}}else{for(let he=0;he<ee;he++){let me=We[he];gt(me[2],me[1],me[0])}for(let he=0;he<ee;he++){let me=We[he];gt(me[0]+k*h,me[1]+k*h,me[2]+k*h)}}n.addGroup(ae,s.length/3-ae,0)}function Ve(){let ae=s.length/3,he=0;we(G,he),he+=G.length;for(let me=0,Re=C.length;me<Re;me++){let xe=C[me];we(xe,he),he+=xe.length}n.addGroup(ae,s.length/3-ae,1)}function we(ae,he){let me=ae.length;for(;--me>=0;){let Re=me,xe=me-1;xe<0&&(xe=ae.length-1);for(let Ke=0,Ne=h+g*2;Ke<Ne;Ke++){let et=k*Ke,je=k*(Ke+1),lt=he+Re+et,F=he+xe+et,xt=he+xe+je,st=he+Re+je;Ce(lt,F,xt,st)}}}function Be(ae,he,me){c.push(ae),c.push(he),c.push(me)}function gt(ae,he,me){Je(ae),Je(he),Je(me);let Re=s.length/3,xe=M.generateTopUV(n,s,Re-3,Re-2,Re-1);nt(xe[0]),nt(xe[1]),nt(xe[2])}function Ce(ae,he,me,Re){Je(ae),Je(he),Je(Re),Je(he),Je(me),Je(Re);let xe=s.length/3,Ke=M.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);nt(Ke[0]),nt(Ke[1]),nt(Ke[3]),nt(Ke[1]),nt(Ke[2]),nt(Ke[3])}function Je(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function nt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ia[s.type]().fromJSON(s)),new i(n,e.options)}},Od={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new be(r,a),new be(o,c),new be(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],_=e[s*3+2],S=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new be(a,1-c),new be(l,1-d),new be(u,1-_),new be(S,1-p)]:[new be(o,1-c),new be(h,1-d),new be(f,1-_),new be(g,1-p)]}};function Bd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gs=class i extends Aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Fn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],_=[],S=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let x=0;x<l;x++){let v=x*d-r;_.push(v,-M,0),S.push(0,0,1),g.push(x/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let x=M+l*p,v=M+l*(p+1),A=M+1+l*(p+1),w=M+1+l*p;f.push(x,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ni=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new U,u=new U,f=[],_=[],S=[],g=[];for(let p=0;p<=n;p++){let M=[],x=p/n,v=a+x*o,A=e*Math.cos(v),w=Math.sqrt(e*e-A*A),m=0;p===0&&a===0?m=.5/t:p===n&&c===Math.PI&&(m=-.5/t);for(let b=0;b<=t;b++){let D=b/t,R=s+D*r;d.x=-w*Math.cos(R),d.y=A,d.z=w*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),g.push(D+m,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let x=h[p][M+1],v=h[p][M],A=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(x,v,w),(p!==n-1||c<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fr=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new U,f=new U,_=new U;for(let S=0;S<=n;S++){let g=a+S/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){let p=(s+1)*S+g-1,M=(s+1)*(S-1)+g-1,x=(s+1)*(S-1)+g,v=(s+1)*S+g;c.push(p,M,v),c.push(M,x,v)}this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var _s=class i extends Ft{constructor(e=new or(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,c=new U,l=new be,h=new U,d=[],u=[],f=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function S(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),M(),p()}function g(x){h=e.getPointAt(x/t,h);let v=a.normals[x],A=a.binormals[x];for(let w=0;w<=s;w++){let m=w/s*Math.PI*2,b=Math.sin(m),D=-Math.cos(m);c.x=D*v.x+b*A.x,c.y=D*v.y+b*A.y,c.z=D*v.z+b*A.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){let A=(s+1)*(x-1)+(v-1),w=(s+1)*x+(v-1),m=(s+1)*x+v,b=(s+1)*(x-1)+v;_.push(A,w,b),_.push(w,m,b)}}function M(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)l.x=x/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ia[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kc(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Vi(i[t]);for(let s in n)e[s]=n[s]}return e}function Kc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Yh={clone:Vi,merge:jt},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},La=class extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bn=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Da=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ns(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ra(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ua=class extends vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vl:r=e,o=2*t-n;break;case yl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vl:a=e,c=2*n-t;break;case yl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),S=_*_,g=S*_,p=-u*g+2*u*S-u*_,M=(1+u)*g+(-1.5-2*u)*S+(-.5+u)*_+1,x=(-1-f)*g+(1.5+f)*S+.5*_,v=f*g-f*S;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+M*a[l+A]+x*a[c+A]+v*a[d+A];return r}},Fa=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Oa=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ba=class extends vi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),S=1-_;for(let g=0;g!==o;++g)r[g]=a[l+g]*S+a[c+g]*_;return r}let u=o*2,f=e-1;for(let _=0;_!==o;++_){let S=a[l+_],g=a[c+_],p=f*u+_*2,M=d[p],x=d[p+1],v=e*u+_*2,A=h[v],w=h[v+1],m=Hd(n,t,M,A,s);r[_]=Zh(m,S,x,w,g)}return r}};function Zh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Vd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Hd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Vd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ra(e.settings)&&(n.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case _l:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ra(this.settings)&&(Qc(this.settings.inTangents,e),Qc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ra(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Wu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let S=t[d+_];if(S!==t[u+_]||S!==t[f+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function jc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=va;var yi=class extends dn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Hs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};za.prototype.ValueTypeName="color";var ka=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};ka.prototype.ValueTypeName="number";var Ga=class extends vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)gn.slerpFlat(r,0,a,l-o,a,l,c);return r}},pr=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends dn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Hs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Va.prototype.ValueTypeName="vector";var ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(eh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!eh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function eh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ha=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jh=new Ha,xs=class{constructor(e){this.manager=e!==void 0?e:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xs.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=new WeakMap,Wa=class extends xs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ha.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=is.get(a);d===void 0&&(d=[],is.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=cs("img");function c(){h(),t&&t(this);let d=is.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}is.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),ha.remove(`image:${e}`);let u=is.get(this)||[];for(let f=0;f<u.length;f++){let _=u[f];_.onError&&_.onError(d)}is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ha.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Si=class extends xs{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,a=new Wa(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},mr=class extends Xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gr=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gl=new Mt,th=new U,nh=new U,Xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aa=new U,oa=new gn,Pn=new U,_r=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(aa,oa,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new U,ih=new be,sh=new be,sn=class extends _r{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,ih,sh),t.subVectors(sh,ih)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xr=class extends _r{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tl=class extends Xa{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vr=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Tl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=-90,rs=1,vs=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new sn(ss,rs,e,t);r.layers=this.layers,this.add(r);let a=new sn(ss,rs,e,t);a.layers=this.layers,this.add(a);let o=new sn(ss,rs,e,t);o.layers=this.layers,this.add(o);let c=new sn(ss,rs,e,t);c.layers=this.layers,this.add(c);let l=new sn(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},qa=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var nc="\\[\\]\\.:\\/",Wd=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",Xd="[^"+nc.replace("\\.","")+"]",qd=/((?:WC+[\/:])*)/.source.replace("WC",ic),Yd=/(WCOD+)?/.source.replace("WCOD",Xd),Zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),$d=new RegExp("^"+qd+Yd+Zd+Jd+"$"),Kd=["material","materials","bones","map"],wl=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wd,"")}static parseTrackName(e){let t=$d.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=wl;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j0=new Float32Array(1);var Al=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function sc(i,e,t,n){let s=Qd(n);switch(t){case Xl:return i*e;case eo:return i*e/s.components*s.byteLength;case to:return i*e/s.components*s.byteLength;case Ti:return i*e*2/s.components*s.byteLength;case no:return i*e*2/s.components*s.byteLength;case ql:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case io:return i*e*4/s.components*s.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(e,8)/4;case so:case ao:return Math.max(i,8)*Math.max(e,8)/2;case lo:case co:case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case Er:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Co:case Io:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lo:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rr:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qd(i){switch(i){case on:case Gl:return{byteLength:1,components:1};case bs:case Vl:case Rn:return{byteLength:2,components:1};case Qa:case ja:return{byteLength:2,components:4};case En:case Ka:case xn:return{byteLength:4,components:1};case Hl:case Wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function of(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let S=d[f];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,Sf=`#ifdef USE_BUMPMAP
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jf=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,rp=`uniform sampler2D dfgLUT;
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
}`,ap=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform float backgroundBlurriness;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Am=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Dm=`#define TOON
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
}`,Nm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,zm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:xf,beginnormal_vertex:vf,bsdfs:yf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Af,color_fragment:Ef,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:If,common:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Df,displacementmap_vertex:Nf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Ff,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:zf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Gf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:jf,envmap_vertex:Hf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Qf,lights_toon_fragment:ep,lights_toon_pars_fragment:tp,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:ap,lights_fragment_maps:op,lights_fragment_end:lp,lightprobes_pars_fragment:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:xp,metalnessmap_pars_fragment:vp,morphinstance_vertex:yp,morphcolor_vertex:Mp,morphnormal_vertex:Sp,morphtarget_pars_vertex:bp,morphtarget_vertex:Tp,normal_fragment_begin:wp,normal_fragment_maps:Ap,normal_pars_fragment:Ep,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Np,opaque_fragment:Up,packing:Fp,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:kp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:$p,specularmap_fragment:Kp,specularmap_pars_fragment:Qp,tonemapping_fragment:jp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:hm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distance_vert:mm,distance_frag:gm,equirect_vert:_m,equirect_frag:xm,linedashed_vert:vm,linedashed_frag:ym,meshbasic_vert:Mm,meshbasic_frag:Sm,meshlambert_vert:bm,meshlambert_frag:Tm,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Em,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Im,meshphysical_vert:Pm,meshphysical_frag:Lm,meshtoon_vert:Dm,meshtoon_frag:Nm,points_vert:Um,points_frag:Fm,shadow_vert:Om,shadow_frag:Bm,sprite_vert:zm,sprite_frag:km},Ae={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Vn={basic:{uniforms:jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:jt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:jt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:jt([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:jt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:jt([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:jt([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:jt([Ae.common,Ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:jt([Ae.lights,Ae.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Vn.physical={uniforms:jt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Fo={r:0,b:0,g:0},Gm=new Mt,xu=new Qe;xu.set(-1,0,0,0,1,0,0,0,1);function Vm(i,e,t,n,s,r){let a=new it(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let x=M.isScene===!0?M.background:null;if(x&&x.isTexture){let v=M.backgroundBlurriness>0;x=e.get(x,v)}return x}function _(M){let x=!1,v=f(M);v===null?g(a,o):v&&v.isColor&&(g(v,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,x){let v=f(x);v&&v.isCubeTexture?(l===void 0&&(l=new Pt(new _n(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Vi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(x.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xu),l.material.toneMapped=pt.getTransfer(v.colorSpace)!==yt,(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pt(new Fn(2,2),new On({name:"BackgroundMaterial",uniforms:Vi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,x){M.getRGB(Fo,tc(i)),t.buffers.color.setClear(Fo.r,Fo.g,Fo.b,x,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:_,addToRenderList:S,dispose:p}}function Hm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,O,q,L,G){let Y=!1,k=d(C,L,q,O);r!==k&&(r=k,l(r.object)),Y=f(C,L,q,G),Y&&_(C,L,q,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(C,O,q,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,O,q,L){let G=L.wireframe===!0,Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);let k=C.isInstancedMesh===!0?C.id:0,oe=Y[k];oe===void 0&&(oe={},Y[k]=oe);let Z=oe[q.id];Z===void 0&&(Z={},oe[q.id]=Z);let ie=Z[G];return ie===void 0&&(ie=u(c()),Z[G]=ie),ie}function u(C){let O=[],q=[],L=[];for(let G=0;G<t;G++)O[G]=0,q[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,O,q,L){let G=r.attributes,Y=O.attributes,k=0,oe=q.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let re=G[Z],Ie=Y[Z];if(Ie===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Ie=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Ie=C.instanceColor)),re===void 0||re.attribute!==Ie||Ie&&re.data!==Ie.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function _(C,O,q,L){let G={},Y=O.attributes,k=0,oe=q.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let re=Y[Z];re===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));let Ie={};Ie.attribute=re,re&&re.data&&(Ie.data=re.data),G[Z]=Ie,k++}r.attributes=G,r.attributesNum=k,r.index=L}function S(){let C=r.newAttributes;for(let O=0,q=C.length;O<q;O++)C[O]=0}function g(C){p(C,0)}function p(C,O){let q=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;q[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),G[C]!==O&&(i.vertexAttribDivisor(C,O),G[C]=O)}function M(){let C=r.newAttributes,O=r.enabledAttributes;for(let q=0,L=O.length;q<L;q++)O[q]!==C[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function x(C,O,q,L,G,Y,k){k===!0?i.vertexAttribIPointer(C,O,q,G,Y):i.vertexAttribPointer(C,O,q,L,G,Y)}function v(C,O,q,L){S();let G=L.attributes,Y=q.getAttributes(),k=O.defaultAttributeValues;for(let oe in Y){let Z=Y[oe];if(Z.location>=0){let ie=G[oe];if(ie===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){let re=ie.normalized,Ie=ie.itemSize,We=e.get(ie);if(We===void 0)continue;let ee=We.buffer,Te=We.type,Pe=We.bytesPerElement,Ve=Te===i.INT||Te===i.UNSIGNED_INT||ie.gpuType===Ka;if(ie.isInterleavedBufferAttribute){let we=ie.data,Be=we.isInterleavedBuffer===!0?we.stride:we.itemSize,gt=ie.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let Ce=0;Ce<Z.locationSize;Ce++)p(Z.location+Ce,we.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)g(Z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ce=0;Ce<Z.locationSize;Ce++)x(Z.location+Ce,Ie/Z.locationSize,Te,re,Be*Pe,(gt+Ie/Z.locationSize*Ce)*Pe,Ve)}else{if(ie.isInstancedBufferAttribute){for(let we=0;we<Z.locationSize;we++)p(Z.location+we,ie.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<Z.locationSize;we++)g(Z.location+we);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let we=0;we<Z.locationSize;we++)x(Z.location+we,Ie/Z.locationSize,Te,re,Ie*Pe,Ie/Z.locationSize*we*Pe,Ve)}}else if(k!==void 0){let re=k[oe];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Z.location,re);break;case 3:i.vertexAttrib3fv(Z.location,re);break;case 4:i.vertexAttrib4fv(Z.location,re);break;default:i.vertexAttrib1fv(Z.location,re)}}}}M()}function A(){D();for(let C in n){let O=n[C];for(let q in O){let L=O[q];for(let G in L){let Y=L[G];for(let k in Y)h(Y[k].object),delete Y[k];delete L[G]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let O=n[C.id];for(let q in O){let L=O[q];for(let G in L){let Y=L[G];for(let k in Y)h(Y[k].object),delete Y[k];delete L[G]}}delete n[C.id]}function m(C){for(let O in n){let q=n[O];for(let L in q){let G=q[L];if(G[C.id]===void 0)continue;let Y=G[C.id];for(let k in Y)h(Y[k].object),delete Y[k];delete G[C.id]}}}function b(C){for(let O in n){let q=n[O],L=C.isInstancedMesh===!0?C.id:0,G=q[L];if(G!==void 0){for(let Y in G){let k=G[Y];for(let oe in k)h(k[oe].object),delete k[oe];delete G[Y]}delete q[L],Object.keys(q).length===0&&delete n[O]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:m,initAttributes:S,enableAttribute:g,disableUnusedAttributes:M}}function Wm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Xm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==Cn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let b=m===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==on&&m!==xn&&!b&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ze("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,maxSamples:A,samples:w}}function qm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new wn,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,x=M*4,v=p.clippingState||null;c.value=v,v=h(_,u,x,f);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=c.value,_!==!0||g===null){let p=f+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=f;x!==S;++x,v+=4)a.copy(d[x]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}var Pr=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Bi});r.uniforms.tEquirect.value=t;let a=new Pt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=rn),new vs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$h=256,Ym=3,Zm=20,vu=256,yu=16,Jm=3,$m=new U,Km=new it,Bo=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vs(1,10,null),this._boxMesh=new Pt(new _n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=$m}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(Km));let g=new vs(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=_,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($h,Gh(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===Ss?this._setSize(e.image.length===0?$h:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Kh(e,!1,!1),n=Math.log2(e)-Ym;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Qm(),this._integrationMaterial=jm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/yu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Jm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(vu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=eg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Kh(i,e,t){return new Pr(i,{minFilter:ii,generateMipmaps:e,type:Rn,colorSpace:Ws,depthBuffer:t})}function Lr(i,e,t){return new On({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:an,blending:Bi,depthTest:!1,depthWrite:!1})}function Qm(){return Lr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vu}u

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
	`)}function jm(){return Lr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yu}},`

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
	`)}function eg(){return Lr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zm}
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
	`)}function Qh(){return Lr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function jh(){return Lr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Za||f===Ja)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new Pr(_.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===Za||f===Ja,S=f===ki||f===Ss;if(_||S){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Bo(i)),g=_?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return _&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new Bo(i)),g=_?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Za?u.mapping=ki:f===Ja&&(u.mapping=Ss),u}function c(u){let f=0,_=6;for(let S=0;S<_;S++)u[S]!==void 0&&f++;return f===_}function l(u){let f=u.target;f.removeEventListener("dispose",l);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ng(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ks("WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(e.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(_){let S=_.attributes;for(let g in S)e.update(S[g],i.ARRAY_BUFFER)}function d(_){let S=_.index,g=_.attributes.position,p=0;if(g===void 0)return;let M=S!==null?S.array.length:g.array.length/3-1,x=g.count>=65535?Ks:$s,v=new x(Math.ceil(M/3)*6,1),A=v.array;if(S!==null){let m=S.array;p=S.version;for(let b=0,D=0;b<M;b+=3){let R=m[b+0],C=m[b+1],O=m[b+2];A[D++]=R,A[D++]=C,A[D++]=C,A[D++]=O,A[D++]=O,A[D++]=R}}else{p=g.version;for(let m=0,b=0;m<M;m+=3){let D=m+0,R=m+1,C=m+2;A[b++]=D,A[b++]=R,A[b++]=R,A[b++]=C,A[b++]=C,A[b++]=D}}v.version=p;let w=r.get(_);w&&e.remove(w),r.set(_,v)}function u(_){let S=r.get(_);if(S){let g=_.index;g!==null&&S.version<g.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let S=s[_].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function sg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let g=0;g<f;g++)S+=u[g];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function rg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ag(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let D=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],x=0;f===!0&&(x=1),_===!0&&(x=2),S===!0&&(x=3);let v=o.attributes.position.count*x,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*A*4*d),m=new qs(w,v,A,d);m.type=xn,m.needsUpdate=!0;let b=x*4;for(let R=0;R<d;R++){let C=g[R],O=p[R],q=M[R],L=v*A*4*R;for(let G=0;G<C.count;G++){let Y=G*b;f===!0&&(s.fromBufferAttribute(C,G),w[L+Y+0]=s.x,w[L+Y+1]=s.y,w[L+Y+2]=s.z,w[L+Y+3]=0),_===!0&&(s.fromBufferAttribute(O,G),w[L+Y+4]=s.x,w[L+Y+5]=s.y,w[L+Y+6]=s.z,w[L+Y+7]=0),S===!0&&(s.fromBufferAttribute(q,G),w[L+Y+8]=s.x,w[L+Y+9]=s.y,w[L+Y+10]=s.z,w[L+Y+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:m,size:new be(v,A)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function og(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var lg={[Nl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Mr]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[zl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function cg(i,e,t,n,s,r){let a=new hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ft;h.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mt([0,2,0,0,2,0],2));let d=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Pt(h,d),f=new xr(-1,1,1,-1,0,1),_=null,S=null,g=!1,p,M=null,x=[],v=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),c!==null&&c.setSize(A,w);for(let m=0;m<x.length;m++){let b=x[m];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){x=A,v=x.length>0&&x[0].isRenderPass===!0;let w=a.width,m=a.height;x.length>0&&o===null&&(o=new hn(w,m,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(w,m,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&x.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new ti(w,m),r===!0&&(l.format=si,l.type=Gi)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<x.length;D++){let R=x[D];R.setSize&&R.setSize(w,m),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(A,w){if(g||A.toneMapping===kn&&x.length===0)return!1;if(M=w,w!==null){let m=w.width,b=w.height;(a.width!==m||a.height!==b)&&this.setSize(m,b)}return v===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=kn,!0},this.hasRenderPass=function(){return v},this.end=function(A,w){A.toneMapping=p,g=!0;let m=a,b=o;for(let D=0;D<x.length;D++){let R=x[D];R.enabled!==!1&&(R.render(A,b,m,w),R.needsSwap!==!1&&(m=b,b=b===o?c:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,d.defines={},pt.getTransfer(_)===yt&&(d.defines.SRGB_TRANSFER="");let D=lg[S];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,A.setRenderTarget(M),A.render(u,f),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Mu=new Qt,Su=new ti(1,1),bu=new tr(1),Tu=new qs,wu=new ba,Au=new er,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function As(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),zt(t,n)}}function mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),zt(t,n)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),zt(t,n)}}function _g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Go(i){return i.version===0&&(i.compareFunction=Jl,i.needsUpdate=!0),i}function wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Go(Su):r=Mu,t.setTexture2D(e||r,s)}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wu,s)}function Eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Go(bu):r=Au,t.setTextureCube(e||r,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tu,s)}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Rg}}function Ig(i,e){i.uniform1fv(this.addr,e)}function Pg(i,e){let t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){let t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){let t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function Ng(i,e){let t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ug(i,e){let t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fg(i,e){let t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Og(i,e){i.uniform1iv(this.addr,e)}function Bg(i,e){i.uniform2iv(this.addr,e)}function zg(i,e){i.uniform3iv(this.addr,e)}function kg(i,e){i.uniform4iv(this.addr,e)}function Gg(i,e){i.uniform1uiv(this.addr,e)}function Vg(i,e){i.uniform2uiv(this.addr,e)}function Hg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function Xg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Go(Su):a=Mu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wu,r[a])}function Yg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Go(bu):a=Au;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Zg(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tu,r[a])}function Jg(i){switch(i){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Gg;case 36294:return Vg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cg(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}},cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function $g(i,e,t){let n=i.name,s=n.length;for(rc.lastIndex=0;;){let r=rc.exec(n),a=rc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ru(t,l===void 0?new oc(o,i,e):new lc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new cc(o),ru(t,d)),t=d}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);$g(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Kg=37297,Qg=0;function jg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ou=new Qe;function e0(i){pt._getMatrix(ou,pt.workingColorSpace,i);let e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Xs:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(e),o)}else return r}function t0(i,e){let t=e0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var n0={[Nl]:"Linear",[Ul]:"Reinhard",[Fl]:"Cineon",[Mr]:"ACESFilmic",[Bl]:"AgX",[zl]:"Neutral",[Ol]:"Custom"};function i0(i,e){let t=n0[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oo=new U;function s0(){pt.getLuminanceCoefficients(Oo);let i=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function a0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ir(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(l0,c0)}function c0(i,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hc(t)}var h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(h0,u0)}function u0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var d0={[yr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function f0(i){return d0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var p0={[Ss]:"ENVMAP_MODE_REFRACTION"};function m0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var g0={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[wh]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function _0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g0[i.combine]||"ENVMAP_BLENDING_NONE"}function x0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=f0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=m0(t),d=_0(t),u=r0(t),f=a0(r),_=s.createProgram(),S,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ir).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ir).join(`
`),g.length>0&&(g+=`
`)):(S=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),g=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?rt.tonemapping_pars_fragment:"",t.toneMapping!==kn?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=hc(a),a=cu(a,t),a=hu(a,t),o=hc(o),o=cu(o,t),o=hu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=p+S+a,x=p+g+o,v=au(s,s.VERTEX_SHADER,M),A=au(s,s.FRAGMENT_SHADER,x);s.attachShader(_,v),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(v)||"",q=s.getShaderInfoLog(A)||"",L=C.trim(),G=O.trim(),Y=q.trim(),k=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,A);else{let Z=lu(s,v,"vertex"),ie=lu(s,A,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Z+`
`+ie)}else L!==""?Ze("WebGLProgram: Program Info Log:",L):(G===""||Y==="")&&(oe=!1);oe&&(R.diagnostics={runnable:k,programLog:L,vertexShader:{log:G,prefix:S},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(v),s.deleteShader(A),m=new ws(s,_),b=o0(s,_)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,Kg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=A,this}var v0=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dc(e),t.set(e,n)),n}},dc=class{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}};function y0(i){return i===Ti||i===Er||i===Rr}function M0(i,e,t,n,s,r){let a=new Ys,o=new uc,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}function _(m,b,D,R,C,O){let q=R.fog,L=C.geometry,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?R.environment:null,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,k=e.get(m.envMap||G,Y),oe=u[m.type],Z=n.precision;m.precision!==null&&(Z=n.getMaxPrecision(m.precision),Z!==m.precision&&Ze("WebGLProgram.getParameters:",m.precision,"not supported, using",Z,"instead."));let ie=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=ie!==void 0?ie.length:0,Ie=0;L.morphAttributes.position!==void 0&&(Ie=1),L.morphAttributes.normal!==void 0&&(Ie=2),L.morphAttributes.color!==void 0&&(Ie=3);let We,ee,Te,Pe;if(oe){let z=Vn[oe];We=z.vertexShader,ee=z.fragmentShader}else{We=m.vertexShader,ee=m.fragmentShader;let z=o.getVertexShaderStage(m),ne=o.getFragmentShaderStage(m);o.update(m,z,ne),Te=z.id,Pe=ne.id}let Ve=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Be=C.isInstancedMesh===!0,gt=C.isBatchedMesh===!0,Ce=!!m.map,Je=!!m.matcap,nt=!!k,ae=nt&&k.isPMREMTexture===!0,he=!!m.aoMap,me=!!m.lightMap,Re=!!m.bumpMap&&m.wireframe===!1,xe=!!m.normalMap,Ke=!!m.displacementMap,Ne=!!m.emissiveMap,et=!!m.metalnessMap,je=!!m.roughnessMap,lt=m.anisotropy>0,F=m.clearcoat>0,xt=m.diffuseRoughness>0,st=m.dispersion>0,St=m.retroreflectivity>0,ve=m.iridescence>0,bt=m.sheen>0,He=m.transmission>0,Ye=lt&&!!m.anisotropyMap,E=F&&!!m.clearcoatMap,y=F&&!!m.clearcoatNormalMap,V=F&&!!m.clearcoatRoughnessMap,ce=xt&&!!m.diffuseRoughnessMap,se=ve&&!!m.iridescenceMap,de=ve&&!!m.iridescenceThicknessMap,_e=bt&&!!m.sheenColorMap,Q=bt&&!!m.sheenRoughnessMap,K=!!m.specularMap,ge=!!m.specularColorMap,I=!!m.specularIntensityMap,j=He&&!!m.transmissionMap,$=He&&!!m.thicknessMap,fe=!!m.gradientMap,ue=!!m.alphaMap,pe=m.alphaTest>0,ze=!!m.alphaHash,B=!!m.extensions,P=kn;m.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(P=i.toneMapping);let W=ae?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,te={shaderID:oe,shaderType:m.type,shaderName:m.name,vertexShader:We,fragmentShader:ee,defines:m.defines,customVertexShaderID:Te,customFragmentShaderID:Pe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:Z,batching:gt,batchingColor:gt&&C._colorsTexture!==null,instancing:Be,instancingColor:Be&&C.instanceColor!==null,instancingMorph:Be&&C.morphTexture!==null,outputColorSpace:Ve===null?i.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ce,matcap:Je,envMap:nt,envMapMode:nt&&k.mapping,envMapPMREM:ae,envMapMaxLod:ae?W.length-1:null,envMapSize:ae?W[0].width:null,aoMap:he,lightMap:me,bumpMap:Re,normalMap:xe,displacementMap:Ke,emissiveMap:Ne,normalMapObjectSpace:xe&&m.normalMapType===Ch,normalMapTangentSpace:xe&&m.normalMapType===Uo,packedNormalMap:xe&&m.normalMapType===Uo&&y0(m.normalMap.format),metalnessMap:et,roughnessMap:je,anisotropy:lt,anisotropyMap:Ye,clearcoat:F,clearcoatMap:E,clearcoatNormalMap:y,clearcoatRoughnessMap:V,diffuseRoughness:xt,diffuseRoughnessMap:ce,dispersion:st,retroreflection:St,iridescence:ve,iridescenceMap:se,iridescenceThicknessMap:de,sheen:bt,sheenColorMap:_e,sheenRoughnessMap:Q,specularMap:K,specularColorMap:ge,specularIntensityMap:I,transmission:He,transmissionMap:j,thicknessMap:$,gradientMap:fe,opaque:m.transparent===!1&&m.blending===Ms&&m.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:ze,combine:m.combine,mapUv:Ce&&f(m.map.channel),aoMapUv:he&&f(m.aoMap.channel),lightMapUv:me&&f(m.lightMap.channel),bumpMapUv:Re&&f(m.bumpMap.channel),normalMapUv:xe&&f(m.normalMap.channel),displacementMapUv:Ke&&f(m.displacementMap.channel),emissiveMapUv:Ne&&f(m.emissiveMap.channel),metalnessMapUv:et&&f(m.metalnessMap.channel),roughnessMapUv:je&&f(m.roughnessMap.channel),anisotropyMapUv:Ye&&f(m.anisotropyMap.channel),clearcoatMapUv:E&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:de&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(m.sheenRoughnessMap.channel),specularMapUv:K&&f(m.specularMap.channel),specularColorMapUv:ge&&f(m.specularColorMap.channel),specularIntensityMapUv:I&&f(m.specularIntensityMap.channel),transmissionMapUv:j&&f(m.transmissionMap.channel),thicknessMapUv:$&&f(m.thicknessMap.channel),alphaMapUv:ue&&f(m.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xe||lt),vertexNormals:!!L.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Ce||ue),fog:!!q,useFog:m.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||L.attributes.normal===void 0&&xe===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(z=>z.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:P,decodeVideoTexture:Ce&&m.map.isVideoTexture===!0&&pt.getTransfer(m.map.colorSpace)===yt,decodeVideoTextureEmissive:Ne&&m.emissiveMap.isVideoTexture===!0&&pt.getTransfer(m.emissiveMap.colorSpace)===yt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===zn,flipSided:m.side===an,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:B&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&m.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function S(m){let b=[];if(m.shaderID?b.push(m.shaderID):(b.push(m.customVertexShaderID),b.push(m.customFragmentShaderID)),m.defines!==void 0)for(let D in m.defines)b.push(D),b.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(g(b,m),p(b,m),b.push(i.outputColorSpace)),b.push(m.customProgramCacheKey),b.join()}function g(m,b){m.push(b.precision),m.push(b.outputColorSpace),m.push(b.envMapMode),m.push(b.envMapPMREM),m.push(b.envMapMaxLod),m.push(b.envMapSize),m.push(b.mapUv),m.push(b.alphaMapUv),m.push(b.lightMapUv),m.push(b.aoMapUv),m.push(b.bumpMapUv),m.push(b.normalMapUv),m.push(b.displacementMapUv),m.push(b.emissiveMapUv),m.push(b.metalnessMapUv),m.push(b.roughnessMapUv),m.push(b.anisotropyMapUv),m.push(b.clearcoatMapUv),m.push(b.clearcoatNormalMapUv),m.push(b.clearcoatRoughnessMapUv),m.push(b.diffuseRoughnessMapUv),m.push(b.iridescenceMapUv),m.push(b.iridescenceThicknessMapUv),m.push(b.sheenColorMapUv),m.push(b.sheenRoughnessMapUv),m.push(b.specularMapUv),m.push(b.specularColorMapUv),m.push(b.specularIntensityMapUv),m.push(b.transmissionMapUv),m.push(b.thicknessMapUv),m.push(b.combine),m.push(b.fogExp2),m.push(b.sizeAttenuation),m.push(b.morphTargetsCount),m.push(b.numSunLights),m.push(b.numDirLights),m.push(b.numPointLights),m.push(b.numSpotLights),m.push(b.numSpotLightMaps),m.push(b.numHemiLights),m.push(b.numRectAreaLights),m.push(b.numSunLightShadows),m.push(b.numDirLightShadows),m.push(b.numPointLightShadows),m.push(b.numSpotLightShadows),m.push(b.numSpotLightShadowsWithMaps),m.push(b.numLightProbes),m.push(b.numLightProbeGrids),m.push(b.shadowMapType),m.push(b.toneMapping),m.push(b.numClippingPlanes),m.push(b.numClipIntersection),m.push(b.depthPacking)}function p(m,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function M(m){let b=u[m.type],D;if(b){let R=Vn[b];D=Yh.clone(R.uniforms)}else D=m.uniforms;return D}function x(m,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new x0(i,b,m,s),l.push(D),h.set(b,D)),D}function v(m){if(--m.usedTimes===0){let b=l.indexOf(m);l[b]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}}function A(m){o.remove(m)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:M,acquireProgram:x,releaseProgram:v,releaseShaderCache:A,programs:l,dispose:w}}function S0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function b0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,S,g,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=g,M.group=p),e++,M}function c(u,f,_,S,g,p,M){M.reversedDepth===!0&&(g=-g);let x=o(u,f,_,S,g,p);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function l(u,f,_,S,g,p){let M=o(u,f,_,S,g,p);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||b0),n.length>1&&n.sort(f||fu),s.length>1&&s.sort(f||fu)}function d(){for(let u=e,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function T0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function w0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new it};break;case"SpotLight":t={position:new U,direction:new U,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function A0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var E0=0;function R0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i){let e=new w0,t=A0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Mt,a=new Mt;function o(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,_=0,S=0,g=0,p=0,M=0,x=0,v=0,A=0,w=0,m=0,b=0,D=0,R=0;l.sort(R0);for(let O=0,q=l.length;O<q;O++){let L=l[O],G=L.color,Y=L.intensity,k=L.distance,oe=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ti?oe=L.shadow.map.texture:oe=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*Y,d+=G.g*Y,u+=G.b*Y;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],Y);R++}else if(L.isSunLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ie=L.shadow,re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[_]=re,n.sunShadowMap[_]=oe;let Ie=ie.getViewportCount();for(let We=0;We<Ie;We++)n.sunShadowMatrix[S+We]=ie.getMatrix(We),n.sunShadowCascade[S+We]=ie._cascadeData[We];S+=Ie,_++}n.sun[f]=Z,f++}else if(L.isDirectionalLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ie=L.shadow,re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.directionalShadow[g]=re,n.directionalShadowMap[g]=oe,n.directionalShadowMatrix[g]=L.shadow.matrix,A++}n.directional[g]=Z,g++}else if(L.isSpotLight){let Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(G).multiplyScalar(Y),Z.distance=k,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[M]=Z;let ie=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,ie.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[M]=ie.matrix,L.castShadow){let re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.spotShadow[M]=re,n.spotShadowMap[M]=oe,m++}M++}else if(L.isRectAreaLight){let Z=e.get(L);Z.color.copy(G).multiplyScalar(Y),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=Z,x++}else if(L.isPointLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let ie=L.shadow,re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=oe,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(Y),Z.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[v]=Z,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==x||C.hemiLength!==v||C.numSunShadows!==_||C.numDirectionalShadows!==A||C.numPointShadows!==w||C.numSpotShadows!==m||C.numSpotMaps!==b||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=p,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,C.sunLength=f,C.directionalLength=g,C.pointLength=p,C.spotLength=M,C.rectAreaLength=x,C.hemiLength=v,C.numSunShadows=_,C.numDirectionalShadows=A,C.numPointShadows=w,C.numSpotShadows=m,C.numSpotMaps=b,C.numLightProbes=R,n.version=E0++)}function c(l,h){let d=0,u=0,f=0,_=0,S=0,g=0,p=h.matrixWorldInverse;for(let M=0,x=l.length;M<x;M++){let v=l[M];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(v.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(v.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function mu(i){let e=new C0(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function I0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mu(i),e.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`,D0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],N0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],gu=new Mt,Cr=new U,ac=new U;function U0(i,e,t){let n=new gi,s=new be,r=new be,a=new Rt,o=new Da,c=new Na,l={},h=t.maxTextureSize,d={[bi]:an,[an]:bi,[zn]:zn},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:P0,fragmentShader:L0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ft;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Pt(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let p=this.type;this.render=function(w,m,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Ya&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yr);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=p!==this.type;q&&m.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=w.length;L<G;L++){let Y=w[L],k=Y.shadow;if(k===void 0){Ze("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let oe=k.getFrameExtents();s.multiply(oe),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,k.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Z,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ys){if(Y.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new hn(s.x,s.y,{format:Ti,type:Rn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new ti(s.x,s.y,xn),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Wt,k.map.depthTexture.magFilter=Wt}else Y.isPointLight?(k.map=new Pr(s.x),k.map.depthTexture=new tr(s.x,En)):(k.map=new hn(s.x,s.y),k.map.depthTexture=new ti(s.x,s.y,En)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=ei,this.type===yr?(k.map.depthTexture.compareFunction=Z?Zl:Yl,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Wt,k.map.depthTexture.magFilter=Wt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let ie=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,b);let re=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:b.layers;for(let Ie=0;Ie<ie;Ie++){let We=k.getCamera(Ie);if(Y.isPointLight){let ee=k.camera,Te=k.matrix,Pe=Y.distance||ee.far;Pe!==ee.far&&(ee.far=Pe,ee.updateProjectionMatrix()),Cr.setFromMatrixPosition(Y.matrixWorld),ee.position.copy(Cr),ac.copy(ee.position),ac.add(D0[Ie]),ee.up.copy(N0[Ie]),ee.lookAt(ac),ee.updateMatrixWorld(),Te.makeTranslation(-Cr.x,-Cr.y,-Cr.z),gu.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(gu,ee.coordinateSystem,ee.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(k.map),i.clear());let ee=k.getViewport(Ie);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),O.viewport(a)}n=k.getFrustum(Ie),v(m,b,We,Y,re,this.type)}k.isPointLightShadow!==!0&&this.type===ys&&M(k,b),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(D,R,C)};function M(w,m){let b=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(s.x,s.y,{format:Ti,type:Rn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(m,null,b,u,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(m,null,b,f,S,null)}function x(w,m,b,D){let R=null,C=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)R=C;else if(R=b.isPointLight===!0?c:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let O=R.uuid,q=m.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let G=L[q];G===void 0&&(G=R.clone(),L[q]=G,m.addEventListener("dispose",A)),R=G}if(R.visible=m.visible,R.wireframe=m.wireframe,D===ys?R.side=m.shadowSide!==null?m.shadowSide:m.side:R.side=m.shadowSide!==null?m.shadowSide:d[m.side],R.alphaMap=m.alphaMap,R.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,R.map=m.map,R.clipShadows=m.clipShadows,R.clippingPlanes=m.clippingPlanes,R.clipIntersection=m.clipIntersection,R.displacementMap=m.displacementMap,R.displacementScale=m.displacementScale,R.displacementBias=m.displacementBias,R.wireframeLinewidth=m.wireframeLinewidth,R.linewidth=m.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=b}return R}function v(w,m,b,D,R,C){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ys)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=e.update(w),G=w.material;if(Array.isArray(G)){let Y=L.groups;for(let k=0,oe=Y.length;k<oe;k++){let Z=Y[k],ie=G[Z.materialIndex];if(ie&&ie.visible){let re=x(w,ie,D,C);w.onBeforeShadow(i,w,m,b,L,re,Z),i.renderBufferDirect(b,null,L,re,w,Z),w.onAfterShadow(i,w,m,b,L,re,Z)}}}else if(G.visible){let Y=x(w,G,D,C);w.onBeforeShadow(i,w,m,b,L,Y,null),i.renderBufferDirect(b,null,L,Y,w,null),w.onAfterShadow(i,w,m,b,L,Y,null)}}let q=w.children;for(let L=0,G=q.length;L<G;L++)v(q[L],m,b,D,R,C)}function A(w){w.target.removeEventListener("dispose",A);for(let b in l){let D=l[b],R=w.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function F0(i,e){function t(){let I=!1,j=new Rt,$=null,fe=new Rt(0,0,0,0);return{setMask:function(ue){$!==ue&&!I&&(i.colorMask(ue,ue,ue,ue),$=ue)},setLocked:function(ue){I=ue},setClear:function(ue,pe,ze,B,P){P===!0&&(ue*=B,pe*=B,ze*=B),j.set(ue,pe,ze,B),fe.equals(j)===!1&&(i.clearColor(ue,pe,ze,B),fe.copy(j))},reset:function(){I=!1,$=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,j=!1,$=null,fe=null,ue=null;return{setReversed:function(pe){if(j!==pe){let ze=e.get("EXT_clip_control");pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),j=pe;let B=ue;ue=null,this.setClear(B)}},getReversed:function(){return j},setTest:function(pe){pe?we(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(pe){$!==pe&&!I&&(i.depthMask(pe),$=pe)},setFunc:function(pe){if(j&&(pe=kh[pe]),fe!==pe){switch(pe){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ue!==pe&&(ue=pe,j&&(pe=1-pe),i.clearDepth(pe))},reset:function(){I=!1,$=null,fe=null,ue=null,j=!1}}}function s(){let I=!1,j=null,$=null,fe=null,ue=null,pe=null,ze=null,B=null,P=null;return{setTest:function(W){I||(W?we(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(W){j!==W&&!I&&(i.stencilMask(W),j=W)},setFunc:function(W,te,z){($!==W||fe!==te||ue!==z)&&(i.stencilFunc(W,te,z),$=W,fe=te,ue=z)},setOp:function(W,te,z){(pe!==W||ze!==te||B!==z)&&(i.stencilOp(W,te,z),pe=W,ze=te,B=z)},setLocked:function(W){I=W},setClear:function(W){P!==W&&(i.clearStencil(W),P=W)},reset:function(){I=!1,j=null,$=null,fe=null,ue=null,pe=null,ze=null,B=null,P=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],S=null,g=!1,p=null,M=null,x=null,v=null,A=null,w=null,m=null,b=new it(0,0,0),D=0,R=!1,C=null,O=null,q=null,L=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=oe>=2);let ie=null,re={},Ie=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),ee=new Rt().fromArray(Ie),Te=new Rt().fromArray(We);function Pe(I,j,$,fe){let ue=new Uint8Array(4),pe=i.createTexture();i.bindTexture(I,pe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<$;ze++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(j+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return pe}let Ve={};Ve[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ve[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),we(i.DEPTH_TEST),a.setFunc(os),Re(!1),xe(El),we(i.CULL_FACE),he(Bi);function we(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Be(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function gt(I,j){return u[I]!==j?(i.bindFramebuffer(I,j),u[I]=j,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ce(I,j){let $=_,fe=!1;if(I){$=f.get(j),$===void 0&&($=[],f.set(j,$));let ue=I.textures;if($.length!==ue.length||$[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,ze=ue.length;pe<ze;pe++)$[pe]=i.COLOR_ATTACHMENT0+pe;$.length=ue.length,fe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,fe=!0);fe&&i.drawBuffers($)}function Je(I){return S!==I?(i.useProgram(I),S=I,!0):!1}let nt={[zi]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};nt[hh]=i.MIN,nt[uh]=i.MAX;let ae={[dh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[xh]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[_h]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[bh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function he(I,j,$,fe,ue,pe,ze,B,P,W){if(I===Bi){g===!0&&(Be(i.BLEND),g=!1);return}if(g===!1&&(we(i.BLEND),g=!0),I!==oh){if(I!==p||W!==R){if((M!==zi||A!==zi)&&(i.blendEquation(i.FUNC_ADD),M=zi,A=zi),W)switch(I){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",I);break}else switch(I){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",I);break}x=null,v=null,w=null,m=null,b.set(0,0,0),D=0,p=I,R=W}return}ue=ue||j,pe=pe||$,ze=ze||fe,(j!==M||ue!==A)&&(i.blendEquationSeparate(nt[j],nt[ue]),M=j,A=ue),($!==x||fe!==v||pe!==w||ze!==m)&&(i.blendFuncSeparate(ae[$],ae[fe],ae[pe],ae[ze]),x=$,v=fe,w=pe,m=ze),(B.equals(b)===!1||P!==D)&&(i.blendColor(B.r,B.g,B.b,P),b.copy(B),D=P),p=I,R=!1}function me(I,j){I.side===zn?Be(i.CULL_FACE):we(i.CULL_FACE);let $=I.side===an;j&&($=!$),Re($),I.blending===Ms&&I.transparent===!1?he(Bi):he(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){C!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),C=I)}function xe(I){I!==rh?(we(i.CULL_FACE),I!==O&&(I===El?i.cullFace(i.BACK):I===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),O=I}function Ke(I){I!==q&&(k&&i.lineWidth(I),q=I)}function Ne(I,j,$){I?(we(i.POLYGON_OFFSET_FILL),(L!==j||G!==$)&&(L=j,G=$,a.getReversed()&&(j=-j,$=-$),i.polygonOffset(j,$))):Be(i.POLYGON_OFFSET_FILL)}function et(I){I?we(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function je(I){I===void 0&&(I=i.TEXTURE0+Y-1),ie!==I&&(i.activeTexture(I),ie=I)}function lt(I,j,$){$===void 0&&(ie===null?$=i.TEXTURE0+Y-1:$=ie);let fe=re[$];fe===void 0&&(fe={type:void 0,texture:void 0},re[$]=fe),(fe.type!==I||fe.texture!==j)&&(ie!==$&&(i.activeTexture($),ie=$),i.bindTexture(I,j||Ve[I]),fe.type=I,fe.texture=j)}function F(){let I=re[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function St(){try{i.texSubImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function ve(){try{i.texSubImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function bt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function Ye(){try{i.texStorage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function E(){try{i.texStorage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function y(){try{i.texImage2D(...arguments)}catch(I){$e("WebGLState:",I)}}function V(){try{i.texImage3D(...arguments)}catch(I){$e("WebGLState:",I)}}function ce(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function se(I,j){d[I]!==j&&(i.pixelStorei(I,j),d[I]=j)}function de(I){ee.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function _e(I){Te.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Te.copy(I))}function Q(I,j){let $=l.get(j);$===void 0&&($=new WeakMap,l.set(j,$));let fe=$.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(j,I.name),i.uniformBlockBinding(j,fe,fe),$.set(I,fe))}function K(I,j,$){let ue=l.get(j).get(I);c[ue]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,ue,$),c[ue]=$)}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,re={},u={},c={},f=new WeakMap,_=[],S=null,g=!1,p=null,M=null,x=null,v=null,A=null,w=null,m=null,b=new it(0,0,0),D=0,R=!1,C=null,O=null,q=null,L=null,G=null,ee.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:we,disable:Be,bindFramebuffer:gt,drawBuffers:Ce,useProgram:Je,setBlending:he,setMaterial:me,setFlipSided:Re,setCullFace:xe,setLineWidth:Ke,setPolygonOffset:Ne,setScissorTest:et,activeTexture:je,bindTexture:lt,unbindTexture:F,compressedTexImage2D:xt,compressedTexImage3D:st,texImage2D:y,texImage3D:V,pixelStorei:se,getParameter:ce,updateUBOMapping:Q,uniformBlockBinding:K,texStorage2D:Ye,texStorage3D:E,texSubImage2D:St,texSubImage3D:ve,compressedTexSubImage2D:bt,compressedTexSubImage3D:He,scissor:de,viewport:_e,reset:ge}}function O0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,S=new FinalizationRegistry(E=>_.delete(E)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,y){return g?new OffscreenCanvas(E,y):cs("canvas")}function M(E,y,V){let ce=1,se=Ye(E);if((se.width>V||se.height>V)&&(ce=V/Math.max(se.width,se.height)),ce<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let de=Math.floor(ce*se.width),_e=Math.floor(ce*se.height);u===void 0&&(u=p(de,_e));let Q=y?p(de,_e):u;return Q.width=de,Q.height=_e,Q.getContext("2d").drawImage(E,0,0,de,_e),Ze("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+de+"x"+_e+")."),Q}else return"data"in E&&Ze("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function x(E){return E.generateMipmaps}function v(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,y,V,ce,se,de=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let _e;ce&&(_e=e.get("EXT_texture_norm16"),_e||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8),V===i.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),V===i.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),y===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8),V===i.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),V===i.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),V===i.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),y===i.RGBA){let K=de?Xs:pt.getTransfer(se);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=K===yt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),V===i.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function m(E,y){let V;return E?y===null||y===En||y===Gi?V=i.DEPTH24_STENCIL8:y===xn?V=i.DEPTH32F_STENCIL8:y===bs&&(V=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===En||y===Gi?V=i.DEPTH_COMPONENT24:y===xn?V=i.DEPTH_COMPONENT32F:y===bs&&(V=i.DEPTH_COMPONENT16),V}function b(E,y){return x(E)===!0||E.isFramebufferTexture&&E.minFilter!==Wt&&E.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function D(E){let y=new WeakRef(E);n.get(E).__ref=y,_.add(y),S.register(E,y,y)}function R(E){let y=n.get(E).__ref;y!==void 0&&(_.delete(y),S.unregister(y))}function C(E){q(E.target)}function O(E){L(E.target)}function q(E){E.removeEventListener("dispose",C),R(E),Y(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function L(E){E.removeEventListener("dispose",O),R(E),oe(E)}function G(){for(let E of _){let y=E.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):q(y))}_.clear(),d.clear()}function Y(E){let y=n.get(E);if(y.__webglInit===void 0)return;let V=E.source,ce=f.get(V);if(ce){let se=ce[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&k(E),Object.keys(ce).length===0&&f.delete(V)}n.remove(E)}function k(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let V=E.source,ce=f.get(V);delete ce[y.__cacheKey],a.memory.textures--}function oe(E){let y=n.get(E);y.__depthDisposeCallback&&y.__depthDisposeCallback();let V=E.depthTexture;if(V&&V.renderTarget===E&&q(V),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let de=0;de<y.__webglFramebuffer[se].length;de++)i.deleteFramebuffer(y.__webglFramebuffer[se][de]);else i.deleteFramebuffer(y.__webglFramebuffer[se]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)i.deleteFramebuffer(y.__webglFramebuffer[se]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let se=0;se<y.__webglColorRenderbuffer.length;se++)y.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[se]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ce=E.textures;for(let se=0,de=ce.length;se<de;se++){let _e=n.get(ce[se]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(ce[se])}n.remove(E)}let Z=0;function ie(){Z=0}function re(){return Z}function Ie(E){Z=E}function We(){let E=Z;return E>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,E}function ee(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.mipmapsAutoUpdate),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Te(E,y){let V=n.get(E);if(E.isVideoTexture&&bt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&V.__version!==E.version){let ce=E.image;if(ce===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,E,y);return}}else E.isExternalTexture&&(V.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function Pe(E,y){let V=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){me(V,E,y);return}else E.isExternalTexture&&(V.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function Ve(E,y){let V=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){me(V,E,y);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function we(E,y){let V=n.get(E);if(E.version>0&&V.__version!==E.version){Re(V,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let Be={[jn]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},gt={[Wt]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Ce={[Ph]:i.NEVER,[Jl]:i.ALWAYS,[Lh]:i.LESS,[Yl]:i.LEQUAL,[Dh]:i.EQUAL,[Zl]:i.GEQUAL,[Nh]:i.GREATER,[Uh]:i.NOTEQUAL};function Je(E,y){if(y.type===xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===$a||y.magFilter===Sr||y.magFilter===ii||y.minFilter===rn||y.minFilter===$a||y.minFilter===Sr||y.minFilter===ii)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Be[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Be[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Be[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,gt[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==Sr&&y.minFilter!==ii||y.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function nt(E,y){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C),D(y));let ce=y.source,se=f.get(ce);se===void 0&&(se={},f.set(ce,se));let de=ee(y);if(de!==E.__cacheKey){se[de]===void 0&&(se[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[de].usedTimes++;let _e=se[E.__cacheKey];_e!==void 0&&(se[E.__cacheKey].usedTimes--,_e.usedTimes===0&&k(y)),E.__cacheKey=de,E.__webglTexture=se[de].texture}return V}function ae(E,y,V){return Math.floor(Math.floor(E/V)/y)}function he(E,y,V,ce){let de=E.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,ce,y.data);else{de.sort((I,j)=>I.start-j.start);let _e=0;for(let I=1;I<de.length;I++){let j=de[_e],$=de[I],fe=j.start+j.count,ue=ae($.start,y.width,4),pe=ae(j.start,y.width,4);$.start<=fe+1&&ue===pe&&ae($.start+$.count-1,y.width,4)===ue?j.count=Math.max(j.count,$.start+$.count-j.start):(++_e,de[_e]=$)}de.length=_e+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let I=0,j=de.length;I<j;I++){let $=de[I],fe=Math.floor($.start/4),ue=Math.ceil($.count/4),pe=fe%y.width,ze=Math.floor(fe/y.width),B=ue,P=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,pe,ze,B,P,V,ce,y.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function me(E,y,V){let ce=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ce=i.TEXTURE_3D);let se=nt(E,y),de=y.source;t.bindTexture(ce,E.__webglTexture,i.TEXTURE0+V);let _e=n.get(de);if(de.version!==_e.__version||se===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let P=pt.getPrimaries(pt.workingColorSpace),W=y.colorSpace===ri?null:pt.getPrimaries(y.colorSpace),te=y.colorSpace===ri||P===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let K=M(y.image,!1,s.maxTextureSize);K=He(y,K);let ge=r.convert(y.format,y.colorSpace),I=r.convert(y.type),j=w(y.internalFormat,ge,I,y.normalized,y.colorSpace,y.isVideoTexture);Je(ce,y);let $,fe=y.mipmaps,ue=y.isVideoTexture!==!0,pe=_e.__version===void 0||se===!0,ze=de.dataReady,B=b(y,K);if(y.isDepthTexture)j=m(y.format===si,y.type),pe&&(ue?t.texStorage2D(i.TEXTURE_2D,1,j,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,j,K.width,K.height,0,ge,I,null));else if(y.isDataTexture)if(fe.length>0){ue&&pe&&t.texStorage2D(i.TEXTURE_2D,B,j,fe[0].width,fe[0].height);for(let P=0,W=fe.length;P<W;P++)$=fe[P],ue?ze&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,$.width,$.height,ge,I,$.data):t.texImage2D(i.TEXTURE_2D,P,j,$.width,$.height,0,ge,I,$.data);y.generateMipmaps=!1}else ue?(pe&&t.texStorage2D(i.TEXTURE_2D,B,j,K.width,K.height),ze&&he(y,K,ge,I)):t.texImage2D(i.TEXTURE_2D,0,j,K.width,K.height,0,ge,I,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ue&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,B,j,fe[0].width,fe[0].height,K.depth);for(let P=0,W=fe.length;P<W;P++)if($=fe[P],y.format!==Cn)if(ge!==null)if(ue){if(ze)if(y.layerUpdates.size>0){let te=sc($.width,$.height,y.format,y.type);for(let z of y.layerUpdates){let ne=$.data.subarray(z*te/$.data.BYTES_PER_ELEMENT,(z+1)*te/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,z,$.width,$.height,1,ge,ne)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,$.width,$.height,K.depth,ge,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,j,$.width,$.height,K.depth,0,$.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,$.width,$.height,K.depth,ge,I,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,P,j,$.width,$.height,K.depth,0,ge,I,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ue&&pe&&t.texStorage2D(i.TEXTURE_2D,B,j,fe[0].width,fe[0].height);for(let P=0,W=fe.length;P<W;P++)$=fe[P],y.format!==Cn?ge!==null?ue?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,$.width,$.height,ge,$.data):t.compressedTexImage2D(i.TEXTURE_2D,P,j,$.width,$.height,0,$.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?ze&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,$.width,$.height,ge,I,$.data):t.texImage2D(i.TEXTURE_2D,P,j,$.width,$.height,0,ge,I,$.data)}else if(y.isDataArrayTexture)if(ue){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,B,j,K.width,K.height,K.depth),ze)if(y.layerUpdates.size>0){let P=sc(K.width,K.height,y.format,y.type);for(let W of y.layerUpdates){let te=K.data.subarray(W*P/K.data.BYTES_PER_ELEMENT,(W+1)*P/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,K.width,K.height,1,ge,I,te)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ge,I,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,ge,I,K.data);else if(y.isData3DTexture)ue?(pe&&t.texStorage3D(i.TEXTURE_3D,B,j,K.width,K.height,K.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ge,I,K.data)):t.texImage3D(i.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,ge,I,K.data);else if(y.isFramebufferTexture){if(pe)if(ue)t.texStorage2D(i.TEXTURE_2D,B,j,K.width,K.height);else{let P=K.width,W=K.height;for(let te=0;te<B;te++)t.texImage2D(i.TEXTURE_2D,te,j,P,W,0,ge,I,null),P>>=1,W>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let P=i.canvas;if(P.hasAttribute("layoutsubtree")||P.setAttribute("layoutsubtree","true"),K.parentNode!==P){P.appendChild(K),d.add(y),P.onpaint=W=>{let te=W.changedElements;for(let z of d)te.includes(z.image)&&(z.needsUpdate=!0)},P.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let te=i.RGBA,z=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,te,z,ne,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ue&&pe){let P=Ye(fe[0]);t.texStorage2D(i.TEXTURE_2D,B,j,P.width,P.height)}for(let P=0,W=fe.length;P<W;P++)$=fe[P],ue?ze&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ge,I,$):t.texImage2D(i.TEXTURE_2D,P,j,ge,I,$);y.generateMipmaps=!1}else if(ue){if(pe){let P=Ye(K);t.texStorage2D(i.TEXTURE_2D,B,j,P.width,P.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,I,K)}else t.texImage2D(i.TEXTURE_2D,0,j,ge,I,K);x(y)&&y.mipmapsAutoUpdate===!0&&v(ce),_e.__version=de.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Re(E,y,V){if(y.image.length!==6)return;let ce=nt(E,y),se=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+V);let de=n.get(se);if(se.version!==de.__version||ce===!0){t.activeTexture(i.TEXTURE0+V);let _e=pt.getPrimaries(pt.workingColorSpace),Q=y.colorSpace===ri?null:pt.getPrimaries(y.colorSpace),K=y.colorSpace===ri||_e===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ge=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,j=[];for(let z=0;z<6;z++)!ge&&!I?j[z]=M(y.image[z],!0,s.maxCubemapSize):j[z]=I?y.image[z].image:y.image[z],j[z]=He(y,j[z]);let $=j[0],fe=r.convert(y.format,y.colorSpace),ue=r.convert(y.type),pe=w(y.internalFormat,fe,ue,y.normalized,y.colorSpace),ze=y.isVideoTexture!==!0,B=de.__version===void 0||ce===!0,P=se.dataReady,W=b(y,$);Je(i.TEXTURE_CUBE_MAP,y);let te;if(y.isDepthTexture){if(pe=m(y.format===si,y.type),B)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,$.width,$.height);else for(let z=0;z<6;z++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pe,$.width,$.height,0,fe,ue,null)}else if(ge){ze&&B&&t.texStorage2D(i.TEXTURE_CUBE_MAP,W,pe,$.width,$.height);for(let z=0;z<6;z++){te=j[z].mipmaps;for(let ne=0;ne<te.length;ne++){let le=te[ne];y.format!==Cn?fe!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,le.width,le.height,fe,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,pe,le.width,le.height,0,le.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,le.width,le.height,fe,ue,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,pe,le.width,le.height,0,fe,ue,le.data)}}}else{if(te=y.mipmaps,ze&&B){te.length>0&&W++;let z=Ye(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,W,pe,z.width,z.height)}for(let z=0;z<6;z++)if(I){ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,j[z].width,j[z].height,fe,ue,j[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pe,j[z].width,j[z].height,0,fe,ue,j[z].data);for(let ne=0;ne<te.length;ne++){let Xe=te[ne].image[z].image;ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Xe.width,Xe.height,fe,ue,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,pe,Xe.width,Xe.height,0,fe,ue,Xe.data)}}else{ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,fe,ue,j[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,pe,fe,ue,j[z]);for(let ne=0;ne<te.length;ne++){let le=te[ne];ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,fe,ue,le.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,pe,fe,ue,le.image[z])}}}x(y)&&y.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),de.__version=se.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xe(E,y,V,ce,se,de){let _e=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),K=w(V.internalFormat,_e,Q,V.normalized,V.colorSpace),ge=n.get(y),I=n.get(V);if(I.__renderTarget=y,!ge.__hasExternalTextures){let j=Math.max(1,y.width>>de),$=Math.max(1,y.height>>de);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,de,K,j,$,y.depth,0,_e,Q,null):t.texImage2D(se,de,K,j,$,0,_e,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,se,I.__webglTexture,0,St(y)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,se,I.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(E,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let ce=y.depthTexture,se=ce&&ce.isDepthTexture?ce.type:null,de=m(y.stencilBuffer,se),_e=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(y),de,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(y),de,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,de,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,E)}else{let ce=y.textures;for(let se=0;se<ce.length;se++){let de=ce[se],_e=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),K=w(de.internalFormat,_e,Q,de.normalized,de.colorSpace);ve(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(y),K,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(y),K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(E,y,V){let ce=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(y.depthTexture);se.__renderTarget=y;let de=ce?y.depthTexture.image[0]:y.depthTexture.image;(!se.__webglTexture||de.width!==y.width||de.height!==y.height)&&(de.width=y.width,de.height=y.height,y.depthTexture.needsUpdate=!0),ce?we(y.depthTexture,0):Te(y.depthTexture,0);let _e=se.__webglTexture,Q=St(y),K=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ge=y.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ei)ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,K,_e,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ge,K,_e,0);else if(y.depthTexture.format===si)ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,K,_e,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ge,K,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(E){let y=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let ce=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ce){let se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ce.removeEventListener("dispose",se)};ce.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=ce}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let ce=0;ce<6;ce++)Ne(y.__webglFramebuffer[ce],E,ce);else E.texture.mipmaps.length>0?Ne(y.__webglFramebuffer[0],E,0):Ne(y.__webglFramebuffer,E,0);else if(V){y.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ce]),y.__webglDepthbuffer[ce]===void 0)y.__webglDepthbuffer[ce]=i.createRenderbuffer(),Ke(y.__webglDepthbuffer[ce],E,!1);else{let se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,de)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ke(y.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(E,y,V){let ce=n.get(E);y!==void 0&&xe(ce.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&et(E)}function lt(E){let y=E.texture,V=n.get(E),ce=n.get(y);E.addEventListener("dispose",O),D(E);let se=E.textures,de=E.isWebGLCubeRenderTarget===!0,_e=se.length>1;if(_e||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=y.version,a.memory.textures++),de){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let K=0;K<y.mipmaps.length;K++)V.__webglFramebuffer[Q][K]=i.createFramebuffer()}else V.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)V.__webglFramebuffer[Q]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(_e)for(let Q=0,K=se.length;Q<K;Q++){let ge=n.get(se[Q]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ve(E)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<se.length;Q++){let K=se[Q];V.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let ge=r.convert(K.format,K.colorSpace),I=r.convert(K.type),j=w(K.internalFormat,ge,I,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),$=St(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Je(i.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)xe(V.__webglFramebuffer[Q][K],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,K);else xe(V.__webglFramebuffer[Q],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);x(y)?v(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let Q=0,K=se.length;Q<K;Q++){let ge=se[Q],I=n.get(ge),j=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,I.__webglTexture),Je(j,ge),xe(V.__webglFramebuffer,E,ge,i.COLOR_ATTACHMENT0+Q,j,0),x(ge)&&v(j)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,ce.__webglTexture),Je(Q,y),y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)xe(V.__webglFramebuffer[K],E,y,i.COLOR_ATTACHMENT0,Q,K);else xe(V.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Q,0);x(y)?v(Q):y.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&et(E)}function F(E){let y=E.textures;for(let V=0,ce=y.length;V<ce;V++){let se=y[V];if(x(se)&&se.mipmapsAutoUpdate===!0){let de=A(E),_e=n.get(se).__webglTexture;t.bindTexture(de,_e),v(de),t.unbindTexture()}}}let xt=[];function st(E){if(E.samples>0){if(ve(E)===!1){let y=E.textures,V=E.width,ce=E.height,se=i.COLOR_BUFFER_BIT,de=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(E),Q=y.length>1;if(Q)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);let I=n.get(y[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,V,ce,0,0,V,ce,se,i.NEAREST),c===!0&&(xt.length=0,xt.push(i.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&xt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);let I=n.get(y[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function St(E){return Math.min(s.maxSamples,E.samples)}function ve(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function He(E,y){let V=E.colorSpace,ce=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==Ws&&V!==ri&&(pt.getTransfer(V)===yt?(ce!==Cn||se!==on)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",V)),y}function Ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=We,this.resetTextureUnits=ie,this.getTextureUnits=re,this.setTextureUnits=Ie,this.setTexture2D=Te,this.setTexture2DArray=Pe,this.setTexture3D=Ve,this.setTextureCube=we,this.rebindTextures=je,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ve,this.dispose=G}function B0(i,e){function t(n,s=ri){let r,a=pt.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===Cn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===eo)return i.RED;if(n===to)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===no)return i.RG_INTEGER;if(n===io)return i.RGBA_INTEGER;if(n===br||n===Tr||n===wr||n===Ar)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho||n===uo||n===fo||n===Er||n===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uo)return r.COMPRESSED_R11_EAC;if(n===fo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Er)return r.COMPRESSED_RG11_EAC;if(n===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===bo||n===To||n===wo||n===Ao||n===Eo||n===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Io||n===Po)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Do||n===Rr||n===No)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`,fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new On({vertexShader:z0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pc=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null,S=typeof XRWebGLBinding<"u",g=new fc,p={},M=t.getContextAttributes(),x=null,v=null,A=[],w=[],m=new be,b=null,D=null,R=new sn;R.viewport=new Rt;let C=new sn;C.viewport=new Rt;let O=[R,C],q=new qa,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Te=A[ee];return Te===void 0&&(Te=new ds,A[ee]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ee){let Te=A[ee];return Te===void 0&&(Te=new ds,A[ee]=Te),Te.getGripSpace()},this.getHand=function(ee){let Te=A[ee];return Te===void 0&&(Te=new ds,A[ee]=Te),Te.getHandSpace()};function Y(ee){let Te=w.indexOf(ee.inputSource);if(Te===-1)return;let Pe=A[Te];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,l||a),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<A.length;ee++){let Te=w[ee];Te!==null&&(w[ee]=null,A[ee].disconnect(Te))}L=null,G=null,g.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(x),f=null,u=null,d=null,s=null,v=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(m.width,m.height,!1),D!==null){let ee=D.camera;ee.fov=D.fov,ee.zoom=D.zoom,ee.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(m),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Ve=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=M.stencil?si:ei,Ve=M.stencil?Gi:En);let Be={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new hn(u.textureWidth,u.textureHeight,{format:Cn,type:on,depthTexture:new ti(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(ee){for(let Te=0;Te<ee.removed.length;Te++){let Pe=ee.removed[Te],Ve=w.indexOf(Pe);Ve>=0&&(w[Ve]=null,A[Ve].disconnect(Pe))}for(let Te=0;Te<ee.added.length;Te++){let Pe=ee.added[Te],Ve=w.indexOf(Pe);if(Ve===-1){for(let Be=0;Be<A.length;Be++)if(Be>=w.length){w.push(Pe),Ve=Be;break}else if(w[Be]===null){w[Be]=Pe,Ve=Be;break}if(Ve===-1)break}let we=A[Ve];we&&we.connect(Pe)}}function Z(ee,Te){Te===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Te.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let Te=ee.near,Pe=ee.far;g.texture!==null&&(g.depthNear>0&&(Te=g.depthNear),g.depthFar>0&&(Pe=g.depthFar)),q.near=C.near=R.near=Te,q.far=C.far=R.far=Pe,(L!==q.near||G!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,G=q.far),q.layers.mask=ee.layers.mask|6,R.layers.mask=q.layers.mask&-5,C.layers.mask=q.layers.mask&-3;let Ve=ee.parent,we=q.cameras;Z(q,Ve);for(let Be=0;Be<we.length;Be++)Z(we[Be],Ve);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&ee.isPerspectiveCamera&&(D={camera:ee,fov:ee.fov,zoom:ee.zoom}),ie(ee,q,Ve)};function ie(ee,Te,Pe){Pe===null?ee.matrix.copy(Te.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Te.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Te.projectionMatrix),ee.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ya*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(ee){c=ee,u!==null&&(u.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(ee){return p[ee]};let re=null;function Ie(ee,Te){if(h=Te.getViewerPose(l||a),_=Te,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ve=!1;Pe.length!==q.cameras.length&&(q.cameras.length=0,Ve=!0);for(let Ce=0;Ce<Pe.length;Ce++){let Je=Pe[Ce],nt=null;if(f!==null)nt=f.getViewport(Je);else{let he=d.getViewSubImage(u,Je);nt=he.viewport,Ce===0&&(e.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(v))}let ae=O[Ce];ae===void 0&&(ae=new sn,ae.layers.enable(Ce),ae.viewport=new Rt,O[Ce]=ae),ae.matrix.fromArray(Je.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Je.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(nt.x,nt.y,nt.width,nt.height),Ce===0&&(q.matrix.copy(ae.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ve===!0&&q.cameras.push(ae)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Ce=d.getDepthInformation(Pe[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(Ce,s.renderState)}if(we&&we.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Ce=0;Ce<Pe.length;Ce++){let Je=Pe[Ce].camera;if(Je){let nt=p[Je];nt||(nt=new nr,p[Je]=nt);let ae=d.getCameraImage(Je);nt.sourceTexture=ae}}}}for(let Pe=0;Pe<A.length;Pe++){let Ve=w[Pe],we=A[Pe];Ve!==null&&we!==void 0&&we.update(Ve,Te,l||a)}re&&re(ee,Te),Te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Te}),_=null}let We=new _u;We.setAnimationLoop(Ie),this.setAnimationLoop=function(ee){re=ee},this.dispose=function(){}}},G0=new Mt,Eu=new Qe;Eu.set(-1,0,0,0,1,0,0,0,1);function V0(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,tc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,x,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),S(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,M,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),x=M.envMap,v=M.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(v)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Eu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H0(i,e,t,n){let s={},r={};function a(M,x){let v=x.program;n.uniformBlockBinding(M,v,s[M.id])}function o(M,x){let v=s[M.id];v===void 0&&(_(M),v=c(M),s[M.id]=v,M.addEventListener("dispose",g));let A=x.program;n.updateUBOMapping(M,A);let w=e.render.frame;r[M.id]!==w&&(l(M),r[M.id]=w)}function c(M){let x=i.createBuffer(),v=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,v,A),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function l(M){let x=s[M.id],v=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,m=v.length;w<m;w++){let b=v[w];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)h(b[D],w,D,A);else h(b,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,x,v,A){if(u(M,x,v,A)===!0){let w=M.__offset,m=M.value;if(Array.isArray(m)){let b=0;for(let D=0;D<m.length;D++){let R=m[D],C=S(R,!0);d(R,M.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,M.__data)}}function d(M,x,v){typeof M=="number"||typeof M=="boolean"?x[v]=M:M.isMatrix3?(x[v]=M.elements[0],x[v+1]=M.elements[1],x[v+2]=M.elements[2],x[v+3]=0,x[v+4]=M.elements[3],x[v+5]=M.elements[4],x[v+6]=M.elements[5],x[v+7]=0,x[v+8]=M.elements[6],x[v+9]=M.elements[7],x[v+10]=M.elements[8],x[v+11]=0):ArrayBuffer.isView(M)?x.set(M.subarray(0,x.length-v),v):M.toArray(x,v)}function u(M,x,v,A){let w=M.value,m=x+"_"+v;if(Array.isArray(w)){A[m]===void 0&&(A[m]=[]);let b=A[m],D=!1;for(let R=0;R<w.length;R++)f(w[R],b,R)===!0&&(D=!0);return D}return f(w,A,m)}function f(M,x,v){if(x[v]===void 0)return typeof M=="number"||typeof M=="boolean"?x[v]=M:ArrayBuffer.isView(M)?x[v]=M.slice():x[v]=M.clone(),!0;{let A=x[v];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return x[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){let x=M.uniforms,v=0,A=16;for(let m=0,b=x.length;m<b;m++){let D=Array.isArray(x[m])?x[m]:[x[m]];for(let R=0,C=D.length;R<C;R++){let O=D[R],q=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(x[m])||Array.isArray(O.value),G=v;for(let k=0,oe=q.length;k<oe;k++){let Z=q[k],ie=S(Z,L),re=v%A,Ie=re%ie.boundary,We=re+Ie;v+=Ie,We!==0&&A-We<ie.storage&&(v+=A-We),k===0&&(G=v),v+=ie.storage}let Y=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Y((v-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}let w=v%A;return w>0&&(v+=A-w),M.__size=v,M.__cache={},this}function S(M,x){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",M),x===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(M){let x=M.target;x.removeEventListener("dispose",g),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var W0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function X0(){return Gn===null&&(Gn=new Qs(W0,16,16,Ti,Rn),Gn.name="DFG_LUT",Gn.minFilter=rn,Gn.magFilter=rn,Gn.wrapS=Ln,Gn.wrapT=Ln,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var zo=class{constructor(e={}){let{canvas:t=Oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=on}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=f,g=new Set([io,no,to]),p=new Set([on,En,bs,Gi,Qa,ja]),M=new Uint32Array(4),x=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,w=null,m=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,O=null,q=null,L=null,G=null;this._outputColorSpace=Ot;let Y=0,k=0,oe=null,Z=-1,ie=null,re=new Rt,Ie=new Rt,We=null,ee=new it(0),Te=0,Pe=t.width,Ve=t.height,we=1,Be=null,gt=null,Ce=new Rt(0,0,Pe,Ve),Je=new Rt(0,0,Pe,Ve),nt=!1,ae=new gi,he=new wa,me=!1,Re=!1,xe=new Mt,Ke=new U,Ne=new Rt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function lt(){return oe===null?we:1}let F=n;function xt(T,N){return t.getContext(T,N)}let st,St,ve,bt,He,Ye,E,y,V,ce,se,de,_e,Q,K,ge,I,j,$,fe,ue,pe,ze;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",z,!1),F===null){let N="webgl2";if(F=xt(N,T),F===null)throw xt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}B()}catch(T){throw t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",z,!1),$e("WebGLRenderer: "+T.message),T}function B(){st=new ng(F),st.init(),ue=new B0(F,st),St=new Xm(F,st,e,ue),ve=new F0(F,st),St.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),q=F.createFramebuffer(),L=F.createFramebuffer(),G=F.createFramebuffer(),bt=new rg(F),He=new S0,Ye=new O0(F,st,ve,He,St,ue,bt),E=new tg(R),y=new of(F),pe=new Hm(F,y),V=new ig(F,y,bt,pe),ce=new og(F,V,y,pe,bt),j=new ag(F,St,Ye),K=new qm(He),se=new M0(R,E,st,St,pe,K),de=new V0(R,He),_e=new T0,Q=new I0(st),I=new Vm(R,E,ve,ce,_,c),ge=new U0(R,ce,St),ze=new H0(F,bt,St,ve),$=new Wm(F,st,bt),fe=new sg(F,st,bt),bt.programs=se.programs,R.capabilities=St,R.extensions=st,R.properties=He,R.renderLists=_e,R.shadowMap=ge,R.state=ve,R.info=bt}S!==on&&(D=new cg(S,t.width,t.height,o,s,r));let P=new pc(R,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(T){T!==void 0&&(we=T,this.setSize(Pe,Ve,!1))},this.getSize=function(T){return T.set(Pe,Ve)},this.setSize=function(T,N,J=!0){if(P.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=T,Ve=N,t.width=Math.floor(T*we),t.height=Math.floor(N*we),J===!0&&(t.style.width=T+"px",t.style.height=N+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Pe*we,Ve*we).floor()},this.setDrawingBufferSize=function(T,N,J){Pe=T,Ve=N,we=J,t.width=Math.floor(T*J),t.height=Math.floor(N*J),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(S===on){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(Ce)},this.setViewport=function(T,N,J,H){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,N,J,H),ve.viewport(re.copy(Ce).multiplyScalar(lt()).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,N,J,H){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,N,J,H),ve.scissor(Ie.copy(Je).multiplyScalar(lt()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){ve.setScissorTest(nt=T)},this.setOpaqueSort=function(T){Be=T},this.setTransparentSort=function(T){gt=T},this.getClearColor=function(T){return T.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,J=!0){let H=0;if(T){let X=!1;if(oe!==null){let Se=oe.texture.format;X=g.has(Se)}if(X){let Se=oe.texture.type,De=p.has(Se),ye=I.getClearColor(),Ee=I.getClearAlpha(),Oe=ye.r,tt=ye.g,dt=ye.b;De?(M[0]=Oe,M[1]=tt,M[2]=dt,M[3]=Ee,F.clearBufferuiv(F.COLOR,0,M)):(x[0]=Oe,x[1]=tt,x[2]=dt,x[3]=Ee,F.clearBufferiv(F.COLOR,0,x))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",z,!1),I.dispose(),_e.dispose(),Q.dispose(),Ye.dispose(),He.dispose(),E.dispose(),ce.dispose(),V.dispose(),pe.dispose(),ze.dispose(),se.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ge),P.removeEventListener("sessionend",Me),Le.stop()};function W(T){T.preventDefault(),Ql("WebGLRenderer: Context Lost."),C=!0}function te(){Ql("WebGLRenderer: Context Restored."),C=!1;let T=bt.autoReset,N=ge.enabled,J=ge.autoUpdate,H=ge.needsUpdate,X=ge.type;B(),bt.autoReset=T,ge.enabled=N,ge.autoUpdate=J,ge.needsUpdate=H,ge.type=X}function z(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){let N=T.target;N.removeEventListener("dispose",ne),le(N)}function le(T){Xe(T),He.remove(T)}function Xe(T){let N=He.get(T).programs;N!==void 0&&(N.forEach(function(J){se.releaseProgram(J)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,J,H,X,Se){N===null&&(N=et);let De=X.isMesh&&X.matrixWorld.determinantAffine()<0,ye=ku(T,N,J,H,X);ve.setMaterial(H,De);let Ee=J.index,Oe=1;if(H.wireframe===!0){if(Ee=V.getWireframeAttribute(J),Ee===void 0)return;Oe=2}let tt=J.drawRange,dt=J.attributes.position,Ue=tt.start*Oe,ft=(tt.start+tt.count)*Oe;Se!==null&&(Ue=Math.max(Ue,Se.start*Oe),ft=Math.min(ft,(Se.start+Se.count)*Oe)),Ee!==null?(Ue=Math.max(Ue,0),ft=Math.min(ft,Ee.count)):dt!=null&&(Ue=Math.max(Ue,0),ft=Math.min(ft,dt.count));let Nt=ft-Ue;if(Nt<0||Nt===1/0)return;pe.setup(X,H,ye,J,Ee);let At,wt=$;if(Ee!==null&&(At=y.get(Ee),wt=fe,wt.setIndex(At)),X.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*lt()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(X.isLine){let Zt=H.linewidth;Zt===void 0&&(Zt=1),ve.setLineWidth(Zt*lt()),X.isLineSegments?wt.setMode(F.LINES):X.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else X.isPoints?wt.setMode(F.POINTS):X.isSprite&&wt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(st.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Zt=X._multiDrawStarts,Fe=X._multiDrawCounts,nn=X._multiDrawCount,vt=Ee?y.get(Ee).bytesPerElement:1,Ei=He.get(H).currentProgram.getUniforms();for(let Jt=0;Jt<nn;Jt++)Ei.setValue(F,"_gl_DrawID",Jt),wt.render(Zt[Jt]/vt,Fe[Jt])}else if(X.isInstancedMesh)wt.renderInstances(Ue,Nt,X.count);else if(J.isInstancedBufferGeometry){let Zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fe=Math.min(J.instanceCount,Zt);wt.renderInstances(Ue,Nt,Fe)}else wt.render(Ue,Nt)};function qe(T,N,J,H){O!==null&&T.isNodeMaterial&&O.setObject(H,T),me===!0&&K.setState(T,J,!1),T.transparent===!0&&T.side===zn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Xn(T,N,H),T.side=bi,T.needsUpdate=!0,Xn(T,N,H),T.side=zn):Xn(T,N,H)}this.compile=function(T,N,J=null){J===null&&(J=T),O!==null&&O.renderStart(T,N,J),w=Q.get(J),w.init(N),b.push(w),J.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==J&&T.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Re=this.localClippingEnabled,me=K.init(this.clippingPlanes,Re),me===!0&&K.setGlobalState(this.clippingPlanes,N),O!==null&&ge.render(w.state.shadowsArray,J,N);let H=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Se=X.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){let ye=Se[De];qe(ye,J,N,X),H.add(ye)}else qe(Se,J,N,X),H.add(Se)}),w=b.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(T,N,J=null){let H=this.compile(T,N,J);return new Promise(X=>{function Se(){if(H.forEach(function(De){let Ee=He.get(De).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(De)}),H.size===0){X(T);return}setTimeout(Se,10)}st.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ht=null;function ct(T){ht&&ht(T)}function Ge(){Le.stop()}function Me(){Le.start()}let Le=new _u;Le.setAnimationLoop(ct),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(T){ht=T,P.setAnimationLoop(T),T===null?Le.stop():Le.start()},P.addEventListener("sessionstart",Ge),P.addEventListener("sessionend",Me),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;O!==null&&O.renderStart(T,N);let J=P.enabled===!0&&P.isPresenting===!0,H=D!==null&&(oe===null||J)&&D.begin(R,oe);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,N,oe),w=Q.get(T,b.length),w.init(N),w.state.textureUnits=Ye.getTextureUnits(),b.push(w),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?he.setFromArrayCamera(N):ae.setFromProjectionMatrix(xe,mn,N.reversedDepth),Re=this.localClippingEnabled,me=K.init(this.clippingPlanes,Re),A=_e.get(T,m.length),A.init(),m.push(A),this.info.render.frame++,P.enabled===!0&&P.isPresenting===!0){let De=R.xr.getDepthSensingMesh();De!==null&&ot(De,N,-1/0,R.sortObjects)}ot(T,N,0,R.sortObjects),A.finish(),O!==null&&O.updateLights(w.state.lightsArray),R.sortObjects===!0&&A.sort(Be,gt),je=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,je&&I.addToRenderList(A,T),this.info.autoReset===!0&&this.info.reset(),me===!0&&K.beginShadows();let X=w.state.shadowsArray;if(ge.render(X,T,N),me===!0&&K.endShadows(),(H&&D.hasRenderPass())===!1){let De=A.opaque,ye=A.transmissive;if(w.setupLights(),N.isArrayCamera){let Ee=N.cameras;if(ye.length>0)for(let Oe=0,tt=Ee.length;Oe<tt;Oe++){let dt=Ee[Oe];Dt(De,ye,T,dt)}je&&I.render(T);for(let Oe=0,tt=Ee.length;Oe<tt;Oe++){let dt=Ee[Oe];Tt(A,T,dt,dt.viewport)}}else ye.length>0&&Dt(De,ye,T,N),je&&I.render(T),Tt(A,T,N)}oe!==null&&k===0&&(Ye.updateMultisampleRenderTarget(oe),Ye.updateRenderTargetMipmap(oe)),H&&D.end(R),T.isScene===!0&&T.onAfterRender(R,T,N),pe.resetDefaultState(),Z=-1,ie=null,b.pop(),b.length>0?(w=b[b.length-1],Ye.setTextureUnits(w.state.textureUnits),me===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,m.pop(),m.length>0?A=m[m.length-1]:A=null,O!==null&&O.renderEnd()};function ot(T,N,J,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let De=N.isArrayCamera?he:ae;if(!T.frustumCulled||T.intersectsFrustum(De)){H&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xe);let ye=ce.update(T),Ee=T.material;Ee.visible&&A.push(T,ye,Ee,J,Ne.z,null,N)}}else if(T.isMesh||T.isLine||T.isPoints){let De=N.isArrayCamera?he:ae;if(!T.frustumCulled||T.intersectsFrustum(De)){let ye=ce.update(T),Ee=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(xe)),Array.isArray(Ee)){let Oe=ye.groups;for(let tt=0,dt=Oe.length;tt<dt;tt++){let Ue=Oe[tt],ft=Ee[Ue.materialIndex];ft&&ft.visible&&A.push(T,ye,ft,J,Ne.z,Ue,N)}}else Ee.visible&&A.push(T,ye,Ee,J,Ne.z,null,N)}}}let Se=T.children;for(let De=0,ye=Se.length;De<ye;De++)ot(Se[De],N,J,H)}function Tt(T,N,J,H){let{opaque:X,transmissive:Se,transparent:De}=T;w.setupLightsView(J),me===!0&&K.setGlobalState(R.clippingPlanes,J),H&&ve.viewport(re.copy(H)),X.length>0&&fn(X,N,J),Se.length>0&&fn(Se,N,J),De.length>0&&fn(De,N,J),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Dt(T,N,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ue=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new hn(1,1,{generateMipmaps:!0,type:Ue?Rn:on,minFilter:ii,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Se=w.state.transmissionRenderTarget[H.id],De=H.viewport||re;Se.setSize(De.z*R.transmissionResolutionScale,De.w*R.transmissionResolutionScale);let ye=R.getRenderTarget(),Ee=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(ee),Te=R.getClearAlpha(),Te<1&&R.setClearColor(16777215,.5),R.clear(),je&&I.render(J);let tt=R.toneMapping;R.toneMapping=kn;let dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),me===!0&&K.setGlobalState(R.clippingPlanes,H),fn(T,J,H),Ye.updateMultisampleRenderTarget(Se),Ye.updateRenderTargetMipmap(Se),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ft=0,Nt=N.length;ft<Nt;ft++){let At=N[ft],{object:wt,geometry:Zt,material:Fe,group:nn}=At;if(Fe.side===zn&&wt.layers.test(H.layers)){let vt=Fe.side;Fe.side=an,Fe.needsUpdate=!0,In(wt,J,H,Zt,Fe,nn),Fe.side=vt,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ye.updateMultisampleRenderTarget(Se),Ye.updateRenderTargetMipmap(Se))}R.setRenderTarget(ye,Ee,Oe),R.setClearColor(ee,Te),dt!==void 0&&(H.viewport=dt),R.toneMapping=tt}function fn(T,N,J){let H=N.isScene===!0?N.overrideMaterial:null;for(let X=0,Se=T.length;X<Se;X++){let De=T[X],{object:ye,geometry:Ee,group:Oe}=De,tt=De.material;tt.allowOverride===!0&&H!==null&&(tt=H),ye.layers.test(J.layers)&&In(ye,N,J,Ee,tt,Oe)}}function In(T,N,J,H,X,Se){O!==null&&X.isNodeMaterial&&O.setObject(T,X),T.onBeforeRender(R,N,J,H,X,Se),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(R,N,J,H,T,Se),X.transparent===!0&&X.side===zn&&X.forceSinglePass===!1?(X.side=an,X.needsUpdate=!0,R.renderBufferDirect(J,N,H,X,T,Se),X.side=bi,X.needsUpdate=!0,R.renderBufferDirect(J,N,H,X,T,Se),X.side=zn):R.renderBufferDirect(J,N,H,X,T,Se),T.onAfterRender(R,N,J,H,X,Se)}function Ls(T){let N=0;for(let J of T)J.texture!==null&&N++;return N}function Xn(T,N,J){N.isScene!==!0&&(N=et);let H=He.get(T),X=w.state.lights,Se=w.state.shadowsArray,De=X.state.version,ye=se.getParameters(T,X.state,Se,N,J,w.state.lightProbeGridArray),Ee=se.getProgramCacheKey(ye),Oe=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=E.get(T.envMap||H.environment,tt),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",ne),Oe=new Map,H.programs=Oe,H.programVariants=new Map);let dt=Oe.get(Ee);if(dt!==void 0){if(H.currentProgram===dt&&H.lightsStateVersion===De)return yn(T,ye),dt}else ye.uniforms=se.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,J,ye),T.onBeforeCompile(ye,R),dt=se.acquireProgram(ye,Ee),Oe.set(Ee,dt),H.uniforms=ye.uniforms;let Ue=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=K.uniform),yn(T,ye),H.needsLights=Vu(T),H.lightsStateVersion=De,H.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.sunLights.value=X.state.sun,Ue.sunLightShadows.value=X.state.sunShadow,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.sunShadowMatrix.value=X.state.sunShadowMatrix,Ue.sunShadowCascade.value=X.state.sunShadowCascade,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=Ls(w.state.lightProbeGridArray),H.currentProgram=dt,H.uniformsList=null,dt}function Ai(T,N,J,H,X){let Se=He.get(T),De=Se.currentProgram.id+","+H+","+X,ye=Se.programVariants.get(De);return ye===void 0?(ye=Xn(T,N,J),Se.programVariants.set(De,ye)):(Se.currentProgram=ye,Se.uniformsList=null,Se.outputColorSpace=H,Se.toneMapping=X),ye}function Or(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=ws.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function yn(T,N){let J=He.get(T);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function ku(T,N,J,H,X){N.isScene!==!0&&(N=et),Ye.resetTextureUnits();let Se=N.fog,De=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,ye=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:pt.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Oe=E.get(H.envMap||De,Ee),tt=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,dt=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,Nt=!!J.morphAttributes.color,At=kn;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(At=R.toneMapping);let wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Zt=wt!==void 0?wt.length:0,Fe=He.get(H),nn=w.state.lights;if(me===!0&&(Re===!0||T!==ie)){let Ct=T===ie&&H.id===Z;K.setState(H,T,Ct)}let vt=!1,Ei=!1;H.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==nn.state.version||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Oe||H.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==K.numPlanes||Fe.numIntersection!==K.numIntersection)||Fe.vertexAlphas!==tt||Fe.vertexTangents!==dt||Fe.morphTargets!==Ue||Fe.morphNormals!==ft||Fe.morphColors!==Nt||Fe.morphTargetsCount!==Zt||Fe.numLightProbeGrids!==Ls(w.state.lightProbeGridArray)?vt=!0:(Fe.outputColorSpace!==ye||Fe.toneMapping!==At)&&(Ei=!0):(vt=!0,Fe.__version=H.version);let Jt=Fe.currentProgram;(vt===!0||Ei===!0)&&(Jt=Ei===!0?Ai(H,N,X,ye,At):Xn(H,N,X),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Jt,Fe));let Br=!1,oi=!1,Ri=!1,_t=Jt.getUniforms(),qt=Fe.uniforms;if(ve.useProgram(Jt.program)&&(Br=!0,oi=!0,Ri=!0),H.id!==Z&&(Z=H.id,oi=!0),Br||ie!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(F,"projectionMatrix",T.projectionMatrix),_t.setValue(F,"viewMatrix",T.matrixWorldInverse);let Gt=_t.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,Ke.setFromMatrixPosition(T.matrixWorld)),St.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),ie!==T&&(ie=T,oi=!0,Ri=!0)}if(Fe.needsLights&&(nn.state.sunShadowMap.length>0&&_t.setValue(F,"sunShadowMap",nn.state.sunShadowMap,Ye),nn.state.directionalShadowMap.length>0&&_t.setValue(F,"directionalShadowMap",nn.state.directionalShadowMap,Ye),nn.state.spotShadowMap.length>0&&_t.setValue(F,"spotShadowMap",nn.state.spotShadowMap,Ye),nn.state.pointShadowMap.length>0&&_t.setValue(F,"pointShadowMap",nn.state.pointShadowMap,Ye)),X.isSkinnedMesh){_t.setOptional(F,X,"bindMatrix"),_t.setOptional(F,X,"bindMatrixInverse");let Ct=X.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),_t.setValue(F,"boneTexture",Ct.boneTexture,Ye))}X.isBatchedMesh&&(_t.setOptional(F,X,"batchingTexture"),_t.setValue(F,"batchingTexture",X._matricesTexture,Ye),_t.setOptional(F,X,"batchingIdTexture"),_t.setValue(F,"batchingIdTexture",X._indirectTexture,Ye),_t.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(F,"batchingColorTexture",X._colorsTexture,Ye));let Mn=J.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&j.update(X,J,Jt),(oi||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,_t.setValue(F,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(qt.envMapIntensity.value=N.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=X0()),oi){if(_t.setValue(F,"toneMappingExposure",R.toneMappingExposure),Fe.needsLights&&Gu(qt,Ri),Se&&H.fog===!0&&de.refreshFogUniforms(qt,Se),de.refreshMaterialUniforms(qt,H,we,Ve,w.state.transmissionRenderTarget[T.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Ct=v,Gt=0;for(let qn of w.state.lightProbeGridArray)qn.texture!==null&&(Ct.textures[Gt]=qn.texture,Ct.min[Gt]=qn.boundingBox.min,Ct.max[Gt]=qn.boundingBox.max,Ct.resolution[Gt]=qn.resolution,Gt++);for(let qn in Ct)Ct[qn].length=Gt;qt.probesSH.value=Ct.textures,qt.probesMin.value=Ct.min,qt.probesMax.value=Ct.max,qt.probesResolution.value=Ct.resolution}ws.upload(F,Or(Fe),qt,Ye)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ws.upload(F,Or(Fe),qt,Ye),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(F,"center",X.center),_t.setValue(F,"modelViewMatrix",X.modelViewMatrix),_t.setValue(F,"normalMatrix",X.normalMatrix),_t.setValue(F,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let Ct=H.uniformsGroups;for(let Gt=0,qn=Ct.length;Gt<qn;Gt++){let Ac=Ct[Gt];ze.update(Ac,Jt),ze.bind(Ac,Jt)}}return Jt}function Gu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Vu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(T,N,J){let H=He.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),He.get(T.texture).__webglTexture=N,He.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let J=He.get(T);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,J=0){oe=T,Y=N,k=J;let H=null,X=!1,Se=!1;if(T){let ye=He.get(T);if(ye.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),re.copy(T.viewport),Ie.copy(T.scissor),We=T.scissorTest,ve.viewport(re),ve.scissor(Ie),ve.setScissorTest(We),Z=-1;return}else if(ye.__webglFramebuffer===void 0)Ye.setupRenderTarget(T);else if(ye.__hasExternalTextures)Ye.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let tt=T.depthTexture;if(ye.__boundDepthTexture!==tt){if(tt!==null&&He.has(tt)&&(T.width!==tt.image.width||T.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(T)}}let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Se=!0);let Oe=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?H=Oe[N][J]:H=Oe[N],X=!0):T.samples>0&&Ye.useMultisampledRTT(T)===!1?H=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[J]:H=Oe,re.copy(T.viewport),Ie.copy(T.scissor),We=T.scissorTest}else re.copy(Ce).multiplyScalar(we).floor(),Ie.copy(Je).multiplyScalar(we).floor(),We=nt;if(J!==0&&(H=q),ve.bindFramebuffer(F.FRAMEBUFFER,H)&&ve.drawBuffers(T,H),ve.viewport(re),ve.scissor(Ie),ve.setScissorTest(We),X){let ye=He.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,J)}else if(Se){let ye=N;for(let Ee=0;Ee<T.textures.length;Ee++){let Oe=He.get(T.textures[Ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ee,Oe.__webglTexture,J,ye)}}else if(T!==null&&J!==0){let ye=He.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,J)}Z=-1};function wc(T){let N=He.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=St.textureFormatReadable(T.format),N.__typeReadable=St.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,J,H,X,Se,De,ye=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ee=Ee[De],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ve.bindFramebuffer(F.FRAMEBUFFER,Ee);try{let Oe=T.textures[ye],tt=Oe.format,dt=Oe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Ue=wc(Oe);if(Ue.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&J>=0&&J<=T.height-X&&F.readPixels(N,J,H,X,ue.convert(tt),ue.convert(dt),Se)}finally{let Oe=oe!==null?He.get(oe).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,N,J,H,X,Se,De,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ee=Ee[De],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(N>=0&&N<=T.width-H&&J>=0&&J<=T.height-X){ve.bindFramebuffer(F.FRAMEBUFFER,Ee);let Oe=T.textures[ye],tt=Oe.format,dt=Oe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Ue=wc(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(N,J,H,X,ue.convert(tt),ue.convert(dt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Nt=oe!==null?He.get(oe).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Nt);let At=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zh(F,At,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ft),F.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,J=0){let H=Math.pow(2,-J),X=Math.floor(T.image.width*H),Se=Math.floor(T.image.height*H),De=N!==null?N.x:0,ye=N!==null?N.y:0;Ye.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,De,ye,X,Se),ve.unbindTexture()},this.copyTextureToTexture=function(T,N,J=null,H=null,X=0,Se=0){let De,ye,Ee,Oe,tt,dt,Ue,ft,Nt,At=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(J!==null)De=J.max.x-J.min.x,ye=J.max.y-J.min.y,Ee=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,tt=J.min.y,dt=J.isBox3?J.min.z:0;else{let _t=Math.pow(2,-X);De=Math.floor(At.width*_t),ye=Math.floor(At.height*_t),T.isDataArrayTexture?Ee=At.depth:T.isData3DTexture?Ee=Math.floor(At.depth*_t):Ee=1,Oe=0,tt=0,dt=0}H!==null?(Ue=H.x,ft=H.y,Nt=H.z):(Ue=0,ft=0,Nt=0);let wt=ue.convert(N.format),Zt=ue.convert(N.type),Fe;N.isData3DTexture?(Ye.setTexture3D(N,0),Fe=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ye.setTexture2DArray(N,0),Fe=F.TEXTURE_2D_ARRAY):(Ye.setTexture2D(N,0),Fe=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let nn=ve.getParameter(F.UNPACK_ROW_LENGTH),vt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),Ei=ve.getParameter(F.UNPACK_SKIP_PIXELS),Jt=ve.getParameter(F.UNPACK_SKIP_ROWS),Br=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),ve.pixelStorei(F.UNPACK_SKIP_ROWS,tt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,dt);let oi=T.isDataArrayTexture||T.isData3DTexture,Ri=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let _t=He.get(T),qt=He.get(N),Mn=He.get(_t.__renderTarget),Ct=He.get(qt.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Gt=0;Gt<Ee;Gt++)oi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(T).__webglTexture,X,dt+Gt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(N).__webglTexture,Se,Nt+Gt)),F.blitFramebuffer(Oe,tt,Oe+De,tt+ye,Ue,ft,Ue+De,ft+ye,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||He.has(T)){let _t=He.get(T),qt=He.get(N);ve.bindFramebuffer(F.READ_FRAMEBUFFER,L),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,G);for(let Mn=0;Mn<Ee;Mn++)oi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,X,dt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,X),Ri?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,Se,Nt+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qt.__webglTexture,Se),X!==0?F.blitFramebuffer(Oe,tt,Oe+De,tt+ye,Ue,ft,Ue+De,ft+ye,F.COLOR_BUFFER_BIT,F.NEAREST):Ri?F.copyTexSubImage3D(Fe,Se,Ue,ft,Nt+Mn,Oe,tt,De,ye):F.copyTexSubImage2D(Fe,Se,Ue,ft,Oe,tt,De,ye);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ri?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Fe,Se,Ue,ft,Nt,De,ye,Ee,wt,Zt,At.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Fe,Se,Ue,ft,Nt,De,ye,Ee,wt,At.data):F.texSubImage3D(Fe,Se,Ue,ft,Nt,De,ye,Ee,wt,Zt,At):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,Ue,ft,De,ye,wt,Zt,At.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,Ue,ft,At.width,At.height,wt,At.data):F.texSubImage2D(F.TEXTURE_2D,Se,Ue,ft,De,ye,wt,Zt,At);ve.pixelStorei(F.UNPACK_ROW_LENGTH,nn),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Ei),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,Br),Se===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Fe),ve.unbindTexture()},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&Ye.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ye.setTextureCube(T,0):T.isData3DTexture?Ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ye.setTexture2DArray(T,0):Ye.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){Y=0,k=0,oe=null,ve.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Dr=new U;function vn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Dr.copy(e),Dr[n]=0,Dr.normalize();let l=.5*a/(a+o),h=1-Dr.angleTo(i)/c;return Math.sign(Dr[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Es=class i extends _n{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,S=new U,g=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/_)){case 0:S.set(1,0,0),f[M+0]=vn(S,l,"z","y",r,n),f[M+1]=1-vn(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),f[M+0]=1-vn(S,l,"z","y",r,n),f[M+1]=1-vn(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),f[M+0]=1-vn(S,l,"x","z",r,e),f[M+1]=vn(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[M+0]=1-vn(S,l,"x","z",r,e),f[M+1]=1-vn(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[M+0]=1-vn(S,l,"x","y",r,e),f[M+1]=1-vn(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),f[M+0]=vn(S,l,"x","y",r,e),f[M+1]=1-vn(S,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Cu(i,e){let t=new Ht;i.add(t);let n={},s=[],r={};function a(x){return r[x]??=new Bn({color:x,roughness:.88})}function o(x,v,A){let w=new Pt(x,a(v));return w.castShadow=!0,w.receiveShadow=!0,A.add(w),w}function c(x,v,A,w){let m=new Ht;return m.position.set(v,A,w),x.add(m),m}function l(x,v,A,w,m,b,D,R){let C=o(new ni(1,24,16),v,x);return C.position.set(A,w,m),C.scale.set(b,D,R),C}function h(x,v,A,w,m,b,D,R,C=.04){let O=o(new Es(b,D,R,4,C),v,x);return O.position.set(A,w,m),O}function d(x,v,A,w=.006){let m=new Ui(A.map(b=>new U(...b)));return o(new _s(m,32,w,6,!1),v,x)}function u(x,v,A,w=.005){A=[...A].sort((O,q)=>O[0]-q[0]);let m=[],b=[],D=[],R=40;for(let O=0;O<A.length;O++){let[q,L,G,Y=0,k=0]=A[O];for(let oe=0;oe<=R;oe++){let Z=oe/R*Math.PI*2,ie=w*(Math.sin(Z*7+O*.8)+.4*Math.sin(Z*13-O*.6));if(m.push(k+Math.cos(Z)*(L+ie),q,Y+Math.sin(Z)*(G+ie)),b.push(oe/R,O/(A.length-1)),O&&oe){let re=O*(R+1)+oe;D.push(re,re-R-2,re-1,re,re-R-1,re-R-2)}}}let C=new Ft;for(let O of[0,A.length-1]){let[q,L,G,Y=0,k=0]=A[O],oe=m.length/3;m.push(k,q,Y),b.push(.5,.5);for(let Z=0;Z<R;Z++){let ie=O*(R+1)+Z,re=ie+1;O===0?D.push(oe,ie,re):D.push(oe,re,ie)}}return C.setAttribute("position",new mt(m,3)),C.setAttribute("uv",new mt(b,2)),C.setIndex(D),C.computeVertexNormals(),o(C,v,x)}let f=n.body=c(t,0,1.07,0);u(f,"#009e99",[[-.39,.235,.16],[-.35,.27,.18],[-.28,.29,.19],[-.15,.295,.205],[0,.31,.21],[.13,.33,.205],[.22,.29,.17],[.27,.19,.145],[.29,.14,.125]],.008),u(f,"#087b7b",[[-.39,.23,.16],[-.37,.267,.18],[-.32,.268,.18],[-.3,.255,.174]],.002);let _=l(f,"#0ab4ae",0,.225,.16,.29,.15,.22);_.rotation.x=-.3,l(f,"#047d7c",0,.285,.18,.21,.075,.15);for(let x of[-1,1])d(f,"#106c68",[[x*.24,.21,.13],[x*.27,.09,.24],[x*.24,-.14,.255],[x*.19,-.3,.205]],.026),d(f,"#f4b442",[[x*.24,.21,.155],[x*.265,.08,.265],[x*.235,-.14,.28]],.012);let S=c(f,0,-.015,.32);h(S,"#ec781d",0,0,0,.48,.58,.25,.08),h(S,"#ff9b2d",0,.17,.085,.465,.23,.14,.055),h(S,"#ee8c28",0,-.13,.143,.38,.215,.075,.04),d(S,"#bc621b",[[-.18,-.225,.19],[-.205,-.16,.19],[-.205,-.04,.18],[-.16,-.015,.184],[.16,-.015,.184],[.205,-.05,.18],[.205,-.18,.18],[.18,-.225,.19]],.007),d(S,"#ffb440",[[-.19,.25,.1],[-.22,.18,.14],[-.2,.09,.155],[0,.065,.16],[.2,.09,.155],[.22,.18,.14],[.19,.25,.1]],.009),h(S,"#684c2b",0,.09,.174,.045,.115,.025,.008),h(S,"#9d8460",0,.105,.194,.065,.065,.018,.008),h(S,"#ef992f",0,.105,.205,.037,.035,.008,.004),d(S,"#a6531a",[[-.075,.3,0],[-.075,.35,0],[.075,.35,0],[.075,.3,0]],.014);for(let x of[-1,1])h(S,"#d2681b",x*.255,-.12,-.005,.055,.23,.16,.02);let p=n.head=c(t,0,1.69,-.015);l(p,"#d99c76",0,-.035,0,.245,.285,.225),l(p,"#3f2318",0,.075,.035,.26,.245,.235);for(let x of[-1,1])l(p,"#d99770",x*.244,-.075,0,.045,.077,.048),l(p,"#b87551",x*.27,-.07,.013,.015,.038,.021);function M(x,v,A,w,m,b,D){let R=new Ui([new U(x,v,A),new U(x+w*.4,v+m*.5,A+b*.45),new U(x+w,v+m,A+b)]),C=new _s(R,12,1,9,!1),O=C.attributes.position;for(let q=0;q<=12;q++){let L=R.getPointAt(q/12),G=D*Math.pow(1-q/12,.65)+.002;for(let Y=0;Y<=9;Y++){let k=q*10+Y;O.setXYZ(k,L.x+(O.getX(k)-L.x)*G,L.y+(O.getY(k)-L.y)*G,L.z+(O.getZ(k)-L.z)*G)}}C.computeVertexNormals(),o(C,["#4a291a","#57301d","#613721"][Math.abs(Math.floor(x*30))%3],p)}for(let x=0;x<7;x++){let v=x/7*Math.PI*2;M(Math.cos(v)*.15,.18+Math.sin(v)*.025,Math.sin(v)*.145,.1+Math.cos(v)*.035,.075+x%3*.025,-.075,.105)}for(let x=0;x<4;x++)M(-.16+x*.105,.07,.17,.065,.07,.045,.092);for(let x of[-1,1]){let b=function(C,O,q,L){let G=new Oi(m,{depth:O,bevelEnabled:!0,bevelThickness:L,bevelSize:L,bevelSegments:3,steps:1,curveSegments:10});G.rotateX(Math.PI/2);let Y=o(G,q,w);return Y.position.y=C,Y},v=c(t,x*.16,.74,0);u(v,"#303532",[[.055,.133,.16],[-.02,.145,.165],[-.12,.142,.16],[-.23,.138,.146],[-.285,.13,.14]],.003),u(v,"#3e423e",[[-.25,.141,.15],[-.28,.141,.15],[-.295,.133,.145]],.001),d(v,"#202522",[[x*.135,-.04,.04],[x*.145,-.16,.04],[x*.136,-.25,.03]],.004);let A=c(v,0,-.32,0);u(A,"#e4aa82",[[.08,.091,.09],[.015,.096,.1],[-.09,.084,.085],[-.18,.068,.073],[-.245,.064,.068]],.001),u(A,"#fcf4df",[[-.22,.069,.073],[-.245,.077,.077],[-.29,.079,.078],[-.33,.07,.077]],.001),u(A,"#059a96",[[-.24,.077,.078],[-.25,.079,.08],[-.264,.079,.08]],0);let w=c(A,0,-.32,0),m=new xi;m.moveTo(-.078,.12),m.bezierCurveTo(-.12,.1,-.125,-.09,-.124,-.21),m.bezierCurveTo(-.12,-.29,.095,-.3,.121,-.22),m.bezierCurveTo(.13,-.11,.115,.09,.075,.12),m.closePath(),b(-.07,.035,"#dad4c3",.012),b(-.035,.045,"#fff5e0",.015),u(w,"#f9f0dd",[[-.02,.102,.18,-.075],[.015,.102,.18,-.075],[.06,.088,.145,-.06],[.105,.073,.095,-.008]],.001),l(w,"#079e99",0,.085,.053,.082,.06,.065);for(let C=0;C<4;C++)d(w,"#fffbed",[[-.065,.078-C*.006,-.033-C*.03],[0,.088-C*.006,-.043-C*.03],[.065,.078-C*.006,-.033-C*.03]],.006);for(let C=0;C<7;C++)h(w,C%2?"#a0a397":"#babbae",0,-.113,-.23+C*.047,.17,.012,.022,.003);for(let C of[-1,1])d(w,"#d0c6b3",[[C*.102,-.015,.06],[C*.108,-.01,-.12],[C*.075,-.005,-.23]],.004);s.push({side:x,kind:"leg",g:v,knee:A,foot:w});let D=c(t,x*.32,1.27,0);D.rotation.z=x*-.12,u(D,"#08a7a0",[[.02,.12,.135],[-.04,.135,.14],[-.15,.128,.125],[-.25,.105,.105],[-.3,.098,.1]],.005);let R=c(D,0,-.28,0);l(D,"#079e99",0,-.275,0,.102,.105,.106),u(R,"#08a099",[[.02,.1,.105],[-.08,.108,.105],[-.19,.09,.085],[-.245,.075,.075]],.005),u(R,"#077f7e",[[-.218,.078,.077],[-.25,.078,.077],[-.265,.07,.073]],0),l(R,"#e2a178",0,-.3,0,.075,.092,.07),l(R,"#ce8c66",x*-.06,-.29,-.028,.03,.047,.035);for(let C=0;C<3;C++)d(R,"#ba7956",[[x*.04,-.34+C*.018,.047],[x*-.01,-.347+C*.018,.06]],.002);s.push({side:x,kind:"arm",g:D,knee:R})}return{hero:t,rig:n,limbs:s}}function mc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ft;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in d.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(d.attributes[_]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in d.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(d.morphAttributes[_]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,_,h),l+=_}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Iu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let S=0;S<a[h].length;++S)f.push(a[h][S][u]);let _=Iu(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}function Iu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Yt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let _=0;_<t;_++){let S=h.getComponent(u,_);o.setComponent(u+d,_,S)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Pu(i,e){let t=new zo({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.outputColorSpace=Ot,t.toneMapping=Mr,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Ya;let n=new Js;n.background=new it("#7fc8ed"),n.fog=new Zs("#a9d6e6",48,95);let s=new sn(57,1,.1,190);n.add(new gr("#e1f1ff","#a48967",1));let r=new vr("#fff0cc",2.8);r.position.set(-12,23,9),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-18,right:18,top:24,bottom:-18,near:.1,far:85}),r.shadow.bias=-6e-4,r.shadow.normalBias=.035,r.shadow.radius=2,n.add(r),n.add(r.target),r.target.position.set(0,0,0);let a=new Si().load("art/plaster.jpg");a.wrapS=a.wrapT=jn,a.colorSpace=Ot,a.anisotropy=4;let o=new Bn({vertexColors:!0,roughness:.85});o.onBeforeCompile=B=>{B.uniforms.plaster={value:a},B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSurfacePos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSurfacePos=position;`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSurfacePos;
uniform sampler2D plaster;
float grain(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}`).replace("#include <color_fragment>",`#include <color_fragment>
float speckle=grain(floor(vSurfacePos*130.)); float patina=grain(floor(vSurfacePos*9.)); diffuseColor.rgb*=.94+speckle*.05+patina*.04; vec3 N=abs(normalize(cross(dFdx(vSurfacePos),dFdy(vSurfacePos)))); vec2 tc=N.x>N.z?vSurfacePos.zy:vSurfacePos.xy; if(diffuseColor.r>.45 && diffuseColor.g>.25 && diffuseColor.b>.15){diffuseColor.rgb*=texture2D(plaster,tc*.35).rgb*1.3;}`)};let c={box:new _n(1,1,1),round:new Es(1,1,1,1,.12),sphere:new ni(1,12,8),small:new gs(1,0),leaf:new gs(1,1),cyl:new _i(1,1,1,10),cone:new ir(1,1,12)},l=new Ft;l.setAttribute("position",new mt([0,.2,0,0,0,-1,-.65,0,-.4,-.8,0,.2,-.45,0,.7,0,0,1,.45,0,.7,.8,0,.2,.65,0,-.4],3)),l.setAttribute("uv",new mt([.5,.5,.5,0,0,.2,0,.5,0,.8,.5,1,1,.8,1,.5,1,.2],2)),l.setIndex([0,1,2,0,2,3,0,3,4,0,4,5,0,5,6,0,6,7,0,7,8,0,8,1]),l.computeVertexNormals(),c.leafy=l;let h=new U,d=new gn,u=new U,f=new Mt,_=new An,S=new it,g=801,p=()=>(g=Math.imul(g,1664525)+1013904223>>>0,g/4294967296);function M(B,P,W,te,z,ne,le,Xe,qe,ht=0,ct=0,Ge=0){let Me=c[P].index?c[P].toNonIndexed():c[P].clone();_.set(ht,ct,Ge),d.setFromEuler(_),f.compose(h.set(W,te,z),d,u.set(ne,le,Xe)),Me.applyMatrix4(f),S.set(qe);let Le=new Float32Array(Me.attributes.position.count*3);for(let ot=0;ot<Le.length;ot+=3)Le[ot]=S.r,Le[ot+1]=S.g,Le[ot+2]=S.b;Me.setAttribute("color",new Yt(Le,3)),B.push(Me)}let x=(B,P,W,te,z,ne,le,Xe,qe=0)=>M(B,"box",P,W,te,z,ne,le,Xe,0,0,qe),v=!1,A=(B,P,W,te,z,ne,le,Xe,qe=0,ht=0,ct=0)=>M(B,v?"round":"box",P,W,te,z,ne,le,Xe,qe,ht,ct),w=(B,P,W,te,z,ne,le,Xe)=>M(B,v?"sphere":"small",P,W,te,z,ne,le,Xe),m=(B,P,W,te,z,ne,le,Xe=0,qe=0)=>M(B,"cyl",P,W,te,z,ne,z,le,Xe,0,qe);function b(B,P=n,W=!0,te=o){if(!B.length)return null;let z=mc(B);for(let le of B)le.dispose();let ne=new Pt(z,te);return ne.castShadow=W,ne.receiveShadow=!0,P.add(ne),ne}function D(B){let P=document.createElement("canvas");P.width=P.height=1024;let W=P.getContext("2d");if(W.fillStyle=B==="stone"?"#ab9e8a":"#f5dfbd",W.fillRect(0,0,1024,1024),B==="stone")for(let z=0;z<16;z++)for(let ne=-1;ne<8;ne++){let le=ne*146+(z%2?73:0),Xe=z*64,qe=Math.floor(p()*17);W.fillStyle=`rgb(${176+qe},${163+qe},${144+qe})`,W.fillRect(le+2,Xe+2,142,60),W.fillStyle="#e1d0b8",W.fillRect(le+3,Xe+2,140,2),W.fillStyle="#928575",W.fillRect(le+3,Xe+60,140,2);let ht=W.createLinearGradient(le,Xe,le+100,Xe+64);ht.addColorStop(0,"#fff4d71c"),ht.addColorStop(.5,"#4e40370a"),ht.addColorStop(1,"#8d7b641a"),W.fillStyle=ht,W.fillRect(le+3,Xe+4,140,55);for(let ct=0;ct<12;ct++)W.fillStyle=ct%2?"#fff4d715":"#584f3e12",W.fillRect(le+5+p()*130,Xe+4+p()*50,3+p()*19,1+p()*2)}for(let z=0;z<2e4;z++)W.fillStyle=p()>.5?"#ffffff0b":"#493a2408",W.fillRect(p()*1024,p()*1024,2+p()*5,1+p()*2);let te=new Ni(P);return te.colorSpace=Ot,te.wrapS=te.wrapT=jn,te.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),te}let R=new Si().load("art/paving.jpg");R.colorSpace=Ot,R.wrapS=R.wrapT=jn,R.anisotropy=8,R.repeat.set(1.5,30);let C=new Si().load("art/paving-height.jpg");C.wrapS=C.wrapT=jn,C.repeat.copy(R.repeat);let O=new Pt(new Fn(8.6,230),new Bn({map:R,bumpMap:C,bumpScale:.055,roughness:.93}));O.rotation.x=-Math.PI/2,O.position.set(0,.012,-93),O.receiveShadow=!0,n.add(O);let q=R.clone();q.needsUpdate=!0,q.repeat.set(.6,30);let L=new Bn({map:q,color:"#f2dfbf",roughness:.95});for(let B of[-1,1]){let P=new Pt(new _n(2.7,.24,230),L);P.position.set(B*5.65,-.03,-93),P.receiveShadow=!0,n.add(P)}let G=[];x(G,0,-.3,-90,150,.3,240,"#c6b28e");for(let B of[-1.3,1.3])x(G,B,.023,-90,.12,.035,240,"#dfc9a7"),x(G,B-.09,.025,-90,.025,.04,240,"#9d8d75");b(G,n,!1);let Y=document.createElement("canvas");Y.width=512,Y.height=2048;let k=Y.getContext("2d");k.fillStyle="#3d4b5c",k.globalAlpha=.1;for(let B=0;B<4;B++){let P=B*512+200;k.beginPath(),k.moveTo(0,P),k.lineTo(270,P+125),k.lineTo(270,P+395),k.lineTo(0,P+270),k.fill()}k.globalAlpha=.12;for(let B=0;B<3;B++){let W=B*690+230;k.beginPath(),k.ellipse(155,W+95,110,55,.55,0,Math.PI*2),k.fill(),k.save(),k.translate(65,W),k.rotate(-.52),k.fillRect(0,0,13,165),k.restore()}let oe=new Ni(Y),Z=new Un({map:oe,transparent:!0,depthWrite:!1,opacity:.8}),ie=[],re=[["#f1c39e","#e8b28e"],["#f3ddbb","#ead1a5"],["#ed9f7e","#d79077"],["#eecda9","#d3b28c"],["#f3dfbd","#dfc5a1"],["#e9aa96","#d99d89"]];function Ie(B,P,W,te=1){m(B,P,1.45*te,W,.15*te,2.9*te,"#805335");for(let ne=0;ne<7;ne++){let le=ne*2.4;M(B,"cyl",P+Math.cos(le)*.3*te,2.2*te,W+Math.sin(le)*.3*te,.08*te,1.5*te,.08*te,"#8a623e",Math.cos(le)*.6,0,Math.sin(le)*.6)}let z=["#579333","#76ab3d","#3f7d2c","#91b849","#6da43a","#a2bb52"];for(let ne=0;ne<1800;ne++){let le=p()*Math.PI*2,Xe=Math.cbrt(p()),qe=(p()-.5)*2,ht=Math.sqrt(1-qe*qe)*Xe*1.25*te,ct=P+Math.cos(le)*ht,Ge=W+Math.sin(le)*ht,Me=3*te+qe*Xe*1.05*te;M(B,"leafy",ct,Me,Ge,.095*te,.095*te,.17*te,z[ne%z.length],p()*1.5,p()*6.28,p()*1.3)}}function We(B,P,W,te=!1){m(B,P,.3,W,.31,.58,"#bb7148"),m(B,P,.58,W,.35,.11,"#df9661"),m(B,P,.64,W,.25,.025,"#514333");for(let z=0;z<7;z++){let ne=z*2.4;w(B,P+Math.cos(ne)*.18,.76+z%3*.09,W+Math.sin(ne)*.18,.22,.22,.22,z%2?"#76a33b":"#4f8536"),te&&w(B,P+Math.cos(ne)*.25,.93+z%3*.09,W+Math.sin(ne)*.25,.09,.08,.09,z%2?"#f065a2":"#f6c34f")}}function ee(B,P,W){m(B,P,1.9,W,.055,3.8,"#294a4b"),m(B,P,.17,W,.17,.32,"#314c4b"),A(B,P,3.55,W,.32,.5,.32,"#f7edc3");for(let te of[-.18,.18])for(let z of[-.18,.18])x(B,P+te,3.55,W+z,.032,.56,.032,"#2f4c4d");x(B,P,3.88,W,.49,.09,.49,"#29484c"),M(B,"cone",P,4.02,W,.34,.23,.34,"#315050"),w(B,P,4.2,W,.055,.11,.055,"#29484c")}function Te(B,P,W,te){for(let z=0;z<4;z++)x(B,P,.5,W-.57+z*.36,.7,.09,.28,"#876047");for(let z=0;z<3;z++)x(B,P+te*.32,.75+z*.15,W,.1,.1,1.4,"#a7774e");for(let z of[-.5,.5])x(B,P,.25,W+z,.55,.48,.07,"#315151"),x(B,P+te*.31,.65,W+z,.07,1,.07,"#315151")}function Pe(B,P,W,te){let z=6.5+te*7%5,ne=4.8,le=8.1,Xe=P*(9.1+te%3*.14),qe=P*(6.68+te%3*.14),ht=re[te%re.length];x(B,Xe,z/2,W,ne,z,le,ht[0]),x(B,qe,.55,W,.18,1.1,le,"#d9ba96");for(let Ge=.18;Ge<1;Ge+=.27)for(let Me=-3.8;Me<4;Me+=.9)x(B,qe-P*.03,Ge,W+Me,.06,.018,.86,"#be9e77");x(B,Xe,z-.1,W,ne+.35,.24,le+.3,"#fff0d6"),x(B,Xe,z+.12,W,ne+.45,.16,le+.4,"#c77f54");for(let Ge=-4;Ge<=4;Ge+=.32)m(B,qe,z+.26,W+Ge,.17,.48,te%2?"#bd6945":"#cf8252",0,Math.PI/2);x(B,Xe+P*.9,z+.65,W+1,1.1,1.4,.9,ht[1]),x(B,Xe+P*.9,z+1.37,W+1,1.3,.15,1.1,"#bb7651");for(let Ge=0;Ge<Math.floor((z-1.5)/2.25);Ge++)for(let Me=0;Me<3;Me++){let Le=2.35+Ge*2.25,ot=W-2.7+Me*2.65;x(B,qe-P*.035,Le,ot,.12,1.5,1.06,"#fae9cd"),x(B,qe-P*.11,Le+.02,ot,.08,1.26,.83,"#335b60"),x(B,qe-P*.17,Le+.02,ot,.05,1.15,.035,"#c7d6c4"),x(B,qe-P*.17,Le+.02,ot,.05,.035,.8,"#c7d6c4");for(let Tt of[-.64,.64]){x(B,qe-P*.08,Le,ot+Tt,.12,1.37,.36,"#438c7d");for(let Dt=0;Dt<7;Dt++)x(B,qe-P*.16,Le-.53+Dt*.17,ot+Tt,.07,.035,.31,"#2f7769")}if(x(B,qe-P*.22,Le-.8,ot,.47,.13,1.4,"#fff1d2"),Ge===1&&Me===1&&te%2===0){x(B,qe-P*.52,Le-.86,ot,1.2,.17,1.8,"#ead3ae");for(let Tt=-.8;Tt<=.8;Tt+=.2)x(B,qe-P*1.05,Le-.52,ot+Tt,.04,.75,.04,"#325c56");x(B,qe-P*1.05,Le-.13,ot,.05,.055,1.85,"#325c56");for(let Tt=0;Tt<9;Tt++)w(B,qe-P*.98,Le-.4,ot-.7+Tt*.18,.14,.14,.14,Tt%2?"#d6558f":"#5c9537")}}x(B,qe-P*.08,1.2,W,.08,2.1,3.7,"#396a6d");for(let Ge of[-1.88,0,1.88])x(B,qe-P*.17,1.2,W+Ge,.12,2.25,.12,"#f9e6c9");x(B,qe-P*.16,.2,W,.15,.15,3.9,"#e3c9a4");let ct=te%3===0?"#da765e":te%3===1?"#328d88":"#b4a354";for(let Ge=0;Ge<10;Ge++){let Me=W-2.02+Ge*.45;A(B,qe-P*.82,2.54,Me,1.8,.14,.46,Ge%2?"#fff0d2":ct,0,0,P*.12),A(B,qe-P*1.65,2.34,Me,.1,.36,.46,Ge%2?"#fff0d2":ct)}if(te%3===0)for(let Ge=0;Ge<80;Ge++){let Me=W-3.45+Math.sin(Ge*2.4)*.5,Le=3+p()*3.8;M(B,"small",qe-P*(.18+p()*.16),Le,Me,.12,.18,.16,Ge%5===0?"#de5c99":Ge%2?"#568b2f":"#7baa3d")}if(te%2===1){We(B,P*5.2,W-2.8,!0);let Ge=P*5.6;m(B,Ge,.73,W+1.1,.5,.09,"#b78555"),m(B,Ge,.38,W+1.1,.06,.7,"#3c5550");for(let Me of[-.85,.85]){x(B,Ge,.42,W+1.1+Me,.53,.08,.5,"#a77b4e"),x(B,Ge+P*.2,.7,W+1.1+Me,.09,.54,.5,"#a77b4e");for(let Le of[-.2,.2])x(B,Ge+Le,.2,W+1.1+Me,.04,.4,.04,"#3c5550")}}}for(let B=0;B<2;B++){let P=[],W=new Ht;for(let z of[-1,1]){for(let ne=0;ne<4;ne++)Pe(P,z,-ne*11-5,B*8+ne+(z>0?2:0));for(let ne=0;ne<3;ne++){let le=-ne*15-10;Ie(P,z*5.35,le,.92),We(P,z*5.35,le),ee(P,z*4.65,le+5.4)}Te(P,z*5.4,-21,z);for(let ne=0;ne<44;ne++)x(P,z*4.38,.095,-ne*1.02,.25,.26,.96,ne%3?"#e8d7b8":"#f7e8cd")}b(P,W,!0);let te=new Pt(new Fn(14,44),Z);te.rotation.x=-Math.PI/2,te.position.set(0,.055,-22),W.add(te),W.position.z=-B*44,n.add(W),ie.push({g:W,base:-B*44})}let Ve=new Si().load("art/coast.jpg");Ve.colorSpace=Ot;let we=new Pt(new Fn(270,152),new Un({map:Ve,fog:!1,toneMapped:!1}));we.position.set(-55,40,-155),n.add(we);let Be=new Ht,gt=[];for(let B of[-1,1])x(gt,B*5.3,2.7,0,1.3,5.4,1.9,"#d6c7a6"),x(gt,B*5.3,.3,0,1.7,.6,2.2,"#b9ad91");for(let B=0;B<22;B++){let P=B/22*Math.PI,W=(B+.99)/22*Math.PI,te=4.7,z=5.3,ne=new xi;ne.moveTo(Math.cos(P)*te,Math.sin(P)*2.1+3.6),ne.lineTo(Math.cos(P)*z,Math.sin(P)*2.6+3.6),ne.lineTo(Math.cos(W)*z,Math.sin(W)*2.6+3.6),ne.lineTo(Math.cos(W)*te,Math.sin(W)*2.1+3.6),ne.closePath();let le=new Oi(ne,{depth:1.6,bevelEnabled:!1});le.translate(0,0,-.8);let Xe=new it(B%2?"#e2d4b4":"#d8c7a5"),qe=new Float32Array(le.attributes.position.count*3);for(let ht=0;ht<qe.length;ht+=3)qe[ht]=Xe.r,qe[ht+1]=Xe.g,qe[ht+2]=Xe.b;le.setAttribute("color",new Yt(qe,3)),gt.push(le)}x(gt,0,6.45,0,12,.5,2.1,"#e4d3b2");for(let B=-5.8;B<6;B+=.4)x(gt,B,7.1,-.7,.055,1.05,.06,"#305953");x(gt,0,7.65,-.7,12,.09,.09,"#315c57");for(let B of[-4,-1.8,1.8,4]){m(gt,B,6.95,-.2,.3,.4,"#bb7952");for(let P=0;P<5;P++)w(gt,B+(P-2)*.14,7.2,-.2,.19,.2,.2,P%2?"#dc669a":"#5d943e")}b(gt,Be),n.add(Be);let Ce,Je={},nt=[],ae,he,me=e;function Re(B){if(v=!0,me=B,Ce&&(n.remove(Ce),Ce.traverse(Me=>{Me.isMesh&&Me.geometry.dispose()})),Ce=new Ht,Ce.scale.setScalar(1.16),n.add(Ce),Je={},nt=[],ae=null,B==="courier"){n.remove(Ce);let Me=Cu(n);Ce=Me.hero,Je=Me.rig,nt=Me.limbs,Ce.scale.setScalar(1.16),he=new Pt(new ni(1.22,16,12),new Un({color:"#83f1ee",transparent:!0,opacity:.15,wireframe:!0})),he.position.y=.9,he.visible=!1,Ce.add(he),v=!1;return}let P=B==="courier",W=B==="fox",te=B==="cat",z=B==="bunny",ne=B==="panda",le=W?"#d87932":te?"#afa0d8":z?"#e8d4d0":"#f1eee1",Xe=ne?"#35404a":"#4e3930",qe="#fff0d6";function ht(Me,Le,ot,Tt,Dt,fn=Ce){let In=new Ht;return In.position.set(Le,ot,Tt),b(Dt,In,!0),fn.add(In),Je[Me]=In,In}let ct=[];if(P){A(ct,0,.03,0,.62,.65,.4,"#109f9f"),w(ct,0,.34,.03,.35,.19,.3,"#0a888b"),w(ct,0,.36,.06,.28,.13,.24,"#1bb5b0"),A(ct,0,-.3,0,.55,.16,.39,"#0a7e82");for(let Me of[-1,1])A(ct,Me*.23,.04,.215,.065,.66,.055,"#574d37",0,0,Me*-.08);A(ct,0,.02,.32,.48,.55,.23,"#e58028"),A(ct,0,.16,.45,.45,.2,.1,"#ffa634"),A(ct,0,-.1,.46,.37,.23,.08,"#f3932f"),x(ct,0,.14,.51,.1,.09,.035,"#6d5a39");for(let Me of[-1,1])x(ct,Me*.19,-.04,.49,.035,.35,.025,"#d47025")}else w(ct,0,0,0,.34,.43,.28,le),w(ct,0,-.03,-.23,.23,.3,.055,ne?"#fff":qe),A(ct,0,.21,.02,.68,.14,.54,"#169a99"),A(ct,-.25,.02,.27,.12,.33,.08,"#20b9ad",.12,.1,-.2),A(ct,.08,.03,.25,.32,.37,.14,"#d99640");ht("body",0,P?1.02:.88,0,ct);let Ge=[];if(P){w(Ge,0,0,0,.28,.3,.25,"#d8986c"),w(Ge,0,.08,.08,.31,.25,.26,"#4c2d20");for(let Me=0;Me<10;Me++){let Le=Me*2.4;w(Ge,Math.cos(Le)*.23,.2+Math.sin(Me)*.04,Math.sin(Le)*.18,.13,.12,.14,Me%2?"#5d3520":"#714227")}for(let Me=0;Me<5;Me++)M(Ge,"cone",-.2+Me*.09,.34+Me*.01,.04,.12,.28,.13,Me%2?"#6e3e23":"#4c2d20",.35,.2,-.6);for(let Me of[-1,1])w(Ge,Me*.278,-.02,0,.06,.09,.06,"#d49468")}else{w(Ge,0,0,0,.4,.37,.32,le),w(Ge,0,-.08,-.26,.25,.17,.23,qe),w(Ge,0,-.03,-.46,.075,.055,.05,"#3c3432");for(let Me of[-1,1])z?(w(Ge,Me*.19,.49,.01,.12,.44,.1,le),w(Ge,Me*.19,.51,-.07,.06,.3,.035,"#d6a1a1")):ne?w(Ge,Me*.31,.29,.01,.16,.17,.13,Xe):(M(Ge,"cone",Me*.27,.35,.01,.22,.43,.19,le,0,Math.PI/4,Me*-.1),M(Ge,"cone",Me*.27,.37,-.06,.12,.25,.08,"#f0c6ac",0,Math.PI/4,Me*-.1)),w(Ge,Me*.2,.02,-.27,.055,.065,.025,"#2e3538")}ht("head",0,P?1.67:1.49,-.025,Ge),P&&Je.head.scale.setScalar(.84);for(let Me of[-1,1]){let Le=[],ot=[],Tt=[],Dt=new Ht;if(Dt.position.set(Me*(P?.17:.18),P?.74:.59,0),Ce.add(Dt),P){A(Le,0,-.12,0,.26,.32,.29,"#37434b"),m(Le,0,-.29,0,.09,.2,"#dca078"),m(ot,0,-.12,0,.085,.28,"#dfa77d"),m(ot,0,-.29,0,.09,.13,"#f4f0dc"),m(ot,0,-.26,0,.095,.025,"#20a39e"),A(Tt,0,-.015,-.08,.235,.16,.39,"#fcf4df"),A(Tt,0,-.09,-.07,.25,.06,.41,"#d6cbb9"),A(Tt,0,.04,.015,.2,.08,.16,"#1c9c99");for(let yn=0;yn<3;yn++)x(Tt,0,.07,-.06-yn*.04,.14,.015,.017,"#fff6e2");for(let yn=0;yn<6;yn++)A(Tt,0,-.124,-.24+yn*.06,.17,.013,.035,yn%2?"#9b9b92":"#b6b7ac")}else w(Le,0,-.14,0,.13,.23,.14,ne?Xe:le),w(ot,0,-.13,0,.105,.2,.11,ne?Xe:le),w(Tt,0,-.02,-.09,.15,.09,.23,ne?Xe:qe);b(Le,Dt);let fn=ht(`knee${Me}`,0,-.32,0,ot,Dt),In=ht(`foot${Me}`,0,-.32,0,Tt,fn);nt.push({side:Me,kind:"leg",g:Dt,knee:fn,foot:In});let Ls=[],Xn=[],Ai=new Ht;Ai.position.set(Me*(P?.35:.34),P?1.25:1.07,0),Ce.add(Ai),w(Ls,0,-.13,0,.14,.23,.14,P?"#10a9a5":ne?Xe:le),w(Xn,0,-.12,0,.1,.19,.1,P?"#109b9d":ne?Xe:le),w(Xn,0,-.29,-.015,.09,.11,.085,P?"#dca079":ne?Xe:qe),b(Ls,Ai);let Or=ht(`elbow${Me}`,0,-.28,0,Xn,Ai);nt.push({side:Me,kind:"arm",g:Ai,knee:Or})}if(W||te){let Me=[];w(Me,0,.18,.2,W?.22:.09,.38,.17,le),w(Me,0,.45,.33,W?.19:.09,.22,.15,W?qe:le),ae=ht("tail",0,.59,.17,Me),ae.rotation.x=.7}else if(z){let Me=[];w(Me,0,0,0,.18,.18,.18,"#fff7e9"),ht("tail",0,.61,.3,Me)}he=new Pt(new ni(1.22,16,12),new Un({color:"#83f1ee",transparent:!0,opacity:.15,wireframe:!0})),he.position.y=.9,he.visible=!1,Ce.add(he),v=!1}Re(e);let xe=document.createElement("canvas");xe.width=xe.height=64;let Ke=xe.getContext("2d"),Ne=Ke.createRadialGradient(32,32,0,32,32,31);Ne.addColorStop(0,"#00000070"),Ne.addColorStop(.4,"#00000042"),Ne.addColorStop(1,"#00000000"),Ke.fillStyle=Ne,Ke.fillRect(0,0,64,64);let et=new Pt(new Fn(1.8,1.45),new Un({map:new Ni(xe),transparent:!0,depthWrite:!1}));et.rotation.x=-Math.PI/2,et.position.y=.035,n.add(et);let je=new Ht;n.add(je);let lt=[],F=[],xt=null,st=0,St=null,ve=null,bt=new Xt,He=[];function Ye(B,P){let W=new Float32Array(B.attributes.position.count*3),te=new it(P);for(let z=0;z<W.length;z+=3)W[z]=te.r,W[z+1]=te.g,W[z+2]=te.b;B.setAttribute("color",new Yt(W,3)),He.push(B)}Ye(new _i(.3,.3,.09,24).rotateX(Math.PI/2),"#ffc526");for(let B of[-1,1])Ye(new _i(.247,.247,.014,24).rotateX(Math.PI/2).translate(0,0,B*.052),"#e99c12"),Ye(new fr(.278,.026,6,24).translate(0,0,B*.058),"#ffe477"),Ye(new _n(.17,.17,.02).rotateZ(Math.PI/4).translate(0,0,B*.071),"#ffde55");let E=mc(He),y=new Bn({color:"#ffffff",vertexColors:!0,metalness:.12,roughness:.35,emissive:"#8c5d00",emissiveIntensity:.12});function V(){for(let B of[...je.children])je.remove(B),B!==xt&&B.geometry?.dispose();lt=[],F=[],xt=null}function ce(B){V();let P=[];for(let te of B.obs){let z=te.lane*2.6,ne=-te.x;if(te.type==="crate"){A(P,z,.63,ne,1.62,1.26,1.18,"#a96f36");for(let le=0;le<5;le++)x(P,z-.63+le*.315,.63,ne+.598,.29,1.08,.04,le%2?"#c18a46":"#b67d3c"),x(P,z,.63,ne-.598,.29,1.08,.04,"#b98140");for(let le of[.09,1.17])A(P,z,le,ne+.64,1.67,.16,.12,"#d19a50");for(let le of[-.73,.73])A(P,z+le,.63,ne+.65,.16,1.16,.13,"#cf9953");A(P,z,.63,ne+.68,.16,1.67,.095,"#cd9750",0,0,-.87);for(let le of[-.71,.71])for(let Xe of[.12,1.14])w(P,z+le,Xe,ne+.726,.032,.032,.012,"#6c6654");for(let le=0;le<4;le++)x(P,z-.59+le*.39,1.27,ne,.37,.025,1.05,le%2?"#bd8646":"#c28e4c")}else if(te.type==="barrier"){A(P,z,.51,ne,1.95,.97,.62,"#ef7d33");for(let le of[-.73,0,.73])A(P,z+le,.52,ne+.323,.23,.78,.025,"#fff0d2",0,0,-.48);for(let le of[-.72,.72])A(P,z+le,.08,ne,.45,.16,.91,"#4c5556"),A(P,z+le,.98,ne,.2,.09,.2,"#55595a")}else{for(let le of[-1,1])A(P,z+le,1.42,ne,.22,2.84,.36,"#317b7b"),A(P,z+le,.09,ne,.55,.17,.72,"#465e5c");A(P,z,1.84,ne,2.2,1.34,.48,"#d6814c");for(let le=-.85;le<1;le+=.42)A(P,z+le,1.84,ne+.25,.18,1.15,.025,"#ffe8bc",0,0,-.22);A(P,z,2.57,ne,2.44,.21,.59,"#377d7b")}}St=b(P,je,!0),lt=B.coins,st=lt.length,xt=new js(E,y,st),xt.instanceMatrix.setUsage($l),xt.frustumCulled=!1,je.add(xt);for(let te of B.powers){let z=[];w(z,0,1,0,.39,.45,.27,te.type==="shield"?"#76e5dc":"#d49aeb"),x(z,0,1.03,.28,.14,.48,.04,"#fff8dc"),te.type==="magnet"&&x(z,0,.83,.28,.43,.12,.04,"#fff8dc");let ne=b(z,je,!1);F.push({p:te,g:ne})}let W=[];for(let te of[-4.1,4.1])m(W,te,2.9,-B.length,.07,5.8,"#f4e1b7");for(let te=0;te<12;te++)for(let z=0;z<2;z++)x(W,-3.85+te*.7,5.1+z*.55,-B.length,.7,.55,.06,(te+z)%2?"#315c66":"#fff3da");ve=b(W,je,!1)}let se=0,de=0,_e=0,Q=0,K=0,ge=0,I=390,j=844,$={frames:0,frameMs:[],calls:0,triangles:0,dpr:t.getPixelRatio(),quality:"auto"},fe=0;function ue(B,P){P!=="playing"||B<=0||($.frameMs.push(B*1e3),$.frameMs.length>600&&$.frameMs.shift(),$.frames>45&&B>.035?fe++:fe=Math.max(0,fe-1),fe>25&&t.getPixelRatio()>1&&(t.setPixelRatio(1),t.setSize(I,j,!1),$.dpr=1,$.quality="adaptive-native",fe=0))}function pe(){I=innerWidth,j=innerHeight,t.setSize(I,j,!1),s.aspect=I/j,s.fov=I>j?61:56,s.updateProjectionMatrix()}function ze(B,P,W){let te=W==="playing",z=W==="menu";(te||z)&&(se+=B);let ne=P?.x??se*2.5,le=P?.lateral??0,Xe=P?.y??0;R.offset.y=ne/230*30,C.offset.copy(R.offset),q.offset.y=ne/230*30;for(let Le of ie)Le.g.position.z=((Le.base+ne+44)%88+88)%88-44;if(Be.position.z=((-100+ne+30)%240+240)%240-210,Be.visible=Be.position.z<-22,je.position.z=ne,xt){let Le=0,ot=se*2.6;for(let Tt=0;Tt<lt.length;Tt++){let Dt=lt[Tt],fn=ne-Dt.x;Dt.taken||fn>8||fn<-130||(bt.position.set(Dt.lane*2.6,Dt.y,-Dt.x),bt.rotation.set(0,ot,0),bt.scale.setScalar(1),bt.updateMatrix(),xt.setMatrixAt(Le++,bt.matrix))}xt.count=Le,xt.instanceMatrix.needsUpdate=!0}for(let{p:Le,g:ot}of F)ot.position.set(Le.lane*2.6,Math.sin(se*3)*.12,-Le.x),ot.rotation.y=se*.7,ot.visible=!Le.taken&&ne-Le.x<10&&ne-Le.x>-130;let qe=te?Math.max(0,ne-ge):z?B*13:0;ge=ne,(te||z)&&(K+=qe*1.2);let ht=Math.sin(K),ct=Xe>.04,Ge=P?.slide>0?1:0;Q+=(Ge-Q)*(1-Math.exp(-B*20));let Me=P?(P.lane*2.6-le)*-.12:0;_e+=(Me-_e)*(1-Math.exp(-B*14)),Ce.position.set(le,Xe+(te||z?Math.sin(K*2)*.024+.025:0),0),Ce.rotation.set(-Q*.85,Math.sin(K)*.025,_e),Ce.scale.set(1.16,1.16*(1-Q*.38),1.16),Je.body.rotation.x=-.1+(ct?-.06:0),Je.body.rotation.y=ht*.075,Je.head.rotation.y=-ht*.045,Je.head.rotation.x=ct?-.05:Math.sin(K*2)*.02;for(let Le of nt)if(Le.kind==="leg"){let ot=K+(Le.side>0?Math.PI:0);Le.g.rotation.x=ct?-.45*Le.side:Math.sin(ot)*.7,Le.knee.rotation.x=ct?-.85:-Math.max(0,-Math.sin(ot))*1.15-.08,Le.foot.rotation.x=ct?-.3:-Math.max(0,Math.sin(ot))*.26}else Le.g.rotation.x=ct?-.65:-ht*Le.side*.58,Le.g.rotation.z=Le.side*-.08,Le.knee.rotation.x=.88+Math.max(0,-ht*Le.side)*.3;ae&&(ae.rotation.z=Math.sin(K*.55)*.19,ae.rotation.x=.65+Math.sin(K)*.07),he.visible=!!P?.shield,Ce.visible=!(P?.invincible>0&&Math.floor(se*14)%2),et.position.x=le,et.scale.setScalar(Math.max(.5,1-Xe*.13)),et.material.opacity=Math.max(.2,1-Xe*.2),de+=(le*.88-de)*(1-Math.exp(-B*18)),s.position.set(de,I>j?4:3.4,I>j?7.4:6.3),s.lookAt(de*.85,.85,I>j?-16:-18),t.render(n,s),$.calls=t.info.render.calls,$.triangles=t.info.render.triangles,$.frames++}return pe(),addEventListener("resize",pe),{renderer:t,scene:n,camera:s,makeHero:Re,populate:ce,clearObjects:V,resize:pe,render:ze,sampleFrame:ue,stats:$}}var{Run:q0,level:Y0,CHARS:Nr}=window.RunnerEngine,Lt=i=>document.getElementById(i),Is=Lt("scene"),Ur=Lt("panel"),Sc=Lt("overlay");function Du(i){let e=Nr.find(s=>s.id===i),t=e.color,n=i!=="courier";return`<svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true"><rect x="1" y="1" width="46" height="46" rx="16" fill="${t}" opacity=".18"/>${n?i==="bunny"?`<ellipse cx="17" cy="12" rx="5" ry="10" fill="${t}"/><ellipse cx="31" cy="12" rx="5" ry="10" fill="${t}"/>`:`<path d="M9 24L8 6L23 18L40 6L39 25Z" fill="${i==="panda"?"#44505b":t}"/>`:""}<ellipse cx="24" cy="27" rx="17" ry="15" fill="${n?t:"#f0bd93"}"/>${n?"":'<path d="M7 24C4 4 38 5 41 22L28 17L10 24" fill="#624437"/>'}<ellipse cx="24" cy="32" rx="10" ry="7" fill="#fff1dc"/><circle cx="18" cy="26" r="2" fill="#384554"/><circle cx="30" cy="26" r="2" fill="#384554"/><path d="M21 31Q24 35 27 31" fill="#384554"/></svg>`}var Nu="rulan-runner-v1";var at={coins:0,unlocked:1,character:"courier",owned:["courier","fox"],best:{},sound:!1},Vo=!0;try{let i=JSON.parse(localStorage.getItem(Nu)||"null");if(i){at.coins=Math.max(0,Math.min(1e8,Number(i.coins)||0)),at.unlocked=Math.max(1,Math.min(20,Math.floor(Number(i.unlocked)||1))),at.owned=Nr.filter(e=>e.cost===0||Array.isArray(i.owned)&&i.owned.includes(e.id)).map(e=>e.id),at.character=at.owned.includes(i.character)?i.character:"courier",at.sound=i.sound===!0;for(let e=1;e<=20;e++){let t=i.best?.[e];t&&Number.isFinite(t.stars)&&Number.isFinite(t.coins)&&(at.best[e]={stars:Math.min(3,Math.max(0,t.stars)),coins:Math.max(0,t.coins)})}}}catch{Vo=!1}function bc(){try{localStorage.setItem(Nu,JSON.stringify(at)),Vo=!0}catch{Vo=!1}}var Hi=Pu(Is,at.character),{renderer:Ho,scene:gc,camera:dy,makeHero:Z0,populate:Uu,clearObjects:J0}=Hi,ke=null,kt="menu",en=1,_c=!1;var Wo=0,Cs=0;function ai(i){Lt("toast").textContent=i,Lt("toast").classList.add("show"),clearTimeout(ai.timer),ai.timer=setTimeout(()=>Lt("toast").classList.remove("show"),2400)}var Hn;function $0(i){if(at.sound)try{Hn??=new(window.AudioContext||window.webkitAudioContext),Hn.resume();let e=Hn.createOscillator(),t=Hn.createGain();e.type="sine",e.frequency.setValueAtTime(i==="coin"?850:i==="jump"?330:i==="dead"?110:540,Hn.currentTime),e.frequency.exponentialRampToValueAtTime(i==="dead"?55:1200,Hn.currentTime+.12),t.gain.setValueAtTime(.035,Hn.currentTime),t.gain.exponentialRampToValueAtTime(.001,Hn.currentTime+.16),e.connect(t),t.connect(Hn.destination),e.start(),e.stop(Hn.currentTime+.17)}catch{}}function Wi(i){Sc.hidden=!1,Ur.innerHTML=i,Ur.scrollTop=0}var Tc=()=>`<span class="wallet"><span class="coinicon">\u25C6</span> ${at.coins.toLocaleString("he-IL")} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA</span>`;function tn(i,e){Lt(i)?.addEventListener("click",e)}function wi(){gc.fog.color.setHex(12182757),Ho.setClearColor(12182757),kt="menu",ke=null,Lt("hud").hidden=Lt("controls").hidden=!0,J0(),Uu(Y0(1)),Wi(`<p class="eyebrow">CITY RUNNER</p><h1>\u05E8\u05D0<span>\u05E0\u05E8</span></h1><p class="subtitle">\u05D4\u05E2\u05D9\u05E8 \u05D4\u05D9\u05D0 \u05DE\u05D2\u05E8\u05E9 \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05E9\u05DC\u05DA.<br>\u05E8\u05E6\u05D9\u05DD, \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD \u05D5\u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05DC\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4 \u05D4\u05D1\u05D0\u05D4.</p><div class="previewchip">${Du(at.character)} ${Nr.find(i=>i.id===at.character).name}</div><br>${Tc()}<button class="primary" id="play">\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DC\u05E8\u05D9\u05E6\u05D4 \xB7 \u05E9\u05DC\u05D1 ${at.unlocked}</button><div class="twocol"><button class="secondary" id="levels">\u05D1\u05D7\u05D9\u05E8\u05EA \u05E9\u05DC\u05D1</button><button class="secondary" id="characters">\u05D4\u05D3\u05DE\u05D5\u05D9\u05D5\u05EA \u05E9\u05DC\u05D9</button></div><div class="smallrow"><a href="../">\u2302 \u05DB\u05DC \u05D4\u05DE\u05E9\u05D7\u05E7\u05D9\u05DD</a><button class="quiet" id="help">\u05D0\u05D9\u05DA \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD?</button><button class="quiet" id="sound">\u05E6\u05DC\u05D9\u05DC ${at.sound?"\u05E4\u05D5\u05E2\u05DC":"\u05DB\u05D1\u05D5\u05D9"}</button></div>${Vo?"":'<p class="note">\u05D4\u05E9\u05DE\u05D9\u05E8\u05D4 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D9\u05EA \u05D0\u05D9\u05E0\u05D4 \u05D6\u05DE\u05D9\u05E0\u05D4 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D6\u05D4.</p>'}`),tn("play",()=>Fr(at.unlocked)),tn("levels",Fu),tn("characters",Ou),tn("help",K0),tn("sound",()=>{at.sound=!at.sound,bc(),wi()})}function Fu(){kt="menu";let i="";for(let e=1;e<=20;e++)i+=`<button data-level="${e}" ${e>at.unlocked?"disabled":""} class="${e===at.unlocked?"current":""}">${e}<small>${at.best[e]?"\u2605".repeat(at.best[e].stars):e<=at.unlocked?"\u05E4\u05EA\u05D5\u05D7":"\u05E0\u05E2\u05D5\u05DC"}</small></button>`;Wi(`<p class="eyebrow">\u05D4\u05DE\u05E1\u05E2 \u05D1\u05E2\u05D9\u05E8</p><h2>20 \u05E9\u05DC\u05D1\u05D9\u05DD. \u05E7\u05D3\u05D9\u05DE\u05D4!</h2><p class="muted">\u05D4\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \u05D2\u05D3\u05DC\u05D9\u05DD \u05E2\u05DD \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD.</p><div class="levelgrid">${i}</div><button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4</button>`),Ur.querySelectorAll("[data-level]").forEach(e=>e.onclick=()=>Fr(Number(e.dataset.level))),tn("back",wi)}function Ou(){kt="menu",Wi(`<button class="quiet" id="close" style="display:block;padding:3px 0 15px">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="eyebrow">\u05D4\u05D7\u05D1\u05E8\u05D9\u05DD \u05DC\u05E8\u05D9\u05E6\u05D4</p><h2>\u05E2\u05DD \u05DE\u05D9 \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05D4\u05D9\u05D5\u05DD?</h2>${Tc()}<p class="muted">\u05D4\u05E9\u05DC\u05D9\u05D7 \u05D5\u05D4\u05E9\u05D5\u05E2\u05DC \u05DB\u05D1\u05E8 \u05E9\u05DC\u05DA.<br>\u05DC\u05DB\u05DC \u05D4\u05D3\u05DE\u05D5\u05D9\u05D5\u05EA \u05D0\u05D5\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC\u05EA, \u05E8\u05E7 \u05DE\u05E8\u05D0\u05D4 \u05D0\u05D7\u05E8.</p><div class="shoplist">${Nr.map(i=>`<div class="shopitem"><div class="charicon">${Du(i.id)}</div><div class="info"><b>${i.name}</b><small>${at.owned.includes(i.id)?"\u05E4\u05EA\u05D5\u05D7 \u05DC\u05DE\u05E9\u05D7\u05E7":i.cost+" \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05E0\u05D0\u05E1\u05E4\u05D5 \u05D1\u05DE\u05E9\u05D7\u05E7"}</small></div><button class="buy" data-char="${i.id}" ${at.character===i.id||!at.owned.includes(i.id)&&at.coins<i.cost?"disabled":""}>${at.character===i.id?"\u05E0\u05D1\u05D7\u05E8":at.owned.includes(i.id)?"\u05DC\u05D1\u05D7\u05D5\u05E8":"\u25C6 "+i.cost}</button></div>`).join("")}</div><button class="secondary" id="back">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button><p class="note">\u05D0\u05D9\u05DF \u05E8\u05DB\u05D9\u05E9\u05D5\u05EA \u05D1\u05DB\u05E1\u05E3 \u05D0\u05DE\u05D9\u05EA\u05D9.</p>`),Ur.querySelectorAll("[data-char]").forEach(i=>i.onclick=()=>{let e=Nr.find(t=>t.id===i.dataset.char);if(!at.owned.includes(e.id)){if(at.coins<e.cost)return;at.coins-=e.cost,at.owned.push(e.id),ai(e.name+" \u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4!")}at.character=e.id,bc(),Z0(e.id),Ou()}),tn("back",wi),tn("close",wi)}function K0(){Wi('<h2>\u05E8\u05E6\u05D9\u05DD \u05D1\u05E7\u05DC\u05D5\u05EA</h2><div class="help"><p>\u05D4\u05E8\u05D9\u05E6\u05D4 \u05E7\u05D3\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.</p><p>\u2194 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05E9\u05DE\u05D0\u05DC\u05D4 \u05D0\u05D5 \u05D9\u05DE\u05D9\u05E0\u05D4: \u05D4\u05D7\u05DC\u05E4\u05EA \u05E0\u05EA\u05D9\u05D1.<br>\u2191 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DE\u05E2\u05DC\u05D4: \u05E7\u05E4\u05D9\u05E6\u05D4 \u05DE\u05E2\u05DC \u05D0\u05E8\u05D2\u05D6\u05D9\u05DD \u05D5\u05DE\u05D7\u05E1\u05D5\u05DE\u05D9\u05DD.<br>\u2193 \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DC\u05DE\u05D8\u05D4: \u05D4\u05D7\u05DC\u05E7\u05D4 \u05DE\u05EA\u05D7\u05EA \u05DC\u05E9\u05E2\u05E8\u05D9\u05DD.</p><p>\u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05D1\u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD \u05E9\u05E2\u05DC \u05D4\u05DE\u05E1\u05DA.<br>\u05D1\u05DE\u05D7\u05E9\u05D1: \u05D7\u05E6\u05D9\u05DD \u05D0\u05D5 WASD, \u05D5\u05E8\u05D5\u05D5\u05D7 \u05DC\u05E7\u05E4\u05D9\u05E6\u05D4.</p><p>\u25C6 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D7\u05D1\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD.<br>\u05DE\u05D2\u05DF \u05D8\u05D5\u05E8\u05E7\u05D9\u05D6 \u05E1\u05D5\u05E4\u05D2 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA.<br>\u05DE\u05D2\u05E0\u05D8 \u05E1\u05D2\u05D5\u05DC \u05DE\u05D5\u05E9\u05DA \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DC-8 \u05E9\u05E0\u05D9\u05D5\u05EA.</p><p>\u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05EA \u05E8\u05E7 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D5\u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4.</p></div><button class="primary" id="back">\u05D4\u05D1\u05E0\u05EA\u05D9!</button>'),tn("back",wi)}function Fr(i){en=i,ke=new q0(i);let e=[9554408,13160935,15714210,11457759][Math.floor((i-1)/5)];gc.fog.color.setHex(e),gc.background.setHex(e),Ho.setClearColor(e),_c=!1,kt="playing",Cs=0,Wo=performance.now(),Wn=null,vc=-1,yc=-1,Mc="",Uu(ke.level),Sc.hidden=!0,Lt("hud").hidden=Lt("controls").hidden=!1,Lt("levelnum").textContent=i,Lt("runcoins").textContent="0",Lt("progress").style.width="0%",Lt("powerlabel").textContent="",i===1&&ai("\u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D7\u05E6\u05D9\u05DD \xB7 \u05E7\u05E4\u05D9\u05E6\u05D4 \u2191 \xB7 \u05D4\u05D7\u05DC\u05E7\u05D4 \u2193")}function Ps(){kt==="playing"&&(kt="paused",clearTimeout(ai.timer),Lt("toast").classList.remove("show"),Wi(`<p class="eyebrow">\u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05D0\u05D5\u05D5\u05D9\u05E8</p><h2>\u05D4\u05E8\u05D9\u05E6\u05D4 \u05DE\u05D7\u05DB\u05D4 \u05DC\u05DA</h2><p class="subtitle">\u05E9\u05DC\u05D1 ${en} \xB7 ${ke.coins} \u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05D1\u05E8\u05D9\u05E6\u05D4</p><button class="primary" id="resume">\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E8\u05D5\u05E5</button><button class="secondary" id="retry">\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DC\u05D1 \u05DE\u05D7\u05D3\u05E9</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05E9\u05D7\u05E7</button><p class="note">\u05D2\u05DD \u05D1\u05D9\u05E6\u05D9\u05D0\u05D4, \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D0\u05E1\u05E4\u05EA \u05D9\u05D9\u05E9\u05DE\u05E8\u05D5.</p>`),tn("resume",()=>{kt="playing",Sc.hidden=!0,Cs=0,Wo=performance.now(),Wn=null}),tn("retry",()=>{xc(!1),Fr(en)}),tn("home",()=>{xc(!1),wi()}))}function xc(i){if(_c||!ke)return 0;_c=!0;let e=i?20+en*2:0;if(at.coins+=ke.coins+e,i){at.unlocked=Math.min(20,Math.max(at.unlocked,en+1));let t=ke.coins>=ke.level.coins.length*.7?3:ke.coins>=ke.level.coins.length*.35?2:1,n=at.best[en]||{stars:0,coins:0};at.best[en]={stars:Math.max(t,n.stars),coins:Math.max(ke.coins,n.coins)}}return bc(),e}function Lu(i){kt=i?"won":"dead",Lt("controls").hidden=!0;let e=xc(i);if(i){let t=ke.coins>=ke.level.coins.length*.7?3:ke.coins>=ke.level.coins.length*.35?2:1;Wi(`<p class="eyebrow">${en===20?"\u05DB\u05DC \u05D4\u05E2\u05D9\u05E8 \u05DB\u05D1\u05E8 \u05DE\u05DB\u05D9\u05E8\u05D4 \u05D0\u05D5\u05EA\u05DA":"\u05E2\u05D5\u05D3 \u05E6\u05E2\u05D3 \u05D1\u05D4\u05E8\u05E4\u05EA\u05E7\u05D4"}</p><h2>${en===20?"\u05D0\u05DC\u05D5\u05E3 \u05D4\u05E2\u05D9\u05E8!":"\u05E9\u05DC\u05D1 "+en+" \u05D4\u05D5\u05E9\u05DC\u05DD!"}</h2><div class="stars">${"\u2605".repeat(t)}${"\u2606".repeat(3-t)}</div><div class="stats"><div><b>${ke.coins}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E9\u05D0\u05E1\u05E4\u05EA</small></div><div><b>+${e}</b><small>\u05D1\u05D5\u05E0\u05D5\u05E1 \u05E1\u05D9\u05D5\u05DD</small></div></div>${Tc()}<button class="primary" id="next">${en<20?"\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E9\u05DC\u05D1 "+(en+1):"\u05DC\u05DE\u05E4\u05EA \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD"}</button><div class="twocol"><button class="secondary" id="retry">\u05E9\u05D5\u05D1 \u05D0\u05D5\u05EA\u05D5 \u05E9\u05DC\u05D1</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8</button></div>`),tn("next",()=>en<20?Fr(en+1):Fu())}else Wi(`<p class="eyebrow">\u05E2\u05D5\u05D3 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF. \u05E2\u05D5\u05D3 \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8 \u05E8\u05D7\u05D5\u05E7.</p><h2>\u05DB\u05DE\u05E2\u05D8 \u05E2\u05D1\u05E8\u05EA!</h2><p class="subtitle">${Math.floor(Math.min(100,ke.x/ke.level.length*100))}% \u05DE\u05D4\u05DE\u05E1\u05DC\u05D5\u05DC \xB7 \u05E9\u05DC\u05D1 ${en}</p><div class="stats"><div><b>+${ke.coins}</b><small>\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05E7\u05D5\u05E4\u05D4</small></div></div><button class="primary" id="retry">\u05DE\u05E0\u05E1\u05D9\u05DD \u05E9\u05D5\u05D1</button><button class="secondary" id="home">\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05E9\u05D7\u05E7</button><p class="note">\u05D8\u05D9\u05E4: \u05D0\u05E8\u05D2\u05D6 \u05D5\u05DE\u05D7\u05E1\u05D5\u05DD? \u05E7\u05D5\u05E4\u05E6\u05D9\u05DD. \u05E9\u05E2\u05E8 \u05D2\u05D1\u05D5\u05D4? \u05DE\u05D7\u05DC\u05D9\u05E7\u05D9\u05DD.</p>`);tn("retry",()=>Fr(en)),tn("home",wi)}function Xo(i){kt==="playing"&&(i==="left"&&ke.move(-1),i==="right"&&ke.move(1),i==="jump"&&ke.jump(),i==="slide"&&ke.duck())}for(let i of["left","right","jump","slide"])Lt(i).addEventListener("pointerdown",e=>{e.preventDefault(),Xo(i)});tn("pause",Ps);var Rs=null;Is.addEventListener("pointerdown",i=>{kt==="playing"&&(Rs={x:i.clientX,y:i.clientY},Is.setPointerCapture(i.pointerId))});Is.addEventListener("pointerup",i=>{if(!Rs)return;let e=i.clientX-Rs.x,t=i.clientY-Rs.y;if(Rs=null,Math.max(Math.abs(e),Math.abs(t))<20){Xo("jump");return}Xo(Math.abs(e)>Math.abs(t)?e<0?"left":"right":t<0?"jump":"slide")});Is.addEventListener("pointercancel",()=>Rs=null);document.addEventListener("keydown",i=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(i.key)&&i.preventDefault(),i.repeat)return;let e={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"jump",w:"jump",W:"jump"," ":"jump",ArrowDown:"slide",s:"slide",S:"slide"};i.key==="Escape"||i.key==="p"?kt==="playing"?Ps():kt==="paused"&&Lt("resume").click():e[i.key]&&Xo(e[i.key])});document.addEventListener("visibilitychange",()=>{document.hidden&&Ps()});window.addEventListener("blur",Ps);Is.addEventListener("webglcontextlost",i=>{i.preventDefault(),Ps(),ai("\u05EA\u05E6\u05D5\u05D2\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E0\u05E2\u05E6\u05E8\u05D4. \u05E8\u05E2\u05E0\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA.")});var Wn=null,vc=-1,yc=-1,Mc="";function Bu(){return ke?{x:ke.x,y:ke.y,lateral:ke.lateral,lane:ke.lane,slide:ke.slide,shield:ke.shield,invincible:ke.invincible,coins:ke.level.coins,powers:ke.level.powers}:null}function Q0(i){let e=Bu();if(e&&Wn&&kt==="playing"){let t=Math.min(1,Cs*120);e={...e,x:Wn.x+(e.x-Wn.x)*t,y:Wn.y+(e.y-Wn.y)*t,lateral:Wn.lateral+(e.lateral-Wn.lateral)*t}}if(Hi.render(i,e,kt),ke){let t=Math.floor(Math.min(100,ke.x/ke.level.length*100)),n=(ke.shield?"\u05DE\u05D2\u05DF \u05E4\u05E2\u05D9\u05DC \u25C8  ":"")+(ke.magnet>0?"\u05DE\u05D2\u05E0\u05D8 "+Math.ceil(ke.magnet)+" \u05E9\u05E0\u05F3":"");vc!==ke.coins&&(Lt("runcoins").textContent=ke.coins,vc=ke.coins),yc!==t&&(Lt("progress").style.width=t+"%",yc=t),Mc!==n&&(Lt("powerlabel").textContent=n,Mc=n)}}function zu(i){let e=Math.max(0,(i-Wo)/1e3||0),t=Math.min(e,.75);if(Wo=i,Hi.sampleFrame(e,kt),kt==="playing"&&e>.75&&(Ps(),Ur.insertAdjacentHTML("afterbegin",'<p class="note">\u05D4\u05E8\u05D9\u05E6\u05D4 \u05D4\u05D5\u05E9\u05D4\u05EA\u05D4 \u05D1\u05D2\u05DC\u05DC \u05E2\u05E6\u05D9\u05E8\u05D4 \u05D1\u05EA\u05E6\u05D5\u05D2\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05DB\u05E9\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05DE\u05D5\u05DB\u05DF.</p>')),kt==="playing")for(Cs+=t;Cs>=1/120&&kt==="playing";){Wn=Bu(),ke.step(1/120),Cs-=1/120;for(let n of ke.drain())["coin","jump","dead","won"].includes(n.type)&&$0(n.type),n.type==="shield"&&ai("\u05DE\u05D2\u05DF! \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D0\u05D7\u05EA \u05DC\u05D0 \u05EA\u05E2\u05E6\u05D5\u05E8 \u05D0\u05D5\u05EA\u05DA"),n.type==="magnet"&&ai("\u05DE\u05D2\u05E0\u05D8! \u05D4\u05DE\u05D8\u05D1\u05E2\u05D5\u05EA \u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA"),n.type==="break"&&ai("\u05D4\u05DE\u05D2\u05DF \u05D4\u05E6\u05D9\u05DC \u05D0\u05D5\u05EA\u05DA");ke.status==="won"?Lu(!0):ke.status==="dead"&&Lu(!1)}Q0(t),requestAnimationFrame(zu)}Object.defineProperty(window,"__runner",{get:()=>({mode:kt,store:JSON.parse(JSON.stringify(at)),run:ke?{x:ke.x,y:ke.y,lane:ke.lane,lateral:ke.lateral,slide:ke.slide,coins:ke.coins,status:ke.status,speed:ke.level.speed,length:ke.level.length,obs:ke.level.obs.map(i=>({...i})),powers:ke.level.powers.map(i=>({...i})),allCoins:ke.level.coins.length}:null,render:{calls:Ho.info.render.calls,triangles:Ho.info.render.triangles,dpr:Hi.stats.dpr,frames:Hi.stats.frames,frameMs:Hi.stats.frameMs.slice(-180),quality:Hi.stats.quality}})});wi();requestAnimationFrame(zu);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

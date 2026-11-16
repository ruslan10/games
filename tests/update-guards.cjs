const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const code=fs.readFileSync('update.js','utf8');
async function test({hidden=false,stored=null,blocked=false,gv='',safe=true}={}){
 let replace=[],requests=0,intervals=[],raf=[],callbacks={},now=1000000;const data={};
 const sandbox={URL,AbortController,console,Date:{now:()=>now},setTimeout:()=>1,clearTimeout(){},setInterval(fn){intervals.push(fn)},
  location:{href:'https://example.test/games/stickman/'+gv,pathname:'/games/stickman/',replace:u=>replace.push(u)},
  document:{currentScript:{src:'https://example.test/games/update.js?v=old'},querySelector:()=>({content:'1111111111111111'}),body:{dataset:{}},hidden,addEventListener:(n,f)=>callbacks[n]=f},
  window:{},addEventListener:(n,f)=>callbacks[n]=f,requestAnimationFrame:f=>raf.push(f),
  sessionStorage:{getItem:k=>stored??data[k]??null,setItem(k,v){if(blocked)throw Error('blocked');data[k]=v}},
  fetch:async()=>{requests++;return{ok:true,json:async()=>({release:'2222222222222222'})}}
 };
 vm.runInNewContext(code,sandbox);sandbox.window.GamesUpdate.setSafeToReload(()=>safe);
 await new Promise(r=>setImmediate(r));raf.splice(0).forEach(f=>f());
 return {sandbox,replace,requests,data,intervals,raf,callbacks,advance(){now+=61000}};
}
(async()=>{
 let t=await test({hidden:true});assert.equal(t.requests,0);assert.equal(t.replace.length,0);
 t=await test({stored:'null'});assert.equal(t.replace.length,1);
 t=await test({stored:'{bad json'});assert.equal(t.replace.length,1);
 t=await test({stored:JSON.stringify({'2222222222222222':{count:3,at:1}})});assert.equal(t.replace.length,0);
 t=await test({stored:JSON.stringify({'2222222222222222':{count:1,at:999999}})});assert.equal(t.replace.length,0);
 t=await test({blocked:true,gv:'?gv=2222222222222222'});assert.equal(t.replace.length,0);
 t=await test({safe:false});assert.equal(t.replace.length,0);
 t=await test();t.callbacks.online();await new Promise(r=>setImmediate(r));assert.equal(t.requests,1);
 console.log('PASS 8 updater safety checks: hidden, corrupt metadata, reload cap/cooldown, blocked storage, active run, request throttle');
})().catch(e=>{console.error(e);process.exit(1)});

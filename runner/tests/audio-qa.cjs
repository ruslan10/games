/* Renders each synth sound offline in the browser, checks it is non-silent and unclipped, and writes WAVs. */
const {chromium}=require('playwright');const esbuild=require('esbuild');const fs=require('fs');const path=require('path');
(async()=>{const code=esbuild.buildSync({entryPoints:[path.join(__dirname,'audio-entry.js')],bundle:true,write:false,format:'iife'}).outputFiles[0].text;
const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',headless:true,args:['--no-sandbox']});const p=await b.newPage();await p.setContent('<html></html>');await p.addScriptTag({content:code});
const names=['step','move','jump','slide','coin','power','break','warn','launch','dodge','boom','dead','won','click'];
const res=await p.evaluate(async(names)=>{const out={};const SR=44100;
 for(const n of names){const ctx=new OfflineAudioContext(1,SR*2,SR);ctx.resume=async()=>{};ctx.suspend=async()=>{};window.AudioContext=function(){return ctx;};const a=window.__createAudio(true);a.play(n);const buf=await ctx.startRendering();out[n]=Array.from(buf.getChannelData(0));}
 // muted: no nodes created
 let created=0;const ctx=new OfflineAudioContext(1,SR,SR);const co=ctx.createOscillator.bind(ctx);ctx.createOscillator=()=>{created++;return co();};window.AudioContext=function(){return ctx;};const m=window.__createAudio(false);for(const n of names)m.play(n);out.__mutedNodes=created;
 const m2=window.__createAudio(true);m2.setEnabled(false);m2.play('jump');out.__mutedNodes2=created;
 return out;},names);
const report={};fs.mkdirSync('/downloads/audio-qa',{recursive:true});
for(const n of names){const d=res[n];let peak=0,sq=0,clip=0;for(const v of d){const a=Math.abs(v);peak=Math.max(peak,a);sq+=v*v;if(a>=.999)clip++;}report[n]={peak:+peak.toFixed(3),rms:+Math.sqrt(sq/d.length).toFixed(4),clipped:clip};
 const buf=Buffer.alloc(44+d.length*2);buf.write('RIFF',0);buf.writeUInt32LE(36+d.length*2,4);buf.write('WAVEfmt ',8);buf.writeUInt32LE(16,16);buf.writeUInt16LE(1,20);buf.writeUInt16LE(1,22);buf.writeUInt32LE(44100,24);buf.writeUInt32LE(88200,28);buf.writeUInt16LE(2,32);buf.writeUInt16LE(16,34);buf.write('data',36);buf.writeUInt32LE(d.length*2,40);d.forEach((v,i)=>buf.writeInt16LE(Math.round(Math.max(-1,Math.min(1,v))*32767),44+i*2));fs.writeFileSync(`/downloads/audio-qa/${n}.wav`,buf);}
console.log(JSON.stringify({report,mutedNodes:[res.__mutedNodes,res.__mutedNodes2]},null,0));
let bad=Object.entries(report).filter(([n,r])=>r.peak<.1||r.clipped>0);if(res.__mutedNodes||res.__mutedNodes2){bad.push(['muted',1]);}
console.log(bad.length?'AUDIO FAIL '+JSON.stringify(bad):'audio ok');await b.close();process.exit(bad.length?1:0);})();

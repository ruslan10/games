/* Small WebAudio synth for sound effects. No audio files. */
export function createAudio(initial){
 const K=2.6;let ctx=null,master=null,noiseBuf=null,on=initial!==false;
 function ensure(){
  if(!on)return false;
  try{
   if(!ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return false;ctx=new C();master=ctx.createGain();master.gain.value=.8;const comp=ctx.createDynamicsCompressor();master.connect(comp);comp.connect(ctx.destination);
    noiseBuf=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;}
   if(ctx.state!=='running')ctx.resume();return true;
  }catch(e){return false;}}
 function tone(f0,f1,dur,type,vol,delay=0){const t=ctx.currentTime+delay,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(f0,t);if(f1!==f0)o.frequency.exponentialRampToValueAtTime(f1,t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol*K,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.03);}
 function noise(dur,f0,f1,vol,type='bandpass',delay=0,q=1){const t=ctx.currentTime+delay,s=ctx.createBufferSource(),f=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=noiseBuf;f.type=type;f.Q.value=q;f.frequency.setValueAtTime(f0,t);f.frequency.exponentialRampToValueAtTime(f1,t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol*K,t+Math.min(.04,dur/3));g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);g.connect(master);s.start(t);s.stop(t+dur+.03);}
 let stp=false;const S={
  step(){stp=!stp;tone(stp?200:170,110,.06,'triangle',.22);noise(.05,1800,900,.14,'bandpass');},
  move(){noise(.09,900,2200,.45,'bandpass',0,1);},
  jump(){tone(300,720,.18,'square',.07);tone(450,900,.16,'sine',.1);},
  slide(){noise(.28,2400,500,.22,'bandpass',0,1.5);},
  coin(){tone(988,988,.09,'square',.06);tone(1480,1480,.22,'square',.06,.07);tone(1480,1480,.22,'sine',.1,.07);},
  power(){[523,659,784,1047].forEach((f,i)=>{tone(f,f,.16,'triangle',.14,i*.07);});},
  break(){noise(.35,3000,300,.4,'lowpass');tone(500,120,.3,'sawtooth',.1);},
  warn(){tone(880,880,.11,'square',.07);tone(880,880,.11,'square',.07,.17);tone(1100,1100,.14,'square',.08,.34);},
  launch(){noise(.8,300,2200,.35,'bandpass',0,.8);tone(140,300,.7,'sawtooth',.07);},
  dodge(){noise(.35,2600,500,.28,'bandpass',0,1.2);tone(700,350,.3,'sine',.07);},
  boom(){noise(.7,2200,60,.8,'lowpass',0,.7);tone(160,35,.6,'sawtooth',.2);tone(90,30,.7,'sine',.35);},
  dead(){tone(330,110,.5,'sawtooth',.12,.05);tone(247,82,.6,'triangle',.14,.2);},
  won(){[523,659,784,1047,1319].forEach((f,i)=>{tone(f,f,.28,'triangle',.16,i*.1);tone(f*2,f*2,.2,'sine',.05,i*.1);});},
  click(){tone(600,500,.06,'square',.2);}
 };
 return{
  get enabled(){return on;},
  setEnabled(v){on=!!v;if(!on&&ctx&&ctx.state==='running')ctx.suspend();else if(on)ensure();},
  unlock(){ensure();},
  suspend(){try{if(ctx&&ctx.state==='running')ctx.suspend();}catch(e){}},
  play(name){if(!S[name]||!ensure())return;try{S[name]();}catch(e){}}
 };}

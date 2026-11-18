// QA for spoken Hebrew encouragement on success (praise clips) and spoken exercise explanations (times room).
// Run from repository root: NODE_PATH=/downloads/qa-env/node_modules node monster-lab/qa-voice.cjs
const {chromium}=require('playwright'),http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
let server=http.createServer((req,res)=>{let f=path.join(root,req.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.webp')?'image/webp':f.endsWith('.mp3')?'audio/mpeg':'text/html');res.end(fs.readFileSync(f))}catch{res.writeHead(404);res.end('nf')}}).listen(0);
const plays=p=>p.evaluate(()=>window.__plays.slice());
const praiseCount=p=>p.evaluate(()=>window.__plays.filter(u=>/praise\d/.test(u)).length);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  let browser=await chromium.launch({headless:true,executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']});
  let p=await browser.newPage({viewport:{width:412,height:915}});
  let errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.addInitScript(()=>{window.__plays=[];const orig=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){window.__plays.push(this.src||'');this.playbackRate=3;return orig.call(this)}}); // 3x playback keeps long explanation chains fast; orchestration timing unaffected
  await p.route('**/characters.js*',route=>route.fulfill({body:'',contentType:'text/javascript'}));
  await p.emulateMedia({reducedMotion:'reduce'});
  let base=`http://127.0.0.1:${server.address().port}/monster-lab/`;
  await p.goto(base);

  // --- Classic lab: wrong answer and re-render give no praise; correct answer praises once ---
  await p.locator('[data-station="feed"]').click();
  await p.evaluate(()=>MonsterLab.skipLesson());
  let before=await praiseCount(p);
  await p.locator('#check').click(); // empty tray: wrong
  assert(await p.locator('.feedback.error').isVisible(),'feed wrong shows error');
  await p.locator('#reset').click(); // re-render after wrong answer
  await sleep(250);
  assert.equal(await praiseCount(p),before,'no praise on wrong answer or re-render');
  let t=await p.evaluate(()=>MonsterLab.getState().q.target);
  for(let i=0;i<Math.floor(t/10);i++)await p.locator('#srcRod').click();
  for(let i=0;i<t%10;i++)await p.locator('#srcCube').click();
  await p.locator('#check').click();
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'exactly one praise on feed success');
  let src=await p.evaluate(()=>MonsterLabVoice.state().src);
  assert(/praise\d\.mp3/.test(src),'praise clip is on the audio channel');
  assert((await p.evaluate(()=>MonsterLabVoice.state().pending))===null,'no pending praise left');
  // next question: praise must not overlap the next instruction; narration stops/replaces it
  await p.locator('#next').click();
  let t2=await p.evaluate(()=>MonsterLab.getState().q.target);
  if(t2!==t){
    await p.waitForFunction(()=>/feed_(target|mult)_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
    let pl=await plays(p);
    let lastPraise=pl.map((u,i)=>/praise\d/.test(u)?i:-1).filter(i=>i>=0).pop();
    let after=pl.slice(lastPraise+1).filter(u=>/feed_(target|mult)_pre/.test(u));
    assert(after.length===1,'feed next instruction played after praise, not stacked');
    assert(!/praise\d/.test(pl[pl.length-1]),'latest playback is the new instruction, not praise');
  }else{
    // same target re-rolled: key same but task advanced, instruction must still speak
    await p.waitForFunction(()=>/feed_(target|mult)_pre/.test(MonsterLabVoice.state().src)&&MonsterLabVoice.state().playing,null,{timeout:6000});
    assert(await p.evaluate(()=>MonsterLabVoice.state().pending)===null,'same-key next question stacks nothing');
  }
  await p.locator('#exit').click();await p.locator('[data-modal="1"]').click();
  console.log('PASS feed: praise on success only, sequenced before next instruction');

  // --- Machine: narration key repeats across questions, praise still fires per success ---
  await p.locator('[data-station="machine"]').click();
  await p.evaluate(()=>MonsterLab.skipLesson());
  let st=await p.evaluate(()=>MonsterLab.getState());
  let right=st.q.opts.findIndex(o=>o.op+o.k===st.q.answer);
  before=await praiseCount(p);
  await p.locator(`[data-choice="${right}"]`).click();
  await p.locator('#check').click();
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'praise on machine success');
  await p.locator('#next').click(); // same narration key ('machine_q') - praise must not re-fire
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'no duplicate praise across same-key questions');
  st=await p.evaluate(()=>MonsterLab.getState());
  right=st.q.opts.findIndex(o=>o.op+o.k===st.q.answer);
  await p.locator(`[data-choice="${right}"]`).click();
  await p.locator('#check').click();
  await sleep(300);
  assert.equal(await praiseCount(p),before+2,'praise again on second machine success');
  // rapid next while praise still playing: same narration key, new task - praise cut AND new instruction starts
  let stSrc=await p.evaluate(()=>MonsterLabVoice.state().src);
  assert(/praise\d/.test(stSrc),'praise is on the channel before rapid next');
  let mPlays=(await plays(p)).length;
  await p.locator('#next').click();
  await p.waitForFunction(()=>/machine_q/.test(MonsterLabVoice.state().src)&&MonsterLabVoice.state().playing,null,{timeout:6000});
  let pl2=(await plays(p)).slice(mPlays);
  assert(/machine_q\.mp3/.test(pl2[0]),'new machine instruction starts on same-key advance');
  assert(!/praise\d/.test(pl2[0]),'stale praise not left playing over the new task');
  assert.equal(await p.evaluate(()=>MonsterLabVoice.state().pending),null,'no pending praise carried into the new task');
  await p.locator('#exit').click();await p.locator('[data-modal="1"]').click();
  console.log('PASS machine: praise per success despite repeated narration key, stale praise cut on rapid next');

  // --- Stop inside the pending window cancels praise; intended start path still works ---
  before=await praiseCount(p);
  await p.evaluate(()=>{MonsterLabVoice.praise();MonsterLabVoice.stop()});
  await sleep(300);
  assert.equal(await praiseCount(p),before,'stop inside pending window cancels praise');
  assert.equal(await p.evaluate(()=>MonsterLabVoice.state().pending),null,'pending cleared by stop');
  await p.evaluate(()=>MonsterLabVoice.praise());
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'praise start path intact after cancellation');
  await p.evaluate(()=>MonsterLabVoice.stop());
  console.log('PASS pending-window cancellation and start path');

  // --- Fractions compare: success praises ---
  await p.locator('[data-station="fractions"]').click();
  await p.evaluate(()=>MonsterLab.skipLesson());
  st=await p.evaluate(()=>MonsterLab.getState());
  if(st.q.kind==='compare'){
    before=await praiseCount(p);
    await p.locator(`[data-choice="${st.q.answer}"]`).click();
    await p.locator('#check').click();
    await sleep(300);
    assert.equal(await praiseCount(p),before+1,'praise on fractions success');
    // band 0 is always compare: next question shares the frac_compare key but must still speak
    let fPlays=(await plays(p)).length;
    await p.locator('#next').click();
    await p.waitForFunction(()=>/frac_compare/.test(MonsterLabVoice.state().src)&&MonsterLabVoice.state().playing,null,{timeout:6000});
    pl=(await plays(p)).slice(fPlays);
    assert(/frac_compare\.mp3/.test(pl[0]),'new fractions instruction starts on same-key advance');
    st=await p.evaluate(()=>MonsterLab.getState());
    assert(st&&st.q.kind==='compare','assumption holds: band 0 next question is compare');
  }
  await p.locator('#exit').click();await p.locator('[data-modal="1"]').click();
  console.log('PASS fractions: praise on success');

  // --- Times room: candy completion praises once per board, dedup on remove/refill ---
  await p.locator('[data-times]').click();
  await p.locator('[data-table="2"]').click();
  before=await praiseCount(p);
  for(let i=0;i<6;i++)await p.locator('#candyBowl').click(); // 3 bags x 2
  await sleep(400);
  assert.equal(await praiseCount(p),before+1,'praise on groups completion');
  assert.equal(await p.evaluate(()=>MonsterLab.getTimes().boardPraised),1,'board completion flagged');
  await p.locator('.cslot.full').first().click(); // remove one candy
  await p.locator('#candyBowl').click(); // refill: board full again
  await sleep(400);
  assert.equal(await praiseCount(p),before+1,'no repeated praise on remove/refill of same board');
  await p.locator('#candyNext').click(); // array step
  for(let i=0;i<6;i++)await p.locator('#candyBowl').click();
  await sleep(400);
  assert.equal(await praiseCount(p),before+2,'praise again on array completion (new board)');
  await p.locator('#candyNext').click(); // skip step
  console.log('PASS candy: completion praise with per-board dedup');

  // --- Skip: wrong answer silent, correct answer sequences praise before next prompt ---
  let tms=await p.evaluate(()=>MonsterLab.getTimes());
  assert.equal(tms.step,'skip');
  let curBase=await praiseCount(p);
  // answer wrong on purpose: correct answer is (skip+1)*n; choose an option that differs
  let correct=(tms.skip+1)*tms.n;
  let wrongBtn=await p.evaluate(c=>{const b=[...document.querySelectorAll('[data-t^="skip:"]')].find(b=>Number(b.dataset.t.slice(5))!==c);return b?b.dataset.t:null},correct);
  await p.locator(`[data-t="${wrongBtn}"]`).click();
  await sleep(300);
  assert.equal(await praiseCount(p),curBase,'no praise on wrong skip answer');
  // now answer correctly and check sequencing: praise, then the jump explanation, play before the next mult prompt
  let beforePlays=await plays(p);
  await p.locator(`[data-t="skip:${correct}"]`).click();
  await p.waitForFunction(()=>/mult_q_pre|t_skip_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  pl=(await plays(p)).slice(beforePlays.length);
  let pi=pl.findIndex(u=>/praise\d/.test(u));
  assert(pi>=0,'praise played on correct skip answer');
  let mi=pl.findIndex(u=>/mult_q_pre|t_skip_pre/.test(u));
  assert(mi>pi&&pl.slice(pi+1,mi).every(u=>/\/(e_|c2|n\d+)/.test(u)),`praise, then only explanation clips, precede next skip prompt (praise@${pi}, prompt@${mi})`);
  console.log('PASS skip: praise sequenced ahead of next question narration');

  // --- Guided: correct answer praises ---
  tms=await p.evaluate(()=>MonsterLab.getTimes());
  while(tms.skip<10){await p.locator(`[data-t="skip:${(tms.skip+1)*tms.n}"]`).click();await sleep(60);tms=await p.evaluate(()=>MonsterLab.getTimes())}
  await p.locator('[data-t="next"]').click(); // to guided
  tms=await p.evaluate(()=>MonsterLab.getTimes());
  assert.equal(tms.step,'guided');
  before=await praiseCount(p);
  await p.locator(`[data-t="gans:${tms.gks[tms.gq]*tms.n}"]`).click();
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'praise on guided success');
  console.log('PASS guided: praise on success');

  // --- Practice: correct answer praises; last question praise does not leak into summary narration ---
  await p.locator('[data-t="gnext"]').click(); // gq 1
  tms=await p.evaluate(()=>MonsterLab.getTimes());
  await p.locator(`[data-t="gans:${tms.gks[tms.gq]*tms.n}"]`).click();await sleep(150);
  await p.locator('[data-t="gnext"]').click(); // gq 2
  tms=await p.evaluate(()=>MonsterLab.getTimes());
  await p.locator(`[data-t="gans:${tms.gks[tms.gq]*tms.n}"]`).click();await sleep(150);
  await p.locator('[data-t="gnext"]').click(); // -> done step
  await p.locator('[data-t="practice"]').click();
  tms=await p.evaluate(()=>MonsterLab.getTimes());
  assert.equal(tms.step,'practice');
  before=await praiseCount(p);
  let q=tms.pQs[tms.pq];
  await p.locator(`[data-t="pans:${q.ans}"]`).click();
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'praise on practice success');
  // finish all 8; rapid-advance the last one so praise is still pending into the summary
  for(let i=1;i<8;i++){
    await p.locator('[data-t="pnext"]').click();
    tms=await p.evaluate(()=>MonsterLab.getTimes());
    if(!tms||tms.pDone)break;
    q=tms.pQs[tms.pq];
    await p.locator(`[data-t="pans:${q.ans}"]`).click();
  }
  await p.locator('[data-t="pnext"]').click(); // -> practice summary
  await p.waitForFunction(()=>/summary/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  pl=await plays(p);
  let tail=pl.slice(-2).map(u=>u.split('/').pop().split('?')[0]);
  assert(tail[tail.length-1]==='summary.mp3','practice summary narration is last, praise not stacked after it');
  console.log('PASS practice: praise on success, summary narration clean');

  // --- Spoken explanations: chained after praise on completed times-room tasks, replayable, cancellable ---
  const names=u=>u.map(x=>x.split('/').pop().split('?')[0].replace('.mp3',''));
  const nm=x=>'n'+x;
  const notPlaying=()=>p.waitForFunction(()=>!MonsterLabVoice.state().playing,null,{timeout:60000});
  for(const c of ['e_bags_pre','e_rows_alt','e_rows_pre','e_candies','e_plus','e_eq','e_so3','e_kful','e_ki','e_one_group','e_is','e_meaning','c2','n100']){
    assert.equal(await p.evaluate(async u=>{const r=await fetch(u);return r.status},`audio/${c}.mp3`),200,'clip exists: '+c)}

  // groups board (3 bags of 2): exact chain, resilient to a mid-chain re-render
  await p.locator('[data-t="again"]').click();
  let tms2=await p.evaluate(()=>MonsterLab.getTimes());
  assert.equal(tms2.step,'groups');
  let mark=(await plays(p)).length;
  for(let i=0;i<6;i++)await p.locator('#candyBowl').click();
  await p.waitForFunction(()=>/praise\d/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await p.locator('.cslot.full').first().click(); // re-render mid-chain: must not cut or restart playback
  await p.waitForFunction(()=>MonsterLabVoice.state().src.includes('e_meaning'),null,{timeout:60000});
  let seq=names((await plays(p)).slice(mark));
  let xi=seq.findIndex(u=>/^praise\d$/.test(u));
  assert(xi>=0,'praise starts the groups completion chain');
  assert.deepEqual(seq.slice(xi+1),['e_bags_pre','c2','e_candies','n2','e_plus','n2','e_plus','n2','e_eq','n6','e_so3','n2','e_eq','n6','e_meaning'],'groups explanation clip sequence (3 bags of 2)');
  assert(!seq.includes('t_groups_pre'),'mid-chain re-render did not restart the instruction');
  await notPlaying();
  let stx=await p.evaluate(()=>MonsterLabVoice.state());
  assert.equal(stx.pending,null);assert.equal(stx.pendingX,0,'nothing pending after the chain');
  console.log('PASS explanation: groups chain after praise, resilient to mid-chain re-render');

  // refill dedup, then replay on the completed board speaks the explanation
  let pcx=await praiseCount(p);
  await p.locator('#candyBowl').click();
  await sleep(400);
  assert.equal(await praiseCount(p),pcx,'no repeated praise/explanation on refill of the same board');
  mark=(await plays(p)).length;
  await p.locator('#voiceSay').click();
  await p.waitForFunction(()=>/e_bags_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  seq=names((await plays(p)).slice(mark));
  assert.equal(seq[0],'e_bags_pre','replay on the completed board replays the explanation');
  assert(!seq.includes('t_groups_pre'),'completed replay does not restart the instruction');
  await p.locator('#voiceSay').click(); // stop
  await notPlaying();
  assert.match(await p.locator('#voiceSay').getAttribute('aria-label'),/ההסבר/,'completed-state replay label names the explanation');
  console.log('PASS explanation: replay on completed state, refill dedup');

  // board incomplete again: replay speaks the instruction, not a stale explanation
  await p.locator('.cslot.full').first().click();
  await sleep(250);
  assert.match(await p.locator('#voiceSay').getAttribute('aria-label'),/ההוראה/,'incomplete-state replay label names the instruction');
  mark=(await plays(p)).length;
  await p.locator('#voiceSay').click();
  await p.waitForFunction(()=>/t_groups_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  seq=names((await plays(p)).slice(mark));
  assert.equal(seq[0],'t_groups_pre','incomplete board replays the instruction, not a stale explanation');
  await p.locator('#voiceSay').click(); // stop
  await notPlaying();
  await p.locator('#candyBowl').click(); // refill so candyNext is enabled
  await sleep(150);
  console.log('PASS explanation: no stale explanation after board change');

  // board undo inside the 80ms pending window drops the captured explanation (praise may still play)
  await p.locator('#exit').click(); // back to the table picker
  await p.locator('[data-table="2"]').click(); // fresh groups board
  await sleep(150);
  mark=(await plays(p)).length;
  await p.evaluate(()=>{for(let i=0;i<6;i++)document.getElementById('candyBowl').click();document.querySelector('.cslot.full').click()});
  await sleep(600);
  seq=names((await plays(p)).slice(mark));
  assert(!seq.some(u=>/^e_/.test(u)||u==='c2'),'board undo inside the pending window drops the captured explanation');
  await p.locator('#candyBowl').click(); // refill so candyNext is enabled
  await sleep(150);
  console.log('PASS explanation: undo inside the pending window drops the explanation');

  // array board completed and advanced inside the 80ms pending window: explanation dropped, praise still chains
  await p.locator('#candyNext').click(); // array step
  await sleep(150);
  mark=(await plays(p)).length;
  await p.evaluate(()=>{for(let i=0;i<6;i++)document.getElementById('candyBowl').click();document.getElementById('candyNext').click()});
  await p.waitForFunction(()=>/t_skip_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await sleep(600);
  seq=names((await plays(p)).slice(mark));
  assert(!seq.some(u=>/^e_/.test(u)||u==='c2'),'advancing inside the pending window drops the explanation');
  let pi2=seq.findIndex(u=>/^praise\d$/.test(u)),si=seq.findIndex(u=>u==='t_skip_pre');
  assert(pi2>=0&&si===pi2+1,'praise still chains immediately before the next-step instruction');
  console.log('PASS explanation: pending explanation dropped on advance, praise chaining preserved');

  // guided success: equation then repeated addition of k copies of n, matching the shown k×n order
  tms2=await p.evaluate(()=>MonsterLab.getTimes());
  assert.equal(tms2.step,'skip');
  while(tms2.skip<10){await p.locator(`[data-t="skip:${(tms2.skip+1)*tms2.n}"]`).click();await sleep(40);tms2=await p.evaluate(()=>MonsterLab.getTimes())}
  await p.locator('[data-t="next"]').click(); // guided step
  tms2=await p.evaluate(()=>MonsterLab.getTimes());
  let k=tms2.gks[tms2.gq],n=tms2.n;
  await p.waitForFunction(()=>/mult_q_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  mark=(await plays(p)).length;
  await p.locator(`[data-t="gans:${k*n}"]`).click();
  await p.waitForFunction(()=>/praise\d/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  seq=names((await plays(p)).slice(mark));
  let expected=[nm(k),'e_kful',nm(n),'e_eq',nm(k*n),'e_ki'];
  for(let i=0;i<k;i++){if(i)expected.push('e_plus');expected.push(nm(n))}
  expected.push('e_eq',nm(k*n));
  xi=seq.findIndex(u=>/^praise\d$/.test(u));
  assert(xi>=0,'praise starts the guided chain');
  assert.deepEqual(seq.slice(xi+1),expected,'guided explanation: equation then '+k+' copies of '+n);
  console.log('PASS explanation: guided chain matches the shown equation order');

  // unanswered guided question: replay speaks the instruction only, never the answer
  await p.locator('[data-t="gnext"]').click();
  await p.waitForFunction(()=>/mult_q_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  mark=(await plays(p)).length;
  await p.locator('#voiceSay').click();
  await p.waitForFunction(()=>/mult_q_pre/.test(MonsterLabVoice.state().src)&&MonsterLabVoice.state().playing,null,{timeout:6000});
  seq=names((await plays(p)).slice(mark));
  assert.equal(seq[0],'mult_q_pre','unanswered replay speaks the instruction');
  assert(!seq.some(u=>/^e_/.test(u)||u==='c2'),'unanswered replay reveals nothing of the answer');
  await p.locator('#voiceSay').click(); // stop
  await notPlaying();
  console.log('PASS explanation: unanswered state never reveals the answer');

  // practice success: explanation matches the shown a×b equation (e_one note when a===1)
  tms2=await p.evaluate(()=>MonsterLab.getTimes());
  await p.locator(`[data-t="gans:${tms2.gks[tms2.gq]*tms2.n}"]`).click();
  await p.waitForFunction(()=>/praise\d/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  await p.locator('[data-t="gnext"]').click(); // gq=2
  tms2=await p.evaluate(()=>MonsterLab.getTimes());
  await p.locator(`[data-t="gans:${tms2.gks[tms2.gq]*tms2.n}"]`).click();
  await p.waitForFunction(()=>/praise\d/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  await p.locator('[data-t="gnext"]').click(); // done step
  await p.locator('[data-t="practice"]').click();
  await p.waitForFunction(()=>/mult_q_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  tms2=await p.evaluate(()=>MonsterLab.getTimes());
  let pq1=tms2.pQs[tms2.pq];
  mark=(await plays(p)).length;
  await p.locator(`[data-t="pans:${pq1.ans}"]`).click();
  await p.waitForFunction(()=>/praise\d/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  await notPlaying();
  seq=names((await plays(p)).slice(mark));
  let expected2=[nm(pq1.a),'e_kful',nm(pq1.b),'e_eq',nm(pq1.ans)];
  if(pq1.a===1)expected2.push('e_one_group',nm(pq1.b),'e_is',nm(pq1.b));
  else{expected2.push('e_ki');for(let i=0;i<pq1.a;i++){if(i)expected2.push('e_plus');expected2.push(nm(pq1.b))}expected2.push('e_eq',nm(pq1.ans))}
  xi=seq.findIndex(u=>/^praise\d$/.test(u));
  assert(xi>=0,'praise starts the practice chain');
  assert.deepEqual(seq.slice(xi+1),expected2,'practice explanation matches '+pq1.a+'×'+pq1.b);
  console.log('PASS explanation: practice chain matches the shown equation');

  // stop inside the pending window cancels the whole chain, start path intact
  pcx=await praiseCount(p);
  await p.evaluate(()=>{MonsterLabVoice.praise();MonsterLabVoice.stop()});
  await sleep(300);
  assert.equal(await praiseCount(p),pcx,'stop inside the pending window cancels praise+explanation');
  stx=await p.evaluate(()=>MonsterLabVoice.state());
  assert.equal(stx.pending,null);assert.equal(stx.pendingX,0,'pending explanation cleared by stop');
  console.log('PASS explanation: stop cancels the pending chain');

  // --- Voice toggle off: no praise at all ---
  await p.evaluate(()=>{localStorage.setItem('monster-lab:v1',JSON.stringify({xp:0,solved:0,rounds:0,band:0,sound:false,voice:false,medals:{},times:{learned:{},stars:{}}}))});
  await p.reload();
  await p.locator('[data-station="feed"]').click();
  await p.evaluate(()=>MonsterLab.skipLesson());
  before=await praiseCount(p);
  t=await p.evaluate(()=>MonsterLab.getState().q.target);
  for(let i=0;i<Math.floor(t/10);i++)await p.locator('#srcRod').click();
  for(let i=0;i<t%10;i++)await p.locator('#srcCube').click();
  await p.locator('#check').click();
  await sleep(400);
  assert.equal(await praiseCount(p),before,'no praise when voice is off');
  assert.equal(await p.evaluate(()=>MonsterLabVoice.state().pending),null,'nothing pending when voice is off');
  console.log('PASS voice off: silent success');

  assert.deepEqual(errors,[],'no page errors: '+errors.join('; '));
  await browser.close();server.close();
  console.log('ALL VOICE QA PASSED');
})().catch(e=>{console.error(e);server.close();process.exit(1)});

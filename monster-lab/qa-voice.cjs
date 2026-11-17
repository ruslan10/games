// QA for spoken Hebrew encouragement on success (praise clips).
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
  await p.addInitScript(()=>{window.__plays=[];const orig=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){window.__plays.push(this.src||'');return orig.call(this)}});
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
  for(let i=0;i<Math.floor(t/10);i++)await p.locator('[data-step="ten:1"]').click();
  for(let i=0;i<t%10;i++)await p.locator('[data-step="one:1"]').click();
  await p.locator('#check').click();
  await sleep(300);
  assert.equal(await praiseCount(p),before+1,'exactly one praise on feed success');
  let src=await p.evaluate(()=>MonsterLabVoice.state().src);
  assert(/praise\d\.mp3/.test(src),'praise clip is on the audio channel');
  assert((await p.evaluate(()=>MonsterLabVoice.state().pending))===null,'no pending praise left');
  // next question: praise must not overlap the next instruction; narration stops/replaces it
  await p.locator('#next').click();
  await sleep(300);
  let pl=await plays(p);
  let lastPraise=pl.map((u,i)=>/praise\d/.test(u)?i:-1).filter(i=>i>=0).pop();
  let after=pl.slice(lastPraise+1).filter(u=>/feed_(target|mult)_pre/.test(u));
  assert(after.length===1,'feed next instruction played after praise, not stacked');
  assert(!/praise\d/.test(pl[pl.length-1]),'latest playback is the new instruction, not praise');
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
  await p.locator('#exit').click();await p.locator('[data-modal="1"]').click();
  console.log('PASS machine: praise per success despite repeated narration key');

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
  // now answer correctly and check sequencing: praise must play immediately before next mult prompt
  let beforePlays=await plays(p);
  await p.locator(`[data-t="skip:${correct}"]`).click();
  await p.waitForFunction(()=>/mult_q_pre|t_skip_pre/.test(MonsterLabVoice.state().src),null,{timeout:6000});
  pl=(await plays(p)).slice(beforePlays.length);
  let pi=pl.findIndex(u=>/praise\d/.test(u));
  assert(pi>=0,'praise played on correct skip answer');
  let mi=pl.findIndex(u=>/mult_q_pre|t_skip_pre/.test(u));
  assert(mi===pi+1,`praise immediately precedes next skip prompt (praise@${pi}, prompt@${mi})`);
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

  // --- Voice toggle off: no praise at all ---
  await p.evaluate(()=>{localStorage.setItem('monster-lab:v1',JSON.stringify({xp:0,solved:0,rounds:0,band:0,sound:false,voice:false,medals:{},times:{learned:{},stars:{}}}))});
  await p.reload();
  await p.locator('[data-station="feed"]').click();
  await p.evaluate(()=>MonsterLab.skipLesson());
  before=await praiseCount(p);
  t=await p.evaluate(()=>MonsterLab.getState().q.target);
  for(let i=0;i<Math.floor(t/10);i++)await p.locator('[data-step="ten:1"]').click();
  for(let i=0;i<t%10;i++)await p.locator('[data-step="one:1"]').click();
  await p.locator('#check').click();
  await sleep(400);
  assert.equal(await praiseCount(p),before,'no praise when voice is off');
  assert.equal(await p.evaluate(()=>MonsterLabVoice.state().pending),null,'nothing pending when voice is off');
  console.log('PASS voice off: silent success');

  assert.deepEqual(errors,[],'no page errors: '+errors.join('; '));
  await browser.close();server.close();
  console.log('ALL VOICE QA PASSED');
})().catch(e=>{console.error(e);server.close();process.exit(1)});

// QA: forced singular/zero-ones feed targets, and every times skip jump explanation; screenshots.
const {chromium}=require('playwright-core'),http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{let f=path.join(root,req.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.webp')?'image/webp':f.endsWith('.mp3')?'audio/mpeg':'text/html');res.end(fs.readFileSync(f))}catch{res.writeHead(404);res.end('nf')}}).listen(0);
(async()=>{
 const b=await chromium.launch({headless:true,executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']});
 const p=await b.newPage({viewport:{width:412,height:915}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.route('**/characters.js*',r=>r.fulfill({body:'',contentType:'text/javascript'}));
 await p.goto(`http://127.0.0.1:${server.address().port}/monster-lab/`);
 const shots=process.env.SHOTS||'/tmp';
 // feed forced targets
 const exp={11:['n11','e_eq','e_one_rod','e_plus','e_one_unit','e_rod'],10:['n10','e_eq','e_one_rod','e_rod'],20:['n20','e_eq','c2','e_tens','e_rod'],21:['n21','e_eq','c2','e_tens','e_plus','e_one_unit','e_rod'],32:['n32','e_eq','n3','e_tens','e_plus','c2','e_ones','e_rod'],99:['n99','e_eq','n9','e_tens','e_plus','n9','e_ones','e_rod']};
 for(const [t,want] of Object.entries(exp)){
  await p.locator('[data-station="feed"]').click();await p.evaluate(()=>MonsterLab.skipLesson());
  const T=Number(t);await p.evaluate(T=>{const q=MonsterLab.getState().q;q.target=T;delete q.a;delete q.v},T);
  await p.evaluate(()=>MonsterLab.getState()); // re-render to reflect target
  await p.locator('#reset').click();
  for(let k=0;k<Math.floor(T/10);k++)await p.locator('[data-step="ten:1"]').click();
  for(let k=0;k<T%10;k++)await p.locator('[data-step="one:1"]').click();
  await p.locator('#check').click();
  const x=await p.evaluate(()=>MonsterLabVoice.explain());
  assert.deepEqual(x,want,'feed '+t);
  if(T===11)await p.screenshot({path:shots+'/feed-11-done.png'});
  await p.locator('#exit').click();const m=p.locator('[data-modal="1"]');if(await m.count())await m.click()}
 console.log('PASS forced feed singular/zero-ones');
 // times skip
 await p.locator('[data-times]').click();await p.locator('[data-table="7"]').click();
 await p.evaluate(()=>MonsterLab.forceStep('skip'));
 assert.equal(await p.evaluate(()=>MonsterLabVoice.explain()),null,'skip: no explanation before first jump');
 for(let i=1;i<=10;i++){
  const ans=7*i;await p.locator(`[data-t="skip:${ans}"]`).click().catch(async()=>{});
  const tt=await p.evaluate(()=>MonsterLab.getTimes());
  if(i<=10)assert.equal(tt.skip,i,'skip advanced '+i);
  const x=await p.evaluate(()=>MonsterLabVoice.explain());
  const want=i===1?['n1'===0?0:'e_one_group','n7','e_is','n7']:['e_skip_pre','n'+7*(i-1),'e_plus','n7','e_eq','n'+7*i];
  assert.deepEqual(x,want,'skip jump '+i);
  if(i===10||i===2)await p.screenshot({path:shots+`/skip-${i}.png`})}
 console.log('PASS skip explanations jumps 1..10 (final step incl.)');
 assert(!errs.length,errs.join(';'));await b.close();server.close()})().catch(e=>{console.error(e);process.exit(1)});

// QA: every exercise type yields a complete explanation chain only after completion; all clips exist.
const {chromium}=require('playwright-core'),http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{let f=path.join(root,req.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';try{res.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.webp')?'image/webp':f.endsWith('.mp3')?'audio/mpeg':'text/html');res.end(fs.readFileSync(f))}catch{res.writeHead(404);res.end('nf')}}).listen(0);
(async()=>{
 const b=await chromium.launch({headless:true,executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']});
 const p=await b.newPage({viewport:{width:412,height:915}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.route('**/characters.js*',r=>r.fulfill({body:'',contentType:'text/javascript'}));
 await p.goto(`http://127.0.0.1:${server.address().port}/monster-lab/`);
 const missing=new Set();let chains=0;
 const check=async(label)=>{const x=await p.evaluate(()=>MonsterLabVoice.explain());assert(x&&x.length&&x.every(Boolean),label+' explanation complete');chains++;for(const k of x)if(!fs.existsSync(path.join(root,'monster-lab/audio',k+'.mp3')))missing.add(k);return x};
 for(const band of [0,1,2]){
  await p.evaluate(b=>{const s=JSON.parse(localStorage.getItem('monster-lab:v1')||'{}');s.band=b;localStorage.setItem('monster-lab:v1',JSON.stringify(s))},band);await p.reload();
  for(const mode of ['feed','machine','fractions']){
   await p.locator(`[data-station="${mode}"]`).click();await p.evaluate(()=>MonsterLab.skipLesson());
   for(let i=0;i<6;i++){
    const st=await p.evaluate(()=>MonsterLab.getState());
    assert.equal(await p.evaluate(()=>MonsterLabVoice.explain()),null,`${mode} b${band} q${i}: no explanation before answer`);
    if(mode==='feed'){const t=st.q.target;for(let k=0;k<Math.floor(t/10);k++)await p.locator('[data-step="ten:1"]').click();for(let k=0;k<t%10;k++)await p.locator('[data-step="one:1"]').click()}
    else if(mode==='machine')await p.locator(`[data-choice="${st.q.opts.findIndex(o=>o.op+o.k===st.q.answer)}"]`).click();
    else if(st.q.kind==='compare')await p.locator(`[data-choice="${st.q.answer}"]`).click();
    else for(let k=0;k<st.q.answer;k++)await p.locator(`[data-slice="${k}"]`).click();
    await p.locator('#check').click();await check(`${mode} b${band} q${i}`);
    if(i<5)await p.locator('#next').click()}
   await p.locator('#exit').click();const m=p.locator('[data-modal="1"]');if(await m.count())await m.click()}}
 // skip step
 await p.locator('[data-times]').click();
 console.log('classic chains',chains,'missing clips',[...missing],'errors',errs);
 assert(!missing.size&&!errs.length);await b.close();server.close();console.log('PASS explain coverage')})().catch(e=>{console.error(e);process.exit(1)});

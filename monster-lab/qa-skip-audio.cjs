const {chromium}=require('playwright-core'),http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const s=http.createServer((q,r)=>{let f=path.join(root,q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';try{r.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.webp')?'image/webp':f.endsWith('.mp3')?'audio/mpeg':'text/html');r.end(fs.readFileSync(f))}catch{r.writeHead(404);r.end('nf')}}).listen(0);
(async()=>{const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']});const p=await b.newPage({viewport:{width:412,height:915}});
await p.addInitScript(()=>{window.__plays=[];const o=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){window.__plays.push(this.src);this.playbackRate=3;return o.call(this)}});
await p.route('**/characters.js*',r=>r.fulfill({body:'',contentType:'text/javascript'}));
await p.goto(`http://127.0.0.1:${s.address().port}/monster-lab/`);
await p.locator('[data-times]').click();await p.locator('[data-table="7"]').click();await p.evaluate(()=>MonsterLab.forceStep('skip'));
for(let i=1;i<=10;i++){await p.evaluate(()=>window.__plays.length=0);await p.locator(`[data-t="skip:${7*i}"]`).click();await p.waitForTimeout([2,5,9,10].includes(i)?7000:300);
 const pl=(await p.evaluate(()=>window.__plays)).map(u=>u.split('/').pop().split('.')[0]);
 console.log(i,pl.join(' '));
 if([2,5,9].includes(i))assert(pl.includes('e_skip_pre')&&pl.includes('n'+7*(i-1))&&pl.indexOf('e_skip_pre')<pl.indexOf('mult_q_pre'),'jump '+i+' explanation before next question');if(i===10)assert(pl.includes('e_skip_pre')&&pl.includes('n70'),'final')}
await p.screenshot({path:'/tmp/skip-final.png'});
// classic screens
for(const m of ['machine','fractions']){await p.evaluate(()=>{});await p.goto(`http://127.0.0.1:${s.address().port}/monster-lab/`);await p.locator(`[data-station="${m}"]`).click();await p.evaluate(()=>MonsterLab.skipLesson());const st=await p.evaluate(()=>MonsterLab.getState());
 if(m==='machine')await p.locator(`[data-choice="${st.q.opts.findIndex(o=>o.op+o.k===st.q.answer)}"]`).click();else await p.locator(`[data-choice="${st.q.answer}"]`).click();
 await p.locator('#check').click();await p.waitForTimeout(400);await p.screenshot({path:`/tmp/${m}-done.png`});console.log(m,'plays',(await p.evaluate(()=>window.__plays)).map(u=>u.split('/').pop().split('.')[0]).join(' '))}
await b.close();s.close()})().catch(e=>{console.error(e);process.exit(1)});

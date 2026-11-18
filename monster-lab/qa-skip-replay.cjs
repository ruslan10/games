const {chromium}=require('playwright-core'),http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const s=http.createServer((q,r)=>{let f=path.join(root,q.url.split('?')[0]);if(f.endsWith('/'))f+='index.html';try{r.setHeader('Content-Type',f.endsWith('.js')?'application/javascript':f.endsWith('.css')?'text/css':f.endsWith('.webp')?'image/webp':f.endsWith('.mp3')?'audio/mpeg':'text/html');r.end(fs.readFileSync(f))}catch{r.writeHead(404);r.end('nf')}}).listen(0);
(async()=>{const b=await chromium.launch({executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox','--autoplay-policy=no-user-gesture-required']});const p=await b.newPage({viewport:{width:412,height:915}});
await p.addInitScript(()=>{window.__plays=[];const o=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){window.__plays.push(this.src);this.playbackRate=3;return o.call(this)}});
await p.route('**/characters.js*',r=>r.fulfill({body:'',contentType:'text/javascript'}));
await p.goto(`http://127.0.0.1:${s.address().port}/monster-lab/`);
await p.locator('[data-times]').click();await p.locator('[data-table="7"]').click();await p.evaluate(()=>MonsterLab.forceStep('skip'));
for(let i=1;i<=9;i++){await p.locator(`[data-t="skip:${7*i}"]`).click();}
assert(await p.locator('#voiceSay').count()===1,'button during unanswered jump 10');
assert.equal(await p.evaluate(()=>MonsterLabVoice.explain()),null,'unanswered jump 10: replay stays on instruction');
await p.locator('[data-t="skip:70"]').click();await p.waitForTimeout(6500);
assert(await p.locator('#voiceSay').count()===1,'replay button at final completion');
assert.match(await p.locator('#voiceSay').getAttribute('aria-label'),/הסבר/);
await p.evaluate(()=>window.__plays.length=0);await p.locator('#voiceSay').click();await p.waitForTimeout(5000);
const pl=(await p.evaluate(()=>window.__plays)).map(u=>u.split('/').pop().split('.')[0]);
assert.deepEqual(pl.slice(0,6),['e_skip_pre','n63','e_plus','n7','e_eq','n70'],pl.join(' '));
await p.screenshot({path:'/home/sandbox/shots/skip-final-replay.png'});
console.log('PASS final skip replay',pl.join(' '));await b.close();s.close()})().catch(e=>{console.error(e);process.exit(1)});

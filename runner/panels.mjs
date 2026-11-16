/* Presentation-only HTML string builders for progression UI. No DOM, no state, no storage.
   Hebrew RTL, mobile first. Integrator binds buttons by id / data attributes.
   Existing classes used: eyebrow muted note primary secondary quiet twocol smallrow shoplist shopitem info wallet coinicon stats subtitle help.
   NEW classes the integrator must style (all optional, layout still works unstyled):
     .mcard (mission card, flex column), .mbar (progress track, height ~8px, bg muted), .mfill (inner bar, width set inline),
     .mreward (reward chip), .mdone (finished state), .pips (row of level dots), .pip (dot), .pip.on (filled dot),
     .dailychip (compact menu button), .res (results lines box), .resline (one result line), .reviveoffer (revive wrapper).
   Buttons/ids: [data-upgrade=ID], #daily, #dailyplay, #back, #revive, #norevive. */
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=n=>{n=Number(n);return Number.isFinite(n)?Math.max(0,Math.floor(n)):0;};
const fmt=n=>num(n).toLocaleString('he-IL');
const coin=n=>`<span class="coinicon">◆</span> ${fmt(n)}`;

export function missionsPanel(views=[]){
 const cards=views.map(v=>{const t=Math.max(1,num(v.target)),p=Math.min(t,num(v.progress)),pct=Math.round(p/t*100);
  return `<div class="mcard${p>=t?' mdone':''}"><b>${esc(v.text)}</b><div class="mbar" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${p}"><div class="mfill" style="width:${pct}%"></div></div><div class="smallrow"><small>${fmt(p)} / ${fmt(t)}</small><span class="mreward">${coin(v.reward)}</span></div></div>`;}).join('');
 return `<p class="eyebrow">משימות</p><h2>המשימות שלך</h2><div class="missions">${cards||'<p class="muted">אין משימות כרגע.</p>'}</div><p class="note">משימה שהושלמה מוחלפת באחרת, והפרס נכנס לקופה בסוף הריצה.</p>`;}

export function upgradesPanel(rows=[],coins=0){
 const list=rows.map(r=>{const max=Math.max(1,num(r.max)),lv=Math.min(max,num(r.level)),atMax=r.cost===null||r.cost===undefined||lv>=max;
  const pips=Array.from({length:max},(_,i)=>`<i class="pip${i<lv?' on':''}"></i>`).join('');
  const next=r.nextValue!==undefined&&!atMax?` · הבא: ${esc(r.nextValue)} ${esc(r.unit||'')}`:'';
  const dis=atMax||!r.affordable?' disabled':'';
  return `<div class="shopitem"><div class="info"><b>${esc(r.name)}</b><small>${esc(r.desc)}${next}</small><div class="pips" aria-label="רמה ${lv} מתוך ${max}">${pips}</div></div><button class="buy" data-upgrade="${esc(r.id)}"${dis}>${atMax?'מלא':'◆ '+fmt(r.cost)}</button></div>`;}).join('');
 return `<button class="quiet" id="back" style="display:block;padding:3px 0 15px">חזרה לתפריט</button><p class="eyebrow">שדרוגים</p><h2>חיזוק הכוחות</h2><span class="wallet">${coin(coins)} מטבעות</span><div class="shoplist">${list}</div><p class="note">אין רכישות בכסף אמיתי. השדרוגים נשמרים במכשיר.</p>`;}

export function dailyChip({modName='',done=false,streak=0}={}){
 const s=num(streak)>1?` · 🔥 ${num(streak)}`:'';
 return `<button class="secondary dailychip" id="daily"><b>האתגר היומי</b><small>${done?'הושלם היום ✓':esc(modName)}${s}</small></button>`;}

export function dailyPanel({info={},goalCoins=0,reward=0,status={}}={}){
 const mod=info.mod||{};const done=!!status.done;
 return `<button class="quiet" id="back" style="display:block;padding:3px 0 15px">חזרה לתפריט</button><p class="eyebrow">אותו מסלול לכולם, היום בלבד</p><h2>האתגר היומי</h2><p class="subtitle">שלב ${num(info.level)} · ${esc(mod.name)}</p><p class="muted">${esc(mod.desc)}</p><div class="stats"><div><b>${fmt(goalCoins)}</b><small>מטבעות לסיום</small></div><div><b>+${fmt(reward)}</b><small>פרס (פעם ביום)</small></div></div><div class="stats"><div><b>${num(status.streak)}</b><small>ימים ברצף</small></div><div><b>${fmt(status.best)}</b><small>השיא של היום</small></div></div>${done?'<p class="note">כבר קיבלת את הפרס היום. אפשר לשחק שוב לכיף, בלי פרס נוסף. מחר יחכה אתגר חדש.</p>':''}<button class="primary" id="dailyplay">${done?'משחקים שוב':'יוצאים לאתגר'}</button><p class="note">האתגר מתחלף בחצות לפי שעון ישראל.</p>`;}

export function finishLines({missions=[],coinBonus=0,dailyCoins=0,dailyDone=false}={}){
 const L=[];for(const m of missions)L.push(`<div class="resline">✓ ${esc(m.text)} <span class="mreward">+${fmt(m.reward)}</span></div>`);
 if(num(coinBonus))L.push(`<div class="resline">בונוס שדרוג מטבעות <span class="mreward">+${fmt(coinBonus)}</span></div>`);
 if(dailyDone)L.push(`<div class="resline">🔥 האתגר היומי הושלם <span class="mreward">+${fmt(dailyCoins)}</span></div>`);
 return L.length?`<div class="res">${L.join('')}</div>`:'';}

export function reviveOffer(cost){
 return `<div class="reviveoffer"><p class="eyebrow">עוד הזדמנות אחת</p><h2>ממשיכים מאותו מקום?</h2><p class="subtitle">${coin(cost)} מטבעות · פעם אחת בריצה</p><button class="primary" id="revive">מחיים</button><button class="secondary" id="norevive">לא, תודה</button></div>`;}

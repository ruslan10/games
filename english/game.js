/* English Worlds - game engine. Plain JS, no build step. */
'use strict';

const KEY = 'english-worlds:v1';
const XP_REPEAT = 10, XP_CHOOSE = 5;

/* ---------- save ---------- */
let storageOK = true;
function freshSave() {
  const worlds = {};
  for (const w of WORLDS) worlds[w.id] = { b1: [], b2: [], b3: [] };
  return { v: 1, xp: 0, worlds, settings: { voice: 'off' }, streak: { last: '', count: 0 } };
}
let save = freshSave();
try {
  const raw = localStorage.getItem(KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.v === 1 && parsed.worlds) save = Object.assign(freshSave(), parsed);
  }
} catch (_) { storageOK = false; }
function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (_) { storageOK = false; } }

function localDay(offsetDays) {
  const d = new Date(Date.now() + (offsetDays || 0) * 864e5);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
function touchStreak() {
  const today = localDay(0);
  if (save.streak.last === today) return;
  save.streak.count = save.streak.last === localDay(-1) ? save.streak.count + 1 : 1;
  save.streak.last = today;
  persist();
}

/* ---------- audio: fetch once per clip, play from a blob URL (works without Range support) ---------- */
const clipCache = new Map(); // id -> Promise<blobURL>
let currentAudio = null;
function clipURL(id) {
  if (!clipCache.has(id)) {
    clipCache.set(id, fetch('audio/' + id + '.mp3').then(r => {
      if (!r.ok) throw new Error('clip ' + id);
      return r.blob().then(b => URL.createObjectURL(b));
    }));
  }
  return clipCache.get(id);
}
let activeRec = null;
function stopAudio() {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if (activeRec) { try { activeRec.abort(); } catch (_) {} activeRec = null; }
}
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 3000);
}
async function playClip(id, onstate) {
  stopAudio();
  onstate('loading');
  try {
    const url = await clipURL(id);
    const a = new Audio(url);
    currentAudio = a;
    a.onended = () => { if (currentAudio === a) currentAudio = null; onstate('idle'); };
    a.onerror = () => { if (currentAudio === a) currentAudio = null; onstate('error'); toast('לא הצלחנו להשמיע את ההקלטה. בודקים את החיבור ומנסים שוב.'); };
    onstate('playing');
    await a.play();
  } catch (_) { onstate('error'); toast('לא הצלחנו להשמיע את ההקלטה. בודקים את החיבור ומנסים שוב.'); }
}
function preloadBand(world, band) {
  for (const m of world.bands[band]) { clipURL(m.clip).catch(() => {}); if (m.qClip) clipURL(m.qClip).catch(() => {}); }
}

/* ---------- icons ---------- */
const S = (inner, vb) => `<svg viewBox="0 0 ${vb || '48 48'}" class="ic" aria-hidden="true">${inner}</svg>`;
const ICONS = {
  cat: S('<path d="M10 18L6 4l14 8z" fill="#334155"/><path d="M38 18l4-14-14 8z" fill="#334155"/><circle cx="24" cy="28" r="16" fill="#475569"/><circle cx="17" cy="26" r="3.4" fill="#fff"/><circle cx="31" cy="26" r="3.4" fill="#fff"/><circle cx="18" cy="27" r="1.7" fill="#0f172a"/><circle cx="30" cy="27" r="1.7" fill="#0f172a"/><path d="M21 34q3 3 6 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>'),
  dog: S('<ellipse cx="10" cy="14" rx="5" ry="9" fill="#92400e" transform="rotate(20 10 14)"/><ellipse cx="38" cy="14" rx="5" ry="9" fill="#92400e" transform="rotate(-20 38 14)"/><circle cx="24" cy="26" r="16" fill="#b45309"/><ellipse cx="24" cy="33" rx="8" ry="6" fill="#fde68a"/><circle cx="17" cy="23" r="3.2" fill="#fff"/><circle cx="31" cy="23" r="3.2" fill="#fff"/><circle cx="18" cy="24" r="1.6" fill="#0f172a"/><circle cx="30" cy="24" r="1.6" fill="#0f172a"/><circle cx="24" cy="30" r="2.6" fill="#0f172a"/>'),
  bird: S('<ellipse cx="25" cy="28" rx="14" ry="12" fill="#ef4444"/><ellipse cx="19" cy="29" rx="7" ry="5" fill="#b91c1c" transform="rotate(-25 19 29)"/><circle cx="30" cy="22" r="3.4" fill="#fff"/><circle cx="31" cy="23" r="1.7" fill="#0f172a"/><path d="M36 25l8 2-8 3z" fill="#f59e0b"/><path d="M22 40v5M28 40v5" stroke="#92400e" stroke-width="2.4" stroke-linecap="round"/>'),
  fish: S('<path d="M30 24l12-8v16z" fill="#2563eb"/><ellipse cx="20" cy="24" rx="14" ry="9" fill="#3b82f6"/><circle cx="14" cy="22" r="2.8" fill="#fff"/><circle cx="15" cy="23" r="1.4" fill="#0f172a"/><path d="M20 17q3 3 0 6M25 16q3 4 0 8" stroke="#93c5fd" stroke-width="2" fill="none" stroke-linecap="round"/>'),
  monkey: S('<circle cx="8" cy="24" r="5" fill="#92400e"/><circle cx="40" cy="24" r="5" fill="#92400e"/><circle cx="24" cy="25" r="15" fill="#a16207"/><ellipse cx="24" cy="30" rx="10" ry="8" fill="#fde68a"/><circle cx="18" cy="22" r="3" fill="#fff"/><circle cx="30" cy="22" r="3" fill="#fff"/><circle cx="19" cy="23" r="1.5" fill="#0f172a"/><circle cx="29" cy="23" r="1.5" fill="#0f172a"/><path d="M20 31q4 4 8 0" stroke="#0f172a" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 10q4-5 8 0" stroke="#a16207" stroke-width="4" fill="none" stroke-linecap="round"/>'),
  horse: S('<path d="M14 8q-4 6-2 14l-4 8q-1 3 2 4l6 2q3 1 4-2l2-6q8 2 12-2l6 10q1 3 4 2l2-1q2-1 1-4l-7-14q2-9-6-13Q26 2 20 6z" fill="#b45309"/><path d="M14 8q-3 4-3 9l5-2q4-2 5-6z" fill="#78350f"/><circle cx="17" cy="18" r="2.6" fill="#fff"/><circle cx="18" cy="19" r="1.3" fill="#0f172a"/><circle cx="12" cy="30" r="1.4" fill="#0f172a"/>'),
  elephant: S('<ellipse cx="14" cy="20" rx="8" ry="10" fill="#94a3b8"/><ellipse cx="34" cy="20" rx="8" ry="10" fill="#94a3b8"/><circle cx="24" cy="24" r="14" fill="#cbd5e1"/><path d="M24 30q-1 8 2 12 1 2 3 1" stroke="#cbd5e1" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="18" cy="22" r="3" fill="#fff"/><circle cx="30" cy="22" r="3" fill="#fff"/><circle cx="19" cy="23" r="1.5" fill="#0f172a"/><circle cx="29" cy="23" r="1.5" fill="#0f172a"/>'),
  duck: S('<ellipse cx="24" cy="30" rx="13" ry="10" fill="#facc15"/><circle cx="30" cy="16" r="8" fill="#facc15"/><path d="M37 15l8 2-8 3z" fill="#f97316"/><circle cx="32" cy="14" r="2.4" fill="#fff"/><circle cx="33" cy="15" r="1.2" fill="#0f172a"/><ellipse cx="20" cy="29" rx="6" ry="4" fill="#eab308" transform="rotate(-15 20 29)"/><path d="M6 42q6 3 12 0t12 0 12 0" stroke="#3b82f6" stroke-width="2.4" fill="none" stroke-linecap="round"/>'),
  apple: S('<ellipse cx="30" cy="9" rx="7" ry="4" fill="#22c55e" transform="rotate(-25 30 9)"/><rect x="22" y="4" width="3" height="9" rx="1.5" fill="#92400e"/><circle cx="24" cy="28" r="16" fill="#ef4444"/><ellipse cx="17" cy="22" rx="4" ry="6" fill="#fca5a5" opacity=".9"/>'),
  milk: S('<path d="M14 14l10-8 10 8z" fill="#93c5fd"/><rect x="14" y="14" width="20" height="28" rx="2" fill="#fff" stroke="#94a3b8" stroke-width="2"/><rect x="14" y="24" width="20" height="9" fill="#3b82f6"/>'),
  bread: S('<path d="M8 22q0-9 16-9t16 9q3 1 3 4t-3 4H8q-3-1-3-4t3-4z" fill="#d97706"/><path d="M8 26h32v10q0 4-4 4H12q-4 0-4-4z" fill="#f59e0b"/><path d="M15 22l5-3M24 22l5-3" stroke="#fde68a" stroke-width="2.4" stroke-linecap="round"/>'),
  banana: S('<path d="M10 8q2 22 24 26 6 1 8-2-1 8-10 8-16-1-24-20-2-8 2-12z" fill="#facc15" stroke="#ca8a04" stroke-width="2"/><rect x="7" y="4" width="6" height="6" rx="2" fill="#92400e"/>'),
  cheese: S('<path d="M6 30q10-14 32-16l4 18q-20 6-36-2z" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><circle cx="20" cy="26" r="3" fill="#f59e0b"/><circle cx="30" cy="22" r="2.4" fill="#f59e0b"/><circle cx="32" cy="30" r="2" fill="#f59e0b"/>'),
  juice: S('<path d="M14 12h20l-3 30H17z" fill="#fb923c" stroke="#c2410c" stroke-width="2"/><path d="M14 12h20l-1 6H15z" fill="#fdba74"/><path d="M26 4l4 10" stroke="#16a34a" stroke-width="2.6" stroke-linecap="round"/><circle cx="24" cy="28" r="4" fill="#fff" opacity=".45"/>'),
  rice: S('<path d="M8 24q16-6 32 0-2 10-16 10t-16-10z" fill="#fff" stroke="#94a3b8" stroke-width="2"/><path d="M6 24h36l-4 14q-14 6-28 0z" fill="#f43f5e"/><circle cx="18" cy="22" r="1.6" fill="#e2e8f0"/><circle cx="24" cy="20" r="1.6" fill="#e2e8f0"/><circle cx="30" cy="22" r="1.6" fill="#e2e8f0"/><path d="M34 4l-8 12" stroke="#92400e" stroke-width="2.4" stroke-linecap="round"/>'),
  water: S('<path d="M24 6q12 16 12 24a12 12 0 01-24 0q0-8 12-24z" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/><ellipse cx="19" cy="30" rx="3" ry="5" fill="#bae6fd"/>'),
  sandwich: S('<path d="M8 20L24 6l16 14z" fill="#fbbf24"/><rect x="8" y="22" width="32" height="5" rx="2.5" fill="#22c55e"/><rect x="8" y="28" width="32" height="5" rx="2.5" fill="#fca5a5"/><path d="M8 34h32q0 6-6 6H14q-6 0-6-6z" fill="#f59e0b"/>'),
  salad: S('<path d="M6 24h36l-5 14q-13 6-26 0z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/><circle cx="16" cy="20" r="5" fill="#22c55e"/><circle cx="26" cy="16" r="5" fill="#4ade80"/><circle cx="33" cy="21" r="4" fill="#16a34a"/><circle cx="21" cy="22" r="2.4" fill="#ef4444"/><circle cx="30" cy="25" r="2.2" fill="#facc15"/>'),
  eggs: S('<ellipse cx="17" cy="26" rx="10" ry="13" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><ellipse cx="33" cy="28" rx="9" ry="11" fill="#fff7ed" stroke="#e7c9a0" stroke-width="2"/><circle cx="17" cy="28" r="5" fill="#fbbf24"/>'),
  school: S('<path d="M24 6l20 12H4z" fill="#dc2626"/><rect x="8" y="18" width="32" height="24" fill="#fde68a" stroke="#b45309" stroke-width="2"/><rect x="19" y="28" width="10" height="14" fill="#92400e"/><rect x="12" y="22" width="6" height="6" fill="#93c5fd"/><rect x="30" y="22" width="6" height="6" fill="#93c5fd"/>'),
  house: S('<path d="M24 6l18 14H6z" fill="#78350f"/><rect x="10" y="20" width="28" height="22" fill="#fecdd3" stroke="#9f1239" stroke-width="2"/><rect x="20" y="28" width="9" height="14" fill="#78350f"/><rect x="13" y="24" width="6" height="6" fill="#93c5fd"/><rect x="30" y="24" width="6" height="6" fill="#93c5fd"/>'),
  shop: S('<rect x="8" y="18" width="32" height="24" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/><path d="M6 18h36l-3-9H9z" fill="#0ea5e9"/><path d="M6 18q3 5 6 0t6 0 6 0 6 0 6 0 6 0" fill="#f0abfc" stroke="#a21caf" stroke-width="1.6"/><rect x="13" y="26" width="10" height="9" fill="#bae6fd" stroke="#0369a1" stroke-width="1.6"/><rect x="27" y="26" width="8" height="16" fill="#0369a1"/>'),
  bus: S('<rect x="5" y="12" width="38" height="22" rx="4" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><rect x="9" y="16" width="8" height="7" rx="1" fill="#bfdbfe"/><rect x="20" y="16" width="8" height="7" rx="1" fill="#bfdbfe"/><rect x="31" y="16" width="8" height="7" rx="1" fill="#bfdbfe"/><rect x="5" y="26" width="38" height="3" fill="#ef4444"/><circle cx="14" cy="36" r="4.5" fill="#1f2937"/><circle cx="34" cy="36" r="4.5" fill="#1f2937"/>'),
  bank: S('<path d="M24 5l18 10H6z" fill="#fbbf24" stroke="#92400e" stroke-width="2"/><rect x="8" y="17" width="32" height="4" fill="#92400e"/><rect x="10" y="23" width="5" height="14" fill="#fde68a" stroke="#92400e" stroke-width="1.6"/><rect x="21" y="23" width="5" height="14" fill="#fde68a" stroke="#92400e" stroke-width="1.6"/><rect x="32" y="23" width="5" height="14" fill="#fde68a" stroke="#92400e" stroke-width="1.6"/><rect x="6" y="39" width="36" height="4" fill="#92400e"/>'),
  park: S('<circle cx="24" cy="16" r="10" fill="#22c55e"/><circle cx="15" cy="21" r="7" fill="#4ade80"/><circle cx="33" cy="21" r="7" fill="#16a34a"/><rect x="22" y="22" width="4" height="12" fill="#92400e"/><ellipse cx="24" cy="40" rx="16" ry="4" fill="#86efac"/><path d="M12 34h24" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>'),
  library: S('<rect x="8" y="8" width="7" height="32" fill="#ef4444"/><rect x="17" y="10" width="7" height="30" fill="#3b82f6"/><rect x="26" y="8" width="7" height="32" fill="#facc15"/><rect x="33" y="12" width="7" height="28" fill="#22c55e" transform="rotate(8 33 12)"/><rect x="5" y="40" width="38" height="3" fill="#78350f"/>'),
  train: S('<rect x="8" y="8" width="32" height="24" rx="5" fill="#ef4444" stroke="#991b1b" stroke-width="2"/><rect x="12" y="12" width="24" height="9" rx="2" fill="#bfdbfe"/><circle cx="16" cy="36" r="4" fill="#1f2937"/><circle cx="32" cy="36" r="4" fill="#1f2937"/><rect x="8" y="24" width="32" height="4" fill="#fbbf24"/><path d="M4 42h40" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>'),
  market: S('<rect x="8" y="16" width="32" height="26" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><path d="M6 16h36l-4-8H10z" fill="#16a34a"/><rect x="20" y="28" width="8" height="14" fill="#15803d"/><circle cx="14" cy="22" r="3" fill="#ef4444"/><circle cx="24" cy="21" r="3" fill="#facc15"/><circle cx="33" cy="22" r="3" fill="#22c55e"/>'),
  star: S('<path d="M24 4l5.8 12.6 13.8 1.6-10.2 9.4 2.8 13.6L24 34.6l-12.2 6.6 2.8-13.6L4.4 18.2l13.8-1.6z" fill="#fbbf24" stroke="#b45309" stroke-width="2" stroke-linejoin="round"/>'),
  heart: S('<path d="M24 42Q4 28 4 16a10 10 0 0120-2 10 10 0 0120 2q0 12-20 26z" fill="#f87171" stroke="#b91c1c" stroke-width="2" stroke-linejoin="round"/>'),
};
const ART = {
  alien: S('<line x1="45" y1="28" x2="36" y2="8" stroke="#4ade80" stroke-width="5" stroke-linecap="round"/><line x1="75" y1="28" x2="84" y2="8" stroke="#4ade80" stroke-width="5" stroke-linecap="round"/><circle cx="36" cy="8" r="6" fill="#4ade80"/><circle cx="84" cy="8" r="6" fill="#4ade80"/><ellipse cx="60" cy="62" rx="42" ry="38" fill="#4ade80"/><ellipse cx="60" cy="96" rx="26" ry="10" fill="#22c55e"/><circle cx="44" cy="54" r="12" fill="#fff"/><circle cx="76" cy="54" r="12" fill="#fff"/><circle cx="46" cy="56" r="5.5" fill="#0f172a"/><circle cx="74" cy="56" r="5.5" fill="#0f172a"/><path d="M46 80q14 12 28 0" stroke="#0f172a" stroke-width="4" fill="none" stroke-linecap="round"/>', '120 120'),
  pet: S('<path d="M28 40L20 14l26 14z" fill="#34d399"/><path d="M92 40l8-26-26 14z" fill="#34d399"/><circle cx="60" cy="66" r="40" fill="#6ee7b7"/><ellipse cx="60" cy="86" rx="22" ry="16" fill="#d1fae5"/><circle cx="44" cy="58" r="10" fill="#fff"/><circle cx="76" cy="58" r="10" fill="#fff"/><circle cx="45" cy="59" r="5" fill="#134e4a"/><circle cx="75" cy="59" r="5" fill="#134e4a"/><path d="M48 76q12 10 24 0" stroke="#134e4a" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="32" cy="70" r="5" fill="#f9a8d4" opacity=".8"/><circle cx="88" cy="70" r="5" fill="#f9a8d4" opacity=".8"/>', '120 120'),
  hero: S('<path d="M60 34L18 108l42-14 42 14z" fill="#ef4444" stroke="#111" stroke-width="4" stroke-linejoin="round"/><circle cx="60" cy="34" r="18" fill="#fcd34d" stroke="#111" stroke-width="4"/><rect x="42" y="26" width="36" height="10" rx="5" fill="#1d4ed8" stroke="#111" stroke-width="3"/><circle cx="53" cy="32" r="3" fill="#111"/><circle cx="67" cy="32" r="3" fill="#111"/><path d="M52 42q8 7 16 0" stroke="#111" stroke-width="3.5" fill="none" stroke-linecap="round"/>', '120 120'),
  villain: S('<path d="M34 34L24 10l24 16z" fill="#7c3aed" stroke="#111" stroke-width="4" stroke-linejoin="round"/><path d="M86 34l10-24-24 16z" fill="#a78bfa" stroke="#111" stroke-width="4" stroke-linejoin="round"/><circle cx="60" cy="64" r="38" fill="#a78bfa" stroke="#111" stroke-width="4"/><path d="M34 52l18 6M86 52l-18 6" stroke="#111" stroke-width="4" stroke-linecap="round"/><circle cx="44" cy="62" r="5" fill="#111"/><circle cx="76" cy="62" r="5" fill="#111"/><path d="M44 86q16-10 32 0" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>', '120 120'),
  island: S('<circle cx="60" cy="50" r="34" fill="#38bdf8"/><ellipse cx="60" cy="86" rx="38" ry="14" fill="#fde68a"/><path d="M60 26q-4 22 0 34" stroke="#92400e" stroke-width="6" stroke-linecap="round"/><path d="M60 26q-18-8-26 4 12 6 26 2M60 26q18-8 26 4-12 6-26 2M60 26q-6-14-20-12 6 10 20 12M60 26q6-14 20-12-6 10-20 12" fill="#22c55e"/>', '120 120'),
  city: S('<rect x="14" y="46" width="26" height="58" fill="#3b82f6"/><rect x="48" y="26" width="30" height="78" fill="#f59e0b"/><rect x="84" y="56" width="24" height="48" fill="#a78bfa"/><rect x="20" y="54" width="6" height="8" fill="#fde68a"/><rect x="30" y="54" width="6" height="8" fill="#fde68a"/><rect x="20" y="70" width="6" height="8" fill="#fde68a"/><rect x="54" y="34" width="7" height="8" fill="#78350f"/><rect x="65" y="34" width="7" height="8" fill="#78350f"/><rect x="54" y="50" width="7" height="8" fill="#78350f"/><rect x="65" y="50" width="7" height="8" fill="#78350f"/><rect x="90" y="64" width="5" height="7" fill="#ede9fe"/><rect x="98" y="64" width="5" height="7" fill="#ede9fe"/>', '120 120'),
};
function worldArt(id) {
  return { island: ART.island, space: ART.alien, pet: ART.pet, city: ART.city, comic: ART.hero }[id] || ART.hero;
}
const ICON_SPEAKER = '<svg viewBox="0 0 24 24" class="ic-btn" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 00-2.5-4v8a4.5 4.5 0 002.5-4zM14 3.2v2.1a7 7 0 010 13.4v2.1a9 9 0 000-17.6z"/></svg>';
const ICON_MIC = '<svg viewBox="0 0 24 24" class="ic-btn" aria-hidden="true"><path d="M12 15a4 4 0 004-4V6a4 4 0 10-8 0v5a4 4 0 004 4zm7-4a7 7 0 01-14 0H3a9 9 0 008 8.94V23h2v-3.06A9 9 0 0021 11z"/></svg>';
const ICON_BACK = '<svg viewBox="0 0 24 24" class="ic-btn" aria-hidden="true"><path d="M10 6l7 6-7 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_STAR = '<svg viewBox="0 0 24 24" class="ic-star" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>';
const ICON_FLAME = '<svg viewBox="0 0 24 24" class="ic-flame" aria-hidden="true"><path d="M12 2c1 4-4 6-4 11a4 4 0 008 0c0-2-1-3-1-3s3 1 3 5a6 6 0 01-12 0C6 8 11 6 12 2z"/></svg>';
const ICON_LOCK = '<svg viewBox="0 0 24 24" class="ic-lock" aria-hidden="true"><path d="M7 11V8a5 5 0 0110 0v3h1a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1v-9a1 1 0 011-1zm2 0h6V8a3 3 0 00-6 0z"/></svg>';
const ICON_GEAR = '<svg viewBox="0 0 24 24" class="ic-btn" aria-hidden="true"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9 4a9 9 0 01-.2 1.8l2 1.5-2 3.5-2.3-1a9 9 0 01-3.1 1.8L15 22H9l-.4-2.4a9 9 0 01-3.1-1.8l-2.3 1-2-3.5 2-1.5a9 9 0 010-3.6l-2-1.5 2-3.5 2.3 1a9 9 0 013.1-1.8L9 2h6l.4 2.4a9 9 0 013.1 1.8l2.3-1 2 3.5-2 1.5a9 9 0 01.2 1.8z"/></svg>';

/* ---------- speech recognition (fail closed; self-report is the default) ---------- */
function srConstructor() { return window.SpeechRecognition || window.webkitSpeechRecognition || null; }
async function onDeviceStatus() {
  const SR = srConstructor();
  if (!SR || typeof SR.available !== 'function') return 'unsupported';
  try { return await SR.available({ langs: ['en-US'], processLocally: true }); } catch (_) { return 'unsupported'; }
}
function words(text) { return (text || '').toLowerCase().replace(/[^a-z\s']/g, ' ').split(/\s+/).filter(w => w.length > 1); }
function matchScore(target, transcript) {
  const tw = words(target); if (!tw.length) return 0;
  const got = new Set(words(transcript));
  const hit = tw.filter(w => got.has(w)).length;
  return hit / tw.length;
}
function recognize(mode, target, cb) {
  const SR = srConstructor();
  if (!SR) return cb({ error: 'unsupported' });
  let inst = null;
  const start = () => {
    let r;
    try { r = new SR(); } catch (_) { return cb({ error: 'unsupported' }); }
    inst = r;
    r.lang = 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 3;
    if (mode === 'ondevice') { try { r.processLocally = true; } catch (_) { return cb({ error: 'unsupported' }); } }
    let settled = false;
    const done = res => { if (!settled) { settled = true; cb(res); } };
    r.onresult = e => {
      let best = { score: 0, text: '' };
      for (const res of e.results) for (const alt of res) {
        const score = matchScore(target, alt.transcript);
        if (score > best.score || !best.text) best = { score, text: alt.transcript };
      }
      done({ heard: best.text, ok: best.score >= 0.6, score: best.score });
    };
    r.onerror = e => done({ error: (e && e.error) || 'unknown' });
    r.onend = () => done({ error: 'no-speech' });
    try { r.start(); } catch (_) { done({ error: 'unsupported' }); }
    return r;
  };
  if (mode === 'ondevice') {
    /* Fail closed: without a positive on-device availability answer we never
       start recognition, so audio can never silently go to the cloud while
       the UI promises on-device. */
    if (typeof SR.available !== 'function') return cb({ error: 'unsupported' });
    Promise.resolve()
      .then(() => SR.available({ langs: ['en-US'], processLocally: true }))
      .then(async st => {
        if (st === 'unavailable') return cb({ error: 'unsupported' });
        if (st === 'downloadable') {
          try { if (typeof SR.install === 'function') await SR.install({ langs: ['en-US'], processLocally: true }); }
          catch (_) { return cb({ error: 'unsupported' }); }
        }
        start();
      })
      .catch(() => cb({ error: 'unsupported' }));
  } else {
    start();
  }
  return { abort: () => { if (inst) { try { inst.abort(); } catch (_) {} } } };
}

/* ---------- app state ---------- */
const app = document.getElementById('app');
let view = { screen: 'hub' };
let navToken = 0; // bumped on every render; late async callbacks check it
function goHub() { stopAudio(); view = { screen: 'hub' }; render(); }
function goWorld(worldId) {
  stopAudio();
  const w = WORLDS.find(x => x.id === worldId);
  const band = firstOpenBand(w);
  view = { screen: 'world', worldId, band, mission: nextMission(w, band), phase: 'ready', heard: null };
  preloadBand(w, band);
  render();
}
function bandDone(w, band) { return save.worlds[w.id][band].length >= w.bands[band].length; }
function bandOpen(w, band) {
  if (band === 'b1') return true;
  if (band === 'b2') return bandDone(w, 'b1');
  return bandDone(w, 'b2');
}
function firstOpenBand(w) { return bandDone(w, 'b1') ? (bandDone(w, 'b2') ? 'b3' : 'b2') : 'b1'; }
function nextMission(w, band) {
  const done = save.worlds[w.id][band];
  for (let i = 0; i < w.bands[band].length; i++) if (!done.includes(i)) return i;
  return w.bands[band].length - 1;
}
function totalDone(w) { return ['b1', 'b2', 'b3'].reduce((n, b) => n + save.worlds[w.id][b].length, 0); }

function completeMission(w, band, idx, xp) {
  const arr = save.worlds[w.id][band];
  if (!arr.includes(idx)) { arr.push(idx); save.xp += xp; touchStreak(); persist(); }
  return arr.length >= w.bands[band].length;
}

/* ---------- world scenes: each world's own play mechanic, driven by completed missions ---------- */
function worldScene(w) {
  const done = [];
  for (const b of ['b1', 'b2', 'b3']) save.worlds[w.id][b].forEach(i => done.push(w.bands[b][i]));
  const iconOf = m => ICONS[m.icon || m.answer] || '';
  if (w.id === 'space') {
    if (!done.length) return '';
    return `<div class="scene thread" aria-label="השיחה עם החייזר - לוחצים על בועה כדי לשמוע שוב">
      <span class="scene-art">${ART.alien}</span>
      <div class="thread-bubbles">${done.filter(m => m.q && m.say).slice(-3).map(m => `<span class="bubble q" data-clip="${m.qClip}" role="button" tabindex="0"><bdi>${esc(m.q)}</bdi></span><span class="bubble a" data-clip="${m.clip}" role="button" tabindex="0"><bdi>${esc(m.say)}</bdi></span>`).join('')}</div>
    </div>`;
  }
  if (w.id === 'comic') {
    if (!done.length) return '';
    return `<div class="scene panels" aria-label="חלונות הסיפור - לוחצים על חלון כדי לשמוע שוב">
      ${done.filter(m => m.say).slice(-3).map((m, i) => `<span class="panel" data-clip="${m.clip}" role="button" tabindex="0"><span class="panel-art">${i % 2 ? ART.villain : ART.hero}</span><bdi>${esc(m.say)}</bdi></span>`).join('')}
    </div>`;
  }
  if (w.id === 'pet') {
    const stage = Math.min(4, Math.floor(done.length / 3));
    const grow = (0.55 + stage * 0.15).toFixed(2);
    return `<div class="scene" aria-label="הדרקון גדל עם כל האכלה">
      <span class="scene-art pet-grow" style="--grow:${grow}">${ART.pet}</span>
      <span class="scene-items">${done.map(m => `<i data-clip="${m.clip}" role="button" tabindex="0">${iconOf(m)}</i>`).join('')}</span>
      <small>${done.length} ארוחות · ${stage < 4 ? 'הדרקון גדל!' : 'הדרקון גדל עד הסוף!'} · לוחצים על אוכל כדי לשמוע שוב</small>
    </div>`;
  }
  if (!done.length) return '';
  const label = w.id === 'island' ? done.length + ' חיות באי' : done.length + ' מקומות בעיר';
  return `<div class="scene" aria-label="${label} - לוחצים כדי לשמוע שוב">
    ${w.id === 'island' ? `<span class="scene-art">${ART.island}</span>` : ''}
    <span class="scene-items">${done.map(m => `<i data-clip="${m.clip}" role="button" tabindex="0">${iconOf(m)}</i>`).join('')}</span>
    <small>${label} · לוחצים על תמונה כדי לשמוע שוב</small>
  </div>`;
}

/* ---------- render ---------- */
function render() {
  navToken++;
  stopAudio();
  if (view.screen === 'hub') return renderHub();
  renderWorld();
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function renderHub() {
  const stars = WORLDS.reduce((n, w) => n + ['b1', 'b2', 'b3'].filter(b => bandDone(w, b)).length, 0);
  app.innerHTML = `
  <header class="top">
    <button class="icon-btn" id="settingsBtn" aria-label="הגדרות הורים" title="הגדרות הורים">${ICON_GEAR}</button>
    <div class="brand">
      <h1>עולמות האנגלית</h1>
      <p>שומעים, חוזרים ומשחקים - בלי צורך לדעת קרוא</p>
    </div>
    <div class="pills">
      <span class="pill" title="נקודות">${ICON_STAR} <b id="xp">${save.xp}</b></span>
      <span class="pill" title="רצף ימים">${ICON_FLAME} ${save.streak.count}</span>
      <span class="pill" title="כוכבים">${ICON_STAR} ${stars}</span>
    </div>
  </header>
  <div class="worlds">
    ${WORLDS.map(w => {
      const total = w.bands.b1.length + w.bands.b2.length + w.bands.b3.length;
      const done = totalDone(w);
      return `
      <button class="world-card tone-${w.tone}" data-world="${w.id}">
        <span class="world-art">${worldArt(w.id)}</span>
        <span class="world-name">${esc(w.name)}</span>
        <span class="world-topic">${esc(w.topic)}</span>
        <span class="world-progress"><span class="bar" style="width:${Math.round(done / total * 100)}%"></span></span>
        <span class="world-dots">${['b1', 'b2', 'b3'].map(b => `<i class="dot ${bandDone(w, b) ? 'done' : ''}" title="${BANDS.find(x => x.id === b).name}"></i>`).join('')}</span>
        <span class="world-play">שחקו</span>
      </button>`;
    }).join('')}
  </div>
  <p class="foot-note">התקדמות נשמרת במכשיר הזה · 60 משימות תרגול בשלוש רמות לכיתות א-ו · התכנים עוקבים אחר נושאי תוכנית הלימודים של משרד החינוך; הרמות והתכנים הם תכנון שלנו, לא סיווג או כיסוי רשמי של התוכנית</p>`;
  app.querySelectorAll('.world-card').forEach(el => el.addEventListener('click', () => goWorld(el.dataset.world)));
  document.getElementById('settingsBtn').addEventListener('click', openParentZone);
}

function renderWorld() {
  const w = WORLDS.find(x => x.id === view.worldId);
  const band = view.band;
  const missions = w.bands[band];
  const doneArr = save.worlds[w.id][band];
  const finished = doneArr.length >= missions.length;
  const m = missions[view.mission];
  const bandMeta = BANDS.find(b => b.id === band);

  app.innerHTML = `
  <div class="play tone-${w.tone}">
    <div class="play-top">
      <button class="icon-btn" id="backBtn" aria-label="חזרה למפת העולמות">${ICON_BACK}</button>
      <span class="pill">${ICON_STAR} ${save.xp}</span>
    </div>
    <div class="play-head">
      <span class="play-art">${worldArt(w.id)}</span>
      <div>
        <h2>${esc(w.name)}</h2>
        <p>${esc(w.topic)}</p>
      </div>
    </div>
    <div class="band-tabs">
      ${BANDS.map(b => `
        <button class="band-tab ${b.id === band ? 'active' : ''} ${bandOpen(w, b.id) ? '' : 'locked'}" data-band="${b.id}">
          ${bandOpen(w, b.id) ? '' : ICON_LOCK}${esc(b.name)}<small>${esc(b.grades)}</small>
        </button>`).join('')}
    </div>
    ${worldScene(w)}
    ${finished ? `
      <div class="card finish">
        <div class="finish-art">${worldArt(w.id)}</div>
        <h3>כל הכבוד! סיימתם את שלב ${esc(bandMeta.name)}</h3>
        <p>${band === 'b3' ? 'סיימתם את כל העולם הזה. אפשר לשחק שוב או לבחור עולם אחר.' : 'השלב הבא נפתח! אפשר להמשיך או לבחור עולם אחר.'}</p>
        <div class="finish-actions">
          <button class="cta" id="againBtn">שחקו שוב</button>
          ${band !== 'b3' ? '<button class="cta ghost" id="nextBandBtn">לשלב הבא</button>' : ''}
          <button class="cta ghost" id="hubBtn">מפת העולמות</button>
        </div>
      </div>` : `
      <div class="mission-path">
        ${missions.map((_, i) => `<span class="node ${doneArr.includes(i) ? 'done' : ''} ${i === view.mission ? 'current' : ''}">${doneArr.includes(i) ? '✓' : i + 1}</span>`).join('')}
      </div>
      <div class="card mission" id="missionCard"></div>`}
  </div>`;

  document.getElementById('backBtn').addEventListener('click', goHub);
  app.querySelectorAll('.scene [data-clip]').forEach(el => {
    el.addEventListener('click', () => {
      el.classList.add('on');
      playClip(el.dataset.clip, st => { if (st === 'idle' || st === 'error') el.classList.remove('on'); });
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
  app.querySelectorAll('.band-tab').forEach(el => el.addEventListener('click', () => {
    if (!bandOpen(w, el.dataset.band)) return;
    stopAudio();
    view.band = el.dataset.band;
    view.mission = nextMission(w, view.band);
    view.phase = 'ready'; view.heard = null;
    preloadBand(w, view.band);
    render();
  }));
  const again = document.getElementById('againBtn');
  if (again) again.addEventListener('click', () => { save.worlds[w.id][band] = []; persist(); view.mission = 0; view.phase = 'ready'; render(); });
  const nb = document.getElementById('nextBandBtn');
  if (nb) nb.addEventListener('click', () => { view.band = band === 'b1' ? 'b2' : 'b3'; view.mission = nextMission(w, view.band); view.phase = 'ready'; preloadBand(w, view.band); render(); });
  const hub = document.getElementById('hubBtn');
  if (hub) hub.addEventListener('click', goHub);
  if (!finished) renderMission();
}

function renderMission() {
  const w = WORLDS.find(x => x.id === view.worldId);
  const m = w.bands[view.band][view.mission];
  const card = document.getElementById('missionCard');
  if (!card) return;

  if (m.type === 'choose') {
    card.innerHTML = `
      <p class="coach">לוחצים על הרמקול, שומעים ובוחרים את התמונה הנכונה</p>
      <div class="choose-audio">
        <button class="speaker big" id="hearBtn" aria-label="שמעו שוב">${ICON_SPEAKER}</button>
      </div>
      <div class="choose-grid">
        ${m.options.map(o => `<button class="choose-opt" data-opt="${o}">${ICONS[o] || ''}</button>`).join('')}
      </div>
      <p class="hint">${esc(m.hint)}</p>
      <p class="feedback" id="feedback" aria-live="polite"></p>`;
    const hear = document.getElementById('hearBtn');
    const hearPlay = () => playClip(m.clip, st => hear.classList.toggle('on', st === 'playing' || st === 'loading'));
    hear.addEventListener('click', hearPlay);
    hearPlay();
    card.querySelectorAll('.choose-opt').forEach(el => el.addEventListener('click', () => {
      const fb = document.getElementById('feedback');
      if (el.dataset.opt === m.answer) {
        el.classList.add('right');
        fb.textContent = 'נכון! +' + XP_CHOOSE;
        fb.className = 'feedback ok';
        finishAfter(w, XP_CHOOSE, card);
      } else {
        el.classList.add('wrong');
        fb.textContent = 'זו לא התשובה. שומעים שוב ומנסים עוד פעם';
        fb.className = 'feedback err';
        setTimeout(() => el.classList.remove('wrong'), 600);
      }
    }));
    return;
  }

  if (m.type === 'story') {
    card.innerHTML = `
      <p class="coach">שומעים את הסיפור ואז עונים על השאלה</p>
      <div class="choose-audio">
        <button class="speaker big" id="storyBtn" aria-label="שמעו את הסיפור">${ICON_SPEAKER}</button>
        <small>הסיפור</small>
      </div>
      <div class="bubble q"><bdi>${esc(m.q)}</bdi><button class="speaker" id="qHear" aria-label="שמעו את השאלה">${ICON_SPEAKER}</button></div>
      <p class="hint">${esc(m.hint)}</p>
      <div class="text-options">
        ${m.options.map(o => `<div class="text-opt-row"><button class="speaker sm" data-clip="${o.c}" aria-label="שמעו את התשובה">${ICON_SPEAKER}</button><button class="text-opt" data-opt="${esc(o.t)}"><bdi>${esc(o.t)}</bdi></button></div>`).join('')}
      </div>
      <p class="feedback" id="feedback" aria-live="polite"></p>`;
    const story = document.getElementById('storyBtn');
    const storyPlay = () => playClip(m.clip, st => story.classList.toggle('on', st === 'playing' || st === 'loading'));
    story.addEventListener('click', storyPlay);
    const q = document.getElementById('qHear');
    q.addEventListener('click', () => playClip(m.qClip, st => q.classList.toggle('on', st === 'playing' || st === 'loading')));
    storyPlay();
    card.querySelectorAll('.text-opt-row .speaker').forEach(el => el.addEventListener('click', () => playClip(el.dataset.clip, st => el.classList.toggle('on', st === 'playing' || st === 'loading'))));
    card.querySelectorAll('.text-opt').forEach(el => el.addEventListener('click', () => {
      const fb = document.getElementById('feedback');
      if (el.dataset.opt === m.answer) {
        el.classList.add('right');
        fb.textContent = 'נכון! הבנתם את הסיפור +' + XP_REPEAT;
        fb.className = 'feedback ok';
        finishAfter(w, XP_REPEAT, card);
      } else {
        el.classList.add('wrong');
        fb.textContent = 'זו לא התשובה. שומעים את הסיפור שוב ומנסים עוד פעם';
        fb.className = 'feedback err';
        setTimeout(() => el.classList.remove('wrong'), 600);
      }
    }));
    return;
  }

  if (m.type === 'build') {
    const chips = m.say.split(' ').map((wd, i) => ({ wd, i }));
    for (let i = chips.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [chips[i], chips[j]] = [chips[j], chips[i]]; }
    card.innerHTML = `
      <p class="coach">בונים את המשפט: לוחצים על המילים בסדר הנכון. אפשר לשמוע את המשפט קודם</p>
      <div class="phrase">
        <button class="speaker" id="hearBtn" aria-label="שמעו את המשפט">${ICON_SPEAKER}</button>
        <span class="hint">${esc(m.hint)}</span>
      </div>
      <div class="build-target" id="buildTarget" aria-live="polite"></div>
      <div class="chips">
        ${chips.map(ch => `<button class="chip" data-w="${esc(ch.wd)}" data-i="${ch.i}"><bdi>${esc(ch.wd)}</bdi></button>`).join('')}
      </div>
      <div class="next-row">
        <button class="cta ghost" id="clearBtn">ניקוי</button>
        <button class="cta" id="checkBuild">בדיקה</button>
      </div>
      <p class="feedback" id="feedback" aria-live="polite"></p>`;
    const hear = document.getElementById('hearBtn');
    hear.addEventListener('click', () => playClip(m.clip, st => hear.classList.toggle('on', st === 'playing' || st === 'loading')));
    const picked = [];
    const target = document.getElementById('buildTarget');
    const redraw = () => {
      target.innerHTML = picked.length
        ? picked.map((ch, pos) => `<button class="chip picked" data-pos="${pos}"><bdi>${esc(ch.wd)}</bdi></button>`).join('')
        : '<span class="placeholder">המילים שתבחרו יופיעו כאן</span>';
      target.querySelectorAll('.picked').forEach(el => el.addEventListener('click', () => {
        const back = picked.splice(Number(el.dataset.pos), 1)[0];
        playClip('w-' + back.wd.toLowerCase(), () => {});
        const chip = card.querySelector(`.chip[data-i="${back.i}"]`);
        chip.disabled = false;
        redraw();
      }));
    };
    redraw();
    card.querySelectorAll('.chips .chip').forEach(el => el.addEventListener('click', () => {
      el.disabled = true;
      playClip('w-' + el.dataset.w.toLowerCase(), () => {}); // tap-to-hear on every chip, nonreaders included
      picked.push({ wd: el.dataset.w, i: Number(el.dataset.i) });
      redraw();
    }));
    document.getElementById('clearBtn').addEventListener('click', () => {
      picked.length = 0;
      card.querySelectorAll('.chips .chip').forEach(ch => { ch.disabled = false; });
      redraw();
    });
    document.getElementById('checkBuild').addEventListener('click', () => {
      const fb = document.getElementById('feedback');
      const built = picked.map(ch => ch.wd).join(' ');
      if (built === m.say) {
        fb.textContent = 'מושלם! בניתם את המשפט +' + XP_REPEAT;
        fb.className = 'feedback ok';
        playClip(m.clip, () => {});
        finishAfter(w, XP_REPEAT, card);
      } else {
        fb.textContent = picked.length < m.say.split(' ').length ? 'עוד לא השתמשתם בכל המילים' : 'הסדר לא נכון. שומעים שוב ומנסים עוד פעם';
        fb.className = 'feedback err';
      }
    });
    return;
  }

  /* repeat mission */
  const voiceMode = save.settings.voice;
  card.innerHTML = `
    <p class="coach">קודם שומעים, אחר כך אומרים</p>
    ${m.q ? `<div class="bubble q"><bdi>${esc(m.q)}</bdi><button class="speaker" id="qHear" aria-label="שמעו את השאלה">${ICON_SPEAKER}</button></div>` : ''}
    <div class="phrase">
      ${m.icon ? `<span class="phrase-icon">${ICONS[m.icon] || ''}</span>` : ''}
      <bdi class="phrase-text">${esc(m.say)}</bdi>
      <button class="speaker" id="hearBtn" aria-label="שמעו את המילה או המשפט">${ICON_SPEAKER}</button>
    </div>
    <p class="hint">${esc(m.hint)}</p>
    ${voiceMode === 'off' ? `
      <button class="cta mic" id="saidBtn">${ICON_MIC} אמרתי!</button>
      <p class="honest">הילד מסמן בעצמו שאמר - זו לא בדיקת דיבור אמיתית. בדיקה אמיתית מופעלת באזור ההורים.</p>
    ` : `
      <button class="cta mic" id="micBtn">${ICON_MIC} לוחצים ומדברים</button>
      <p class="honest">בדיקת דיבור ${voiceMode === 'ondevice' ? 'על המכשיר בלבד' : 'בענן של ספק הדפדפן'} · ניסיונית</p>
    `}
    <p class="feedback" id="feedback" aria-live="polite"></p>
    <p class="heard" id="heard"></p>`;

  const hear = document.getElementById('hearBtn');
  hear.addEventListener('click', () => playClip(m.clip, st => hear.classList.toggle('on', st === 'playing' || st === 'loading')));
  if (m.qClip) {
    const q = document.getElementById('qHear');
    q.addEventListener('click', () => playClip(m.qClip, st => q.classList.toggle('on', st === 'playing' || st === 'loading')));
  }

  if (voiceMode === 'off') {
    document.getElementById('saidBtn').addEventListener('click', () => {
      const fb = document.getElementById('feedback');
      fb.textContent = 'מעולה! +' + XP_REPEAT;
      fb.className = 'feedback ok';
      finishAfter(w, XP_REPEAT, card);
    });
  } else {
    const micBtn = document.getElementById('micBtn');
    micBtn.addEventListener('click', () => {
      const fb = document.getElementById('feedback');
      const heard = document.getElementById('heard');
      fb.textContent = 'מקשיבים...';
      fb.className = 'feedback';
      micBtn.classList.add('on');
      const tok = navToken;
      activeRec = recognize(voiceMode, m.say, res => {
        activeRec = null;
        if (tok !== navToken) return; // user navigated away mid-listening
        micBtn.classList.remove('on');
        if (res.error) {
          if (res.error === 'unsupported' || res.error === 'service-not-allowed' || res.error === 'language-not-supported') {
            fb.textContent = 'בדיקת הדיבור לא זמינה בדפדפן הזה כרגע. חוזרים לסימון עצמי.';
            save.settings.voice = 'off'; persist();
            setTimeout(renderMission, 1600);
          } else if (res.error === 'not-allowed') {
            fb.textContent = 'צריך לאשר מיקרופון כדי שהבדיקה תעבוד.';
          } else if (res.error === 'no-speech') {
            fb.textContent = 'לא שמעתי. נסו שוב קרוב למיקרופון.';
          } else {
            fb.textContent = 'משהו לא עבד. נסו שוב.';
          }
          fb.className = 'feedback err';
          return;
        }
        heard.textContent = res.heard ? 'שמעתי: ' + res.heard : '';
        if (res.ok) {
          fb.textContent = 'מעולה! +' + XP_REPEAT;
          fb.className = 'feedback ok';
          finishAfter(w, XP_REPEAT, card);
        } else {
          fb.textContent = 'כמעט! שומעים שוב ומנסים עוד פעם';
          fb.className = 'feedback err';
        }
      });
    });
  }
}

function finishAfter(w, xp, card) {
  const done = completeMission(w, view.band, view.mission, xp);
  setTimeout(() => {
    const actions = document.createElement('div');
    actions.className = 'next-row';
    actions.innerHTML = `<button class="cta" id="nextBtn">${done ? 'סיימנו את השלב' : 'המשימה הבאה'}</button>`;
    card.appendChild(actions);
    document.getElementById('nextBtn').addEventListener('click', () => {
      stopAudio();
      if (done) { persist(); render(); return; }
      view.mission = nextMission(w, view.band);
      view.phase = 'ready'; view.heard = null;
      render();
    });
  }, 700);
}

/* ---------- parent zone ---------- */
function openParentZone() {
  const a = 3 + Math.floor(Math.random() * 6), b = 3 + Math.floor(Math.random() * 6);
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-label="אזור הורים">
      <h3>אזור הורים</h3>
      <p class="gate-q">כדי להיכנס: כמה זה ${a} × ${b}?</p>
      <div class="gate-row"><input id="gateInput" inputmode="numeric" autocomplete="off" aria-label="תשובה"><button class="cta" id="gateBtn">כניסה</button></div>
      <p class="feedback err" id="gateErr"></p>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.getElementById('gateBtn').addEventListener('click', () => {
    const val = document.getElementById('gateInput').value.trim();
    if (Number(val) === a * b) { overlay.remove(); openSettings(); }
    else document.getElementById('gateErr').textContent = 'לא נכון, נסו שוב';
  });
}

async function openSettings() {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const mode = save.settings.voice;
  overlay.innerHTML = `
    <div class="modal wide" role="dialog" aria-label="הגדרות">
      <h3>הגדרות</h3>
      <h4>בדיקת דיבור</h4>
      <label class="opt"><input type="radio" name="voice" value="off" ${mode === 'off' ? 'checked' : ''}>
        <span><b>כבוי (ברירת מחדל)</b><small>הילד מסמן "אמרתי!" בעצמו. אין בדיקת דיבור אמיתית ושום הקלטה לא נשלחת לשום מקום.</small></span></label>
      <label class="opt"><input type="radio" name="voice" value="ondevice" ${mode === 'ondevice' ? 'checked' : ''}>
        <span><b>בדיקה על המכשיר</b><small id="ondeviceNote">בודקים זמינות... הקלטה לא יוצאת מהמכשיר. דורש דפדפן שתומך (Chrome חדש) ולפעמים הורדת חבילת שפה חד-פעמית.</small></span></label>
      <label class="opt"><input type="radio" name="voice" value="cloud" ${mode === 'cloud' ? 'checked' : ''}>
        <span><b>בדיקה בענן של הדפדפן</b><small>הקלטת הדיבור נשלחת לספק הדפדפן (ב-Chrome: גוגל) כדי לתמלל. מומלץ רק אם אתם מסכימים לזה.</small></span></label>
      <p class="note" id="voiceStatus"></p>
      <h4>איפוס</h4>
      <button class="cta ghost danger" id="resetBtn">מחיקת כל ההתקדמות</button>
      <div class="modal-actions"><button class="cta" id="closeBtn">סגירה</button></div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelectorAll('input[name=voice]').forEach(r => r.addEventListener('change', () => {
    save.settings.voice = r.value; persist();
    document.getElementById('voiceStatus').textContent =
      r.value === 'off' ? 'בדיקת דיבור כבויה. הילד מסמן בעצמו.' :
      r.value === 'ondevice' ? 'נבדוק בפעם הראשונה שמשתמשים; אם לא יהיה זמין, נחזור לסימון עצמי.' :
      'שימו לב: הקלטות נשלחות לספק הדפדפן לצורך תמלול.';
  }));
  document.getElementById('closeBtn').addEventListener('click', () => { overlay.remove(); render(); });
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('למחוק את כל ההתקדמות?')) { save = freshSave(); persist(); overlay.remove(); goHub(); }
  });
  const status = await onDeviceStatus();
  const note = document.getElementById('ondeviceNote');
  if (!note) return;
  if (status === 'available') note.textContent = 'זמין במכשיר הזה. הקלטה לא יוצאת מהמכשיר.';
  else if (status === 'downloadable' || status === 'downloading') note.textContent = 'זמין אחרי הורדת חבילת שפה חד-פעמית מהדפדפן (תתבקשו לאשר בפעם הראשונה).';
  else note.textContent = 'לא נתמך בדפדפן הזה כרגע. אם תבחרו, המשחק יישאר בסימון עצמי.';
}

render();

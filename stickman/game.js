/* stickman - game shell: state machine, rendering, HUD, input, audio.
   Original code. Uses window.StickmanPhysics, window.StickmanVisuals, window.StickmanLevels. */
(() => {
'use strict';
const V = window.StickmanVisuals;
const P = window.StickmanPhysics;
const LEVELS = window.StickmanLevels;

/* ---------- palette: poki-style flat violet ---------- */
const NOCOLOR = 'rgba(0,0,0,0)';
V.configure({ colors: {
  skyTop: '#7b5cff', skyBottom: '#c2cbff',
  sun: NOCOLOR, cloud: NOCOLOR, hillFar: NOCOLOR, hillMid: NOCOLOR, hillNear: NOCOLOR,
  player: '#ff4d5e', playerShade: '#d8305a', playerLight: '#ff9b91',
  anchor: '#ffffff', anchorCore: '#5a4fd0', anchorRing: '#ffffff',
}, reducedMotion: false });
const COLORS = V.getConfig().colors;
/* background themes: one per 3-level block, cycling. Each is a palette
   override plus a cheap ambient weather layer drawn in screen space. */
const THEMES = [
  { name: 'קיץ',    weather: 'none',   c: {} },
  { name: 'גשם',    weather: 'rain',   c: { skyTop: '#5a7f9e', skyBottom: '#a9c3d6', cloud: '#d7e2ea', sun: '#dfe8ee', hillFar: '#7d9bb0', hillMid: '#5d8592', hillNear: '#3f6b74' } },
  { name: 'שקיעה',  weather: 'drift',  c: { skyTop: '#ff9d5c', skyBottom: '#ffd9a0', cloud: '#ffe6c7', sun: '#ff7b4d', hillFar: '#e8a37c', hillMid: '#c97e6b', hillNear: '#9d5f63' } },
  { name: 'סתיו',   weather: 'leaves', c: { skyTop: '#f5b34d', skyBottom: '#fde9c0', cloud: '#fdf3dd', sun: '#ffe08a', hillFar: '#dfa25a', hillMid: '#c47f43', hillNear: '#9c5c31' } },
  { name: 'שלג',    weather: 'snow',   c: { skyTop: '#8fb8d8', skyBottom: '#e8f3fb', cloud: '#ffffff', sun: '#fdfdf2', hillFar: '#c3dcee', hillMid: '#a5cbe4', hillNear: '#82b4d4' } },
  { name: 'לילה',   weather: 'stars',  c: { skyTop: '#131a3a', skyBottom: '#3a3f6e', cloud: '#4a5178', sun: '#f4f1de', hillFar: '#2c3157', hillMid: '#232849', hillNear: '#1a1e3c' } },
];
const WEATHER_COUNTS = { rain: 70, snow: 42, leaves: 22, drift: 26, stars: 70 };
const LEAF_COLORS = ['#d35400', '#e67e22', '#c0392b', '#f39c12'];

function buildWeather() {
  game.weather.length = 0;
  const kind = game.theme.weather;
  const n = WEATHER_COUNTS[kind] || 0;
  for (let i = 0; i < n; i++) {
    const w = {
      x: Math.random() * W, y: Math.random() * H,
      vy: kind === 'rain' ? 850 + Math.random() * 250
        : kind === 'snow' ? 45 + Math.random() * 55
        : kind === 'leaves' ? 42 + Math.random() * 46
        : kind === 'drift' ? -14 - Math.random() * 22 : 0,
      vx: kind === 'rain' ? -140 : 0,
      size: kind === 'stars' ? 0.8 + Math.random() * 1.7
          : kind === 'snow' ? 1.4 + Math.random() * 1.8
          : kind === 'leaves' ? 3.5 + Math.random() * 3
          : kind === 'drift' ? 1.6 + Math.random() * 2.2 : 2,
      phase: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 3,
      rot: Math.random() * Math.PI * 2,
      color: kind === 'leaves' ? LEAF_COLORS[i % LEAF_COLORS.length] : null,
    };
    game.weather.push(w);
  }
}

function updateWeather(dt) {
  if (!game.weather.length) return;
  for (const w of game.weather) {
    w.y += w.vy * dt;
    w.x += (w.vx + Math.sin(game.time * 1.7 + w.phase) * (game.theme.weather === 'snow' ? 22 : game.theme.weather === 'leaves' ? 55 : 0)) * dt;
    w.rot += w.spin * dt;
    if (w.y > H + 24) { w.y = -20; w.x = Math.random() * (W + 200); }
    else if (w.y < -26 && w.vy < 0) { w.y = H + 20; w.x = Math.random() * W; }
    if (w.x < -30) w.x += W + 60; else if (w.x > W + 30) w.x -= W + 60;
  }
}

function drawWeather() {
  const kind = game.theme.weather;
  if (kind === 'none' || !game.weather.length) return;
  ctx.save();
  if (kind === 'rain') {
    ctx.strokeStyle = 'rgba(205,226,242,.5)';
    ctx.lineWidth = 2; ctx.lineCap = 'round';
    ctx.beginPath();
    for (const w of game.weather) { ctx.moveTo(w.x, w.y); ctx.lineTo(w.x - 5, w.y + 17); }
    ctx.stroke();
  } else if (kind === 'stars') {
    ctx.fillStyle = '#ffffff';
    for (const w of game.weather) {
      ctx.globalAlpha = 0.35 + 0.6 * (0.5 + 0.5 * Math.sin(game.time * 2 + w.phase));
      ctx.beginPath(); ctx.arc(w.x, w.y * 0.72, w.size, 0, Math.PI * 2); ctx.fill();
    }
  } else if (kind === 'snow') {
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    for (const w of game.weather) { ctx.beginPath(); ctx.arc(w.x, w.y, w.size, 0, Math.PI * 2); ctx.fill(); }
  } else if (kind === 'leaves') {
    for (const w of game.weather) {
      ctx.save(); ctx.translate(w.x, w.y); ctx.rotate(w.rot);
      ctx.fillStyle = w.color;
      ctx.fillRect(-w.size, -w.size * 0.45, w.size * 2, w.size * 0.9);
      ctx.restore();
    }
  } else if (kind === 'drift') {
    ctx.fillStyle = '#ffe9b0';
    for (const w of game.weather) {
      ctx.globalAlpha = 0.3 + 0.4 * (0.5 + 0.5 * Math.sin(game.time * 2.4 + w.phase));
      ctx.beginPath(); ctx.arc(w.x, w.y, w.size, 0, Math.PI * 2); ctx.fill();
    }
  }
  ctx.restore();
}

/* ---------- DOM ---------- */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const $ = id => document.getElementById(id);
const ui = {
  menu: $('menu'), intro: $('intro'), clear: $('clear'), pause: $('paused'),
  fail: $('failflash'), winflash: $('winflash'),
  levelsel: $('levelsel'), levelGrid: $('level-grid'),
  btnPlay: $('btn-play'), btnGo: $('btn-go'), btnNext: $('btn-next'),
  btnPause: $('btn-pause'), btnResume: $('btn-resume'), btnMute: $('btn-mute'),
  btnIntroLevels: $('btn-intro-levels'), btnIntroChars: $('btn-intro-chars'),
  btnRestart: $('btn-restart'), btnLevels: $('btn-levels'),
  btnLevelsClose: $('btn-levels-close'), btnPauseLevels: $('btn-pause-levels'),
  menuLevel: $('menu-level'), introLevel: $('intro-level'), introName: $('intro-name'),
  introHint: $('intro-hint'), clearPct: $('clear-pct'), clearFill: $('clear-fill'),
  clearTitle: $('clear-title'), clearTime: $('clear-time'),
  clearStars: $('clear-stars'), skinToast: $('skin-toast'),
  charsel: $('charsel'), charGrid: $('char-grid'), charTotal: $('char-total'), btnChars: $('btn-chars'), btnCharsClose: $('btn-chars-close'),
  btnDaily: $('btn-daily'), btnEndless: $('btn-endless'), btnVib: $('btn-vib'),
  btnShare: $('btn-share'), menuExtra: $('menu-extra'),
};

/* ---------- persistent state ---------- */
const store = {
  get level() { return Math.min(+(localStorage.getItem('sh_level') || 1), LEVELS.length); },
  set level(v) { localStorage.setItem('sh_level', v); },
  get pct() { return +(localStorage.getItem('sh_pct') || 0); },
  set pct(v) { localStorage.setItem('sh_pct', Math.min(100, Math.round(v))); },
  get mute() { return localStorage.getItem('sh_mute') === '1'; },
  set mute(v) { localStorage.setItem('sh_mute', v ? '1' : '0'); },
  get skin() { return +(localStorage.getItem('sh_skin') || 0); },
  set skin(v) { localStorage.setItem('sh_skin', v); },
  get done() { return localStorage.getItem('sh_done') === '1'; },
  set done(v) { localStorage.setItem('sh_done', v ? '1' : '0'); },
  best(i) { const v = +(localStorage.getItem('sh_best_' + i) || 0); return v > 0 ? v : null; },
  setBest(i, t) { localStorage.setItem('sh_best_' + i, t); },
  stars(i) { return +(localStorage.getItem('sh_stars_' + i) || 0); },           // legacy, grandfather reads only
  totalStars() { let t = 0; for (let i = 0; i < LEVELS.length; i++) t += this.stars(i); return t; },
  pts(i) { return +(localStorage.getItem('sh_pts_' + i) || 0); },              // best fruit points per level
  setPts(i, n) { localStorage.setItem('sh_pts_' + i, n); },
  totalPts() { let t = 0; for (let i = 0; i < LEVELS.length; i++) t += this.pts(i); return t; },
  get spent() { return +(localStorage.getItem('sh_spent') || 0); },           // points spent buying characters
  set spent(v) { localStorage.setItem('sh_spent', Math.max(0, Math.round(v))); },
  balance() { return Math.max(0, this.totalPts() - this.spent); },            // spendable points
  get vib() { try { return localStorage.getItem('sh_vib') !== '0'; } catch (e) { return false; } },  // haptics on unless disabled
  set vib(v) { try { localStorage.setItem('sh_vib', v ? '1' : '0'); } catch (e) {} },
  get endlessBest() { try { return +(localStorage.getItem('sh_endless_best') || 0); } catch (e) { return 0; } },  // meters
  set endlessBest(v) { try { localStorage.setItem('sh_endless_best', Math.round(v)); } catch (e) {} },
  dailyPts(key) { try { return +(localStorage.getItem('sh_daily_pts_' + key) || 0); } catch (e) { return 0; } },
  setDailyPts(key, v) { try { localStorage.setItem('sh_daily_pts_' + key, Math.round(v)); } catch (e) {} },
  dailyTime(key) { try { const v = +(localStorage.getItem('sh_daily_time_' + key) || 0); return v > 0 ? v : null; } catch (e) { return null; } },
  setDailyTime(key, v) { try { localStorage.setItem('sh_daily_time_' + key, v); } catch (e) {} },
  get dailyStreak() { try { return +(localStorage.getItem('sh_daily_streak') || 0); } catch (e) { return 0; } },
  set dailyStreak(v) { try { localStorage.setItem('sh_daily_streak', v); } catch (e) {} },
  get dailyLast() { try { return localStorage.getItem('sh_daily_last') || ''; } catch (e) { return ''; } },
  set dailyLast(v) { try { localStorage.setItem('sh_daily_last', v); } catch (e) {} },
  ghost(key) { try { const s = localStorage.getItem('sh_ghost_' + key); return s ? JSON.parse(s) : null; } catch (e) { return null; } },
  ghostTime(key) { try { return +(localStorage.getItem('sh_ghost_time_' + key) || 0); } catch (e) { return 0; } },
  setGhost(key, data, time) {
    try {
      localStorage.setItem('sh_ghost_' + key, JSON.stringify(data));
      if (time) localStorage.setItem('sh_ghost_time_' + key, time);
    }
    catch (e) { /* storage full: drop the oldest ghosts */
      try {
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const k = localStorage.key(i);
          if (k && k.startsWith('sh_ghost_')) localStorage.removeItem(k);
        }
        localStorage.setItem('sh_ghost_' + key, JSON.stringify(data));
        if (time) localStorage.setItem('sh_ghost_time_' + key, time);
      } catch (e2) { /* give up on the ghost, keep the game */ }
    }
  },
};

/* dates for the daily challenge, in the player's timezone */
const DAY_TZ = 'Asia/Jerusalem';
function dayKey(d) {
  d = d || new Date();
  const p = new Intl.DateTimeFormat('en-CA', { timeZone: DAY_TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(d);
  const g = t => p.find(x => x.type === t).value;
  return g('year') + '-' + g('month') + '-' + g('day');
}
function shiftKey(key, days) {
  const d = new Date(key + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/* ---------- hero skins: buy once, keep forever ----------
   Points buy new characters. Owned characters can be equipped for free.
   Preserve recorded legacy unlocks and the equipped character; the previous
   per-switch version saved no purchase history, so spending alone cannot
   identify any other characters bought during that version. */
const ABILITIES = {
  hog:     'מגנט: מושך פירות מרחוק',
  rabbit:  'קופץ גבוה מהקרקע',
  robot:   'תופס ווים ממרחק רב',
  ninja:   'שחרור נדנוד מעץ במהירות',
  cat:     'ניצל מנפילה פעם אחת בשלב',
  bird:    'מרפרף קדימה באוויר',
  super:   'עף רחוק ומהר בסיום השלב',
  bean:    'קפיצת אוויר כפולה',
  fox:     'מגליש לאט באוויר עם הזנבות',
  echidna: 'קופץ גבוה מטרמפולינות',
};
const SKINS = [
  { name: 'קיפוד',  pts: 0,   at: 1,  body: 'hog',    c: { hogBlue: '#2f9bf0', hogBlueD: '#1d6fd0', hogBlueL: '#8fd0ff' } },
  { name: 'ארנב',   pts: 1200,  at: 5,  body: 'rabbit', c: { hogBlue: '#cfd9e6', hogBlueD: '#93a5bb', hogBlueL: '#f2f6fb' } },
  { name: 'רובוט',  pts: 4000,  at: 10, body: 'robot',  c: { hogBlue: '#9aa7b8', hogBlueD: '#5d6b80', hogBlueL: '#d3dce8' } },
  { name: 'נינג׳ה', pts: 6500, at: 15, body: 'ninja',  c: { hogBlue: '#4a3f6b', hogBlueD: '#2d2547', hogBlueL: '#7a6aa8' } },
  { name: 'חתול',   pts: 10500, at: 20, body: 'cat',    c: { hogBlue: '#f2b830', hogBlueD: '#cf9212', hogBlueL: '#ffe08a' } },
  { name: 'ציפור',  pts: 13500, at: 25, body: 'bird',   c: { hogBlue: '#ff6ec7', hogBlueD: '#d14fa4', hogBlueL: '#ffc2e8' } },
  /* character skins (original art, palette-evoked) */
  { name: 'גיבור על', pts: 2500, body: 'super', c: { hogBlue: '#2456c8', hogBlueD: '#17389c', hogBlueL: '#6f9bf7' } },
  { name: 'שותף חלל', pts: 9000, body: 'bean', c: { hogBlue: '#ff5a4e', hogBlueD: '#cf352b', hogBlueL: '#ffab9d' } },
  { name: 'שועל', pts: 16000, body: 'fox', c: { hogBlue: '#ff9a2e', hogBlueD: '#d97308', hogBlueL: '#ffcf8a' } },
  { name: 'איכידנה', pts: 19000, body: 'echidna', c: { hogBlue: '#e0303a', hogBlueD: '#a81822', hogBlueL: '#ff7a72' } },
];
/* Prices are paced against real earning: a level is worth roughly
   230-400 pts on a casual run and 400-1000 on a good run (fruits x combos +
   finish/all-fruit bonuses), so the prices above land near their `at` levels
   for steady players and a little earlier for fruit hunters. */
function skinOwned(i) {
  return i === 0 || localStorage.getItem('sh_unl_' + i) === '1';
}
(function preserveKnownOwnership() {
  const i = store.skin;
  if (Number.isInteger(i) && i >= 0 && i < SKINS.length) {
    localStorage.setItem('sh_unl_' + i, '1');
  }
})();
function nextSkinGoal() {
  let best = null;
  for (let i = 0; i < SKINS.length; i++) {
    if (!skinOwned(i) && SKINS[i].pts !== undefined && (!best || SKINS[i].pts < best.pts)) best = SKINS[i];
  }
  return best;
}
function applySkin() {
  const i = store.skin >= 0 && store.skin < SKINS.length ? store.skin : 0;
  V.configure({ colors: SKINS[i].c });
  game.body = SKINS[i].body || 'hog';
  game.playerColors = V.getConfig().colors; // live palette: boot world colors + skin coat
}
/* Character cards, concept-sheet style: full avatar, name, lock requirement. */
function drawAvatar(cv, sk) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = 110, h = 132;
  cv.width = w * dpr; cv.height = h * dpr;
  const c = cv.getContext('2d');
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.fillStyle = 'rgba(36,31,58,.28)';
  c.beginPath(); c.ellipse(w / 2, h - 5, 26, 6, 0, 0, Math.PI * 2); c.fill();
  V.drawPlayer(c, {
    x: w / 2, y: h - 30, pose: 'idle', time: 1.7, scale: 1.45, facing: 1,
    colors: Object.assign({}, COLORS, sk.c), body: sk.body || 'hog',
  });
}
function showToast(txt) {
  ui.skinToast.textContent = txt;
  ui.skinToast.classList.add('show');
  clearTimeout(game.toastTimer);
  game.toastTimer = setTimeout(() => ui.skinToast.classList.remove('show'), 3400);
}
function renderCharGrid() {
  const bal = store.balance();
  if (ui.charTotal) ui.charTotal.textContent = 'הניקוד שלך: ' + bal + ' נק׳';
  ui.charGrid.innerHTML = '';
  SKINS.forEach((sk, i) => {
    const current = i === store.skin;
    const owned = skinOwned(i);
    const price = sk.pts || 0;
    const affordable = !owned && bal >= price;
    const b = document.createElement('button');
    b.className = 'char-card' + (current ? ' sel' : owned ? ' owned' : affordable ? ' buy' : ' locked');
    const cv = document.createElement('canvas');
    b.appendChild(cv);
    drawAvatar(cv, sk);
    const nm = document.createElement('div');
    nm.className = 'char-name';
    nm.textContent = sk.name;
    b.appendChild(nm);
    const ab = document.createElement('div');
    ab.className = 'char-ability';
    ab.textContent = ABILITIES[sk.body || 'hog'];
    b.appendChild(ab);
    {
      const req = document.createElement('div');
      req.className = 'char-req';
      req.textContent = owned ? (current ? 'נבחרה ✓' : 'שלך ✓') : price + ' נק׳';
      const left = document.createElement('span');
      left.className = 'char-left';
      left.textContent = owned ? (current ? '' : 'לחצו לבחירה') : affordable ? 'לחצו לקנייה!' : 'חסרות ' + Math.max(0, price - bal);
      req.appendChild(left);
      b.appendChild(req);
    }
    b.title = sk.name + ' - ' + ABILITIES[sk.body || 'hog'] + (owned ? ' (שלך)' : ' (לרכישה ב-' + price + ' נקודות)');
    b.addEventListener('click', () => {
      if (i === store.skin) return;
      const buying = !skinOwned(i);
      if (buying) {
        if (store.balance() < price) return;
        store.spent = store.spent + price;
        localStorage.setItem('sh_unl_' + i, '1');
      }
      store.skin = i; applySkin(); renderCharGrid();
      if (buying) { sfx.star(); showToast('🎉 קנית את ' + sk.name + ' והיא שלך לתמיד!'); } else sfx.click();
    });
    ui.charGrid.appendChild(b);
  });
}

/* ---------- audio: tiny synth ---------- */
let AC = null;
function tone(freq, dur, type, vol, slide) {
  if (store.mute) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(freq, AC.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, slide), AC.currentTime + dur);
    g.gain.setValueAtTime(vol || 0.12, AC.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + dur);
    o.connect(g); g.connect(AC.destination); o.start(); o.stop(AC.currentTime + dur);
  } catch (e) { /* no audio */ }
}
const sfx = {
  attach: () => tone(660, 0.09, 'sine', 0.10, 880),
  release: () => tone(520, 0.14, 'sine', 0.08, 300),
  pad: () => tone(180, 0.18, 'square', 0.10, 620),
  fail: () => tone(220, 0.30, 'sawtooth', 0.08, 70),
  win: () => { tone(523, .12, 'sine', .12); setTimeout(() => tone(659, .12, 'sine', .12), 110); setTimeout(() => tone(784, .22, 'sine', .12), 220); },
  click: () => tone(440, 0.06, 'sine', 0.06),
  star: () => { tone(987, .09, 'sine', .11); setTimeout(() => tone(1318, .14, 'sine', .11), 80); },
  jump: () => tone(320, 0.13, 'square', 0.08, 760),
  /* hook catches in a row climb a little major scale (Moonrope-style bells);
     the streak resets when you touch ground or fall */
  attachNote: (n) => {
    const steps = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 26];
    const f = 523 * Math.pow(2, steps[Math.min(Math.max(n - 1, 0), steps.length - 1)] / 12);
    tone(f, 0.11, 'sine', 0.10, f * 1.26);
  },
  perfect: (n) => {
    const f = 784 * Math.pow(2, Math.min(n - 1, 8) / 24);
    tone(f, 0.10, 'triangle', 0.12, f * 1.5);
    setTimeout(() => tone(f * 1.5, 0.14, 'triangle', 0.10), 70);
  },
};

/* short haptic pulses (Android Chrome); toggleable, on by default */
function buzz(pat) { if (store.vib && navigator.vibrate) { try { navigator.vibrate(pat); } catch (e) {} } }

/* ---------- canvas sizing ---------- */
let W = 0, H = 0, DPR = 1;
function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = canvas.clientWidth; H = canvas.clientHeight;
  canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
window.addEventListener('resize', resize);
/* Android Chrome can drop the canvas backing store under GPU pressure;
   re-measure and force a clean frame when the context comes back. */
canvas.addEventListener('contextlost', () => {});
canvas.addEventListener('contextrestored', resize);

/* ---------- game state ---------- */
const game = {
  state: 'menu',           // menu | intro | play | clear | paused
  levelIndex: store.level - 1,
  level: null,
  world: null,
  particles: new V.Particles({ maxParticles: 500, colors: COLORS }),
  time: 0,
  levelStartX: 0,
  clearTimer: 0,
  failTimer: 0,
  lastPose: null,
  shake: 0,
  playTime: 0,
  fruits: [],
  runPts: 0,
  combo: 0, comboT: 0, taken: 0, bonusPts: 0,
  pops: [],
  theme: THEMES[0],
  themeColors: COLORS,
  weather: [],
  zoom: 1,              // finish-moment camera zoom (1 = normal)
  celebration: null,    // { t, wave2 } while 'clearing'
  rings: [],            // shockwave rings spawned at the finish instant
  body: 'hog',
  toastTimer: 0,
  mode: 'classic',        // classic | daily | endless
  dailyKey: null,
  endlessSeed: 0,
  endlessNext: 1,         // next endless chunk index to append
  endlessDist: 0,         // best x reached this run (px)
  perfectStreak: 0,
  hookStreak: 0,          // consecutive catches without touching ground
  ghostData: null,        // best-run samples being replayed
  ghostRec: null,         // samples of the current run
  ghostT: 0,
  results: null,          // custom clear-card content for daily/endless
};

/* perfect-release window: just past the bottom of the arc, swinging forward.
   Shared by the halo cue, the release bonus and the QA bot. */
function perfectNow() {
  const w = game.world;
  if (!w || !w.rope) return false;
  const p = w.player, a = w.rope.anchor;
  const dx = p.x - a.x, dy = p.y - a.y, d = Math.hypot(dx, dy) || 1;
  const ang = Math.atan2(dx, dy); // 0 at the bottom, + on the forward side
  const tx = dy / d, ty = -dx / d;
  const vt = p.vx * tx + p.vy * ty;
  return vt > 320 && ang > 0.10 && ang < 1.05;
}

function buildWorld() {
  const L = game.level;
  /* character abilities: distinct physics per hero, default hog untouched */
  const abil = {};
  if (game.body === 'super') { abil.assist = Math.round((L.assist || 240) * 1.15); abil.assistSpeed = 1000; }
  if (game.body === 'bean') abil.airHops = 2;
  if (game.body === 'fox') abil.maxFallSpeed = 500;
  if (game.body === 'echidna') abil.padBoostMult = 1.3;
  if (game.body === 'rabbit') abil.groundBoost = 1.45;
  if (game.body === 'robot') abil.catchRadius = 500;
  if (game.body === 'ninja') abil.releaseBoost = 1.25;
  if (game.body === 'bird') abil.airThrust = 300;
  game.world = new P.World(Object.assign({
    assist: L.assist || 240, assistSpeed: 900,
    anchors: L.anchors.map(a => ({ id: a.id, x: a.x, y: a.y, move: a.move, breakAfter: a.breakAfter, toggle: a.toggle })),
    pads: L.pads.map(p => ({ id: p.id, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2,
      boostX: p.boostX || 0, boostY: p.boostY || 0, minSpeed: p.minSpeed || 640,
      nx: p.nx, ny: p.ny, restitution: p.restitution,
      kind: p.kind === 'bump' ? 'bump' : undefined,
      standTopOffset: p.kind === 'trampCeil' ? 40 : undefined })),
    winds: (L.winds || []).map(z => ({ id: z.id, x1: z.x1, y1: z.y1, x2: z.x2, y2: z.y2, ax: z.ax, ay: z.ay })),
  }, abil));
  const a = L.anchors.find(a => a.id === L.start.anchorId);
  const off = 130, dy = Math.sqrt(L.start.rope * L.start.rope - off * off);
  game.world.reset({ x: a.x - off, y: a.y + dy });
  game.world.attach(a.id);
  game.world.camera.x = a.x; game.world.camera.y = a.y + 260;
  game.levelStartX = a.x - 100;
  game.particles.clear();
  game.fruits = (L.fruits || []).map(f => ({ x: f.x, y: f.y, v: f.v, k: f.k, taken: false }));
  game.runPts = 0; game.combo = 0; game.comboT = 0; game.taken = 0; game.bonusPts = 0;
  game.pops = [];
  game.rings.length = 0; game.zoom = 1; game.celebration = null;
  game.catRescued = false;
  game.perfectStreak = 0; game.hookStreak = 0;
  game.endlessDist = 0;
  game.ghostRec = (game.mode === 'classic' || game.mode === 'daily') ? [] : null;
  game.ghostT = 0;
  game.ghostData = (game.mode === 'classic' || game.mode === 'daily') ? store.ghost(ghostKey()) : null;
}

/* ghosts are only valid for the exact level geometry they were recorded on */
function ghostSig() {
  const L = game.level;
  let s = 0;
  for (const a of L.anchors) s += Math.round(a.x) * 3 + Math.round(a.y) * 7;
  return L.anchors.length + ':' + Math.round(L.finishX || 0) + ':' + s;
}
function ghostKey() {
  return (game.mode === 'classic' ? 'l' + game.levelIndex : 'd' + game.dailyKey) + ':' + ghostSig();
}

/* endless: append generated chunks ahead of the hero, prune far behind */
function growEndless() {
  if (game.mode !== 'endless' || !game.world) return;
  const E = window.StickmanEndless;
  const px = game.world.player.x;
  while (px + 2200 > game.endlessNext * E.CHUNK) {
    const ch = E.chunk(game.endlessSeed, game.endlessNext++);
    for (const a of ch.anchors) game.world.anchors.push(Object.assign({}, a));
    for (const p of ch.pads) { game.world.pads.push(Object.assign({}, p)); game.level.pads.push(p); }
    for (const z of ch.winds) game.world.winds.push(Object.assign({}, z));
    for (const f of ch.fruits) game.fruits.push({ x: f.x, y: f.y, v: f.v, k: f.k, taken: false });
  }
  const behind = px - 3200;
  if (behind > 0) {
    const ropeAnchor = game.world.rope && game.world.rope.anchor;
    game.world.anchors = game.world.anchors.filter(a => a.x > behind || a === ropeAnchor);
    game.world.pads = game.world.pads.filter(p => Math.max(p.x1, p.x2) > behind);
    game.world.winds = game.world.winds.filter(z => z.x2 > behind);
    game.fruits = game.fruits.filter(f => f.x > behind);
    game.level.pads = game.level.pads.filter(p => Math.max(p.x1, p.x2) > behind);
  }
}

function loadLevel(i) {
  game.mode = 'classic';
  game.levelIndex = Math.max(0, Math.min(i, LEVELS.length - 1));
  game.level = LEVELS[game.levelIndex];
  game.theme = THEMES[Math.floor(game.levelIndex / 3) % THEMES.length];
  game.themeColors = Object.assign({}, COLORS, game.theme.c);
  buildWorld();
  buildWeather();
}

function loadDaily(key) {
  game.mode = 'daily';
  game.dailyKey = key;
  game.levelIndex = -1;
  game.level = window.StickmanDailyBuild(key);
  game.theme = THEMES[Math.floor(Math.abs(key.split('-').join('')) / 3) % THEMES.length];
  game.themeColors = Object.assign({}, COLORS, game.theme.c);
  buildWorld();
  buildWeather();
}

function loadEndless() {
  game.mode = 'endless';
  game.dailyKey = null;
  game.levelIndex = -1;
  const E = window.StickmanEndless;
  game.endlessSeed = E.makeSeed();
  game.endlessNext = 1;
  const ch0 = E.chunk(game.endlessSeed, 0);
  game.level = {
    name: 'מצב אינסופי', hint: 'העולם נבנה מחדש בכל הרצה - כמה רחוק תגיעו?',
    start: { anchorId: ch0.anchors[0].id, rope: 360 },
    assist: 230,
    anchors: ch0.anchors, pads: ch0.pads, fruits: [], winds: ch0.winds,
    finishX: Infinity, killY: 1160,
  };
  game.fruits0 = ch0.fruits;
  game.theme = THEMES[game.endlessSeed % THEMES.length];
  game.themeColors = Object.assign({}, COLORS, game.theme.c);
  buildWorld();
  game.fruits = ch0.fruits.map(f => ({ x: f.x, y: f.y, v: f.v, k: f.k, taken: false }));
  buildWeather();
}

function setState(s) {
  game.state = s;
  ui.menu.classList.toggle('show', s === 'menu');
  ui.intro.classList.toggle('show', s === 'intro');
  ui.clear.classList.toggle('show', s === 'clear');
  ui.pause.classList.toggle('show', s === 'paused');
  if (s !== 'levelsel') ui.levelsel.classList.remove('show');
  ui.charsel.classList.remove('show');
  ui.btnPause.style.display = (s === 'play') ? 'flex' : 'none';
  ui.btnIntroLevels.style.display = (s === 'intro') ? 'flex' : 'none';
  ui.btnIntroChars.style.display = (s === 'intro') ? 'flex' : 'none';
  if (s === 'menu') {
    ui.menuLevel.textContent = 'שלב ' + store.level + ' / ' + LEVELS.length + '  •  ' + store.balance() + ' נקודות  •  ⭐ ' + Math.floor(store.totalPts() / 100);
    const bits = [];
    if (store.dailyStreak > 0) bits.push('רצף יומי: ' + store.dailyStreak + (store.dailyStreak === 1 ? ' יום' : ' ימים'));
    if (store.endlessBest > 0) bits.push('🏁 שיא אינסופי: ' + store.endlessBest + ' מ׳');
    ui.menuExtra.textContent = bits.join('  •  ');
    renderCharGrid();
  }
  if (s === 'intro') {
    if (game.mode === 'daily') {
      ui.introLevel.textContent = 'אתגר יומי';
      ui.introName.textContent = game.dailyKey.split('-').reverse().join('.');
      const best = store.dailyPts(game.dailyKey);
      ui.introHint.textContent = (game.level.hint || '') + (best ? '  •  השיא שלכם היום: ' + best + ' נק׳' : '');
    } else if (game.mode === 'endless') {
      ui.introLevel.textContent = 'מצב אינסופי';
      ui.introName.textContent = 'כמה רחוק תגיעו?';
      ui.introHint.textContent = store.endlessBest ? 'השיא שלכם: ' + store.endlessBest + ' מ׳' : (game.level.hint || '');
    } else {
      ui.introLevel.textContent = 'שלב ' + (game.levelIndex + 1);
      ui.introName.textContent = game.level.name || '';
      ui.introHint.textContent = game.level.hint || '';
    }
  }
  if (s === 'clear' && game.results) {
    const R = game.results;
    ui.clearTitle.textContent = R.title;
    ui.clearStars.innerHTML = '';
    for (const line of R.lines) {
      const d = document.createElement('div');
      d.className = 'clear-newbest';
      d.style.color = line.color || '#8a80c0';
      d.textContent = line.text;
      ui.clearStars.appendChild(d);
    }
    ui.btnShare.style.display = R.share ? '' : 'none';
    ui.clearPct.textContent = R.foot || '';
    ui.clearTime.textContent = R.foot2 || '';
    ui.btnNext.textContent = R.nextLabel;
    ui.clearFill.style.width = '0%';
    ui.clearFill.parentNode.style.display = 'none';
  } else if (s === 'clear') {
    ui.btnShare.style.display = 'none';
    ui.clearFill.parentNode.style.display = '';
    const last = game.levelIndex >= LEVELS.length - 1;
    ui.clearTitle.textContent = last ? 'כל הכבוד! סיימת את כל השלבים!' : 'השלב הושלם!';
    ui.clearStars.innerHTML = '';
    const pt = document.createElement('span');
    pt.className = 'clear-star on';
    pt.textContent = '+' + game.runPts + ' נקודות';
    const det = document.createElement('div');
    det.className = 'clear-newbest';
    det.style.fontSize = '14px';
    det.textContent = 'פירות: ' + game.taken + '/' + game.fruits.length + ' פירות  •  בונוס סיום +' + game.bonusPts;
    ui.clearStars.appendChild(det);
    ui.clearStars.appendChild(pt);
    if (game.newPtsBest && game.runPts > 0) {
      const nb = document.createElement('div');
      nb.className = 'clear-newbest';
      nb.textContent = '🏆 שיא נקודות חדש בשלב!';
      ui.clearStars.appendChild(nb);
    }
    ui.btnNext.textContent = last ? 'שחקו שוב' : 'השלב הבא';
    const tot = store.totalPts();
    const bal = store.balance();
    const goal = nextSkinGoal();
    ui.clearPct.textContent = 'הניקוד שלך: ' + bal + ' נק׳  •  סה"כ צברת: ' + tot;
    ui.clearTime.textContent = (game.lastTime
      ? 'זמן: ' + game.lastTime + 'שנ' + (game.newBest ? ' 🏆 שיא זמן!' : (store.best(game.levelIndex) ? ' | שיא: ' + store.best(game.levelIndex) + 'שנ' : ''))
      : '')
      + (goal ? '\nהדמות הבאה: ' + goal.name + ' ב-' + goal.pts + ' נק׳ (חסרות ' + Math.max(0, goal.pts - bal) + ')' : '\nכל הדמויות נרכשו! 🎉');
    const fillTo = goal ? Math.max(4, Math.min(100, 100 * bal / goal.pts)) : 100;
    requestAnimationFrame(() => { ui.clearFill.style.width = fillTo + '%'; });
  }
}

function startLevel(i) {
  game.results = null;
  loadLevel(i);
  setState('intro');
}

function startDaily(key) {
  game.results = null;
  loadDaily(key || dayKey());
  setState('intro');
}

function startEndless() {
  game.results = null;
  loadEndless();
  setState('intro');
}

function beginPlay() { game.playTime = 0; setState('play'); sfx.click(); }

function win() {
  if (game.state !== 'play') return;
  game.state = 'clearing';
  game.clearTimer = 1.1;
  const p = game.world.player;
  const L = game.level;
  game.particles.confetti(p.x + 60, p.y - 120, { count: 140 });
  game.particles.confetti(L.finishX + 18, 260, { count: 70, spread: 520 });
  game.particles.attach(L.finishX + 18, 380, { count: 22 });
  game.shake = Math.max(game.shake, 12);
  ui.winflash.classList.remove('show');
  void ui.winflash.offsetWidth;
  ui.winflash.classList.add('show');
  sfx.win();
  const t = game.playTime;
  if (game.mode === 'daily') {
    const key = game.dailyKey;
    const prevT = store.dailyTime(key);
    game.newBest = !prevT || t < prevT;
    if (game.newBest) {
      store.setDailyTime(key, Math.round(t * 10) / 10);
    }
    game.lastTime = Math.round(t * 10) / 10;
  } else {
    const prevBest = store.best(game.levelIndex);
    game.newBest = !prevBest || t < prevBest;
    if (game.newBest) {
      store.setBest(game.levelIndex, Math.round(t * 10) / 10);
    }
    game.lastTime = Math.round(t * 10) / 10;
  }
  // Old best times predate replay recording. Keep those times, but record the
  // fastest available completed replay even when it cannot beat that old time.
  if (game.ghostRec && game.ghostRec.length > 10) {
    const key = ghostKey();
    const prior = game.ghostData;
    const priorTime = store.ghostTime(key) || (prior ? prior.length * 0.05 : 0);
    if (!prior || prior.length < 10 || t < priorTime) {
      store.setGhost(key, game.ghostRec, t);
    }
  }
  // level bonuses: finishing, plus a big one for collecting every fruit
  game.bonusPts = 25 + (game.taken >= game.fruits.length && game.fruits.length ? 100 : 0);
  game.runPts += game.bonusPts;
  if (game.mode === 'daily') {
    const key = game.dailyKey;
    game.newPtsBest = game.runPts > store.dailyPts(key);
    if (game.newPtsBest) store.setDailyPts(key, game.runPts);
    // day streak: consecutive Jerusalem days with a completed daily
    if (store.dailyLast !== key) {
      store.dailyStreak = store.dailyLast === shiftKey(key, -1) ? store.dailyStreak + 1 : 1;
      store.dailyLast = key;
    }
  } else {
    game.newPtsBest = game.runPts > store.pts(game.levelIndex);
    if (game.newPtsBest) store.setPts(game.levelIndex, game.runPts);
    if (game.levelIndex >= LEVELS.length - 1) store.done = true;
    store.level = Math.max(store.level, Math.min(game.levelIndex + 2, LEVELS.length));
    store.pct = store.done ? 100 : Math.round(100 * (store.level - 1) / LEVELS.length);
  }
  game.world.setHeld(false);
  if (game.mode === 'daily') {
    game.results = {
      title: 'האתגר היומי הושלם!',
      lines: [
        { text: 'ניקוד: ' + game.runPts + ' נק׳  •  זמן: ' + game.lastTime + ' שנ׳', color: '#4a3ba8' },
        { text: (game.newPtsBest ? '🏆 שיא חדש להיום!  ' : 'השיא להיום: ' + store.dailyPts(game.dailyKey) + ' נק׳  ') + 'רצף: ' + store.dailyStreak + (store.dailyStreak === 1 ? ' יום' : ' ימים'), color: '#4ec94f' },
      ],
      foot: 'אותו שלב לכולם היום - חוזר מחר עם אתגר חדש',
      foot2: '',
      nextLabel: 'לתפריט',
      share: true,
    };
  }
  // superman-style fly-off: launch the hero up and ahead, physics keeps
  // simulating through the clear celebration instead of freezing.
  const pl = game.world.player;
  const hero = game.body === 'super'; // גיבור על: longer, faster fly-off
  // capped launch: the hero should soar but stay in frame through the zoom
  pl.vx = Math.max(pl.vx * 0.4, hero ? 560 : 380);
  pl.vy = Math.min(pl.vy * 0.4, hero ? -640 : -460);
  game.clearTimer = hero ? 2.0 : 1.6;
  // finish-moment celebration: freeze hit -> slow-mo + zoom-in -> ramp back.
  // timeline (real seconds): 0-0.09 freeze, 0.09-0.28 ramp in, hold to 0.78,
  // back to normal by ~1.1. Applied in frame() via timeScale + game.zoom.
  game.celebration = { t: 0, wave2: false };
  game.zoom = 1;
  // cinematic camera: drop the lookahead and drift gently onto the hero
  const wo = game.world.options;
  wo.cameraLookahead = 0; wo.cameraMaxLookahead = 0;
  wo.cameraOffsetX = 0; wo.cameraOffsetY = -10; wo.cameraSharpness = 2.6;
  game.rings.push({ x: p.x, y: p.y, t: 0, max: 0.7, col: '#ffffff' });
  game.rings.push({ x: p.x, y: p.y, t: -0.12, max: 0.85, col: '#ffe17b' });
  game.particles.attach(p.x, p.y - 40, { count: 30 });
  if (game.runPts > 0) game.pops.push({ x: p.x, y: p.y - 170, t: 0, txt: '+' + game.runPts, col: '#ffe17b', big: true });
}

function fail() {
  if (game.state !== 'play') return;
  /* cat ability: one rescue per level - land back on the last anchor */
  if (game.body === 'cat' && !game.catRescued) {
    game.catRescued = true;
    const p = game.world.player;
    let best = null;
    for (const a of game.world.anchors) if (a.enabled !== false && a.x < p.x - 40 && (!best || a.x > best.x)) best = a;
    const a = best || game.world.anchors[0];
    game.world.setHeld(false);
    game.world.reset({ x: a.x - 60, y: a.y + 300 });
    game.world.attach(a.id);
    game.world.setHeld(true);
    game.pops.push({ x: a.x, y: a.y + 160, t: 0, txt: 'ניצלת!', col: '#a5f5a9' });
    game.shake = Math.max(game.shake, 6);
    sfx.jump && sfx.jump();
    return;
  }
  if (game.mode === 'endless') {
    game.state = 'failing';
    game.failTimer = 0.9;
    ui.fail.classList.add('show');
    sfx.fail();
    buzz([40, 60, 40]);
    game.world.setHeld(false);
    const dist = Math.max(0, Math.round(game.endlessDist / 50));
    const newBest = dist > store.endlessBest;
    if (newBest) store.endlessBest = dist;
    game.results = {
      title: 'נפלתם!',
      lines: [
        { text: 'מרחק: ' + dist + ' מ׳  •  ' + game.runPts + ' נק׳ פירות', color: '#4a3ba8' },
        { text: newBest ? '🏆 שיא חדש!' : 'השיא שלכם: ' + store.endlessBest + ' מ׳', color: newBest ? '#4ec94f' : '#8a80c0' },
      ],
      foot: '',
      foot2: '',
      nextLabel: 'עוד הרצה',
      share: false,
    };
    return;
  }
  game.state = 'failing';
  game.failTimer = 0.55;
  ui.fail.classList.add('show');
  sfx.fail();
  game.world.setHeld(false);
}

/* ---------- input ---------- */
let pointerHeld = false;
function press() {
  if (game.state === 'clearing') {
    // tap to skip the finish celebration straight to the score screen
    game.celebration = null; game.zoom = 1;
    game.clearTimer = Math.min(game.clearTimer, 0.05);
    return;
  }
  if (game.state !== 'play') return;
  pointerHeld = true;
  const result = game.world.tap();
  if (result === 'jump' || result === 'hop') { sfx.jump(); game.shake = Math.max(game.shake, 2); }
  game.world.setHeld(true);
}
function releasePress() {
  if (!pointerHeld) return;
  pointerHeld = false;
  if (!game.world) return;
  if (game.state === 'play' && game.world.rope) {
    if (perfectNow()) {
      game.world.setHeld(false);
      const p = game.world.player;
      // speed boost on top of any character release boost, capped by the engine
      const boost = 1.12;
      p.vx *= boost; p.vy *= boost;
      // combined boost (e.g. ninja's releaseBoost x perfect) stays under the engine cap
      const cap = game.world.options.maxSpeed * 1.15;
      const sp = Math.hypot(p.vx, p.vy);
      if (sp > cap) { p.vx *= cap / sp; p.vy *= cap / sp; }
      game.perfectStreak++;
      const gain = 5 + 5 * Math.min(game.perfectStreak, 8);
      game.runPts += gain;
      game.pops.push({ x: p.x, y: p.y - 60, t: 0, txt: 'שחרור מושלם! +' + gain + (game.perfectStreak > 1 ? ' x' + game.perfectStreak : ''), col: '#7bf2a8' });
      game.particles.confetti(p.x, p.y, { count: 18, spread: 160 });
      game.rings.push({ x: p.x, y: p.y, t: 0, max: 0.45, col: '#57e88f' });
      game.shake = Math.max(game.shake, 3);
      sfx.perfect(game.perfectStreak);
      buzz(25);
    } else {
      game.perfectStreak = 0;
      game.world.setHeld(false);
    }
  } else {
    game.world.setHeld(false);
  }
}
canvas.addEventListener('pointerdown', e => { e.preventDefault(); press(); });
window.addEventListener('pointerup', releasePress);
window.addEventListener('pointercancel', releasePress);
window.addEventListener('blur', releasePress);
window.addEventListener('keydown', e => {
  if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); if (!e.repeat) press(); }
});
window.addEventListener('keyup', e => {
  if (e.code === 'Space' || e.code === 'ArrowUp') releasePress();
});

ui.btnPlay.addEventListener('click', () => { sfx.click(); startLevel(store.level - 1); });
ui.btnDaily.addEventListener('click', () => { sfx.click(); startDaily(); });
ui.btnEndless.addEventListener('click', () => { sfx.click(); startEndless(); });
function renderVib() { ui.btnVib.textContent = store.vib ? 'רטט: פועל 📳' : 'רטט: כבוי'; }
ui.btnVib.addEventListener('click', () => { store.vib = !store.vib; renderVib(); sfx.click(); if (store.vib) buzz(20); });
renderVib();
ui.btnShare.addEventListener('click', () => {
  sfx.click();
  const key = game.dailyKey || dayKey();
  const link = location.origin + location.pathname + '?daily=' + key;
  const txt = 'סטיקמן - אתגר יומי ' + key + ': ' + game.runPts + ' נק׳ ב-' + game.lastTime + ' שנ׳! 🔥 רצף ' + store.dailyStreak + '. נסו לנצח אותי: ' + link;
  const done = () => showToast('התוצאה הועתקה! 📋');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(done, () => { window.prompt('העתיקו:', txt); });
  } else window.prompt('העתיקו:', txt);
});
ui.btnGo.addEventListener('click', beginPlay);
ui.btnNext.addEventListener('click', () => {
  sfx.click();
  if (game.mode === 'daily') { setState('menu'); return; }
  if (game.mode === 'endless') { startEndless(); beginPlay(); return; }
  const next = (game.levelIndex + 1) % LEVELS.length;
  startLevel(next);
});
ui.btnPause.addEventListener('click', () => { if (game.state === 'play') { setState('paused'); sfx.click(); } });
$('btn-home').addEventListener('click', () => { releasePress(); sfx.click(); setState('menu'); });
ui.btnResume.addEventListener('click', () => { if (game.state === 'paused') { setState('play'); sfx.click(); } });
ui.btnRestart.addEventListener('click', () => {
  sfx.click();
  if (game.mode === 'endless') { startEndless(); beginPlay(); return; }
  buildWorld(); setState('play');
});
function renderMute() { ui.btnMute.textContent = store.mute ? '🔇' : '🔊'; }
ui.btnMute.addEventListener('click', () => { store.mute = !store.mute; renderMute(); sfx.click(); });
renderMute();

/* ---------- level select + prev/next ---------- */
function renderLevelGrid() {
  ui.levelGrid.innerHTML = '';
  LEVELS.forEach((L, i) => {
    const b = document.createElement('button');
    const unlocked = i <= store.level - 1;
    b.className = 'lv-btn' + (i < store.level - 1 || store.done ? ' done' : i === store.level - 1 ? ' current' : ' locked');
    b.textContent = unlocked ? String(i + 1) : '🔒';
    b.disabled = !unlocked;
    if (unlocked) {
      const got = store.pts(i);
      const row = document.createElement('span');
      row.className = 'lv-stars';
      const st3 = document.createElement('i');
      st3.className = got > 0 ? 'on' : '';
      st3.textContent = got > 0 ? got + ' נק׳' : '—';
      row.appendChild(st3);
      b.appendChild(row);
    }
    const best = store.best(i);
    if (best) b.title = 'שיא: ' + best + 'שנ';
    b.addEventListener('click', () => {
      if (!unlocked) return;
      sfx.click(); ui.levelsel.classList.remove('show'); startLevel(i);
    });
    ui.levelGrid.appendChild(b);
  });
}
function openLevelSel() { renderLevelGrid(); ui.levelsel.classList.add('show'); sfx.click(); }
ui.btnChars.addEventListener('click', () => { renderCharGrid(); ui.charsel.classList.add('show'); sfx.click(); });
ui.btnCharsClose.addEventListener('click', () => { ui.charsel.classList.remove('show'); sfx.click(); });
$('btn-chars-x').addEventListener('click', () => { ui.charsel.classList.remove('show'); sfx.click(); });
$('btn-levels-x').addEventListener('click', () => { ui.levelsel.classList.remove('show'); sfx.click(); });
/* tap the empty backdrop of a picker overlay to close it */
[ui.charsel, ui.levelsel].forEach(ov => ov.addEventListener('click', e => {
  if (e.target === ov) { ov.classList.remove('show'); sfx.click(); }
}));
ui.btnLevels.addEventListener('click', openLevelSel);
ui.btnIntroLevels.addEventListener('click', openLevelSel);
ui.btnIntroChars.addEventListener('click', () => { renderCharGrid(); ui.charsel.classList.add('show'); sfx.click(); });
ui.btnPauseLevels.addEventListener('click', openLevelSel);
ui.btnLevelsClose.addEventListener('click', () => { ui.levelsel.classList.remove('show'); sfx.click(); });
/* ---------- pose selection ---------- */
function pickPose(p, rope) {
  if (rope) return 'swing';
  const speed = Math.hypot(p.vx, p.vy);
  if (speed > 420) return 'fly';
  return 'fly';
}

/* ---------- drawing helpers ---------- */
function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

let snowmanSpr = null;
function snowmanSprite() {
  if (snowmanSpr) return snowmanSpr;
  const c = document.createElement('canvas');
  c.width = 64; c.height = 88;
  const g = c.getContext('2d');
  const ball = (x, y, r) => {
    g.fillStyle = '#241f3a'; g.beginPath(); g.arc(x, y + 2.5, r, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#f4fafd'; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(190,220,235,.55)'; g.beginPath(); g.arc(x + r * 0.25, y + r * 0.3, r * 0.72, 0, Math.PI * 2); g.fill();
  };
  ball(32, 70, 17); ball(32, 46, 13); ball(32, 26, 10);
  g.fillStyle = '#241f3a';
  g.beginPath(); g.arc(28.5, 23.5, 1.7, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.arc(35.5, 23.5, 1.7, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#ff8a3d';
  g.beginPath(); g.moveTo(32, 26); g.lineTo(43, 28.5); g.lineTo(32, 30.5); g.closePath(); g.fill();
  g.fillStyle = '#241f3a';
  g.beginPath(); g.arc(32, 42, 1.8, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.arc(32, 50, 1.8, 0, Math.PI * 2); g.fill();
  g.strokeStyle = '#ff4d5e'; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.moveTo(23, 34); g.quadraticCurveTo(32, 38.5, 41, 34); g.stroke();
  g.beginPath(); g.moveTo(36, 37); g.lineTo(40, 47); g.stroke();
  g.strokeStyle = '#7a4a2b'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(20, 44); g.lineTo(9, 34); g.stroke();
  g.beginPath(); g.moveTo(44, 44); g.lineTo(56, 36); g.stroke();
  g.fillStyle = '#241f3a'; g.fillRect(23, 9, 18, 9);
  g.fillRect(19, 16.5, 26, 4);
  snowmanSpr = c;
  return c;
}

function drawPads(L) {
  const snow = game.theme && game.theme.weather === 'snow';
  let trampIdx = 0;
  for (const p of L.pads) {
    const w = p.x2 - p.x1, hh = p.y2 - p.y1;
    const len = Math.hypot(w, hh), ang = Math.atan2(hh, w);
    ctx.save();
    ctx.translate(p.x1, p.y1);
    ctx.rotate(ang);
    if (p.kind === 'trampWall' || p.kind === 'trampCeil') {
      // obstacle trampoline: long dark arm attached to ceiling/ground, red spring face on the bounce side
      ctx.fillStyle = '#241f3a';
      roundRect(-10, 0, len + 20, 40, 12); ctx.fill();
      ctx.strokeStyle = '#4a4180'; ctx.lineWidth = 5; ctx.lineCap = 'round';
      for (let x = 20; x < len - 10; x += 34) {
        ctx.beginPath(); ctx.moveTo(x - 9, 28); ctx.lineTo(x, 14); ctx.lineTo(x + 9, 28); ctx.stroke(); // tip points along the bounce normal (local -y)
      }
      ctx.fillStyle = '#ff4d5e';
      roundRect(-6, -20, len + 12, 20, 10); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      roundRect(2, -17, len - 4, 5, 3); ctx.fill();
      if (p.kind === 'trampCeil') {
        // Flat, non-spring upper edge: safe to land and stand on.
        ctx.fillStyle = '#9b92ca';
        roundRect(0, 36, len, 4, 2); ctx.fill();
        // support column up to the ceiling
        ctx.restore(); ctx.save();
        ctx.fillStyle = '#241f3a';
        const cx2 = (p.x1 + p.x2) / 2;
        ctx.fillRect(cx2 - 11, p.y1 - 900, 22, 900 - 6);
        ctx.fillStyle = '#3a3358'; ctx.fillRect(cx2 - 4, p.y1 - 900, 5, 880);
      }
    } else if (p.kind === 'tramp' || p.kind === 'trampV') {
      // angled spring trampoline: dark base, red springy top with white shine
      ctx.fillStyle = '#241f3a';
      roundRect(0, -6, len, 22, 10); ctx.fill();
      ctx.fillStyle = '#3a3358';
      for (let x = 16; x < len - 10; x += 26) {
        ctx.beginPath();
        ctx.moveTo(x, 14); ctx.lineTo(x + 8, 2); ctx.lineTo(x + 16, 14);
        ctx.strokeStyle = '#4a4180'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.stroke();
      }
      ctx.fillStyle = '#ff4d5e';
      roundRect(3, -15, len - 6, 13, 8); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      roundRect(8, -13, len - 16, 5, 3); ctx.fill();
      if (p.kind === 'trampV') {
        // small hinge caps so the two ramps read as one V
        ctx.fillStyle = '#241f3a';
        ctx.beginPath(); ctx.arc(0, 5, 9, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(len, 5, 9, 0, Math.PI * 2); ctx.fill();
      }
    } else if (p.kind === 'slide') {
      // מגלשה: curved green chute - entry high, exit lip kicks up
      ctx.strokeStyle = '#241f3a'; ctx.lineWidth = 26; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(4, 0);
      ctx.quadraticCurveTo(len * 0.55, 6, len - 14, -16); ctx.stroke();
      ctx.strokeStyle = '#35c48d'; ctx.lineWidth = 15;
      ctx.beginPath(); ctx.moveTo(4, -2);
      ctx.quadraticCurveTo(len * 0.55, 4, len - 14, -18); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(10, -6);
      ctx.quadraticCurveTo(len * 0.55, 0, len - 22, -19); ctx.stroke();
      // red launch lip at the exit
      ctx.fillStyle = '#ff4d5e';
      ctx.beginPath(); ctx.arc(len - 12, -20, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      ctx.beginPath(); ctx.arc(len - 15, -23, 3.5, 0, Math.PI * 2); ctx.fill();
      // entry flag
      ctx.fillStyle = '#241f3a'; ctx.fillRect(2, -34, 4, 26);
      ctx.fillStyle = '#ffd166';
      ctx.beginPath(); ctx.moveTo(6, -34); ctx.lineTo(26, -28); ctx.lineTo(6, -22); ctx.closePath(); ctx.fill();
    } else if (p.kind === 'bump') {
      // round balloon bumper (local coords: origin at x1,y1 = center, len = radius)
      ctx.rotate(-ang); // cancel pad rotation: bumpers are radial
      const r = len;
      ctx.fillStyle = '#241f3a';
      ctx.beginPath(); ctx.arc(0, 4, r + 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ff8a3d';
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ff5e3d';
      ctx.beginPath(); ctx.arc(0, 0, r, Math.PI * 0.15, Math.PI * 0.85); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.9)';
      ctx.beginPath(); ctx.ellipse(-r * 0.32, -r * 0.38, r * 0.24, r * 0.15, -0.6, 0, Math.PI * 2); ctx.fill();
      // polka dots on the lower half
      ctx.fillStyle = 'rgba(255,255,255,.5)';
      for (let d = 0; d < 3; d++) {
        ctx.beginPath(); ctx.arc(-r * 0.4 + d * r * 0.4, r * 0.45, 4, 0, Math.PI * 2); ctx.fill();
      }
      // little tie at the bottom
      ctx.fillStyle = '#241f3a';
      ctx.beginPath(); ctx.moveTo(-6, r + 6); ctx.lineTo(6, r + 6); ctx.lineTo(0, r + 16); ctx.closePath(); ctx.fill();
    } else if (p.kind === 'trampBox') {
      // square trampoline block: dark box, spring coil inside, red top
      ctx.fillStyle = '#241f3a';
      roundRect(-8, 0, len + 16, 56, 10); ctx.fill();
      ctx.strokeStyle = '#4a4180'; ctx.lineWidth = 5; ctx.lineCap = 'round';
      for (let x = 14; x < len - 6; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 48); ctx.lineTo(x + 7, 34); ctx.lineTo(x, 20); ctx.lineTo(x + 7, 8);
        ctx.stroke();
      }
      ctx.fillStyle = '#3a3358';
      roundRect(-8, 44, len + 16, 12, 8); ctx.fill();
      ctx.fillStyle = '#ff4d5e';
      roundRect(-12, -14, len + 24, 15, 9); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      roundRect(-6, -12, len + 12, 5, 3); ctx.fill();
    } else {
      ctx.fillStyle = '#241f3a';
      roundRect(0, -8, len, 26, 13); ctx.fill();
      ctx.fillStyle = '#ffffff';
      roundRect(5, -8, len - 10, 7, 4); ctx.fill();
      // segment notches on long ground bars, like the original
      if (len > 200) {
        ctx.fillStyle = 'rgba(255,255,255,.28)';
        for (let x = 85; x < len - 20; x += 85) ctx.fillRect(x, 2, 4, 12);
      }
    }
    ctx.restore();
    // snow-theme decoration: a snowman sitting by every few trampoline-like pads
    if (snow && p.kind && p.kind !== 'trampWall' && p.kind !== 'trampCeil' && (trampIdx++ % 3 === 0)) {
      const spr = snowmanSprite();
      const mx = p.kind === 'bump' ? p.x1 - 64 : (p.x1 + p.x2) / 2 + 34;
      const my = p.kind === 'bump' ? p.y1 - 26 : Math.min(p.y1, p.y2) - 84;
      ctx.drawImage(spr, mx, my);
    }
  }
}

function starPath(x, y, r, rot) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const rr = i % 2 ? r * 0.46 : r;
    const a = rot + i * Math.PI / 5 - Math.PI / 2;
    const px = x + rr * Math.cos(a), py = y + rr * Math.sin(a);
    if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
  }
  ctx.closePath();
}

function drawFruit(x, y, k, s2) { drawFruitOn(ctx, x, y, k, s2); }
function drawFruitOn(c2, x, y, k, s2) {
  const ctx = c2;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s2, s2);
  if (k === 'apple') {
    ctx.fillStyle = '#ee3e46';
    ctx.beginPath(); ctx.arc(-5, 2, 9, 0, Math.PI * 2); ctx.arc(5, 2, 9, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#b3252c'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(-5, 2, 9, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(5, 2, 9, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = '#7a4a1e'; ctx.lineWidth = 2.4;
    ctx.beginPath(); ctx.moveTo(0, -6); ctx.quadraticCurveTo(2, -12, 5, -15); ctx.stroke();
    ctx.fillStyle = '#4ec94f';
    ctx.beginPath(); ctx.ellipse(8, -12, 6, 3, -0.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.55)';
    ctx.beginPath(); ctx.ellipse(-6, -2, 3, 4.5, -0.4, 0, Math.PI * 2); ctx.fill();
  } else if (k === 'orange') {
    ctx.fillStyle = '#ff9a2e';
    ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#d97308'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#4ec94f';
    ctx.beginPath(); ctx.ellipse(4, -12, 5.5, 3, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.5)';
    ctx.beginPath(); ctx.ellipse(-4, -4, 3, 4, -0.5, 0, Math.PI * 2); ctx.fill();
  } else if (k === 'banana') {
    ctx.fillStyle = '#ffd93f';
    ctx.strokeStyle = '#d9a812'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-11, -4);
    ctx.quadraticCurveTo(-2, 12, 11, -4);
    ctx.quadraticCurveTo(2, 4, -11, -4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#7a4a1e';
    ctx.fillRect(9, -7, 4, 4);
  } else if (k === 'melon') {
    ctx.fillStyle = '#39b54a';
    ctx.beginPath(); ctx.ellipse(0, 0, 14, 11, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#1e7e34'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(0, 0, 14, 11, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(30,126,52,.8)'; ctx.lineWidth = 2.4;
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath(); ctx.moveTo(i * 8, -10); ctx.quadraticCurveTo(i * 10, 0, i * 8, 10); ctx.stroke();
    }
  } else { /* cherry */
    ctx.strokeStyle = '#4a8f2e'; ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.moveTo(-5, 2); ctx.quadraticCurveTo(-2, -10, 6, -14); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(6, 4); ctx.quadraticCurveTo(7, -6, 6, -14); ctx.stroke();
    ctx.fillStyle = '#e0303a';
    ctx.beginPath(); ctx.arc(-6, 6, 7.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(7, 8, 7.5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#a81822'; ctx.lineWidth = 1.8;
    ctx.beginPath(); ctx.arc(-6, 6, 7.5, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(7, 8, 7.5, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.55)';
    ctx.beginPath(); ctx.arc(-8, 3.5, 2.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(5, 5.5, 2.2, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

/* Pre-rendered fruit sprites with baked glow: ctx.shadowBlur in the per-frame
   hot path overwhelms mobile GPU canvas rasterization (tiles from stale frames
   smear across the screen), so all glow lives in one-time offscreen renders. */
const FRUIT_SPRITES = {};
function fruitSprite(k) {
  if (FRUIT_SPRITES[k]) return FRUIT_SPRITES[k];
  const S = 72, cv = document.createElement('canvas');
  cv.width = S; cv.height = S;
  const c2 = cv.getContext('2d');
  const glow = k === 'cherry' ? '255,80,80' : k === 'melon' ? '120,255,140' : '255,220,90';
  const rad = k === 'melon' || k === 'cherry' ? 0.5 : 0.38;
  const g = c2.createRadialGradient(S / 2, S / 2, 4, S / 2, S / 2, S * rad);
  g.addColorStop(0, 'rgba(' + glow + ',.5)');
  g.addColorStop(1, 'rgba(' + glow + ',0)');
  c2.fillStyle = g;
  c2.fillRect(0, 0, S, S);
  drawFruitOn(c2, S / 2, S / 2, k, 1.5);
  FRUIT_SPRITES[k] = cv;
  return cv;
}

function drawFruits() {
  for (let i = 0; i < game.fruits.length; i++) {
    const f = game.fruits[i];
    if (f.taken) continue;
    const pulse = 1 + 0.08 * Math.sin(game.time * 3.2 + i * 2.1);
    const bob = Math.sin(game.time * 2 + i * 1.3) * 5;
    const sz = 44 * pulse;
    ctx.drawImage(fruitSprite(f.k), f.x - sz / 2, f.y + bob - sz / 2, sz, sz);
    if (f.v >= 10) { /* value chip so risk/reward reads at a glance */
      ctx.save();
      ctx.font = '900 12px Heebo, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(36,31,58,.75)';
      roundRect(f.x - 12, f.y + bob + 14, 24, 15, 7); ctx.fill();
      ctx.fillStyle = '#ffd94d';
      ctx.fillText(String(f.v), f.x, f.y + bob + 22);
      ctx.restore();
    }
  }
}

function drawRings() {
  if (!game.rings.length) return;
  ctx.save();
  for (const r of game.rings) {
    if (r.t < 0) continue;
    const f = r.t / r.max;
    ctx.globalAlpha = (1 - f) * 0.9;
    ctx.strokeStyle = r.col;
    ctx.lineWidth = 2 + 7 * (1 - f);
    ctx.beginPath(); ctx.arc(r.x, r.y, 26 + f * 250, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.restore();
}

function drawPops() {
  for (const p2 of game.pops) {
    const a = Math.max(0, 1 - p2.t / 0.9);
    ctx.save();
    ctx.globalAlpha = a;
    const big = p2.big ? 2.2 : 1;
    const popScale = big * (p2.t < 0.16 ? 0.4 + 2.6 * (p2.t / 0.16) : p2.t < 0.3 ? 1.8 - 0.8 * ((p2.t - 0.16) / 0.14) : 1);
    ctx.font = '900 ' + Math.round(20 * popScale) + 'px Heebo, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.direction = 'ltr';
    ctx.lineWidth = 4 * big; ctx.strokeStyle = 'rgba(36,31,58,.85)';
    const yy = p2.y - 24 - p2.t * 46;
    // keep popups fully on-screen: clamp center by measured text half-width
    const cam = game.world ? game.world.camera : { x: 0 };
    const zm = game.zoom || 1;
    const sx = (p2.x - cam.x) * zm + W / 2;
    const half = ctx.measureText(p2.txt).width / 2 + 8;
    const px = cam.x + (Math.max(half, Math.min(W - half, sx)) - W / 2) / zm;
    ctx.strokeText(p2.txt, px, yy);
    ctx.fillStyle = p2.col;
    ctx.fillText(p2.txt, px, yy);
    ctx.restore();
  }
}

/* edge cue for trampoline pads sitting off-screen: a red bouncing chevron
   at the nearest screen edge, clamped to the pad's screen x. Sprite-based:
   no per-frame shadowBlur (mobile GPU raster smear guard). */
let CUE_SPRITE = null;
function cueSprite() {
  if (CUE_SPRITE) return CUE_SPRITE;
  const S = 56, cv = document.createElement('canvas');
  cv.width = S; cv.height = S;
  const c2 = cv.getContext('2d');
  const g = c2.createRadialGradient(S / 2, S / 2, 2, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,60,60,.5)');
  g.addColorStop(1, 'rgba(255,60,60,0)');
  c2.fillStyle = g;
  c2.fillRect(0, 0, S, S);
  c2.translate(S / 2, S / 2);
  c2.fillStyle = '#ff5252'; c2.strokeStyle = '#ffffff'; c2.lineWidth = 2.5;
  c2.beginPath(); c2.moveTo(-13, 7); c2.lineTo(0, -7); c2.lineTo(13, 7); c2.closePath();
  c2.fill(); c2.stroke();
  c2.globalAlpha = 0.75;
  c2.beginPath(); c2.moveTo(-13, 14); c2.lineTo(0, 1); c2.lineTo(13, 14); c2.closePath();
  c2.fill(); c2.stroke();
  CUE_SPRITE = cv;
  return cv;
}
function drawPadCues(L, cam) {
  if (game.state !== 'play' && game.state !== 'intro') return;
  const spr = cueSprite();
  for (const pd of L.pads) {
    const cx = (pd.x1 + pd.x2) / 2, cy = (pd.y1 + pd.y2) / 2;
    const sx = cx - cam.x + W / 2, sy = cy - cam.y + H / 2;
    if (pd.kind === 'trampWall' || pd.kind === 'trampCeil') continue;
    if (sy > -60 && sy < H + 60) continue;
    if (sx < -120 || sx > W + 120) continue;
    const up = sy <= -60;
    const edgeY = up ? 30 : H - 34;
    const hop = Math.abs(Math.sin(game.time * 5)) * 7;
    const x = Math.max(34, Math.min(W - 34, sx));
    ctx.save();
    ctx.translate(x, edgeY + (up ? -hop : hop));
    if (!up) ctx.scale(1, -1); // sprite is the up chevron
    ctx.drawImage(spr, -28, -28);
    ctx.restore();
  }
}

function drawWinds() {
  const ws = game.world ? game.world.winds : [];
  if (!ws || !ws.length) return;
  ctx.save();
  for (const z of ws) {
    const fwd = (z.ax || 0) >= 0;
    ctx.fillStyle = fwd ? 'rgba(120,230,255,.10)' : 'rgba(255,170,120,.10)';
    ctx.fillRect(z.x1, z.y1, z.x2 - z.x1, z.y2 - z.y1);
    // drifting streaks that show the push direction
    const dir = fwd ? 1 : -1;
    const speed = Math.abs(z.ax || 0) * 1.6;
    ctx.strokeStyle = fwd ? 'rgba(190,240,255,.5)' : 'rgba(255,200,160,.5)';
    ctx.lineWidth = 3; ctx.lineCap = 'round';
    const span = z.x2 - z.x1;
    for (let i = 0; i < 7; i++) {
      const yy = z.y1 + 120 + ((i * 173) % Math.max(1, (z.y2 - z.y1 - 240)));
      let xx = z.x1 + ((i * 241 + game.time * speed) % span);
      if (!fwd) xx = z.x2 - (xx - z.x1);
      ctx.globalAlpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(game.time * 3 + i * 2.2));
      ctx.beginPath();
      ctx.moveTo(xx, yy);
      ctx.lineTo(xx - dir * 46, yy);
      ctx.stroke();
      // arrow head
      ctx.beginPath();
      ctx.moveTo(xx + dir * 4, yy);
      ctx.lineTo(xx - dir * 8, yy - 7);
      ctx.moveTo(xx + dir * 4, yy);
      ctx.lineTo(xx - dir * 8, yy + 7);
      ctx.stroke();
    }
  }
  ctx.restore();
}

const GHOST_COLORS = { hogBlue: '#e8ecff', hogBlueD: '#b9c2e8', hogBlueL: '#ffffff', hogTan: '#e8ecff', hogTanD: '#b9c2e8', hogRed: '#d5dbff', hogRedD: '#aab4dd', hogRedL: '#ffffff' };
function drawGhost() {
  const g = game.ghostData;
  if (!g || g.length < 10) return;
  if (game.state !== 'play' && game.state !== 'clearing') return;
  const i = Math.min(g.length - 1, Math.floor(game.playTime / 0.05));
  if (game.playTime > g.length * 0.05 + 0.6) return; // ghost already finished
  const s = g[i];
  ctx.save();
  ctx.globalAlpha = 0.38;
  let rope = null;
  if (s[2] >= 0 && game.world.anchors[s[2]]) {
    const a = game.world.anchors[s[2]];
    rope = { x: a.x, y: a.y };
  }
  V.drawPlayer(ctx, {
    x: s[0], y: s[1], pose: rope ? 'swing' : 'fly', time: game.time, facing: 1,
    angle: rope ? Math.atan2(s[1] - rope.y, s[0] - rope.x) - Math.PI / 2 : 0,
    curl: 0.4, colors: Object.assign({}, COLORS, GHOST_COLORS), body: game.body,
  });
  if (rope) {
    ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(rope.x, rope.y); ctx.lineTo(s[0], s[1]); ctx.stroke();
  }
  ctx.restore();
}

function drawFinish(L) {
  if (!isFinite(L.finishX)) return;
  const x = L.finishX, top = -200, bot = L.killY - 150, s = 18;
  ctx.save();
  for (let y = top, row = 0; y < bot; y += s, row++) {
    for (let col = 0; col < 2; col++) {
      ctx.fillStyle = (row + col) % 2 ? '#241f3a' : '#ffffff';
      ctx.fillRect(x + col * s, y, s, s);
    }
  }
  ctx.restore();
}

function drawRope(rope, hand) {
  if (!rope || !hand) return;
  ctx.save();
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(rope.x, rope.y); ctx.lineTo(hand.x, hand.y); ctx.stroke();
  ctx.restore();
}

function drawHUD() {
  const narrow = W < 600;
  const bw = Math.max(90, Math.min(170, W * 0.14)), bh = 10, bx = (W - bw) / 2, by = narrow ? 84 : 20;
  const p = game.world.player;
  ctx.save();
  ctx.font = '700 14px Heebo, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  if (game.mode === 'endless') {
    const m = Math.max(0, Math.round(game.endlessDist / 50));
    ctx.font = '900 26px Heebo, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(m + ' מ׳', W / 2, by + 8);
    ctx.font = '700 12px Heebo, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.8)';
    ctx.fillText('שיא: ' + Math.max(store.endlessBest, m) + ' מ׳', W / 2, by + 30);
  } else {
    const label = game.mode === 'daily' ? 'יומי' : String(game.levelIndex + 1);
    const next = game.mode === 'daily' ? null : String(game.levelIndex + 2);
    const t = Math.max(0, Math.min(1, (p.x - game.levelStartX) / (game.level.finishX - game.levelStartX)));
    ctx.fillStyle = 'rgba(36,31,58,.35)';
    roundRect(bx, by, bw, bh, bh / 2); ctx.fill();
    ctx.fillStyle = '#ffffff';
    roundRect(bx + 3, by + 3, Math.max(bh - 6, (bw - 6) * t), bh - 6, (bh - 6) / 2); ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(label, bx - 22, by + bh / 2 + 1);
    if (next) ctx.fillText(next, bx + bw + 26, by + bh / 2 + 1);
    else {
      // daily goal marker: drawn finish flag (no emoji font dependency)
      const fx = bx + bw + 20, fy = by + bh / 2;
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(fx, fy - 10); ctx.lineTo(fx, fy + 8); ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.moveTo(fx, fy - 10); ctx.lineTo(fx + 11, fy - 6.5); ctx.lineTo(fx, fy - 3); ctx.closePath(); ctx.fill();
    }
  }
  // perfect-release streak chip, under the center meter
  if (game.perfectStreak >= 2) {
    ctx.font = '900 13px Heebo, sans-serif';
    ctx.fillStyle = '#7bf2a8';
    ctx.fillText('מושלם x' + game.perfectStreak, W / 2, by + (game.mode === 'endless' ? 60 : 32));
  }
  // run points counter, top right (apple chip + total below)
  const sx = W - 34, sy = narrow ? 90 : 26;
  ctx.drawImage(fruitSprite('apple'), sx - 13, sy - 13, 26, 26);
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'right';
  ctx.font = '900 17px Heebo, sans-serif';
  ctx.fillText(String(game.runPts), sx - 20, sy + 1);
  ctx.font = '700 11px Heebo, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.75)';
  ctx.fillText('מאזן ' + store.balance(), sx + 12, sy + 20);
  if (game.combo >= 3) { ctx.fillStyle = game.combo >= 14 ? '#ff9a8a' : '#ffe08a'; ctx.font = '900 13px Heebo, sans-serif'; ctx.fillText('שרשרת ' + game.combo + (game.combo >= 6 ? ' • x' + (game.combo >= 14 ? 3 : 2) : ''), sx + 12, sy + 36); }
  ctx.restore();
}

/* ---------- main loop ---------- */
let last = 0;
function frame(ts) {
  requestAnimationFrame(frame);
  const now = ts / 1000;
  let dt = Math.min(now - (last || now), 1 / 30);
  last = now;
  game.time += dt;

  /* finish celebration envelope: freeze hit, slow-mo ramp, camera zoom */
  let tScale = 1;
  if (game.state === 'clearing' && game.celebration) {
    const ct = game.celebration.t += dt;
    if (ct < 0.09) tScale = 0;
    else if (ct < 0.28) tScale = 0.28 * (ct - 0.09) / 0.19;
    else if (ct < 0.78) tScale = 0.28;
    else if (ct < 1.08) tScale = 0.28 + 0.72 * (ct - 0.78) / 0.30;
    const eo = f => 1 - (1 - f) * (1 - f);
    const eio = f => f < 0.5 ? 2 * f * f : 1 - 2 * (1 - f) * (1 - f);
    if (ct < 0.09) game.zoom = 1;
    else if (ct < 0.30) game.zoom = 1 + 0.65 * eo((ct - 0.09) / 0.21);
    else if (ct < 0.80) game.zoom = 1.65;
    else if (ct < 1.10) game.zoom = 1.65 - 0.65 * eio((ct - 0.80) / 0.30);
    else game.zoom = 1;
    if (ct >= 0.4 && !game.celebration.wave2) {
      game.celebration.wave2 = true;
      const pl2 = game.world.player;
      game.particles.confetti(pl2.x, pl2.y - 110, { count: 60 });
    }
  }
  const playing = game.state === 'play' || game.state === 'clearing' || game.state === 'failing';
  if (playing) {
    growEndless();
    game.world.update(game.state === 'play' || game.state === 'clearing' ? dt * tScale : 0);
    game.particles.update(dt * tScale);
    for (const r of game.rings) r.t += dt * tScale;
    game.rings = game.rings.filter(r => r.t < r.max);
    /* events -> juice */
    for (const ev of game.world.drainEvents()) {
      const p = game.world.player;
      if (ev.type === 'attach') {
        game.particles.attach(ev.x, ev.y, { count: 8 });
        game.hookStreak++;
        sfx.attachNote(game.hookStreak);
        game.shake = Math.max(game.shake, 1.5);
      }
      else if (ev.type === 'release') { sfx.release(); }
      else if (ev.type === 'anchorbreak' || ev.type === 'anchoroff') {
        sfx.release();
        game.particles.confetti(p.x, p.y - 30, { count: 10, spread: 120 });
        game.pops.push({ x: p.x, y: p.y - 80, t: 0, txt: ev.type === 'anchorbreak' ? 'הוו נשבר!' : 'הוו נכבה!', col: '#ffb0a0' });
        game.shake = Math.max(game.shake, 3);
      }
      else if (ev.type === 'pad') { game.particles.land(p.x, p.y + 14, { count: 14 }); sfx.pad(); game.shake = Math.max(game.shake, 4); buzz(12); }
      else if (ev.type === 'terrain') { game.hookStreak = 0; }
      else if (ev.type === 'jump') { game.particles.land(p.x, p.y + 12, { count: 10 }); }
    }
    /* motion trail: swinging fast or flying fast */
    const st = game.world.getState();
    const spd = Math.hypot(st.player.vx, st.player.vy);
    if ((st.rope && spd > 260) || spd > 520) {
      game.particles.trail(st.player.x, st.player.y, st.player.vx, st.player.vy, { count: 1 });
    }
    if (game.state === 'play') {
      game.playTime += dt;
      if (game.mode === 'endless') {
        game.endlessDist = Math.max(game.endlessDist, game.world.player.x - game.levelStartX);
      }
      // best-run ghost: sample the current run at 20Hz (x, y, anchor index)
      if (game.ghostRec) {
        game.ghostT += dt;
        while (game.ghostT >= 0.05) {
          game.ghostT -= 0.05;
          const gp = game.world.player;
          const gr = game.world.rope;
          game.ghostRec.push([Math.round(gp.x), Math.round(gp.y), gr ? game.world.anchors.indexOf(gr.anchor) : -1]);
          if (game.ghostRec.length > 2400) game.ghostRec.shift();
        }
      }
    }
    game.shake *= Math.exp(-5 * dt);
    if (game.shake < 0.05) game.shake = 0;
    const p = game.world.player;
    for (const pop of game.pops) pop.t += dt * tScale;
    game.pops = game.pops.filter(pop => pop.t < 0.9);
    if (game.state === 'play') {
      /* fruit pickup: pass right over a fruit to collect it (a little slack,
         no pixel precision); the hedgehog's magnet still reaches farther */
      const magnet = game.body === 'hog' ? 70 : 34;
      if (game.comboT > 0) { game.comboT -= dt; if (game.comboT <= 0) game.combo = 0; }
      for (const f of game.fruits) {
        if (f.taken) continue;
        if (Math.hypot(f.x - p.x, f.y - p.y) < magnet) {
          f.taken = true;
          // chain: fruits picked up within 1.6s of each other build a multiplier (x2 from 6, x3 from 14)
          game.combo++; game.comboT = 1.6; game.taken++;
          const mult = game.combo >= 14 ? 3 : game.combo >= 6 ? 2 : 1;
          const gain = f.v * mult;
          game.runPts += gain;
          game.pops.push({ x: f.x, y: f.y, t: 0, txt: '+' + gain + (mult > 1 ? ' x' + mult : ''), col: f.v >= 20 ? '#ff8a8a' : f.v >= 10 ? '#a5f5a9' : '#ffe08a' });
          game.particles.confetti(f.x, f.y, { count: f.v >= 10 ? 24 : 14, spread: 90 });
          game.shake = Math.max(game.shake, f.v >= 20 ? 4 : 2);
          sfx.star();
        }
      }
      if (p.x >= game.level.finishX) win();
      else if (p.y > game.level.killY) fail();
    } else if (game.state === 'clearing') {
      game.clearTimer -= dt;
      if (game.clearTimer <= 0) { game.zoom = 1; game.celebration = null; game.rings.length = 0; setState('clear'); }
    } else if (game.state === 'failing') {
      game.failTimer -= dt;
      if (game.failTimer <= 0) {
        ui.fail.classList.remove('show');
        if (game.mode === 'endless') setState('clear');
        else { buildWorld(); game.state = 'play'; }
      }
    }
  }

  updateWeather(dt);
  render();
}

function render() {
  const L = game.level;
  const st = game.world.getState();
  const cam = game.world.camera;

  V.drawBackground(ctx, { x: cam.x, y: cam.y, width: W, height: H, time: game.time, colors: game.themeColors });
  drawWeather();

  ctx.save();
  if (game.shake > 0) ctx.translate((Math.random() - 0.5) * game.shake, (Math.random() - 0.5) * game.shake);
  const zoom = game.zoom || 1;
  if (zoom !== 1) {
    // zoom pivoted on the hero's screen position, not the screen center
    const px = W / 2 + (st.player.x - cam.x), py = H / 2 + (st.player.y - cam.y);
    ctx.translate(px, py);
    ctx.scale(zoom, zoom);
    ctx.translate(-px, -py);
  }
  ctx.translate(W / 2 - cam.x, H / 2 - cam.y);

  /* speed lines at very high velocity */
  const spdNow = Math.hypot(st.player.vx, st.player.vy);
  if (spdNow > 950) {
    const a = Math.min(0.45, (spdNow - 950) / 1000);
    const ux = st.player.vx / spdNow, uy = st.player.vy / spdNow;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,' + a.toFixed(3) + ')';
    ctx.lineWidth = 3; ctx.lineCap = 'round';
    for (let i = 0; i < 6; i++) {
      const ox = (Math.random() - 0.5) * 340 - ux * (60 + Math.random() * 120);
      const oy = (Math.random() - 0.5) * 340 - uy * (60 + Math.random() * 120);
      ctx.beginPath();
      ctx.moveTo(st.player.x + ox, st.player.y + oy);
      ctx.lineTo(st.player.x + ox - ux * 70, st.player.y + oy - uy * 70);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawWinds();
  drawFinish(L);
  drawRings();
  drawPads(L);
  drawFruits();
  drawPops();
  drawGhost();

  const rope = st.rope;
  const perfect = game.state === 'play' && perfectNow();
  const catchR = game.world.options.catchRadius;
  for (const a of game.world.anchors) {
    // off-screen cull (endless worlds grow long)
    if (a.x < cam.x - W || a.x > cam.x + W) continue;
    const d = Math.hypot(a.x - st.player.x, a.y - st.player.y);
    const inRange = d <= catchR;
    const enabled = a.enabled !== false;
    // rails/orbits under moving anchors
    const base = a._orig;
    if (a.move && base) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
      if (a.move.rx !== undefined || a.move.ry !== undefined) {
        ctx.setLineDash([4, 8]);
        ctx.beginPath(); ctx.ellipse(base.x, base.y, a.move.rx || 0, a.move.ry || 0, 0, 0, Math.PI * 2); ctx.stroke();
      } else {
        ctx.setLineDash([2, 9]);
        ctx.beginPath(); ctx.moveTo(base.x - (a.move.dx || 0), base.y - (a.move.dy || 0)); ctx.lineTo(base.x + (a.move.dx || 0), base.y + (a.move.dy || 0)); ctx.stroke();
      }
      ctx.restore();
    }
    ctx.save();
    if (!enabled) ctx.globalAlpha = 0.25;
    if (a.breakAfter && a._holdT > a.breakAfter * 0.45) {
      // shake harder as the hook is about to snap
      const f = a._holdT / a.breakAfter;
      ctx.translate((Math.random() - 0.5) * 6 * f, (Math.random() - 0.5) * 6 * f);
    }
    V.drawAnchor(ctx, { x: a.x, y: a.y, inRange, active: !!(rope && rope.anchorId === a.id), time: game.time, colors: COLORS });
    ctx.restore();
    if (a.breakAfter) {
      // cracked-hook marker + hold-time arc
      ctx.save();
      ctx.strokeStyle = 'rgba(36,31,58,.6)'; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(a.x - 3, a.y - 8); ctx.lineTo(a.x + 1, a.y - 2); ctx.lineTo(a.x - 2, a.y + 3); ctx.stroke();
      if (a._holdT > 0) {
        ctx.strokeStyle = '#ff8a5c'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(a.x, a.y, 16, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, a._holdT / a.breakAfter)); ctx.stroke();
      }
      ctx.restore();
    }
    if (a.toggle) {
      // on-phase ring
      ctx.save();
      const per = Math.max(0.3, a.toggle.period || 2.5);
      const u = (((game.world.time + (a.toggle.phase || 0)) % per) + per) % per;
      const duty = a.toggle.duty === undefined ? 0.5 : a.toggle.duty;
      ctx.strokeStyle = enabled ? 'rgba(140,240,190,.8)' : 'rgba(255,255,255,.4)';
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(a.x, a.y, 17, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (u / per)); ctx.stroke();
      ctx.restore();
    }
  }
  if (perfect) {
    // green halo: the release moment is now
    const hp = st.player;
    const pulse = 1 + 0.12 * Math.sin(game.time * 14);
    ctx.save();
    ctx.strokeStyle = 'rgba(87,232,143,.9)'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(hp.x, hp.y, 34 * pulse, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.65)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(hp.x, hp.y, 40 * pulse, 0, Math.PI * 2); ctx.stroke();
    if (rope) {
      const ra = game.world.anchors.find(a => a.id === rope.anchorId);
      if (ra) {
        ctx.strokeStyle = 'rgba(87,232,143,.95)'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(ra.x, ra.y, 20, 0, Math.PI * 2); ctx.stroke();
      }
    }
    ctx.restore();
  }

  const p = st.player;
  const speed = Math.hypot(p.vx, p.vy);
  let poseOpts;
  if (game.state === 'clearing') {
    poseOpts = { pose: 'super', angle: Math.max(-0.9, Math.min(0.5, Math.atan2(p.vy, Math.max(200, Math.abs(p.vx))))), stretch: 0.3 };
  } else if (rope) {
    const ang = Math.atan2(p.y - rope.y, p.x - rope.x) - Math.PI / 2;
    poseOpts = { pose: 'swing', angle: ang, curl: Math.min(1, speed / 900), stretch: Math.min(1, speed / 1100) * 0.5 };
  } else if (st.grounded) {
    poseOpts = speed > 90 ? { pose: 'run', angle: 0 } : { pose: 'idle', angle: 0 };
  } else {
    const tilt = Math.atan2(p.vy, Math.max(60, Math.abs(p.vx))) * 0.25 * Math.sign(p.vx || 1);
    poseOpts = { pose: 'fly', angle: tilt, curl: 0.35, stretch: Math.min(1, speed / 1200) * 0.4 };
  }
  const pts = V.drawPlayer(ctx, Object.assign({
    x: p.x, y: p.y, time: game.time, facing: 1, colors: game.playerColors || COLORS, body: game.body,
  }, poseOpts));

  drawRope(rope, pts && pts.hand);
  game.particles.draw(ctx);
  ctx.restore();

  if (game.state === 'play') drawPadCues(L, cam);
  if (game.state === 'play') drawHUD();
}

/* ---------- boot ---------- */
applySkin();
resize();
(function boot() {
  const q = new URLSearchParams(location.search);
  const d = q.get('daily');
  if (d && /^\d{4}-\d{2}-\d{2}$/.test(d) && d <= dayKey()) {
    game.results = null;
    loadDaily(d);
    setState('intro');
  } else {
    loadLevel(store.level - 1);
    setState('menu');
  }
})();
requestAnimationFrame(frame);

// Only the main menu is disposable. Intro, pause and results stay untouched.
window.GamesUpdate?.setSafeToReload(() => game.state === 'menu' && !ui.charsel.classList.contains('show'));

/* ---------- QA hooks ---------- */
window.__game = {
  get state() { return game.state; },
  get world() { return game.world; },
  get levelIndex() { return game.levelIndex; },
  levels: LEVELS,
  startLevel, beginPlay, win, fail,
  startDaily, startEndless,
  perfectNow,
  get mode() { return game.mode; },
  get dailyKey() { return game.dailyKey; },
  get endlessDist() { return game.endlessDist; },
  get endlessSeed() { return game.endlessSeed; },
  get perfectStreak() { return game.perfectStreak; },
  get hookStreak() { return game.hookStreak; },
  get ghostData() { return game.ghostData; },
  get ghostRec() { return game.ghostRec; },
  get winds() { return game.world ? game.world.winds : []; },
  setHeld: b => { pointerHeld = !!b; game.world.setHeld(!!b); },
  renderFrame: () => render(),
  get runPts() { return game.runPts; },
  get zoom() { return game.zoom; },
  get theme() { return game.theme.name; },
  get weatherCount() { return game.weather.length; },
  get fruits() { return game.fruits; },
  totalPts: () => store.totalPts(),
  balance: () => store.balance(),
  totalStars: () => store.totalStars(),
  get taken() { return game.taken; },
  get bonusPts() { return game.bonusPts; },
  get combo() { return game.combo; },
  store: () => store,
  ptsOf: i => store.pts(i),
  get body() { return game.body; },
  setSkin: i => { store.skin = i; applySkin(); renderCharGrid(); },
};
})();

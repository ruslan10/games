/* Stickman Hook - game shell: state machine, rendering, HUD, input, audio.
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
  btnRestart: $('btn-restart'), btnLevels: $('btn-levels'),
  btnLevelsClose: $('btn-levels-close'), btnPauseLevels: $('btn-pause-levels'),
  btnPrevLv: $('btn-prev-lv'), btnNextLv: $('btn-next-lv'),
  menuLevel: $('menu-level'), introLevel: $('intro-level'), introName: $('intro-name'),
  introHint: $('intro-hint'), clearPct: $('clear-pct'), clearFill: $('clear-fill'),
  clearTitle: $('clear-title'), clearTime: $('clear-time'),
  clearStars: $('clear-stars'), skinToast: $('skin-toast'),
  charsel: $('charsel'), charGrid: $('char-grid'), btnChars: $('btn-chars'), btnCharsClose: $('btn-chars-close'),
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
};

/* ---------- unlockable hero skins (poki weekly-skins spirit) ----------
   Unlocks come from total fruit points now; `at` (level) and `oldStars`
   stay as grandfather rules so existing players never lose a skin. */
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
  { name: 'ארנב',   pts: 30,  at: 5,  body: 'rabbit', c: { hogBlue: '#cfd9e6', hogBlueD: '#93a5bb', hogBlueL: '#f2f6fb' } },
  { name: 'רובוט',  pts: 80,  at: 10, body: 'robot',  c: { hogBlue: '#9aa7b8', hogBlueD: '#5d6b80', hogBlueL: '#d3dce8' } },
  { name: 'נינג׳ה', pts: 150, at: 15, body: 'ninja',  c: { hogBlue: '#4a3f6b', hogBlueD: '#2d2547', hogBlueL: '#7a6aa8' } },
  { name: 'חתול',   pts: 250, at: 20, body: 'cat',    c: { hogBlue: '#f2b830', hogBlueD: '#cf9212', hogBlueL: '#ffe08a' } },
  { name: 'ציפור',  pts: 400, at: 25, body: 'bird',   c: { hogBlue: '#ff6ec7', hogBlueD: '#d14fa4', hogBlueL: '#ffc2e8' } },
  /* character skins (original art, palette-evoked), unlocked by total points */
  { name: 'גיבור על', pts: 120, oldStars: 10, body: 'super', c: { hogBlue: '#2456c8', hogBlueD: '#17389c', hogBlueL: '#6f9bf7' } },
  { name: 'שותף חלל', pts: 300, oldStars: 25, body: 'bean', c: { hogBlue: '#ff5a4e', hogBlueD: '#cf352b', hogBlueL: '#ffab9d' } },
  { name: 'שועל', pts: 550, oldStars: 45, body: 'fox', c: { hogBlue: '#ff9a2e', hogBlueD: '#d97308', hogBlueL: '#ffcf8a' } },
  { name: 'איכידנה', pts: 800, oldStars: 65, body: 'echidna', c: { hogBlue: '#e0303a', hogBlueD: '#a81822', hogBlueL: '#ff7a72' } },
];
function skinUnlocked(i) {
  const sk = SKINS[i];
  if (store.totalPts() >= (sk.pts || 0)) return true;
  if (sk.at && store.level >= sk.at) return true;
  if (sk.oldStars && store.totalStars() >= sk.oldStars) return true;
  return false;
}
function nextSkinGoal() {
  for (let i = 0; i < SKINS.length; i++) {
    if (!skinUnlocked(i) && SKINS[i].pts !== undefined) return SKINS[i];
  }
  return null;
}
function applySkin() {
  const i = skinUnlocked(store.skin) ? store.skin : 0;
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
function renderCharGrid() {
  ui.charGrid.innerHTML = '';
  SKINS.forEach((sk, i) => {
    const unlocked = skinUnlocked(i);
    const b = document.createElement('button');
    b.className = 'char-card' + (i === store.skin && unlocked ? ' sel' : '') + (unlocked ? '' : ' locked');
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
    if (!unlocked) {
      const req = document.createElement('div');
      req.className = 'char-req';
      req.textContent = sk.pts ? sk.pts + ' נק׳' : 'שלב ' + sk.at;
      b.appendChild(req);
    }
    b.title = sk.name + ' - ' + ABILITIES[sk.body || 'hog'] + (unlocked ? '' : ' (נפתח ב-' + (sk.pts || 0) + ' נקודות)');
    b.addEventListener('click', () => {
      if (!skinUnlocked(i)) return;
      store.skin = i; applySkin(); renderCharGrid(); sfx.click();
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
};

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
  pops: [],
  zoom: 1,              // finish-moment camera zoom (1 = normal)
  celebration: null,    // { t, wave2 } while 'clearing'
  rings: [],            // shockwave rings spawned at the finish instant
  body: 'hog',
  toastTimer: 0,
};

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
    anchors: L.anchors.map(a => ({ id: a.id, x: a.x, y: a.y })),
    pads: L.pads.map(p => ({ id: p.id, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2,
      boostX: p.boostX || 0, boostY: p.boostY || 0, minSpeed: p.minSpeed || 640 })),
  }, abil));
  const a = L.anchors.find(a => a.id === L.start.anchorId);
  const off = 130, dy = Math.sqrt(L.start.rope * L.start.rope - off * off);
  game.world.reset({ x: a.x - off, y: a.y + dy });
  game.world.attach(a.id);
  game.world.camera.x = a.x; game.world.camera.y = a.y + 260;
  game.levelStartX = a.x - 100;
  game.particles.clear();
  game.fruits = (L.fruits || []).map(f => ({ x: f.x, y: f.y, v: f.v, k: f.k, taken: false }));
  game.runPts = 0;
  game.pops = [];
  game.rings.length = 0; game.zoom = 1; game.celebration = null;
  game.catRescued = false;
}

function loadLevel(i) {
  game.levelIndex = Math.max(0, Math.min(i, LEVELS.length - 1));
  game.level = LEVELS[game.levelIndex];
  buildWorld();
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
  if (s === 'menu') {
    ui.menuLevel.textContent = 'שלב ' + store.level + ' / ' + LEVELS.length + '  •  ' + store.totalPts() + ' נקודות  •  ⭐ ' + Math.floor(store.totalPts() / 100);
    renderCharGrid();
    // celebrate the first newly-unlocked skin not yet announced
    for (let i = 1; i < SKINS.length; i++) {
      if (skinUnlocked(i) && !localStorage.getItem('sh_seen_skin_' + i)) {
        localStorage.setItem('sh_seen_skin_' + i, '1');
        ui.skinToast.textContent = '🎉 סקין חדש נפתח: ' + SKINS[i].name + '!';
        ui.skinToast.classList.add('show');
        clearTimeout(game.toastTimer);
        game.toastTimer = setTimeout(() => ui.skinToast.classList.remove('show'), 3400);
        break;
      }
    }
  }
  if (s === 'intro') {
    ui.introLevel.textContent = 'שלב ' + (game.levelIndex + 1) + ' / ' + LEVELS.length;
    ui.introName.textContent = game.level.name || '';
    ui.introHint.textContent = game.level.hint || '';
    ui.btnPrevLv.disabled = game.levelIndex <= 0;
    ui.btnNextLv.disabled = game.levelIndex + 1 > store.level - 1 || game.levelIndex >= LEVELS.length - 1;
  }
  if (s === 'clear') {
    const last = game.levelIndex >= LEVELS.length - 1;
    ui.clearTitle.textContent = last ? 'כל הכבוד! סיימת את כל השלבים!' : 'השלב הושלם!';
    ui.clearStars.innerHTML = '';
    const pt = document.createElement('span');
    pt.className = 'clear-star on';
    pt.textContent = '+' + game.runPts + ' נקודות';
    ui.clearStars.appendChild(pt);
    if (game.newPtsBest && game.runPts > 0) {
      const nb = document.createElement('div');
      nb.className = 'clear-newbest';
      nb.textContent = '🏆 שיא נקודות חדש בשלב!';
      ui.clearStars.appendChild(nb);
    }
    ui.btnNext.textContent = last ? 'שחקו שוב' : 'השלב הבא';
    const tot = store.totalPts();
    const goal = nextSkinGoal();
    ui.clearPct.textContent = 'סה"כ: ' + tot + ' נקודות  •  ⭐ ' + Math.floor(tot / 100);
    ui.clearTime.textContent = (game.lastTime
      ? 'זמן: ' + game.lastTime + 'שנ' + (game.newBest ? ' 🏆 שיא זמן!' : (store.best(game.levelIndex) ? ' | שיא: ' + store.best(game.levelIndex) + 'שנ' : ''))
      : '')
      + (goal ? '\nהיעד הבא: ' + goal.name + ' ב-' + goal.pts + ' נק׳ (חסרו ' + Math.max(0, goal.pts - tot) + ')' : '\nכל הדמויות נפתחו! 🎉');
    const fillTo = goal ? Math.max(4, Math.min(100, 100 * tot / goal.pts)) : 100;
    requestAnimationFrame(() => { ui.clearFill.style.width = fillTo + '%'; });
  }
}

function startLevel(i) {
  loadLevel(i);
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
  const prevBest = store.best(game.levelIndex);
  game.newBest = !prevBest || t < prevBest;
  if (game.newBest) store.setBest(game.levelIndex, Math.round(t * 10) / 10);
  game.lastTime = Math.round(t * 10) / 10;
  game.newPtsBest = game.runPts > store.pts(game.levelIndex);
  if (game.newPtsBest) store.setPts(game.levelIndex, game.runPts);
  if (game.levelIndex >= LEVELS.length - 1) store.done = true;
  store.level = Math.min(game.levelIndex + 2, LEVELS.length);
  store.pct = store.done ? 100 : Math.round(100 * (store.level - 1) / LEVELS.length);
  game.world.setHeld(false);
  // superman-style fly-off: launch the hero up and ahead, physics keeps
  // simulating through the clear celebration instead of freezing.
  const pl = game.world.player;
  const hero = game.body === 'super'; // גיבור על: longer, faster fly-off
  pl.vx = Math.max(pl.vx, hero ? 1000 : 760);
  pl.vy = Math.min(pl.vy, hero ? -1050 : -820);
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
    for (const a of game.level.anchors) if (a.x < p.x - 40 && (!best || a.x > best.x)) best = a;
    const a = best || game.level.anchors[0];
    game.world.setHeld(false);
    game.world.reset({ x: a.x - 60, y: a.y + 300 });
    game.world.attach(a.id);
    game.world.setHeld(true);
    game.pops.push({ x: a.x, y: a.y + 160, t: 0, txt: 'ניצלת!', col: '#a5f5a9' });
    game.shake = Math.max(game.shake, 6);
    sfx.jump && sfx.jump();
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
function releasePress() { if (!pointerHeld) return; pointerHeld = false; if (game.world) game.world.setHeld(false); }
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
ui.btnGo.addEventListener('click', beginPlay);
ui.btnNext.addEventListener('click', () => {
  sfx.click();
  const next = (game.levelIndex + 1) % LEVELS.length;
  startLevel(next);
});
ui.btnPause.addEventListener('click', () => { if (game.state === 'play') { setState('paused'); sfx.click(); } });
ui.btnResume.addEventListener('click', () => { if (game.state === 'paused') { setState('play'); sfx.click(); } });
ui.btnRestart.addEventListener('click', () => { sfx.click(); buildWorld(); setState('play'); });
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
ui.btnLevels.addEventListener('click', openLevelSel);
ui.btnPauseLevels.addEventListener('click', openLevelSel);
ui.btnLevelsClose.addEventListener('click', () => { ui.levelsel.classList.remove('show'); sfx.click(); });
ui.btnPrevLv.addEventListener('click', () => { if (game.levelIndex > 0) { sfx.click(); startLevel(game.levelIndex - 1); } });
ui.btnNextLv.addEventListener('click', () => {
  if (game.levelIndex + 1 <= store.level - 1 && game.levelIndex < LEVELS.length - 1) { sfx.click(); startLevel(game.levelIndex + 1); }
});

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

function drawPads(L) {
  for (const p of L.pads) {
    const w = p.x2 - p.x1, hh = p.y2 - p.y1;
    const len = Math.hypot(w, hh), ang = Math.atan2(hh, w);
    ctx.save();
    ctx.translate(p.x1, p.y1);
    ctx.rotate(ang);
    if (p.kind === 'tramp' || p.kind === 'trampV') {
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
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 4 * big; ctx.strokeStyle = 'rgba(36,31,58,.85)';
    const yy = p2.y - 24 - p2.t * 46;
    ctx.strokeText(p2.txt, p2.x, yy);
    ctx.fillStyle = p2.col;
    ctx.fillText(p2.txt, p2.x, yy);
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

function drawFinish(L) {
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
  const n = game.levelIndex + 1;
  const narrow = W < 600;
  const bw = Math.max(90, Math.min(170, W * 0.14)), bh = 10, bx = (W - bw) / 2, by = narrow ? 84 : 20;
  const p = game.world.player;
  const t = Math.max(0, Math.min(1, (p.x - game.levelStartX) / (game.level.finishX - game.levelStartX)));
  ctx.save();
  ctx.font = '700 14px Heebo, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(36,31,58,.35)';
  roundRect(bx, by, bw, bh, bh / 2); ctx.fill();
  ctx.fillStyle = '#ffffff';
  roundRect(bx + 3, by + 3, Math.max(bh - 6, (bw - 6) * t), bh - 6, (bh - 6) / 2); ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.fillText(String(n), bx - 22, by + bh / 2 + 1);
  ctx.fillText(String(n + 1), bx + bw + 26, by + bh / 2 + 1);
  // run points counter, top right (apple chip + total below)
  const sx = W - 34, sy = narrow ? 90 : 26;
  ctx.drawImage(fruitSprite('apple'), sx - 13, sy - 13, 26, 26);
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'right';
  ctx.font = '900 17px Heebo, sans-serif';
  ctx.fillText(String(game.runPts), sx - 20, sy + 1);
  ctx.font = '700 11px Heebo, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.75)';
  ctx.fillText('סה"כ ' + store.totalPts(), sx + 12, sy + 20);
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
    else if (ct < 0.30) game.zoom = 1 + 0.30 * eo((ct - 0.09) / 0.21);
    else if (ct < 0.80) game.zoom = 1.30;
    else if (ct < 1.10) game.zoom = 1.30 - 0.30 * eio((ct - 0.80) / 0.30);
    else game.zoom = 1;
    if (ct >= 0.4 && !game.celebration.wave2) {
      game.celebration.wave2 = true;
      const pl2 = game.world.player;
      game.particles.confetti(pl2.x, pl2.y - 110, { count: 60 });
    }
  }
  const playing = game.state === 'play' || game.state === 'clearing' || game.state === 'failing';
  if (playing) {
    game.world.update(game.state === 'play' || game.state === 'clearing' ? dt * tScale : 0);
    game.particles.update(dt * tScale);
    for (const r of game.rings) r.t += dt * tScale;
    game.rings = game.rings.filter(r => r.t < r.max);
    /* events -> juice */
    for (const ev of game.world.drainEvents()) {
      const p = game.world.player;
      if (ev.type === 'attach') { game.particles.attach(ev.x, ev.y, { count: 8 }); sfx.attach(); game.shake = Math.max(game.shake, 1.5); }
      else if (ev.type === 'release') { sfx.release(); }
      else if (ev.type === 'pad') { game.particles.land(p.x, p.y + 14, { count: 14 }); sfx.pad(); game.shake = Math.max(game.shake, 4); }
      else if (ev.type === 'jump') { game.particles.land(p.x, p.y + 12, { count: 10 }); }
    }
    /* motion trail: swinging fast or flying fast */
    const st = game.world.getState();
    const spd = Math.hypot(st.player.vx, st.player.vy);
    if ((st.rope && spd > 260) || spd > 520) {
      game.particles.trail(st.player.x, st.player.y, st.player.vx, st.player.vy, { count: 1 });
    }
    if (game.state === 'play') game.playTime += dt;
    game.shake *= Math.exp(-5 * dt);
    if (game.shake < 0.05) game.shake = 0;
    const p = game.world.player;
    for (const pop of game.pops) pop.t += dt * tScale;
    game.pops = game.pops.filter(pop => pop.t < 0.9);
    if (game.state === 'play') {
      const magnet = game.body === 'hog' ? 115 : 46;
      for (const f of game.fruits) {
        if (f.taken) continue;
        if (Math.hypot(f.x - p.x, f.y - p.y) < magnet) {
          f.taken = true;
          game.runPts += f.v;
          game.pops.push({ x: f.x, y: f.y, t: 0, txt: '+' + f.v, col: f.v >= 20 ? '#ff8a8a' : f.v >= 10 ? '#a5f5a9' : '#ffe08a' });
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
        buildWorld();
        game.state = 'play';
      }
    }
  }

  render();
}

function render() {
  const L = game.level;
  const st = game.world.getState();
  const cam = game.world.camera;

  V.drawBackground(ctx, { x: cam.x, y: cam.y, width: W, height: H, time: game.time, colors: COLORS });

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

  drawFinish(L);
  drawRings();
  drawPads(L);
  drawFruits();
  drawPops();

  const rope = st.rope;
  for (const a of L.anchors) {
    const d = Math.hypot(a.x - st.player.x, a.y - st.player.y);
    const inRange = d <= 390;
    V.drawAnchor(ctx, { x: a.x, y: a.y, inRange, active: !!(rope && rope.anchorId === a.id), time: game.time, colors: COLORS });
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
loadLevel(store.level - 1);
setState('menu');
requestAnimationFrame(frame);

/* ---------- QA hooks ---------- */
window.__game = {
  get state() { return game.state; },
  get world() { return game.world; },
  get levelIndex() { return game.levelIndex; },
  levels: LEVELS,
  startLevel, beginPlay, win, fail,
  setHeld: b => { pointerHeld = !!b; game.world.setHeld(!!b); },
  renderFrame: () => render(),
  get runPts() { return game.runPts; },
  get zoom() { return game.zoom; },
  get fruits() { return game.fruits; },
  totalPts: () => store.totalPts(),
  totalStars: () => store.totalStars(),
  ptsOf: i => store.pts(i),
  get body() { return game.body; },
  setSkin: i => { store.skin = i; applySkin(); renderCharGrid(); },
};
})();

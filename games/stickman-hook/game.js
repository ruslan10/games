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
  fail: $('failflash'),
  btnPlay: $('btn-play'), btnGo: $('btn-go'), btnNext: $('btn-next'),
  btnPause: $('btn-pause'), btnResume: $('btn-resume'), btnMute: $('btn-mute'),
  btnRestart: $('btn-restart'),
  menuLevel: $('menu-level'), introLevel: $('intro-level'), introName: $('intro-name'),
  introHint: $('intro-hint'), clearPct: $('clear-pct'), clearFill: $('clear-fill'),
  clearTitle: $('clear-title'),
};

/* ---------- persistent state ---------- */
const store = {
  get level() { return Math.min(+(localStorage.getItem('sh_level') || 1), LEVELS.length); },
  set level(v) { localStorage.setItem('sh_level', v); },
  get pct() { return +(localStorage.getItem('sh_pct') || 0); },
  set pct(v) { localStorage.setItem('sh_pct', Math.min(100, Math.round(v))); },
  get mute() { return localStorage.getItem('sh_mute') === '1'; },
  set mute(v) { localStorage.setItem('sh_mute', v ? '1' : '0'); },
};

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
};

function buildWorld() {
  const L = game.level;
  game.world = new P.World({
    assist: 240, assistSpeed: 900,
    anchors: L.anchors.map(a => ({ id: a.id, x: a.x, y: a.y })),
    pads: L.pads.map(p => ({ id: p.id, x1: p.x1, y1: p.y1, x2: p.x2, y2: p.y2,
      boostX: p.boostX || 0, boostY: p.boostY || 0, minSpeed: p.minSpeed || 640 })),
  });
  const a = L.anchors.find(a => a.id === L.start.anchorId);
  const off = 130, dy = Math.sqrt(L.start.rope * L.start.rope - off * off);
  game.world.reset({ x: a.x - off, y: a.y + dy });
  game.world.attach(a.id);
  game.world.camera.x = a.x; game.world.camera.y = a.y + 260;
  game.levelStartX = a.x - 100;
  game.particles.clear();
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
  ui.btnPause.style.display = (s === 'play') ? 'flex' : 'none';
  if (s === 'menu') {
    ui.menuLevel.textContent = 'שלב ' + store.level + ' / ' + LEVELS.length;
  }
  if (s === 'intro') {
    ui.introLevel.textContent = 'שלב ' + (game.levelIndex + 1) + ' / ' + LEVELS.length;
    ui.introName.textContent = game.level.name || '';
    ui.introHint.textContent = game.level.hint || '';
  }
  if (s === 'clear') {
    const last = game.levelIndex >= LEVELS.length - 1;
    ui.clearTitle.textContent = last ? 'כל הכבוד! סיימת את כל השלבים!' : 'השלב הושלם!';
    ui.btnNext.textContent = last ? 'שחקו שוב' : 'השלב הבא';
    ui.clearPct.textContent = store.pct + '%';
    requestAnimationFrame(() => { ui.clearFill.style.width = store.pct + '%'; });
  }
}

function startLevel(i) {
  loadLevel(i);
  setState('intro');
}

function beginPlay() { setState('play'); sfx.click(); }

function win() {
  if (game.state !== 'play') return;
  game.state = 'clearing';
  game.clearTimer = 1.1;
  const p = game.world.player;
  game.particles.confetti(p.x + 60, p.y - 120, { count: 90 });
  sfx.win();
  store.level = Math.min(game.levelIndex + 2, LEVELS.length);
  store.pct = store.pct + 20;
  game.world.setHeld(false);
}

function fail() {
  if (game.state !== 'play') return;
  game.state = 'failing';
  game.failTimer = 0.55;
  ui.fail.classList.add('show');
  sfx.fail();
  game.world.setHeld(false);
}

/* ---------- input ---------- */
let pointerHeld = false;
function press() { if (game.state !== 'play') return; pointerHeld = true; game.world.setHeld(true); }
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
    const w = p.x2 - p.x1;
    ctx.save();
    ctx.fillStyle = '#241f3a';
    roundRect(p.x1, p.y1 - 8, w, 26, 13); ctx.fill();
    ctx.fillStyle = '#ffffff';
    roundRect(p.x1 + 5, p.y1 - 8, w - 10, 7, 4); ctx.fill();
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
  const bw = Math.min(300, W * (narrow ? 0.52 : 0.42)), bh = 16, bx = (W - bw) / 2, by = narrow ? 84 : 20;
  const p = game.world.player;
  const t = Math.max(0, Math.min(1, (p.x - game.levelStartX) / (game.level.finishX - game.levelStartX)));
  ctx.save();
  ctx.font = '700 15px Heebo, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(36,31,58,.35)';
  roundRect(bx, by, bw, bh, bh / 2); ctx.fill();
  ctx.fillStyle = '#ffffff';
  roundRect(bx + 3, by + 3, Math.max(bh - 6, (bw - 6) * t), bh - 6, (bh - 6) / 2); ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.fillText(String(n), bx - 22, by + bh / 2 + 1);
  ctx.fillText(String(n + 1), bx + bw + 26, by + bh / 2 + 1);
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

  const playing = game.state === 'play' || game.state === 'clearing' || game.state === 'failing';
  if (playing) {
    game.world.update(game.state === 'play' ? dt : 0);
    game.particles.update(dt);
    /* events -> juice */
    for (const ev of game.world.drainEvents()) {
      const p = game.world.player;
      if (ev.type === 'attach') { game.particles.attach(ev.x, ev.y, { count: 8 }); sfx.attach(); }
      else if (ev.type === 'release') { sfx.release(); }
      else if (ev.type === 'pad') { game.particles.land(p.x, p.y + 14, { count: 14 }); sfx.pad(); }
    }
    /* swing trail */
    const st = game.world.getState();
    if (st.rope && Math.hypot(st.player.vx, st.player.vy) > 260) {
      game.particles.trail(st.player.x, st.player.y, { count: 1 });
    }
    const p = game.world.player;
    if (game.state === 'play') {
      if (p.x >= game.level.finishX) win();
      else if (p.y > game.level.killY) fail();
    } else if (game.state === 'clearing') {
      game.clearTimer -= dt;
      if (game.clearTimer <= 0) setState('clear');
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
  ctx.translate(W / 2 - cam.x, H / 2 - cam.y);

  drawFinish(L);
  drawPads(L);

  const rope = st.rope;
  for (const a of L.anchors) {
    const d = Math.hypot(a.x - st.player.x, a.y - st.player.y);
    const inRange = d <= 390;
    V.drawAnchor(ctx, { x: a.x, y: a.y, inRange, active: !!(rope && rope.anchorId === a.id), time: game.time, colors: COLORS });
  }

  const p = st.player;
  let poseOpts;
  if (rope) {
    const ang = Math.atan2(p.y - rope.y, p.x - rope.x) - Math.PI / 2;
    const speed = Math.hypot(p.vx, p.vy);
    poseOpts = { pose: 'swing', angle: ang, curl: Math.min(1, speed / 900), stretch: Math.min(1, speed / 1100) * 0.5 };
  } else {
    const tilt = Math.atan2(p.vy, Math.max(60, Math.abs(p.vx))) * 0.25 * Math.sign(p.vx || 1);
    poseOpts = { pose: 'fly', angle: tilt, curl: 0.35, stretch: Math.min(1, Math.hypot(p.vx, p.vy) / 1200) * 0.4 };
  }
  const pts = V.drawPlayer(ctx, Object.assign({
    x: p.x, y: p.y, time: game.time, facing: 1, colors: COLORS,
  }, poseOpts));

  drawRope(rope, pts && pts.hand);
  game.particles.draw(ctx);
  ctx.restore();

  if (game.state === 'play') drawHUD();
}

/* ---------- boot ---------- */
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
};
})();

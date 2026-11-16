/* stickman - level definitions (original layouts, poki-style pacing).
   World units: px, y down. Player radius 15. catchRadius 390, maxRope 420.
   anchors: {id,x,y}  pads: bouncy bars {id,x1,y1,x2,y2,restitution?,minSpeed?,boostX?,boostY?}
   Long low pads act as the segmented "ground bars" from the original - they catch
   a failed swing and bounce the player back into play.
   start: player begins hanging from start.anchorId with rope length start.rope.
   finishX: player.x past it wins. killY: player.y past it fails. */
window.StickmanLevels = [
  {
    name: 'צעד ראשון',
    hint: 'החזיקו כדי להיתפס לוו, שחררו כדי לעוף',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 330, y: 170 },
      { id: 'a2', x: 720, y: 205 },
    ],
    pads: [
      { id: 'p1', x1: 260, y1: 640, x2: 400, y2: 640, boostX: 320, minSpeed: 800 },
      { id: 'g1', x1: 480, y1: 720, x2: 1230, y2: 720, boostX: 220, minSpeed: 700 },
      { id: 's1', kind: 'slide', x1: 880, y1: 642, x2: 1040, y2: 700, boostX: 150, minSpeed: 800 },
      { id: 'b1', kind: 'bump', x1: 1180, y1: 700, x2: 1232, y2: 700, boostX: 150, boostY: -320, minSpeed: 780 },
    ],
        fruits: [
      { x: 520, y: 350, v: 5, k: 'apple' },
      { x: 760, y: 430, v: 5, k: 'orange' },
      { x: 980, y: 380, v: 5, k: 'banana' },
      { x: 1160, y: 250, v: 10, k: 'melon' },
      { x: 1290, y: 350, v: 5, k: 'apple' },
    ],
    finishX: 1400, killY: 1050,
  },
  {
    name: 'נדנוד כפול',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 170 },
      { id: 'a2', x: 680, y: 220 },
      { id: 'a3', x: 1060, y: 180 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 330, minSpeed: 810 },
      { id: 'g1', x1: 450, y1: 720, x2: 1300, y2: 720, boostX: 230, minSpeed: 700 },
      { id: 's1', kind: 'slide', x1: 760, y1: 642, x2: 920, y2: 700, boostX: 150, minSpeed: 800 },
      { id: 'b1', kind: 'bump', x1: 1120, y1: 700, x2: 1174, y2: 700, boostX: 150, boostY: -320, minSpeed: 780 },
    ],
        fruits: [
      { x: 490, y: 330, v: 5, k: 'banana' },
      { x: 700, y: 480, v: 5, k: 'apple' },
      { x: 870, y: 340, v: 5, k: 'orange' },
      { x: 1060, y: 120, v: 10, k: 'melon' },
      { x: 1260, y: 250, v: 5, k: 'banana' },
      { x: 1150, y: 600, v: 20, k: 'cherry' },
    ],
    finishX: 1460, killY: 1050,
  },
  {
    name: 'קפיצת הבטחון',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 180 },
      { id: 'a2', x: 690, y: 240 },
      { id: 'a3', x: 1070, y: 190 },
      { id: 'a4', x: 1450, y: 230 },
      { id: 'a5', x: 1810, y: 180 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 340, minSpeed: 820 },
      { id: 'p2', x1: 800, y1: 700, x2: 930, y2: 700, boostX: 280, minSpeed: 780 },
      { id: 'g1', x1: 430, y1: 730, x2: 720, y2: 730, boostX: 230, minSpeed: 700 },
      { id: 'g2', x1: 1130, y1: 730, x2: 1420, y2: 730, boostX: 230, minSpeed: 700 },
      { id: 'g3', x1: 1500, y1: 730, x2: 1740, y2: 730, boostX: 230, minSpeed: 700 },
    ],
        fruits: [
      { x: 520, y: 120, v: 10, k: 'melon' },
      { x: 700, y: 400, v: 5, k: 'apple' },
      { x: 880, y: 420, v: 5, k: 'orange' },
      { x: 1260, y: 300, v: 5, k: 'banana' },
      { x: 1450, y: 130, v: 10, k: 'melon' },
      { x: 1630, y: 330, v: 5, k: 'apple' },
      { x: 1000, y: 620, v: 20, k: 'cherry' },
    ],
    finishX: 2040, killY: 1100,
  },
  {
    name: 'עליות וירידות',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 200 },
      { id: 'a2', x: 680, y: 290 },
      { id: 'a3', x: 1050, y: 170 },
      { id: 'a4', x: 1420, y: 250 },
      { id: 'a5', x: 1790, y: 180 },
      { id: 'a6', x: 2160, y: 260 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 650, x2: 370, y2: 650, boostX: 340, minSpeed: 820 },
      { id: 'g1', x1: 760, y1: 730, x2: 1000, y2: 730, boostX: 240, minSpeed: 720 },
      { id: 'g2', x1: 1150, y1: 730, x2: 1360, y2: 730, boostX: 240, minSpeed: 720 },
      { id: 'g3', x1: 1520, y1: 730, x2: 1730, y2: 730, boostX: 240, minSpeed: 720 },
      { id: 'g4', x1: 1900, y1: 730, x2: 2120, y2: 730, boostX: 240, minSpeed: 720 },
    ],
        fruits: [
      { x: 500, y: 420, v: 5, k: 'orange' },
      { x: 840, y: 120, v: 10, k: 'melon' },
      { x: 1050, y: 400, v: 5, k: 'apple' },
      { x: 1240, y: 400, v: 5, k: 'banana' },
      { x: 1600, y: 380, v: 5, k: 'orange' },
      { x: 1970, y: 130, v: 10, k: 'melon' },
      { x: 1420, y: 620, v: 20, k: 'cherry' },
      { x: 2300, y: 400, v: 5, k: 'banana' },
    ],
    finishX: 2520, killY: 1100,
  },
  {
    name: 'המעבר הצר',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 190 },
      { id: 'a2', x: 690, y: 150 },
      { id: 'a3', x: 1070, y: 290 },
      { id: 'a4', x: 1440, y: 170 },
      { id: 'a5', x: 1810, y: 150 },
      { id: 'a6', x: 2180, y: 240 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 350, minSpeed: 830 },
      { id: 'p2', x1: 1180, y1: 730, x2: 1310, y2: 730, boostX: 300, minSpeed: 780 },
      { id: 'g1', x1: 450, y1: 740, x2: 700, y2: 740, boostX: 230, minSpeed: 700 },
      { id: 'g2', x1: 1550, y1: 740, x2: 1760, y2: 740, boostX: 230, minSpeed: 700 },
      { id: 'g3', x1: 1920, y1: 740, x2: 2130, y2: 740, boostX: 230, minSpeed: 700 },
    ],
        fruits: [
      { x: 500, y: 350, v: 5, k: 'apple' },
      { x: 880, y: 120, v: 10, k: 'melon' },
      { x: 1070, y: 440, v: 5, k: 'banana' },
      { x: 1260, y: 420, v: 5, k: 'orange' },
      { x: 1630, y: 350, v: 5, k: 'apple' },
      { x: 1810, y: 110, v: 10, k: 'melon' },
      { x: 1990, y: 120, v: 10, k: 'melon' },
      { x: 1440, y: 630, v: 20, k: 'cherry' },
      { x: 2300, y: 380, v: 5, k: 'banana' },
    ],
    finishX: 2560, killY: 1120,
  },
];

/* Levels 9-30 are generated below with escalating difficulty:
   longer chains, wider anchor gaps, bigger height swings, fewer safety nets. */
function buildLevel(name, hint, o) {
  const y0 = o.y0 || 180;
  const anchors = [{ id: 'a1', x: 300, y: y0 }];
  let x = 300;
  for (let k = 1; k < o.n; k++) {
    let g = o.gap[0] + (o.gap[1] - o.gap[0]) * (o.n === 1 ? 0 : (k - 1) / (o.n - 1));
    let dyv = o.dys[(k - 1) % o.dys.length] * o.amp;
    if (dyv < 0) {
      if (k === 1) dyv *= 0.6; // the opening hop stays makeable while the pump is cold
      dyv = Math.max(dyv, -(60 + (o.assist || 240) * 0.3)); // weaker assist -> lower rise cap
      g += dyv * 0.55; // shorten the gap when the next anchor sits higher
    }
    g = Math.max(330, Math.min(470, g));
    x += g;
    const y = y0 + dyv;
    anchors.push({ id: 'a' + (k + 1), x: Math.round(x), y: Math.round(y) });
  }
  const lastX = anchors[anchors.length - 1].x;
  const padY = o.padY || 650;
  const pads = [{ id: 'p1', x1: 230, y1: padY, x2: 370, y2: padY, boostX: o.launch || 360, minSpeed: 850 }];
  if (o.nets === 'full') {
    pads.push({ id: 'g1', x1: 450, y1: 735, x2: Math.round(lastX) - 40, y2: 735, boostX: 240, minSpeed: 710 });
    for (let bx = 800; bx < lastX - 200; bx += 900) {
      pads.push({ id: 'fb' + bx, kind: 'bump', x1: bx, y1: 706, x2: bx + 52, y2: 706, boostX: 150, boostY: -320, minSpeed: 780 });
    }
  } else if (o.nets === 'seg') {
    for (let k = 0; k < anchors.length - 1; k += 2) {
      const ax = anchors[k].x + 120;
      const bx = anchors[Math.min(k + 1, anchors.length - 1)].x + 60;
      pads.push({ id: 'g' + k, x1: Math.round(ax), y1: 740, x2: Math.round(bx), y2: 740, boostX: 230, minSpeed: 700 });
      const mx = (ax + bx) / 2;
      pads.push({ id: 's' + k, kind: k % 4 === 0 ? 'slide' : 'bump',
        x1: Math.round(k % 4 === 0 ? mx - 75 : mx), y1: Math.round(k % 4 === 0 ? 704 : 728),
        x2: Math.round(k % 4 === 0 ? mx + 75 : mx + 50), y2: Math.round(k % 4 === 0 ? 738 : 728),
        boostX: 150, boostY: k % 4 === 0 ? 0 : -310, minSpeed: 780 });
    }
  } else if (o.nets === 'sparse') {
    for (let k = 1; k < anchors.length; k += 2) {
      const cx = anchors[k].x, cy = 745;
      if (k % 4 === 1) {
        pads.push({ id: 'g' + k, x1: Math.round(cx - 65), y1: cy, x2: Math.round(cx + 65), y2: cy, boostX: 280, minSpeed: 760 });
      } else if (k % 4 === 3) {
        pads.push({ id: 'g' + k, kind: 'slide', x1: Math.round(cx - 80), y1: Math.round(cy - 32),
          x2: Math.round(cx + 80), y2: Math.round(cy), boostX: 150, minSpeed: 800 });
      } else if (k % 4 === 0) {
        pads.push({ id: 'g' + k, kind: 'bump', x1: Math.round(cx), y1: Math.round(cy + 6),
          x2: Math.round(cx + 52), y2: Math.round(cy + 6), boostX: 150, boostY: -320, minSpeed: 780 });
      } else {
        const hw = 68;
        pads.push({ id: 'g' + k, kind: 'tramp', x1: Math.round(cx - hw), y1: Math.round(cy),
          x2: Math.round(cx + hw), y2: Math.round(cy), boostX: 220, boostY: -700, minSpeed: 840 });
      }
    }
  } else if (o.nets === 'tramp') {
    // Spring trampolines as the only recovery, in five shapes: tilted pads,
    // V-shaped ramp pairs, square box tramps, curved slide launchers (מגלשה)
    // that fling you forward-up, and round balloon bumpers (pinball bounce).
    const every = o.trampEvery || 1;
    for (let k = 2; k < anchors.length; k += every) {
      const cx = anchors[k].x, cy = 748;
      const shape = k % 5;
      if (shape === 4) {
        // V: two angled ramps meeting low at the center - bounces you up-middle
        const hw = 88, rise = 46;
        pads.push({ id: 't' + k + 'a', kind: 'trampV', x1: Math.round(cx - hw), y1: Math.round(cy - rise),
          x2: Math.round(cx), y2: Math.round(cy + 12), boostX: 60, boostY: -760, minSpeed: 880 });
        pads.push({ id: 't' + k + 'b', kind: 'trampV', x1: Math.round(cx), y1: Math.round(cy + 12),
          x2: Math.round(cx + hw), y2: Math.round(cy - rise), boostX: 60, boostY: -760, minSpeed: 880 });
      } else if (shape === 1) {
        // box: square trampoline block with a springy red top
        pads.push({ id: 't' + k, kind: 'trampBox', x1: Math.round(cx - 70), y1: Math.round(cy),
          x2: Math.round(cx + 70), y2: Math.round(cy), boostX: 120, boostY: -740, minSpeed: 880 });
      } else if (shape === 0) {
        // slide: curved chute, entry high-left, exit low-right, launches forward-up
        pads.push({ id: 't' + k, kind: 'slide', x1: Math.round(cx - 85), y1: Math.round(cy - 36),
          x2: Math.round(cx + 85), y2: Math.round(cy + 2), boostX: 150, minSpeed: 820 });
      } else if (shape === 2) {
        // bump: round floating balloon bumper (center, radius via x2)
        pads.push({ id: 't' + k, kind: 'bump', x1: Math.round(cx), y1: Math.round(cy + 8),
          x2: Math.round(cx + 56), y2: Math.round(cy + 8), boostX: 150, boostY: -330, minSpeed: 800 });
      } else {
        const tilt = (k % 10 === 3 ? -0.26 : 0.26);
        const hw = 72;
        pads.push({ id: 't' + k, kind: 'tramp',
          x1: Math.round(cx - hw * Math.cos(tilt)), y1: Math.round(cy - hw * Math.sin(tilt)),
          x2: Math.round(cx + hw * Math.cos(tilt)), y2: Math.round(cy + hw * Math.sin(tilt)),
          boostX: 220, boostY: -720, minSpeed: 880 });
      }
    }
  }
  /* keep bounce pads out of the swing band: any pad under an anchor must sit
     below that anchor's lowest possible swing point (rope 420 + radius + slack),
     so mid-swing arcs never clip a trampoline - pads only catch real falls. */
  const ropeMax = 420, slack = 45;
  for (const pd of pads) {
    if (pd.id === 'p1') continue;
    const isBump = pd.kind === 'bump';
    const r = isBump ? Math.hypot(pd.x2 - pd.x1, pd.y2 - pd.y1) : 0;
    const topY = Math.min(pd.y1, pd.y2) - (isBump ? r : 0);
    const loX = Math.min(pd.x1, pd.x2) - r, hiX = Math.max(pd.x1, pd.x2) + r;
    let need = 0;
    for (const a of anchors) {
      if (a.x > loX - ropeMax * 0.55 && a.x < hiX + ropeMax * 0.55) {
        need = Math.max(need, a.y + ropeMax + slack);
      }
    }
    if (need > topY) {
      const shift = need - topY;
      pd.y1 += shift; pd.y2 += shift;
    }
  }
  if (o.nets === 'none' && !o.pure) {
    // no safety net by design - but one playful bounce mid-run keeps it fair
    const mx = Math.round(lastX * 0.45);
    if (o.n % 2 === 0) {
      pads.push({ id: 'nb', kind: 'bump', x1: mx, y1: 706, x2: mx + 54, y2: 706, boostX: 150, boostY: -330, minSpeed: 800 });
    } else {
      pads.push({ id: 'ns', kind: 'slide', x1: mx - 80, y1: 668, x2: mx + 80, y2: 712, boostX: 160, minSpeed: 820 });
    }
  }
  (o.boosts || []).forEach((b, j) => {
    const ax = anchors[b[0]].x + 140;
    pads.push({ id: 'b' + j, x1: Math.round(ax), y1: 700, x2: Math.round(ax + 130), y2: 700, boostX: b[1] || 330, minSpeed: 800 });
  });
  // Collectible fruits, one per anchor gap, values scaled by risk:
  // 5pt fruit on the natural arc, 10pt melons on high floats,
  // 20pt cherries on dangerous low dives near the kill line.
  const fruits = [];
  const lowK = ['apple', 'orange', 'banana'];
  for (let k = 1; k < anchors.length; k++) {
    const a = anchors[k - 1], b = anchors[k];
    const mx = (a.x + b.x) / 2;
    const g = (k - 1) % 4;
    let fy, v, kind;
    if (g === 1) { fy = Math.max(40, Math.min(a.y, b.y) - 130); v = 10; kind = 'melon'; }
    else if (g === 3) { fy = Math.max(a.y, b.y) + 330; v = 20; kind = 'cherry'; }
    else if (g === 2) { fy = (a.y + b.y) / 2 + 210; v = 5; kind = lowK[k % 3]; }
    else { fy = (a.y + b.y) / 2 + 120; v = 5; kind = lowK[k % 3]; }
    fruits.push({ x: Math.round(mx), y: Math.round(fy), v: v, k: kind });
  }
  return { name: name, hint: hint || '', start: { anchorId: 'a1', rope: o.rope || 360 }, assist: o.assist || 240,
    anchors: anchors, pads: pads, fruits: fruits, finishX: Math.round(lastX + 180 + (o.fin || 0)), killY: o.killY || 1000 };
}

/* every level is at least 40% longer than the first release: generated levels
   get 1.5x the hooks; the five hand-built openers are rebuilt below (60%-100% longer). */
function buildLevelLong(name, hint, o) {
  return buildLevel(name, hint, Object.assign({}, o, { n: Math.round(o.n * 1.5) }));
}

/* Wall trampolines (the level obstacles): red spring walls that hang from the
   ceiling, spring plates attached under the ceiling, and posts that stand on
   the ground. They bounce the hero BACK / DOWN, so the route is to stay low or
   release early. Pads use explicit normals; 'trampWall'/'trampCeil' kinds. */
function addObstacles(L, idx) {
  if (idx < 2) return L;
  const A = L.anchors, out = [];
  const dense = idx >= 8;
  for (let k = 1; k < A.length - 1; k++) {
    const a = A[k], b = A[k + 1];
    const mx = Math.round((a.x + b.x) / 2), top = Math.min(a.y, b.y);
    const pat = (k + idx) % 4;
    if (!dense && k % 2 === 0) continue;
    if (pat === 0) {
      // wall hanging from the ceiling: face looks backward (-x)
      out.push({ id: 'ow' + k, kind: 'trampWall', x1: mx, y1: top + 190, x2: mx, y2: -420,
        restitution: 0.9, minSpeed: 430, boostX: 0, boostY: 0 });
    } else if (pat === 1) {
      // plate under the ceiling: bounces the hero down
      out.push({ id: 'oc' + k, kind: 'trampCeil', x1: mx + 130, y1: top - 20, x2: mx - 130, y2: top - 20,
        restitution: 0.9, minSpeed: 320, boostX: 0, boostY: 0 });
    } else if (pat === 3 && idx >= 8 && k % 4 === 3) {
      // post standing from the ground: slanted face kicks back and up
      out.push({ id: 'op' + k, kind: 'trampWall', x1: mx, y1: 1200, x2: mx, y2: top + 500,
        nx: -0.8, ny: -0.6, restitution: 0.9, minSpeed: 520, boostX: 0, boostY: 0 });
    }
  }
  L.pads = L.pads.concat(out);
  return L;
}

const GENERATED = [
  buildLevelLong('מאזניים', '', { n: 8, gap: [408, 425], dys: [-1, 1], amp: 105, nets: 'sparse', assist: 220, killY: 1010 }),
  buildLevelLong('קפיצת טרמפולינה', 'טרמפולינות אדומות מקפיצות חזק!', { n: 8, gap: [410, 428], dys: [1, -1, 0.8], amp: 108, nets: 'tramp', assist: 220, killY: 1010 }),
  buildLevelLong('צד שני', '', { n: 8, gap: [412, 430], dys: [-1, 1, -1], amp: 110, nets: 'tramp', assist: 220, killY: 1000 }),
  buildLevelLong('עולים בקצב', '', { n: 10, gap: [412, 428], dys: [1, -1], amp: 105, nets: 'sparse', assist: 210, killY: 1000 }),
  buildLevelLong('גלים', '', { n: 8, gap: [415, 432], dys: [-1, 1, 1], amp: 112, nets: 'tramp', assist: 210, killY: 990 }),
  buildLevelLong('מדרגות', '', { n: 10, gap: [415, 430], dys: [1, 0, -1], amp: 115, nets: 'tramp', assist: 200, killY: 990 }),
  buildLevelLong('זיגזג', '', { n: 10, gap: [418, 435], dys: [-1, 1, -1, 1], amp: 118, nets: 'tramp', assist: 200, killY: 980 }),
  buildLevelLong('שרשרת', '', { n: 10, gap: [418, 432], dys: [1, -1], amp: 115, nets: 'sparse', assist: 200, killY: 980 }),
  buildLevelLong('קפיצות דיוק', '', { n: 10, gap: [420, 438], dys: [0, 1, -1, 1], amp: 120, nets: 'tramp', assist: 190, killY: 970 }),
  buildLevelLong('חצי הדרך', 'רשת הביטחון? כבר לא', { n: 10, gap: [422, 440], dys: [-1, 1, 1, -1], amp: 122, nets: 'tramp', assist: 190, killY: 970 }),
  buildLevelLong('נדנדות גבוהות', '', { n: 11, gap: [420, 435], dys: [1, -0.5, -1, 0.5], amp: 125, nets: 'tramp', assist: 180, killY: 960 }),
  buildLevelLong('זרימה', '', { n: 11, gap: [422, 438], dys: [-1, 1, -0.7, 0.7], amp: 125, nets: 'none', assist: 180, killY: 950 }),
  buildLevelLong('שבעה ווים', '', { n: 11, gap: [422, 440], dys: [1, -1, 1, -1], amp: 128, nets: 'tramp', assist: 180, killY: 950 }),
  buildLevelLong('טירוף מתון', '', { n: 11, gap: [425, 442], dys: [-1, 0.5, 1, -0.5], amp: 130, nets: 'none', assist: 180, killY: 940 }),
  buildLevelLong('בלי רשת', 'מכאן - בלי רשת ביטחון. רק אתם והווים', { n: 11, gap: [425, 445], dys: [1, -1, 0.8, -0.8], amp: 130, nets: 'none', assist: 180, killY: 940 }),
  buildLevelLong('אמיצים בלבד', '', { n: 13, gap: [425, 442], dys: [-1, 1, 1, -1, 0.6], amp: 132, nets: 'tramp', assist: 180, killY: 940 }),
  buildLevelLong('מהירות שיא', '', { n: 13, gap: [428, 445], dys: [0.7, -1, 1, -0.7], amp: 135, nets: 'none', assist: 180, killY: 930 }),
  buildLevelLong('מרתון ווים', '', { n: 13, gap: [428, 442], dys: [1, -1, -1, 1], amp: 130, nets: 'tramp', assist: 180, killY: 930 }),
  buildLevelLong('דיוק קטלני', '', { n: 13, gap: [430, 448], dys: [-1, 1, 0.6, -0.6, 1], amp: 138, nets: 'none', assist: 180, killY: 920 }),
  buildLevelLong('זהב באופק', '', { n: 13, gap: [430, 445], dys: [1, -0.8, 0.8, -1], amp: 140, nets: 'none', assist: 180, killY: 920 }),
  buildLevelLong('סופה', '', { n: 14, gap: [428, 448], dys: [-1, 1, -1, 1, 0.5], amp: 140, nets: 'none', assist: 180, killY: 910 }),
  buildLevelLong('ברק', '', { n: 14, gap: [430, 450], dys: [0.8, -1, 1, -0.8, -1], amp: 142, nets: 'tramp', assist: 180, killY: 910 }),
  buildLevelLong('סופת ווים', '', { pure: true, n: 14, gap: [432, 450], dys: [-1, 0.9, -0.9, 1], amp: 145, nets: 'none', assist: 180, killY: 900 }),
  buildLevelLong('כמעט שם', '', { pure: true, n: 14, gap: [432, 452], dys: [1, -1, 0.7, -0.7, 1, -1], amp: 148, nets: 'none', assist: 180, killY: 900 }),
  buildLevelLong('האליפות הגדולה', 'השלב האחרון. תנו הכל!', { pure: true, n: 16, gap: [430, 452], dys: [-1, 1, -1, 1, -1, 1], amp: 150, nets: 'none', assist: 180, killY: 890, fin: 60 }),
];

window.StickmanLevels = window.StickmanLevels.concat(GENERATED);
/* opening levels: rebuilt long (originals ended at x=1400..2560) */
const OPENERS = [
  [0, { n: 6, gap: [385, 400], dys: [0.4, -0.3, 0.5], amp: 60, nets: 'full', assist: 240, killY: 1050 }],
  [1, { n: 7, gap: [385, 405], dys: [0.5, -0.4, 0.6], amp: 70, nets: 'full', assist: 240, killY: 1050 }],
  [2, { n: 8, gap: [390, 410], dys: [0.6, -0.5, 0.7], amp: 80, nets: 'full', assist: 240, killY: 1100 }],
  [3, { n: 9, gap: [395, 415], dys: [0.7, -0.6, 0.8, -0.7], amp: 90, nets: 'full', assist: 240, killY: 1100 }],
  [4, { n: 10, gap: [400, 420], dys: [-0.7, 0.8, -0.7, 0.9], amp: 95, nets: 'full', assist: 230, killY: 1120 }],
];
for (const [i, o] of OPENERS) {
  const old = window.StickmanLevels[i];
  const n = buildLevel(old.name, old.hint, o);
  window.StickmanLevels[i] = n;
}
window.StickmanLevels.forEach((L, i) => addObstacles(L, i));

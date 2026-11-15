/* Stickman Hook - level definitions (original layouts, poki-style pacing).
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
    ],
    pads: [
      { id: 'p1', x1: 260, y1: 640, x2: 400, y2: 640, boostX: 320, minSpeed: 800 },
      { id: 'g1', x1: 480, y1: 720, x2: 860, y2: 720, boostX: 220, minSpeed: 700 },
    ],
    finishX: 900, killY: 1050,
  },
  {
    name: 'נדנוד כפול',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 170 },
      { id: 'a2', x: 680, y: 220 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 330, minSpeed: 810 },
      { id: 'g1', x1: 450, y1: 720, x2: 850, y2: 720, boostX: 230, minSpeed: 700 },
    ],
    finishX: 940, killY: 1050,
  },
  {
    name: 'קפיצת הבטחון',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 180 },
      { id: 'a2', x: 690, y: 240 },
      { id: 'a3', x: 1070, y: 190 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 340, minSpeed: 820 },
      { id: 'p2', x1: 800, y1: 700, x2: 930, y2: 700, boostX: 280, minSpeed: 780 },
      { id: 'g1', x1: 430, y1: 730, x2: 720, y2: 730, boostX: 230, minSpeed: 700 },
    ],
    finishX: 1290, killY: 1100,
  },
  {
    name: 'עליות וירידות',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 200 },
      { id: 'a2', x: 680, y: 290 },
      { id: 'a3', x: 1050, y: 170 },
      { id: 'a4', x: 1420, y: 250 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 650, x2: 370, y2: 650, boostX: 340, minSpeed: 820 },
      { id: 'g1', x1: 760, y1: 730, x2: 1000, y2: 730, boostX: 240, minSpeed: 720 },
      { id: 'g2', x1: 1150, y1: 730, x2: 1360, y2: 730, boostX: 240, minSpeed: 720 },
    ],
    finishX: 1620, killY: 1100,
  },
  {
    name: 'המעבר הצר',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 190 },
      { id: 'a2', x: 690, y: 150 },
      { id: 'a3', x: 1070, y: 290 },
      { id: 'a4', x: 1440, y: 170 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 350, minSpeed: 830 },
      { id: 'p2', x1: 1180, y1: 730, x2: 1310, y2: 730, boostX: 300, minSpeed: 780 },
      { id: 'g1', x1: 450, y1: 740, x2: 700, y2: 740, boostX: 230, minSpeed: 700 },
    ],
    finishX: 1660, killY: 1120,
  },
  {
    name: 'ריצת הווים',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 180 },
      { id: 'a2', x: 660, y: 230 },
      { id: 'a3', x: 1020, y: 170 },
      { id: 'a4', x: 1380, y: 230 },
      { id: 'a5', x: 1740, y: 180 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 360, minSpeed: 840 },
      { id: 'g1', x1: 480, y1: 730, x2: 820, y2: 730, boostX: 240, minSpeed: 710 },
      { id: 'g2', x1: 1100, y1: 730, x2: 1440, y2: 730, boostX: 240, minSpeed: 710 },
    ],
    finishX: 1960, killY: 1100,
  },
  {
    name: 'בלי רשת ביטחון',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 200 },
      { id: 'a2', x: 730, y: 260 },
      { id: 'a3', x: 1160, y: 150 },
      { id: 'a4', x: 1590, y: 250 },
      { id: 'a5', x: 1990, y: 180 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 660, x2: 370, y2: 660, boostX: 360, minSpeed: 840 },
    ],
    finishX: 2200, killY: 1030,
  },
  {
    name: 'הגמר הגדול',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 300, y: 180 },
      { id: 'a2', x: 670, y: 270 },
      { id: 'a3', x: 1040, y: 160 },
      { id: 'a4', x: 1410, y: 280 },
      { id: 'a5', x: 1780, y: 150 },
      { id: 'a6', x: 2150, y: 260 },
      { id: 'a7', x: 2500, y: 170 },
    ],
    pads: [
      { id: 'p1', x1: 230, y1: 640, x2: 370, y2: 640, boostX: 380, minSpeed: 860 },
      { id: 'g1', x1: 500, y1: 740, x2: 840, y2: 740, boostX: 250, minSpeed: 720 },
      { id: 'p2', x1: 1160, y1: 730, x2: 1290, y2: 730, boostX: 330, minSpeed: 800 },
      { id: 'g2', x1: 1500, y1: 740, x2: 1840, y2: 740, boostX: 250, minSpeed: 720 },
      { id: 'p3', x1: 2280, y1: 730, x2: 2410, y2: 730, boostX: 330, minSpeed: 800 },
    ],
    finishX: 2720, killY: 1150,
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
    const dyv = o.dys[(k - 1) % o.dys.length] * o.amp;
    if (dyv < 0) g += dyv * 0.55; // shorten the gap when the next anchor sits higher
    g = Math.max(330, Math.min(430, g));
    x += g;
    const y = y0 + dyv;
    anchors.push({ id: 'a' + (k + 1), x: Math.round(x), y: Math.round(y) });
  }
  const lastX = anchors[anchors.length - 1].x;
  const padY = o.padY || 650;
  const pads = [{ id: 'p1', x1: 230, y1: padY, x2: 370, y2: padY, boostX: o.launch || 360, minSpeed: 850 }];
  if (o.nets === 'full') {
    pads.push({ id: 'g1', x1: 450, y1: 735, x2: Math.round(lastX) - 40, y2: 735, boostX: 240, minSpeed: 710 });
  } else if (o.nets === 'seg') {
    for (let k = 0; k < anchors.length - 1; k += 2) {
      const ax = anchors[k].x + 120;
      const bx = anchors[Math.min(k + 1, anchors.length - 1)].x + 60;
      pads.push({ id: 'g' + k, x1: Math.round(ax), y1: 740, x2: Math.round(bx), y2: 740, boostX: 230, minSpeed: 700 });
    }
  } else if (o.nets === 'sparse') {
    for (let k = 1; k < anchors.length; k += 3) {
      pads.push({ id: 'g' + k, x1: Math.round(anchors[k].x - 65), y1: 745, x2: Math.round(anchors[k].x + 65), y2: 745, boostX: 280, minSpeed: 760 });
    }
  }
  (o.boosts || []).forEach((b, j) => {
    const ax = anchors[b[0]].x + 140;
    pads.push({ id: 'b' + j, x1: Math.round(ax), y1: 700, x2: Math.round(ax + 130), y2: 700, boostX: b[1] || 330, minSpeed: 800 });
  });
  return { name: name, hint: hint || '', start: { anchorId: 'a1', rope: o.rope || 360 },
    anchors: anchors, pads: pads, finishX: Math.round(lastX + 180 + (o.fin || 0)), killY: o.killY || 1000 };
}

const GENERATED = [
  buildLevel('עולים בקצב', '', { n: 5, gap: [380, 400], dys: [1, -1], amp: 60, nets: 'full', killY: 1050 }),
  buildLevel('גלים', '', { n: 5, gap: [390, 410], dys: [-1, 1, 1], amp: 70, nets: 'seg', killY: 1050 }),
  buildLevel('מדרגות', '', { n: 5, gap: [395, 415], dys: [1, 0, -1], amp: 80, nets: 'seg', killY: 1040 }),
  buildLevel('זיגזג', '', { n: 5, gap: [400, 420], dys: [-1, 1, -1, 1], amp: 90, nets: 'seg', killY: 1040 }),
  buildLevel('שרשרת', '', { n: 6, gap: [390, 410], dys: [1, -1], amp: 90, nets: 'seg', killY: 1030 }),
  buildLevel('קפיצות דיוק', '', { n: 6, gap: [400, 420], dys: [0, 1, -1, 1], amp: 100, nets: 'sparse', killY: 1000 }),
  buildLevel('חצי הדרך', 'רשת הביטחון מתחילה להתדלדל', { n: 6, gap: [405, 425], dys: [-1, 1, 1, -1], amp: 100, nets: 'sparse', killY: 1000 }),
  buildLevel('נדנדות גבוהות', '', { n: 6, gap: [400, 425], dys: [1, -0.5, -1, 0.5], amp: 110, nets: 'sparse', killY: 980 }),
  buildLevel('זרימה', '', { n: 6, gap: [410, 425], dys: [-1, 1, -0.7, 0.7], amp: 110, nets: 'sparse', killY: 980 }),
  buildLevel('שבעה ווים', '', { n: 7, gap: [395, 415], dys: [1, -1, 1, -1], amp: 100, nets: 'sparse', killY: 960 }),
  buildLevel('טירוף מתון', '', { n: 7, gap: [400, 420], dys: [-1, 0.5, 1, -0.5], amp: 110, nets: 'sparse', killY: 960 }),
  buildLevel('בלי רשת', 'מכאן - בלי רשת ביטחון. רק אתם והווים', { n: 7, gap: [405, 425], dys: [1, -1, 0.8, -0.8], amp: 115, nets: 'none', killY: 940 }),
  buildLevel('אמיצים בלבד', '', { n: 7, gap: [400, 425], dys: [-1, 1, 1, -1, 0.6], amp: 115, nets: 'none', killY: 940 }),
  buildLevel('מהירות שיא', '', { n: 7, gap: [410, 425], dys: [0.7, -1, 1, -0.7], amp: 120, nets: 'none', killY: 930 }),
  buildLevel('מרתון ווים', '', { n: 8, gap: [395, 420], dys: [1, -1, -1, 1], amp: 110, nets: 'sparse', killY: 950 }),
  buildLevel('דיוק קטלני', '', { n: 8, gap: [400, 425], dys: [-1, 1, 0.6, -0.6, 1], amp: 115, nets: 'none', killY: 930 }),
  buildLevel('זהב באופק', '', { n: 8, gap: [405, 425], dys: [1, -0.8, 0.8, -1], amp: 120, nets: 'none', killY: 920 }),
  buildLevel('סופה', '', { n: 8, gap: [410, 425], dys: [-1, 1, -1, 1, 0.5], amp: 120, nets: 'none', killY: 920 }),
  buildLevel('ברק', '', { n: 8, gap: [405, 430], dys: [0.8, -1, 1, -0.8, -1], amp: 120, nets: 'none', killY: 910 }),
  buildLevel('סופת ווים', '', { n: 8, gap: [410, 430], dys: [-1, 0.9, -0.9, 1], amp: 125, nets: 'none', killY: 910 }),
  buildLevel('כמעט שם', '', { n: 8, gap: [410, 430], dys: [1, -1, 0.7, -0.7, 1, -1], amp: 125, nets: 'none', killY: 900 }),
  buildLevel('האליפות הגדולה', 'השלב האחרון. תנו הכל!', { n: 9, gap: [400, 430], dys: [-1, 1, -1, 1, -1, 1], amp: 130, nets: 'none', killY: 900, fin: 60 }),
];

window.StickmanLevels = window.StickmanLevels.concat(GENERATED);

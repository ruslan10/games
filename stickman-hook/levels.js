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

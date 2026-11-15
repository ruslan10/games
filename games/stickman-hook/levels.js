/* Stickman Hook - level definitions (original layouts).
   World units: px, y down. Player radius 15. catchRadius 390, maxRope 420.
   anchors: {id,x,y}  pads: {id,x1,y1,x2,y2,restitution?,minSpeed?,boostX?,boostY?}
   start: player begins hanging from start.anchorId with rope length start.rope.
   finishX: player.x past it wins. killY: player.y past it fails. */
window.StickmanLevels = [
  {
    name: 'צעד ראשון',
    hint: 'החזיקו כדי להיתפס לוו, שחררו כדי לעוף',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 180 },
      { id: 'a2', x: 610, y: 250 },
      { id: 'a3', x: 990, y: 210 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 640, x2: 290, y2: 640, boostX: 300, minSpeed: 780 },
    ],
    finishX: 1180, killY: 1100,
  },
  {
    name: 'נדנוד כפול',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 170 },
      { id: 'a2', x: 640, y: 200 },
      { id: 'a3', x: 1050, y: 260 },
      { id: 'a4', x: 1430, y: 190 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 640, x2: 290, y2: 640, boostX: 320, minSpeed: 800 },
      { id: 'p2', x1: 800, y1: 680, x2: 930, y2: 680, boostX: 260, minSpeed: 760 },
    ],
    finishX: 1640, killY: 1100,
  },
  {
    name: 'עליות וירידות',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 200 },
      { id: 'a2', x: 600, y: 300 },
      { id: 'a3', x: 950, y: 240 },
      { id: 'a4', x: 1360, y: 280 },
      { id: 'a5', x: 1720, y: 170 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 650, x2: 290, y2: 650, boostX: 330, minSpeed: 800 },
      { id: 'p2', x1: 1140, y1: 700, x2: 1280, y2: 700, boostX: 280, minSpeed: 780 },
      { id: 'p3', x1: 1500, y1: 710, x2: 1640, y2: 710, boostX: 300, minSpeed: 780 },
    ],
    finishX: 1930, killY: 1150,
  },
  {
    name: 'קפיצת אמצע',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 180 },
      { id: 'a2', x: 640, y: 220 },
      { id: 'a3', x: 980, y: 250 },
      { id: 'a4', x: 1300, y: 190 },
      { id: 'a5', x: 1700, y: 250 },
      { id: 'a6', x: 2060, y: 180 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 640, x2: 290, y2: 640, boostX: 340, minSpeed: 820 },
      { id: 'p2', x1: 860, y1: 700, x2: 1000, y2: 700, boostX: 420, minSpeed: 860 },
    ],
    finishX: 2270, killY: 1150,
  },
  {
    name: 'המעבר הצר',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 190 },
      { id: 'a2', x: 620, y: 150 },
      { id: 'a3', x: 1010, y: 300 },
      { id: 'a4', x: 1360, y: 230 },
      { id: 'a5', x: 1790, y: 290 },
      { id: 'a6', x: 2160, y: 170 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 640, x2: 290, y2: 640, boostX: 340, minSpeed: 820 },
      { id: 'p2', x1: 760, y1: 720, x2: 880, y2: 720, boostX: 300, minSpeed: 780 },
      { id: 'p3', x1: 1500, y1: 720, x2: 1620, y2: 720, boostX: 300, minSpeed: 780 },
      { id: 'p4', x1: 1150, y1: 730, x2: 1270, y2: 730, boostX: 300, minSpeed: 780 },
    ],
    finishX: 2370, killY: 1200,
  },
  {
    name: 'ריצת הווים',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 180 },
      { id: 'a2', x: 590, y: 230 },
      { id: 'a3', x: 960, y: 170 },
      { id: 'a4', x: 1330, y: 230 },
      { id: 'a5', x: 1700, y: 170 },
      { id: 'a6', x: 2070, y: 230 },
      { id: 'a7', x: 2430, y: 180 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 640, x2: 290, y2: 640, boostX: 360, minSpeed: 840 },
    ],
    finishX: 2640, killY: 1150,
  },
  {
    name: 'בלי רשת ביטחון',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 200 },
      { id: 'a2', x: 660, y: 260 },
      { id: 'a3', x: 1060, y: 175 },
      { id: 'a4', x: 1540, y: 280 },
      { id: 'a5', x: 1940, y: 185 },
      { id: 'a6', x: 2340, y: 250 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 660, x2: 290, y2: 660, boostX: 360, minSpeed: 840 },
      { id: 'p2', x1: 800, y1: 720, x2: 930, y2: 720, boostX: 300, minSpeed: 780 },
      { id: 'p3', x1: 1250, y1: 730, x2: 1380, y2: 730, boostX: 300, minSpeed: 780 },
      { id: 'p4', x1: 1700, y1: 730, x2: 1830, y2: 730, boostX: 300, minSpeed: 780 },
      { id: 'p5', x1: 2100, y1: 720, x2: 2230, y2: 720, boostX: 300, minSpeed: 780 },
    ],
    finishX: 2520, killY: 1050,
  },
  {
    name: 'הגמר הגדול',
    start: { anchorId: 'a1', rope: 360 },
    anchors: [
      { id: 'a1', x: 220, y: 180 },
      { id: 'a2', x: 600, y: 280 },
      { id: 'a3', x: 940, y: 215 },
      { id: 'a4', x: 1360, y: 300 },
      { id: 'a5', x: 1690, y: 205 },
      { id: 'a6', x: 2120, y: 290 },
      { id: 'a7', x: 2450, y: 215 },
      { id: 'a8', x: 2870, y: 240 },
    ],
    pads: [
      { id: 'p1', x1: 150, y1: 640, x2: 290, y2: 640, boostX: 380, minSpeed: 860 },
      { id: 'p2', x1: 1100, y1: 730, x2: 1230, y2: 730, boostX: 340, minSpeed: 820 },
      { id: 'p3', x1: 2260, y1: 730, x2: 2390, y2: 730, boostX: 340, minSpeed: 820 },
      { id: 'p4', x1: 1500, y1: 740, x2: 1630, y2: 740, boostX: 320, minSpeed: 800 },
      { id: 'p5', x1: 2650, y1: 730, x2: 2780, y2: 730, boostX: 320, minSpeed: 800 },
    ],
    finishX: 3080, killY: 1200,
  },
];

/* stickman - endless mode generator. Original, dependency-free.
   Seeded chunks of anchors/pads/fruits/winds with rising difficulty.
   chunk(seed, i) covers x in [i*CHUNK, (i+1)*CHUNK) roughly; pure function of
   (seed, i), so a replay of the same seed reproduces the same world.
   window.StickmanEndless = { CHUNK, rng, chunk, makeSeed }. */
(function (root) {
'use strict';
const CHUNK = 1500;
function rng(seed) { // mulberry32
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function makeSeed() { return (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0; }

/* chunk i: anchors get sparser/higher-contrast, safety pads thin out,
   anchor twists fade in (moving from 2, breakable from 5, toggling from 8),
   tailwinds from 3, bumper-only stretches from 4. */
function chunk(seed, i) {
  const r = rng((seed ^ Math.imul(i + 1, 0x9E3779B1)) >>> 0);
  const x0 = i * CHUNK;
  const d = Math.min(1, i / 14); // difficulty 0 -> 1
  const out = { anchors: [], pads: [], fruits: [], winds: [] };
  const nAnch = 3 + (r() < 0.5 ? 1 : 0);
  let y = 180 + (r() - 0.5) * 120;
  const gapBase = 390 + d * 55 + r() * 20;
  const bumperOnly = i >= 4 && r() < 0.22;
  for (let k = 0; k < nAnch; k++) {
    const x = x0 + 200 + k * gapBase + r() * 70;
    y += (r() - 0.5) * (150 + d * 120);
    y = Math.max(i < 2 ? 150 : 60, Math.min(430, y)); // opening chunks keep hooks in easy reach
    if (bumperOnly && k === 1) {
      // no hook here: fall onto a slide + bumper pair
      out.pads.push({ id: 'es' + i + '_' + k, kind: 'slide', x1: Math.round(x - 95), y1: Math.round(y + 540),
        x2: Math.round(x + 85), y2: Math.round(y + 610), boostX: 230, minSpeed: 880 });
      out.pads.push({ id: 'eb' + i + '_' + k, kind: 'bump', x1: Math.round(x), y1: Math.round(y + 580),
        x2: Math.round(x + 56), y2: Math.round(y + 580), boostX: 260, boostY: -380, minSpeed: 860 });
      continue;
    }
    const a = { id: 'ea' + i + '_' + k, x: Math.round(x), y: Math.round(y) };
    const tw = r();
    if (i >= 2 && tw < 0.16 + d * 0.1) {
      a.move = r() < 0.5
        ? { dx: 0, dy: 50 + d * 45, period: 2.6 + r() * 1.4, phase: r() * 6 }
        : { dx: 65 + d * 40, dy: 0, period: 3.8 + r() * 1.4, phase: r() * 6 };
    } else if (i >= 5 && tw > 0.9 - d * 0.06) {
      a.breakAfter = 1.6;
    } else if (i >= 8 && tw > 0.78 && tw <= 0.9 - d * 0.06) {
      a.toggle = { period: 2.8 + r(), duty: 0.62, phase: r() * 1.2 };
    }
    out.anchors.push(a);
    // fruit on the arc between this anchor and the next slot
    const fr = r();
    out.fruits.push({
      x: Math.round(x + gapBase * 0.5), y: Math.round(fr < 0.25 ? y - 140 : fr < 0.75 ? y + 190 : y + 330),
      v: fr < 0.25 ? 10 : fr < 0.75 ? 5 : 20,
      k: fr < 0.25 ? 'melon' : fr < 0.75 ? ['apple', 'orange', 'banana'][Math.floor(r() * 3)] : 'cherry',
    });
  }
  // at least one low hook per chunk: a hero standing on a bar below must
  // always have a catch in range (ground jump + air hop reach about 250px)
  if (out.anchors.length && !out.anchors.some(a => a.y >= 260)) {
    out.anchors[out.anchors.length - 1].y = 260 + Math.round(r() * 80);
  }
  // safety pads: dense early, sparse late
  const net = i < 2 ? 2 : i < 8 ? 1 : (r() < 0.4 ? 1 : 0);
  for (let g = 0; g < net; g++) {
    const px = x0 + 420 + g * 640 + r() * 200;
    const kind = r();
    if (kind < 0.4) out.pads.push({ id: 'eg' + i + '_' + g, x1: Math.round(px - 150), y1: 742, x2: Math.round(px + 150), y2: 742, boostX: 230, minSpeed: 710 });
    else if (kind < 0.7) out.pads.push({ id: 'eb' + i + '_' + g, kind: 'bump', x1: Math.round(px), y1: 708, x2: Math.round(px + 52), y2: 708, boostX: 150, boostY: -320, minSpeed: 780 });
    else out.pads.push({ id: 'et' + i + '_' + g, kind: 'tramp', x1: Math.round(px - 70), y1: 748, x2: Math.round(px + 70), y2: 748, boostX: 220, boostY: -720, minSpeed: 880 });
  }
  if (i >= 3 && r() < 0.3) {
    const tail = r() < 0.75;
    out.winds.push({ id: 'ew' + i, x1: x0 + 150, y1: -400, x2: x0 + CHUNK - 150, y2: 900,
      ax: tail ? 140 + r() * 60 : -(100 + r() * 60), ay: tail ? 0 : -30 });
  }
  return out;
}
root.StickmanEndless = { CHUNK: CHUNK, rng: rng, chunk: chunk, makeSeed: makeSeed };
})(typeof window !== 'undefined' ? window : globalThis);

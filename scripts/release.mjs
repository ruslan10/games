// Run after editing game code and after rebuilding Runner. No dependencies.
import {readFileSync, writeFileSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
const pages = ['index.html', 'stickman/index.html', 'runner/index.html', 'monster-lab/index.html'];
const normalize = html => html.replace(/(name="games-release" content=")[^"]+/, '$1BUILD')
  .replace(/([?&])v=[a-f0-9]{16}/g, '');
const assets = new Set(['update.js']);
for (const page of pages) {
  const prefix = page.includes('/') ? page.split('/')[0] + '/' : '';
  for (const m of normalize(readFileSync(page, 'utf8')).matchAll(/(?:src|href)="([^"?#]+\.(?:js|css|jpg|png|webp))"/g)) {
    assets.add(new URL(m[1], 'file:///' + prefix).pathname.slice(1));
  }
}
for (const name of readdirSync('monster-lab/assets')) if (/\.(?:js|webp|ttf)$/.test(name)) assets.add('monster-lab/assets/' + name);
const hash = createHash('sha256');
for (const name of [...assets].sort()) hash.update(name).update(readFileSync(name));
for (const name of pages) hash.update(name).update(normalize(readFileSync(name, 'utf8')));
const release = hash.digest('hex').slice(0, 16);
let changed = false;
for (const name of pages) {
  const old = readFileSync(name, 'utf8');
  const next = normalize(old).replace('content="BUILD"', `content="${release}"`)
    .replace(/((?:src|href)="[^"?#]+\.(?:js|css|jpg|png|webp))"/g, `$1?v=${release}"`);
  if (old !== next) { changed = true; if (!process.argv.includes('--check')) writeFileSync(name, next); }
}
const manifest = JSON.stringify({release}) + '\n';
try { changed ||= readFileSync('version.json', 'utf8') !== manifest; } catch { changed = true; }
if (process.argv.includes('--check')) {
  if (changed) { console.error('Release assets changed. Run node scripts/release.mjs'); process.exit(1); }
} else writeFileSync('version.json', manifest);
console.log('Games release:', release);

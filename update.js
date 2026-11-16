/* Small, save-independent updater for the static Pages site. */
(() => {
  'use strict';
  const script = document.currentScript;
  const current = document.querySelector('meta[name="games-release"]')?.content;
  if (!script || !current) return;
  const manifest = new URL('version.json', script.src);
  const attemptKey = 'games-update-attempts:' + location.pathname;
  let latest = null, checking = false, navigating = false, lastCheck = 0;
  let safe = () => document.body.dataset.updatePage === 'home';
  const allowed = value => typeof value === 'string' && /^[a-f0-9]{16}$/.test(value);
  // Reloading only the main menu also protects paused runs and unbanked coins.
  function apply() {
    if (!latest || latest === current || navigating || document.hidden || !safe()) return;
    // Deployment/CDN skew must never turn a stale response into a reload loop.
    let attempts = {};
    try { const value = JSON.parse(sessionStorage.getItem(attemptKey) || '{}'); if (value && typeof value === 'object') attempts = value; } catch (_) {}
    const previous = attempts[latest];
    if (previous && (previous.count >= 3 || Date.now() - previous.at < 60000)) return;
    requestAnimationFrame(() => {
      if (navigating || document.hidden || !safe()) return;
      navigating = true;
      try { sessionStorage.setItem(attemptKey, JSON.stringify({
        [latest]: {count: (previous?.count || 0) + 1, at: Date.now()}
      })); } catch (_) {
        // With storage blocked the URL itself is the loop guard.
        if (new URL(location.href).searchParams.get('gv') === latest) return;
      }
      const url = new URL(location.href);
      url.searchParams.set('gv', latest);
      url.searchParams.set('gt', String(Date.now()));
      location.replace(url.href);
    });
  }
  async function check() {
    if (checking || document.hidden || Date.now() - lastCheck < 60000) return;
    checking = true; lastCheck = Date.now();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      manifest.searchParams.set('t', String(Date.now()));
      const response = await fetch(manifest, {cache: 'no-store', signal: controller.signal});
      if (!response.ok) return;
      const data = await response.json();
      if (allowed(data.release)) latest = data.release;
    } catch (_) { /* Offline and transient failures must not affect the game. */ }
    finally { clearTimeout(timeout); checking = false; }
    apply();
  }
  window.GamesUpdate = Object.freeze({
    setSafeToReload(fn) { if (typeof fn === 'function') { safe = fn; apply(); } }
  });
  addEventListener('pageshow', check);
  addEventListener('online', check);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { check(); apply(); } });
  setInterval(check, 60000);
  setInterval(apply, 1000);
  check();
})();

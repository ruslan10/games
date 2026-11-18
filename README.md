# משחקים חינמיים - אתר GitHub Pages

אתר סטטי של משחקי דפדפן, מוכן לפרסום ב-GitHub Pages. בלי build step - HTML/CSS/JS טהור.

## מבנה

- `index.html` - עמוד ראשי עם כרטיסי המשחקים (עברית, RTL)
- `stickman/index.html` - המשחק הראשון: נדנדת סטיקמן עם וו (פיזיקת מטוטלת, 30 שלבים, תמיכת מגע ומקלדת)

## פרסום ב-GitHub Pages

1. צרו ריפו חדש ב-GitHub (למשל `games`)
2. העלו את כל הקבצים לשורש הריפו:
   ```
   git init
   git add .
   git commit -m "Games site with stickman"
   git branch -M main
   git remote add origin https://github.com/<USER>/<REPO>.git
   git push -u origin main
   ```
3. בהגדרות הריפו: Settings -> Pages -> Source: Deploy from a branch -> Branch: `main`, תיקייה `/ (root)` -> Save
4. האתר יהיה זמין תוך דקה בכתובת `https://<USER>.github.io/<REPO>/`

## איך משחקים - stickman

לחצו והחזיקו את העכבר/המסך (או מקש רווח) כדי לתפוס נקודת עיגון עם הוו, שחררו כדי לעוף קדימה. משטחי הקפיצה האדומים מזנקים למעלה. הגיעו לדגל הסיום כדי לעבור שלב. נפילה מאתחלת את השלב.

## הוספת משחק חדש

1. צרו תיקייה `games/<game-name>/` עם `index.html` עצמאי
2. הוסיפו כרטיס חדש בעמוד הראשי (`index.html`) שמקשר אליה

## ראנר

- `runner/index.html` - משחק ריצה מקורי בתלת-ממד, 20 שלבים, שלושה נתיבים, קפיצה והחלקה, מטבעות ודמויות.
- מדריך פיתוח ובדיקות: `runner/README.md`.

## תאימות לכתובת הקודמת

`stickman-hook/index.html` מפנה לכתובת החדשה `stickman/`, בלי לשנות שמירות. מפתחות ה-localStorage נשארים ללא שינוי ובאותו origin.

## Publishing updates without losing saves

After any site/game edit, run `node scripts/release.mjs` and commit its HTML and
`version.json` changes with the code. For Runner, first run `npm ci && npm run build`
inside `runner/`. Validate with `node scripts/release.mjs --check`.

The release tool fingerprints all deployed JS/CSS/card images and HTML, then stamps
asset URLs. `update.js` checks the tiny manifest at most once a minute while the tab
is visible, and on return/online. It refreshes only on the homepage or a game's main
menu, never during a level, intro, pause, shop, level selector or results. No save
keys, coins, ownership or localStorage are changed. Offline checks fail quietly;
reloads are bounded to avoid CDN propagation loops. The first installation needs
one ordinary refresh, not clearing site data. Do not add a service worker or clear
storage/caches as an update workaround.

Update QA: `node tests/updates.cjs` (Playwright from `runner/node_modules`) and
`node tests/update-guards.cjs`. The browser test simulates publishing a new release
while each game is open, and checks deferred refresh and byte-for-byte save retention.

## רישיון וזכויות שימוש
המשחקים זמינים למשחק באתר, אך הקוד והתוכן המקוריים אינם קוד פתוח. אין רשות להעתיק, לשנות, להפיץ, לארח מחדש או להשתמש בהם בפרויקטים אחרים ללא אישור מראש ובכתב, בכפוף לחריגים שבקובץ [LICENSE](LICENSE). רכיבי צד שלישי נשארים תחת הרישיונות שלהם.

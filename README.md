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

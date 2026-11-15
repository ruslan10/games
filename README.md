# משחקים חינמיים - אתר GitHub Pages

אתר סטטי של משחקי דפדפן, מוכן לפרסום ב-GitHub Pages. בלי build step - HTML/CSS/JS טהור.

## מבנה

- `index.html` - עמוד ראשי עם כרטיסי המשחקים (עברית, RTL)
- `stickman-hook/index.html` - המשחק הראשון: נדנדת סטיקמן עם וו (פיזיקת מטוטלת, 4 שלבים, תמיכת מגע ומקלדת)

## פרסום ב-GitHub Pages

1. צרו ריפו חדש ב-GitHub (למשל `games`)
2. העלו את כל הקבצים לשורש הריפו:
   ```
   git init
   git add .
   git commit -m "Games site with Stickman Hook"
   git branch -M main
   git remote add origin https://github.com/<USER>/<REPO>.git
   git push -u origin main
   ```
3. בהגדרות הריפו: Settings -> Pages -> Source: Deploy from a branch -> Branch: `main`, תיקייה `/ (root)` -> Save
4. האתר יהיה זמין תוך דקה בכתובת `https://<USER>.github.io/<REPO>/`

## איך משחקים - סטיקמן הוק

לחצו והחזיקו את העכבר/המסך (או מקש רווח) כדי לתפוס נקודת עיגון עם הוו, שחררו כדי לעוף קדימה. משטחי הקפיצה האדומים מזנקים למעלה. הגיעו לדגל הסיום כדי לעבור שלב. נפילה מאתחלת את השלב.

## הוספת משחק חדש

1. צרו תיקייה `games/<game-name>/` עם `index.html` עצמאי
2. הוסיפו כרטיס חדש בעמוד הראשי (`index.html`) שמקשר אליה

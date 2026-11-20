/* English Worlds - content data. Clips: audio/<id>.mp3 (immutable; changed clip = new id). */
'use strict';

const BANDS = [
  { id: 'b1', name: 'מתחילים', grades: 'כיתות א-ב', note: 'מילים ומשפטים קצרים' },
  { id: 'b2', name: 'מתקדמים', grades: 'כיתות ג-ד', note: 'משפטים שלמים ושאלות' },
  { id: 'b3', name: 'מומחים', grades: 'כיתות ה-ו', note: 'משפטים ארוכים וסיפור' },
];

/* mission: {type:'repeat'|'choose', say, hint, clip, q?, qClip?, icon?} */
const WORLDS = [
  {
    id: 'island', name: 'אי החיות', topic: 'חיות וטבע', tone: 'green',
    bands: {
      b1: [
        { type: 'repeat', say: 'a black cat', hint: 'חתול שחור', clip: 'island-1', icon: 'cat' },
        { type: 'choose', clip: 'island-2', answer: 'dog', options: ['dog', 'cat'], hint: 'מה שמעתם?' },
        { type: 'repeat', say: 'a red bird', hint: 'ציפור אדומה', clip: 'island-3', icon: 'bird' },
        { type: 'choose', clip: 'island-4', answer: 'fish', options: ['fish', 'bird'], hint: 'מה שמעתם?' },
      ],
      b2: [
        { type: 'repeat', say: 'The cat is black', hint: 'החתול שחור', clip: 'island-b2-1', icon: 'cat' },
        { type: 'repeat', say: 'I see two dogs', hint: 'אני רואה שני כלבים', clip: 'island-b2-2', icon: 'dog' },
        { type: 'repeat', say: 'The bird can fly', hint: 'הציפור יכולה לעוף', clip: 'island-b2-3', icon: 'bird' },
        { type: 'repeat', say: 'The fish swims', hint: 'הדג שוחה', clip: 'island-b2-4', icon: 'fish' },
      ],
      b3: [
        { type: 'repeat', say: 'The elephant is the biggest animal on land', hint: 'הפיל הוא החיה הכי גדולה ביבשה', clip: 'island-b3-5', icon: 'elephant' },
        { type: 'story', clip: 'island-b3-story1', qClip: 'island-b3-story1-q', q: 'Who does the duck meet at the river?', options: [{ t: 'A horse and a monkey', c: 'island-b3-story1-o1' }, { t: 'A cat and a dog', c: 'island-b3-story1-o2' }, { t: 'A fish and a bird', c: 'island-b3-story1-o3' }], answer: 'A horse and a monkey', hint: 'עם מי הברווזה נפגשת בנהר?', icon: 'duck' },
        { type: 'build', say: 'The horse runs faster than the duck', hint: 'הסוס רץ יותר מהר מהברווזה', clip: 'island-b3-build1', icon: 'horse' },
        { type: 'repeat', say: 'I like monkeys because they are funny', hint: 'אני אוהב קופים כי הם מצחיקים', clip: 'island-b3-6', icon: 'monkey' },
      ],
    },
  },
  {
    id: 'space', name: 'משימת חלל', topic: 'שאלות החייזר', tone: 'violet',
    bands: {
      b1: [
        { type: 'repeat', q: 'What is your name?', say: 'My name is Roni', hint: 'קוראים לי רוני', clip: 'space-a1', qClip: 'space-q1' },
        { type: 'repeat', q: 'How old are you?', say: 'I am eight', hint: 'אני בן שמונה', clip: 'space-a2', qClip: 'space-q2' },
        { type: 'repeat', q: 'What do you like?', say: 'I like pizza', hint: 'אני אוהב פיצה', clip: 'space-a3', qClip: 'space-q3' },
        { type: 'repeat', q: 'Where do you live?', say: 'I live in Israel', hint: 'אני גר בישראל', clip: 'space-a4', qClip: 'space-q4' },
      ],
      b2: [
        { type: 'repeat', q: 'What is this?', say: 'It is a rocket', hint: 'זו חללית', clip: 'space-b2-a1', qClip: 'space-b2-q1' },
        { type: 'repeat', q: 'What color is the moon?', say: 'The moon is yellow', hint: 'הירח צהוב', clip: 'space-b2-a2', qClip: 'space-b2-q2' },
        { type: 'repeat', q: 'How many stars?', say: 'I see three stars', hint: 'אני רואה שלושה כוכבים', clip: 'space-b2-a3', qClip: 'space-b2-q3' },
        { type: 'repeat', q: 'What do you want?', say: 'I want water, please', hint: 'אני רוצה מים, בבקשה', clip: 'space-b2-a4', qClip: 'space-b2-q4' },
      ],
      b3: [
        { type: 'repeat', q: 'What will you do tomorrow?', say: 'I will visit my grandmother', hint: 'אני אבקר את סבתא שלי', clip: 'space-b3-a5', qClip: 'space-b3-q5', icon: 'heart' },
        { type: 'story', clip: 'space-b3-story1', qClip: 'space-b3-story1-q', q: 'What does Roni do on the moon?', options: [{ t: 'He takes photos', c: 'space-b3-story1-o1' }, { t: 'He eats dinner', c: 'space-b3-story1-o2' }, { t: 'He plays football', c: 'space-b3-story1-o3' }], answer: 'He takes photos', hint: 'מה רוני עושה על הירח?', icon: 'star' },
        { type: 'build', say: 'My sister is older than me', hint: 'אחותי גדולה ממני', clip: 'space-b3-build1', icon: 'heart' },
        { type: 'repeat', q: 'Why do you like space?', say: 'I like space because the stars are beautiful', hint: 'אני אוהב את החלל כי הכוכבים יפים', clip: 'space-b3-a6', qClip: 'space-b3-q6', icon: 'star' },
      ],
    },
  },
  {
    id: 'pet', name: 'חיית המילים', topic: 'האכלת הדרקון הקטן', tone: 'pink',
    bands: {
      b1: [
        { type: 'repeat', say: 'apple', hint: 'תפוח', clip: 'pet-1', icon: 'apple' },
        { type: 'choose', clip: 'pet-2', answer: 'milk', options: ['milk', 'apple'], hint: 'מה שמעתם?' },
        { type: 'repeat', say: 'bread', hint: 'לחם', clip: 'pet-3', icon: 'bread' },
        { type: 'choose', clip: 'pet-4', answer: 'banana', options: ['banana', 'bread'], hint: 'מה שמעתם?' },
      ],
      b2: [
        { type: 'repeat', say: 'I like cheese', hint: 'אני אוהב גבינה', clip: 'pet-b2-1', icon: 'cheese' },
        { type: 'repeat', say: 'Do you want juice?', hint: 'רוצה מיץ?', clip: 'pet-b2-2', icon: 'juice' },
        { type: 'repeat', say: 'The dragon eats rice', hint: 'הדרקון אוכל אורז', clip: 'pet-b2-3', icon: 'rice' },
        { type: 'repeat', say: 'I drink water', hint: 'אני שותה מים', clip: 'pet-b2-4', icon: 'water' },
      ],
      b3: [
        { type: 'repeat', say: 'For dinner we eat rice, salad and eggs', hint: 'לארוחת ערב אוכלים אורז, סלט וביצים', clip: 'pet-b3-5', icon: 'eggs' },
        { type: 'story', clip: 'pet-b3-story1', qClip: 'pet-b3-story1-q', q: 'How does the dragon feel after he eats?', options: [{ t: 'Happy', c: 'pet-b3-story1-o1' }, { t: 'Angry', c: 'pet-b3-story1-o2' }, { t: 'Scared', c: 'pet-b3-story1-o3' }], answer: 'Happy', hint: 'איך הדרקון מרגיש אחרי שהוא אוכל?', icon: 'apple' },
        { type: 'build', say: 'I do not like juice because it is sweet', hint: 'אני לא אוהב מיץ כי הוא מתוק', clip: 'pet-b3-build1', icon: 'juice' },
        { type: 'repeat', say: 'My favorite food is pizza because it is tasty', hint: 'האוכל האהוב עליי הוא פיצה כי הוא טעים', clip: 'pet-b3-6', icon: 'sandwich' },
      ],
    },
  },
  {
    id: 'city', name: 'עיר המילים', topic: 'בונים את העיר', tone: 'blue',
    bands: {
      b1: [
        { type: 'repeat', say: 'I go to school', hint: 'אני הולך לבית ספר', clip: 'city-1', icon: 'school' },
        { type: 'choose', clip: 'city-2', answer: 'house', options: ['house', 'school'], hint: 'מה שמעתם?' },
        { type: 'repeat', say: 'The shop is open', hint: 'החנות פתוחה', clip: 'city-3', icon: 'shop' },
        { type: 'choose', clip: 'city-4', answer: 'bus', options: ['bus', 'shop'], hint: 'מה שמעתם?' },
      ],
      b2: [
        { type: 'repeat', say: 'The bus stops here', hint: 'האוטובוס עוצר כאן', clip: 'city-b2-1', icon: 'bus' },
        { type: 'repeat', say: 'My father works in a bank', hint: 'אבא שלי עובד בבנק', clip: 'city-b2-2', icon: 'bank' },
        { type: 'repeat', say: 'We play in the park', hint: 'אנחנו משחקים בפארק', clip: 'city-b2-3', icon: 'park' },
        { type: 'repeat', say: 'The library has many books', hint: 'בספרייה יש הרבה ספרים', clip: 'city-b2-4', icon: 'library' },
      ],
      b3: [
        { type: 'repeat', say: 'The train is faster than the bus', hint: 'הרכבת מהירה יותר מהאוטובוס', clip: 'city-b3-2', icon: 'train' },
        { type: 'story', clip: 'city-b3-story1', qClip: 'city-b3-story1-q', q: 'Where is the library?', options: [{ t: 'Next to the bank', c: 'city-b3-story1-o1' }, { t: 'Inside the park', c: 'city-b3-story1-o2' }, { t: 'Behind the school', c: 'city-b3-story1-o3' }], answer: 'Next to the bank', hint: 'איפה הספרייה?', icon: 'library' },
        { type: 'build', say: 'There is a new shop near my house', hint: 'יש חנות חדשה ליד הבית שלי', clip: 'city-b3-build1', icon: 'shop' },
        { type: 'repeat', say: 'I like the park because I can play there', hint: 'אני אוהב את הפארק כי אפשר לשחק שם', clip: 'city-b3-5', icon: 'park' },
      ],
    },
  },
  {
    id: 'comic', name: 'גיבור הקומיקס', topic: 'פרק 2: הצלת החתול', tone: 'red',
    bands: {
      b1: [
        { type: 'repeat', say: 'Oh yes I can!', hint: 'כן, אני כן יכול!', clip: 'comic-1' },
        { type: 'repeat', say: 'Stop right there!', hint: 'עצור מיד!', clip: 'comic-2' },
        { type: 'repeat', say: 'I will save the cat', hint: 'אני אציל את החתול', clip: 'comic-3' },
        { type: 'repeat', say: 'We did it!', hint: 'עשינו את זה!', clip: 'comic-4' },
      ],
      b2: [
        { type: 'repeat', say: 'Help is on the way!', hint: 'עזרה בדרך!', clip: 'comic-b2-1' },
        { type: 'repeat', say: 'Run fast, friends!', hint: 'רוצו מהר, חברים!', clip: 'comic-b2-2' },
        { type: 'repeat', say: 'I have a plan', hint: 'יש לי תוכנית', clip: 'comic-b2-3' },
        { type: 'repeat', say: 'You are safe now', hint: 'אתם בטוחים עכשיו', clip: 'comic-b2-4' },
      ],
      b3: [
        { type: 'repeat', say: 'When the city calls, the hero answers', hint: 'כשהעיר קוראת, הגיבור עונה', clip: 'comic-b3-5', icon: 'star' },
        { type: 'story', clip: 'comic-b3-story1', qClip: 'comic-b3-story1-q', q: 'Why does everyone clap?', options: [{ t: 'The cat is safe', c: 'comic-b3-story1-o1' }, { t: 'The tree is tall', c: 'comic-b3-story1-o2' }, { t: 'The hero is tired', c: 'comic-b3-story1-o3' }], answer: 'The cat is safe', hint: 'למה כולם מוחאים כף?', icon: 'cat' },
        { type: 'build', say: 'We must help our friends when they need us', hint: 'אנחנו חייבים לעזור לחברים שלנו כשהם צריכים אותנו', clip: 'comic-b3-build1', icon: 'heart' },
        { type: 'repeat', say: 'A hero never gives up', hint: 'גיבור אמיתי לעולם לא מוותר', clip: 'comic-b3-4', icon: 'star' },
      ],
    },
  },
];

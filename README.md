# מדד שאלות — Question Index

A Hebrew-language study tool for analyzing university exam questions by topic, year, and format. Supports multiple courses and dark mode.

---

## Running the app

```bash
npm install
npm start        # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run deploy   # build + publish to GitHub Pages
```

---

## App overview

The home page lists all available courses. Clicking a course opens five tabs:

| Tab | What it shows |
|-----|---------------|
| **סקירה** (Overview) | Per-topic question counts, sorted by frequency |
| **מפת חום** (Heatmap) | Topic × exam year grid |
| **מבחנים** (Exams) | Full question list per exam, filterable |
| **חיפוש** (Search) | Cross-exam search by topic, type, year, etc. |
| **תובנות** (Insights) | Trends, recurring traps, and format info |

Dark mode is toggled with the **☽ לילה / ☼ יום** button in the top-right corner on every page. The preference is saved in `localStorage`.

---

## Adding a new course

Each course lives in its own folder under `src/courses/<course-id>/`. Copy an existing course (e.g. `algebra2`) as a starting point.

### 1. Create the folder structure

```
src/courses/<course-id>/
  config.js   ← course metadata, chapters, exam format, traps
  topics.js   ← topic keys → Hebrew labels + per-topic colors
  exams.js    ← array of exam objects with questions
```

### 2. `config.js`

```js
export const COURSE = {
  teacher:    "שם המרצה",
  name:       "שם הקורס המלא",
  shortName:  "שם קצר",
  number:     "12345",           // course number (used as unique ID)
  university: "שם האוניברסיטה",
};

export const CHAPTERS = [
  { key: "א", label: "פרק א — תיאור", color: "#c1440e", chipBg: "#fef1e6" },
  { key: "ב", label: "פרק ב — תיאור", color: "#2b4162", chipBg: "#e8eef6" },
];

export const EXCLUDED_TOPICS = new Set(["topic_key_not_in_syllabus"]);

export const TREND_FROM_YEAR = 2020;   // year from which to calculate trend

export const TRAPS = [
  { t: "נוסחה או טענה", n: "הקשר — מתי/כמה פעמים הופיע" },
];

export const QUESTION_TYPES = {
  "הוכחה":  { label: "הוכחה",  kind: "proof" },
  "חישוב":  { label: "חישוב",  kind: "calc"  },
  "אמת/שקר": { label: "אמת/שקר", kind: "ts"  },
  "מעורב":  { label: "מעורב",  kind: "mixed" },
};

export const EXAM_FORMAT = {
  chapters: [
    { key: "א", points: 50, description: "תיאור החלק" },
    { key: "ב", points: 50, description: "תיאור החלק" },
  ],
  badges: [
    { label: "100 נק׳", variant: "accent" },
    { label: "חומר סגור", variant: "neutral" },
  ],
};
```

### 3. `topics.js`

```js
export const TOPIC_HE = {
  limits:      "גבולות",
  continuity:  "רציפות",
  // ... one entry per topic key used in exams.js
};

// Heatmap intensity color per topic (optional — defaults to course primary color)
export const COLORS = {
  limits:     "#c1440e",
  continuity: "#2b4162",
};

export function isExcluded(topicKey) {
  return EXCLUDED_TOPICS.has(topicKey);
}
```

> Import `EXCLUDED_TOPICS` from `./config` inside `topics.js`.

### 4. `exams.js`

```js
export const EXAMS = [
  {
    code:      "12345_2024a",   // unique string
    year:      2024,
    moed:      "א",             // "א" | "ב" | "ג"
    date:      "15.01.24",      // optional display string
    lecturers: ["שם המרצה"],    // array, optional
    questions: [
      {
        id:      "1א",           // question number as shown on the exam
        chapter: "א",
        topic:   "limits",       // must match a key in TOPIC_HE
        type:    "הוכחה",        // must match a key in QUESTION_TYPES
        summary: "תיאור קצר של השאלה",
      },
    ],
  },
];
```

### 5. Register the course in `src/courses/index.js`

```js
import {
  COURSE as myCourse,
  CHAPTERS as myChapters,
  EXCLUDED_TOPICS as myExcluded,
  TREND_FROM_YEAR as myTrendYear,
  TRAPS as myTraps,
  EXAM_FORMAT as myFormat,
  QUESTION_TYPES as myTypes,
} from "./<course-id>/config";
import { TOPIC_HE as myTopicHe, COLORS as myColors, isExcluded as myIsExcluded } from "./<course-id>/topics";
import { EXAMS as myExams } from "./<course-id>/exams";

export const COURSE_REGISTRY = {
  // ... existing courses ...
  "<course-id>": {
    id: "<course-id>",
    COURSE: myCourse,
    CHAPTERS: myChapters,
    EXCLUDED_TOPICS: myExcluded,
    TREND_FROM_YEAR: myTrendYear,
    TRAPS: myTraps,
    EXAM_FORMAT: myFormat,
    QUESTION_TYPES: myTypes,
    TOPIC_HE: myTopicHe,
    COLORS: myColors,
    isExcluded: myIsExcluded,
    EXAMS: myExams,
  },
};

export const COURSE_LIST = [
  // ... existing entries ...
  COURSE_REGISTRY["<course-id>"],
];
```

The course will now appear on the home page automatically.

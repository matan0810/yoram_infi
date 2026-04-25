export const COURSE = {
  teacher:    "פרופ׳ יורם לסט",
  name:       "חשבון אינפיניטסימלי 2",
  shortName:  "אינפי 2",
  number:     "80132",
  university: "האוניברסיטה העברית בירושלים",
};

export const CHAPTERS = [
  { key: "א", label: "פרק א — הוכחות",       color: "#c1440e", chipBg: "#fef1e6" },
  { key: "ב", label: "פרק ב — חישוב והוכחה", color: "#2b4162", chipBg: "#e8eef6" },
  { key: "ג", label: "פרק ג — אמת/שקר",      color: "#3a5a40", chipBg: "#eaf0e6" },
];

export const EXCLUDED_TOPICS = new Set(["multivariable"]);

export const EXAM_FORMAT = {
  latestSession: "מועד א׳ תשפ״ו",
  latestDate:    "02.02.26",
  chapters: [
    { key: "א", points: 26, description: "2 שאלות הוכחה, בחר 1" },
    { key: "ב", points: 26, description: "2 שאלות חישוב+הוכחה, בחר 1" },
    { key: "ג", points: 50, description: "10 שאלות × 5 נק׳", warning: "פסוק שקרי = 0 על כל השאלה!" },
  ],
  badges: [
    { label: "102 נק׳ אפשריות", variant: "accent" },
    { label: "מקסימום 100",     variant: "accent" },
    { label: "חומר סגור",       variant: "neutral" },
    { label: "3 שעות",          variant: "neutral" },
  ],
};

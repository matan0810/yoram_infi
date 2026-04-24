import { useMemo } from "react";
import { EXAMS } from "../data/exams";

export function useStats() {
  return useMemo(() => {
    const tc = {},
      cc = { א: 0, ב: 0, ג: 0 },
      tyc = {},
      yt = {};
    let tot = 0;
    EXAMS.forEach((ex) => {
      yt[ex.code] = {};
      ex.questions.forEach((q) => {
        tot++;
        tc[q.topic] = (tc[q.topic] || 0) + 1;
        cc[q.chapter]++;
        tyc[q.type] = (tyc[q.type] || 0) + 1;
        yt[ex.code][q.topic] = (yt[ex.code][q.topic] || 0) + 1;
      });
    });
    return { tc, cc, tyc, yt, tot };
  }, []);
}

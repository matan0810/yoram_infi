import { useMemo } from "react";
import { EXAMS } from "../data/exams";

export function useStats() {
  return useMemo(() => {
    const topicCounts = {};
    const chapterCounts = { א: 0, ב: 0, ג: 0 };
    const typeCounts = {};
    const examTopics = {};
    let total = 0;

    EXAMS.forEach((exam) => {
      examTopics[exam.code] = {};
      exam.questions.forEach((q) => {
        total++;
        topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
        chapterCounts[q.chapter]++;
        typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
        examTopics[exam.code][q.topic] = (examTopics[exam.code][q.topic] || 0) + 1;
      });
    });

    return { topicCounts, chapterCounts, typeCounts, examTopics, total };
  }, []);
}

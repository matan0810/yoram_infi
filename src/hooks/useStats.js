import { useMemo } from "react";

export function useStats(exams) {
  return useMemo(() => {
    const topicCounts = {};
    const chapterCounts = {};
    const typeCounts = {};
    const examTopics = {};
    let total = 0;

    exams.forEach((exam) => {
      examTopics[exam.code] = {};
      exam.questions.forEach((q) => {
        total++;
        topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
        chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1;
        typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
        examTopics[exam.code][q.topic] =
          (examTopics[exam.code][q.topic] || 0) + 1;
      });
    });

    return { topicCounts, chapterCounts, typeCounts, examTopics, total };
  }, [exams]);
}

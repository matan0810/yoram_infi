import { useMemo } from "react";
import { UNKNOWN_LECTURER, examMatchesLecturer, buildLecturersList } from "../utils/exam";

export function useSearchData(exams, filters, topicHe) {
  const { query, topic, chapter, type, year, moed, lecturer } = filters;

  const topicsByFrequency = useMemo(
    () =>
      Object.entries(
        exams.reduce((acc, exam) => {
          exam.questions.forEach((q) => {
            acc[q.topic] = (acc[q.topic] || 0) + 1;
          });
          return acc;
        }, {}),
      ).sort((a, b) => b[1] - a[1]),
    [exams],
  );

  const years = useMemo(
    () => [...new Set(exams.map((e) => e.year))].sort(),
    [exams],
  );

  const lecturers = useMemo(() => buildLecturersList(exams), [exams]);

  const types = useMemo(
    () =>
      [...new Set(exams.flatMap((e) => e.questions.map((q) => q.type)))].sort(),
    [exams],
  );

  const results = useMemo(() => {
    const queryLower = query.toLowerCase();

    const examMatches = (exam) =>
      (!year || String(exam.year) === year) &&
      (!moed || exam.moed === moed) &&
      (!lecturer || examMatchesLecturer(exam, lecturer));

    const questionMatches = (q, exam) =>
      (!topic || q.topic === topic) &&
      (!chapter || q.chapter === chapter) &&
      (!type || q.type === type) &&
      (!queryLower ||
        (q.summary + topicHe[q.topic] + exam.code)
          .toLowerCase()
          .includes(queryLower));

    return exams
      .filter(examMatches)
      .flatMap((exam) =>
        exam.questions
          .filter((q) => questionMatches(q, exam))
          .map((question) => ({ exam, question })),
      );
  }, [exams, query, topic, chapter, type, year, moed, lecturer, topicHe]);

  return { topicsByFrequency, years, lecturers, types, results };
}

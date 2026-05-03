export const UNKNOWN_LECTURER = "לא ידוע";

export const examMatchesLecturer = (exam, lecturer) =>
  exam.lecturers?.includes(lecturer) ||
  (!exam.lecturers?.length && lecturer === UNKNOWN_LECTURER);

export const examLecturerLabel = (exam) =>
  exam.lecturers?.join(", ") ?? UNKNOWN_LECTURER;

export const buildLecturersList = (exams) =>
  [
    ...new Set(
      exams.flatMap((e) =>
        e.lecturers?.length ? e.lecturers : [UNKNOWN_LECTURER],
      ),
    ),
  ].sort((a, b) => {
    if (a === UNKNOWN_LECTURER) return 1;
    if (b === UNKNOWN_LECTURER) return -1;
    return a.localeCompare(b);
  });

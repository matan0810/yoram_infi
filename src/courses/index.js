import {
  COURSE as infi2Course,
  CHAPTERS as infi2Chapters,
  EXCLUDED_TOPICS as infi2ExcludedTopics,
  TREND_FROM_YEAR as infi2TrendFromYear,
  TRAPS as infi2Traps,
  EXAM_FORMAT as infi2ExamFormat,
} from "./infi2/config";
import {
  TOPIC_HE as infi2TopicHe,
  COLORS as infi2Colors,
  isExcluded as infi2IsExcluded,
} from "./infi2/topics";
import { EXAMS as infi2Exams } from "./infi2/exams";

export const COURSE_REGISTRY = {
  infi2: {
    id: "infi2",
    COURSE: infi2Course,
    CHAPTERS: infi2Chapters,
    EXCLUDED_TOPICS: infi2ExcludedTopics,
    TREND_FROM_YEAR: infi2TrendFromYear,
    TRAPS: infi2Traps,
    EXAM_FORMAT: infi2ExamFormat,
    TOPIC_HE: infi2TopicHe,
    COLORS: infi2Colors,
    isExcluded: infi2IsExcluded,
    EXAMS: infi2Exams,
  },
};

export const COURSE_LIST = [COURSE_REGISTRY.infi2];

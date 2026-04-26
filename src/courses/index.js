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

import {
  COURSE as algebra2Course,
  CHAPTERS as algebra2Chapters,
  EXCLUDED_TOPICS as algebra2ExcludedTopics,
  TREND_FROM_YEAR as algebra2TrendFromYear,
  TRAPS as algebra2Traps,
  EXAM_FORMAT as algebra2ExamFormat,
} from "./algebra2/config";
import {
  TOPIC_HE as algebra2TopicHe,
  COLORS as algebra2Colors,
  isExcluded as algebra2IsExcluded,
} from "./algebra2/topics";
import { EXAMS as algebra2Exams } from "./algebra2/exams";

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
  algebra2: {
    id: "algebra2",
    COURSE: algebra2Course,
    CHAPTERS: algebra2Chapters,
    EXCLUDED_TOPICS: algebra2ExcludedTopics,
    TREND_FROM_YEAR: algebra2TrendFromYear,
    TRAPS: algebra2Traps,
    EXAM_FORMAT: algebra2ExamFormat,
    TOPIC_HE: algebra2TopicHe,
    COLORS: algebra2Colors,
    isExcluded: algebra2IsExcluded,
    EXAMS: algebra2Exams,
  },
};

export const COURSE_LIST = [COURSE_REGISTRY.infi2, COURSE_REGISTRY.algebra2];

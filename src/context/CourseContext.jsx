import { createContext, useContext, useMemo } from "react";
import { COLORS_UI } from "../styles";

const CourseContext = createContext(null);

export function CourseProvider({ courseData, children }) {
  const colorsUI = useMemo(() => ({
    ...COLORS_UI,
    primary: courseData.CHAPTERS[0].color,
    secondary: courseData.CHAPTERS[1]?.chipColor ?? courseData.CHAPTERS[1]?.color ?? courseData.CHAPTERS[0].color,
    chapter: Object.fromEntries(courseData.CHAPTERS.map((ch) => [ch.key, ch.color])),
  }), [courseData.CHAPTERS]);

  const value = useMemo(() => ({ ...courseData, colorsUI }), [courseData, colorsUI]);

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export function useCourse() {
  return useContext(CourseContext);
}

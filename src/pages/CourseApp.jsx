import { useState, useEffect } from "react";
import { useStats } from "../hooks";
import { c, COLORS_UI } from "../styles";
import { Header, FormatBanner, TabBar } from "../components";
import { Overview, Heatmap, ExamsTab, SearchTab, Insights } from "../tabs";
import { useCourse } from "../context/CourseContext";

export default function CourseApp() {
  const {
    COURSE,
    CHAPTERS,
    EXCLUDED_TOPICS,
    TREND_FROM_YEAR,
    TRAPS,
    EXAM_FORMAT,
    TOPIC_HE,
    COLORS,
    isExcluded,
    EXAMS,
    colorsUI,
  } = useCourse();

  const totalQuestions = EXAMS.reduce((s, e) => s + e.questions.length, 0);
  const minYear = Math.min(...EXAMS.map((e) => e.year));
  const maxYear = Math.max(...EXAMS.map((e) => e.year));

  useEffect(() => {
    document.title = `מדד שאלות - ${COURSE.name} · ${COURSE.number}`;
  }, [COURSE]);

  const [tab, setTab] = useState("overview");

  // ExamsTab filters
  const [examYear, setExamYear] = useState("");
  const [examMoed, setExamMoed] = useState("");

  // SearchTab filters
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTopic, setSearchTopic] = useState("");
  const [searchChapter, setSearchChapter] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchMoed, setSearchMoed] = useState("");

  const stats = useStats(EXAMS);

  return (
    <div style={c}>
      <Header course={COURSE} exams={EXAMS} colorsUI={colorsUI} />
      <FormatBanner chapters={CHAPTERS} examFormat={EXAM_FORMAT} colorsUI={colorsUI} />
      <TabBar tab={tab} setTab={setTab} />

      {tab === "overview" && (
        <Overview
          stats={stats}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
          setSearchChapter={setSearchChapter}
          setSearchType={setSearchType}
          exams={EXAMS}
          topicHe={TOPIC_HE}
          colors={COLORS}
          isExcluded={isExcluded}
          chapters={CHAPTERS}
          colorsUI={colorsUI}
        />
      )}
      {tab === "heatmap" && (
        <Heatmap
          stats={stats}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
          exams={EXAMS}
          topicHe={TOPIC_HE}
          isExcluded={isExcluded}
          colorsUI={colorsUI}
        />
      )}
      {tab === "exams" && (
        <ExamsTab
          yearFilter={examYear}
          setYearFilter={setExamYear}
          moedFilter={examMoed}
          setMoedFilter={setExamMoed}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
          exams={EXAMS}
          topicHe={TOPIC_HE}
          isExcluded={isExcluded}
          colorsUI={colorsUI}
        />
      )}
      {tab === "search" && (
        <SearchTab
          query={searchQuery}
          setQuery={setSearchQuery}
          topic={searchTopic}
          setTopic={setSearchTopic}
          chapter={searchChapter}
          setChapter={setSearchChapter}
          type={searchType}
          setType={setSearchType}
          year={searchYear}
          setYear={setSearchYear}
          moed={searchMoed}
          setMoed={setSearchMoed}
          exams={EXAMS}
          topicHe={TOPIC_HE}
          isExcluded={isExcluded}
          chapters={CHAPTERS}
          colorsUI={colorsUI}
        />
      )}
      {tab === "insights" && (
        <Insights
          stats={stats}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
          exams={EXAMS}
          topicHe={TOPIC_HE}
          excludedTopics={EXCLUDED_TOPICS}
          traps={TRAPS}
          trendFromYear={TREND_FROM_YEAR}
          colorsUI={colorsUI}
        />
      )}

      <div
        style={{
          marginTop: 28,
          paddingTop: 14,
          borderTop: `1px solid ${COLORS_UI.border}`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 12,
          color: COLORS_UI.text,
        }}
      >
        <span>
          סיווג ידני · {EXAMS.length} מבחנים · {totalQuestions} שאלות
        </span>
        <span>
          {minYear}–{maxYear} · v2.0
        </span>
      </div>
    </div>
  );
}

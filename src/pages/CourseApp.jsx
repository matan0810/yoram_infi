import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useStats, useProgress, useLabels } from "../hooks";
import { COLORS_UI } from "../styles";
import { Header, FormatBanner, TabBar } from "../components";
import { Overview, Heatmap, ExamsTab, SearchTab, Insights } from "../tabs";
import { useCourse } from "../context/CourseContext";
import { examMatchesLecturer, buildLecturersList } from "../utils/exam";

function ScrollProgress({ color }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        height: 3,
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: color,
          opacity: 0.65,
          transition: "width 0.08s linear",
        }}
      />
    </div>
  );
}

function useParam(params, setParams, key) {
  const value = params.get(key) ?? "";
  const setValue = useCallback(
    (v) =>
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (v) next.set(key, v);
          else next.delete(key);
          return next;
        },
        { replace: true },
      ),
    [setParams, key],
  );
  return [value, setValue];
}

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

  const courseId = COURSE.number;

  const {
    isDone,
    toggleDone,
    resetProgress,
    doneCount,
    doneVersion,
    studyMode,
    toggleStudyMode,
  } = useProgress(courseId);

  const { hasLabel, toggleLabel, labelsVersion } = useLabels(courseId);

  const [searchParams, setSearchParams] = useSearchParams();

  const [tab, setTab] = useParam(searchParams, setSearchParams, "tab");
  const activeTab = tab || "overview";
  const setActiveTab = useCallback(
    (v) => setTab(v === "overview" ? "" : v),
    [setTab],
  );

  // Global lecturer mode
  const [activeLecturer, setActiveLecturer] = useParam(
    searchParams,
    setSearchParams,
    "activeLecturer",
  );

  // ExamsTab filters
  const [examYear, setExamYear] = useParam(searchParams, setSearchParams, "examYear");
  const [examMoed, setExamMoed] = useParam(searchParams, setSearchParams, "examMoed");
  const [examLecturer, setExamLecturer] = useParam(searchParams, setSearchParams, "examLecturer");

  // SearchTab filters
  const [searchQuery, setSearchQuery] = useParam(searchParams, setSearchParams, "q");
  const [searchTopic, setSearchTopic] = useParam(searchParams, setSearchParams, "topic");
  const [searchChapter, setSearchChapter] = useParam(searchParams, setSearchParams, "chapter");
  const [searchType, setSearchType] = useParam(searchParams, setSearchParams, "type");
  const [searchYear, setSearchYear] = useParam(searchParams, setSearchParams, "year");
  const [searchMoed, setSearchMoed] = useParam(searchParams, setSearchParams, "moed");
  const [searchLecturer, setSearchLecturer] = useParam(searchParams, setSearchParams, "lecturer");
  const [searchProgressFilter, setSearchProgressFilter] = useParam(
    searchParams,
    setSearchParams,
    "progress",
  );

  // When activeLecturer is set, all tabs see only that lecturer's exams
  const displayExams = useMemo(
    () =>
      activeLecturer
        ? EXAMS.filter((e) => examMatchesLecturer(e, activeLecturer))
        : EXAMS,
    [EXAMS, activeLecturer],
  );

  const lecturers = useMemo(() => buildLecturersList(EXAMS), [EXAMS]);

  const totalQuestions = displayExams.reduce((s, e) => s + e.questions.length, 0);
  const minYear = displayExams.length ? Math.min(...displayExams.map((e) => e.year)) : 0;
  const maxYear = displayExams.length ? Math.max(...displayExams.map((e) => e.year)) : 0;

  useEffect(() => {
    document.title = `מדד שאלות - ${COURSE.name} · ${COURSE.number}`;
  }, [COURSE]);

  const stats = useStats(displayExams);

  // Atomic navigation: sets tab=search + one filter in a single setSearchParams call.
  // Calling setSearchParams twice in one event loses the first update (React Router batches
  // with the original prev, not the updated one), so we must do both in one call.
  const goToSearch = useCallback(
    (filterKey, filterValue) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.set("tab", "search");
          if (filterValue) next.set(filterKey, filterValue);
          else next.delete(filterKey);
          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const goToTopic   = useCallback((v) => goToSearch("topic",   v), [goToSearch]);
  const goToChapter = useCallback((v) => goToSearch("chapter", v), [goToSearch]);
  const goToType    = useCallback((v) => goToSearch("type",    v), [goToSearch]);

  // Atomic clear for all search filters — same reason as goToSearch
  const clearSearchFilters = useCallback(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      ["q", "topic", "chapter", "type", "year", "moed", "lecturer", "progress"].forEach(
        (k) => next.delete(k),
      );
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  // Derive format banner info from the actual latest exam (not hardcoded config)
  const latestExam = useMemo(() => {
    if (!EXAMS.length) return null;
    return [...EXAMS].sort((a, b) =>
      b.year !== a.year ? b.year - a.year : b.moed > a.moed ? 1 : -1,
    )[0];
  }, [EXAMS]);

  const derivedExamFormat = useMemo(() => {
    if (!EXAM_FORMAT || !latestExam) return EXAM_FORMAT;
    return {
      ...EXAM_FORMAT,
      latestSession: `${latestExam.year} מועד ${latestExam.moed}`,
      latestDate: latestExam.date ?? "",
      lecturer: latestExam.lecturers?.[0] ?? "",
    };
  }, [EXAM_FORMAT, latestExam]);

  // Progress + label callbacks — only wired through when study mode is on
  const studyProps = studyMode
    ? { isDone, toggleDone, hasLabel, toggleLabel }
    : {};

  return (
    <div className="course-page">
      <ScrollProgress color={colorsUI.primary} />
      <Header
        course={COURSE}
        exams={displayExams}
        colorsUI={colorsUI}
        doneCount={doneCount}
        totalQuestions={totalQuestions}
        resetProgress={resetProgress}
        studyMode={studyMode}
        toggleStudyMode={toggleStudyMode}
        activeLecturer={activeLecturer}
        setActiveLecturer={setActiveLecturer}
        lecturers={lecturers}
      />
      <FormatBanner chapters={CHAPTERS} examFormat={derivedExamFormat} colorsUI={colorsUI} />
      <TabBar tab={activeTab} setTab={setActiveTab} />

      {activeTab === "overview" && (
        <Overview
          stats={stats}
          setSearchTopic={goToTopic}
          setSearchChapter={goToChapter}
          setSearchType={goToType}
          exams={displayExams}
          topicHe={TOPIC_HE}
          colors={COLORS}
          isExcluded={isExcluded}
          chapters={CHAPTERS}
          colorsUI={colorsUI}
        />
      )}
      {activeTab === "heatmap" && (
        <Heatmap
          stats={stats}
          setSearchTopic={goToTopic}
          exams={displayExams}
          topicHe={TOPIC_HE}
          isExcluded={isExcluded}
          colorsUI={colorsUI}
        />
      )}
      {activeTab === "exams" && (
        <ExamsTab
          yearFilter={examYear}
          setYearFilter={setExamYear}
          moedFilter={examMoed}
          setMoedFilter={setExamMoed}
          lecturerFilter={examLecturer}
          setLecturerFilter={setExamLecturer}
          setSearchTopic={goToTopic}
          exams={displayExams}
          topicHe={TOPIC_HE}
          isExcluded={isExcluded}
          colorsUI={colorsUI}
          studyMode={studyMode}
          {...studyProps}
        />
      )}
      {activeTab === "search" && (
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
          lecturer={searchLecturer}
          setLecturer={setSearchLecturer}
          exams={displayExams}
          topicHe={TOPIC_HE}
          isExcluded={isExcluded}
          chapters={CHAPTERS}
          colorsUI={colorsUI}
          studyMode={studyMode}
          progressFilter={searchProgressFilter}
          setProgressFilter={setSearchProgressFilter}
          clearAll={clearSearchFilters}
          doneVersion={doneVersion}
          labelsVersion={labelsVersion}
          {...studyProps}
        />
      )}
      {activeTab === "insights" && (
        <Insights
          stats={stats}
          setSearchTopic={goToTopic}
          exams={displayExams}
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
          fontSize: 11,
          color: COLORS_UI.muted,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ flex: 1 }}>
          סיווג ידני · {displayExams.length} מבחנים · {totalQuestions} שאלות · {minYear}–{maxYear}
        </span>
        <span style={{ flex: 2, textAlign: "center" }}>
          האפליקציה מיועדת לשימוש אישי בלבד לצורכי לימוד.
        </span>
        <span style={{ flex: 1, textAlign: "end" }}>v2.0</span>
      </div>
    </div>
  );
}

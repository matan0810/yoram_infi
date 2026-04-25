import { useState, useEffect } from "react";
import { useStats } from "./hooks";
import { c, COLORS_UI } from "./styles";
import { Header, FormatBanner, TabBar } from "./components";
import { Overview, Heatmap, ExamsTab, SearchTab, Insights } from "./tabs";
import { EXAMS, COURSE } from "./data";

const TOTAL_QUESTIONS = EXAMS.reduce(
  (sum, exam) => sum + exam.questions.length,
  0,
);
const MIN_YEAR = Math.min(...EXAMS.map((e) => e.year));
const MAX_YEAR = Math.max(...EXAMS.map((e) => e.year));

export default function App() {
  useEffect(() => {
    document.title = `מדד שאלות - ${COURSE.name} · ${COURSE.number}`;
  }, []);

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

  const stats = useStats();

  return (
    <div style={c}>
      <Header />
      <FormatBanner />
      <TabBar tab={tab} setTab={setTab} />

      {tab === "overview" && (
        <Overview
          stats={stats}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
          setSearchChapter={setSearchChapter}
          setSearchType={setSearchType}
        />
      )}
      {tab === "heatmap" && (
        <Heatmap
          stats={stats}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
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
        />
      )}
      {tab === "insights" && (
        <Insights
          stats={stats}
          setTab={setTab}
          setSearchTopic={setSearchTopic}
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
          סיווג ידני · {EXAMS.length} מבחנים · {TOTAL_QUESTIONS} שאלות
        </span>
        <span>
          {MIN_YEAR}–{MAX_YEAR} · v2.0
        </span>
      </div>
    </div>
  );
}

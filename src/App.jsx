import { useState } from "react";
import { useStats } from "./hooks/useStats";
import { c } from "./styles/theme";
import Header from "./components/Header";
import FormatBanner from "./components/FormatBanner";
import TabBar from "./components/TabBar";
import Overview from "./tabs/Overview";
import Heatmap from "./tabs/Heatmap";
import ExamsTab from "./tabs/ExamsTab";
import SearchTab from "./tabs/SearchTab";
import Insights from "./tabs/Insights";
import { EXAMS } from "./data/exams";

const TOTAL_QUESTIONS = EXAMS.reduce((sum, exam) => sum + exam.questions.length, 0);
const MIN_YEAR = Math.min(...EXAMS.map((e) => e.year));
const MAX_YEAR = Math.max(...EXAMS.map((e) => e.year));

export default function App() {
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
        <Overview stats={stats} setTab={setTab} setSearchTopic={setSearchTopic} />
      )}
      {tab === "heatmap" && (
        <Heatmap stats={stats} setTab={setTab} setSearchTopic={setSearchTopic} />
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
      {tab === "insights" && <Insights stats={stats} />}

      <div
        style={{
          marginTop: 28,
          paddingTop: 14,
          borderTop: "1px solid #d4cfbf",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 12,
          color: "#4a4740",
        }}
      >
        <span>סיווג ידני · {EXAMS.length} מבחנים · {TOTAL_QUESTIONS} שאלות</span>
        <span>{MIN_YEAR}–{MAX_YEAR} · v2.0</span>
      </div>
    </div>
  );
}

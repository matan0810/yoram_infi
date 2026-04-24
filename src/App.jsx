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

const TOTAL_QUESTIONS = EXAMS.reduce((s, e) => s + e.questions.length, 0);
const MIN_YEAR = Math.min(...EXAMS.map((e) => e.year));
const MAX_YEAR = Math.max(...EXAMS.map((e) => e.year));

export default function App() {
  const [tab, setTab] = useState("overview");
  const [yf, setYf] = useState("");
  const [mf, setMf] = useState("");
  const [sq, setSq] = useState("");
  const [st, setSt] = useState("");
  const [sch, setSch] = useState("");
  const [sty, setSty] = useState("");
  const [sy, setSy] = useState("");
  const [sm, setSm] = useState("");

  const stats = useStats();

  return (
    <div style={c}>
      <Header />
      <FormatBanner />
      <TabBar tab={tab} setTab={setTab} />

      {tab === "overview" && (
        <Overview stats={stats} setTab={setTab} setSt={setSt} />
      )}
      {tab === "heatmap" && (
        <Heatmap stats={stats} setTab={setTab} setSt={setSt} />
      )}
      {tab === "exams" && (
        <ExamsTab
          yf={yf}
          setYf={setYf}
          mf={mf}
          setMf={setMf}
          setTab={setTab}
          setSt={setSt}
        />
      )}
      {tab === "search" && (
        <SearchTab
          sq={sq}
          setSq={setSq}
          st={st}
          setSt={setSt}
          sch={sch}
          setSch={setSch}
          sty={sty}
          setSty={setSty}
          sy={sy}
          setSy={setSy}
          sm={sm}
          setSm={setSm}
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
          fontFamily: "Heebo, system-ui, sans-serif",
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

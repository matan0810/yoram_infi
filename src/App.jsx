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

export default function App() {
  const [tab, setTab] = useState("overview");
  const [yf, setYf] = useState("");
  const [mf, setMf] = useState("");
  const [sq, setSq] = useState("");
  const [st, setSt] = useState("");
  const [sch, setSch] = useState("");
  const [sty, setSty] = useState("");

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
        />
      )}
      {tab === "insights" && <Insights stats={stats} />}

      <div
        style={{
          marginTop: 28,
          paddingTop: 14,
          borderTop: "2px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          fontFamily: "monospace",
          fontSize: 9,
          color: "#6d6a5e",
          textTransform: "uppercase",
        }}
      >
        <span>סיווג ידני · 17 מבחנים · 198 שאלות</span>
        <span>כולל מועד א׳ תשפ״ו · 2006–2026 · v2.0</span>
      </div>
    </div>
  );
}

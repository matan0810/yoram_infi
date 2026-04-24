import { useMemo } from "react";
import Chip, { tc } from "../components/Chip";
import { card, inp } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE } from "../data/topics";

export default function ExamsTab({ yf, setYf, mf, setMf, setTab, setSt }) {
  const years = useMemo(
    () => [...new Set(EXAMS.map((e) => e.year))].sort(),
    [],
  );

  const fex = useMemo(
    () =>
      EXAMS.filter((ex) => {
        if (yf && String(ex.year) !== yf) return false;
        if (mf && ex.moed !== mf) return false;
        return true;
      }),
    [yf, mf],
  );

  return (
    <div>
      <div
        style={{
          ...card,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            color: "#6d6a5e",
            textTransform: "uppercase",
          }}
        >
          סנן:
        </span>
        <select value={yf} onChange={(e) => setYf(e.target.value)} style={inp}>
          <option value="">כל השנים</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select value={mf} onChange={(e) => setMf(e.target.value)} style={inp}>
          <option value="">כל המועדים</option>
          <option value="א">מועד א</option>
          <option value="ב">מועד ב</option>
        </select>
        <span
          style={{ fontFamily: "monospace", fontSize: 11, color: "#6d6a5e" }}
        >
          {fex.length} מבחנים ·{" "}
          {fex.reduce((s, e) => s + e.questions.length, 0)} שאלות
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))",
          gap: 18,
        }}
      >
        {fex.map((ex) => (
          <div
            key={ex.code}
            style={{
              ...card,
              border: ex.year === 2026 ? "2px solid #c1440e" : "1px solid #1a1a1a",
              background: ex.year === 2026 ? "#fef8f3" : "white",
              boxShadow: "3px 3px 0 #1a1a1a",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia,serif",
                  fontWeight: 900,
                  fontSize: 22,
                }}
              >
                {ex.code}
              </div>
              {ex.year === 2026 && <Chip kind="hot">המבחן שלך!</Chip>}
            </div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: "#6d6a5e",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {ex.date} · {ex.chapter_structure} · {ex.questions.length} שאלות
            </div>
            {ex.questions.map((q) => (
              <div
                key={q.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "34px 1fr",
                  gap: 8,
                  padding: "7px 0",
                  borderBottom: "1px dotted #d4cfbf",
                  alignItems: "start",
                  fontSize: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: 11,
                    background: "#ece7dc",
                    padding: "2px 4px",
                    textAlign: "center",
                    border: "1px solid #d4cfbf",
                  }}
                >
                  {q.id}
                </span>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: 3,
                      flexWrap: "wrap",
                      marginBottom: 4,
                    }}
                  >
                    <Chip kind={q.chapter}>פרק {q.chapter}</Chip>
                    <Chip kind={tc(q.type)}>{q.type}</Chip>
                    <span
                      onClick={() => {
                        setTab("search");
                        setSt(q.topic);
                      }}
                      style={{
                        fontFamily: "monospace",
                        fontSize: 9,
                        color: "#2b4162",
                        border: "1px dashed #2b4162",
                        padding: "2px 6px",
                        cursor: "pointer",
                      }}
                    >
                      {TOPIC_HE[q.topic] || q.topic}
                    </span>
                  </div>
                  <div style={{ lineHeight: 1.4 }}>{q.summary}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

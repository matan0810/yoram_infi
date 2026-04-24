import { useMemo } from "react";
import Chip, { tc } from "../components/Chip";
import { card, inp } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE, isExcluded } from "../data/topics";
import ExcludedTag from "../components/ExcludedTag";
import MathText from "../components/MathText";

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
      {/* Filter bar */}
      <div style={{ ...card, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <select value={yf} onChange={(e) => setYf(e.target.value)} style={inp}>
          <option value="">כל השנים</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select value={mf} onChange={(e) => setMf(e.target.value)} style={inp}>
          <option value="">כל המועדים</option>
          <option value="א">מועד א</option>
          <option value="ב">מועד ב</option>
        </select>
        <span style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 13, fontWeight: 700, background: "#1a1a1a", color: "#f4f1ea", padding: "4px 10px" }}>
          {fex.length} מבחנים · {fex.reduce((s, e) => s + e.questions.length, 0)} שאלות
        </span>
        {(yf || mf) && (
          <button
            onClick={() => { setYf(""); setMf(""); }}
            style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 13, background: "transparent", border: "1px solid #d4cfbf", padding: "5px 12px", cursor: "pointer", color: "#4a4740" }}
          >
            נקה סינון
          </button>
        )}
      </div>

      {/* Exam cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 18 }}>
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
            {/* Exam header */}
            <div style={{ marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #d4cfbf" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div style={{ fontFamily: "Frank Ruhl Libre, Georgia, serif", fontWeight: 900, fontSize: 26, lineHeight: 1 }}>
                  {ex.year}
                </div>
                <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 700, fontSize: 15 }}>
                  מועד {ex.moed}
                </div>
                {ex.year === 2026 && <Chip kind="hot">המבחן שלך!</Chip>}
              </div>
              <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 11, color: "#9b9890", marginTop: 3 }}>
                מבנה {ex.chapter_structure} · {ex.questions.length} שאלות
              </div>
            </div>

            {/* Questions — compact single-line rows */}
            {ex.questions.map((q) => {
              const excl = isExcluded(q.topic);
              const qNum = q.id.replace(/^[א-ת]/, "");
              return (
                <div
                  key={q.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 8,
                    padding: "6px 0",
                    borderBottom: "1px solid #ede9e0",
                    alignItems: "baseline",
                    opacity: excl ? 0.45 : 1,
                  }}
                >
                  <div style={{ fontFamily: "Frank Ruhl Libre, Georgia, serif", fontWeight: 900, fontSize: 16, color: "#c1440e", textAlign: "center" }}>
                    {qNum}
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap", alignItems: "center", marginBottom: 2 }}>
                      <Chip kind={q.chapter}>פרק {q.chapter}</Chip>
                      <Chip kind={tc(q.type)}>{q.type}</Chip>
                      <span
                        onClick={() => { setTab("search"); setSt(q.topic); }}
                        style={{
                          fontFamily: "Heebo, system-ui, sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: excl ? "#9b9890" : "#2b4162",
                          border: `1px dashed ${excl ? "#b0aca4" : "#2b4162"}`,
                          padding: "1px 6px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        {excl && <ExcludedTag />}
                        {TOPIC_HE[q.topic] || q.topic}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, lineHeight: 1.4, color: "#4a4740" }}><MathText>{q.summary}</MathText></div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

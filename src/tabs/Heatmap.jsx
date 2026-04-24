import { useMemo } from "react";
import { card } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE, isExcluded } from "../data/topics";
import ExcludedTag, { excludedRowStyle } from "../components/ExcludedTag";

function heatColor(n) {
  if (n === 0) return "#ece7dc";
  if (n === 1) return "#fde9d9";
  if (n === 2) return "#f5c39a";
  if (n === 3) return "#ec965a";
  if (n === 4) return "#c1440e";
  return "#8a2a06";
}

const LEGEND = [
  { bg: "#ece7dc", label: "0" },
  { bg: "#fde9d9", label: "1" },
  { bg: "#f5c39a", label: "2" },
  { bg: "#ec965a", label: "3" },
  { bg: "#c1440e", label: "4" },
  { bg: "#8a2a06", label: "5+" },
];

export default function Heatmap({ stats, setTab, setSt }) {
  const sorted = useMemo(
    () => Object.entries(stats.tc).sort((a, b) => b[1] - a[1]),
    [stats],
  );

  return (
    <div style={card}>
      {/* Header — same pattern as Insights & Overview */}
      <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #d4cfbf" }}>
        <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em" }}>
          🗺️ מפת חום — נושאים × מבחנים
        </div>
        <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 12, color: "#9b9890", marginTop: 3 }}>
          כהה יותר = יותר שאלות · לחץ על תא לחיפוש · עמודת 2026 מסומנת
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 11, minWidth: 1000 }}>
          <thead>
            <tr>
              <th style={{
                padding: "4px 16px 4px 0",
                textAlign: "right",
                fontFamily: "Heebo, system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "#4a4740",
                minWidth: 200,
              }}>
                נושא
              </th>
              {EXAMS.map((ex) => (
                <th key={ex.code} style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  padding: "6px 3px",
                  fontFamily: "Heebo, system-ui, sans-serif",
                  fontSize: 9,
                  color: ex.year === 2026 ? "#c1440e" : "#6d6a5e",
                  fontWeight: ex.year === 2026 ? 800 : 500,
                  minWidth: 34,
                  whiteSpace: "nowrap",
                }}>
                  {ex.year}/{ex.moed}
                </th>
              ))}
              <th style={{
                fontFamily: "Heebo, system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: "#f4f1ea",
                background: "#1a1a1a",
                padding: "4px 8px",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>
                סה״כ
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(([tk, totalCount]) => {
              const excl = isExcluded(tk);
              return (
                <tr key={tk} style={excl ? { ...excludedRowStyle, pointerEvents: "auto" } : {}}>
                  <td style={{
                    padding: "5px 16px 5px 0",
                    textAlign: "right",
                    fontSize: 12,
                    fontFamily: "Heebo, system-ui, sans-serif",
                    fontWeight: 600,
                    color: excl ? "#9b9890" : "#1a1a1a",
                    borderLeft: "2px solid #d4cfbf",
                    whiteSpace: "nowrap",
                  }}>
                    {excl && <ExcludedTag />}
                    {TOPIC_HE[tk] || tk}
                  </td>
                  {EXAMS.map((ex) => {
                    const n = stats.yt[ex.code][tk] || 0;
                    return (
                      <td
                        key={ex.code}
                        onClick={() => { if (n > 0 && !excl) { setTab("search"); setSt(tk); } }}
                        title={n ? `${TOPIC_HE[tk]} · ${ex.year} מועד ${ex.moed} · ${n} שאלות` : ""}
                        style={{
                          background: heatColor(n),
                          color: n > 2 ? "white" : n > 0 ? "#c1440e" : "transparent",
                          textAlign: "center",
                          fontFamily: "Heebo, system-ui, sans-serif",
                          fontWeight: 800,
                          fontSize: 11,
                          padding: "3px 2px",
                          cursor: n > 0 && !excl ? "pointer" : "default",
                          border: ex.year === 2026 ? "2px solid #c1440e" : "1px solid #f4f1ea",
                          minWidth: 32,
                          height: 30,
                        }}
                      >
                        {n || ""}
                      </td>
                    );
                  })}
                  <td style={{
                    textAlign: "center",
                    fontFamily: "Heebo, system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 12,
                    background: "#1a1a1a",
                    color: "#f4f1ea",
                    padding: "3px 10px",
                  }}>
                    {totalCount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div style={{
        marginTop: 14,
        paddingTop: 12,
        borderTop: "1px solid #ede9e0",
        display: "flex",
        gap: 6,
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <span style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 11, color: "#6d6a5e", marginLeft: 8 }}>
          מס׳ שאלות לפי מבחן:
        </span>
        {LEGEND.map(({ bg, label }) => (
          <span key={bg} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 20, height: 20, background: bg, display: "inline-block", border: "1px solid #d4cfbf" }} />
            <span style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 11, fontWeight: 600, color: "#4a4740" }}>
              {label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

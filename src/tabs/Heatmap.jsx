import { useMemo } from "react";
import { card } from "../styles";
import { CardTitle, ExcludedTag, excludedRowStyle } from "../components";
import { EXAMS, TOPIC_HE, isExcluded } from "../data";

function heatColor(count) {
  if (count === 0) return "#ece7dc";
  if (count === 1) return "#fde9d9";
  if (count === 2) return "#f5c39a";
  if (count === 3) return "#ec965a";
  if (count === 4) return "#c1440e";
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

export default function Heatmap({ stats, setTab, setSearchTopic }) {
  const sortedTopics = useMemo(
    () => Object.entries(stats.topicCounts).sort((a, b) => b[1] - a[1]),
    [stats],
  );

  return (
    <div style={card}>
      <CardTitle
        emoji="🗺️"
        title="מפת חום — נושאים × מבחנים"
        sub="כהה יותר = יותר שאלות · לחץ על תא לחיפוש · עמודת 2026 מסומנת"
      />

      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 11, minWidth: 1000 }}>
          <thead>
            <tr>
              <th style={{
                padding: "4px 16px 4px 0",
                textAlign: "right",
                fontSize: 11,
                fontWeight: 700,
                color: "#4a4740",
                minWidth: 200,
              }}>
                נושא
              </th>
              {EXAMS.map((exam) => (
                <th key={exam.code} style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  padding: "6px 3px",
                  fontSize: 9,
                  color: exam.year === 2026 ? "#c1440e" : "#6d6a5e",
                  fontWeight: exam.year === 2026 ? 800 : 500,
                  minWidth: 34,
                  whiteSpace: "nowrap",
                }}>
                  {exam.year}/{exam.moed}
                </th>
              ))}
              <th style={{
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
            {sortedTopics.map(([topicKey, totalCount]) => {
              const excluded = isExcluded(topicKey);
              return (
                <tr key={topicKey} style={excluded ? { ...excludedRowStyle, pointerEvents: "auto" } : {}}>
                  <td style={{
                    padding: "5px 16px 5px 0",
                    textAlign: "right",
                    fontSize: 12,
                    fontWeight: 600,
                    color: excluded ? "#9b9890" : "#1a1a1a",
                    borderLeft: "2px solid #d4cfbf",
                    whiteSpace: "nowrap",
                  }}>
                    {excluded && <ExcludedTag />}
                    {TOPIC_HE[topicKey] || topicKey}
                  </td>
                  {EXAMS.map((exam) => {
                    const count = stats.examTopics[exam.code][topicKey] || 0;
                    return (
                      <td
                        key={exam.code}
                        onClick={() => { if (count > 0 && !excluded) { setTab("search"); setSearchTopic(topicKey); } }}
                        title={count ? `${TOPIC_HE[topicKey]} · ${exam.year} מועד ${exam.moed} · ${count} שאלות` : ""}
                        style={{
                          background: heatColor(count),
                          color: count > 2 ? "white" : count > 0 ? "#c1440e" : "transparent",
                          textAlign: "center",
                          fontWeight: 800,
                          fontSize: 11,
                          padding: "3px 2px",
                          cursor: count > 0 && !excluded ? "pointer" : "default",
                          border: exam.year === 2026 ? "2px solid #c1440e" : "1px solid #f4f1ea",
                          minWidth: 32,
                          height: 30,
                        }}
                      >
                        {count || ""}
                      </td>
                    );
                  })}
                  <td style={{
                    textAlign: "center",
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

      <div style={{
        marginTop: 14,
        paddingTop: 12,
        borderTop: "1px solid #ede9e0",
        display: "flex",
        gap: 6,
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <span style={{ fontSize: 11, color: "#6d6a5e", marginLeft: 8 }}>
          מס׳ שאלות לפי מבחן:
        </span>
        {LEGEND.map(({ bg, label }) => (
          <span key={bg} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 20, height: 20, background: bg, display: "inline-block", border: "1px solid #d4cfbf" }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: "#4a4740" }}>
              {label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

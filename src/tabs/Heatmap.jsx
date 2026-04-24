import { useMemo } from "react";
import { card } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE } from "../data/topics";

function heatColor(n) {
  if (n === 0) return "#ece7dc";
  if (n === 1) return "#fde9d9";
  if (n === 2) return "#f5c39a";
  if (n === 3) return "#ec965a";
  if (n === 4) return "#c1440e";
  return "#8a2a06";
}

export default function Heatmap({ stats, setTab, setSt }) {
  const sorted = useMemo(
    () => Object.entries(stats.tc).sort((a, b) => b[1] - a[1]),
    [stats],
  );

  return (
    <div style={card}>
      <div
        style={{
          fontFamily: "Frank Ruhl Libre, Georgia, serif",
          fontWeight: 700,
          fontSize: 18,
          marginBottom: 4,
          paddingBottom: 8,
          borderBottom: "1px solid #d4cfbf",
        }}
      >
        מפת חום — נושאים × מבחנים
      </div>
      <div style={{ fontSize: 12, color: "#6d6a5e", marginBottom: 12 }}>
        כהה יותר = יותר שאלות. לחץ על תא לחיפוש. עמודת 2026 מסומנת.
      </div>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            borderCollapse: "collapse",
            fontSize: 11,
            minWidth: 1000,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "4px 12px 4px 0",
                  textAlign: "right",
                  fontFamily: "monospace",
                  fontSize: 9,
                  color: "#6d6a5e",
                  minWidth: 200,
                }}
              >
                נושא
              </th>
              {EXAMS.map((ex) => (
                <th
                  key={ex.code}
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    padding: "4px 2px",
                    fontFamily: "monospace",
                    fontSize: 8,
                    color: ex.year === 2026 ? "#c1440e" : "#6d6a5e",
                    fontWeight: ex.year === 2026 ? 700 : 400,
                    minWidth: 34,
                    whiteSpace: "nowrap",
                  }}
                >
                  {ex.code}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map(([tk]) => (
              <tr key={tk}>
                <td
                  style={{
                    padding: "4px 12px 4px 0",
                    textAlign: "right",
                    fontSize: 11,
                    fontWeight: 500,
                    borderLeft: "2px solid #d4cfbf",
                    whiteSpace: "nowrap",
                  }}
                >
                  {TOPIC_HE[tk] || tk}
                </td>
                {EXAMS.map((ex) => {
                  const n = stats.yt[ex.code][tk] || 0;
                  const bg = heatColor(n);
                  return (
                    <td
                      key={ex.code}
                      onClick={() => {
                        if (n > 0) {
                          setTab("search");
                          setSt(tk);
                        }
                      }}
                      title={
                        n ? `${TOPIC_HE[tk]} · ${ex.code} · ${n} שאלות` : ""
                      }
                      style={{
                        background: bg,
                        color: n > 2 ? "white" : "#c1440e",
                        textAlign: "center",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "4px 2px",
                        cursor: n > 0 ? "pointer" : "default",
                        border:
                          ex.year === 2026
                            ? "2px solid #c1440e"
                            : "1px solid #f4f1ea",
                        minWidth: 32,
                        height: 28,
                      }}
                    >
                      {n || ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          marginTop: 12,
          display: "flex",
          gap: 6,
          alignItems: "center",
          fontFamily: "monospace",
          fontSize: 10,
          color: "#6d6a5e",
        }}
      >
        פחות{" "}
        {["#ece7dc", "#fde9d9", "#f5c39a", "#ec965a", "#c1440e", "#8a2a06"].map(
          (bg) => (
            <span
              key={bg}
              style={{
                width: 18,
                height: 18,
                background: bg,
                display: "inline-block",
              }}
            />
          ),
        )}{" "}
        יותר
      </div>
    </div>
  );
}

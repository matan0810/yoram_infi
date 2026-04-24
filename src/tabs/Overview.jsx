import { useMemo } from "react";
import Bar from "../components/Bar";
import { card } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE, COLORS, isExcluded } from "../data/topics";
import ExcludedTag, { excludedRowStyle } from "../components/ExcludedTag";

export default function Overview({ stats, setTab, setSt }) {
  const { active, excluded } = useMemo(() => {
    const all = Object.entries(stats.tc).sort((a, b) => b[1] - a[1]);
    return {
      active: all.filter(([k]) => !isExcluded(k)),
      excluded: all.filter(([k]) => isExcluded(k)),
    };
  }, [stats]);
  const mx = active[0]?.[1] || 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: 20,
      }}
    >
      <div style={card}>
        <div
          style={{
            fontFamily: "Frank Ruhl Libre, Georgia, serif",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #d4cfbf",
          }}
        >
          דירוג נושאים{" "}
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              fontWeight: 400,
              color: "#6d6a5e",
            }}
          >
            ↓ לחץ לחיפוש
          </span>
        </div>
        {active.map(([k, v], i) => {
          let ew = 0;
          EXAMS.forEach((ex) => { if (stats.yt[ex.code][k]) ew++; });
          return (
            <Bar
              key={k}
              label={
                <span>
                  {TOPIC_HE[k] || k}
                  <span style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 11, color: "#9b9890", marginRight: 6 }}>
                    {" "}{ew}/{EXAMS.length}
                  </span>
                </span>
              }
              val={v}
              max={mx}
              color={COLORS[i % COLORS.length]}
              pct={Math.round((v / stats.tot) * 100)}
              onClick={() => { setTab("search"); setSt(k); }}
            />
          );
        })}
        {excluded.length > 0 && (
          <>
            <div style={{ borderTop: "1px dashed #d4cfbf", margin: "10px 0 6px", fontSize: 11, color: "#b0aca4", fontFamily: "Heebo, system-ui, sans-serif" }}>
              לא בתכנית הנוכחית
            </div>
            {excluded.map(([k, v]) => {
              let ew = 0;
              EXAMS.forEach((ex) => { if (stats.yt[ex.code][k]) ew++; });
              return (
                <div key={k} style={excludedRowStyle}>
                  <Bar
                    label={<span><ExcludedTag />{TOPIC_HE[k] || k}</span>}
                    val={v}
                    max={mx}
                    color="#b0aca4"
                    pct={Math.round((v / stats.tot) * 100)}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>

      <div>
        <div style={card}>
          <div
            style={{
              fontFamily: "Frank Ruhl Libre, Georgia, serif",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: "1px solid #d4cfbf",
            }}
          >
            פרקים
          </div>
          {[
            ["א", "פרק א — הוכחות", "#c1440e"],
            ["ב", "פרק ב — חישוב+הוכחה", "#2b4162"],
            ["ג", "פרק ג — אמת/שקר", "#3a5a40"],
          ].map(([ch, l, col]) => (
            <Bar
              key={ch}
              label={l}
              val={stats.cc[ch]}
              max={Math.max(...Object.values(stats.cc))}
              color={col}
              pct={Math.round((stats.cc[ch] / stats.tot) * 100)}
            />
          ))}
        </div>

        <div style={card}>
          <div
            style={{
              fontFamily: "Frank Ruhl Libre, Georgia, serif",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: "1px solid #d4cfbf",
            }}
          >
            סוג שאלה
          </div>
          {Object.entries(stats.tyc)
            .sort((a, b) => b[1] - a[1])
            .map(([k, v], i) => (
              <Bar
                key={k}
                label={k}
                val={v}
                max={Object.values(stats.tyc).sort((a, b) => b - a)[0]}
                color={COLORS[i]}
                pct={Math.round((v / stats.tot) * 100)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

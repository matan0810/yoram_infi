import { useMemo } from "react";
import Bar from "../components/Bar";
import { card } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE, COLORS } from "../data/topics";

export default function Overview({ stats, setTab, setSt }) {
  const sorted = useMemo(
    () => Object.entries(stats.tc).sort((a, b) => b[1] - a[1]),
    [stats],
  );
  const mx = sorted[0]?.[1] || 1;

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
        {sorted.map(([k, v], i) => {
          let ew = 0;
          EXAMS.forEach((ex) => {
            if (stats.yt[ex.code][k]) ew++;
          });
          return (
            <Bar
              key={k}
              label={
                <span>
                  {TOPIC_HE[k] || k}
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 9,
                      color: "#6d6a5e",
                      marginRight: 6,
                    }}
                  >
                    {" "}
                    {ew}/{EXAMS.length}
                  </span>
                </span>
              }
              val={v}
              max={mx}
              color={COLORS[i % COLORS.length]}
              pct={Math.round((v / stats.tot) * 100)}
              onClick={() => {
                setTab("search");
                setSt(k);
              }}
            />
          );
        })}
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

import { useMemo } from "react";
import { card } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE } from "../data/topics";

const TRAPS = [
  {
    t: 'fₙ→f במ"ש ⟹ f רציפה',
    n: "חזר 5 פעמים כולל 2026 — חובה מוחלטת בפרק א׳",
  },
  {
    t: "∫xᵅ sin/cos(xᵝ)dx",
    n: "8 פעמים! α>-|β|-1 מתכנס — לדעת בעל פה",
  },
  {
    t: "limsup ≤M ⟹ ∃N∀n>N aₙ≤M",
    n: "2018, 2019, 2021, 2026 — אותה שאלה",
  },
  {
    t: "פונקציית רימן f(p/q)=1/q",
    n: "2017, 2018, 2022, 2026 — תמיד אינטגרבילית",
  },
  {
    t: "Σ(n+1)aₙ₊₁xⁿ, ΣaₙRⁿ עם R>0",
    n: "2018, 2021, 2022, 2023, 2026 — כמעט זהה",
  },
];

export default function Insights({ stats }) {
  const sorted = useMemo(
    () => Object.entries(stats.tc).sort((a, b) => b[1] - a[1]),
    [stats],
  );

  const recentTrend = useMemo(() => {
    const r = {};
    let tot = 0;
    EXAMS.filter((e) => e.year >= 2021).forEach((ex) =>
      ex.questions.forEach((q) => {
        r[q.topic] = (r[q.topic] || 0) + 1;
        tot++;
      }),
    );
    return { entries: Object.entries(r).sort((a, b) => b[1] - a[1]).slice(0, 6), tot };
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: 20,
      }}
    >
      {/* Top topics */}
      <div style={card}>
        <div
          style={{
            fontFamily: "Georgia,serif",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #d4cfbf",
          }}
        >
          🔥 חובה ללמוד{" "}
          <span
            style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 400, color: "#6d6a5e" }}
          >
            Top נושאים
          </span>
        </div>
        {sorted.slice(0, 5).map(([k, v]) => {
          let ew = 0;
          EXAMS.forEach((ex) => { if (stats.yt[ex.code][k]) ew++; });
          return (
            <div
              key={k}
              style={{ padding: "8px 0", borderBottom: "1px dotted #d4cfbf", fontSize: 13, lineHeight: 1.5 }}
            >
              <span
                style={{
                  background: "#1a1a1a",
                  color: "#f4f1ea",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: 10,
                  padding: "1px 6px",
                  marginLeft: 6,
                }}
              >
                {v}
              </span>
              <strong style={{ color: "#c1440e", fontFamily: "Georgia,serif" }}>
                {TOPIC_HE[k]}
              </strong>
              <div style={{ color: "#6d6a5e", fontSize: 11 }}>
                ב-{ew}/{EXAMS.length} מבחנים ({Math.round((ew / EXAMS.length) * 100)}%)
              </div>
            </div>
          );
        })}
      </div>

      {/* Recurring traps */}
      <div style={card}>
        <div
          style={{
            fontFamily: "Georgia,serif",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #d4cfbf",
          }}
        >
          ⚠️ מלכודות חוזרות{" "}
          <span
            style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 400, color: "#6d6a5e" }}
          >
            כמעט זהות
          </span>
        </div>
        {TRAPS.map((item, i) => (
          <div
            key={i}
            style={{ padding: "8px 0", borderBottom: "1px dotted #d4cfbf", fontSize: 13, lineHeight: 1.5 }}
          >
            <strong style={{ color: "#c1440e", display: "block" }}>⚠️ {item.t}</strong>
            <span style={{ color: "#6d6a5e", fontSize: 11 }}>{item.n}</span>
          </div>
        ))}
      </div>

      {/* Recent trend */}
      <div style={card}>
        <div
          style={{
            fontFamily: "Georgia,serif",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #d4cfbf",
          }}
        >
          📈 טרנד 2021–2026
        </div>
        {recentTrend.entries.map(([k, v]) => (
          <div
            key={k}
            style={{ padding: "8px 0", borderBottom: "1px dotted #d4cfbf", fontSize: 13, lineHeight: 1.5 }}
          >
            <span
              style={{
                background: "#1a1a1a",
                color: "#f4f1ea",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 10,
                padding: "1px 6px",
                marginLeft: 6,
              }}
            >
              {v}
            </span>
            <strong style={{ fontFamily: "Georgia,serif" }}>{TOPIC_HE[k]}</strong>
            <span style={{ color: "#6d6a5e", fontSize: 11 }}>
              {" "}— {Math.round((v / recentTrend.tot) * 100)}%
            </span>
          </div>
        ))}
      </div>

      {/* Rare topics */}
      <div style={card}>
        <div
          style={{
            fontFamily: "Georgia,serif",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #d4cfbf",
          }}
        >
          ❄️ פחות שכיח{" "}
          <span
            style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 400, color: "#6d6a5e" }}
          >
            ≤3 שאלות
          </span>
        </div>
        {sorted
          .filter(([, v]) => v <= 3)
          .map(([k, v]) => {
            let ew = 0;
            EXAMS.forEach((ex) => { if (stats.yt[ex.code][k]) ew++; });
            return (
              <div
                key={k}
                style={{ padding: "8px 0", borderBottom: "1px dotted #d4cfbf", fontSize: 13, lineHeight: 1.5 }}
              >
                <span
                  style={{
                    background: "#ece7dc",
                    color: "#6d6a5e",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: 10,
                    padding: "1px 6px",
                    marginLeft: 6,
                  }}
                >
                  {v}
                </span>
                <strong style={{ fontFamily: "Georgia,serif" }}>{TOPIC_HE[k]}</strong>
                <div style={{ color: "#6d6a5e", fontSize: 11 }}>ב-{ew} מבחנים בלבד</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

import { useMemo } from "react";
import { card } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE, EXCLUDED_TOPICS } from "../data/topics";
import MathText from "../components/MathText";

const TRAPS = [
  {
    t: '$f_n \\to f$ במ"ש $\\Rightarrow$ $f$ רציפה',
    n: "חזר 5 פעמים כולל 2026 — חובה מוחלטת בפרק א׳",
  },
  {
    t: "$\\int x^\\alpha \\sin/\\cos(x^\\beta)\\,dx$",
    n: "$\\alpha > -|\\beta| - 1$ מתכנס — לדעת בעל פה",
  },
  {
    t: "$\\limsup \\leq M \\Rightarrow \\exists N\\,\\forall n>N\\; a_n \\leq M$",
    n: "2018, 2019, 2021, 2026 — אותה שאלה",
  },
  {
    t: "פונקציית רימן $f(p/q)=1/q$",
    n: "2017, 2018, 2022, 2026 — תמיד אינטגרבילית",
  },
  {
    t: "$\\sum(n+1)a_{n+1}x^n$, $\\sum a_n R^n$ עם $R>0$",
    n: "2018, 2021, 2022, 2023, 2026 — כמעט זהה",
  },
];

export default function Insights({ stats }) {
  const sorted = useMemo(
    () =>
      Object.entries(stats.tc)
        .filter(([k]) => !EXCLUDED_TOPICS.has(k))
        .sort((a, b) => b[1] - a[1]),
    [stats],
  );

  const overdue = useMemo(() => {
    const lastSeen = {};
    const totalCount = {};
    EXAMS.forEach((ex) => {
      ex.questions.forEach((q) => {
        totalCount[q.topic] = (totalCount[q.topic] || 0) + 1;
        if (!lastSeen[q.topic] || ex.year > lastSeen[q.topic])
          lastSeen[q.topic] = ex.year;
      });
    });
    const maxYear = Math.max(...EXAMS.map((e) => e.year));
    return Object.entries(totalCount)
      .filter(([k, v]) => !EXCLUDED_TOPICS.has(k) && v >= 3 && maxYear - (lastSeen[k] || 0) >= 3)
      .sort((a, b) => lastSeen[a[0]] - lastSeen[b[0]])
      .slice(0, 6)
      .map(([k, v]) => ({ topic: k, count: v, last: lastSeen[k] }));
  }, []);

  const recentTrend = useMemo(() => {
    const r = {};
    let tot = 0;
    EXAMS.filter((e) => e.year >= 2021).forEach((ex) =>
      ex.questions.forEach((q) => {
        if (EXCLUDED_TOPICS.has(q.topic)) return;
        r[q.topic] = (r[q.topic] || 0) + 1;
        tot++;
      }),
    );
    return {
      entries: Object.entries(r)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6),
      tot,
    };
  }, []);

  const cardTitle = (emoji, title, sub) => (
    <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #d4cfbf" }}>
      <div style={{
        fontFamily: "Heebo, system-ui, sans-serif",
        fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em",
      }}>
        {emoji} {title}
      </div>
      {sub && (
        <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 12, color: "#9b9890", marginTop: 3 }}>
          {sub}
        </div>
      )}
    </div>
  );

  const badge = (text, bg = "#1a1a1a", color = "#f4f1ea") => (
    <span style={{
      background: bg, color,
      fontFamily: "Heebo, system-ui, sans-serif",
      fontWeight: 800, fontSize: 13,
      padding: "3px 9px",
      display: "inline-block", flexShrink: 0,
    }}>{text}</span>
  );

  const row = (children) => (
    <div style={{ padding: "11px 0", borderBottom: "1px solid #ede9e0", lineHeight: 1.5 }}>
      {children}
    </div>
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 20 }}>

      {/* Top topics */}
      <div style={card}>
        {cardTitle("🔥", "חובה ללמוד", "הנושאים השכיחים ביותר")}
        {sorted.slice(0, 5).map(([k, v]) => {
          let ew = 0;
          EXAMS.forEach((ex) => { if (stats.yt[ex.code][k]) ew++; });
          return row(
            <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              {badge(v)}
              <div>
                <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 700, fontSize: 14, color: "#c1440e" }}>
                  {TOPIC_HE[k]}
                </div>
                <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>
                  {ew}/{EXAMS.length} מבחנים · {Math.round((ew / EXAMS.length) * 100)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recurring traps */}
      <div style={card}>
        {cardTitle("⚠️", "מלכודות חוזרות", "שאלות כמעט זהות שחזרו מספר פעמים")}
        {TRAPS.map((item, i) => row(
          <div key={i}>
            <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 700, fontSize: 14, color: "#c1440e", marginBottom: 4 }}>
              <MathText>{item.t}</MathText>
            </div>
            <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontSize: 12, color: "#9b9890" }}><MathText>{item.n}</MathText></div>
          </div>
        ))}
      </div>

      {/* Recent trend */}
      <div style={card}>
        {cardTitle("📈", "טרנד 2021–2026", "הנושאים הדומיננטיים בשנים האחרונות")}
        {recentTrend.entries.map(([k, v]) => row(
          <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            {badge(v)}
            <div>
              <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 700, fontSize: 14 }}>
                {TOPIC_HE[k]}
              </div>
              <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>
                {Math.round((v / recentTrend.tot) * 100)}% מהשאלות
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overdue topics */}
      <div style={card}>
        {cardTitle("🎯", "צפוי לבוא", "שכיח היסטורית אך לא הופיע 3+ שנים")}
        {overdue.length === 0 ? (
          <div style={{ color: "#9b9890", fontSize: 13, fontStyle: "italic" }}>אין נושאים כאלה</div>
        ) : overdue.map(({ topic, count, last }) => row(
          <div key={topic} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            {badge(`${count}×`, "#c1440e")}
            <div>
              <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 700, fontSize: 14 }}>
                {TOPIC_HE[topic] || topic}
              </div>
              <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>
                נראה לאחרונה {last} · {new Date().getFullYear() - last} שנים ללא הופעה
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rare topics */}
      <div style={card}>
        {cardTitle("❄️", "פחות שכיח", "נושאים עם ≤3 שאלות בסך הכל")}
        {sorted.filter(([, v]) => v <= 3).map(([k, v]) => {
          let ew = 0;
          EXAMS.forEach((ex) => { if (stats.yt[ex.code][k]) ew++; });
          return row(
            <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              {badge(v, "#ece7dc", "#4a4740")}
              <div>
                <div style={{ fontFamily: "Heebo, system-ui, sans-serif", fontWeight: 700, fontSize: 14 }}>
                  {TOPIC_HE[k]}
                </div>
                <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>ב-{ew} מבחנים בלבד</div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

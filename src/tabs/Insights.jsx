import { useMemo } from "react";
import { card } from "../styles";
import { CardTitle, Badge, MathText } from "../components";
import { EXAMS, TOPIC_HE, EXCLUDED_TOPICS } from "../data";

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

function InsightRow({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "11px 0",
        borderBottom: "1px solid #ede9e0",
        lineHeight: 1.5,
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.background = "#fef4ee";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </div>
  );
}

export default function Insights({ stats, setTab, setSearchTopic }) {
  const nav = (key) => {
    setTab("search");
    setSearchTopic(key);
  };

  const sortedTopics = useMemo(
    () =>
      Object.entries(stats.topicCounts)
        .filter(([key]) => !EXCLUDED_TOPICS.has(key))
        .sort((a, b) => b[1] - a[1]),
    [stats],
  );

  const overdueTopics = useMemo(() => {
    const lastSeen = {};
    const totalCount = {};
    EXAMS.forEach((exam) => {
      exam.questions.forEach((q) => {
        totalCount[q.topic] = (totalCount[q.topic] || 0) + 1;
        if (!lastSeen[q.topic] || exam.year > lastSeen[q.topic])
          lastSeen[q.topic] = exam.year;
      });
    });
    const maxYear = Math.max(...EXAMS.map((e) => e.year));
    return Object.entries(totalCount)
      .filter(
        ([key, count]) =>
          !EXCLUDED_TOPICS.has(key) &&
          count >= 3 &&
          maxYear - (lastSeen[key] || 0) >= 3,
      )
      .sort((a, b) => lastSeen[a[0]] - lastSeen[b[0]])
      .slice(0, 6)
      .map(([key, count]) => ({ topic: key, count, last: lastSeen[key] }));
  }, []);

  const recentTrend = useMemo(() => {
    const counts = {};
    let total = 0;
    EXAMS.filter((e) => e.year >= 2021).forEach((exam) =>
      exam.questions.forEach((q) => {
        if (EXCLUDED_TOPICS.has(q.topic)) return;
        counts[q.topic] = (counts[q.topic] || 0) + 1;
        total++;
      }),
    );
    return {
      entries: Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6),
      total,
    };
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: 20,
      }}
    >
      <div style={card}>
        <CardTitle
          emoji="🔥"
          title="חובה ללמוד"
          sub="לחץ על נושא לחיפוש שאלות"
        />
        {sortedTopics.slice(0, 5).map(([key, count]) => {
          const examCount = EXAMS.filter(
            (exam) => stats.examTopics[exam.code][key],
          ).length;
          return (
            <InsightRow key={key} onClick={() => nav(key)}>
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <Badge>{count}</Badge>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: 14, color: "#c1440e" }}
                  >
                    {TOPIC_HE[key]}
                  </div>
                  <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>
                    {examCount}/{EXAMS.length} מבחנים ·{" "}
                    {Math.round((examCount / EXAMS.length) * 100)}%
                  </div>
                </div>
              </div>
            </InsightRow>
          );
        })}
      </div>

      <div style={card}>
        <CardTitle
          emoji="⚠️"
          title="מלכודות חוזרות"
          sub="שאלות כמעט זהות שחזרו מספר פעמים"
        />
        {TRAPS.map((trap, i) => (
          <InsightRow key={i}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "#c1440e",
                marginBottom: 4,
              }}
            >
              <MathText>{trap.t}</MathText>
            </div>
            <div style={{ fontSize: 12, color: "#9b9890" }}>
              <MathText>{trap.n}</MathText>
            </div>
          </InsightRow>
        ))}
      </div>

      <div style={card}>
        <CardTitle
          emoji="📈"
          title="טרנד 2021–2026"
          sub="לחץ על נושא לחיפוש שאלות"
        />
        {recentTrend.entries.map(([key, count]) => (
          <InsightRow key={key} onClick={() => nav(key)}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Badge>{count}</Badge>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {TOPIC_HE[key]}
                </div>
                <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>
                  {Math.round((count / recentTrend.total) * 100)}% מהשאלות
                </div>
              </div>
            </div>
          </InsightRow>
        ))}
      </div>

      <div style={card}>
        <CardTitle
          emoji="🎯"
          title="צפוי לבוא"
          sub="לחץ על נושא לחיפוש שאלות"
        />
        {overdueTopics.length === 0 ? (
          <div style={{ color: "#9b9890", fontSize: 13, fontStyle: "italic" }}>
            אין נושאים כאלה
          </div>
        ) : (
          overdueTopics.map(({ topic, count, last }) => (
            <InsightRow key={topic} onClick={() => nav(topic)}>
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <Badge bg="#c1440e">{count}×</Badge>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>
                    {TOPIC_HE[topic] || topic}
                  </div>
                  <div style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}>
                    נראה לאחרונה {last} · {new Date().getFullYear() - last} שנים
                    ללא הופעה
                  </div>
                </div>
              </div>
            </InsightRow>
          ))
        )}
      </div>

      <div style={card}>
        <CardTitle
          emoji="❄️"
          title="פחות שכיח"
          sub="לחץ על נושא לחיפוש שאלות"
        />
        {sortedTopics
          .filter(([, count]) => count <= 3)
          .map(([key, count]) => {
            const examCount = EXAMS.filter(
              (exam) => stats.examTopics[exam.code][key],
            ).length;
            return (
              <InsightRow key={key} onClick={() => nav(key)}>
                <div
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <Badge bg="#ece7dc" color="#4a4740">
                    {count}
                  </Badge>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>
                      {TOPIC_HE[key]}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#9b9890", marginTop: 1 }}
                    >
                      ב-{examCount} מבחנים בלבד
                    </div>
                  </div>
                </div>
              </InsightRow>
            );
          })}
      </div>
    </div>
  );
}

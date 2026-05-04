import { useMemo } from "react";
import { card, COLORS_UI } from "../styles";
import { CardTitle, Badge, MathText } from "../components";

function InsightRow({ children, onClick, hoverBg }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "11px 0",
        borderBottom: `1px solid ${COLORS_UI.rowDivider}`,
        lineHeight: 1.5,
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.background = hoverBg ?? COLORS_UI.hoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </div>
  );
}

export default function Insights({
  stats,
  setSearchTopic,
  exams,
  topicHe,
  excludedTopics,
  traps,
  trendFromYear,
  colorsUI,
}) {
  const pri = colorsUI?.primary ?? COLORS_UI.primary;
  const maxYear = useMemo(() => Math.max(...exams.map((e) => e.year)), [exams]);

  const nav = (key) => setSearchTopic(key);

  const sortedTopics = useMemo(
    () =>
      Object.entries(stats.topicCounts)
        .filter(([key]) => !excludedTopics.has(key))
        .sort((a, b) => b[1] - a[1]),
    [stats, excludedTopics],
  );

  const overdueTopics = useMemo(() => {
    const lastSeen = {};
    const totalCount = {};
    exams.forEach((exam) => {
      exam.questions.forEach((q) => {
        totalCount[q.topic] = (totalCount[q.topic] || 0) + 1;
        if (!lastSeen[q.topic] || exam.year > lastSeen[q.topic])
          lastSeen[q.topic] = exam.year;
      });
    });
    return Object.entries(totalCount)
      .filter(
        ([key, count]) =>
          !excludedTopics.has(key) &&
          count >= 3 &&
          maxYear - (lastSeen[key] || 0) >= 3,
      )
      .sort((a, b) => lastSeen[a[0]] - lastSeen[b[0]])
      .slice(0, 6)
      .map(([key, count]) => ({ topic: key, count, last: lastSeen[key] }));
  }, [exams, excludedTopics, maxYear]);

  const recentTrend = useMemo(() => {
    const counts = {};
    let total = 0;
    exams.filter((e) => e.year >= trendFromYear).forEach((exam) =>
      exam.questions.forEach((q) => {
        if (excludedTopics.has(q.topic)) return;
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
  }, [exams, trendFromYear, excludedTopics]);

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
          const examCount = exams.filter(
            (exam) => stats.examTopics[exam.code][key],
          ).length;
          return (
            <InsightRow key={key} onClick={() => nav(key)} hoverBg={`${pri}12`}>
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <Badge>{count}</Badge>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: pri,
                    }}
                  >
                    {topicHe[key]}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: COLORS_UI.muted,
                      marginTop: 1,
                    }}
                  >
                    {examCount}/{exams.length} מבחנים ·{" "}
                    {Math.round((examCount / exams.length) * 100)}%
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
        {traps.map((trap, i) => (
          <InsightRow key={i}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: pri,
                marginBottom: 4,
              }}
            >
              <MathText>{trap.t}</MathText>
            </div>
            <div style={{ fontSize: 12, color: COLORS_UI.muted }}>
              <MathText>{trap.n}</MathText>
            </div>
          </InsightRow>
        ))}
      </div>

      <div style={card}>
        <CardTitle
          emoji="📈"
          title={`טרנד ${trendFromYear}–${maxYear}`}
          sub="לחץ על נושא לחיפוש שאלות"
        />
        {recentTrend.entries.map(([key, count]) => (
          <InsightRow key={key} onClick={() => nav(key)} hoverBg={`${pri}12`}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Badge>{count}</Badge>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {topicHe[key]}
                </div>
                <div
                  style={{ fontSize: 12, color: COLORS_UI.muted, marginTop: 1 }}
                >
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
          <div
            style={{
              color: COLORS_UI.muted,
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            אין נושאים כאלה
          </div>
        ) : (
          overdueTopics.map(({ topic, count, last }) => (
            <InsightRow key={topic} onClick={() => nav(topic)} hoverBg={`${pri}12`}>
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <Badge bg={pri}>{count}×</Badge>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>
                    {topicHe[topic] || topic}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: COLORS_UI.muted,
                      marginTop: 1,
                    }}
                  >
                    נראה לאחרונה {last} · {maxYear - last} שנים ללא הופעה
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
            const examCount = exams.filter(
              (exam) => stats.examTopics[exam.code][key],
            ).length;
            return (
              <InsightRow key={key} onClick={() => nav(key)} hoverBg={`${pri}12`}>
                <div
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <Badge bg={COLORS_UI.barBg} color={COLORS_UI.text}>
                    {count}
                  </Badge>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>
                      {topicHe[key]}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: COLORS_UI.muted,
                        marginTop: 1,
                      }}
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

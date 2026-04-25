import { useMemo } from "react";
import { Bar, CardTitle, ExcludedTag, excludedRowStyle } from "../components";
import { card } from "../styles";
import { EXAMS, TOPIC_HE, COLORS, isExcluded, CHAPTERS } from "../data";

export default function Overview({
  stats,
  setTab,
  setSearchTopic,
  setSearchChapter,
  setSearchType,
}) {
  const { active, excluded } = useMemo(() => {
    const all = Object.entries(stats.topicCounts).sort((a, b) => b[1] - a[1]);
    return {
      active: all.filter(([key]) => !isExcluded(key)),
      excluded: all.filter(([key]) => isExcluded(key)),
    };
  }, [stats]);

  const maxTopicCount = active[0]?.[1] || 1;
  const maxChapterCount = Math.max(...Object.values(stats.chapterCounts));
  const maxTypeCount = Object.values(stats.typeCounts).sort((a, b) => b - a)[0];

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
          emoji="📊"
          title="דירוג נושאים"
          sub="לחץ על נושא לחיפוש שאלות"
        />
        {active.map(([topicKey, count], i) => {
          const examCount = EXAMS.filter(
            (exam) => stats.examTopics[exam.code][topicKey],
          ).length;
          return (
            <Bar
              key={topicKey}
              label={
                <span>
                  {TOPIC_HE[topicKey] || topicKey}
                  <span
                    style={{ fontSize: 11, color: "#9b9890", marginRight: 8 }}
                  >
                    {examCount}/{EXAMS.length} מבחנים
                  </span>
                </span>
              }
              val={count}
              max={maxTopicCount}
              color={COLORS[i % COLORS.length]}
              pct={Math.round((count / stats.total) * 100)}
              onClick={() => {
                setTab("search");
                setSearchTopic(topicKey);
              }}
            />
          );
        })}
        {excluded.length > 0 && (
          <>
            <div
              style={{
                borderTop: "1px dashed #d4cfbf",
                margin: "12px 0 6px",
                fontSize: 11,
                color: "#b0aca4",
              }}
            >
              לא בתכנית הנוכחית
            </div>
            {excluded.map(([topicKey, count]) => (
              <div key={topicKey} style={excludedRowStyle}>
                <Bar
                  label={
                    <span>
                      <ExcludedTag />
                      {TOPIC_HE[topicKey] || topicKey}
                    </span>
                  }
                  val={count}
                  max={maxTopicCount}
                  color="#b0aca4"
                  pct={Math.round((count / stats.total) * 100)}
                />
              </div>
            ))}
          </>
        )}
      </div>

      <div>
        <div style={card}>
          <CardTitle emoji="📚" title="פרקים" sub="לחץ על פרק לחיפוש שאלות" />
          {CHAPTERS.map(({ key, label, color }) => (
            <Bar
              key={key}
              label={label}
              val={stats.chapterCounts[key] || 0}
              max={maxChapterCount}
              color={color}
              pct={Math.round(
                ((stats.chapterCounts[key] || 0) / stats.total) * 100,
              )}
              onClick={() => {
                setTab("search");
                setSearchChapter(key);
              }}
            />
          ))}
        </div>

        <div style={card}>
          <CardTitle
            emoji="🏷️"
            title="סוג שאלה"
            sub="לחץ על סוג לחיפוש שאלות"
          />
          {Object.entries(stats.typeCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([type, count], i) => (
              <Bar
                key={type}
                label={type}
                val={count}
                max={maxTypeCount}
                color={COLORS[i % COLORS.length]}
                pct={Math.round((count / stats.total) * 100)}
                onClick={() => {
                  setTab("search");
                  setSearchType(type);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

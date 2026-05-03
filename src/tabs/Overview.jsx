import { useMemo, useState } from "react";
import { Bar, CardTitle, ExcludedTag, excludedRowStyle, useTypeHelpers } from "../components";
import { card, COLORS_UI } from "../styles";

const EXCLUDED_LABEL = COLORS_UI.muted;

export default function Overview({
  stats,
  setTab,
  setSearchTopic,
  setSearchChapter,
  setSearchType,
  exams,
  topicHe,
  colors,
  isExcluded,
  chapters,
  colorsUI,
}) {
  const pri = colorsUI?.primary ?? COLORS_UI.primary;
  const { typeToLabel } = useTypeHelpers();
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showExcluded, setShowExcluded] = useState(false);
  const TOPICS_INITIAL = 14;

  const { active, excluded } = useMemo(() => {
    const all = Object.entries(stats.topicCounts).sort((a, b) => b[1] - a[1]);
    return {
      active: all.filter(([key]) => !isExcluded(key)),
      excluded: all.filter(([key]) => isExcluded(key)),
    };
  }, [stats, isExcluded]);

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
        {(showAllTopics ? active : active.slice(0, TOPICS_INITIAL)).map(([topicKey, count], i) => {
          const examCount = exams.filter(
            (exam) => stats.examTopics[exam.code][topicKey],
          ).length;
          return (
            <Bar
              key={topicKey}
              label={
                <span>
                  {topicHe[topicKey] || topicKey}
                  <span
                    style={{
                      fontSize: 11,
                      color: COLORS_UI.muted,
                      marginRight: 8,
                    }}
                  >
                    {examCount}/{exams.length} מבחנים
                  </span>
                </span>
              }
              val={count}
              max={maxTopicCount}
              color={colors[i % colors.length]}
              pct={Math.round((count / stats.total) * 100)}
              onClick={() => {
                setTab("search");
                setSearchTopic(topicKey);
              }}
            />
          );
        })}
        {active.length > TOPICS_INITIAL && (
          <button
            onClick={() => setShowAllTopics((v) => !v)}
            style={{
              marginTop: 10,
              background: showAllTopics ? `${pri}18` : "white",
              border: `1.5px solid ${pri}`,
              color: pri,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              padding: "6px 0",
              width: "100%",
              letterSpacing: "0.02em",
            }}
          >
            {showAllTopics
              ? "▲ הצג פחות"
              : `▼ הראה עוד — ${active.length - TOPICS_INITIAL} נושאים נוספים`}
          </button>
        )}
        {excluded.length > 0 && (
          <>
            <button
              onClick={() => setShowExcluded((v) => !v)}
              style={{
                marginTop: 10,
                background: "none",
                border: `1px dashed ${COLORS_UI.border}`,
                color: COLORS_UI.muted,
                cursor: "pointer",
                fontSize: 11,
                padding: "5px 0",
                width: "100%",
              }}
            >
              {showExcluded
                ? `▲ הסתר נושאים שלא בחומר (${excluded.length})`
                : `▼ נושאים שלא בחומר (${excluded.length})`}
            </button>
            {showExcluded && excluded.map(([topicKey, count]) => (
              <div key={topicKey} style={excludedRowStyle}>
                <Bar
                  label={
                    <span>
                      <ExcludedTag />
                      {topicHe[topicKey] || topicKey}
                    </span>
                  }
                  val={count}
                  max={maxTopicCount}
                  color={EXCLUDED_LABEL}
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
          {chapters.map(({ key, label, color }) => (
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
                label={typeToLabel(type)}
                val={count}
                max={maxTypeCount}
                color={colors[i % colors.length]}
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

import { useMemo } from "react";
import { Chip, typeToKind, ExcludedTag, MathText } from "../components";
import { card, inp, COLORS_UI } from "../styles";
import { EXAMS, TOPIC_HE, isExcluded, CHAPTERS } from "../data";

export default function SearchTab({
  query,
  setQuery,
  topic,
  setTopic,
  chapter,
  setChapter,
  type,
  setType,
  year,
  setYear,
  moed,
  setMoed,
}) {
  const topicsByFrequency = useMemo(
    () =>
      Object.entries(
        EXAMS.reduce((acc, exam) => {
          exam.questions.forEach((q) => {
            acc[q.topic] = (acc[q.topic] || 0) + 1;
          });
          return acc;
        }, {}),
      ).sort((a, b) => b[1] - a[1]),
    [],
  );

  const years = useMemo(
    () => [...new Set(EXAMS.map((e) => e.year))].sort(),
    [],
  );

  const types = useMemo(
    () =>
      [...new Set(EXAMS.flatMap((e) => e.questions.map((q) => q.type)))].sort(),
    [],
  );

  const results = useMemo(() => {
    const queryLower = query.toLowerCase();
    const matches = [];
    EXAMS.forEach((exam) => {
      if (year && String(exam.year) !== year) return;
      if (moed && exam.moed !== moed) return;
      exam.questions.forEach((q) => {
        if (topic && q.topic !== topic) return;
        if (chapter && q.chapter !== chapter) return;
        if (type && q.type !== type) return;
        if (
          queryLower &&
          !(q.summary + TOPIC_HE[q.topic] + exam.code)
            .toLowerCase()
            .includes(queryLower)
        )
          return;
        matches.push({ exam, question: q });
      });
    });
    return matches;
  }, [query, topic, chapter, type, year, moed]);

  const hasActiveFilters = query || topic || chapter || type || year || moed;

  return (
    <div>
      <div
        style={{
          ...card,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חפש שאלה, נוסחה, נושא..."
          style={{ ...inp, minWidth: 220 }}
        />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={inp}
        >
          <option value="">כל הנושאים</option>
          {topicsByFrequency.map(([key]) => (
            <option key={key} value={key}>
              {TOPIC_HE[key] || key}
            </option>
          ))}
        </select>
        <select
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          style={inp}
        >
          <option value="">כל הפרקים</option>
          {CHAPTERS.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inp}
        >
          <option value="">כל הסוגים</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={inp}
        >
          <option value="">כל השנים</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          value={moed}
          onChange={(e) => setMoed(e.target.value)}
          style={inp}
        >
          <option value="">כל המועדים</option>
          <option value="א">מועד א</option>
          <option value="ב">מועד ב</option>
        </select>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            background: "#1a1a1a",
            color: "#f4f1ea",
            padding: "4px 10px",
          }}
        >
          {results.length} תוצאות
        </span>
        {hasActiveFilters && (
          <button
            onClick={() => {
              setQuery("");
              setTopic("");
              setChapter("");
              setType("");
              setYear("");
              setMoed("");
            }}
            style={{
              fontSize: 13,
              background: "transparent",
              border: "1px solid #d4cfbf",
              padding: "5px 12px",
              cursor: "pointer",
              color: "#4a4740",
            }}
          >
            נקה סינון
          </button>
        )}
      </div>

      {results.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: 40,
            color: "#6d6a5e",
            fontStyle: "italic",
            fontFamily: "Frank Ruhl Libre, Georgia, serif",
          }}
        >
          לא נמצאו שאלות
        </div>
      )}

      <div style={{ display: "grid", gap: 8 }}>
        {results.map(({ exam, question }, i) => (
          <div
            key={i}
            style={{
              background: "white",
              border: "1px solid #d4cfbf",
              padding: 12,
              display: "grid",
              gridTemplateColumns: "110px 80px 1fr",
              gap: 12,
              alignItems: "start",
              fontSize: 13,
            }}
          >
            <div style={{ lineHeight: 1.5 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{exam.year}</div>
              <div style={{ fontSize: 12, color: "#4a4740" }}>
                מועד {exam.moed}
              </div>
              <div style={{ marginTop: 6 }}>
                <div
                  style={{ fontSize: 10, color: "#9b9890", marginBottom: 1 }}
                >
                  שאלה
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: COLORS_UI.primary,
                    fontFamily: "Frank Ruhl Libre, Georgia, serif",
                    lineHeight: 1,
                  }}
                >
                  {question.id.replace(/^[א-ת]/, "")}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Chip kind={question.chapter}>פרק {question.chapter}</Chip>
              <Chip kind={typeToKind(question.type)}>{question.type}</Chip>
            </div>
            <div>
              <div
                onClick={() => setTopic(question.topic)}
                style={{
                  fontSize: 12,
                  color: isExcluded(question.topic)
                    ? "#9b9890"
                    : COLORS_UI.secondary,
                  marginBottom: 4,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                {isExcluded(question.topic) && <ExcludedTag />}
                {TOPIC_HE[question.topic] || question.topic}
              </div>
              <div style={{ lineHeight: 1.5, fontSize: 13 }}>
                <MathText>{question.summary}</MathText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

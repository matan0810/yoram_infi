import { useMemo } from "react";
import { Chip, typeToKind, ExcludedTag, MathText } from "../components";
import { card, inp, COLORS_UI } from "../styles";
import { EXAMS, TOPIC_HE, isExcluded } from "../data";

export default function ExamsTab({
  yearFilter,
  setYearFilter,
  moedFilter,
  setMoedFilter,
  setTab,
  setSearchTopic,
}) {
  const years = useMemo(
    () => [...new Set(EXAMS.map((e) => e.year))].sort(),
    [],
  );

  const latestYear = useMemo(() => Math.max(...EXAMS.map((e) => e.year)), []);

  const filteredExams = useMemo(
    () =>
      EXAMS.filter((exam) => {
        if (yearFilter && String(exam.year) !== yearFilter) return false;
        if (moedFilter && exam.moed !== moedFilter) return false;
        return true;
      }),
    [yearFilter, moedFilter],
  );

  const hasActiveFilters = yearFilter || moedFilter;

  return (
    <div>
      {/* Filter bar */}
      <div
        style={{
          ...card,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
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
          value={moedFilter}
          onChange={(e) => setMoedFilter(e.target.value)}
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
          {filteredExams.length} מבחנים ·{" "}
          {filteredExams.reduce((s, e) => s + e.questions.length, 0)} שאלות
        </span>
        {hasActiveFilters && (
          <button
            onClick={() => {
              setYearFilter("");
              setMoedFilter("");
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

      {/* Exam cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 18,
        }}
      >
        {filteredExams.map((exam) => (
          <div
            key={exam.code}
            style={{
              ...card,
              border:
                exam.year === latestYear ? `2px solid ${COLORS_UI.primary}` : "1px solid #1a1a1a",
              background: exam.year === latestYear ? "#fef8f3" : "white",
              boxShadow: "3px 3px 0 #1a1a1a",
            }}
          >
            <div
              style={{
                marginBottom: 10,
                paddingBottom: 8,
                borderBottom: "1px solid #d4cfbf",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div
                  style={{
                    fontFamily: "Frank Ruhl Libre, Georgia, serif",
                    fontWeight: 900,
                    fontSize: 26,
                    lineHeight: 1,
                  }}
                >
                  {exam.year}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>
                  מועד {exam.moed}
                </div>
                {exam.year === latestYear && <Chip kind="hot">המבחן שלך!</Chip>}
              </div>
              <div style={{ fontSize: 11, color: "#9b9890", marginTop: 3 }}>
                מבנה {exam.chapter_structure} · {exam.questions.length} שאלות
              </div>
            </div>

            {exam.questions.map((q) => {
              const excluded = isExcluded(q.topic);
              const questionNumber = q.id.replace(/^[א-ת]/, "");
              return (
                <div
                  key={q.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 8,
                    padding: "6px 0",
                    borderBottom: "1px solid #ede9e0",
                    alignItems: "baseline",
                    opacity: excluded ? 0.45 : 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Frank Ruhl Libre, Georgia, serif",
                      fontWeight: 900,
                      fontSize: 16,
                      color: COLORS_UI.primary,
                      textAlign: "center",
                    }}
                  >
                    {questionNumber}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: 3,
                        flexWrap: "wrap",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      <Chip kind={q.chapter}>פרק {q.chapter}</Chip>
                      <Chip kind={typeToKind(q.type)}>{q.type}</Chip>
                      <span
                        onClick={() => {
                          setTab("search");
                          setSearchTopic(q.topic);
                        }}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: excluded ? "#9b9890" : COLORS_UI.secondary,
                          border: `1px dashed ${excluded ? "#b0aca4" : COLORS_UI.secondary}`,
                          padding: "1px 6px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        {excluded && <ExcludedTag />}
                        {TOPIC_HE[q.topic] || q.topic}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        lineHeight: 1.4,
                        color: "#4a4740",
                      }}
                    >
                      <MathText>{q.summary}</MathText>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useMemo } from "react";
import { Chip, useTypeHelpers, ExcludedTag, MathText, StudyControls } from "../components";
import { card, inp, COLORS_UI, FONTS, clearBtn, countBadge } from "../styles";
import {
  examMatchesLecturer,
  examLecturerLabel,
  buildLecturersList,
} from "../utils/exam";
import { LABEL_DEFS } from "../hooks/useLabels";

const MOED_OPTIONS = [
  { value: "א", label: "מועד א" },
  { value: "ב", label: "מועד ב" },
];

export default function ExamsTab({
  yearFilter,
  setYearFilter,
  moedFilter,
  setMoedFilter,
  lecturerFilter,
  setLecturerFilter,
  setSearchTopic,
  exams,
  topicHe,
  isExcluded,
  colorsUI,
  studyMode,
  isDone,
  toggleDone,
  hasLabel,
  toggleLabel,
}) {
  const { typeToLabel, typeToKind } = useTypeHelpers();
  const pri = colorsUI?.primary ?? COLORS_UI.primary;
  const sec = colorsUI?.secondary ?? COLORS_UI.secondary;

  const years = useMemo(
    () => [...new Set(exams.map((e) => e.year))].sort(),
    [exams],
  );

  const lecturers = useMemo(() => buildLecturersList(exams), [exams]);

  const latestYear = useMemo(() => Math.max(...exams.map((e) => e.year)), [exams]);

  const filteredExams = useMemo(
    () =>
      exams.filter(
        (exam) =>
          (!yearFilter || String(exam.year) === yearFilter) &&
          (!moedFilter || exam.moed === moedFilter) &&
          (!lecturerFilter || examMatchesLecturer(exam, lecturerFilter)),
      ),
    [exams, yearFilter, moedFilter, lecturerFilter],
  );

  const hasActiveFilters = yearFilter || moedFilter || lecturerFilter;

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
          {MOED_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {lecturers.length > 1 && (
          <select
            value={lecturerFilter}
            onChange={(e) => setLecturerFilter(e.target.value)}
            style={inp}
          >
            <option value="">כל המרצים</option>
            {lecturers.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        )}
        <span style={countBadge}>
          {filteredExams.length} מבחנים ·{" "}
          {filteredExams.reduce((s, e) => s + e.questions.length, 0)} שאלות
        </span>
        {hasActiveFilters && (
          <button
            onClick={() => {
              setYearFilter("");
              setMoedFilter("");
              setLecturerFilter("");
            }}
            style={clearBtn}
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
        {filteredExams.map((exam) => {
          const isLatest = exam.year === latestYear;
          return (
            <div
              key={exam.code}
              style={{
                ...card,
                border: isLatest
                  ? `2px solid ${pri}`
                  : `1px solid ${COLORS_UI.dark}`,
                background: isLatest ? `${pri}10` : "white",
                boxShadow: `3px 3px 0 ${COLORS_UI.dark}`,
              }}
            >
              <div
                style={{
                  marginBottom: 10,
                  paddingBottom: 8,
                  borderBottom: `1px solid ${COLORS_UI.border}`,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "baseline", gap: 10 }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.serif,
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
                  {isLatest && <Chip kind="hot">המבחן שלך!</Chip>}
                </div>
                <div
                  style={{ fontSize: 11, color: COLORS_UI.muted, marginTop: 3 }}
                >
                  מבנה {exam.chapter_structure} · {exam.questions.length} שאלות
                  {` · ${examLecturerLabel(exam)}`}
                </div>
              </div>

              {(exam.questions[0]?.number != null
                  ? [...exam.questions].sort((a, b) => (a.number ?? 0) - (b.number ?? 0))
                  : exam.questions
                ).map((q) => {
                const excluded = isExcluded(q.topic);
                const questionNumber = q.id.replace(/^[^\d]+/, "");
                const questionKey = `${exam.code}__${q.id}`;
                const done = isDone?.(questionKey) ?? false;
                const activeLabels = LABEL_DEFS.filter(
                  (def) => hasLabel?.(questionKey, def.key),
                );

                return (
                  <div
                    key={q.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: studyMode ? "28px 1fr auto" : "28px 1fr",
                      gap: 8,
                      padding: "6px 0",
                      borderBottom: `1px solid ${COLORS_UI.rowDivider}`,
                      alignItems: "start",
                      opacity: excluded ? 0.45 : 1,
                      background: done ? "#f6fdf4" : "transparent",
                    }}
                  >
                    {/* Question number */}
                    <div
                      style={{
                        fontFamily: FONTS.serif,
                        fontWeight: 900,
                        fontSize: 16,
                        color: done ? "#3a7a3a" : pri,
                        textAlign: "center",
                        paddingTop: 2,
                      }}
                    >
                      {questionNumber}
                    </div>

                    {/* Content */}
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
                        <Chip kind={typeToKind(q.type)}>{typeToLabel(q.type)}</Chip>
                        <span
                          onClick={() => setSearchTopic(q.topic)}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: excluded ? COLORS_UI.muted : sec,
                            border: `1px dashed ${excluded ? COLORS_UI.border : sec}`,
                            padding: "1px 6px",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 3,
                          }}
                        >
                          {excluded && <ExcludedTag />}
                          {topicHe[q.topic] || q.topic}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          lineHeight: 1.4,
                          color: COLORS_UI.text,
                        }}
                      >
                        <MathText>{q.summary}</MathText>
                      </div>
                      {activeLabels.length > 0 && (
                        <div style={{ marginTop: 3, display: "flex", gap: 3, flexWrap: "wrap" }}>
                          {activeLabels.map((def) => (
                            <span
                              key={def.key}
                              style={{
                                fontSize: 9,
                                padding: "0 5px",
                                background: def.bg,
                                color: def.color,
                                border: `1px solid ${def.color}55`,
                                fontWeight: 700,
                              }}
                            >
                              {def.icon} {def.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Study controls */}
                    {studyMode && (
                      <StudyControls
                        done={done}
                        questionKey={questionKey}
                        toggleDone={toggleDone}
                        hasLabel={hasLabel}
                        toggleLabel={toggleLabel}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

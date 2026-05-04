import { memo } from "react";
import { Chip, useTypeHelpers, ExcludedTag, MathText, StudyControls } from "../components";
import { COLORS_UI, FONTS } from "../styles";
import { examLecturerLabel } from "../utils/exam";
import { LABEL_DEFS } from "../hooks/useLabels";

function SearchResultCard({
  exam,
  question,
  topicHe,
  isExcluded,
  setTopic,
  colorsUI,
  isDone,
  toggleDone,
  studyMode,
  hasLabel,
  toggleLabel,
  doneVersion: _dv,
  labelsVersion: _lv,
}) {
  const { typeToLabel, typeToKind } = useTypeHelpers();
  const pri = colorsUI?.primary ?? COLORS_UI.primary;
  const sec = colorsUI?.secondary ?? COLORS_UI.secondary;
  const excluded = isExcluded(question.topic);
  const questionKey = `${exam.code}__${question.id}`;
  const done = isDone?.(questionKey) ?? false;
  const activeLabels = LABEL_DEFS.filter((def) => hasLabel?.(questionKey, def.key));

  return (
    <div
      className="result-card"
      style={{
        background: done ? "#f6fdf4" : "white",
        border: `1px solid ${done ? "#b2d8b2" : COLORS_UI.border}`,
        padding: 12,
        display: "grid",
        gridTemplateColumns: studyMode ? "110px 80px 1fr auto" : "110px 80px 1fr",
        gap: 12,
        alignItems: "start",
        fontSize: 13,
        opacity: done ? 0.8 : 1,
        transition: "background 0.15s, border-color 0.15s",
      }}
    >
      {/* col 1: exam info */}
      <div style={{ lineHeight: 1.5 }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{exam.year}</div>
        <div style={{ fontSize: 12, color: COLORS_UI.text }}>מועד {exam.moed}</div>
        <div style={{ fontSize: 11, color: COLORS_UI.muted, marginTop: 2 }}>
          {examLecturerLabel(exam)}
        </div>
        <div style={{ marginTop: 6 }}>
          <div style={{ fontSize: 10, color: COLORS_UI.muted, marginBottom: 1 }}>שאלה</div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: pri,
              fontFamily: FONTS.serif,
              lineHeight: 1,
            }}
          >
            {question.id.replace(/^[^\d]+/, "")}
          </div>
        </div>
      </div>

      {/* col 2: chips */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Chip kind={question.chapter}>פרק {question.chapter}</Chip>
        <Chip kind={typeToKind(question.type)}>{typeToLabel(question.type)}</Chip>
      </div>

      {/* col 3: topic + summary + active label chips */}
      <div>
        <div
          onClick={() => setTopic(question.topic)}
          style={{
            fontSize: 12,
            color: excluded ? COLORS_UI.muted : sec,
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
          {excluded && <ExcludedTag />}
          {topicHe[question.topic] || question.topic}
        </div>
        <div style={{ lineHeight: 1.5, fontSize: 13 }}>
          <MathText>{question.summary}</MathText>
        </div>
        {activeLabels.length > 0 && (
          <div style={{ marginTop: 5, display: "flex", gap: 4, flexWrap: "wrap" }}>
            {activeLabels.map((def) => (
              <span
                key={def.key}
                style={{
                  fontSize: 10,
                  padding: "1px 7px",
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

      {/* col 4: study controls (study mode only) */}
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
}

export default memo(SearchResultCard);

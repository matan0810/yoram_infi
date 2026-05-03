import { Chip, useTypeHelpers, ExcludedTag, MathText } from "../components";
import { COLORS_UI, FONTS } from "../styles";
import { examLecturerLabel } from "../utils/exam";

export default function SearchResultCard({
  exam,
  question,
  topicHe,
  isExcluded,
  setTopic,
  colorsUI,
}) {
  const { typeToLabel, typeToKind } = useTypeHelpers();
  const pri = colorsUI?.primary ?? COLORS_UI.primary;
  const sec = colorsUI?.secondary ?? COLORS_UI.secondary;
  const excluded = isExcluded(question.topic);

  return (
    <div
      style={{
        background: "white",
        border: `1px solid ${COLORS_UI.border}`,
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
            {question.id.replace(/^[א-ת]/, "")}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Chip kind={question.chapter}>פרק {question.chapter}</Chip>
        <Chip kind={typeToKind(question.type)}>{typeToLabel(question.type)}</Chip>
      </div>

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
      </div>
    </div>
  );
}

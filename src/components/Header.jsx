import { COLORS_UI, FONTS } from "../styles";

export default function Header({ course, exams, colorsUI }) {
  const pri = colorsUI?.primary ?? COLORS_UI.primary;

  return (
    <div
      style={{
        borderTop: `4px solid ${COLORS_UI.dark}`,
        borderBottom: `1px solid ${COLORS_UI.dark}`,
        paddingBottom: 20,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 12,
          color: COLORS_UI.muted,
          marginBottom: 6,
        }}
      >
        {course.teacher} · {course.name} · קורס {course.number}
      </div>
      <div
        style={{
          fontFamily: FONTS.sans,
          fontWeight: 800,
          fontSize: 38,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        מדד שאלות{" "}
        <span style={{ color: pri }}>{course.shortName}</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 14,
          paddingTop: 12,
          borderTop: `1px dashed ${COLORS_UI.border}`,
          flexWrap: "wrap",
        }}
      >
        {[
          [exams.length, "מבחנים"],
          [exams.reduce((s, e) => s + e.questions.length, 0), "שאלות"],
          [
            new Set(exams.flatMap((e) => e.questions.map((q) => q.topic))).size,
            "נושאים",
          ],
          [
            `${Math.min(...exams.map((e) => e.year))}–${Math.max(...exams.map((e) => e.year))}`,
            "שנים",
          ],
        ].map(([n, l]) => (
          <div key={l}>
            <div
              style={{
                fontFamily: FONTS.serif,
                fontWeight: 900,
                fontSize: 26,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 12,
                color: COLORS_UI.text,
              }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { EXAMS, TEACHER, COURSE_NAME, COURSE_NUMBER } from "../data";

export default function Header() {
  return (
    <div
      style={{
        borderTop: "4px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        paddingBottom: 20,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          fontFamily: "Heebo, system-ui, sans-serif",
          fontSize: 12,
          color: "#9b9890",
          marginBottom: 6,
        }}
      >
        {TEACHER} · {COURSE_NAME} · קורס {COURSE_NUMBER}
      </div>
      <div
        style={{
          fontFamily: "Heebo, system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 38,
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        מדד שאלות{" "}
        <span style={{ color: "#c1440e" }}>אינפי 2</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 14,
          paddingTop: 12,
          borderTop: "1px dashed #d4cfbf",
          flexWrap: "wrap",
        }}
      >
        {[
          [EXAMS.length, "מבחנים"],
          [EXAMS.reduce((s, e) => s + e.questions.length, 0), "שאלות"],
          [new Set(EXAMS.flatMap((e) => e.questions.map((q) => q.topic))).size, "נושאים"],
          [`${Math.min(...EXAMS.map((e) => e.year))}–${Math.max(...EXAMS.map((e) => e.year))}`, "שנים"],
        ].map(([n, l]) => (
          <div key={l}>
            <div
              style={{
                fontFamily: "Frank Ruhl Libre, Georgia, serif",
                fontWeight: 900,
                fontSize: 26,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: "Heebo, system-ui, sans-serif",
                fontSize: 12,
                color: "#4a4740",
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

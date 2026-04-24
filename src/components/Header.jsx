import { EXAMS } from "../data/exams";
import { TEACHER, COURSE_NAME, COURSE_NUMBER } from "../data/config";

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
          fontFamily: "monospace",
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "#6d6a5e",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {TEACHER} · {COURSE_NAME} · קורס {COURSE_NUMBER} · {EXAMS.length} מבחנים
      </div>
      <div
        style={{
          fontFamily: "Georgia,serif",
          fontWeight: 900,
          fontSize: 42,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        ארכיון{" "}
        <span style={{ color: "#c1440e", fontStyle: "italic" }}>מבחנים</span> —
        סטטיסטיקה מלאה
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
          ["17", "מבחנים"],
          ["198", "שאלות"],
          ["18", "נושאים"],
          ["2006→2026", "טווח"],
        ].map(([n, l]) => (
          <div key={l}>
            <div
              style={{
                fontFamily: "Georgia,serif",
                fontWeight: 900,
                fontSize: 26,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "#6d6a5e",
                textTransform: "uppercase",
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

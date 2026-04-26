import { useNavigate } from "react-router-dom";
import { COURSE_LIST } from "../courses/index";
import { COLORS_UI, FONTS, card } from "../styles";

export default function CoursePicker() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: COLORS_UI.bg,
        minHeight: "100vh",
        fontFamily: FONTS.sans,
        direction: "rtl",
        padding: 40,
      }}
    >
      <div
        style={{
          borderTop: `4px solid ${COLORS_UI.dark}`,
          borderBottom: `1px solid ${COLORS_UI.dark}`,
          paddingBottom: 20,
          marginBottom: 32,
        }}
      >
        <div style={{ fontSize: 12, color: COLORS_UI.muted, marginBottom: 6 }}>
          {COURSE_LIST[0]?.COURSE?.university}
        </div>
        <div
          style={{
            fontWeight: 800,
            fontSize: 38,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          מדד שאלות
        </div>
        <div style={{ fontSize: 14, color: COLORS_UI.subdued, marginTop: 8 }}>
          בחר קורס לצפייה בסטטיסטיקות ומבחנים
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {COURSE_LIST.map((course) => (
          <button
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            style={{
              ...card,
              textAlign: "right",
              cursor: "pointer",
              border: `2px solid ${course.CHAPTERS[0].color}`,
              borderTop: `4px solid ${course.CHAPTERS[0].color}`,
              background: "white",
              fontFamily: FONTS.sans,
              transition: "box-shadow 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = `4px 4px 0 ${COLORS_UI.dark}`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = `2px 2px 0 ${COLORS_UI.dark}`)
            }
          >
            <div
              style={{
                fontSize: 11,
                color: COLORS_UI.muted,
                marginBottom: 4,
              }}
            >
              {course.COURSE.number} · {course.COURSE.teacher}
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 20,
                color: course.CHAPTERS[0].color,
                marginBottom: 12,
              }}
            >
              {course.COURSE.name}
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                borderTop: `1px dashed ${COLORS_UI.border}`,
                paddingTop: 10,
              }}
            >
              {[
                [course.EXAMS.length, "מבחנים"],
                [
                  course.EXAMS.reduce((s, e) => s + e.questions.length, 0),
                  "שאלות",
                ],
                [
                  `${Math.min(...course.EXAMS.map((e) => e.year))}–${Math.max(...course.EXAMS.map((e) => e.year))}`,
                  "שנים",
                ],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    style={{
                      fontFamily: FONTS.serif,
                      fontWeight: 900,
                      fontSize: 20,
                      color: COLORS_UI.dark,
                    }}
                  >
                    {n}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS_UI.text }}>{l}</div>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

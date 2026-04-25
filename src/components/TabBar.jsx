import { COLORS_UI } from "../styles";

const TABS = [
  { id: "overview", l: "📊 סקירה" },
  { id: "heatmap", l: "🔥 מפת חום" },
  { id: "exams", l: "📜 מבחנים" },
  { id: "search", l: "🔍 חיפוש" },
  { id: "insights", l: "💡 תובנות" },
];

export default function TabBar({ tab, setTab }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 2,
        borderBottom: `2px solid ${COLORS_UI.dark}`,
        marginBottom: 20,
        flexWrap: "wrap",
      }}
    >
      {TABS.map((t) => (
        <button
          key={t.id}
          onClick={() => setTab(t.id)}
          style={{
            padding: "9px 15px",
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: 13,
            background: tab === t.id ? COLORS_UI.barBg : "transparent",
            border: "none",
            cursor: "pointer",
            color: tab === t.id ? COLORS_UI.primary : COLORS_UI.subdued,
            borderBottom:
              tab === t.id
                ? `3px solid ${COLORS_UI.primary}`
                : "3px solid transparent",
            marginBottom: -2,
          }}
        >
          {t.l}
        </button>
      ))}
    </div>
  );
}

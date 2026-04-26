import { useCourse } from "../context/CourseContext";
import { COLORS_UI } from "../styles";

const STATIC_TYPE_COLORS = {
  proof: {
    background: COLORS_UI.dark,
    color: COLORS_UI.bg,
    border: `1px solid ${COLORS_UI.dark}`,
  },
  ts: {
    background: "#d4a017",
    color: COLORS_UI.dark,
    border: "1px solid #d4a017",
  },
  calc: { background: "#5a3a6b", color: "white", border: "1px solid #5a3a6b" },
};

export function typeToKind(type) {
  if (type === "הוכחה") return "proof";
  if (type === "אמת/שקר") return "ts";
  if (type === "חישוב") return "calc";
  return "mixed";
}

export default function Chip({ children, kind }) {
  const { CHAPTERS, colorsUI } = useCourse();

  const chapterStyles = Object.fromEntries(
    CHAPTERS.map((ch) => [
      ch.key,
      { background: ch.chipBg, color: ch.color, border: `1px solid ${ch.color}` },
    ]),
  );

  const dynamicTypeColors = {
    mixed: {
      background: CHAPTERS[1]?.color ?? colorsUI.secondary,
      color: "white",
      border: `1px solid ${CHAPTERS[1]?.color ?? colorsUI.secondary}`,
    },
    hot: {
      background: colorsUI.primary,
      color: "white",
      border: `1px solid ${colorsUI.primary}`,
    },
  };

  const styles = { ...chapterStyles, ...STATIC_TYPE_COLORS, ...dynamicTypeColors };

  const defaultStyle = {
    background: COLORS_UI.bg,
    color: COLORS_UI.dark,
    border: `1px solid ${COLORS_UI.border}`,
  };

  return (
    <span
      style={{
        ...(styles[kind] ?? defaultStyle),
        padding: "3px 8px",
        fontSize: 11,
        fontWeight: 700,
        display: "inline-block",
        marginLeft: 4,
      }}
    >
      {children}
    </span>
  );
}

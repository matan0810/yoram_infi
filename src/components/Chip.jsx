import { CHAPTERS } from "../data";
import { COLORS_UI } from "../styles";

const TYPE_COLORS = {
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
  mixed: {
    background: CHAPTERS[1].color,
    color: "white",
    border: `1px solid ${CHAPTERS[1].color}`,
  },
  hot: {
    background: CHAPTERS[0].color,
    color: "white",
    border: `1px solid ${CHAPTERS[0].color}`,
  },
};

const chapterStyles = Object.fromEntries(
  CHAPTERS.map((ch) => [
    ch.key,
    { background: ch.chipBg, color: ch.color, border: `1px solid ${ch.color}` },
  ]),
);

const STYLES = { ...chapterStyles, ...TYPE_COLORS };

const DEFAULT_STYLE = {
  background: COLORS_UI.bg,
  color: COLORS_UI.dark,
  border: `1px solid ${COLORS_UI.border}`,
};

export function typeToKind(type) {
  if (type === "הוכחה") return "proof";
  if (type === "אמת/שקר") return "ts";
  if (type === "חישוב") return "calc";
  return "mixed";
}

export default function Chip({ children, kind }) {
  return (
    <span
      style={{
        ...(STYLES[kind] ?? DEFAULT_STYLE),
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

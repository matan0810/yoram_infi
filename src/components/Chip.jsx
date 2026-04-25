import { CHAPTERS } from "../data";

const chapterStyles = Object.fromEntries(
  CHAPTERS.map((ch) => [
    ch.key,
    { background: ch.chipBg, color: ch.color, border: `1px solid ${ch.color}` },
  ])
);

const STYLES = {
  ...chapterStyles,
  proof: { background: "#1a1a1a", color: "#f4f1ea", border: "1px solid #1a1a1a" },
  ts:    { background: "#d4a017", color: "#1a1a1a", border: "1px solid #d4a017" },
  calc:  { background: "#5a3a6b", color: "white",   border: "1px solid #5a3a6b" },
  mixed: { background: CHAPTERS[1].color, color: "white", border: `1px solid ${CHAPTERS[1].color}` },
  hot:   { background: CHAPTERS[0].color, color: "white", border: `1px solid ${CHAPTERS[0].color}` },
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
        ...(STYLES[kind] || { background: "#f4f1ea", color: "#1a1a1a", border: "1px solid #d4cfbf" }),
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

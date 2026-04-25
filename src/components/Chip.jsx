const STYLES = {
  א: { background: "#fef1e6", color: "#c1440e", border: "1px solid #c1440e" },
  ב: { background: "#e8eef6", color: "#2b4162", border: "1px solid #2b4162" },
  ג: { background: "#eaf0e6", color: "#3a5a40", border: "1px solid #3a5a40" },
  proof: {
    background: "#1a1a1a",
    color: "#f4f1ea",
    border: "1px solid #1a1a1a",
  },
  ts: { background: "#d4a017", color: "#1a1a1a", border: "1px solid #d4a017" },
  calc: { background: "#5a3a6b", color: "white", border: "1px solid #5a3a6b" },
  mixed: { background: "#2b4162", color: "white", border: "1px solid #2b4162" },
  hot: { background: "#c1440e", color: "white", border: "1px solid #c1440e" },
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
        ...(STYLES[kind] || {
          background: "#f4f1ea",
          color: "#1a1a1a",
          border: "1px solid #d4cfbf",
        }),
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

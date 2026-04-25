export default function Badge({ children, bg = "#1a1a1a", color = "#f4f1ea" }) {
  return (
    <span
      style={{
        background: bg,
        color,
        fontWeight: 800,
        fontSize: 13,
        padding: "3px 9px",
        display: "inline-block",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

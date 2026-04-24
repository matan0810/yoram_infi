export default function ExcludedTag() {
  return (
    <span
      style={{
        fontFamily: "Heebo, system-ui, sans-serif",
        fontSize: 10,
        fontWeight: 700,
        background: "#f0ece4",
        color: "#7a776e",
        border: "1px solid #c8c3b8",
        padding: "2px 7px",
        marginLeft: 8,
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        letterSpacing: "0.02em",
      }}
    >
      ✕ לא בחומר
    </span>
  );
}

export const excludedRowStyle = {
  opacity: 0.45,
  filter: "grayscale(1)",
  pointerEvents: "none",
};

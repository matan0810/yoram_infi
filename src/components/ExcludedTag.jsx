export default function ExcludedTag() {
  return (
    <span
      style={{
        fontFamily: "Heebo, system-ui, sans-serif",
        fontSize: 10,
        fontWeight: 600,
        background: "#ece7dc",
        color: "#9b9890",
        border: "1px solid #d4cfbf",
        padding: "1px 6px",
        marginRight: 6,
        verticalAlign: "middle",
        whiteSpace: "nowrap",
      }}
    >
      לא בחומר
    </span>
  );
}

export const excludedRowStyle = {
  opacity: 0.45,
  filter: "grayscale(1)",
  pointerEvents: "none",
};

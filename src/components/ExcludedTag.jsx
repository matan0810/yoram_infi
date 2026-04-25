import { FONTS } from "../styles";

const TAG = {
  bg: "#f0ece4",
  text: "#7a776e",
  border: "#c8c3b8",
};

export default function ExcludedTag() {
  return (
    <span
      style={{
        fontFamily: FONTS.sans,
        fontSize: 10,
        fontWeight: 700,
        background: TAG.bg,
        color: TAG.text,
        border: `1px solid ${TAG.border}`,
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

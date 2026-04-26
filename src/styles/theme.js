export const FONTS = {
  sans: "Heebo, system-ui, sans-serif",
  serif: "Frank Ruhl Libre, Georgia, serif",
};

// Static UI chrome — does not change between courses.
// Per-course colors (primary, secondary, chapter) are provided by CourseContext.
export const COLORS_UI = {
  primary: "#c1440e",
  secondary: "#2b4162",
  dark: "#1a1a1a",
  bg: "#f4f1ea",
  border: "#d4cfbf",
  muted: "#9b9890",
  text: "#4a4740",
  subdued: "#6d6a5e",
  barBg: "#ece7dc",
  rowDivider: "#ede9e0",
  hoverBg: "#fef4ee",
  latestBg: "#fef8f3",
  chapter: { "א": "#c1440e", "ב": "#2b4162", "ג": "#3a5a40" },
};

export const c = {
  background: COLORS_UI.bg,
  minHeight: "100vh",
  fontFamily: FONTS.sans,
  direction: "rtl",
  padding: 20,
};

export const card = {
  background: "white",
  border: `1px solid ${COLORS_UI.border}`,
  padding: 20,
  boxShadow: `2px 2px 0 ${COLORS_UI.dark}`,
  marginBottom: 16,
};

export const inp = {
  fontFamily: "inherit",
  fontSize: 13,
  border: `1px solid ${COLORS_UI.border}`,
  padding: "6px 10px",
  background: COLORS_UI.bg,
  color: COLORS_UI.dark,
  outline: "none",
};

export const clearBtn = {
  fontSize: 13,
  background: "transparent",
  border: `1px solid ${COLORS_UI.border}`,
  padding: "5px 12px",
  cursor: "pointer",
  color: COLORS_UI.text,
};

export const countBadge = {
  fontSize: 13,
  fontWeight: 700,
  background: COLORS_UI.dark,
  color: COLORS_UI.bg,
  padding: "4px 10px",
};

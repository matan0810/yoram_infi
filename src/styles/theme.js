import { CHAPTERS } from "../data/config";

export const COLORS_UI = {
  primary:   CHAPTERS[0].color,
  secondary: CHAPTERS[1].color,
  dark:      "#1a1a1a",
  bg:        "#f4f1ea",
  border:    "#d4cfbf",
  muted:     "#9b9890",
  text:      "#4a4740",
  subdued:   "#6d6a5e",
  chapter:   Object.fromEntries(CHAPTERS.map((ch) => [ch.key, ch.color])),
};

export const c = {
  background: COLORS_UI.bg,
  minHeight: "100vh",
  fontFamily: "Heebo,system-ui,sans-serif",
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

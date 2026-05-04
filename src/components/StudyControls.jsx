import { COLORS_UI, FONTS } from "../styles";

const STATES = [
  { key: "none",  icon: "○", label: "ללא",    bg: "white",    border: COLORS_UI.border, color: COLORS_UI.subdued },
  { key: "done",  icon: "✓", label: "בוצע",   bg: "#3a7a3a",  border: "#3a7a3a",        color: "white"           },
  { key: "hard",  icon: "★", label: "קשה",    bg: "#fef1e6",  border: "#c1440e",        color: "#c1440e"         },
  { key: "later", icon: "◎", label: "להמשך", bg: "#e8eef6",  border: "#2b4162",        color: "#2b4162"         },
];

export default function StudyControls({ done, questionKey, toggleDone, hasLabel, toggleLabel }) {
  const isHard  = hasLabel?.(questionKey, "hard")  ?? false;
  const isLater = hasLabel?.(questionKey, "later") ?? false;

  let currentKey = "none";
  if (done)    currentKey = "done";
  else if (isHard)  currentKey = "hard";
  else if (isLater) currentKey = "later";

  const idx     = STATES.findIndex((s) => s.key === currentKey);
  const current = STATES[idx];
  const next    = STATES[(idx + 1) % STATES.length];

  function advance() {
    // Clear current, set next
    if (currentKey === "done")  toggleDone?.(questionKey);
    if (currentKey === "hard")  toggleLabel?.(questionKey, "hard");
    if (currentKey === "later") toggleLabel?.(questionKey, "later");

    if (next.key === "done")  toggleDone?.(questionKey);
    if (next.key === "hard")  toggleLabel?.(questionKey, "hard");
    if (next.key === "later") toggleLabel?.(questionKey, "later");
  }

  return (
    <button
      onClick={advance}
      title={`${current.label} ← לחץ`}
      style={{
        background: current.bg,
        border: `1.5px solid ${current.border}`,
        color: current.color,
        cursor: "pointer",
        fontFamily: FONTS.sans,
        fontSize: 14,
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background 0.15s, border-color 0.15s, color 0.15s",
      }}
    >
      {current.icon}
    </button>
  );
}

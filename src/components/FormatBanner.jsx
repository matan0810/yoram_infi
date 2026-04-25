import { CHAPTERS, EXAM_FORMAT } from "../data";
import { card, COLORS_UI, FONTS } from "../styles";

const ACCENT = CHAPTERS[0].color;
const chapterByKey = Object.fromEntries(CHAPTERS.map((ch) => [ch.key, ch]));

const BADGE_STYLES = {
  accent: { background: COLORS_UI.hoverBg, color: ACCENT },
  neutral: { background: COLORS_UI.bg, color: COLORS_UI.text },
};

const s = {
  banner: {
    ...card,
    borderColor: ACCENT,
    borderWidth: 2,
    background: COLORS_UI.hoverBg,
    marginBottom: 20,
  },
  header: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 },
  label: {
    background: ACCENT,
    color: "white",
    fontFamily: FONTS.sans,
    fontWeight: 800,
    fontSize: 13,
    padding: "5px 14px",
    letterSpacing: "0.06em",
    whiteSpace: "nowrap",
  },
  session: {
    fontFamily: FONTS.sans,
    fontWeight: 600,
    fontSize: 15,
    color: COLORS_UI.dark,
  },
  date: {
    fontWeight: 400,
    color: COLORS_UI.muted,
    marginRight: 6,
    fontSize: 13,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: 14,
    fontSize: 13,
    lineHeight: 1.6,
  },
  warning: { color: ACCENT, fontSize: 11 },
  badgesRow: {
    marginTop: 12,
    borderTop: `1px dashed ${COLORS_UI.border}`,
    paddingTop: 10,
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
};

function ChapterCell({ ch }) {
  const color = chapterByKey[ch.key]?.color ?? ACCENT;
  return (
    <div>
      <b style={{ color }}>
        פרק {ch.key}׳ — {ch.points} נק׳
      </b>
      <br />
      {ch.description}
      {ch.warning && (
        <>
          <br />
          <span style={s.warning}>⚠️ {ch.warning}</span>
        </>
      )}
    </div>
  );
}

function BadgePill({ label, variant }) {
  const { background, color } = BADGE_STYLES[variant] ?? BADGE_STYLES.neutral;
  return (
    <span
      style={{
        fontFamily: FONTS.sans,
        fontSize: 13,
        fontWeight: 600,
        background,
        color,
        border: `1px solid ${color}33`,
        padding: "4px 12px",
      }}
    >
      {label}
    </span>
  );
}

export default function FormatBanner() {
  return (
    <div style={s.banner}>
      <div style={s.header}>
        <div style={s.label}>תבנית רשמית</div>
        <div style={s.session}>
          {EXAM_FORMAT.latestSession}
          <span style={s.date}>{EXAM_FORMAT.latestDate}</span>
        </div>
      </div>
      <div style={s.grid}>
        {EXAM_FORMAT.chapters.map((ch) => (
          <ChapterCell key={ch.key} ch={ch} />
        ))}
      </div>
      <div style={s.badgesRow}>
        {EXAM_FORMAT.badges.map((b) => (
          <BadgePill key={b.label} {...b} />
        ))}
      </div>
    </div>
  );
}

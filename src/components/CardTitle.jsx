import { COLORS_UI } from "../styles";

export default function CardTitle({ emoji, title, sub }) {
  return (
    <div
      style={{
        marginBottom: 16,
        paddingBottom: 12,
        borderBottom: `1px solid ${COLORS_UI.border}`,
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em" }}>
        {emoji} {title}
      </div>
      {sub && (
        <div className="text-sm text-muted" style={{ marginTop: 3 }}>
          {sub}
        </div>
      )}
    </div>
  );
}

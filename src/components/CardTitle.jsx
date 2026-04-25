export default function CardTitle({ emoji, title, sub }) {
  return (
    <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #d4cfbf" }}>
      <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em" }}>
        {emoji} {title}
      </div>
      {sub && (
        <div style={{ fontSize: 12, color: "#9b9890", marginTop: 3 }}>
          {sub}
        </div>
      )}
    </div>
  );
}

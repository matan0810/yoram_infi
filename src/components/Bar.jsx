export default function Bar({ label, val, max, color, pct, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 8,
        alignItems: "center",
        padding: "7px 0",
        borderBottom: "1px dotted #d4cfbf",
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.background = "#fef4ee";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>
          {label}
        </div>
        <div style={{ background: "#ece7dc", height: 20 }}>
          <div
            style={{
              background: color,
              height: "100%",
              width: `${(val / max) * 100}%`,
              display: "flex",
              alignItems: "center",
              paddingRight: 6,
              color: color === "#d4a017" ? "#1a1a1a" : "white",
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "monospace",
              justifyContent: "flex-end",
            }}
          >
            {val}
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "monospace", fontSize: 11, color: "#6d6a5e" }}>
        {pct}%
      </div>
    </div>
  );
}

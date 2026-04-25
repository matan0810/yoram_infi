export default function Bar({ label, val, max, color, pct, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #ede9e0",
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.background = "#fef4ee";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <div
          style={{
            fontFamily: "Heebo, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#1a1a1a",
          }}
        >
          {label}
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "Heebo, system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 13,
              background: "#1a1a1a",
              color: "#f4f1ea",
              padding: "2px 9px",
              display: "inline-block",
            }}
          >
            {val}
          </span>
          <span
            style={{
              fontFamily: "Heebo, system-ui, sans-serif",
              fontSize: 11,
              color: "#9b9890",
              minWidth: 30,
              textAlign: "start",
            }}
          >
            {pct}%
          </span>
        </div>
      </div>
      <div style={{ background: "#ece7dc", height: 5 }}>
        <div
          style={{
            background: color,
            height: "100%",
            width: `${(val / max) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

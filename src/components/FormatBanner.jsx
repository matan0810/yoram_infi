import { card } from "../styles/theme";

export default function FormatBanner() {
  return (
    <div
      style={{
        ...card,
        borderColor: "#c1440e",
        borderWidth: 2,
        background: "#fef4ee",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            background: "#c1440e",
            color: "white",
            fontFamily: "Heebo, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 13,
            padding: "5px 14px",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}
        >
          תבנית רשמית
        </div>
        <div
          style={{
            fontFamily: "Heebo, system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: "#1a1a1a",
          }}
        >
          מועד א׳ תשפ״ו
          <span
            style={{
              fontWeight: 400,
              color: "#9b9890",
              marginRight: 6,
              fontSize: 13,
            }}
          >
            02.02.26
          </span>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: 14,
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        <div>
          <b style={{ color: "#c1440e" }}>פרק א׳ — 26 נק׳</b>
          <br />2 שאלות הוכחה, בחר 1
        </div>
        <div>
          <b style={{ color: "#2b4162" }}>פרק ב׳ — 26 נק׳</b>
          <br />2 שאלות חישוב+הוכחה, בחר 1
        </div>
        <div>
          <b style={{ color: "#3a5a40" }}>פרק ג׳ — 50 נק׳</b>
          <br />
          <b>10 שאלות × 5 נק׳</b>
          <br />
          <span style={{ color: "#c1440e", fontSize: 11 }}>
            ⚠️ פסוק שקרי = 0 על כל השאלה!
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          borderTop: "1px dashed #d4cfbf",
          paddingTop: 10,
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {[
          ["102 נק׳ אפשריות", "#fef4ee", "#c1440e"],
          ["מקסימום 100", "#fef4ee", "#c1440e"],
          ["חומר סגור", "#f4f1ea", "#4a4740"],
          ["3 שעות", "#f4f1ea", "#4a4740"],
        ].map(([label, bg, color]) => (
          <span
            key={label}
            style={{
              fontFamily: "Heebo, system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              background: bg,
              color,
              border: `1px solid ${color}33`,
              padding: "4px 12px",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

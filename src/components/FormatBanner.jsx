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
          fontFamily: "Georgia,serif",
          fontWeight: 700,
          fontSize: 16,
          marginBottom: 10,
          color: "#c1440e",
        }}
      >
        🎯 תבנית המבחן הרשמית — מועד א׳ תשפ״ו (02.02.26)
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
          marginTop: 10,
          fontFamily: "monospace",
          fontSize: 10,
          color: "#6d6a5e",
          borderTop: "1px dashed #d4cfbf",
          paddingTop: 8,
        }}
      >
        102 נק׳ אפשריות · מקסימום 100 · חומר סגור · 3 שעות
      </div>
    </div>
  );
}

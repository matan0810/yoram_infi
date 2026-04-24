import { useMemo } from "react";
import Chip, { tc } from "../components/Chip";
import { card, inp } from "../styles/theme";
import { EXAMS } from "../data/exams";
import { TOPIC_HE } from "../data/topics";

export default function SearchTab({
  sq,
  setSq,
  st,
  setSt,
  sch,
  setSch,
  sty,
  setSty,
  sy,
  setSy,
  sm,
  setSm,
}) {
  const sorted = useMemo(
    () =>
      Object.entries(
        EXAMS.reduce((acc, ex) => {
          ex.questions.forEach((q) => {
            acc[q.topic] = (acc[q.topic] || 0) + 1;
          });
          return acc;
        }, {}),
      ).sort((a, b) => b[1] - a[1]),
    [],
  );

  const years = useMemo(
    () => [...new Set(EXAMS.map((e) => e.year))].sort(),
    [],
  );

  const types = useMemo(
    () =>
      [...new Set(EXAMS.flatMap((e) => e.questions.map((q) => q.type)))].sort(),
    [],
  );

  const sr = useMemo(() => {
    const r = [];
    const q = sq.toLowerCase();
    EXAMS.forEach((ex) => {
      if (sy && String(ex.year) !== sy) return;
      if (sm && ex.moed !== sm) return;
      ex.questions.forEach((qu) => {
        if (st && qu.topic !== st) return;
        if (sch && qu.chapter !== sch) return;
        if (sty && qu.type !== sty) return;
        if (
          q &&
          !(qu.summary + TOPIC_HE[qu.topic] + ex.code).toLowerCase().includes(q)
        )
          return;
        r.push({ ex, q: qu });
      });
    });
    return r;
  }, [sq, st, sch, sty, sy, sm]);

  return (
    <div>
      <div
        style={{
          ...card,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={sq}
          onChange={(e) => setSq(e.target.value)}
          placeholder="חפש שאלה, נוסחה, נושא..."
          style={{ ...inp, minWidth: 220 }}
        />
        <select value={st} onChange={(e) => setSt(e.target.value)} style={inp}>
          <option value="">כל הנושאים</option>
          {sorted.map(([k]) => (
            <option key={k} value={k}>
              {TOPIC_HE[k] || k}
            </option>
          ))}
        </select>
        <select
          value={sch}
          onChange={(e) => setSch(e.target.value)}
          style={inp}
        >
          <option value="">כל הפרקים</option>
          <option value="א">פרק א</option>
          <option value="ב">פרק ב</option>
          <option value="ג">פרק ג</option>
        </select>
        <select
          value={sty}
          onChange={(e) => setSty(e.target.value)}
          style={inp}
        >
          <option value="">כל הסוגים</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select value={sy} onChange={(e) => setSy(e.target.value)} style={inp}>
          <option value="">כל השנים</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select value={sm} onChange={(e) => setSm(e.target.value)} style={inp}>
          <option value="">כל המועדים</option>
          <option value="א">מועד א</option>
          <option value="ב">מועד ב</option>
        </select>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            background: "#1a1a1a",
            color: "#f4f1ea",
            padding: "3px 8px",
            fontWeight: 700,
          }}
        >
          {sr.length}
        </span>
        {(sq || st || sch || sty || sy || sm) && (
          <button
            onClick={() => {
              setSq("");
              setSt("");
              setSch("");
              setSty("");
              setSy("");
              setSm("");
            }}
            style={{
              fontFamily: "monospace",
              fontSize: 11,
              background: "transparent",
              border: "1px solid #d4cfbf",
              padding: "4px 10px",
              cursor: "pointer",
              color: "#6d6a5e",
            }}
          >
            נקה
          </button>
        )}
      </div>

      {sr.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: 40,
            color: "#6d6a5e",
            fontStyle: "italic",
            fontFamily: "Frank Ruhl Libre, Georgia, serif",
          }}
        >
          לא נמצאו שאלות
        </div>
      )}

      <div style={{ display: "grid", gap: 8 }}>
        {sr.map((r, i) => (
          <div
            key={i}
            style={{
              background: "white",
              border: "1px solid #d4cfbf",
              padding: 12,
              display: "grid",
              gridTemplateColumns: "110px 80px 1fr",
              gap: 12,
              alignItems: "start",
              fontSize: 13,
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 11,
              }}
            >
              {r.ex.code}
              <br />
              <span style={{ fontWeight: 400, fontSize: 10, color: "#6d6a5e" }}>
                {r.ex.year} · {r.q.id}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Chip kind={r.q.chapter}>פרק {r.q.chapter}</Chip>
              <Chip kind={tc(r.q.type)}>{r.q.type}</Chip>
            </div>
            <div>
              <div
                onClick={() => setSt(r.q.topic)}
                style={{
                  fontSize: 10,
                  color: "#2b4162",
                  marginBottom: 3,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {TOPIC_HE[r.q.topic] || r.q.topic}
              </div>
              <div style={{ lineHeight: 1.4 }}>{r.q.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

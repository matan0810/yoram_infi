import { useTypeHelpers } from "../components";
import { useSearchData } from "../hooks";
import { card, inp, COLORS_UI, FONTS, clearBtn, countBadge } from "../styles";
import SearchResultCard from "./SearchResultCard";

const MOED_OPTIONS = [
  { value: "א", label: "מועד א" },
  { value: "ב", label: "מועד ב" },
];

export default function SearchTab({
  query,
  setQuery,
  topic,
  setTopic,
  chapter,
  setChapter,
  type,
  setType,
  year,
  setYear,
  moed,
  setMoed,
  lecturer,
  setLecturer,
  exams,
  topicHe,
  isExcluded,
  chapters,
  colorsUI,
}) {
  const { typeToLabel } = useTypeHelpers();
  const filters = { query, topic, chapter, type, year, moed, lecturer };
  const { topicsByFrequency, years, lecturers, types, results } = useSearchData(
    exams,
    filters,
    topicHe,
  );
  const hasActiveFilters = Object.values(filters).some(Boolean);

  const clearFilters = () => {
    setQuery("");
    setTopic("");
    setChapter("");
    setType("");
    setYear("");
    setMoed("");
    setLecturer("");
  };

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חפש שאלה, נוסחה, נושא..."
          style={{ ...inp, minWidth: 220 }}
        />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={inp}
        >
          <option value="">כל הנושאים</option>
          {topicsByFrequency.map(([key]) => (
            <option key={key} value={key}>
              {topicHe[key] || key}
            </option>
          ))}
        </select>
        <select
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          style={inp}
        >
          <option value="">כל הפרקים</option>
          {chapters.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inp}
        >
          <option value="">כל הסוגים</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {typeToLabel(t)}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={inp}
        >
          <option value="">כל השנים</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          value={moed}
          onChange={(e) => setMoed(e.target.value)}
          style={inp}
        >
          <option value="">כל המועדים</option>
          {MOED_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {lecturers.length > 1 && (
          <select
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
            style={inp}
          >
            <option value="">כל המרצים</option>
            {lecturers.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        )}
        <span style={countBadge}>{results.length} תוצאות</span>
        {hasActiveFilters && (
          <button onClick={clearFilters} style={clearBtn}>
            נקה סינון
          </button>
        )}
      </div>

      {results.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: 40,
            color: COLORS_UI.subdued,
            fontStyle: "italic",
            fontFamily: FONTS.serif,
          }}
        >
          לא נמצאו שאלות
        </div>
      )}

      <div style={{ display: "grid", gap: 8 }}>
        {results.map(({ exam, question }, i) => (
          <SearchResultCard
            key={i}
            exam={exam}
            question={question}
            topicHe={topicHe}
            isExcluded={isExcluded}
            setTopic={setTopic}
            colorsUI={colorsUI}
          />
        ))}
      </div>
    </div>
  );
}

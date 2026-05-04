import { useTypeHelpers } from "../components";
import { useSearchData } from "../hooks";
import { inp, clearBtn, countBadge } from "../styles";
import SearchResultCard from "./SearchResultCard";

const MOED_OPTIONS = [
  { value: "א", label: "מועד א" },
  { value: "ב", label: "מועד ב" },
];

const PROGRESS_OPTIONS = [
  { value: "done",   label: "✓ בוצע" },
  { value: "undone", label: "○ לא בוצע" },
  { value: "hard",   label: "★ קשה" },
  { value: "later",  label: "◎ להמשך" },
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
  progressFilter,
  setProgressFilter,
  clearAll,
  exams,
  topicHe,
  isExcluded,
  chapters,
  colorsUI,
  studyMode,
  isDone,
  toggleDone,
  hasLabel,
  toggleLabel,
  doneVersion,
  labelsVersion,
}) {
  const { typeToLabel } = useTypeHelpers();
  const filters = { query, topic, chapter, type, year, moed, lecturer, progressFilter };
  const { topicsByFrequency, years, lecturers, types, results } = useSearchData(
    exams,
    filters,
    topicHe,
    isDone,
    doneVersion,
    hasLabel,
    labelsVersion,
  );
  const hasActiveFilters = Object.values(filters).some(Boolean);

  const clearFilters = clearAll ?? (() => {
    setQuery("");
    setTopic("");
    setChapter("");
    setType("");
    setYear("");
    setMoed("");
    setLecturer("");
    setProgressFilter?.("");
  });

  return (
    <div>
      <div className="ui-card filter-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חפש שאלה, נוסחה, נושא..."
          style={{ ...inp, minWidth: 220 }}
        />
        <select value={topic} onChange={(e) => setTopic(e.target.value)} style={inp}>
          <option value="">כל הנושאים</option>
          {topicsByFrequency.map(([key]) => (
            <option key={key} value={key}>
              {topicHe[key] || key}
            </option>
          ))}
        </select>
        <select value={chapter} onChange={(e) => setChapter(e.target.value)} style={inp}>
          <option value="">כל הפרקים</option>
          {chapters.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} style={inp}>
          <option value="">כל הסוגים</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {typeToLabel(t)}
            </option>
          ))}
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} style={inp}>
          <option value="">כל השנים</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select value={moed} onChange={(e) => setMoed(e.target.value)} style={inp}>
          <option value="">כל המועדים</option>
          {MOED_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {lecturers.length > 1 && (
          <select value={lecturer} onChange={(e) => setLecturer(e.target.value)} style={inp}>
            <option value="">כל המרצים</option>
            {lecturers.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        )}
        {/* Progress/label filter — only meaningful in study mode */}
        {studyMode && setProgressFilter && (
          <select
            value={progressFilter || ""}
            onChange={(e) => setProgressFilter(e.target.value)}
            style={inp}
          >
            <option value="">כל הסטטוסים</option>
            {PROGRESS_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
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
        <div className="empty-state">לא נמצאו שאלות</div>
      )}

      <div className="results-grid">
        {results.map(({ exam, question }, i) => (
          <SearchResultCard
            key={i}
            exam={exam}
            question={question}
            topicHe={topicHe}
            isExcluded={isExcluded}
            setTopic={setTopic}
            colorsUI={colorsUI}
            studyMode={studyMode}
            isDone={isDone}
            toggleDone={toggleDone}
            hasLabel={hasLabel}
            toggleLabel={toggleLabel}
            doneVersion={doneVersion}
            labelsVersion={labelsVersion}
          />
        ))}
      </div>
    </div>
  );
}

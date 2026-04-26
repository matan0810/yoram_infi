import { EXCLUDED_TOPICS, CHAPTERS } from "./config";
export { EXCLUDED_TOPICS };
export const isExcluded = (topic) => EXCLUDED_TOPICS.has(topic);

export const TOPIC_HE = {
  // ── פרק א: פולינומים, ערכים עצמיים, לכסינות ──────────────────
  eigenvalue_char: "ערך עצמי – הגדרה ואפיון",
  diagonalization: "לכסינות",
  char_polynomial: "פולינום אופייני",
  minimal_polynomial: "פולינום מינימלי",
  polynomial_operator: "פולינום של אופרטור (Cayley-Hamilton / ראשוני)",
  cyclic_subspace: "תת-מרחב ציקלי",
  invariant_subspace: "תת-מרחב אינווריאנטי",
  alg_geo_multiplicity: "ריבוי אלגברי וגאומטרי",
  matrix_similarity: "דמיון מטריצות",

  // ── פרק ב: נילפוטנטיים וצורת ז'ורדן ──────────────────────────
  jordan_form: "צורת ז'ורדן",
  nilpotent: "אופרטורים נילפוטנטיים",
  generalized_eigenspace: "מרחב עצמי מוכלל",
  jordan_chain: "שרשראות ז'ורדן / בסיס שרשראות",

  // ── פרק ג: מכפלה פנימית ואופרטורים ───────────────────────────
  inner_product: "מכפלה פנימית ונורמה",
  orthogonal_projection: "הטלה אורתוגונלית",
  gram_schmidt: "גרם-שמידט ובסיס אורתונורמלי",
  cauchy_schwarz: "אי-שוויון קושי-שוורץ",
  orthogonal_complement: "משלים אורתוגונלי",
  orthogonal_operator: "אופרטור אורתוגונלי",
  self_adjoint: "אופרטור צמוד לעצמו (סימטרי / הרמיטי)",
  spectral_theorem: "משפט הלכסון הספקטרלי",
  unitary_operator: "אופרטור אוניטרי / לכסינות אוניטרית",
  normal_operator: "אופרטור נורמלי",

  // ── נושאים שאינם בסילבוס הנוכחי (EXCLUDED) ───────────────────
  bilinear_form: "תבנית בילינארית",
  dual_space: "מרחב דואלי",
  volume_function: "פונקציית נפח (דטרמיננטה גאומטרית)",
  sylvester_inertia: "משפט הסילבסטר / סיגנטורה",
};

export const COLORS = [
  CHAPTERS[0].color, // #2b4162 – כחול (פרק א)
  CHAPTERS[1].color, // #c1440e – כתום (פרק ב)
  CHAPTERS[2].color, // #3a5a40 – ירוק (פרק ג)
  "#d4a017", // זהב
  "#5a3a6b", // סגול
  "#9a3232", // אדום כהה
  "#7a5c3e", // חום
  "#2a6b6b", // טורקיז
  "#1a5276", // כחול כהה
  "#6e2f8f", // סגול כהה
];

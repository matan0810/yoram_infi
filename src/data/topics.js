export const EXCLUDED_TOPICS = new Set(["multivariable"]);
export const isExcluded = (topic) => EXCLUDED_TOPICS.has(topic);

export const TOPIC_HE = {
  countable_sums: "קבוצות בנות מנייה / סכומים לא מסודרים",
  limsup: "lim sup / lim inf",
  series_basic: "טורים — בסיסי / קושי / זנב",
  series_pos: "טורים חיוביים — מבחנים",
  series_alt: "לייבניץ / התכנסות בתנאי ובהחלט",
  series_rearr: "משפט רימן / שינוי סדר סכימה",
  series_product: "מכפלות טורים / מרטנס / קושי",
  improper_int: "אינטגרלים לא אמיתיים",
  int_series_link: "מבחן האינטגרל / קשר טורים-אינטגרלים",
  func_sequences: 'סדרות פונקציות / התכנסות במ"ש',
  func_series: "טורי פונקציות / ויירשטראס",
  taylor: "פולינומי / טורי טיילור / שאריות",
  power_series: "טורי חזקות / רדיוס התכנסות",
  riemann_int: "אינטגרביליות רימן",
  ftoc: "המשפט היסודי של החשבון האינטגרלי",
  bv: "השתנות חסומה",
  multivariable: 'חדו"א רב-משתני',
  lhopital: "כלל לופיטל / גבולות",
};

export const COLORS = [
  "#c1440e",
  "#2b4162",
  "#3a5a40",
  "#d4a017",
  "#5a3a6b",
  "#9a3232",
  "#7a5c3e",
  "#2a6b6b",
];

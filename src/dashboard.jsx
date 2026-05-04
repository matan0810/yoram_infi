import { useState, useMemo } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CHAPTERS = [
  { key: "א", label: "פולינומים, ע\"ע, לכסינות", color: "#4a90d9", bg: "#1a2a3a" },
  { key: "ב", label: "צורת ז'ורדן", color: "#e07b4a", bg: "#2a1a10" },
  { key: "ג", label: "מ\"פ פנימית ואופרטורים", color: "#5ab87a", bg: "#0f2a18" },
];
const CH_COLOR = { א: "#4a90d9", ב: "#e07b4a", ג: "#5ab87a" };
const CH_BG    = { א: "#1a2a3a", ב: "#2a1a10", ג: "#0f2a18" };

const EXCLUDED = new Set(["bilinear_form","dual_space","volume_function","sylvester_inertia","quadratic_form","field_char"]);

const TOPIC_HE = {
  eigenvalue_definition:    "ע\"ע: הגדרה והוכחה",
  eigenvectors_independent: "ו\"ע לע\"ע שונים — בת\"ל",
  diagonalization:          "לכסינות (תנאים, $V=\\bigoplus V_\\lambda$)",
  diagonalization_compute:  "לכסון: חישוב $P,D$",
  char_polynomial:          "פולינום אופייני",
  minimal_polynomial:       "פולינום מינימלי של אופרטור",
  minimal_polynomial_vec:   "פולינום מינימלי של וקטור $\\min_v(T)$",
  cayley_hamilton:          "קיילי-המילטון",
  primary_decomposition:    "פירוק ראשוני: $V=\\ker P\\oplus\\ker Q$",
  cyclic_subspace:          "תת-מרחב ציקלי $Z_{T,v}$",
  invariant_subspace:       "תת-מרחב אינווריאנטי",
  alg_geo_multiplicity:     "ריבוי אלגברי וגאומטרי",
  matrix_similarity:        "דמיון מטריצות",
  triangulation:            "משולשון",
  trace_basics:             "עקבה",
  determinant_basics:       "דטרמיננטה",
  jordan_form:              "צורת ז'ורדן",
  jordan_existence:         "קיום צורת ז'ורדן",
  jordan_chain:             "שרשראות ז'ורדן",
  nilpotent_basic:          "אופרטור נילפוטנטי",
  nilpotent_classify:       "סיווג נילפוטנטיות",
  generalized_eigenspace:   "מרחב עצמי מוכלל",
  inner_product_axioms:     "מ\"פ פנימית: אקסיומות",
  norm_basics:              "נורמה ופיתגורס",
  cauchy_schwarz:           "קושי-שוורץ",
  triangle_inequality:      "אי-שוויון המשולש",
  gram_schmidt:             "תהליך גרם-שמידט",
  orthonormal_basis:        "בסיס אורתונורמלי",
  orthogonal_complement:    "משלים אורתוגונלי $W^\\perp$",
  orthogonal_projection:    "היטל אורתוגונלי $P_W$",
  riesz_representation:     "משפט רייס",
  adjoint_operator:         "אופרטור צמוד $T^*$",
  self_adjoint:             "צמוד לעצמו (סימטרי/הרמיטי)",
  self_adjoint_invariant:   "$T$ צמוד + $W$ אינ' ⟹ $W^\\perp$ אינ'",
  spectral_theorem_real:    "לכסון ספקטרלי (ממשי)",
  spectral_theorem_complex: "לכסון ספקטרלי (מרוכב/נורמלי)",
  orthogonal_operator:      "אופרטור אורתוגונלי",
  unitary_operator:         "אופרטור אוניטרי",
  unitary_diagonalization:  "לכסון אוניטרי",
  normal_operator:          "אופרטור נורמלי",
};

const TOPIC_CHAPTER = {
  eigenvalue_definition:"א", eigenvectors_independent:"א", diagonalization:"א",
  diagonalization_compute:"א", char_polynomial:"א", minimal_polynomial:"א",
  minimal_polynomial_vec:"א", cayley_hamilton:"א", primary_decomposition:"א",
  cyclic_subspace:"א", invariant_subspace:"א", alg_geo_multiplicity:"א",
  matrix_similarity:"א", triangulation:"א", trace_basics:"א", determinant_basics:"א",
  jordan_form:"ב", jordan_existence:"ב", jordan_chain:"ב", nilpotent_basic:"ב",
  nilpotent_classify:"ב", generalized_eigenspace:"ב",
  inner_product_axioms:"ג", norm_basics:"ג", cauchy_schwarz:"ג",
  triangle_inequality:"ג", gram_schmidt:"ג", orthonormal_basis:"ג",
  orthogonal_complement:"ג", orthogonal_projection:"ג", riesz_representation:"ג",
  adjoint_operator:"ג", self_adjoint:"ג", self_adjoint_invariant:"ג",
  spectral_theorem_real:"ג", spectral_theorem_complex:"ג", orthogonal_operator:"ג",
  unitary_operator:"ג", unitary_diagonalization:"ג", normal_operator:"ג",
};

const TRAPS = [
  {
    t: "שאלת חובה: $\\min_{e_1}(A)$, בסיס ז'ורדן, ת\"מ מקסימלי לכסין",
    n: "שאלת חובה (16 נק') בכל מבחני חורף 2022-2023 (תשפ\"ב-ג). ג' הסעיף הכי טריקי.",
    years: [2022, 2023],
  },
  {
    t: "פירוק $V=\\ker P(f)\\oplus\\ker Q(f)$ כש-$\\gcd(P,Q)=1$",
    n: "הופיעה בקיץ 2019, חורף 2022, חורף 2023; הוכחה דרך זהות בזו. בחינה בכל מבחן כמעט.",
    years: [2019, 2022, 2023, 2024, 2025],
  },
  {
    t: "$\\lambda$ ע\"ע ⟺ $\\ker(\\lambda I-T)\\neq\\{0\\}$",
    n: "שאלה בסיסית שמופיעה שוב ושוב בצורות שונות. מבחן לדוגמא תשפ\"ו, 2014, 2019.",
    years: [2014, 2019, 2025],
  },
  {
    t: "$T$ צמוד לעצמו + $W$ אינווריאנטי ⟹ $W^\\perp$ אינווריאנטי",
    n: "קיץ 2015 כ-Q1 חובה 23 נק'; מבחן לדוגמא תשפ\"ו. ההוכחה קצרה אך לא טריוויאלית.",
    years: [2015, 2017, 2025],
  },
  {
    t: "אי-שוויון קושי-שוורץ ויישומים ($\\frac{16}{a+b+c+d}\\leq\\frac{1}{a}+...$)",
    n: "קיץ 2024, חורף 2025 (16/(a+b+c+d)), מועד ב' 2025 — גרסאות שונות בכל שנה.",
    years: [2024, 2025],
  },
  {
    t: "$T$ אורתוגונלי/אוניטרי ⟺ $\\|Tv\\|=\\|v\\|$ לכל $v$",
    n: "קיץ 2024 כ-Q1, מועד ב' 2025; כולל הוכחה שקולות (i)⟺(ii): שמירת מ\"פ ↔ שמירת נורמה.",
    years: [2017, 2019, 2024, 2025],
  },
  {
    t: "$A\\in M_n(\\mathbb{C})$ דומה ל-$A^t$",
    n: "קיץ 2022 ב', 2025 מועד א'. הוכחה דרך ז'ורדן. מופיעה כשאלת חישוב ושאלת הוכחה.",
    years: [2022, 2025],
  },
];

// Compact exam list with key data
const EXAMS = [
  { code:"2010_א_I", year:2010, moed:"א", semester:"summer", questions:[
    {id:"א1",chapter:"א",topic:"matrix_similarity",type:"true_false",points:7,summary:"$A$ רגולרית ⟹ $A^{-1}$ צ\"ל של $I,A,\\ldots,A^{n-1}$"},
    {id:"ג3",chapter:"ג",topic:"cauchy_schwarz",type:"proof_theorem",points:16,summary:"נסחו והוכיחו: אי-שוויון קושי-שוורץ"},
    {id:"ג5",chapter:"ג",topic:"spectral_theorem_complex",type:"proof_theorem",points:16,summary:"$T$ נורמלי מעל $\\mathbb{C}$ ⟹ בסיס אורתונורמלי של ו\"ע"},
  ]},
  { code:"2010_ב_I", year:2010, moed:"ב", semester:"summer", questions:[
    {id:"ג4",chapter:"ג",topic:"riesz_representation",type:"proof_theorem",points:16,summary:"$\\varphi\\in V^*$ ⟹ קיים $u$ יחיד: $\\varphi(v)=\\langle u,v\\rangle$ (משפט רייס)"},
    {id:"ג5",chapter:"ג",topic:"orthogonal_operator",type:"proof_short",points:17,summary:"$A\\in M_3(\\mathbb{R})$ אורתוגונלית, $\\det A=-1$ ⟹ $-1$ ע\"ע"},
  ]},
  { code:"2011_א_I", year:2011, moed:"א", semester:"summer", questions:[
    {id:"א1",chapter:"א",topic:"cayley_hamilton",type:"proof_theorem",points:20,summary:"הוכיחו: $f_T(T)=0$"},
    {id:"ג2",chapter:"ג",topic:"spectral_theorem_complex",type:"proof_theorem",points:20,summary:"$T$ נורמלי מעל $\\mathbb{C}$ ⟹ $T$ לכסין בבסיס אורתונורמלי"},
    {id:"ג3",chapter:"ג",topic:"spectral_theorem_real",type:"compute",points:15,summary:"$A\\in M_4(\\mathbb{R})$: לכסון אורתוגונלי + $\\mathrm{tr}(A^{2011})$"},
  ]},
  { code:"2011_ב_I", year:2011, moed:"ב", semester:"summer", questions:[
    {id:"א1",chapter:"א",topic:"eigenvectors_independent",type:"proof_short",points:20,summary:"ו\"ע לע\"ע שונים בת\"ל; $n$ ע\"ע שונים ⟹ $T$ לכסין"},
    {id:"ג1",chapter:"ג",topic:"riesz_representation",type:"proof_theorem",points:20,summary:"משפט רייס: $\\varphi(u)=\\langle u,v\\rangle$ + $(TS)^*=S^*T^*$"},
  ]},
  { code:"2011_ג_I", year:2011, moed:"ג", semester:"summer", questions:[
    {id:"ג1",chapter:"ג",topic:"cauchy_schwarz",type:"proof_short",points:20,summary:"קושי-שוורץ + אי-שוויון המשולש"},
    {id:"ג2",chapter:"ג",topic:"self_adjoint",type:"proof_short",points:20,summary:"$T$ צמוד לעצמו ⟹ ע\"ע ממשיים; $T$ נורמלי ⟹ ו\"ע שונים ⊥"},
  ]},
  { code:"2012_א_I", year:2012, moed:"א", semester:"summer", questions:[
    {id:"ג2",chapter:"ג",topic:"spectral_theorem_real",type:"compute",points:19,summary:"$A\\in M_3(\\mathbb{R})$: פ\"מ, $D$ אלכסונית, $U$ אוניטרית"},
    {id:"ב1",chapter:"ב",topic:"jordan_form",type:"compute",points:19,summary:"$J$ ז'ורדן + $P$ הפיכה: $P^{-1}AP=J$ למטריצה $5\\times5$"},
  ]},
  { code:"2012_ב_I", year:2012, moed:"ב", semester:"summer", questions:[
    {id:"א1",chapter:"א",topic:"minimal_polynomial",type:"definition_apply",points:16,summary:"הגדרת $m_T$; $m_T|q$ עבור $q(T)=0$; $\\lambda$ ע\"ע ⟺ שורש $m_T$"},
    {id:"ג2",chapter:"ג",topic:"normal_operator",type:"compute",points:19,summary:"$A$ נורמלית; $U$ אוניטרית, $D$ אלכסונית: $D=U^*AU$"},
  ]},
  { code:"2013_ב_I", year:2013, moed:"ב", semester:"summer", questions:[
    {id:"א1",chapter:"א",topic:"eigenvectors_independent",type:"mixed",points:30,summary:"ו\"ע לע\"ע שונים בת\"ל; לכסינות מטריצה $3\\times3$"},
  ]},
  { code:"2014_א_I", year:2014, moed:"א", semester:"summer", questions:[
    {id:"ג1",chapter:"ג",topic:"spectral_theorem_real",type:"proof_theorem",points:15,summary:"$T$ צמוד לעצמו מעל $\\mathbb{C}$ ⟹ בסיס אורתונורמלי של ו\"ע"},
    {id:"א1",chapter:"א",topic:"eigenvectors_independent",type:"proof_short",points:15,summary:"ו\"ע לע\"ע שונים בת\"ל"},
  ]},
  { code:"2014_ב_I", year:2014, moed:"ב", semester:"summer", questions:[
    {id:"א1",chapter:"א",topic:"minimal_polynomial_vec",type:"proof_short",points:15,summary:"$(v,fv,\\ldots,f^{k-1}v)$ בת\"ל; $Z_{f,v}$ אינווריאנטי"},
    {id:"ב4",chapter:"ב",topic:"jordan_form",type:"compute",points:20,summary:"$A\\in M_3(\\mathbb{C})$: פ\"א, מ\"ע מוכללים, צורת ז'ורדן"},
  ]},
  { code:"2014_ג_I", year:2014, moed:"ג", semester:"summer", questions:[
    {id:"ג3",chapter:"ג",topic:"gram_schmidt",type:"compute",points:20,summary:"$V=M_2(\\mathbb{R})$ עם $\\langle A,B\\rangle=\\mathrm{tr}(A^tB)$: גרם-שמידט"},
    {id:"ג4",chapter:"ג",topic:"spectral_theorem_real",type:"compute",points:20,summary:"$f:\\mathbb{R}^2\\to\\mathbb{R}^2$: פ\"א, $D,P$: $P^{-1}AP=D$"},
    {id:"ב2",chapter:"ב",topic:"jordan_form",type:"compute",points:20,summary:"$A\\in M_3(\\mathbb{C})$: $J$ ז'ורדן, $P$ הפיכה"},
  ]},
  { code:"2015_א_I", year:2015, moed:"א", semester:"summer", questions:[
    {id:"ג1",chapter:"ג",topic:"self_adjoint_invariant",type:"proof_short",points:23,summary:"$T$ צמוד, $U$ אינווריאנטי ⟹ $U^\\perp$ אינווריאנטי; בסיס אורתונורמלי של ו\"ע"},
    {id:"ג3",chapter:"ג",topic:"orthogonal_projection",type:"compute",points:21,summary:"$U\\subset\\mathbb{R}^3$: בסיס אורתוגונלי, הטלה, מרחק, ע\"ע של $P_U$"},
  ]},
  { code:"2015_ב_I", year:2015, moed:"ב", semester:"summer", questions:[
    {id:"ג1",chapter:"ג",topic:"gram_schmidt",type:"proof_theorem",points:23,summary:"גרם-שמידט: הוכחה + קיום בסיס אורתונורמלי"},
    {id:"ג3",chapter:"ג",topic:"spectral_theorem_real",type:"compute",points:21,summary:"$A\\in M_3(\\mathbb{R})$: $O$ אורתוגונלית, $D$ אלכסונית, $\\mathrm{tr}(A^{10})$"},
    {id:"ג4",chapter:"ג",topic:"gram_schmidt",type:"compute",points:21,summary:"$\\mathbb{R}_{\\leq2}[x]$ עם $\\langle p,q\\rangle=\\int_{-1}^1 pq$: גרם-שמידט"},
  ]},
  { code:"2016_א_I", year:2016, moed:"א", semester:"summer", questions:[
    {id:"Q1",chapter:"א",topic:"cyclic_subspace",type:"mixed",points:25,summary:"$T:\\mathbb{R}^4$: ת\"מ ציקלי, פ\"א, ע\"ע; $(U^\\perp)^\\perp=U$"},
    {id:"Q3",chapter:"ב",topic:"jordan_form",type:"mixed",points:25,summary:"$A$ נילפוטנטית: $k$ מינימלי, $J$ ז'ורדן, $P$ הפיכה"},
    {id:"Q4",chapter:"ג",topic:"primary_decomposition",type:"mixed",points:25,summary:"$\\langle\\cdot|\\cdot\\rangle$ לא-סטנ' על $\\mathbb{R}^2$, $T^*$; פירוק $V=\\ker p_1\\oplus\\ker p_2$"},
  ]},
  { code:"2016_ב_I", year:2016, moed:"ב", semester:"summer", questions:[
    {id:"Q1",chapter:"ב",topic:"jordan_form",type:"mixed",points:25,summary:"$A\\in M_2(\\mathbb{C})$: $J$ ז'ורדן, $P$ הפיכה; $[v]_B$ בבסיס אורתונורמלי"},
    {id:"Q3",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"ריבועים פחותים ב-$\\mathbb{R}^3$; $\\chi_{T|_U}|\\chi_T$"},
    {id:"Q4",chapter:"ג",topic:"spectral_theorem_real",type:"mixed",points:25,summary:"$A\\in M_3(\\mathbb{R})$ עם ע\"ע $-3,0,3$: לכסון; קיילי-המילטון $T^{-1}$"},
  ]},
  { code:"2017_א_I", year:2017, moed:"א", semester:"summer", questions:[
    {id:"Q2",chapter:"ג",topic:"orthogonal_operator",type:"mixed",points:25,summary:"שמירת מ\"פ ⟺ שמירת נורמה; $A\\in M_4(\\mathbb{C})$: פ\"א, לכסינות"},
    {id:"Q3",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"$P_U+P_{U^\\perp}=\\mathrm{Id}$; מטריצות $P_U,P_W$ ב-$\\mathbb{R}^5$"},
    {id:"Q4",chapter:"ג",topic:"self_adjoint_invariant",type:"mixed",points:25,summary:"$W$ אינווריאנטי ⟹ $W^\\perp$ $f^*$-אינווריאנטי; $A$ נילפוטנטית ז'ורדן"},
    {id:"Q5",chapter:"ג",topic:"spectral_theorem_real",type:"mixed",points:25,summary:"האם $h,k$ מ\"פ? $A\\in M_3(\\mathbb{R})$: לכסון אורתוגונלי"},
  ]},
  { code:"2017_ב_I", year:2017, moed:"ב", semester:"summer", questions:[
    {id:"Q1",chapter:"ג",topic:"gram_schmidt",type:"mixed",points:25,summary:"גרם-שמידט עם שמירת Span; $P_U$ ב-$\\mathbb{R}^4$"},
    {id:"Q3",chapter:"ג",topic:"self_adjoint",type:"mixed",points:25,summary:"$T$ צמוד לעצמו ⟹ ו\"ע שונים ⊥; $P^tAP=I$ מעל $\\mathbb{C}$"},
    {id:"Q5",chapter:"ג",topic:"cauchy_schwarz",type:"mixed",points:25,summary:"$v$ ו\"ע משותף ל-$fg$ ו-$gf$; $100a+10b+c<101\\sqrt{a^2+b^2+c^2}$"},
  ]},
  { code:"2018_א_I", year:2018, moed:"א", semester:"summer", questions:[
    {id:"Q1",chapter:"ג",topic:"adjoint_operator",type:"mixed",points:25,summary:"קיום $T^*$; $A\\in M_4(\\mathbb{R})$: $a,b,c$ עבורם לכסינה"},
    {id:"Q2",chapter:"ב",topic:"nilpotent_basic",type:"mixed",points:25,summary:"$\\{v,Tv,\\ldots,T^{k-1}v\\}$ בת\"ל; גרם-שמידט על $\\mathbb{R}^2$ עם מ\"פ לא-סטנ'"},
    {id:"Q4",chapter:"א",topic:"primary_decomposition",type:"mixed",points:25,summary:"$v\\in V_\\lambda\\cup V_\\mu$ או $V_\\lambda+V_\\mu=V$; $A\\in M_2$: $O$ אורתוגונלית, $B^2=A$"},
  ]},
  { code:"2018_ב_I", year:2018, moed:"ב", semester:"summer", questions:[
    {id:"Q1",chapter:"ג",topic:"riesz_representation",type:"mixed",points:25,summary:"משפט רייס; ספירת ז'ורדנים עם $\\mathrm{rk}(A+2I)=4$"},
    {id:"Q2",chapter:"א",topic:"matrix_similarity",type:"mixed",points:25,summary:"$\\mathrm{Im}\\,T^k=\\mathrm{Im}\\,T^{k+1}$ ⟹ $T|_U$ הפיך; $A=\\frac{1}{\\sqrt2}\\begin{pmatrix}\\alpha&i\\alpha\\\\i\\alpha&\\alpha\\end{pmatrix}$: אוניטרי?"},
    {id:"Q4",chapter:"א",topic:"cyclic_subspace",type:"mixed",points:25,summary:"$\\dim Z(T,Tv)\\in\\{k,k-1\\}$; בסיס אורתונורמלי ל-$\\mathbb{R}[X]_{\\leq2}$"},
  ]},
  { code:"2019w_א_I", year:2019, moed:"א", semester:"winter", questions:[
    {id:"Q1",chapter:"ג",topic:"spectral_theorem_real",type:"mixed",points:25,summary:"$A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי; $\\mathrm{Im}\\,p(f)=\\ker q(f)$"},
    {id:"Q4",chapter:"ג",topic:"primary_decomposition",type:"mixed",points:25,summary:"$g,f$ מתחלפים ⟹ $V_\\lambda(f)$ $g$-אינווריאנטי; $A$ אוניטרית: לכסון"},
  ]},
  { code:"2019w_ב_I", year:2019, moed:"ב", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"minimal_polynomial",type:"mixed",points:25,summary:"$\\lambda$ ע\"ע ⟺ שורש $m_T$; $A$ לכסינה אורתוגונלית? אוניטרית?"},
    {id:"Q3",chapter:"ג",topic:"primary_decomposition",type:"mixed",points:25,summary:"$V=\\ker p(f)\\oplus\\ker q(f)$; נורמה ומרחק ב-$M_2(\\mathbb{R})$"},
    {id:"Q5",chapter:"ג",topic:"self_adjoint",type:"mixed",points:25,summary:"$f$ הרמיטי ⟹ ע\"ע ב-$\\mathbb{R}$; שרשראות ל-$f^2$"},
  ]},
  { code:"2019_א_I", year:2019, moed:"א", semester:"summer", questions:[
    {id:"Q1",chapter:"ג",topic:"cauchy_schwarz",type:"mixed",points:25,summary:"קושי-שוורץ + תנאי שוויון; $A,B\\in M_4$: האם דומות?"},
    {id:"Q3",chapter:"א",topic:"primary_decomposition",type:"mixed",points:25,summary:"$V=\\ker Q(T)\\oplus\\ker R(T)$ עם $\\gcd(Q,R)=1$"},
    {id:"Q4",chapter:"א",topic:"minimal_polynomial",type:"mixed",points:25,summary:"הגדרת $m_T$ + הוכחה; גרם-שמידט ב-$\\mathbb{R}^4$ + השלמה"},
  ]},
  { code:"2019_ב_I", year:2019, moed:"ב", semester:"summer", questions:[
    {id:"Q1",chapter:"ג",topic:"triangle_inequality",type:"mixed",points:25,summary:"אי-שוויון משולש + שוויון; $A,B$ עם $\\chi,m$,ריבוי גאומטרי שווה — לא דומות"},
    {id:"Q2",chapter:"ג",topic:"self_adjoint",type:"mixed",points:25,summary:"ע\"ע $T^*=T$ ממשיים; ו\"ע שונים ⊥; $A,B$ חופפות?"},
    {id:"Q4",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"$\\|v-v_W\\|\\leq\\|v-w\\|$; שארית $P/S$ — לינארית?"},
  ]},
  { code:"2020_א_I", year:2020, moed:"א", semester:"winter", questions:[
    {id:"Q2",chapter:"א",topic:"eigenvalue_definition",type:"mixed",points:25,summary:"$T:\\mathbb{R}^2$, $\\lambda\\neq\\mu$ ⟹ $v\\in V_\\mu$ או $(T-\\mu I)v\\in V_\\lambda$; גרם-שמידט ב-$\\mathbb{C}^3$"},
    {id:"Q4",chapter:"ג",topic:"normal_operator",type:"mixed",points:25,summary:"$T$ נורמלי ונילפוטנטי ⟹ $T=0$; $M=uu^t$: $\\ker M=\\{u\\}^\\perp$, פ\"א"},
    {id:"Q5",chapter:"ג",topic:"self_adjoint",type:"mixed",points:25,summary:"$T$ צמוד: ע\"ע ממשיים; ו\"ע שונים ⊥"},
  ]},
  { code:"2021w_ב_I", year:2021, moed:"ב", semester:"winter", questions:[
    {id:"Q4",chapter:"א",topic:"minimal_polynomial",type:"proof_short",points:17,summary:"$f_T(T)=0$ ⟹ $f_T$ הפ\"מ"},
    {id:"Q5",chapter:"א",topic:"primary_decomposition",type:"proof_short",points:17,summary:"$V_\\lambda$ שונים ⟹ סכום ישר"},
    {id:"Q6",chapter:"ג",topic:"spectral_theorem_real",type:"proof_short",points:17,summary:"$T$ צמוד לעצמו ⟹ בסיס אורתונורמלי של ו\"ע"},
    {id:"Q7",chapter:"ג",topic:"unitary_operator",type:"proof_short",points:17,summary:"ע\"ע אוניטרי $|\\lambda|=1$; ו\"ע שונים ⊥"},
  ]},
  { code:"2021_א_I", year:2021, moed:"א", semester:"summer", questions:[
    {id:"Q1",chapter:"ב",topic:"nilpotent_basic",type:"mixed",points:25,summary:"$T$ נילפוטנטי ⟺ משולש עליון עם 0; $A\\in M_3$: לכסון אורתוגונלי"},
    {id:"Q3",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"$R_U=2P_U-\\mathrm{Id}$ אורתוגונלי; קושי-שוורץ משוקלל"},
    {id:"Q4",chapter:"ג",topic:"self_adjoint",type:"mixed",points:25,summary:"$\\ker(I+AA^*)=\\{0\\}$; $A,B\\in M_7$ עם אותם $m_T$ — לא דומות"},
  ]},
  { code:"2021_ב_I", year:2021, moed:"ב", semester:"summer", questions:[
    {id:"Q1",chapter:"א",topic:"diagonalization",type:"mixed",points:25,summary:"$A^n=I$ ⟹ $\\lambda^n=1$ ⟹ $A$ לכסינה; $f:\\mathbb{R}^2$ אורתוגונלי+צמוד ⟺ $\\pm\\mathrm{Id}$ או $\\det=-1$"},
    {id:"Q3",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"$W\\subseteq U$ ⟹ $P_W\\circ P_U=P_W$; $|\\sum x_ix_{i+1}|\\leq\\sum x_i^2$"},
    {id:"Q4",chapter:"ב",topic:"matrix_similarity",type:"mixed",points:25,summary:"$T$ אורתוגונלי ⟺ $[T]_C$ אורתוגונלית; ספירת ז'ורדנים ב-$M_6$"},
  ]},
  { code:"2022w_א_I", year:2022, moed:"א", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"minimal_polynomial_vec",type:"mixed",points:16,summary:"$\\min_{e_1}(T)$; בסיס ז'ורדן; ת\"מ מקסימלי לכסין"},
    {id:"Q5",chapter:"ג",topic:"spectral_theorem_real",type:"proof_short",points:14,summary:"$A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו\"ע"},
    {id:"Q8",chapter:"ב",topic:"nilpotent_basic",type:"proof_short",points:14,summary:"$f^hv=0$, $f^{h-1}v\\neq0$ ⟹ $(v,fv,\\ldots,f^{h-1}v)$ בת\"ל"},
    {id:"Q9",chapter:"א",topic:"primary_decomposition",type:"proof_short",points:14,summary:"$\\lambda$ ע\"ע ⟹ $(T-\\lambda)|\\chi_T$"},
  ]},
  { code:"2022w_ב_I", year:2022, moed:"ב", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"minimal_polynomial_vec",type:"mixed",points:16,summary:"$\\min_{e_1}(T)$; בסיס ז'ורדן; ת\"מ ציקלי מקסימלי"},
    {id:"Q7",chapter:"ג",topic:"orthogonal_complement",type:"definition_apply",points:14,summary:"הגדירו $W^\\perp$; $V=W\\oplus W^\\perp$"},
    {id:"Q9",chapter:"א",topic:"char_polynomial",type:"proof_short",points:14,summary:"$\\lambda$ ע\"ע ⟺ $(T-\\lambda)|\\chi_T$ בממ\"ד 2"},
  ]},
  { code:"2022_א_I", year:2022, moed:"א", semester:"summer", questions:[
    {id:"Q1",chapter:"ג",topic:"self_adjoint",type:"mixed",points:25,summary:"$A$ אנטי-סימטרית ⟹ ע\"ע מדומה; $A\\in M_2$ לא לכסינה עם ו\"ע $\\binom{1}{1}$"},
    {id:"Q4",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"$\\|v\\|^2\\geq\\|v_U\\|^2+\\|v_W\\|^2$; אי-שוויון על $x+y+z=1$"},
    {id:"Q5",chapter:"ב",topic:"primary_decomposition",type:"mixed",points:25,summary:"ת\"מ אינווריאנטי + ו\"ע נפרדים; ספירת ז'ורדנים ב-$M_7$"},
  ]},
  { code:"2022_ב_I", year:2022, moed:"ב", semester:"summer", questions:[
    {id:"Q1",chapter:"א",topic:"matrix_similarity",type:"mixed",points:25,summary:"$A$ דומה ל-$A^*$; קיום $a$: לכסינה אוניטרית"},
    {id:"Q3",chapter:"ג",topic:"diagonalization",type:"mixed",points:25,summary:"$f^2=-\\mathrm{Id}$ ⟹ ע\"ע $\\pm i$ ולכסינות; בסיס אורתוגונלי עם נורמה לא-סטנ'"},
    {id:"Q4",chapter:"ג",topic:"orthogonal_projection",type:"mixed",points:25,summary:"$d(u_W,v_W)\\leq d(u,v)$; אי-שוויון $2n$ + שוויון"},
  ]},
  { code:"2023w_א_I", year:2023, moed:"א", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"minimal_polynomial_vec",type:"mixed",points:16,summary:"$\\min_{e_1}(T)$; בסיס ז'ורדן; ת\"מ מקסימלי לכסין"},
    {id:"Q2",chapter:"ג",topic:"unitary_diagonalization",type:"mixed",points:14,summary:"$A=\\begin{pmatrix}&i\\\\i&\\end{pmatrix}$: $U^*AU=D$; $A^{203}$"},
    {id:"Q7",chapter:"א",topic:"primary_decomposition",type:"proof_short",points:14,summary:"$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$"},
    {id:"Q8",chapter:"א",topic:"minimal_polynomial",type:"proof_short",points:14,summary:"$\\lambda$ ע\"ע ⟺ שורש $m_T$"},
  ]},
  { code:"2023w_ב_I", year:2023, moed:"ב", semester:"winter", questions:[
    {id:"Q1",chapter:"ב",topic:"jordan_form",type:"mixed",points:16,summary:"$A\\in M_3(\\mathbb{R})$: $J$ ז'ורדן, $P$ הפיכה, וקטור ציקלי"},
    {id:"Q2",chapter:"ג",topic:"spectral_theorem_real",type:"mixed",points:14,summary:"$A\\in M_2(\\mathbb{R})$: $O$ אורתוגונלית; $A^{2023}\\binom{-2}{1}$"},
    {id:"Q5",chapter:"ג",topic:"spectral_theorem_complex",type:"proof_short",points:14,summary:"$f$ אוניטרי על ממ\"ד 2 ⟹ בסיס אורתונורמלי שמלכסן"},
    {id:"Q8",chapter:"א",topic:"minimal_polynomial",type:"proof_short",points:14,summary:"$T$ לכסין ⟺ $m_T=(T-\\lambda)(T-\\delta)$ עם $\\lambda\\neq\\delta$"},
  ]},
  { code:"2024_ב_I", year:2024, moed:"ב", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"diagonalization",type:"mixed",points:25,summary:"$A\\in M_5$: $\\mathrm{rank}(I+A)=\\mathrm{rank}(2I-A)=3$, $\\det=20$ ⟹ לכסינה; $T$ אוניטרי ⟺ $[T]_B$ אוניטרית"},
    {id:"Q2",chapter:"א",topic:"primary_decomposition",type:"mixed",points:25,summary:"$T$ לכסין ⟺ $\\ker T\\cap\\mathrm{Im}\\,T=\\{0\\}$; $B^2=A^tA$"},
    {id:"Q4",chapter:"ג",topic:"orthogonal_operator",type:"mixed",points:25,summary:"ו\"ע לע\"ע שונים בת\"ל; גרם-שמידט עם $\\langle v,u\\rangle=v^t\\begin{pmatrix}2&-3\\\\-3&6\\end{pmatrix}u$"},
    {id:"Q5",chapter:"א",topic:"diagonalization_compute",type:"mixed",points:25,summary:"$A=\\begin{pmatrix}2&1\\\\-6&7\\end{pmatrix}$: $A^{100}$; $\\ker(A)=\\ker(A^*A)$"},
  ]},
  { code:"2025_א_I", year:2025, moed:"א", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"diagonalization",type:"mixed",points:25,summary:"$A(c)\\in M_3(\\mathbb{F})$: $c$ עבורם לכסינה; $A$ נורמלית + ע\"ע ב-$\\mathbb{R}$ ⟺ הרמיטית"},
    {id:"Q3",chapter:"א",topic:"matrix_similarity",type:"mixed",points:25,summary:"$A,B\\in M_2(\\mathbb{C})$: $a,b$ עבורם דומות; $16/(a+b+c+d)\\leq 1/a+1/b+1/c+1/d$"},
    {id:"Q4",chapter:"ב",topic:"jordan_form",type:"mixed",points:25,summary:"צורת ז'ורדן ל-$A\\in M_5$ עם $A=2I+N$; $A$ סימטרית ⟹ $\\exists B$ סימטרית: $B^3=A$"},
    {id:"Q5",chapter:"א",topic:"matrix_similarity",type:"mixed",points:25,summary:"$A\\in M_3(\\mathbb{C})$ דומה ל-$A^t$; $\\|v\\|=\\|u\\|$ ⟺ $u+v\\perp u-v$ (ממשי/מרוכב)"},
  ]},
  { code:"2026_ב_I", year:2025, moed:"ב", semester:"winter", questions:[
    {id:"Q1",chapter:"א",topic:"trace_basics",type:"mixed",points:25,summary:"$A\\in M_6(\\mathbb{Q})$: $\\mathrm{rk}=2$, $X^2-2X-15|P_A$ ⟹ $\\mathrm{tr}(A^2)$; $T$ אורתוגונלי+צמוד, $\\det=1$, ממ\"ד אי-זוגי ⟹ $v\\neq0$: $Tv=v$"},
    {id:"Q2",chapter:"א",topic:"diagonalization_compute",type:"mixed",points:25,summary:"ו\"ע של אופ' $(ax+by+bz,bx+ay+bz,bx+by+az)$; $(U+W)^\\perp=U^\\perp\\cap W^\\perp$"},
    {id:"Q3",chapter:"א",topic:"cayley_hamilton",type:"mixed",points:25,summary:"$A^{-1}=Q(A)$; $f(x_1,\\ldots)=(\\sum\\sqrt{k}x_k)^2/\\sum x_k^2\\leq 15$ — עבור אילו $n$"},
    {id:"Q5",chapter:"א",topic:"diagonalization",type:"mixed",points:25,summary:"$A^2=I$, ע\"ע יחיד $1$ ⟹ $A=I$; $P_W(\\begin{pmatrix}1&2\\\\0&0\\end{pmatrix})$ ב-$M_2(\\mathbb{R})$"},
  ]},
];

// ─── FREQUENCY COMPUTATION ────────────────────────────────────────────────────
function computeFreq(exams, fromYear = 0) {
  const freq = {};
  for (const e of exams) {
    if (e.year < fromYear) continue;
    for (const q of e.questions) {
      if (!EXCLUDED.has(q.topic)) freq[q.topic] = (freq[q.topic]||0)+1;
    }
  }
  return freq;
}

function computeYearTopics(exams, fromYear = 2016) {
  const byYear = {};
  for (const e of exams) {
    if (e.year < fromYear) continue;
    if (!byYear[e.year]) byYear[e.year] = {};
    for (const q of e.questions) {
      if (!EXCLUDED.has(q.topic)) {
        byYear[e.year][q.topic] = (byYear[e.year][q.topic]||0)+1;
      }
    }
  }
  return byYear;
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = {
  app: {
    background: "#0c0f14",
    color: "#d4cfc7",
    minHeight: "100vh",
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    direction: "rtl",
    fontSize: 13,
  },
  topBar: {
    background: "#111520",
    borderBottom: "1px solid #1e2530",
    padding: "14px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#e8e4dc",
    letterSpacing: "-0.3px",
  },
  badge: (color) => ({
    fontSize: 11,
    padding: "2px 8px",
    borderRadius: 3,
    background: color + "22",
    color,
    border: `1px solid ${color}55`,
    fontWeight: 600,
    marginLeft: 6,
  }),
  tabs: {
    display: "flex",
    gap: 0,
    borderBottom: "1px solid #1e2530",
    background: "#0e1118",
    padding: "0 20px",
  },
  tab: (active) => ({
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.5px",
    color: active ? "#e8e4dc" : "#5a6070",
    borderBottom: active ? "2px solid #4a90d9" : "2px solid transparent",
    background: "none",
    border: "none",
    borderBottom: active ? "2px solid #4a90d9" : "2px solid transparent",
    transition: "color 0.15s",
  }),
  main: { padding: "24px 28px" },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#5a6070",
    marginBottom: 16,
  },
  card: {
    background: "#111520",
    border: "1px solid #1e2530",
    borderRadius: 6,
    padding: 20,
    marginBottom: 16,
  },
  bar: (pct, color) => ({
    height: 14,
    width: `${Math.min(pct, 100)}%`,
    background: color,
    borderRadius: 2,
    transition: "width 0.5s ease",
    minWidth: 2,
  }),
  barRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
    cursor: "pointer",
  },
  topicLabel: {
    width: 220,
    fontSize: 11,
    color: "#a0a8b0",
    textAlign: "right",
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  barBg: {
    flex: 1,
    background: "#1a1f2a",
    borderRadius: 2,
    height: 14,
    overflow: "hidden",
  },
  countLabel: {
    width: 28,
    fontSize: 11,
    textAlign: "left",
    color: "#606878",
    flexShrink: 0,
  },
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function TopBar() {
  const years = [...new Set(EXAMS.map(e => e.year))];
  const totalQ = EXAMS.reduce((s,e) => s+e.questions.length, 0);
  return (
    <div style={S.topBar}>
      <div>
        <div style={S.courseTitle}>אלגברה לינארית 2 — 80135</div>
        <div style={{fontSize:11,color:"#5a6070",marginTop:3}}>האוניברסיטה העברית בירושלים · ד"ר שי אברה</div>
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"flex-end"}}>
        <span style={S.badge("#4a90d9")}>{EXAMS.length} מבחנים</span>
        <span style={S.badge("#5ab87a")}>{totalQ} שאלות</span>
        <span style={S.badge("#e07b4a")}>{years[0]}–{years[years.length-1]}</span>
      </div>
    </div>
  );
}

function FrequencyView() {
  const [filter, setFilter] = useState("all");
  const freq = useMemo(() => computeFreq(EXAMS, filter === "recent" ? 2016 : 0), [filter]);
  const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,20);
  const max = sorted[0]?.[1] || 1;

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
        <div style={S.sectionTitle}>תדירות נושאים — TOP 20</div>
        <div style={{display:"flex",gap:6}}>
          {[["all","כל השנים"],["recent","2016 ואילך"]].map(([v,l]) => (
            <button key={v} onClick={()=>setFilter(v)} style={{
              padding:"4px 12px", fontSize:11, cursor:"pointer",
              background: filter===v ? "#1e2a3a" : "none",
              color: filter===v ? "#4a90d9" : "#5a6070",
              border: `1px solid ${filter===v?"#4a90d9":"#2a3040"}`,
              borderRadius:3,
            }}>{l}</button>
          ))}
        </div>
      </div>
      <div style={S.card}>
        {sorted.map(([topic, count]) => {
          const ch = TOPIC_CHAPTER[topic] || "ג";
          const color = CH_COLOR[ch];
          const label = TOPIC_HE[topic] || topic;
          return (
            <div key={topic} style={S.barRow}>
              <div style={S.topicLabel} title={label}>{label}</div>
              <div style={S.barBg}>
                <div style={S.bar(count/max*100, color)} />
              </div>
              <div style={S.countLabel}>{count}</div>
              <div style={{...S.badge(color),marginLeft:0,marginRight:0,fontSize:10}}>{ch}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TrendsView() {
  const [selectedTopics, setSelectedTopics] = useState(
    new Set(["jordan_form","spectral_theorem_real","primary_decomposition","cauchy_schwarz","self_adjoint"])
  );
  const byYear = useMemo(() => computeYearTopics(EXAMS, 2016), []);
  const years = Object.keys(byYear).map(Number).sort();

  const TOP_TOPICS = [
    "self_adjoint","spectral_theorem_real","jordan_form","orthogonal_projection",
    "primary_decomposition","matrix_similarity","orthogonal_operator","gram_schmidt",
    "cauchy_schwarz","char_polynomial","nilpotent_basic","minimal_polynomial_vec",
    "diagonalization","cyclic_subspace","minimal_polynomial",
  ];

  const toggleTopic = (t) => {
    const next = new Set(selectedTopics);
    if (next.has(t)) { if (next.size > 1) next.delete(t); }
    else next.add(t);
    setSelectedTopics(next);
  };

  const W = 520, H = 160, PL = 16, PR = 12, PT = 12, PB = 28;
  const IW = W - PL - PR;
  const IH = H - PT - PB;
  const maxVal = 5;

  const colors = ["#4a90d9","#5ab87a","#e07b4a","#c08be0","#f0c060","#60cad4","#e06080","#a0d070","#d09060","#7090e0","#e0a060","#60b080","#b060d0","#80d0b0","#e08060"];

  return (
    <div>
      <div style={S.sectionTitle}>מגמות לפי שנה (2016 ואילך)</div>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:12}}>
        {TOP_TOPICS.map((t, i) => {
          const active = selectedTopics.has(t);
          return (
            <button key={t} onClick={()=>toggleTopic(t)} style={{
              padding:"3px 10px", fontSize:10, cursor:"pointer",
              background: active ? colors[i%colors.length]+"22" : "none",
              color: active ? colors[i%colors.length] : "#404856",
              border: `1px solid ${active ? colors[i%colors.length]+"66" : "#2a3040"}`,
              borderRadius:3,
            }}>{TOPIC_HE[t]||t}</button>
          );
        })}
      </div>
      <div style={{...S.card, overflowX:"auto"}}>
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{display:"block"}}>
          {/* Grid */}
          {[0,1,2,3,4,5].map(v => (
            <g key={v}>
              <line x1={PL} y1={PT+IH-v/maxVal*IH} x2={W-PR} y2={PT+IH-v/maxVal*IH} stroke="#1e2530" strokeWidth={0.5}/>
              <text x={PL-4} y={PT+IH-v/maxVal*IH+4} fontSize={8} fill="#404856" textAnchor="end">{v}</text>
            </g>
          ))}
          {/* Year labels */}
          {years.map((yr, i) => {
            const x = PL + (i/(years.length-1))*IW;
            return <text key={yr} x={x} y={H-8} fontSize={9} fill="#404856" textAnchor="middle">{yr}</text>;
          })}
          {/* Lines */}
          {[...selectedTopics].map((topic, ti) => {
            const color = colors[TOP_TOPICS.indexOf(topic)%colors.length] || "#4a90d9";
            const points = years.map((yr,i) => {
              const v = byYear[yr]?.[topic] || 0;
              const x = PL + (i/(years.length-1))*IW;
              const y = PT + IH - (v/maxVal)*IH;
              return `${x},${y}`;
            });
            return (
              <g key={topic}>
                <polyline points={points.join(" ")} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" opacity={0.85}/>
                {years.map((yr,i) => {
                  const v = byYear[yr]?.[topic] || 0;
                  const x = PL + (i/(years.length-1))*IW;
                  const y = PT + IH - (v/maxVal)*IH;
                  return v > 0 ? <circle key={yr} cx={x} cy={y} r={3} fill={color} opacity={0.9}/> : null;
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function ExamBrowser() {
  const [yearFilter, setYearFilter] = useState("all");
  const [semFilter, setSemFilter] = useState("all");
  const [selectedExam, setSelectedExam] = useState(null);

  const years = [...new Set(EXAMS.map(e=>e.year))].sort((a,b)=>b-a);

  const filtered = EXAMS.filter(e => {
    if (yearFilter !== "all" && e.year !== Number(yearFilter)) return false;
    if (semFilter !== "all" && e.semester !== semFilter) return false;
    return true;
  }).sort((a,b) => b.year - a.year || (a.moed < b.moed ? -1 : 1));

  const exam = selectedExam ? EXAMS.find(e => e.code === selectedExam) : null;

  return (
    <div style={{display:"flex",gap:20}}>
      {/* List */}
      <div style={{width:220,flexShrink:0}}>
        <div style={S.sectionTitle}>מבחנים</div>
        <div style={{display:"flex",gap:4,marginBottom:10,flexWrap:"wrap"}}>
          <select value={yearFilter} onChange={e=>setYearFilter(e.target.value)} style={{
            background:"#111520",border:"1px solid #1e2530",color:"#a0a8b0",fontSize:10,padding:"2px 4px",borderRadius:3,flex:1,
          }}>
            <option value="all">כל השנים</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select value={semFilter} onChange={e=>setSemFilter(e.target.value)} style={{
            background:"#111520",border:"1px solid #1e2530",color:"#a0a8b0",fontSize:10,padding:"2px 4px",borderRadius:3,flex:1,
          }}>
            <option value="all">הכל</option>
            <option value="winter">חורף</option>
            <option value="summer">קיץ</option>
          </select>
        </div>
        <div style={{maxHeight:520,overflowY:"auto"}}>
          {filtered.map(e => (
            <div key={e.code} onClick={()=>setSelectedExam(e.code === selectedExam ? null : e.code)}
              style={{
                padding:"7px 10px",cursor:"pointer",borderRadius:4,marginBottom:3,
                background: selectedExam === e.code ? "#1a2535" : "none",
                border: `1px solid ${selectedExam===e.code ? "#2a3d55" : "transparent"}`,
                transition:"background 0.1s",
              }}>
              <div style={{fontSize:12,fontWeight:600,color:"#c8d0d8"}}>{e.year} מועד {e.moed}</div>
              <div style={{fontSize:10,color:"#404856",marginTop:1}}>
                {e.semester==="winter"?"חורף":"קיץ"} · {e.questions.length} שאלות
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div style={{flex:1}}>
        {exam ? (
          <>
            <div style={S.sectionTitle}>{exam.year} מועד {exam.moed} — {exam.semester==="winter"?"חורף":"קיץ"}</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {exam.questions.map(q => {
                const ch = q.chapter;
                const color = CH_COLOR[ch];
                return (
                  <div key={q.id} style={{
                    ...S.card, padding:"12px 16px", marginBottom:0,
                    borderLeft: `3px solid ${color}`,
                    display:"flex",gap:14,alignItems:"flex-start",
                  }}>
                    <div style={{width:34,flexShrink:0}}>
                      <div style={{fontSize:10,color:color,fontWeight:700}}>{q.id}</div>
                      <div style={{fontSize:9,color:"#404856",marginTop:2}}>{q.points}נ'</div>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:11,color:"#a0a8b0",marginBottom:3,lineHeight:1.5}}>{q.summary}</div>
                      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                        <span style={{...S.badge(color),fontSize:9}}>פרק {ch}</span>
                        <span style={{...S.badge("#606878"),fontSize:9}}>{TOPIC_HE[q.topic]||q.topic}</span>
                        <span style={{...S.badge("#404856"),fontSize:9}}>{q.type}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div style={{...S.card,padding:40,textAlign:"center",color:"#404856",fontSize:12}}>
            בחרו מבחן מהרשימה
          </div>
        )}
      </div>
    </div>
  );
}

function TrapsView() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      <div style={S.sectionTitle}>מלכודות חוזרות — 7 נושאים שמופיעים בכל שנה</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {TRAPS.map((trap, i) => (
          <div key={i} onClick={()=>setOpen(open===i?null:i)} style={{
            ...S.card,
            cursor:"pointer",
            borderLeft:`3px solid ${["#4a90d9","#5ab87a","#e07b4a","#c08be0","#f0c060","#60cad4","#e06080"][i]}`,
            padding:"12px 16px",
            transition:"background 0.15s",
            background: open===i ? "#161c28" : "#111520",
          }}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:12,color:"#c8d0d8",lineHeight:1.6,flex:1}}>{trap.t}</div>
              <div style={{color:"#5a6070",fontSize:14,marginRight:12,flexShrink:0}}>{open===i?"▲":"▼"}</div>
            </div>
            {open===i && (
              <div style={{marginTop:10,borderTop:"1px solid #1e2530",paddingTop:10}}>
                <div style={{fontSize:11,color:"#7a8898",lineHeight:1.7}}>{trap.n}</div>
                <div style={{marginTop:8,display:"flex",gap:4,flexWrap:"wrap"}}>
                  {trap.years.map(y => <span key={y} style={S.badge("#4a90d9")}>{y}</span>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("freq");
  const tabs = [
    ["freq", "תדירות נושאים"],
    ["trends", "מגמות"],
    ["browser", "דפדפן מבחנים"],
    ["traps", "מלכודות"],
  ];

  return (
    <div style={S.app}>
      <TopBar />
      <div style={S.tabs}>
        {tabs.map(([id, label]) => (
          <button key={id} onClick={()=>setTab(id)} style={S.tab(tab===id)}>{label}</button>
        ))}
      </div>
      <div style={S.main}>
        {tab === "freq" && <FrequencyView />}
        {tab === "trends" && <TrendsView />}
        {tab === "browser" && <ExamBrowser />}
        {tab === "traps" && <TrapsView />}
      </div>
    </div>
  );
}

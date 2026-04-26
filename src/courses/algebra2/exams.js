export const EXAMS = [
  // ════════════════════════════════════════════════════════════════
  //  תש"ע  2010  (סמסטר ב')
  // ════════════════════════════════════════════════════════════════
  {
    code: "2010_א_I",
    year: 2010,
    moed: "א",
    date: "07.07.10",
    chapter_structure: "40/20/40",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "אמת/שקר",
        topic: "nilpotent",
        summary:
          'סכום שתי ט"ל נילפוטנטיות מתחלפות הוא נילפוטנטי; מטריצות נילפוטנטיות דומות אמ"מ מאותו סדר נילפוטנטיות',
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "char_polynomial",
        summary:
          'סכום הע"ע של $AB$ שווה לסכום הע"ע של $BA$; תת-מרחבים $V_1,V_2,V_3$: $\\dim(V_1+V_2+V_3)\\leq3$',
      },
      {
        id: "א3",
        chapter: "א",
        type: "אמת/שקר",
        topic: "polynomial_operator",
        summary:
          "$A$ רגולרית ⟹ $A$ צירוף לינארי של $I,A,\\ldots,A^{n-1}$ (Cayley-Hamilton)",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "נסחו והוכיחו את אי-שוויון קושי-שוורץ",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          "הוכיחו: $T$ נורמלית ↔ קיים בסיס אורתונורמלי שביחס אליו $T$ מיוצגת אלכסונית",
      },
      {
        id: "א4",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary:
          'הוכיחו: $A$ דומה למשולשת עליונה אמ"מ הפולינום האופייני מתפרק לגורמים לינאריים',
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          '$T,S$ הרמיטיות עם ע"ע ב-$[a,b]$ וב-$[c,d]$ ⟹ ע"ע $T+S$ ב-$[a+c,b+d]$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "inner_product",
        summary:
          'משפט רייס: $l$ פונקציונל לינארי על מ"מ פנימית ⟹ $\\exists!u: l(v)=\\langle u,v\\rangle$',
      },
    ],
  },
  {
    code: "2010_ב_I",
    year: 2010,
    moed: "ב",
    date: "2010",
    chapter_structure: "40/20/40",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "אמת/שקר",
        topic: "invariant_subspace",
        summary:
          "$P^2=P$ ⟹ $V=\\ker P\\oplus\\mathrm{Im}\\,P$; $T,S$ נורמליות ⟹ $TS$ נורמלית",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "nilpotent",
        summary:
          "$A\\in M_n(\\mathbb{C})$ נילפוטנטית ⟹ קיימת מ' נילפוטנטית מאותו סדר",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "inner_product",
        summary:
          "משפט רייס: $l$ פונקציונל לינארי ⟹ $\\exists!u: l(v)=\\langle u,v\\rangle$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary: "הוכיחו: $T$ נורמלית ↔ לכסינה בבסיס אורתונורמלי",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_operator",
        summary:
          "$A\\in M_3(\\mathbb{R})$ אורתוגונלית, $\\det A=1$ ⟹ קיים $v\\neq0$: $Av=v$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "חישוב",
        topic: "cyclic_subspace",
        summary:
          "$T:V\\to V$ לא סקלרית, $\\mathrm{tr}(T)=\\lambda$ → מצאו וקטור מתאים; בסיס שביחס אליו $T$ משולשת",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "gram_schmidt",
        summary:
          'הוכיחו את משפט גרם-שמידט; כל מ"מ פנימית ממ"ס יש לה בסיס אורתונורמלי',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"א  2011  (3 מועדים)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2011_א_I",
    year: 2011,
    moed: "א",
    date: "16.06.11",
    chapter_structure: "40/20/40",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'ו"ע השייכים לע"ע שונים הם בת"ל; $n$ ע"ע שונים ⟹ $T$ לכסינה',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "הוכיחו קושי-שוורץ ואי-שוויון המשולש",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "gram_schmidt",
        summary: 'הוכיחו: לכל מ"מ פנימית ממ"ס קיים בסיס אורתונורמלי',
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary: "הוכיחו: $T$ נורמלית ↔ לכסינה בבסיס אורתונורמלי",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "חישוב",
        topic: "spectral_theorem",
        summary:
          "לכסנו אורתוגונלית $A\\in M_4(\\mathbb{R})$ סימטרית; חשבו $A^{10}$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו פולינום אופייני, ע\"ע ולכסינות של $T:C[x]/(p(x))\\to C[x]/(p(x))$; צורת ז'ורדן",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary:
          "הטלה אורתוגונלית על מישור $U\\subset\\mathbb{R}^3$: מטריצה, ע\"ע, לכסינות, ז'ורדן",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "self_adjoint",
        summary: 'כל ע"ע ממשי ⟹ $T=T^*$? $P^2=P$ ⟹ $P$ הטלה אורתוגונלית?',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "אמת/שקר",
        topic: "nilpotent",
        summary:
          "כמה מ' נילפוטנטיות $3\\times3$ אי-דומות קיימות? $V=\\ker P\\oplus\\mathrm{Im}\\,P$?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "unitary_operator",
        summary: "$T$ אוניטרית ⟹ $|(Tv,v)|\\leq1$?",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "invariant_subspace",
        summary: "$S,T$ מתחלפות ⟹ $\\ker S$ הוא $T$-אינווריאנטי?",
      },
    ],
  },
  {
    code: "2011_ב_I",
    year: 2011,
    moed: "ב",
    date: "19.07.11",
    chapter_structure: "40/20/40",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "הוכיחו קושי-שוורץ ואי-שוויון המשולש",
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'ו"ע השייכים לע"ע שונים הם בת"ל; $n$ ע"ע שונים ⟹ $T$ לכסינה',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "inner_product",
        summary:
          "משפט רייס: $\\exists!u: l(v)=\\langle u,v\\rangle$; $(TS)^*=S^*T^*$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "normal_operator",
        summary:
          "$T$ נורמלית, $T|_W=0$ ⟹ $T=0$; כל מ' מעל $\\mathbb{C}$ דומה למשולשת",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "חישוב",
        topic: "spectral_theorem",
        summary: "לכסנו אורתוגונלית $A\\in M_3(\\mathbb{R})$; חשבו $A^{23}$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "$T(A)=A^t$ על $M_2(\\mathbb{R})$: פולינום אופייני, ע\"ע, צורת ז'ורדן",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו $J$ בצורת ז'ורדן ו-$P$ הפיכה עבור מטריצה $5\\times5$ נילפוטנטית נתונה",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "אמת/שקר",
        topic: "nilpotent",
        summary:
          "$A,B$ נילפוטנטיות $\\Rightarrow$ $A$ דומה ל-$B$? $A$ נילפוטנטית דומה ל-$A^t$?",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "char_polynomial",
        summary:
          'סכום ע"ע של $A$, מכפלה ע"ע — חשבו $\\sum\\lambda_i^2$ מטרייס נתוני',
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "self_adjoint",
        summary:
          'ו"ע של $T$ צמוד לעצמו לע"ע שונים הם ⊥; $T^2=0, T\\neq0$ ⟹ לא נורמלית',
      },
    ],
  },
  {
    code: "2011_ג_I",
    year: 2011,
    moed: "ג",
    date: "2011",
    chapter_structure: "40/20/40",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "invariant_subspace",
        summary: "הוכיחו: כל מ' ריבועית מעל $\\mathbb{C}$ דומה למשולשת עליונה",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary: 'הוכיחו: $T^*$ קיים ויחיד; $T$ צמוד לעצמו ⟹ כל ע"ע ממשי',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary:
          "הוכיחו: $T$ לכסינה ↔ $V=\\bigoplus V_{\\lambda_i}$ (סכום ישר של מ' עצמיים)",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "unitary_operator",
        summary: "לכסנו אוניטרית $A\\in M_3(\\mathbb{C})$; חשבו $A^{452}$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "הוכיחו שארבע מ' נתונות $4\\times4$ אינן דומות זו לזו",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary:
          "מכפלה פנימית $\\langle A,B\\rangle=\\mathrm{tr}(A^tB)$ על $M_2(\\mathbb{R})$; גרם-שמידט על בסיס נתון",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "orthogonal_operator",
        summary:
          '$T:R^5\\to R^5$ אורתוגונלית ⟹ קיים $v\\neq0$: $Tv=v$ (ממ"ד אי-זוגי)',
      },
      {
        id: "א3",
        chapter: "א",
        type: "אמת/שקר",
        topic: "diagonalization",
        summary:
          "$T^2=T$ ⟹ $T$ לכסינה? $T,S$ מתחלפות, $W$ $T$-אינווריאנטי ⟹ גם $S$-אינווריאנטי?",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ב  2012  (2 מועדים)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2012_א_I",
    year: 2012,
    moed: "א",
    date: "18.07.12",
    chapter_structure: "35/20/45",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_complement",
        summary: "הוכיחו: $V=W\\oplus W^\\perp$; $(W^\\perp)^\\perp=W$",
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary:
          'הגדירו $m_T$; הוכיחו: $m_T|q \\Leftrightarrow q(T)=0$; $\\lambda$ ע"ע ↔ שורש $m_T$',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "unitary_operator",
        summary:
          "חשבו $p_A, m_A$; מצאו $D,U$ אוניטרית: $U^*AU=D$ עבור $A\\in M_4(\\mathbb{C})$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "orthogonal_projection",
        summary:
          'מ"מ פנימית $\\mathbb{R}^3$; מצאו בסיס אורתונורמלי ל-$U$ ו-$U^\\perp$; הטלה ומרחק',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו $p_A, m_A$ ואת צורת ז'ורדן של מ' נילפוטנטית $5\\times5$ נתונה",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "spectral_theorem",
        summary:
          'בסיס ו"ע קיים ⟹ בסיס אורתונורמלי ו"ע קיים? $A$ סימטרית, $A^n=I$ ⟹ $A=I$?',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "אמת/שקר",
        topic: "nilpotent",
        summary:
          "$T$ נילפוטנטית, $P(0)=0$ ↔ $P(T)$ נילפוטנטית? כמה נילפוטנטיות $4\\times4$ אי-דומות?",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "invariant_subspace",
        summary:
          '$S,T$ מתחלפות ⟹ $\\ker S$ הוא $T$-אינווריאנטי? $T$ ע"ע יחיד ⟹ $T$ נילפוטנטית?',
      },
    ],
  },
  {
    code: "2012_ב_I",
    year: 2012,
    moed: "ב",
    date: "10.08.12",
    chapter_structure: "35/20/45",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_complement",
        summary: "הוכיחו: $V=W\\oplus W^\\perp$; $(W^\\perp)^\\perp=W$",
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary:
          'הגדירו $m_T$; הוכיחו: $m_T|q \\Leftrightarrow q(T)=0$; $\\lambda$ שורש $m_T$ ↔ ע"ע',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "spectral_theorem",
        summary:
          "$A\\in M_3(\\mathbb{R})$ אנטי-סימטרית ($A^t=-A$): הוכיחו $A$ נורמלית; לכסנו אורתוגונלית",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "matrix_similarity",
        summary:
          "הוכיחו שארבע מ' $4\\times4$ לא דומות זו לזו; מצאו $U,D$ אוניטרית: $U^*AU=D$",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו את צורת ז'ורדן של מ' $5\\times5$ נתונה; מצאו $P$ הפיכה",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "invariant_subspace",
        summary:
          "$S,T$ מתחלפות ⟹ $\\ker S$ $T$-אינווריאנטי? $T$-אינווריאנטי ⟹ $U^\\perp$ $T$-אינווריאנטי?",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "self_adjoint",
        summary: "$T,S$ צמודות ⟹ $TS$ צמודה? $T$ נורמלית, $T^2=0$ ⟹ $T=0$?",
      },
      {
        id: "א3",
        chapter: "א",
        type: "אמת/שקר",
        topic: "diagonalization",
        summary:
          '$T$ ע"ע יחיד $\\lambda=0$ ⟹ $T$ נילפוטנטית? $A$ סימטרית, $A^n=I$ ⟹ $A=I$?',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ג  2013  (מועד ב' בלבד)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2013_ב_I",
    year: 2013,
    moed: "ב",
    date: "02.03.13",
    chapter_structure: "40/25/35",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "eigenvalue_char",
        summary:
          'ו"ע לע"ע שונים הם בת"ל; $A=\\begin{pmatrix}-1&2\\\\2&1\\end{pmatrix}$: האם לכסינה מעל $\\mathbb{R}$?',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "מעורב",
        topic: "jordan_form",
        summary: "מצאו בסיסים למ' עצמיים ומוכללים; מצאו ממ' ציקלי $W$ של $A$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "self_adjoint",
        summary:
          "$V=M_2(\\mathbb{R})$, $\\langle A,B\\rangle=\\mathrm{tr}(A^tB)$; $T(M)=AM$: האם $T$ צמוד לעצמו?",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "invariant_subspace",
        summary: "$T,S$ מתחלפות, $W$ $T$-אינווריאנטי ⟹ גם $S$-אינווריאנטי?",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "self_adjoint",
        summary: 'כל ע"ע של $T$ ממשי ⟹ $T$ צמוד לעצמו? (מעל $\\mathbb{C}$)',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "אמת/שקר",
        topic: "jordan_form",
        summary:
          "$A^4=0$, $A^3\\neq0$ ⟹ לצורת ז'ורדן יש בדיוק 2 בלוקים מגודל 2?",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "gram_schmidt",
        summary:
          "קיימים אינסוף בסיסים אורתונורמליים $(f_1,\\ldots,f_{10})$ של $\\mathbb{R}^{10}$ המקיימים תנאי span?",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ד  2014  (3 מועדים)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2014_א_I",
    year: 2014,
    moed: "א",
    date: "10.07.14",
    chapter_structure: "35/15/50",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'הוכיחו: ו"ע השייכים לע"ע שונים הם בת"ל',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          "הוכיחו: $f$ צמוד לעצמו על מ' אוניטרית ⟹ קיים בסיס אורתונורמלי של ו\"ע",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary:
          'שיקוף אורתוגונלי $r_U$ לאורך $U$: בסיס אורתוגונלי, $U^\\perp$, הטלה, ע"ע',
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "invariant_subspace",
        summary:
          "$W$ $T$-אינווריאנטי ⟹ $\\ker P(T)$ $T$-אינווריאנטי? $f^2(f-1)=0$ ⟹ $f$ לכסין?",
      },
      {
        id: "א3",
        chapter: "א",
        type: "אמת/שקר",
        topic: "polynomial_operator",
        summary:
          'כל $A\\in M_n(F[x])$ היא צירוף לינארי של $A^0,\\ldots,A^{n-1}$? 3 ו"ע ⟹ בסיס משולש?',
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "self_adjoint",
        summary: '$f$ צמוד לעצמו, ו"ע לע"ע שונים ⊥?',
      },
    ],
  },
  {
    code: "2014_ב_I",
    year: 2014,
    moed: "ב",
    date: "31.07.14",
    chapter_structure: "35/25/40",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "cyclic_subspace",
        summary:
          'הוכיחו: $(v,T(v),\\ldots,T^{n-1}(v))$ בת"ל עבור $n$ מינימלי כך שהסדרה תלויה',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "spectral_theorem",
        summary:
          "ע\"ע, לכסון אורתוגונלי, $D,P$ אלכסונית ומ' הפיכה עבור $f$ על $\\mathbb{R}^5$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו $p_A$, ע\"ע מוכללים, צורת ז'ורדן של $A$; מצאו $J,P$: $P^{-1}AP=J$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "אמת/שקר",
        topic: "eigenvalue_char",
        summary: '$\\ker(\\lambda I-f)\\neq\\{0\\}$ ↔ $\\lambda$ ע"ע של $f$?',
      },
      {
        id: "א3",
        chapter: "א",
        type: "אמת/שקר",
        topic: "matrix_similarity",
        summary:
          "$\\det A=\\det B$, $\\mathrm{tr}A=\\mathrm{tr}B$ ⟹ $A,B$ דומות (ב-$M_2(\\mathbb{C})$)?",
      },
      {
        id: "א4",
        chapter: "א",
        type: "אמת/שקר",
        topic: "polynomial_operator",
        summary: "$\\exists g: g^2=f$ עבור $f$ לכסינה? עבור $f$ נילפוטנטית?",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "spectral_theorem",
        summary: '$A$ סימטרית, $(Ax,x)\\geq0$ לכל $x$ ↔ ע"ע של $A$ אי-שליליים?',
      },
    ],
  },
  {
    code: "2014_ג_I",
    year: 2014,
    moed: "ג",
    date: "11.09.14",
    chapter_structure: "30/20/50",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "gram_schmidt",
        summary:
          'הוכיחו: לכל מ\' אוקלידית (מ"מ פנימית ממ"ס מעל $\\mathbb{R}$) יש בסיס אורתונורמלי',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          "$\\langle v,T(w)\\rangle=\\langle T(v),w\\rangle$ הגדרת הצמוד; הוכיחו קיום ויחידות",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary:
          "$V=M_2(\\mathbb{R})$, $\\langle A,B\\rangle=\\mathrm{tr}(A^tB)$; גרם-שמידט, בסיס אורתונורמלי, הטלה",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "מעורב",
        topic: "spectral_theorem",
        summary:
          'מצאו ע"ע, ו"ע, בסיס אורתונורמלי ו-$D,P$ עבור $f$ על $\\mathbb{R}^2$',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו צורת ז'ורדן של $A\\in M_3(\\mathbb{C})$; מצאו $J,P$: $P^{-1}AP=J$",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "orthogonal_operator",
        summary:
          '$T:R^5\\to R^5$ אורתוגונלית ⟹ קיים $0<W<V$ $T$-אינווריאנטי ממ"ד 1 או 2?',
      },
      {
        id: "א1",
        chapter: "א",
        type: "אמת/שקר",
        topic: "diagonalization",
        summary: '$T$ לכסינה ↔ $T^2$ לכסינה? $T$ עם ע"ע יחיד נילפוטנטית?',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ה  2015  (2 מועדים)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2015_א_I",
    year: 2015,
    moed: "א",
    date: "16.07.15",
    chapter_structure: "25/0/75",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          '$T$ צמוד לעצמו, $U$ $T$-אינווריאנטי ⟹ $U^\\perp$ $T$-אינווריאנטי; ⟹ בסיס אורתונורמלי ו"ע',
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "alg_geo_multiplicity",
        summary: 'הוכיחו: $p_{T|_U}|p_T$; ריבוי אלגברי $\\geq$ גאומטרי לכל ע"ע',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "spectral_theorem",
        summary:
          "לכסנו אורתוגונלית $A\\in M_n(\\mathbb{R})$ סימטרית; מצאו $O$ אורתוגונלית ו-$D$ אלכסונית",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary:
          "$U\\subset\\mathbb{R}^3$: בסיס אורתוגונלי ל-$U$, בסיס ל-$U^\\perp$, הטלה, מרחק",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          '$T,S$ צמודים לעצמם, $TS=ST$ ⟹ $V$ יש בסיס אורתונורמלי משותף של ו"ע של שניהם',
      },
    ],
  },
  {
    code: "2015_ב_I",
    year: 2015,
    moed: "ב",
    date: "16.08.15",
    chapter_structure: "30/0/70",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "gram_schmidt",
        summary:
          'הוכיחו: $V$ מ"מ פנימית ממ"ס, $(v_1,\\ldots,v_n)$ ב"ת ⟹ קיימת $(u_1,\\ldots,u_n)$ אורתונורמלית עם אותם span',
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'הוכיחו: ו"ע השייכים לע"ע שונים הם בת"ל',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "spectral_theorem",
        summary:
          "מצאו ע\"ע, $p_A$, בסיס אורתונורמלי לכל מ' עצמי; לכסנו $A\\in M_3(\\mathbb{R})$: $O,D$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "מעורב",
        topic: "gram_schmidt",
        summary:
          "מצאו $a,r,s$ כך ש-$(1,x,ax^2)$ אורתוגונלי; חשבו $P_W(1)$ עבור $W=\\mathrm{span}\\{x,2x^2\\}$",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary:
          "$V=M_2(\\mathbb{R})$, $g(A,B)=\\mathrm{tr}(AB)$; סיגנטורה; צמצום לתת-מ' עקבה 0",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary:
          '$A\\in M_n(\\mathbb{R})$ אנטי-סימטרית: ע"ע שלה = 0 (ממשי); $(I+cA)$ הפיכה לכל $c\\in\\mathbb{R}$',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ו  2016
  // ════════════════════════════════════════════════════════════════
  {
    code: "2016_א_I",
    year: 2016,
    moed: "א",
    date: "12.07.16",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "invariant_subspace",
        summary:
          'מצאו בסיס, הוכיחו קיום ע"ע, תת-מרחב $T$-אינווריאנטי עבור $T:\\mathbb{R}^4\\to\\mathbb{R}^4$',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_complement",
        summary: 'הוכיחו $(W^\\perp)^\\perp=W$ במרחב מכפלה פנימית ממ"ס',
      },
      {
        id: "א2",
        chapter: "א",
        type: "מעורב",
        topic: "diagonalization",
        summary: "קבעו לכסינות מטריצה נתונה; מצאו $P,D$ כך ש-$D=P^{-1}AP$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "inner_product",
        summary: "מכפלה פנימית על מרחב פולינומים, הוכחת תכונות, חישוב",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "cyclic_subspace",
        summary: "אפיון תת-מרחב ציקלי מינימלי; $\\dim Z_{T,v}=k$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "normal_operator",
        summary: "הוכיחו כי אופרטור נורמלי לכסין אוניטרית (מקרה $n=2$)",
      },
      {
        id: "א4",
        chapter: "א",
        type: "מעורב",
        topic: "matrix_similarity",
        summary: "מצאו ומנו מחלקות הדמיון של $M_n(F)$; אימות דמיון בין מטריצות",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "הוכיחו אי-שוויון קושי-שוורץ על מרחב מכפלה פנימית מרוכב",
      },
    ],
  },
  {
    code: "2016_ב_I",
    year: 2016,
    moed: "ב",
    date: "15.08.16",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary:
          'ע"ע של מטריצה אנטי-סימטרית בהכרח $0$; $I+cA$ הפיכה לכל $c\\in\\mathbb{R}$',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_complement",
        summary: "הוכיחו $(U^0)^\\perp=U$ (מאפס של תת-מרחב)",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן של מטריצה $3\\times3$ נתונה",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary: 'הוכיחו: אם $T$ צמוד לעצמו ממ"ס אז לכסין אורתוגונלית',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "matrix_similarity",
        summary: "הוכיחו $A$ דומה ל-$A^t$ עבור $A\\in M_n(\\mathbb{C})$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "הוכיחו אי-שוויון קושי-שוורץ; האם השוויון גורר תלות לינארית?",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ז  2017
  // ════════════════════════════════════════════════════════════════
  {
    code: "2017_א_I",
    year: 2017,
    moed: "א",
    date: "19.07.17",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "minimal_polynomial",
        summary: "חשבו פולינום מינימלי של $v\\in V$ ביחס ל-$T$; הסיקו על $m_T$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary: 'הוכיחו: אופרטור נורמלי ממ"ס מעל $\\mathbb{C}$ לכסין אוניטרית',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו צורת ז'ורדן של מטריצה $4\\times4$ נתונה מעל $\\mathbb{C}$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "self_adjoint",
        summary:
          "מכפלה פנימית על $M_2(\\mathbb{R})$; לכסנו מטריצה סימטרית אורתוגונלית",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_operator",
        summary:
          'ע"ע של אופרטור אורתוגונלי; תנאים ל-$T=\\mathrm{Id}$ או $\\det T=-1$',
      },
    ],
  },
  {
    code: "2017_ב_I",
    year: 2017,
    moed: "ב",
    date: "21.08.17",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'הוכיחו: ו"ע שייכים לע"ע שונים הם בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "invariant_subspace",
        summary:
          "הוכיחו: $\\ker P(T)$ ו-$\\mathrm{Im}\\, P(T)$ הם $T$-אינווריאנטיים",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו צורת ז'ורדן של שתי מטריצות $3\\times3$ עם פולינום אופייני משותף",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "חישוב",
        topic: "orthogonal_projection",
        summary:
          "חשבו הטלה אורתוגונלית, מרחק, מצאו בסיס אורתוגונלי ל-$U\\subset\\mathbb{R}^3$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "self_adjoint",
        summary:
          "$T$ צמוד לעצמו, $W$ אינווריאנטי $\\Rightarrow$ $W^\\perp$ אינווריאנטי; קושי-שוורץ",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ח  2018
  // ════════════════════════════════════════════════════════════════
  {
    code: "2018_א_I",
    year: 2018,
    moed: "א",
    date: "18.07.18",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "cyclic_subspace",
        summary: "אפיון וקטור ציקלי; $T$-פרימיטיבי ⟺ קיים $v$ כך ש-$Z_{T,v}=V$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          "$W$ תת-מרחב $T$-אינווריאנטי, $T$ סימטרי $\\Rightarrow$ $W^\\perp$ אינווריאנטי",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן ובסיס ז'ורדן של מטריצה $4\\times4$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "spectral_theorem",
        summary:
          "לכסנו מטריצה סימטרית אורתוגונלית; מצאו $O\\in M_n(\\mathbb{R})$ אורתוגונלית",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary: 'הוכיחו: ע"ע של אוניטרי $|\\lambda|=1$; ו"ע שונים ⊥',
      },
    ],
  },
  {
    code: "2018_ב_I",
    year: 2018,
    moed: "ב",
    date: "20.08.18",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: "הוכיחו: $m_T$ מחלק כל $P$ המאפס את $T$; הסיקו $m_T\\mid p_T$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary: 'הוכיחו: $T$ צמוד לעצמו ממ"ס $\\Rightarrow$ יש ל-$T$ ו"ע',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן של מטריצה נתונה; חשבו $A^{100}$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary:
          "מצאו הטלה אורתוגונלית, בסיס אורתונורמלי ל-$U\\subset\\mathbb{R}^3$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "הוכיחו אי-שוויון קושי-שוורץ; תנאים לשוויון",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשע"ט  2019  (סמסטר א' – חורף + סמסטר ב' – קיץ)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2019w_א_I",
    year: 2019,
    moed: "א",
    date: "07.02.19",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary:
          "הוכיחו: $T$ לכסין $\\Leftrightarrow$ $p_T$ מתפרק לגורמים לינאריים וריבוי גאומטרי = אלגברי",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $T$ נורמלי ממ"ס מעל $\\mathbb{C}$ ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן; חשבו $A^k$ עבור $k$ גדול",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "orthogonal_projection",
        summary: "מצאו את הוקטור הקרוב ביותר ב-$U$ לנקודה נתונה; גרם-שמידט",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "inner_product",
        summary:
          "הוכיחו תכונות מכפלה פנימית; $\\langle Tu,Tv\\rangle = \\langle u,v\\rangle \\Leftrightarrow T$ אורתוגונלי",
      },
    ],
  },
  {
    code: "2019w_ב_I",
    year: 2019,
    moed: "ב",
    date: "01.03.19",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary:
          'הוכיחו: $\\ker(\\lambda I-T)\\neq\\{0\\}$ $\\Leftrightarrow$ $\\lambda$ ע"ע; ו"ע מע"ע שונים בת"ל',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary: 'הוכיחו משפט הלכסון הספקטרלי למרחב ממ"ס מעל $\\mathbb{R}$',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן ובסיס ז'ורדן; הסיקו על $A^{203}$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט על $\\mathbb{R}^3$; מצאו בסיס אורתונורמלי ל-$U$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary: "הוכיחו: $A$ הפיכה ⟹ קיים $Q\\in F[T]$ כך ש-$A^{-1}=Q(A)$",
      },
    ],
  },
  {
    code: "2019s_א_I",
    year: 2019,
    moed: "א",
    date: "17.07.19",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: 'הוכיחו אי-שוויון קושי-שוורץ על מ"מ פנימית מעל $\\mathbb{C}$',
      },
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "matrix_similarity",
        summary: "קבעו האם שתי מטריצות $3\\times3$ נתונות דומות; נמקו",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary: "$(Tu,v)=(u,Sv)$ לכל $u,v$ ⟹ $T=S$; $(TS)^*=S^*T^*$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$P(T)Q(T)=0$, $\\gcd(P,Q)=1$ ⟹ $V=\\ker P(T)\\oplus\\ker Q(T)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: "הגדרת $m_T$; הוכיחו $m_T$ מחלק כל פולינום המאפס $T$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט ב-$\\mathbb{R}^4$; בסיס אורתונורמלי והשלמה",
      },
      {
        id: "א4",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'הוכיחו: ו"ע מע"ע שונים בת"ל; לכסינות מעל $F_3$',
      },
    ],
  },
  {
    code: "2019s_ב_I",
    year: 2019,
    moed: "ב",
    date: "20.08.19",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary: "הוכיחו קושי-שוורץ ויישום; תנאי לשוויון",
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'הוכיחו: ו"ע מע"ע שונים בת"ל (הוכחה באינדוקציה)',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן לשתי מטריצות; הוכיחו קיום $k: A^k=0$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary: "הטלה אורתוגונלית ל-$U$; חשבו $\\mathrm{proj}_U v$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary: 'לכסינות $A^p=I$; כל ע"ע $\\lambda$ מקיים $\\lambda^p=1$',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תש"ף  2020  (חורף, מועד א' בלבד)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2020_א_I",
    year: 2020,
    moed: "א",
    date: "16.02.20",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary:
          'הוכיחו: $T$ לכסין $\\Leftrightarrow$ ריבוי גאומטרי = אלגברי לכל ע"ע',
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary: 'הוכיחו: $T$ צמוד לעצמו ממ"ס ⟹ לכסין אורתוגונלית',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary: "מצאו צורת ז'ורדן; מצאו $P$ הפיכה כך ש-$J=P^{-1}AP$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "מעורב",
        topic: "gram_schmidt",
        summary:
          "גרם-שמידט; מצאו בסיס אורתונורמלי ל-$U$ ול-$U^\\perp$ ב-$\\mathbb{R}^3$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_operator",
        summary:
          "הוכיחו: $T$ אורתוגונלי $\\Leftrightarrow$ $[T]_B$ אורתוגונלית עבור $B$ אורתונורמלי",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשפ"א  2021  (מועד ב' חורף + קיץ א' + קיץ ב')
  // ════════════════════════════════════════════════════════════════
  {
    code: "2021w_ב_I",
    year: 2021,
    moed: "ב",
    date: "03.2021",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,T)$, בסיס ז'ורדן, תת-מרחב מקסימלי שצמצום $A$ לכסין (חובה)",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary: 'מצאו ע"ע, $D,U$ אוניטרית כך ש-$U^*HU=D$; חשבו $H^{23}$',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary:
          "גרם-שמידט על $\\mathbb{R}^3$; בסיס אורתונורמלי ל-$U$ ו-$U^\\perp$ (חובה)",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "orthogonal_projection",
        summary:
          "מצאו את ההיטל האורתוגונלי של $(3,3,0)$ על $U^\\perp$; חשבו מרחק",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_form",
        summary:
          "הוכיחו: $A,B\\in M_2(\\mathbb{C})$ אותו $p_A,m_A$ ⟹ אותה צורת ז'ורדן",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "invariant_subspace",
        summary:
          'הוכיחו קיום תת-מרחב $T$-אינווריאנטי $W$ עם $0<\\dim W\\leq2$ ב-$V$ ממ"ד 4',
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary: 'הוכיחו: ע"ע של אוניטרי $|\\lambda|=1$; ו"ע לע"ע שונים ⊥',
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: 'הוכיחו: ו"ע מע"ע שונים בת"ל',
      },
    ],
  },
  {
    code: "2021_א_I",
    year: 2021,
    moed: "א",
    date: "21.07.21",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "nilpotent",
        summary:
          "הוכיחו: $T$ נילפוטנטי $\\Leftrightarrow$ קיים בסיס שבו מטריצה משולשת עליונה עם $0$ באלכסון",
      },
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "cyclic_subspace",
        summary:
          "קיים $k\\geq2$: $f^k=f$ ⟹ $\\dim Z_{T,v}<n$ לכל $T$-ציקלי $W$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_operator",
        summary: "הוכיחו $R_U=2P_U-\\mathrm{Id}$ אורתוגונלי; קושי-שוורץ לסכום",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          "הוכיחו $\\ker(I_n+A^*A)=\\{0\\}$ עבור $A\\in M_n(\\mathbb{C})$",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "חישוב",
        topic: "nilpotent",
        summary:
          "מצאו שתי מטריצות נילפוטנטיות $A,B\\in M_5(\\mathbb{R})$ לא דומות, אותו $m$ ואותה דרגה",
      },
    ],
  },
  {
    code: "2021_ב_I",
    year: 2021,
    moed: "ב",
    date: "15.08.21",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary:
          '$A^p=I$ ⟹ כל ע"ע $\\lambda^p=1$ ⟹ $A$ לכסינה; $T$ אורתוגונלי צמוד ⟺ $T=\\pm\\mathrm{Id}$',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "מעורב",
        topic: "nilpotent",
        summary:
          "$T$ אוניפוטנטי ($T-\\mathrm{Id}$ נילפוטנטי): מהו $p_T$? מצאו $k$ מינימלי",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "orthogonal_projection",
        summary:
          "$W\\subseteq U$ ⟹ $P_W\\circ P_U=P_W$; קושי-שוורץ עבור $z_1,\\ldots,z_{2n}\\in\\mathbb{R}$",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו צורת ז'ורדן לכל מטריצה עם $p_A=(x-2)^4(x-4)$, $m_A=(x-2)^2(x-4)$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          '$A\\in M_n(\\mathbb{R})$ סימטרית, ע"ע ב-$[0,1]$ ⟹ קיים $D$ אלכסוני בדמיון עם $0,1$ בלבד',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשפ"ב  2022  (חורף סמ"א + קיץ סמ"ב)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2022w_א_I",
    year: 2022,
    moed: "א",
    date: "06.02.22",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,A)$, בסיס ז'ורדן, תת-מרחב מקסימלי שצמצום $A$ לכסין (חובה)",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary:
          'מצאו ע"ע, $D,U$ אוניטרית כך ש-$U^*HU=D$; חשבו $H^{23}$ (חובה)',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט על $\\mathbb{R}^3$; הטלה אורתוגונלית ומרחק",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_form",
        summary:
          "הוכיחו: $A,B\\in M_2(\\mathbb{C})$ אותו $p,m$ ⟹ אותה ז'ורדן; דוגמה ב-$M_4$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_chain",
        summary:
          '$v\\neq0$, $f^h v=0$, $f^{h-1}v\\neq0$ ⟹ $(v,fv,\\ldots,f^{h-1}v)$ בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: 'הוכיחו: $\\lambda$ ע"ע ⟺ $\\lambda$ שורש של $m_T$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary:
          'הוכיחו: קיים ע"ע ב-$\\mathbb{C}$; ע"ע של אוניטרי $|\\lambda|=1$',
      },
    ],
  },
  {
    code: "2022w_ב_I",
    year: 2022,
    moed: "ב",
    date: "02.03.22",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,A)$, בסיס ז'ורדן, תת-מרחב מקסימלי שצמצום $A$ לכסין (חובה)",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary:
          'מצאו ע"ע, $D,U$ אוניטרית כך ש-$U^*HU=D$; חשבו $A^{203}$ (חובה)',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט, הטלה אורתוגונלית ומרחק ב-$\\mathbb{R}^3$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_chain",
        summary: '$f^3v=0$, $f^2v\\neq0$ ⟹ $(v,fv,f^2v)$ בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: 'הוכיחו: $\\lambda$ ע"ע ⟺ $\\lambda$ שורש $m_T$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary: 'קיים ע"ע ב-$\\mathbb{C}$; $f$ אוניטרי ⟹ $|\\lambda|=1$',
      },
    ],
  },
  {
    code: "2022_א_I",
    year: 2022,
    moed: "א",
    date: "25.07.22",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary:
          'הוכיחו: $A\\in M_n(\\mathbb{C})$ אנטי-סימטרית ($A^*=-A$) ⟹ כל ע"ע מדומה טהורה',
      },
      {
        id: "א2",
        chapter: "א",
        type: "חישוב",
        topic: "matrix_similarity",
        summary: "קבעו האם שתי מטריצות $A,B$ נתונות דומות; נמקו",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו צורת ז'ורדן לשתי מטריצות; בדקו קיום $N$ נילפוטנטי כך ש-$A^N=0$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "inner_product",
        summary: "נתונה מכפלה פנימית; מצאו בסיס אורתוגונלי; האם $g$ מנוונת?",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary: '$f^2=-\\mathrm{Id}$ ⟹ מצאו כל ע"ע; הוכיחו $f$ לכסין',
      },
    ],
  },
  {
    code: "2022_ב_I",
    year: 2022,
    moed: "ב",
    date: "18.08.22",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "matrix_similarity",
        summary: "הוכיחו: $A\\in M_n(\\mathbb{C})$ דומה ל-$A^t$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "מעורב",
        topic: "diagonalization",
        summary:
          'תבנית בילינארית עם סיגנטורה שאינה $(0,n)$ או $(n,0)$; מצאו ו"ע בת"ל שניצבים לעצמם',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "nilpotent",
        summary:
          "מצאו ערך $a\\in\\mathbb{C}$: $\\begin{pmatrix}0&2&0\\\\0&0&a\\\\0&0&0\\end{pmatrix}$ לכסינה",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_projection",
        summary:
          "הוכיחו: $d(u,v)\\leq d(\\tilde u,\\tilde v)$ כאשר $\\tilde u,\\tilde v$ ההיטלים על $W$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary:
          "הוכיחו לכל $z_1,\\ldots,z_{2n}\\in\\mathbb{R}$: סכום מכפלות $\\leq\\sqrt{z_1^2+\\ldots+z_{2n}^2}$",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשפ"ג  2023  (חורף – מועד א' + מועד ב')
  // ════════════════════════════════════════════════════════════════
  {
    code: "2023_א_I",
    year: 2023,
    moed: "א",
    date: "15.02.23",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,A)$, בסיס ז'ורדן, תת-מרחב מקסימלי שצמצום $A$ לכסין (חובה, 16 נק')",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary:
          "מצאו ע\"ע, $D,U$ אוניטרית: $U^*AU=D$; חשבו $A^{203}$ (חובה, 14 נק')",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט על $\\mathbb{R}^3$; הטלה על $U^\\perp$ ומרחק מ-$U$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_form",
        summary:
          "הוכיחו: $A,B\\in M_2(\\mathbb{C})$ אותו $p,m$ ⟹ אותה ז'ורדן; דוגמה ב-$M_4$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_chain",
        summary: '$f^3v=0$, $f^2v\\neq0$ ⟹ $(v,fv,f^2v)$ בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary:
          '$\\lambda$ ע"ע ⟺ $\\lambda$ שורש של $m_T$ ($m_T$ הפולינום המינימלי)',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary: 'קיים ע"ע ב-$\\mathbb{C}$ (FTA); $f$ אוניטרי ⟹ $|\\lambda|=1$',
      },
    ],
  },
  {
    code: "2023_ב_I",
    year: 2023,
    moed: "ב",
    date: "10.03.23",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,A)$, בסיס ז'ורדן, תת-מרחב מקסימלי שצמצום $A$ לכסין (חובה, 16 נק')",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary:
          'מצאו ע"ע ל-$A\\in M_2(\\mathbb{C})$ הרמיטית; $D,U$ אוניטרית; חשבו $A^{203}$ (חובה)',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט על $\\mathbb{R}^3$; הטלה על $U^\\perp$; מרחק",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "אותו $p_A,m_A$ ⟹ אותה ז'ורדן; דוגמה לז'ורדנים שונים עם אותו $p,m$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_chain",
        summary: '$f^3v=0$, $f^2v\\neq0$ ⟹ $(v,fv,f^2v)$ בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: '$\\lambda$ ע"ע ⟺ $\\lambda$ שורש $m_T$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary: 'קיים ע"ע ב-$\\mathbb{C}$; ע"ע אוניטרי $|\\lambda|=1$',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשפ"ד  2024  (סמ"א אביב + קיץ)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2024_א_I",
    year: 2024,
    moed: "א",
    date: "09.04.24",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,A)$, בסיס ז'ורדן, תת-מרחב מקסימלי שצמצום לכסין (חובה)",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary:
          'מצאו ע"ע ל-$H\\in M_2(\\mathbb{C})$ הרמיטית; $D,U$ אוניטרית (חובה)',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט, הטלה אורתוגונלית ומרחק ב-$\\mathbb{R}^3$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_form",
        summary:
          "אותו $p,m$ ⟹ אותה ז'ורדן; דוגמה לז'ורדנים שונים עם אותו $p,m$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_chain",
        summary: '$f^3v=0$, $f^2v\\neq0$ ⟹ $(v,fv,f^2v)$ בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: '$\\lambda$ ע"ע ⟺ $\\lambda$ שורש $m_T$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary: 'קיים ע"ע ב-$\\mathbb{C}$; ע"ע אוניטרי $|\\lambda|=1$',
      },
    ],
  },
  {
    code: "2024_ב_I",
    year: 2024,
    moed: "ב",
    date: "26.05.24",
    chapter_structure: "34/22/44",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "מעורב",
        topic: "jordan_form",
        summary:
          "מצאו $m_\\min(e_1,A)$, בסיס ז'ורדן, תת-מרחב מקסימלי לכסין (חובה)",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "מעורב",
        topic: "unitary_operator",
        summary:
          'מצאו ע"ע ל-$H\\in M_2(\\mathbb{C})$ הרמיטית; $D,U$ אוניטרית; $H^{203}$ (חובה)',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary: "גרם-שמידט, הטלה, מרחק ב-$\\mathbb{R}^3$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_form",
        summary: "אותו $p,m$ ⟹ אותה ז'ורדן; דוגמה ב-$M_4$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          'הוכיחו: $A\\in M_2(\\mathbb{R})$ סימטרית ⟹ בסיס אורתונורמלי של ו"ע',
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_chain",
        summary: '$f^3v=0$, $f^2v\\neq0$ ⟹ $(v,fv,f^2v)$ בת"ל',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "$\\gcd(P,Q)=1$, $P(f)Q(f)=0$ ⟹ $V=\\ker P(f)\\oplus\\ker Q(f)$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: '$\\lambda$ ע"ע ⟺ $\\lambda$ שורש $m_T$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "unitary_operator",
        summary: 'קיים ע"ע; ע"ע אוניטרי $|\\lambda|=1$',
      },
    ],
  },
  {
    code: "2024_ג_I",
    year: 2024,
    moed: "ג",
    date: "03.09.24",
    chapter_structure: "26/13/61",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "חישוב",
        topic: "char_polynomial",
        summary:
          "חשבו דטרמיננטה של $A\\in M_5(\\mathbb{R})$ עם פרמטר $c$; עבור אילו $c$ היא הפיכה",
      },
      {
        id: "א2",
        chapter: "א",
        type: "מעורב",
        topic: "invariant_subspace",
        summary:
          '$T\\circ S=S\\circ T$, $\\lambda$ ע"ע של $S$ ⟹ $V_\\lambda^S$ הוא $T$-אינווריאנטי; האם $\\lambda$ ע"ע של $T$?',
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "matrix_similarity",
        summary: "קבעו האם שתי מטריצות $3\\times3$ נתונות דומות; נמקו בפירוט",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_operator",
        summary: '$T$ ממפה ו"י לו"י ⟹ $T$ אורתוגונלי',
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary:
          "הוכיחו $\\sqrt{x_1+x_2}+\\ldots+\\sqrt{x_n+x_1}\\leq\\sqrt{2n(x_1+\\ldots+x_n)}$; מתי שוויון?",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "הוכחה",
        topic: "nilpotent",
        summary: "$A^{45}=0$ ⟹ $A^{72}=0$; מצאו $k$ מינימלי כך ש-$A^k=0$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary:
          "מצאו בסיס ל-$S\\subseteq\\mathbb{R}^2$; בסיס אורתונורמלי ל-$\\mathrm{Span}(5e_1+e_2)$",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_projection",
        summary:
          "הוכיחו: $\\langle P_W(v_1)|P_W(v_2)\\rangle=\\langle P_W(v_1)|v_2\\rangle$",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "מעורב",
        topic: "spectral_theorem",
        summary:
          "מצאו $O$ אורתוגונלית: $O^tAO$ אלכסונית; האם $\\langle Ax,x\\rangle<0$ לאיזה $x\\neq0$?",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשפ"ה  2025  (חורף – מועד א')
  // ════════════════════════════════════════════════════════════════
  {
    code: "2025_א_I",
    year: 2025,
    moed: "א",
    date: "23.02.25",
    chapter_structure: "50/25/25",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "חישוב",
        topic: "diagonalization",
        summary: "מצאו ערכי $c$ עבורם $A(c)\\in M_3(\\mathbb{R})$ לכסינה",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "normal_operator",
        summary:
          '$A\\in M_n(\\mathbb{C})$ נורמלית, $\\lambda_1,\\ldots,\\lambda_n$ ע"ע ⟹ $\\mathrm{tr}(A^*A)=\\sum|\\lambda_i|^2$',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary:
          "$\\dim Z_v=1$ לאיזה $v\\neq0$ ⟺ $\\deg m_T=1$ ⟺ $T=\\lambda\\mathrm{Id}$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "orthogonal_complement",
        summary:
          "מצאו בסיס אורתונורמלי ל-$W^\\perp$ ב-$\\mathbb{R}^4$ עבור $W=\\mathrm{Span}\\{v_1,v_2,v_3\\}$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "matrix_similarity",
        summary:
          "עבור אילו $a,b\\in\\mathbb{C}$: $\\begin{pmatrix}a&0\\\\1&b\\end{pmatrix}$ דומה ל-$\\begin{pmatrix}a&1\\\\0&b\\end{pmatrix}$?",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary:
          "הוכיחו לכל $a,b,c,d>0$: $\\frac{1}{ab}+\\frac{1}{bc}+\\frac{1}{cd}+\\frac{1}{da}\\geq\\frac{16}{(a+b+c+d)^2}$",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו צורת ז'ורדן של מטריצה $4\\times4$ נתונה מעל $\\mathbb{C}$",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "spectral_theorem",
        summary:
          "$A\\in M_3(\\mathbb{R})$ סימטרית, $B$ צמודה עצמית עם $B^2=A$ ⟹ קיומה של $B$",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "jordan_form",
        summary: "הוכיחו: $A\\in M_n(\\mathbb{C})$ דומה ל-$A^t$",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "מעורב",
        topic: "cauchy_schwarz",
        summary:
          "$\\langle u,v\\rangle=\\|u\\|\\cdot\\|v\\|$ ⟺ תלות לינארית; האם נכון מעל $\\mathbb{C}$?",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  //  תשפ"ו  2026  (מועד ב' + מבחן לדוגמא)
  // ════════════════════════════════════════════════════════════════
  {
    code: "2026_ב_I",
    year: 2026,
    moed: "ב",
    date: "19.03.26",
    chapter_structure: "50/0/50",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "חישוב",
        topic: "char_polynomial",
        summary:
          "$A\\in M_3(\\mathbb{Q})$, $\\mathrm{rank}\\,A=2$, $x^3-5x-2\\mid p_A$; חשבו $\\mathrm{tr}(A^2)$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_operator",
        summary:
          "$T$ אורתוגונלי וצמוד לעצמו על $V$ אי-זוגי, $\\det[T]_B=1$ ⟹ קיים $v\\neq0$: $T(v)=v$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "חישוב",
        topic: "spectral_theorem",
        summary:
          'מצאו בסיס ו"ע לאופרטור $(x,y,z)\\mapsto(ax+by+bz, bx+ay+bz, bx+by+az)$',
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_complement",
        summary: "הוכיחו: $(U+W)^\\perp=U^\\perp\\cap W^\\perp$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "polynomial_operator",
        summary:
          "הוכיחו: $A$ הפיכה ⟹ קיים $Q\\in F[T]$: $A^{-1}=Q(A)$ (Cayley-Hamilton)",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary:
          "עבור אילו $n\\in\\{2,3,4\\}$: $f(x)=\\sqrt{\\frac{x^n-1}{x-1}}<1.5$ לכל $x>0$, $x\\neq1$",
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "cyclic_subspace",
        summary:
          "$p_T=x^2+4\\in\\mathbb{R}[x]$ ⟹ $Z_{T,v}=V$ לכל $v\\neq0$ ($T$ פרימיטיבי)",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          '$T$ הרמיטי, $\\lambda_1,\\ldots,\\lambda_k$ ע"ע; אפיינו מתי $\\langle u,Tv\\rangle\\geq0$ לכל $u,v$',
      },
      {
        id: "א4",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary: '$A^2=I$, הע"ע היחיד הוא $1$ ⟹ $A=I$',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "חישוב",
        topic: "orthogonal_projection",
        summary:
          "$V=M_2(\\mathbb{R})$, $\\langle A,B\\rangle=\\mathrm{tr}(A^tB)$, $W=\\{$מטריצות סימטריות$\\}$; חשבו $P_W(I_2)$",
      },
    ],
  },
  {
    code: "2026_sample_I",
    year: 2026,
    moed: "א",
    date: "2026",
    chapter_structure: "34/28/38",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "eigenvalue_char",
        summary:
          "הוכיחו: $\\lambda$ ע\"ע של $T$ $\\Leftrightarrow$ $\\ker(\\lambda\\mathrm{Id}_V-T)\\neq\\{0\\}$ (חלק א', 20 נק')",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "הוכחה",
        topic: "self_adjoint",
        summary:
          "הוכיחו: $T$ צמוד לעצמו, $W$ $T$-אינווריאנטי ⟹ $W^\\perp$ $T$-אינווריאנטי (חלק א', 20 נק')",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "diagonalization",
        summary:
          '$P_\\sigma^2=I$ ⟹ $P_\\sigma$ לכסינה, $1$ ע"ע; הוכיחו $\\dim V_1\\geq n/2$',
      },
      {
        id: "א3",
        chapter: "א",
        type: "הוכחה",
        topic: "minimal_polynomial",
        summary: "הוכיחו: קיים $k\\in\\mathbb{N}$: $p_T\\mid(m_T)^k$",
      },
      {
        id: "ב1",
        chapter: "ב",
        type: "חישוב",
        topic: "nilpotent",
        summary:
          "מצאו כל $a,b\\in\\mathbb{R}$ עבורם $A=\\begin{pmatrix}1&1&3\\\\a&2&b\\\\-2&-1&-3\\end{pmatrix}$ נילפוטנטית",
      },
      {
        id: "ב2",
        chapter: "ב",
        type: "חישוב",
        topic: "jordan_form",
        summary:
          "מצאו מטריצה בצורת ז'ורדן הדומה ל-$A=\\begin{pmatrix}2&2&3\\\\1&3&3\\\\-1&-2&-2\\end{pmatrix}\\in M_3(\\mathbb{C})$",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "הוכחה",
        topic: "cauchy_schwarz",
        summary:
          "הוכיחו: $\\sqrt{x_1+x_2}+\\ldots+\\sqrt{x_n+x_1}\\leq\\sqrt{2n(x_1+\\ldots+x_n)}$ לכל $x_i\\geq0$",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "gram_schmidt",
        summary:
          'מצאו בסיס אורתונורמלי ל-$\\{(1,1,1)\\}^\\perp$ ביחס למ"פ $5x_1y_1+3x_2y_2-2x_2y_3-2x_3y_2+2x_3y_3$',
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "הוכחה",
        topic: "orthogonal_operator",
        summary:
          "הוכיחו: עמודות $A$ בסיס אורתונורמלי ⟺ שורות $A$ בסיס אורתונורמלי",
      },
    ],
  },
];

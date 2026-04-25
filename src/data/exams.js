export const EXAMS = [
  {
    code: "2006_ב_I",
    year: 2006,
    moed: "ב",
    date: "2006",
    chapter_structure: "25/40/35",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "taylor",
        summary: "נוסחת טיילור — קיום ויחידות של פולינום עם תכונת השארית",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: "משפט Dini — סדרת פונקציות רציפות מונוטונית על $[a,b]$",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary:
          "$I_n = \\int_0^{\\pi/4} \\tan^{2n}(x)\\,dx$ — מונוטוניות, רקורסיה, $O(1/n)$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "מעורב",
        topic: "func_series",
        summary:
          "$\\sum \\frac{\\sin(2^n x)}{n!}$ — גזירות, חישוב ערכים, נקודות התכנסות טיילור",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "חישוב",
        topic: "multivariable",
        summary:
          "$f(x,y)=\\frac{\\sin(x^2)-\\sin(y^2)}{\\sqrt{x^2+y^2}}$ — לא בתכנית הנוכחית",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "שקילות אינטגרביליות רימן דרך סכומים/חלוקות",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int f(x^2)\\,dx$ — תנאים להתכנסות",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$F(x)=\\int_x^{x^2} \\frac{\\sin t}{t}\\,dt$ — חישוב גבולות",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "חישוב",
        topic: "improper_int",
        summary:
          "מציאת $a,b$ עבור $\\int_0^{\\pi/2} \\frac{dx}{a\\sin x + b}=1$",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: "סדרת פונקציות גזירות אי-שליליות — תכונות גבול",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\frac{x}{(1-x)^2}=\\sum nx^n$,\\; $\\sum \\frac{n!}{n^n}x^n$",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "חישוב",
        topic: "multivariable",
        summary: "$f(x,y)=x^2\\sin(y+\\pi/2)$ — לא בתכנית הנוכחית",
      },
    ],
  },
  {
    code: "2006_ב_II",
    year: 2006,
    moed: "ב",
    date: "2006",
    chapter_structure: "25/40/35",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "ftoc",
        summary: "הוכחת המשפט היסודי של החשבון האינטגרלי",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "lhopital",
        summary: "הוכחת כלל לופיטל",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary:
          "א. $\\int_{-1/2}^{1/2} \\frac{3x+5}{(x+1)(x-1)^2}dx$ · ב. $\\int_0^\\infty \\frac{x+1}{\\sqrt{x+x^3}}dx$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "מעורב",
        topic: "func_sequences",
        summary:
          '$f_n(x)=\\int_0^x f_{n-1}(t)\\,dt$ — אי-שליליות, רציפות, מונוטוניות, התכנסות במ"ש',
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "taylor",
        summary: "טיילור לפונקציה קמורה עם נגזרת שנייה חסומה $M$",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "multivariable",
        summary: "$f(x,y)=x^2+2x+3xy$ — גבול דיפרנציאבילי (לא בתכנית)",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "multivariable",
        summary: "$f(x,y)=x/y$ — שוויון נגזרות חלקיות (לא בתכנית)",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "int_series_link",
        summary: "$L=\\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{1}{n+i}$",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "תנאי התכנסות לאינטגרל מ-$0$ לאינסוף",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$S(x)=\\sum a_n x^n$ — תכונות התכנסות ב-$x=R$",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$F(x)=\\int_0^{x^2-1}\\arctan(t)\\,dt$ — נקודות קיצון מקומי",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: "$f_n \\to f$ נקודתית, $f=\\cos/-\\cos$ — תכונות",
      },
    ],
  },
  {
    code: "2013_ב_I",
    year: 2013,
    moed: "ב",
    date: "06.08.13",
    chapter_structure: "25/52/27",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "series_alt",
        summary:
          "סדרה חיובית יורדת $x_n\\to 0$ — $\\sum(-1)^{n+1}x_n$ מתכנס, $S\\in(0,x_1)$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'סדרת פונקציות רציפות המתכנסת במ"ש — הגבולית רציפה',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. $\\int \\frac{1}{e^{2x}-e^x}dx$ ב-$(0,\\infty)$ · ב. $\\int_0^{1/2} \\frac{1}{\\sin(x)\\ln(x)}dx$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "מעורב",
        topic: "func_series",
        summary:
          "א. $f(x)=\\sum \\frac{\\cos(2^n x)}{4^n}$ — גזירות ב-$\\mathbb{R}$ · ב. $\\sum a_n$ מתכנס $\\Leftrightarrow \\sum \\frac{a_n}{1+a_n}$ מתכנס",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_series",
        summary:
          '$\\sum f_n$ מ"ש $\\Rightarrow \\sup|f_n|\\to 0$; טור חזקות מ"ש $\\Rightarrow a_n=0$',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "lhopital",
        summary: "$\\lim \\frac{\\ln(\\cos 3x)}{\\ln(\\cos 5x)}=\\frac{9}{25}$",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary:
          '$g$ מחזורית $1$, $f_n(x)=g(x/n)$ — מ"ש $\\Rightarrow f\\equiv 0$',
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int_0^\\infty \\sin(e^{-x})\\,dx$ מתכנס",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$p(n)x^n$ — רדיוס התכנסות $=1$",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_{-x}^x f(t)\\,dt=0 \\Rightarrow f$ אי-זוגית",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "$\\sum \\frac{(n+1)^n}{n^{n+2}}$ מתכנס",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "$f=e^{-1/x^2}$ ל-$x>0$ — טור טיילור סביב $0$",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary:
          "$\\sum a_n$ חיובי מתכנס $\\Rightarrow \\sum 2^n a_{2^n}$ מתכנס",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$f$ אינטגרבילית, $\\int_a^{x_0}=1$, $\\int_a^b>1$ — קיום נקודה",
      },
    ],
  },
  {
    code: "2013_ב_II",
    year: 2013,
    moed: "א",
    date: "28.06.13",
    chapter_structure: "25/52/27",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "lhopital",
        summary: "כלל לופיטל — $f,g$ גזירות, $g'\\neq 0$, $f\\to 0$, $g\\to 0$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "ftoc",
        summary:
          "$F(t)=\\int_a^t f$ — $F$ רציפה; $f$ רציפה ב-$x_0 \\Rightarrow F$ גזירה ב-$x_0$",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "מעורב",
        topic: "improper_int",
        summary:
          "א. $x_1<x_2 \\Rightarrow x_1/x_2 < \\sin x_1/\\sin x_2$ · ב. $\\int_1^2 \\frac{1}{x\\sqrt{x-1}}dx$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. $\\int_0^{\\pi^2} \\cos(\\sqrt{x})\\,dx$ · ב. $\\varphi$ חסומה, $\\sum(-1)^{n-1}\\varphi(2n+(-1)^n)/n$ מתכנס",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          'דוגמא: $f_n\\to f$ נקודתית, $\\lim f_n(x_n)\\neq f(\\lim x_n)$; מ"ש $\\Rightarrow$ שוויון',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_rearr",
        summary:
          "$\\sum a_n$ מתכנס $\\Rightarrow a_2+a_1+a_4+a_3+\\cdots$ מתכנס",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$f$ אינטגרבילית, $\\int_0^x f=5x \\Rightarrow f=5$ כמעט תמיד",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$y=2x+3$ אסימפטוטה $\\Rightarrow u_n=e^{-2n}\\int_0^n e^{f(t)}dt$ מתכנסת",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$\\int_u^{1/u} \\frac{\\ln x}{x}\\,dx = 0$ לכל $u\\in(0,\\infty)$",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary:
          "$f$ גזירה ב-$0$, $f(0)=f'(0)=0 \\Rightarrow \\sum f(1/n)$ מתכנס",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "$\\pi/4 < \\sum \\frac{1}{n^2+1} < \\pi/2$",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "$f$ גזירה אינסוף פעמים, $\\{s=f\\}$ חסומה?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "$\\sum 3^{-\\ln n}$ מתבדר",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary:
          '$f_n$ מ"ש על $[a,b]$, $f_n$ רציפות $\\Rightarrow f$ רציפה במ"ש',
      },
    ],
  },
  {
    code: "2017_א_I",
    year: 2017,
    moed: "א",
    date: "4.07.17",
    chapter_structure: "30/30/42",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "series_product",
        summary:
          "$\\sum a_n\\to A$, $\\sum b_n\\to B$ בהחלט — מכפלות $a_j b_k$ מסודרות מתכנסות ל-$AB$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$f_n\\to f$ במ"ש, כל $f_n$ רציפה ב-$x_0 \\Rightarrow f$ רציפה ב-$x_0$',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_basic",
        summary:
          "$x_{n+1}=x_n+f(x_n)/n$ — מונוטוניות, $x_n=\\sum f(x_k)/k$, $\\lim=\\infty$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "הוכחה",
        topic: "int_series_link",
        summary:
          "$f$ מונוטונית — $\\frac{1}{n}\\sum f(k/n) \\leq \\int f$,\\; $\\lim=\\int f$",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'פונקציה שאינה רציפה במ"ש בקטע פתוח',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$f$ גזירה ברציפות, $\\lim x\\cdot f'(x)=1 \\Rightarrow \\lim f(x)=\\infty$",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary:
          "$p_n$ עולה חיובי — $\\sum 1/p_n^n$ מתכנס $\\Leftrightarrow$ קיים $k$: $p_k>1$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_0^1 \\ln(1+x^2)\\,dx = \\ln 2 + \\pi/4 - 2$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$\\lim f=L\\in\\mathbb{R}$, $\\int_1^\\infty f$ מתכנס $\\Rightarrow L=0$",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\sum a_n x^n$ עם $R>0$, $a_n\\neq 0 \\Rightarrow \\sum x^n/a_n$ יש רדיוס $1/R$",
      },
    ],
  },
  {
    code: "2017_ב_II",
    year: 2017,
    moed: "ב",
    date: "2017",
    chapter_structure: "30/30/42",
    questions: [
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: '$f>m>0$ במ"ש $\\Rightarrow 1/f$ במ"ש',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary:
          "$f$ גזירה פעמיים ב-$0$ — $\\lim\\frac{f'(x)-(f(x)-f(0))/x}{x} = f''(0)/2$",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "countable_sums",
        summary: "פונקציית רימן — $\\sum f(x)$ ב-$[0,1]=\\infty$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$\\int_{\\pi/6}^{\\pi/2} \\frac{\\cos^3 t}{\\sin^4 t}\\,dt = 4/3$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary:
          "$f$ אי-שלילית, $\\int f=0 \\Rightarrow$ קיימת $A$ צפופה עם $f=0$",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\sum a_n x^n$, $R>0$ — $\\sum \\frac{a_n}{n!}x^n$ מתכנס לכל $x\\in\\mathbb{R}$",
      },
    ],
  },
  {
    code: "2018_א_I",
    year: 2018,
    moed: "א",
    date: "5.07.18",
    chapter_structure: "30/40/32",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "series_product",
        summary:
          "$\\sum a_n\\to A$, $\\sum b_n\\to B$ בהחלט, $d_n=\\sum_{i+j=n} a_i b_j \\Rightarrow \\sum d_n\\to AB$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "riemann_int",
        summary:
          "$f$ חסומה, $W_i=\\sup-\\inf$ — $f$ אינטגרבילית $\\Leftrightarrow \\lim \\sum W_i\\Delta x_i=0$",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_pos",
        summary:
          "$\\sum 1/n^p$ מתכנס ל-$p\\geq 2$; $a_p=\\sum 1/n^p$, $\\sum a_p$ מתכנס",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב",
        topic: "int_series_link",
        summary:
          "$\\int \\frac{1}{\\sqrt{3+2x-x^2}}dx$; $\\;\\lim \\sum \\frac{1}{\\sqrt{3n^2+2kn-k^2}}$",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$g_n(x)=f(x+1/n)$ — נקודתית; $f$ מ"ש $\\Rightarrow g_n$ מ"ש ב-$\\mathbb{R}$; דוגמא בלי',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f=(x^3+x^{-1/2})e^{-x}$ — $\\int_1^\\infty$, $\\int_0^1$ התכנסות/התבדרות",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "ספרה עשרונית ראשונה של $\\sum(-1)^{n-1}/n^7$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "סדרה חסומה — אפיוני $\\limsup$ דרך כמתים",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary:
          "פונקציית רימן $f$, דיריכלה $D$ — אילו מ-$\\{D,f,Df,\\sqrt{f}\\}$ אינטגרביליות?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "פולינום טיילור $P_2$ של $f=e^x$ סביב $1$ — $P(0)$",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$f$ רציפה, $\\int_1^\\infty f(x^2)\\,dx$ — תנאים להתכנסות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "$\\sum a_n/n$ מתכנס $\\Rightarrow$ תכונות של $a_n$",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\sum a_n x^n$ עם רדיוס $R\\in\\mathbb{R}$ — תכונות $\\lim a_n$",
      },
    ],
  },
  {
    code: "2018_ב_II",
    year: 2018,
    moed: "ב",
    date: "8.08.18",
    chapter_structure: "30/40/32",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "series_alt",
        summary:
          "$\\sum(-1)^{n+1}a_n$ מתכנס ב-$[0,a_1]$; זנב $r_m$: $0\\leq(-1)^m r_m\\leq a_{m+1}$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$f_n$ אינטגרביליות מ"ש ל-$f \\Rightarrow f$ חסומה; $\\int f_n\\to\\int f$',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_pos",
        summary:
          "$a_n$ יורדת — $\\sum(n_{k+1}-n_k)a_{n_k}$ מתכנס $\\Leftrightarrow \\sum a_n$; $\\sum k^2 a_{k^2}$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary:
          "$I_n=\\int_{-1}^1 (1-x^2)^n\\,dx$ — רקורסיה; $\\int(t-a)^n(t-b)^n\\,dx$",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$g_n(x)=\\sum f(x+i/n)/n$ — נקודתית ב-$\\mathbb{R}$; $a<b \\Rightarrow$ מ"ש ב-$[a,b]$',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$a_n>0$, $b_n=\\int_0^{1+a_n} x^{n-1}dx$ — $\\liminf$, $\\limsup$",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$f$ רציפה — תנאים להתכנסות $\\int_1^\\infty f$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "lhopital",
        summary: "$\\lim_{x\\to 0} \\frac{1}{x}\\ln\\frac{e^x-1}{x}$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'אפיונים ל-$f_n$ לא מתכנסת במ"ש ל-$f$',
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_{2\\pi t}^{2\\pi(t+1)} \\cos^3(x)\\,dx$",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$h(x)=\\int_a^{f(x)} g(t)\\,dt$ — תכונות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$\\sum a_n x^n$ עם $R$, $a_{n+k}=a_n \\Rightarrow R=1$",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary:
          "$\\sum a_n$, $\\sum b_n$ עם $b_n=(-1)^n$ — התכנסות $\\sum a_n b_n$",
      },
    ],
  },
  {
    code: "2019_א_I",
    year: 2019,
    moed: "א",
    date: "4.07.19",
    chapter_structure: "30/40/32",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$f_n\\to f$ במ"ש, כל $f_n$ רציפה ב-$x_0 \\Rightarrow f$ רציפה ב-$x_0$',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_series",
        summary:
          "$\\sum u_n$ — מתכנס נקודתית, $\\sum u'_n$ מ\"ש $\\Rightarrow (\\sum u_n)'=\\sum u'_n$",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary:
          "א. $\\int_0^9 e^{\\sqrt{x}}dx$ · ב. $\\int_0^1 \\frac{dx}{\\sqrt{3-2x-x^2}}$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "riemann_int",
        summary:
          "א. $\\{x:f>\\varepsilon\\}$ סופית $\\Rightarrow$ אינטגרבילית · ב. $f=1$ ב-$x=1/n$, $0$ אחרת",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_series",
        summary:
          '$f_n\\to 0$, $0\\leq f_{n+1}\\leq f_n \\Rightarrow \\sum(-1)^n f_n$ נקודתית; $M_n\\to 0 \\Rightarrow$ מ"ש',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$\\int_1^\\infty x^\\alpha \\sin(x^\\beta)\\,dx$ — התכנסות/התבדרות",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f:[1,\\infty)\\to[0,\\infty)$ — $\\int_1^\\infty f$ מתכנס $\\Rightarrow$?",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\lim_{x\\to\\infty} \\int_x^{2x} \\frac{e^{t-1}}{t}\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "$f=n$ ב-$x=1/n$, $0$ אחרת — אינטגרביליות",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "$f=e^{-x^{-2}}$ ל-$x>0$ — טור טיילור סביב $0$",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$\\sum \\frac{n!}{(2n)!}x^n$ — רדיוס התכנסות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "$(a_n)$ חסומה — אפיוני $\\limsup$ מול $M$",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "$\\sum a_n$, $\\sum b_n$ מתכנסים — תכונות $\\sum(a_n+b_n)$",
      },
    ],
  },
  {
    code: "2019_ב_II",
    year: 2019,
    moed: "ב",
    date: "2019",
    chapter_structure: "?/?/32",
    questions: [
      {
        id: "א4",
        chapter: "א",
        type: "הוכחה",
        topic: "ftoc",
        summary: "סימטריית אינטגרלים: זוגית, אי-זוגית, $f(2-x)=f(x)$",
      },
      {
        id: "א5",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$h_n(x)=\\int_{-1}^{f(x+1/n)} g(t)\\,dt$ — נקודתית; $f$ מ"ש $\\Rightarrow h_n$ מ"ש',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$\\sum \\sin(\\pi n/64)\\,x^n$ — רדיוס ההתכנסות",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$f$ רציפה — $\\int \\sin\\cdot f$, תנאים להתכנסות",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "$\\sum a_n b_n$ — תנאים מבטיחים התכנסות",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f=\\frac{1}{\\sqrt{x}}\\sin(x+1/x)$ — $\\int_1^\\infty$, $\\int_0^1$",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\to\\infty} \\int_x^{2x} \\frac{1}{t}\\cos\\frac{1}{t^2}\\,dt$",
      },
    ],
  },
  {
    code: "2021_ב_I",
    year: 2021,
    moed: "ב",
    date: "10.08.21",
    chapter_structure: "30/40/32",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$f_n\\to f$ במ"ש, $f_n$ רציפה ב-$x_0 \\Rightarrow f$ רציפה ב-$x_0$',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "lhopital",
        summary:
          "משפט ערך ממוצע כללי — $\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(c)}{g'(c)}$",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "ftoc",
        summary:
          "א. $\\lim_{x\\to 1}\\frac{\\int_0^{(\\ln x)^2}e^{t^2}dt}{\\sin^2(x-1)}$ · ב. $\\lim \\frac{1}{n}\\sum\\frac{n^2}{n^2+k^2}$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "riemann_int",
        summary:
          "א. $\\{f>\\varepsilon\\}$ סופית $\\Rightarrow$ אינטגרבילית · ב. $f=1$ ב-$1/n$, $x^2$ אחרת",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "taylor",
        summary:
          "$f(0)=f'(0)=0$ — $|f(1/n)-f''(0)/(2n^2)|<1/n^2$; $\\sum f(1/n)$ בהחלט",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int_1^\\infty x^\\alpha\\sin(x^\\beta)\\,dx$ — תנאים",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f:[0,\\infty)\\to[0,\\infty)$ רציפה, $\\int_1^\\infty f$ מתכנס $\\Rightarrow$?",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_{\\pi/6}^{\\pi/4}\\frac{\\cos^3 t}{\\sin^5 t}\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: 'טור טיילור מ"ש ל-$f \\Rightarrow f$ קבועה/אנליטית/פולינום?',
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "bv",
        summary: "$f$ השתנות חסומה על $[0,1]$ — הפרש מונוטוניות",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$\\sum a_n x^n$ עם $R\\in(0,\\infty)$, $a_n\\neq 0$ — תכונות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "countable_sums",
        summary: "פונקציית רימן — $\\int=0$, $\\sum f(x)$ ב-$[0,1]$?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "$\\sum a_n$, $\\sum b_n$ מתכנסים — תכונות $\\sum a_n b_n$",
      },
    ],
  },
  {
    code: "2021_ב_II",
    year: 2021,
    moed: "ב",
    date: "10.08.21",
    chapter_structure: "30/40/32",
    questions: [
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary:
          "$\\lim_{x\\to 0}\\frac{\\ln(1+x^2)-(a+bx+cx^2)}{x^2}=0 \\Rightarrow$?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\to\\infty}\\int_x^{2x}\\frac{1}{t}\\cos\\frac{1}{t}\\,dt$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_0^{\\pi/4}\\frac{\\sin^3 t}{\\cos^5 t}\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "$(a_n)$ אי-שלילית, $\\limsup(na_n)=2021$ — ?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "bv",
        summary: "$f$ השתנות חסומה על $[0,1]$",
      },
    ],
  },
  {
    code: "2022_א_I",
    year: 2022,
    moed: "א",
    date: "27.01.22",
    chapter_structure: "26/26/50",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "riemann_int",
        summary:
          "א. מונוטונית $\\Rightarrow$ אינטגרבילית · ב. רציפה $\\Rightarrow$ אינטגרבילית",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "bv",
        summary:
          "א. מונוטונית $\\Rightarrow$ השתנות חסומה · ב. השתנות חסומה $\\Rightarrow$ הפרש שתי מונוטוניות",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "taylor",
        summary:
          "א. $\\ln(3/4)$ בדיוק $1/5$ · ב. $a_n=\\frac{1}{n}\\sum\\frac{f'(k/n)}{f(k/n)}$ — מתכנסת, ערך",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_alt",
        summary:
          "א. $\\sum(-1)^{n+1}/\\sqrt{n}$ מתכנס ל-$L>0$ · ב. סידור עם סכומים שליליים לאפס?",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int_0^1 x^\\alpha\\sin(x^\\beta)\\,dx$ — תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f$ רציפה ב-$\\mathbb{R}$, $\\int_{-\\infty}^\\infty f$ מתכנס $\\Rightarrow \\lim f=0$? $\\lim\\int_{-n}^n=\\lim\\int_{-n}^{2n}$?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_0^{\\pi/4}\\frac{\\sin^3 t}{\\cos^5 t}\\,dt$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\to\\infty}\\int_x^{2x}\\sin\\frac{1}{t}\\cos\\frac{1}{t}\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary:
          "$f,g$ גזירות אינסוף — אותו טור טיילור $\\Rightarrow f=g$? חסומה $\\Rightarrow$ אנליטית?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "$(a_n)$ — אוסף גבולות חלקיים $A$, תכונות",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: '$f_n$ רציפות נקודתית ל-$f$ — אי-התכנסות מ"ש — תנאים שקולים',
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\sum a_n x^n$, $R\\in(0,\\infty)$ — $\\sum a_n\\cdot 2^{-\\sqrt{n}}R^n$, $\\sum a_n n! R^n$",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "$\\sum a_n x^n$ — רדיוסים של טורים נלווים",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary:
          "$\\sum a_n$, $\\sum b_n$ מתכנסים — $\\sum a_n b_n$, $\\sum(a_n\\pm b_n)$ בהחלט/בתנאי",
      },
    ],
  },
  {
    code: "2022_א_II",
    year: 2022,
    moed: "ב",
    date: "28.02.22",
    chapter_structure: "26/26/50",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "riemann_int",
        summary:
          "$f$ אינטגרבילית רימן, $g$ רציפה — $g\\circ f$ אינטגרבילית רימן",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "bv",
        summary:
          "א. מונוטונית $\\Rightarrow$ השתנות חסומה · ב. השתנות חסומה $=$ הפרש שתי מונוטוניות",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "improper_int",
        summary:
          "א. $f'(x)\\leq -2/x^3$, $f(1)=1$ — $\\int_0^\\infty f$ מתכנס · ב. $f>0$ אינטגרבילית $\\Rightarrow \\int>0$",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "taylor",
        summary:
          "א. טור $1/\\sqrt{1-x}$ · ב. טור $\\arcsin(x)$ מתכנס ל-$\\arcsin$",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int_0^\\infty x^\\alpha\\sin(x^\\beta)\\,dx$ — תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary:
          "$f:[0,1]\\to\\mathbb{R}$ רציפה ב-$(0,1]$, $\\lim_{x\\to 0}f=0$ — אינטגרבילית?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_0^{\\pi/2}\\cos^3(t)\\,dt$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\to\\infty}\\int_x^{x^2}\\sin\\frac{1}{t}\\cos\\frac{1}{t}\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary:
          "$\\sum\\frac{\\sin(\\pi n/4)}{\\sqrt{n}}$ — מתבדר/בתנאי/מוחלט",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "טור בתנאי — תכונות $(S_n)$ של סידורים",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "$f=e^{-x^{-2}}$ ל-$x>0$ — טור טיילור סביב $0$",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$f$ רציפה — $\\int \\sin\\cdot f$, תנאים",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary:
          "פונקציית רימן $f$, דיריכלה $D$ — $Df$, $f(\\sqrt{2}\\,x)$, $D(\\sqrt{2}\\,x)$",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_product",
        summary: "$\\sum a_n\\to A$, $\\sum b_n\\to B$ — מכפלת קושי, תכונות",
      },
    ],
  },
  {
    code: "2023_א_I",
    year: 2023,
    moed: "א",
    date: "2023",
    chapter_structure: "26/26/50",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$f_n\\to f$ במ"ש, $f_n$ רציפה ב-$x_0 \\Rightarrow f$ רציפה ב-$x_0$',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "series_basic",
        summary:
          "$a_n$ מונ' יורדת לאפס, $\\sum b_n$ חסום $\\Rightarrow \\sum a_n b_n$ מתכנס (דיריכלה/אבל)",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. כל $t$: $\\int_1^\\infty (e^{1/x}-t(\\sin+\\cos)(1/x))dx$ מתכנס · ב. $\\int_1^\\infty(e^{1/2x}-(\\sin+\\cos))dx$ מתבדר",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "func_series",
        summary:
          'א. $\\sum 2^{-nx}$ מ"ש על $[a,b]\\subset(0,\\infty)$ · ב. חישוב $\\sum n\\cdot 2^{-2n}$',
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int_1^\\infty x^\\alpha\\cos(x^\\beta)\\,dx$ — תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f$ מונוטונית, $\\int_0^\\infty f$ מתכנס $\\Rightarrow \\int f(x^2)$? $\\sum f(n^2)$? $\\lim\\int_n^{n^2}$?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_0^{\\pi/2}\\cos^5(t)\\,dt$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\to 0}(1-\\cos(x^3))^{-1}\\int_{x^3}^{x^2}\\sin(t^2)\\cos(t^3)\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "$\\sum a_n$ חיובי בתנאי — תכונות סדרות סכומים של סידורים",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary:
          "$f$ גזירה 3 ב-$0$, $f(0)=f'(0)=0$ — $\\sum f(1/n)$ מול $\\sum f'(1/n)$",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary:
          '$f_n$ גזירות פעמיים, מ"ש ל-$f$ — $f$ אינטגרבילית? $\\int f_n\\to\\int f$? $f$ גזירה?',
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "$f$ מונוטונית — אינטגרבילית? $F(x)=\\int f$ קדומה?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary:
          '$f_n\\to f$, $g_n\\to g$ במ"ש $\\Rightarrow f_n\\circ g_n\\to f\\circ g$ במ"ש? נקודתית?',
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary:
          "$f$ גזירה אינסוף ב-$x_0$, $R$ ההתכנסות של טור טיילור $>0$ — תכונות",
      },
    ],
  },
  {
    code: "2023_ב_II",
    year: 2023,
    moed: "ב",
    date: "2023",
    chapter_structure: "26/26/50",
    questions: [
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$\\int_0^1 x^\\alpha\\cos(x^\\beta)\\,dx$ — תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "$f$ רציפה, $\\int_{-\\infty}^\\infty f$ מתכנס — תכונות לאפס",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "$\\int_0^1\\frac{2t^2+3t^4}{1+t^2}\\,dt$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\to 0} x^{-3/2}\\int_0^{\\sqrt{x}}\\sin(t^2)\\cos(t)\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "$\\sum a_n$ בתנאי, גבול שלילי — תכונות $(S_n)$ של סידורים",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary:
          "$f$ גזירה 3, $f(0)=f'(0)=0$ — $\\sum f(1/n)$, $\\sum f'(1/n)$",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: '$f_n$ גזירות פעמיים מ"ש ל-$f$ — תכונות',
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "$\\sum(-1)^n\\frac{\\arctan n}{\\ln(1+n)}$",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\sum a_n x^n$, $R\\in(0,\\infty)$ — $\\sum a_n/n!\\cdot R^n$, $\\sum a_n 2^{\\sqrt{n}}R^n$, $\\sum x^n/a_n$, $\\sum\\sqrt{|a_n|}x^n$",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary:
          "$\\sum a_n$, $\\sum b_n$ מתכנסים — $\\sum a_n b_n$ בהחלט, $\\sum(a_n+b_n)$, $\\sum(a_n-b_n)$ בתנאי",
      },
    ],
  },
  {
    code: "2026_א_I",
    year: 2026,
    moed: "א",
    date: "02.02.26",
    chapter_structure: "26/26/50",
    questions: [
      {
        id: "א1",
        chapter: "א",
        type: "הוכחה",
        topic: "riemann_int",
        summary:
          "$f$ אינטגרבילית רימן $\\Leftrightarrow$ לכל $\\varepsilon>0$ קיים $\\delta>0$ כך ששני סכומי רימן עם חלוקות $<\\delta$ מקיימים $|S_1-S_2|<\\varepsilon$",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary:
          '$f_n\\to f$ במ"ש, כל $f_n$ רציפה ב-$x_0 \\Rightarrow f$ רציפה ב-$x_0$ (חזרה פעם 5!)',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "series_pos",
        summary:
          "א. $a_n\\searrow 0$, $\\sum a_n$ מתכנס $\\Rightarrow \\sum a_n/n^p$ מתכנס לכל $p\\in\\mathbb{N}$ · ב. $\\sum\\sqrt[3]{a_n a_{n+1} a_{n+2}}$ מתכנס",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. $f(x)=1/x-1/\\sin(x)$ אינטגרבילית רימן ב-$[0,1]$ · ב. $\\int_1^\\infty(1/x-\\sin(1/x))dx$ מתכנס",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$\\int_0^\\infty x^\\alpha\\cos(x^\\beta)dx$ — מתכנס $\\alpha>-1$? מתבדר $\\alpha\\geq -1$? מתכנס $\\alpha>-|\\beta|-1$? מתבדר $\\alpha\\leq -|\\beta|-1$?",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f\\in R[a,b]$ לכל $[a,b]$, $\\int_1^\\infty f$ מתכנס — $\\int f\\cdot\\sin$? $\\sum f(n^p)$? $\\int f^p$? $\\int f(x^2)$?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "ערכו של $\\int_0^\\pi\\sin^5(t)\\,dt$",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary:
          "$\\lim_{x\\downarrow 0} x^{-3/2}\\int_0^{\\sqrt{x}}\\sin(t)\\cos(t^2)\\,dt$",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "countable_sums",
        summary:
          "פונקציית רימן $f(p/q)=1/q$: אינטגרבילית $\\int=0$? $\\sum f$ סופי? אינסופי? $\\sum f^3$ סופי?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary:
          "$\\sum a_n$ — בהחלט/בתנאי $\\Rightarrow \\sum a_n/n$ מתכנס? $\\liminf\\geq 0$? $\\limsup<\\infty$?",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary:
          "$\\limsup\\leq M \\Rightarrow \\exists N\\forall n>N\\; a_n\\leq M$? $\\exists N\\forall n>N\\; a_n<M \\Rightarrow \\limsup<M$? $\\limsup>M \\Rightarrow \\forall N\\exists n>N\\; a_n>M$?",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "$\\sum a_n x^n$, $R>0$ — ב-$[-R,R] \\Rightarrow \\sum(n+1)a_{n+1}x^n$? $\\Rightarrow \\sum|a_n|R^n$? $\\Rightarrow \\sum a_n x^{n+1}/(n+1)$? $\\sum a_n R^n \\Rightarrow$ בהחלט ב-$(-R,R)$?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_series",
        summary:
          '$\\sum u_n(x)$ נגזרות רציפות על $[a,b]$: $\\sum u_n(a)$ מתכנס $+\\sum u\'_n$ מ"ש $\\Rightarrow \\sum u_n$ מ"ש?',
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "$f(x)=\\sqrt{1/x}\\cdot\\sin(x+1/x)$: $\\int_1^\\infty$ מתכנס? $\\int_0^1$ מתכנס? מתבדרים?",
      },
    ],
  },
];

import { useState, useMemo } from "react";

const EXAMS = [
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
        summary: "נוסחת טיילור - קיום ויחידות של פולינום עם תכונת השארית",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: "משפט Dini - סדרת פונקציות רציפות מונוטונית על [a,b]",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary: "I_n = ∫₀^{π/4} tan^{2n}(x)dx - מונוטוניות, רקורסיה, O(1/n)",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "מעורב",
        topic: "func_series",
        summary: "∑sin(2ⁿx)/n! - גזירות, חישוב ערכים, נקודות התכנסות טיילור",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "חישוב",
        topic: "multivariable",
        summary: "f(x,y)=(sin(x²)-sin(y²))/√(x²+y²) - לא בתכנית הנוכחית",
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
        summary: "∫f(x²)dx - תנאים להתכנסות",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "F(x)=∫_x^{x²} sin(t)/t dt - חישוב גבולות",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "חישוב",
        topic: "improper_int",
        summary: "מציאת a,b עבור ∫₀^{π/2} dx/(a sin x + b)=1",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: "סדרת פונקציות גזירות אי-שליליות - תכונות גבול",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "x/(1-x)²=Σnxⁿ, Σn!/nⁿ xⁿ, וכו'",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "חישוב",
        topic: "multivariable",
        summary: "f(x,y)=x²sin(y+π/2) - לא בתכנית הנוכחית",
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
        summary: "א. ∫₋½^½ (3x+5)/((x+1)(x-1)²)dx  ב. ∫₀^∞ (x+1)/√(x+x³)dx",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "מעורב",
        topic: "func_sequences",
        summary:
          'f_n(x)=∫₀^x f_{n-1}(t)dt - אי-שליליות, רציפות, מונוטוניות, מ"ש',
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "taylor",
        summary: "טיילור לפונקציה קמורה עם נגזרת שנייה חסומה M",
      },
      {
        id: "ג1",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "multivariable",
        summary: "f(x,y)=x²+2x+3xy - גבול דיפרנציאבילי (לא בתכנית)",
      },
      {
        id: "ג2",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "multivariable",
        summary: "f(x,y)=x/y - שוויון נגזרות חלקיות (לא בתכנית)",
      },
      {
        id: "ג3",
        chapter: "ג",
        type: "חישוב",
        topic: "int_series_link",
        summary: "L=lim Σ 1/(n+i) מ-i=1 עד n",
      },
      {
        id: "ג4",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "תנאי התכנסות לאינטגרל מ-0 לאינסוף",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "S(x)=Σaₙxⁿ - תכונות התכנסות ב-x=R",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "F(x)=∫₀^{x²-1} arctan(t)dt - נקודות קיצון מקומי",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: "f_n → f נקודתית, f=cos/-cos - תכונות",
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
        summary: "סדרה חיובית יורדת xₙ→0 - Σ(-1)^(n+1)xₙ מתכנס, S∈(0,x₁)",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'סדרת פונקציות רציפות מתכנסות במ"ש → הגבולית רציפה',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary: "א. ∫1/(e^{2x}-e^x)dx ב-(0,∞)  ב. ∫₀^½ 1/(sin(x)ln(x))dx",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "מעורב",
        topic: "func_series",
        summary:
          "א. f(x)=Σcos(2ⁿx)/4ⁿ - גזירה ב-ℝ  ב. Σaₙ מתכנס ⟺ Σaₙ/(1+aₙ) מתכנס",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_series",
        summary: 'Σfₙ מ"ש → sup|fₙ|→0; טור חזקות מ"ש ⟹ aₙ=0',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "lhopital",
        summary: "lim ln(cos 3x)/ln(cos 5x)=3/5",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'g מחזורית 1, fₙ(x)=g(x/n) - מ"ש ⟹ f≡0',
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫₀^∞ sin(e^{-x})dx מתכנס",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "p(n)xⁿ - רדיוס התכנסות=1",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫_{-x}^x f(t)dt=0 ⟹ f אי-זוגית",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "Σ(n+1)ⁿ/n^{n+2} מתכנס",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f=e^{-1/x²} ל-x>0 - טור טיילור סביב 0",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "Σaₙ חיובי מתכנס ⟹ Σ2ⁿa_{2ⁿ} מתכנס",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "f אינטגרבילית, ∫_a^{x₀}=1, ∫_a^b>1 - קיום נקודה",
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
        summary: "כלל לופיטל - f,g גזירות, g'≠0, f→0, g→0",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "ftoc",
        summary: "F(t)=∫ₐ^t f - F רציפה, f רציפה ב-x₀ ⟹ F גזירה ב-x₀",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "מעורב",
        topic: "improper_int",
        summary: "א. x₁<x₂ ⟹ x₁/x₂ < sinx₁/sinx₂  ב. ∫₁² 1/(x√(x-1))dx",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. ∫₀^{π²} cos(√x)dx  ב. φ חסומה, Σ(-1)^(n-1)φ(2n+(-1)ⁿ)/n מתכנס",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'דוגמא: fₙ→f נקודתית, lim fₙ(xₙ)≠f(lim xₙ); במ"ש ⟹ שוויון',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_rearr",
        summary: "Σaₙ מתכנס ⟹ a₂+a₁+a₄+a₃+... מתכנס",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "f אינטגרבילית, ∫₀^x f=5x ⟹ f=5 כמעט תמיד",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "y=2x+3 אסימפטוטה → uₙ=e^{-2n}∫₀ⁿ e^{f(t)}dt מתכנסת",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫_u^{1/u} ln(x)/x dx = 0 לכל u∈(0,∞)",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "f גזירה ב-0, f(0)=f'(0)=0 ⟹ Σf(1/n) מתכנס",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "π/4 < Σ1/(n²+1) < π/2",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f גזירה אינסוף פעמים, {s=f} חסומה?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "Σ3^{-ln(n)} מתבדר",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'fₙ מ"ש על [a,b], fₙ רציפות ⟹ f רציפה במ"ש',
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
        summary: "Σaₙ→A, Σbₙ→B בהחלט - מכפלות aⱼbₖ מסודרות מתכנסות ל-AB",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'fₙ→f במ"ש, כל fₙ רציפה ב-x₀ ⟹ f רציפה ב-x₀',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_basic",
        summary: "xₙ₊₁=xₙ+f(xₙ)/n - מונוטוניות, xₙ=Σf(xₖ)/k, lim=∞",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "הוכחה",
        topic: "int_series_link",
        summary: "f מונוטונית - 1/n Σf(k/n) ≤ ∫f, lim=∫",
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
        summary: "f גזירה ברציפות, lim x·f'(x)=1, lim f(x)=∞",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "pₙ עולה חיובי - Σ1/pₙⁿ מתכנס ⟺ קיים k: pₖ>1",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫₀¹ ln(1+x²)dx = ln(2)+π/4-2",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "lim f=L∈ℝ, ∫₁^∞ f מתכנס ⟹ L=0",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ עם R>0, aₙ≠0 ⟹ Σxⁿ/aₙ יש רדיוס 1/R",
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
        summary: 'f>m>0 במ"ש ⟹ 1/f במ"ש',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f גזירה פעמיים ב-0 - lim(f'(x)-(f(x)-f(0))/x)/x = f''(0)/2",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "countable_sums",
        summary: "פונקציית רימן - Σ f(x) ב-[0,1]=∞",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫_{π/6}^{π/2} cos³(t)/sin⁴(t)dt = 4/3",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "f אי-שלילית, ∫f=0 ⟹ קיימת צפופה A עם f=0",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ, R>0 - Σaₙ/n! xⁿ מתכנס לכל x∈ℝ",
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
        summary: "Σaₙ→A, Σbₙ→B בהחלט, dₙ=Σaᵢbⱼ (i+j=n) ⟹ Σdₙ→AB",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "riemann_int",
        summary: "f חסומה, W_i=sup-inf - f אינטגרבילית ⟺ lim ΣW_i·Δxᵢ=0",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_pos",
        summary: "Σ1/nᵖ מתכנס ל-p≥2; aₚ=Σ1/nᵖ, Σaₚ מתכנס",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב",
        topic: "int_series_link",
        summary: "∫1/√(3+2x-x²) dx; lim Σ 1/√(3n²+2kn-k²)",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'gₙ(x)=f(x+1/n) - נקודתית; f מ"ש ⟹ gₙ מ"ש ב-ℝ; דוגמא בלי',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f=(x³+1/√x)e^{-x} - ∫₁^∞, ∫₀¹ התכנסות/התבדרות",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "ספרה עשרונית ראשונה של Σ(-1)^(n-1)/n⁷",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "סדרה חסומה - אפיוני limsup דרך כמתים",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "פונקצית רימן f, דיריכלה D - אילו מ-{D,f,Df,√f} אינטגרביליות?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "P₂,e^x,1 של f=e^x סביב 1 - P(0)",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f רציפה, ∫₁^∞ f(x²)dx - תנאים להתכנסות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ/n מתכנס ⟹ תכונות של aₙ",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ עם רדיוס R∈ℝ - תכונות lim aₙ",
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
          "Σ(-1)^(n+1)aₙ מתכנס ב-[0,a₁]; זנב r_m: 0≤(-1)^m r_m ≤ a_{m+1}",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'fₙ אינטגרביליות מ"ש ל-f ⟹ f חסומה; ∫fₙ→∫f',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_pos",
        summary: "aₙ יורדת - Σ(n_{k+1}-n_k)a_{n_k} מתכנס ⟺ Σaₙ; Σk²a_{k²}",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary: "I_n=∫₋₁¹ (1-x²)ⁿ dx - רקורסיה; ∫(t-a)ⁿ(t-b)ⁿ dx",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'gₙ(x)=Σf(x+i/n)/n - נקודתית ב-ℝ; a<b ⟹ מ"ש ב-[a,b]',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "aₙ חיובית, bₙ=∫₀^{1+aₙ} x^{n-1}dx - liminf, limsup",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f רציפה - תנאים להתכנסות ∫₁^∞ f",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "lhopital",
        summary: "lim x→0 (1/x)ln((e^x-1)/x)",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'אפיונים ל-fₙ לא מתכנסת במ"ש ל-f',
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫_{2πt}^{2π(t+1)} cos³(x)dx",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "h(x)=∫_a^{f(x)} g(t)dt - תכונות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ עם R, a_{n+k}=aₙ ⟹ R=1",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ, Σbₙ עם bₙ=(-1)ⁿ - התכנסות Σaₙbₙ",
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
        summary: 'fₙ→f במ"ש, כל fₙ רציפה ב-x₀ ⟹ f רציפה ב-x₀',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_series",
        summary: "Σuₙ - מתכנס נקודתית, Σu'ₙ מ\"ש ⟹ (Σuₙ)'=Σu'ₙ",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "improper_int",
        summary: "א. ∫₀⁹ e^√x dx  ב. ∫₀¹ dx/√(3-2x-x²)",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "riemann_int",
        summary: "א. {x:f>ε} סופית ⟹ אינטגרבילית  ב. f=1 ב-x=1/n, 0 אחרת",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "func_series",
        summary: 'fₙ→0, 0≤fₙ₊₁≤fₙ ⟹ Σ(-1)ⁿfₙ נקודתית; Mₙ→0 ⟹ מ"ש',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫₁^∞ x^α sin(xᵝ)dx - התכנסות/התבדרות",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f:[1,∞)→[0,∞) - ∫₁^∞ f מתכנס ⟹ ?",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→∞ ∫_x^{2x} e^{t-1}/t dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "f=n ב-x=1/n, 0 אחרת - אינטגרביליות",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f=e^{-x^{-2}} ל-x>0 - טור טיילור סביב 0",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σn!/(2n)! xⁿ - רדיוס התכנסות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "(aₙ) חסומה - אפיוני limsup vs M",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ, Σbₙ מתכנסים - תכונות Σ(aₙ+bₙ)",
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
        summary: "סימטריית אינטגרלים: זוגית, אי-זוגית, f(2-x)=f(x)",
      },
      {
        id: "א5",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'hₙ(x)=∫_{-1}^{f(x+1/n)} g(t)dt - נקודתית; f מ"ש ⟹ hₙ מ"ש',
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σ sin(πn/64)xⁿ - רדיוס ההתכנסות",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f רציפה - ∫sin·f, תנאים להתכנסות",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙbₙ - תנאים מבטיחים התכנסות",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f=(1/√x)sin(x+1/x) - ∫₁^∞, ∫₀¹",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→∞ ∫_x^{2x} (1/t)cos(1/t²)dt",
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
        summary: 'fₙ→f במ"ש, fₙ רציפה ב-x₀ ⟹ f רציפה ב-x₀',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "lhopital",
        summary: "משפט ערך ממוצע כללי - (f(b)-f(a))/(g(b)-g(a)) = f'(c)/g'(c)",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב",
        topic: "ftoc",
        summary:
          "א. lim x→1 ∫₀^{(lnx)²} e^{t²}dt / sin²(x-1)  ב. lim 1/n Σn²/(n²+k²)",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "riemann_int",
        summary: "א. {f>ε} סופית ⟹ אינטגרבילית  ב. f=1 ב-1/n, x² אחרת",
      },
      {
        id: "ב5",
        chapter: "ב",
        type: "הוכחה",
        topic: "taylor",
        summary: "f(0)=f'(0)=0 - |f(1/n)-f''(0)/(2n²)| < 1/n²; Σf(1/n) בהחלט",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫₁^∞ xᵅ sin(xᵝ)dx - תנאים",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f:[0,∞)→[0,∞) רציפה, ∫₁^∞ f מתכנס ⟹ ?",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫_{π/6}^{π/4} cos³t/sin⁵t dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: 'טור טיילור מ"ש ל-f ⟹ f קבועה/אנליטית/פולינום?',
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "bv",
        summary: "f השתנות חסומה על [0,1] - הפרש מונוטוניות",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ עם R∈(0,∞), aₙ≠0 - תכונות",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "countable_sums",
        summary: "פונקצית רימן - ∫=0, Σ f(x) ב-[0,1]?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ, Σbₙ מתכנסים - תכונות Σaₙbₙ",
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
        summary: "lim x→0 (ln(1+x²)-(a+bx+cx²))/x² = 0 ⟹ ?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→∞ ∫_x^{2x} (1/t)cos(1/t)dt",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫₀^{π/4} sin³(t)/cos⁵(t)dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "(aₙ) אי-שלילית, limsup(naₙ)=2021 - ?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "bv",
        summary: "f השתנות חסומה על [0,1]",
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
        summary: "א. מונוטונית אינט׳  ב. רציפה אינט׳",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "bv",
        summary: "א. מונוטונית ⟹ השתנות חסומה  ב. השתנות חסומה ⟹ הפרש 2 מונ׳",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "taylor",
        summary:
          "א. ln(3/4) בדיוק 1/5  ב. aₙ=1/n Σf'(k/n)/f(k/n) - מתכנסת, ערך",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "הוכחה",
        topic: "series_alt",
        summary:
          "א. Σ(-1)^(n+1)/√n מתכנס ל-L>0  ב. סידור עם סכומים שליליים לאפס?",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫₀¹ xᵅ sin(xᵝ)dx - תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f רציפה ℝ, ∫_{-∞}^∞ f מתכנס ⟹ lim f=0? lim∫₋ⁿⁿ=lim∫₋ₙ^{2n}?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫₀^{π/4} sin³t/cos⁵t dt",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→∞ ∫_x^{2x} sin(1/t)cos(1/t)dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f,g גזירות אינסוף - אותו טור טיילור ⟹ f=g? חסומה ⟹ אנליטית?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary: "(aₙ) אוסף גבולות חלקיים A - תכונות",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'fₙ רציפות נקודתית ל-f - אי-התכנסות מ"ש - תנאים שקולים',
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ R∈(0,∞) - Σaₙ·2^{-√n}Rⁿ, Σaₙn!Rⁿ",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ - רדיוסים של טורים נלווים",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ, Σbₙ מתכנסים - Σaₙbₙ, Σ(aₙ±bₙ) בהחלט/בתנאי",
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
        summary: "f אינט׳ רימן, g רציפה - g∘f אינט׳ רימן",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "bv",
        summary: "א. מונוטונית ⟹ השתנות חסומה  ב. השתנות חסומה = הפרש 2 מונ׳",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "הוכחה",
        topic: "improper_int",
        summary:
          "א. f'(x)≤-2/x³, f(1)=1 - ∫₀^∞ f מתכנס  ב. f>0 אינטגרבילית - ∫>0",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "taylor",
        summary: "א. טור 1/√(1-x)  ב. טור arcsin(x) מתכנס ל-arcsin",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫₀^∞ xᵅ sin(xᵝ)dx - תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "f:[0,1]→ℝ רציפה ב-(0,1], lim x→0 f=0 - אינטגרבילית?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫₀^{π/2} cos³(t)dt",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→∞ ∫_x^{x²} sin(1/t)cos(1/t)dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "Σ sin(πn/4)/√n - מתבדר/בתנאי/מוחלט",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "טור בתנאי - תכונות (Sₙ) של סידורים",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f=e^{-x^{-2}} ל-x>0 - טור טיילור סביב 0",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f רציפה - ∫sin·f, תנאים",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "פונקצית רימן f, דיריכלה D - Df, f(√2 x), D(√2 x)",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_product",
        summary: "Σaₙ→A, Σbₙ→B - מכפלת קושי, תכונות",
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
        summary: 'fₙ→f במ"ש, fₙ רציפה ב-x₀ ⟹ f רציפה ב-x₀',
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "series_basic",
        summary: "aₙ מונ׳ יורדת לאפס, Σbₙ חסום ⟹ Σaₙbₙ מתכנס (דיריכלה/אבל)",
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. כל t: ∫₁^∞ (e^{1/x}-t(sin+cos)(1/x))dx מתכנס  ב. ∫₁^∞ (e^{1/2x}-(sin+cos))dx מתבדר",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "func_series",
        summary: 'א. Σ2^{-nx} מ"ש על [a,b]⊆(0,∞)  ב. חישוב Σn·2^{-2n}',
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "∫₁^∞ xᵅ cos(xᵝ)dx - תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f מונוטונית, ∫₀^∞ f מתכנס ⟹ ∫f(x²)? Σf(n²)? lim∫_n^{n²}?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫₀^{π/2} cos⁵(t)dt",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→0 (1-cos(x³))^{-1} ∫_{x³}^{x²} sin(t²)cos(t³)dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "Σaₙ חיובי בתנאי - תכונות סדרות סכומים של סידורים",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "f גזירה 3 ב-0, f(0)=f'(0)=0 - Σf(1/n) vs Σf'(1/n)",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'fₙ גזירות פעמיים, מ"ש ל-f - f אינט׳? ∫fₙ→∫f? f גזירה?',
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "riemann_int",
        summary: "f מונוטונית - אינט׳? F(x)=∫f קדומה?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'fₙ→f, gₙ→g מ"ש ⟹ fₙ∘gₙ→f∘g מ"ש? נקודתית?',
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "taylor",
        summary: "f גזירה אינסוף ב-x₀, R ההתכנסות של טור טיילור > 0 - תכונות",
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
        summary: "∫₀¹ xᵅ cos(xᵝ)dx - תנאים",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f רציפה ∫_{-∞}^∞ f מתכנס - תכונות לאפס",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "∫₀¹ (2t²+3t⁴)/(1+t²)dt",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "lim x→0 x^{-3/2} ∫₀^√x sin(t²)cos(t)dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "Σaₙ בתנאי, גבול שלילי - תכונות (Sₙ) של סידורים",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_pos",
        summary: "f גזירה 3, f(0)=f'(0)=0 - Σf(1/n), Σf'(1/n)",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_sequences",
        summary: 'fₙ גזירות פעמיים מ"ש ל-f - תכונות',
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_alt",
        summary: "Σ(-1)ⁿ arctan(n)/ln(1+n)",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary: "Σaₙxⁿ R∈(0,∞) - Σaₙ/n!Rⁿ, Σaₙ2^√n Rⁿ, Σxⁿ/aₙ, Σ√|aₙ|xⁿ",
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ, Σbₙ מתכנסים - Σaₙbₙ בהחלט, Σ(aₙ+bₙ), Σ(aₙ-bₙ) בתנאי",
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
          "f אינטגרבילית רימן ⟺ לכל ε>0 קיים δ>0 כך ששני סכומי רימן עם חלוקות <δ מקיימים |S₁-S₂|<ε",
      },
      {
        id: "א2",
        chapter: "א",
        type: "הוכחה",
        topic: "func_sequences",
        summary: 'fₙ→f במ"ש, כל fₙ רציפה ב-x₀ ⟹ f רציפה ב-x₀ (חזרה פעם 5!)',
      },
      {
        id: "ב3",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "series_pos",
        summary:
          "א. aₙ↘ אי-שלילית, Σaₙ מתכנס ⟹ Σaₙ/nᵖ מתכנס לכל p∈ℕ  ב. Σ∛(aₙaₙ₊₁aₙ₊₂) מתכנס",
      },
      {
        id: "ב4",
        chapter: "ב",
        type: "חישוב+הוכחה",
        topic: "improper_int",
        summary:
          "א. f(x)=1/x-1/sin(x) אינטגרבילית רימן ב-[0,1]  ב. ∫₁^∞ (1/x-sin(1/x))dx מתכנס",
      },
      {
        id: "ג5",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary:
          "∫₀^∞ xᵅcos(xᵝ)dx — מתכנס α>-1? מתבדר α≥-1? מתכנס α>-|β|-1? מתבדר α≤-|β|-1?",
      },
      {
        id: "ג6",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f∈R[a,b] ∀[a,b], ∫₁^∞ f מתכנס → ∫f·sin? Σf(nᵖ)? ∫fᵖ? ∫f(x²)?",
      },
      {
        id: "ג7",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "ערכו של ∫₀^π sin⁵(t)dt",
      },
      {
        id: "ג8",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "ftoc",
        summary: "ערכו של lim x↓0 x^{-3/2} ∫₀^√x sin(t)cos(t²)dt",
      },
      {
        id: "ג9",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "countable_sums",
        summary:
          "פונקציית רימן f(p/q)=1/q: אינטגרבילית ∫=0? Σ f סופי? אינסופי? Σf³ סופי?",
      },
      {
        id: "ג10",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "series_basic",
        summary: "Σaₙ - בהחלט/בתנאי ⟹ Σaₙ/n מתכנס? liminf≥0? limsup<∞?",
      },
      {
        id: "ג11",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "limsup",
        summary:
          "limsup≤M ⟹ ∃N∀n>N aₙ≤M? ∃N∀n>N aₙ<M ⟹ limsup<M? limsup>M ⟹ ∀N∃n>N aₙ>M? ∀N∃n>N aₙ>M ⟹ limsup≥M?",
      },
      {
        id: "ג12",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "power_series",
        summary:
          "Σaₙxⁿ, R>0 - ב-[-R,R] ⟹ Σ(n+1)aₙ₊₁xⁿ? ⟹ Σ|aₙ|Rⁿ? ⟹ Σaₙx^{n+1}/(n+1)? ΣaₙRⁿ ⟹ בהחלט ב-(-R,R)?",
      },
      {
        id: "ג13",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "func_series",
        summary:
          'Σuₙ(x) נגזרות רציפות על [a,b]: Σuₙ(a) מתכנס + Σu\'ₙ מ"ש ⟹ Σuₙ מ"ש? ועוד',
      },
      {
        id: "ג14",
        chapter: "ג",
        type: "אמת/שקר",
        topic: "improper_int",
        summary: "f(x)=√(1/x)·sin(x+1/x): ∫₁^∞ מתכנס? ∫₀¹ מתכנס? מתבדרים?",
      },
    ],
  },
];

const TOPIC_HE = {
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
  multivariable: 'חדו"א רב-משתני (לא בתכנית!)',
  lhopital: "כלל לופיטל / גבולות",
};

const COLORS = [
  "#c1440e",
  "#2b4162",
  "#3a5a40",
  "#d4a017",
  "#5a3a6b",
  "#9a3232",
  "#7a5c3e",
  "#2a6b6b",
];
const c = {
  background: "#f4f1ea",
  minHeight: "100vh",
  fontFamily: "Heebo,system-ui,sans-serif",
  direction: "rtl",
  padding: 20,
};
const card = {
  background: "white",
  border: "1px solid #d4cfbf",
  padding: 20,
  boxShadow: "2px 2px 0 #1a1a1a",
  marginBottom: 16,
};
const inp = {
  fontFamily: "inherit",
  fontSize: 13,
  border: "1px solid #d4cfbf",
  padding: "6px 10px",
  background: "#f4f1ea",
  color: "#1a1a1a",
  outline: "none",
};

function Bar({ label, val, max, color, pct, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 8,
        alignItems: "center",
        padding: "7px 0",
        borderBottom: "1px dotted #d4cfbf",
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (onClick) e.currentTarget.style.background = "#fef4ee";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>
          {label}
        </div>
        <div style={{ background: "#ece7dc", height: 20 }}>
          <div
            style={{
              background: color,
              height: "100%",
              width: `${(val / max) * 100}%`,
              display: "flex",
              alignItems: "center",
              paddingRight: 6,
              color: color === "#d4a017" ? "#1a1a1a" : "white",
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "monospace",
              justifyContent: "flex-end",
            }}
          >
            {val}
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "monospace", fontSize: 11, color: "#6d6a5e" }}>
        {pct}%
      </div>
    </div>
  );
}

function Chip({ children, kind }) {
  const S = {
    א: { background: "#fef1e6", color: "#c1440e", border: "1px solid #c1440e" },
    ב: { background: "#e8eef6", color: "#2b4162", border: "1px solid #2b4162" },
    ג: { background: "#eaf0e6", color: "#3a5a40", border: "1px solid #3a5a40" },
    proof: {
      background: "#1a1a1a",
      color: "#f4f1ea",
      border: "1px solid #1a1a1a",
    },
    ts: {
      background: "#d4a017",
      color: "#1a1a1a",
      border: "1px solid #d4a017",
    },
    calc: {
      background: "#5a3a6b",
      color: "white",
      border: "1px solid #5a3a6b",
    },
    mixed: {
      background: "#2b4162",
      color: "white",
      border: "1px solid #2b4162",
    },
    hot: { background: "#c1440e", color: "white", border: "1px solid #c1440e" },
  };
  return (
    <span
      style={{
        ...(S[kind] || {
          background: "#f4f1ea",
          color: "#1a1a1a",
          border: "1px solid #d4cfbf",
        }),
        padding: "2px 7px",
        fontSize: 10,
        fontFamily: "monospace",
        fontWeight: 700,
        display: "inline-block",
        marginLeft: 4,
      }}
    >
      {children}
    </span>
  );
}

function tc(t) {
  return t === "הוכחה"
    ? "proof"
    : t === "אמת/שקר"
      ? "ts"
      : t === "חישוב"
        ? "calc"
        : "mixed";
}

export default function App() {
  const [tab, setTab] = useState("overview");
  const [yf, setYf] = useState("");
  const [mf, setMf] = useState("");
  const [sq, setSq] = useState("");
  const [st, setSt] = useState("");
  const [sch, setSch] = useState("");
  const [sty, setSty] = useState("");

  const stats = useMemo(() => {
    const tc = {},
      cc = { א: 0, ב: 0, ג: 0 },
      tyc = {},
      yt = {};
    let tot = 0;
    EXAMS.forEach((ex) => {
      yt[ex.code] = {};
      ex.questions.forEach((q) => {
        tot++;
        tc[q.topic] = (tc[q.topic] || 0) + 1;
        cc[q.chapter]++;
        tyc[q.type] = (tyc[q.type] || 0) + 1;
        yt[ex.code][q.topic] = (yt[ex.code][q.topic] || 0) + 1;
      });
    });
    return { tc, cc, tyc, yt, tot };
  }, []);

  const sorted = useMemo(
    () => Object.entries(stats.tc).sort((a, b) => b[1] - a[1]),
    [stats],
  );
  const years = useMemo(
    () => [...new Set(EXAMS.map((e) => e.year))].sort(),
    [],
  );
  const mx = sorted[0]?.[1] || 1;

  const fex = useMemo(
    () =>
      EXAMS.filter((ex) => {
        if (yf && String(ex.year) !== yf) return false;
        if (mf && ex.moed !== mf) return false;
        return true;
      }),
    [yf, mf],
  );

  const sr = useMemo(() => {
    const r = [];
    const q = sq.toLowerCase();
    EXAMS.forEach((ex) =>
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
      }),
    );
    return r;
  }, [sq, st, sch, sty]);

  const TABS = [
    { id: "overview", l: "📊 סקירה" },
    { id: "heatmap", l: "🔥 מפת חום" },
    { id: "exams", l: "📜 מבחנים" },
    { id: "search", l: "🔍 חיפוש" },
    { id: "insights", l: "💡 תובנות" },
  ];

  return (
    <div style={c}>
      {/* HEADER */}
      <div
        style={{
          borderTop: "4px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          paddingBottom: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "#6d6a5e",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Prof. Yoram Last · 80132 · {EXAMS.length} מבחנים
        </div>
        <div
          style={{
            fontFamily: "Georgia,serif",
            fontWeight: 900,
            fontSize: 42,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          מבחני{" "}
          <span style={{ color: "#c1440e", fontStyle: "italic" }}>לסט</span> —
          סטטיסטיקה מלאה
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 14,
            paddingTop: 12,
            borderTop: "1px dashed #d4cfbf",
            flexWrap: "wrap",
          }}
        >
          {[
            ["17", "מבחנים"],
            ["198", "שאלות"],
            ["18", "נושאים"],
            ["2006→2026", "טווח"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "Georgia,serif",
                  fontWeight: 900,
                  fontSize: 26,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: "#6d6a5e",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMAT BANNER */}
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

      {/* TABS */}
      <div
        style={{
          display: "flex",
          gap: 2,
          borderBottom: "2px solid #1a1a1a",
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "9px 15px",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 13,
              background: tab === t.id ? "#ece7dc" : "transparent",
              border: "none",
              cursor: "pointer",
              color: tab === t.id ? "#c1440e" : "#6d6a5e",
              borderBottom:
                tab === t.id ? "3px solid #c1440e" : "3px solid transparent",
              marginBottom: -2,
            }}
          >
            {t.l}
          </button>
        ))}
      </div>

      {/* OVERVIEW */}
      {tab === "overview" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: 20,
          }}
        >
          <div style={card}>
            <div
              style={{
                fontFamily: "Georgia,serif",
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1px solid #d4cfbf",
              }}
            >
              דירוג נושאים{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#6d6a5e",
                }}
              >
                ↓ לחץ לחיפוש
              </span>
            </div>
            {sorted.map(([k, v], i) => {
              let ew = 0;
              EXAMS.forEach((ex) => {
                if (stats.yt[ex.code][k]) ew++;
              });
              return (
                <Bar
                  key={k}
                  label={
                    <span>
                      {TOPIC_HE[k] || k}
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: 9,
                          color: "#6d6a5e",
                          marginRight: 6,
                        }}
                      >
                        {" "}
                        {ew}/{EXAMS.length}
                      </span>
                    </span>
                  }
                  val={v}
                  max={mx}
                  color={COLORS[i % COLORS.length]}
                  pct={Math.round((v / stats.tot) * 100)}
                  onClick={() => {
                    setTab("search");
                    setSt(k);
                  }}
                />
              );
            })}
          </div>
          <div>
            <div style={card}>
              <div
                style={{
                  fontFamily: "Georgia,serif",
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: "1px solid #d4cfbf",
                }}
              >
                פרקים
              </div>
              {[
                ["א", "פרק א — הוכחות", "#c1440e"],
                ["ב", "פרק ב — חישוב+הוכחה", "#2b4162"],
                ["ג", "פרק ג — אמת/שקר", "#3a5a40"],
              ].map(([ch, l, col]) => (
                <Bar
                  key={ch}
                  label={l}
                  val={stats.cc[ch]}
                  max={Math.max(...Object.values(stats.cc))}
                  color={col}
                  pct={Math.round((stats.cc[ch] / stats.tot) * 100)}
                />
              ))}
            </div>
            <div style={card}>
              <div
                style={{
                  fontFamily: "Georgia,serif",
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: "1px solid #d4cfbf",
                }}
              >
                סוג שאלה
              </div>
              {Object.entries(stats.tyc)
                .sort((a, b) => b[1] - a[1])
                .map(([k, v], i) => (
                  <Bar
                    key={k}
                    label={k}
                    val={v}
                    max={Object.values(stats.tyc)[0]}
                    color={COLORS[i]}
                    pct={Math.round((v / stats.tot) * 100)}
                  />
                ))}
            </div>
          </div>
        </div>
      )}

      {/* HEATMAP */}
      {tab === "heatmap" && (
        <div style={card}>
          <div
            style={{
              fontFamily: "Georgia,serif",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 4,
              paddingBottom: 8,
              borderBottom: "1px solid #d4cfbf",
            }}
          >
            מפת חום — נושאים × מבחנים
          </div>
          <div style={{ fontSize: 12, color: "#6d6a5e", marginBottom: 12 }}>
            כהה יותר = יותר שאלות. לחץ על תא לחיפוש. עמודת 2026 מסומנת.
          </div>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                borderCollapse: "collapse",
                fontSize: 11,
                minWidth: 1000,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "4px 12px 4px 0",
                      textAlign: "right",
                      fontFamily: "monospace",
                      fontSize: 9,
                      color: "#6d6a5e",
                      minWidth: 200,
                    }}
                  >
                    נושא
                  </th>
                  {EXAMS.map((ex) => (
                    <th
                      key={ex.code}
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        padding: "4px 2px",
                        fontFamily: "monospace",
                        fontSize: 8,
                        color: ex.year === 2026 ? "#c1440e" : "#6d6a5e",
                        fontWeight: ex.year === 2026 ? 700 : 400,
                        minWidth: 34,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ex.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map(([tk]) => (
                  <tr key={tk}>
                    <td
                      style={{
                        padding: "4px 12px 4px 0",
                        textAlign: "right",
                        fontSize: 11,
                        fontWeight: 500,
                        borderLeft: "2px solid #d4cfbf",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {TOPIC_HE[tk] || tk}
                    </td>
                    {EXAMS.map((ex) => {
                      const n = stats.yt[ex.code][tk] || 0;
                      const bg =
                        n === 0
                          ? "#ece7dc"
                          : n === 1
                            ? "#fde9d9"
                            : n === 2
                              ? "#f5c39a"
                              : n === 3
                                ? "#ec965a"
                                : n === 4
                                  ? "#c1440e"
                                  : "#8a2a06";
                      return (
                        <td
                          key={ex.code}
                          onClick={() => {
                            if (n > 0) {
                              setTab("search");
                              setSt(tk);
                            }
                          }}
                          title={
                            n ? `${TOPIC_HE[tk]} · ${ex.code} · ${n} שאלות` : ""
                          }
                          style={{
                            background: bg,
                            color: n > 2 ? "white" : "#c1440e",
                            textAlign: "center",
                            fontFamily: "monospace",
                            fontWeight: 700,
                            padding: "4px 2px",
                            cursor: n > 0 ? "pointer" : "default",
                            border:
                              ex.year === 2026
                                ? "2px solid #c1440e"
                                : "1px solid #f4f1ea",
                            minWidth: 32,
                            height: 28,
                          }}
                        >
                          {n || ""}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 6,
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: 10,
              color: "#6d6a5e",
            }}
          >
            פחות{" "}
            {[
              "#ece7dc",
              "#fde9d9",
              "#f5c39a",
              "#ec965a",
              "#c1440e",
              "#8a2a06",
            ].map((c) => (
              <span
                key={c}
                style={{
                  width: 18,
                  height: 18,
                  background: c,
                  display: "inline-block",
                }}
              />
            ))}{" "}
            יותר
          </div>
        </div>
      )}

      {/* EXAMS */}
      {tab === "exams" && (
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
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: "#6d6a5e",
                textTransform: "uppercase",
              }}
            >
              סנן:
            </span>
            <select
              value={yf}
              onChange={(e) => setYf(e.target.value)}
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
              value={mf}
              onChange={(e) => setMf(e.target.value)}
              style={inp}
            >
              <option value="">כל המועדים</option>
              <option value="א">מועד א</option>
              <option value="ב">מועד ב</option>
            </select>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                color: "#6d6a5e",
              }}
            >
              {fex.length} מבחנים ·{" "}
              {fex.reduce((s, e) => s + e.questions.length, 0)} שאלות
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))",
              gap: 18,
            }}
          >
            {fex.map((ex) => (
              <div
                key={ex.code}
                style={{
                  ...card,
                  border:
                    ex.year === 2026
                      ? "2px solid #c1440e"
                      : "1px solid #1a1a1a",
                  background: ex.year === 2026 ? "#fef8f3" : "white",
                  boxShadow: "3px 3px 0 #1a1a1a",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Georgia,serif",
                      fontWeight: 900,
                      fontSize: 22,
                    }}
                  >
                    {ex.code}
                  </div>
                  {ex.year === 2026 && <Chip kind="hot">המבחן שלך!</Chip>}
                </div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#6d6a5e",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {ex.date} · {ex.chapter_structure} · {ex.questions.length}{" "}
                  שאלות
                </div>
                {ex.questions.map((q) => (
                  <div
                    key={q.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 8,
                      padding: "7px 0",
                      borderBottom: "1px dotted #d4cfbf",
                      alignItems: "start",
                      fontSize: 12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: 11,
                        background: "#ece7dc",
                        padding: "2px 4px",
                        textAlign: "center",
                        border: "1px solid #d4cfbf",
                      }}
                    >
                      {q.id}
                    </span>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: 3,
                          flexWrap: "wrap",
                          marginBottom: 4,
                        }}
                      >
                        <Chip
                          kind={
                            q.chapter === "א"
                              ? "א"
                              : q.chapter === "ב"
                                ? "ב"
                                : "ג"
                          }
                        >
                          פרק {q.chapter}
                        </Chip>
                        <Chip kind={tc(q.type)}>{q.type}</Chip>
                        <span
                          onClick={() => {
                            setTab("search");
                            setSt(q.topic);
                          }}
                          style={{
                            fontFamily: "monospace",
                            fontSize: 9,
                            color: "#2b4162",
                            border: "1px dashed #2b4162",
                            padding: "2px 6px",
                            cursor: "pointer",
                          }}
                        >
                          {TOPIC_HE[q.topic] || q.topic}
                        </span>
                      </div>
                      <div style={{ lineHeight: 1.4 }}>{q.summary}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEARCH */}
      {tab === "search" && (
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
            <select
              value={st}
              onChange={(e) => setSt(e.target.value)}
              style={inp}
            >
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
              <option value="הוכחה">הוכחה</option>
              <option value="אמת/שקר">אמת/שקר</option>
              <option value="חישוב">חישוב</option>
              <option value="חישוב+הוכחה">חישוב+הוכחה</option>
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
            {(sq || st || sch || sty) && (
              <button
                onClick={() => {
                  setSq("");
                  setSt("");
                  setSch("");
                  setSty("");
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
                fontFamily: "Georgia,serif",
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
                  gridTemplateColumns: "110px 55px 1fr",
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
                  <span
                    style={{ fontWeight: 400, fontSize: 10, color: "#6d6a5e" }}
                  >
                    {r.ex.year} · {r.q.id}
                  </span>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <Chip
                    kind={
                      r.q.chapter === "א"
                        ? "א"
                        : r.q.chapter === "ב"
                          ? "ב"
                          : "ג"
                    }
                  >
                    פ{r.q.chapter}
                  </Chip>
                  <Chip kind={tc(r.q.type)}>{r.q.type.slice(0, 4)}</Chip>
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
      )}

      {/* INSIGHTS */}
      {tab === "insights" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: 20,
          }}
        >
          <div style={card}>
            <div
              style={{
                fontFamily: "Georgia,serif",
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1px solid #d4cfbf",
              }}
            >
              🔥 חובה ללמוד{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#6d6a5e",
                }}
              >
                Top נושאים
              </span>
            </div>
            {sorted.slice(0, 5).map(([k, v]) => {
              let ew = 0;
              EXAMS.forEach((ex) => {
                if (stats.yt[ex.code][k]) ew++;
              });
              return (
                <div
                  key={k}
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px dotted #d4cfbf",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      background: "#1a1a1a",
                      color: "#f4f1ea",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: 10,
                      padding: "1px 6px",
                      marginLeft: 6,
                    }}
                  >
                    {v}
                  </span>
                  <strong
                    style={{ color: "#c1440e", fontFamily: "Georgia,serif" }}
                  >
                    {TOPIC_HE[k]}
                  </strong>
                  <div style={{ color: "#6d6a5e", fontSize: 11 }}>
                    ב-{ew}/{EXAMS.length} מבחנים (
                    {Math.round((ew / EXAMS.length) * 100)}%)
                  </div>
                </div>
              );
            })}
          </div>
          <div style={card}>
            <div
              style={{
                fontFamily: "Georgia,serif",
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1px solid #d4cfbf",
              }}
            >
              ⚠️ מלכודות חוזרות{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#6d6a5e",
                }}
              >
                כמעט זהות
              </span>
            </div>
            {[
              {
                t: 'fₙ→f במ"ש ⟹ f רציפה',
                n: "חזר 5 פעמים כולל 2026 — חובה מוחלטת בפרק א׳",
              },
              {
                t: "∫xᵅ sin/cos(xᵝ)dx",
                n: "8 פעמים! α>-|β|-1 מתכנס — לדעת בעל פה",
              },
              {
                t: "limsup ≤M ⟹ ∃N∀n>N aₙ≤M",
                n: "2018, 2019, 2021, 2026 — אותה שאלה",
              },
              {
                t: "פונקציית רימן f(p/q)=1/q",
                n: "2017, 2018, 2022, 2026 — תמיד אינטגרבילית",
              },
              {
                t: "Σ(n+1)aₙ₊₁xⁿ, ΣaₙRⁿ עם R>0",
                n: "2018, 2021, 2022, 2023, 2026 — כמעט זהה",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px dotted #d4cfbf",
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: "#c1440e", display: "block" }}>
                  ⚠️ {item.t}
                </strong>
                <span style={{ color: "#6d6a5e", fontSize: 11 }}>{item.n}</span>
              </div>
            ))}
          </div>
          <div style={card}>
            <div
              style={{
                fontFamily: "Georgia,serif",
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1px solid #d4cfbf",
              }}
            >
              📈 טרנד 2021–2026
            </div>
            {(() => {
              const r = {};
              let tot = 0;
              EXAMS.filter((e) => e.year >= 2021).forEach((ex) =>
                ex.questions.forEach((q) => {
                  r[q.topic] = (r[q.topic] || 0) + 1;
                  tot++;
                }),
              );
              return Object.entries(r)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px dotted #d4cfbf",
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        background: "#1a1a1a",
                        color: "#f4f1ea",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: 10,
                        padding: "1px 6px",
                        marginLeft: 6,
                      }}
                    >
                      {v}
                    </span>
                    <strong style={{ fontFamily: "Georgia,serif" }}>
                      {TOPIC_HE[k]}
                    </strong>
                    <span style={{ color: "#6d6a5e", fontSize: 11 }}>
                      {" "}
                      — {Math.round((v / tot) * 100)}%
                    </span>
                  </div>
                ));
            })()}
          </div>
          <div style={card}>
            <div
              style={{
                fontFamily: "Georgia,serif",
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1px solid #d4cfbf",
              }}
            >
              ❄️ פחות שכיח{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 400,
                  color: "#6d6a5e",
                }}
              >
                ≤3 שאלות
              </span>
            </div>
            {sorted
              .filter(([, v]) => v <= 3)
              .map(([k, v]) => {
                let ew = 0;
                EXAMS.forEach((ex) => {
                  if (stats.yt[ex.code][k]) ew++;
                });
                return (
                  <div
                    key={k}
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px dotted #d4cfbf",
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        background: "#ece7dc",
                        color: "#6d6a5e",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: 10,
                        padding: "1px 6px",
                        marginLeft: 6,
                      }}
                    >
                      {v}
                    </span>
                    <strong style={{ fontFamily: "Georgia,serif" }}>
                      {TOPIC_HE[k]}
                    </strong>
                    <div style={{ color: "#6d6a5e", fontSize: 11 }}>
                      ב-{ew} מבחנים בלבד
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: 28,
          paddingTop: 14,
          borderTop: "2px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          fontFamily: "monospace",
          fontSize: 9,
          color: "#6d6a5e",
          textTransform: "uppercase",
        }}
      >
        <span>סיווג ידני · 17 מבחנים · 198 שאלות</span>
        <span>כולל מועד א׳ תשפ״ו · 2006–2026 · v2.0</span>
      </div>
    </div>
  );
}

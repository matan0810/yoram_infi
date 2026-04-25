import katex from "katex";

export default function MathText({ children }) {
  if (!children) return null;
  const parts = String(children).split(/(\$[^$]+\$)/g);
  return (
    <span dir="ltr" style={{ unicodeBidi: "embed" }}>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          const latex = part.slice(1, -1);
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: false,
              output: "html",
            });
            return (
              <span
                key={i}
                dir="ltr"
                style={{ display: "inline-block", verticalAlign: "middle" }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return <span key={i}>{latex}</span>;
          }
        }
        return (
          <span key={i} dir="rtl" style={{ unicodeBidi: "embed" }}>
            {part}
          </span>
        );
      })}
    </span>
  );
}

import type { ReactNode } from "react";
import { type Theme, useShikiHighlighter } from "react-shiki";

interface ICodeBlock {
  children: ReactNode;
  className?: string;
  theme: Theme;
}

const CodeBlock = ({ children, className, theme }: ICodeBlock) => {
  const code = String(children);
  const language = className?.match(/language-(\w+)/)?.[1];
  const highlightedCode = useShikiHighlighter(code, language, theme, {
    delay: 150,
  });

  return (
    <div className="shiki not-prose relative my-4 [&_pre]:overflow-auto [&_pre]:rounded-lg [&_pre]:px-6 [&_pre]:py-5">
      {/* {language && (
        <span className="absolute top-2 right-1 text-xs tracking-tighter text-gray-400">
          {language}
        </span>
      )} */}
      {highlightedCode}
    </div>
  );
};

export default CodeBlock;

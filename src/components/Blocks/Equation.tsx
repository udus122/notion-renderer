import katex from "katex";
import "katex/dist/katex.min.css";

import type { EquationBlock } from "../../types/notion/blocks/equation.js";

export const Equation: EquationBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-equation">
      <div
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line import/no-named-as-default-member
          __html: katex.renderToString(block.equation.expression, {
            displayMode: true,
            throwOnError: false,
          }),
        }}
      />
    </div>
  );
};

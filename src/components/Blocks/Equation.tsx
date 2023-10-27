// import katex from "katex";

import { BlockMath } from "react-katex";

import type { EquationBlock } from "../../types/notion/blocks/equation.js";

export const Equation: EquationBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-equation">
      <BlockMath math={block.equation.expression} />
      {/* <div
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line import/no-named-as-default-member
          __html: katex.renderToString(block.equation.expression, {
            displayMode: true,
            output: "mathml",
          }),
        }}
      /> */}
    </div>
  );
};

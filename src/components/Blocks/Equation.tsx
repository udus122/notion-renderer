import { InlineMath } from "react-katex";

import type { EquationBlock } from "../../types/notion/blocks/equation.js";

export const Equation: EquationBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-equation">
      <InlineMath math={block.equation.expression} />
    </div>
  );
};

// import { BlockMath } from "react-katex";

import katex from "katex";

import type { EquationBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<EquationBlockObject>;

export const Equation: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_equation">
      {/* <BlockMath math={block.equation.expression} /> */}
      <div
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line import/no-named-as-default-member
          __html: katex.renderToString(block.equation.expression, {
            displayMode: true,
            output: "mathml",
          }),
        }}
      />
    </div>
  );
};

import katex from "katex";

import type { EquationBlockObject } from "../../libs/notion/blocks/equation.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<EquationBlockObject>;

export const Equation: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_equation">
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

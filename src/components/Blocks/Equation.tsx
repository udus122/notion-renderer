import katex from "katex";

import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type EquationBlockObject = EquationBlockObjectResponse & {
  equation: {
    expression: string;
  };
};
type Props = BlockComponentProps<EquationBlockObject>;

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

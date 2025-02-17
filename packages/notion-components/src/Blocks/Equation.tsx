import katex from "katex";

import type { EquationBlock } from "@udus/notion-types";

export const Equation: EquationBlock = ({ block }) => {
  return (
    <div
      id={block.id}
      className="notion-block notion-equation"
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line import/no-named-as-default-member
        __html: katex.renderToString(block.equation.expression, {
          displayMode: true,
          throwOnError: false,
        }),
      }}
    />
  );
};

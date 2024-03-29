import katex from "katex";

import { Annotation } from "./Annotation/Annotation.js";

import type { EquationRichTextItem } from "../../types/notion/richText/equation.js";

export const InlineEquation: EquationRichTextItem = ({
  richText: richTextItem,
}) => (
  <span className="notion-rich-text-type-equation">
    <Annotation richTextItem={richTextItem}>
      <span
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line import/no-named-as-default-member
          __html: katex.renderToString(richTextItem.equation.expression, {
            displayMode: false,
            throwOnError: false,
          }),
        }}
      />
    </Annotation>
  </span>
);

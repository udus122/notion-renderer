import katex from "katex";

import { Annotation } from "./Annotation/Annotation";

import type { EquationRichTextItem } from "@udus/notion-types";

export const InlineEquation: EquationRichTextItem = ({
  richText: richTextItem,
}) => (
  <span className="notion-rich-text-type-equation">
    <Annotation richTextItem={richTextItem}>
      <span
        // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a trusted value
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(richTextItem.equation.expression, {
            displayMode: false,
            throwOnError: false,
          }),
        }}
      />
    </Annotation>
  </span>
);

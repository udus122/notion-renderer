import katex from "katex";

import { Annotations } from "./Annotation/Annotation.js";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { RichTextProps } from "src/types/utils.js";

export type EquationRichTextItem = EquationRichTextItemResponse;

type Props = RichTextProps<EquationRichTextItem>;

export const InlineEquation: React.FC<Props> = ({ richTextItem }) => (
  <span className="notion_rich_text_type_equation">
    <Annotations richTextItem={richTextItem}>
      <span
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line import/no-named-as-default-member
          __html: katex.renderToString(richTextItem.equation.expression, {
            displayMode: false,
            output: "mathml",
          }),
        }}
      />
    </Annotations>
  </span>
);

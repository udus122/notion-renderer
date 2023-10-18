import { InlineMath } from "react-katex";

import { Annotations } from "./Annotations.js";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = {
  richTextItem: EquationRichTextItemResponse;
};

export const InlineEquation: React.FC<Props> = ({ richTextItem }) => (
  <span className="notion_rich_text_type_equation">
    <Annotations richTextItem={richTextItem}>
      <InlineMath math={richTextItem.equation.expression} />
    </Annotations>
  </span>
);

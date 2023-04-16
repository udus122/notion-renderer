import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  richTextItem: EquationRichTextItemResponse;
};

export const InlineEquation: React.FC<Props> = ({ richTextItem }) => (
  <span className="notion_rich_text_type_equation">
    <InlineMath math={richTextItem.equation.expression} />
  </span>
);

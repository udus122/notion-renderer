import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

import { Annotation } from "../Annotation";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  richTextItem: EquationRichTextItemResponse;
};

export const Equation: React.FC<Props> = ({ richTextItem }) => (
  <span className="notion_rich_text_type_equation">
    <Annotation richTextItem={richTextItem}>
      <InlineMath math={richTextItem.equation.expression} />
    </Annotation>
  </span>
);

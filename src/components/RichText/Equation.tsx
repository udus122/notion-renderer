import { InlineMath } from "react-katex";

import { Annotation } from "./Annotation/Annotation.js";

import type { EquationRichTextItem } from "../../types/notion/richText/equation.js";

export const Equation: EquationRichTextItem = ({ richText: richTextItem }) => (
  <span className="notion_rich_text_type_equation">
    <Annotation richTextItem={richTextItem}>
      <InlineMath math={richTextItem.equation.expression} />
    </Annotation>
  </span>
);

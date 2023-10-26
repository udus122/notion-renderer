import katex from "katex";

import { Annotation } from "./Annotation/Annotation.js";

import type { EquationRichTextItem } from "../../types/notion/richText/equation.js";
import type { RichTextProps } from "src/types/notion/common.js";

type Props = Omit<RichTextProps<EquationRichTextItem>, "richTextItemMapper">;

export const InlineEquation: React.FC<Props> = ({ richText: richTextItem }) => (
  <span className="notion_rich_text_type_equation">
    <Annotation richTextItem={richTextItem}>
      <span
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line import/no-named-as-default-member
          __html: katex.renderToString(richTextItem.equation.expression, {
            displayMode: false,
            output: "mathml",
          }),
        }}
      />
    </Annotation>
  </span>
);

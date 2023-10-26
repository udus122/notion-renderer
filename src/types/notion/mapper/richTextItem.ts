import type { EquationRichTextItem } from "../richText/equation.js";
import type { MentionRichTextItem } from "../richText/mention.js";
import type { TextRichTextItem } from "../richText/text.js";

export type RichTextItemMapper = Partial<{
  equation: EquationRichTextItem;
  mention: MentionRichTextItem;
  text: TextRichTextItem;
}>;

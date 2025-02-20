import type { EquationRichTextItem } from "../richText/equation";
import type { MentionRichTextItem } from "../richText/mention";
import type { TextRichTextItem } from "../richText/text";

export type RichTextItemMapper = Partial<{
  equation: EquationRichTextItem;
  mention: MentionRichTextItem;
  text: TextRichTextItem;
}>;

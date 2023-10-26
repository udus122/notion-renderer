import type { EquationRichTextItem } from "./equation.js";
import type { MentionRichTextItem } from "./mention.js";
import type { TextRichTextItem } from "./text.js";

export type RichTextItem =
  | TextRichTextItem
  | EquationRichTextItem
  | MentionRichTextItem;

import type { EquationRichTextItemObject } from "./equation.js";
import type { MentionRichTextItemObject } from "./mention.js";
import type { TextRichTextItemObject } from "./text.js";

export type RichTextItem =
  | TextRichTextItemObject
  | EquationRichTextItemObject
  | MentionRichTextItemObject;

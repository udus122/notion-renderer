import type { EquationRichTextItemObject } from "./equation.js";
import type { MentionRichTextItemObject } from "./mention.js";
import type { TextRichTextItemObject } from "./text.js";
import type { ComponentType } from "react";

export type RichTextItem =
  | TextRichTextItemObject
  | EquationRichTextItemObject
  | MentionRichTextItemObject;

export type RichTextItemProps<T extends RichTextItem = RichTextItem> = {
  richText: T;
};

export type RichTextItemComponent = ComponentType<RichTextItemProps>;

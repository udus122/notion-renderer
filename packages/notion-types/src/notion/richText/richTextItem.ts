import type { EquationRichTextItemObject } from "./equation";
import type { MentionRichTextItemObject } from "./mention";
import type { TextRichTextItemObject } from "./text";
import type { ComponentType } from "react";

export type RichTextItemType =
  | TextRichTextItemObject
  | EquationRichTextItemObject
  | MentionRichTextItemObject;

export type RichTextItemProps<T extends RichTextItemType = RichTextItemType> = {
  richText: T;
};

export type RichTextItemComponent = ComponentType<RichTextItemProps>;

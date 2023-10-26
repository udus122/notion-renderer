import type { RichTextItemProps } from "../common.js";
import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TextRichTextItemObject = TextRichTextItemResponse & {
  id?: string;
};

export type TextRichTextItemProps = RichTextItemProps<TextRichTextItemObject>;

export type TextRichTextItem = ComponentType<TextRichTextItemProps>;

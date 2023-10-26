import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type TextRichTextItem = TextRichTextItemResponse & {
  id?: string;
};

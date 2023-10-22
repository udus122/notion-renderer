import { randomUUID } from "crypto";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type TextRichTextItem = TextRichTextItemResponse & {
  id?: string;
};

export const convertTextRichTextItemResponse = async (
  response: TextRichTextItemResponse
) => {
  return {
    ...response,
    id: randomUUID(),
  };
};

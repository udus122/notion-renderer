import { generateUUID } from "../../utils";

import type { TextRichTextItemObject } from "@udus/notion-types";
import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertTextRichTextItemResponse = (
  response: TextRichTextItemResponse,
): TextRichTextItemObject => {
  return {
    ...response,
    id: generateUUID(),
  };
};

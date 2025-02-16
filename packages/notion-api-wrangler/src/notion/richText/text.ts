import { generateUUID } from "../../utils/utils.js";

import type { TextRichTextItemObject } from "@udus/notion-types";
import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTextRichTextItemResponse = (
  response: TextRichTextItemResponse,
): TextRichTextItemObject => {
  return {
    ...response,
    id: generateUUID(),
  };
};

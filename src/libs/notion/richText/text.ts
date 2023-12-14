import { generateUUID } from "../../utils/utils.js";

import type { TextRichTextItemObject } from "../../../types/notion/richText/text.js";
import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTextRichTextItemResponse = (
  response: TextRichTextItemResponse,
): TextRichTextItemObject => {
  return {
    ...response,
    id: generateUUID(),
  };
};

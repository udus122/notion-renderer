import { generateUUID } from "../../utils/utils.js";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTextRichTextItemResponse = (
  response: TextRichTextItemResponse,
) => {
  return {
    ...response,
    id: generateUUID(),
  };
};

import { convertEquationRichTextItemResponse } from "./equation.js";
import { convertMentionRichTextItemResponse } from "./mention.js";
import { convertTextRichTextItemResponse } from "./text.js";

import type { RichTextItemType } from "../../../types/notion/richText/richTextItem.js";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRichTextItem = async (
  response: RichTextItemResponse,
): Promise<RichTextItemType> => {
  switch (response.type) {
    case "text": {
      return convertTextRichTextItemResponse(response);
    }
    case "equation": {
      return await convertEquationRichTextItemResponse(response);
    }
    case "mention": {
      return await convertMentionRichTextItemResponse(response);
    }
    default: {
      return response;
    }
  }
};

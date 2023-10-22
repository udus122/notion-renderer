import {
  convertEquationRichTextItemResponse,
  type EquationRichTextItem,
} from "./equation.js";
import {
  convertMentionRichTextItemResponse,
  type MentionRichTextItem,
} from "./mention.js";
import {
  convertTextRichTextItemResponse,
  type TextRichTextItem,
} from "./text.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type RichTextItem =
  | TextRichTextItem
  | EquationRichTextItem
  | MentionRichTextItem;

export const convertResponseToRichTextItem = async (
  response: RichTextItemResponse
) => {
  switch (response.type) {
    case "text": {
      return await convertTextRichTextItemResponse(response);
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

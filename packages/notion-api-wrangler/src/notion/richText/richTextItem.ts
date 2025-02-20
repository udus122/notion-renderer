import { convertEquationRichTextItemResponse } from "./equation";
import { convertMentionRichTextItemResponse } from "./mention";
import { convertTextRichTextItemResponse } from "./text";

import type { RichTextItemType } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToRichTextItem = async (
  response: RichTextItemResponse,
  client: Client,
): Promise<RichTextItemType> => {
  switch (response.type) {
    case "text": {
      return convertTextRichTextItemResponse(response);
    }
    case "equation": {
      return await convertEquationRichTextItemResponse(response);
    }
    case "mention": {
      return await convertMentionRichTextItemResponse(response, client);
    }
    default: {
      return response;
    }
  }
};

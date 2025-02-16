import { convertResponseToRichTextItem } from "./richTextItem.js";

import type { RichTextType } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRichText = async (
  response: Array<RichTextItemResponse>,
  client: Client,
): Promise<RichTextType> => {
  return (await Promise.all(
    response.map(async (item) => {
      return await convertResponseToRichTextItem(item, client);
    }),
  )) satisfies RichTextType;
};

import { convertResponseToRichTextItem } from "./richTextItem.js";

import type { RichTextItem } from "../../../types/notion.js";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRichText = async (
  response: Array<RichTextItemResponse>
) => {
  return (await Promise.all(
    response.map(async (item) => {
      return await convertResponseToRichTextItem(item);
    })
  )) satisfies Array<RichTextItem>;
};

import { convertResponseToRichTextItem } from "./richTextItem.js";

import type { RichText } from "../../../types/notion/richText/richText.js";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRichText = async (
  response: Array<RichTextItemResponse>,
): Promise<RichText> => {
  return (await Promise.all(
    response.map(async (item) => {
      return await convertResponseToRichTextItem(item);
    }),
  )) satisfies RichText;
};

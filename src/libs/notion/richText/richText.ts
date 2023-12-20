import { convertResponseToRichTextItem } from "./richTextItem.js";

import type { RichTextType } from "../../../types/notion/richText/richText.js";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRichText = async (
  response: Array<RichTextItemResponse>,
): Promise<RichTextType> => {
  return (await Promise.all(
    response.map(async (item) => {
      return await convertResponseToRichTextItem(item);
    }),
  )) satisfies RichTextType;
};

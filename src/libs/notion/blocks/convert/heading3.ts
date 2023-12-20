import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { Heading3BlockObject } from "../../../../types/notion/block/heading3.js";
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertHeading3ResponseToBlock = async (
  block: Heading3BlockObjectResponse,
): Promise<Heading3BlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      return {
        ...block,
        heading_3: {
          ...block.heading_3,
          rich_text: await convertResponseToRichText(block.heading_3.rich_text),
          children: data,
        },
      } satisfies Heading3BlockObject;
    }
  }

  return {
    ...block,
    heading_3: {
      ...block.heading_3,
      rich_text: await convertResponseToRichText(block.heading_3.rich_text),
    },
  } satisfies Heading3BlockObject;
};

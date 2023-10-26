import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { Heading2BlockObject } from "../../../types/notion.js";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertHeading2ResponseToBlock = async (
  block: Heading2BlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      heading_2: {
        ...block.heading_2,
        rich_text: await convertResponseToRichText(block.heading_2.rich_text),
        children,
      },
    } satisfies Heading2BlockObject;
  }
  return {
    ...block,
    heading_2: {
      ...block.heading_2,
      rich_text: await convertResponseToRichText(block.heading_2.rich_text),
    },
  } satisfies Heading2BlockObject;
};

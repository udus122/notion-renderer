import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { BlockObject } from "./blocks.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type Heading1BlockObject = Heading1BlockObjectResponse & {
  heading_1: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};

export const convertHeading1ResponseToBlock = async (
  block: Heading1BlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      heading_1: {
        ...block.heading_1,
        rich_text: await convertResponseToRichText(block.heading_1.rich_text),
        children,
      },
    } satisfies Heading1BlockObject;
  }
  return {
    ...block,
    heading_1: {
      ...block.heading_1,
      rich_text: await convertResponseToRichText(block.heading_1.rich_text),
    },
  } satisfies Heading1BlockObject;
};

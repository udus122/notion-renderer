import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockObject } from "src/index.js";

export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};

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

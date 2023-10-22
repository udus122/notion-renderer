import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockObject } from "src/index.js";

export type Heading3BlockObject = Heading3BlockObjectResponse & {
  heading_3: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};

export const convertHeading3ResponseToBlock = async (
  block: Heading3BlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      heading_3: {
        ...block.heading_3,
        rich_text: await convertResponseToRichText(block.heading_3.rich_text),
        children,
      },
    } satisfies Heading3BlockObject;
  }
  return {
    ...block,
    heading_3: {
      ...block.heading_3,
      rich_text: await convertResponseToRichText(block.heading_3.rich_text),
    },
  } satisfies Heading3BlockObject;
};

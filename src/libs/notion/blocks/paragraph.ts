import { fetchBlocks } from "./blocks.js";

import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ParagraphBlockObject } from "src/components/Blocks/Paragraph.js";

export const convertParagraphResponseToBlock = async (
  block: ParagraphBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      paragraph: {
        ...block.paragraph,
        children,
      },
    } satisfies ParagraphBlockObject;
  }
  return {
    ...block,
  } satisfies ParagraphBlockObject;
};

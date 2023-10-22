import { fetchBlocks } from "./blocks.js";

import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Heading1BlockObject } from "src/components/Blocks/Heading1.js";

export const convertHeading1ResponseToBlock = async (
  block: Heading1BlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      heading_1: {
        ...block.heading_1,
        children,
      },
    } satisfies Heading1BlockObject;
  }
  return {
    ...block,
  } satisfies Heading1BlockObject;
};

import { fetchBlocks } from "./blocks.js";

import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Heading3BlockObject } from "src/components/Blocks/Heading3.js";

export const convertHeading3ResponseToBlock = async (
  block: Heading3BlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      heading_3: {
        ...block.heading_3,
        children,
      },
    } satisfies Heading3BlockObject;
  }
  return {
    ...block,
  } satisfies Heading3BlockObject;
};

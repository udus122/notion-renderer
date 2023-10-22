import { fetchBlockComponents } from "./blocks.js";

import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Heading2BlockObject } from "src/components/Blocks/Heading2.js";

export const convertHeading2ResponseToBlock = async (
  block: Heading2BlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockComponents(block.id);
    return {
      ...block,
      heading_2: {
        ...block.heading_2,
        children,
      },
    } satisfies Heading2BlockObject;
  }
  return {
    ...block,
  } satisfies Heading2BlockObject;
};

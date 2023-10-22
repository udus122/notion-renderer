import { fetchBlocks } from "./blocks.js";

import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockObject } from "src/index.js";
import type { Overwrite } from "src/types/utils.js";

export type ColumnBlockObject = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockObject> };
  }
>;

export const convertColumnResponseToBlock = async (
  block: ColumnBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      column: {
        ...block.column,
        children,
      },
    };
  }
  return { ...block } satisfies ColumnBlockObject;
};

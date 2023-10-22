import { fetchBlockComponents } from "./blocks.js";

import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ColumnBlockObject } from "src/components/Blocks/ColumnList.js";

export const convertColumnResponseToBlock = async (
  block: ColumnBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockComponents(block.id);
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

import { fetchBlockList } from "./fetchBlockList.js";

import type { ColumnBlockObject } from "../../../types/notion/blocks/column.js";
import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertColumnResponseToBlock = async (
  block: ColumnBlockObjectResponse,
): Promise<ColumnBlockObject> => {
  if (block.has_children) {
    const children = await fetchBlockList({ block_id: block.id });
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

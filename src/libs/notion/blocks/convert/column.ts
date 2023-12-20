import { fetchBlockList } from "../fetchBlockList.js";

import type { ColumnBlockObject } from "../../../../types/notion/block/column.js";
import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertColumnResponseToBlock = async (
  block: ColumnBlockObjectResponse,
): Promise<ColumnBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      return {
        ...block,
        column: {
          ...block.column,
          children: data,
        },
      };
    }
  }

  return { ...block } satisfies ColumnBlockObject;
};

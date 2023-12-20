import { notNullNorUndefined } from "../../../utils/utils.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ColumnBlockObject } from "../../../../types/notion/block/column.js";
import type { ColumnListBlockObject } from "../../../../types/notion/block/columnList.js";
import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertColumnListResponseToBlock = async (
  block: ColumnListBlockObjectResponse,
): Promise<ColumnListBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      const columns = data.filter(
        (block): block is ColumnBlockObject =>
          notNullNorUndefined(block) && block.type === "column",
      );

      return {
        ...block,
        column_list: {
          ...block.column_list,
          columns,
        },
      } satisfies ColumnListBlockObject;
    }
  }

  return {
    ...block,
  } satisfies ColumnListBlockObject;
};

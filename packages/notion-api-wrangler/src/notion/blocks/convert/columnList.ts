import { notNullNorUndefined } from "../../../utils/utils.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ColumnBlockObject } from "@repo/notion-types";
import type { ColumnListBlockObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertColumnListResponseToBlock = async (
  block: ColumnListBlockObjectResponse,
  client: Client,
): Promise<ColumnListBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

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

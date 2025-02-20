import { notNullNorUndefined } from "../../../utils";
import { fetchBlockList } from "../fetchBlockList";

import type { TableBlockObject } from "@udus/notion-types";
import type { TableRowBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertTableResponseToBlock = async (
  block: TableBlockObjectResponse,
  client: Client,
): Promise<TableBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      const table_rows = data.filter(
        (block): block is TableRowBlockObject =>
          notNullNorUndefined(block) && block.type === "table_row",
      );

      return {
        ...block,
        table: {
          ...block.table,
          table_rows,
        },
      } satisfies TableBlockObject;
    }
  }

  return {
    ...block,
  } satisfies TableBlockObject;
};

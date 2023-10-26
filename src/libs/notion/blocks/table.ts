import { notNullNorUndefined } from "src/index.js";

import { fetchBlockList } from "./blocks.js";

import type { TableBlockObject } from "../../../types/notion/blocks/table.js";
import type { TableRowBlockObject } from "../../../types/notion/blocks/tableRow.js";
import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableResponseToBlock = async (
  block: TableBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlockList(block.id);
    const table_rows = blocks.filter(
      (block): block is TableRowBlockObject =>
        notNullNorUndefined(block) && block.type === "table_row"
    );
    return {
      ...block,
      table: {
        ...block.table,
        table_rows,
      },
    } satisfies TableBlockObject;
  }
  return {
    ...block,
  } satisfies TableBlockObject;
};

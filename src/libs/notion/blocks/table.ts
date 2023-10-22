import { fetchBlocks } from "./blocks.js";

import type { TableRowBlockObject } from "./table_row.js";
import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};

export const convertTableResponseToBlock = async (
  block: TableBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlocks(block.id);
    const table_rows = blocks.filter(
      (block): block is TableRowBlockObject => block.type === "table_row"
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

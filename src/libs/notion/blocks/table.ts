import { fetchBlockComponents } from "./blocks.js";

import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type {
  TableRowBlockObject,
  TableBlockObject,
} from "src/components/Blocks/Table.js";

export const convertTableResponseToBlock = async (
  block: TableBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlockComponents(block.id);
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

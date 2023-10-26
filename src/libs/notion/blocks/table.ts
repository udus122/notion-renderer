import { fetchBlockList } from "./blocks.js";

import type {
  TableBlockObject,
  TableRowBlockObject,
} from "../../../types/notion.js";
import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableResponseToBlock = async (
  block: TableBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlockList(block.id);
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

import { fetchBlockComponents } from "./blocks.js";

import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type {
  ColumnBlockObject,
  ColumnListBlockObject,
} from "src/components/Blocks/ColumnList.js";

export const convertColumnListResponseToBlock = async (
  block: ColumnListBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlockComponents(block.id);
    const columns = blocks.filter(
      (block): block is ColumnBlockObject => block.type === "column"
    );
    return {
      ...block,
      column_list: {
        ...block.column_list,
        columns,
      },
    } satisfies ColumnListBlockObject;
  }
  return {
    ...block,
  } satisfies ColumnListBlockObject;
};

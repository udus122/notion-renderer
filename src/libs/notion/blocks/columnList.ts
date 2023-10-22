import { fetchBlocks } from "./blocks.js";

import type { ColumnBlockObject } from "./column.js";
import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Overwrite } from "src/types/utils.js";

export type ColumnListBlockObject = Overwrite<
  ColumnListBlockObjectResponse,
  {
    column_list: {
      columns?: Array<ColumnBlockObject>;
    };
  }
>;

export const convertColumnListResponseToBlock = async (
  block: ColumnListBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlocks(block.id);
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

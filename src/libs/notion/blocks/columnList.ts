import { notNullNorUndefined } from "../../utils.js";

import { fetchBlockList } from "./blocks.js";

import type { ColumnBlockObject } from "../../../types/notion/blocks/column.js";
import type { ColumnListBlockObject } from "../../../types/notion/blocks/columnList.js";
import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertColumnListResponseToBlock = async (
  block: ColumnListBlockObjectResponse
) => {
  if (block.has_children) {
    const blocks = await fetchBlockList(block.id);
    const columns = blocks.filter(
      (block): block is ColumnBlockObject =>
        notNullNorUndefined(block) && block.type === "column"
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
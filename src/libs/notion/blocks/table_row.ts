import { convertResponseToRichText } from "../richText/richText.js";

import type { TableRowBlockObject } from "../../../types/notion.js";
import type { TableRowBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableRowResponseToBlock = async (
  block: TableRowBlockObjectResponse
) => {
  return {
    ...block,
    table_row: {
      cells: await Promise.all(
        block.table_row.cells.map(
          async (cell) => await convertResponseToRichText(cell)
        )
      ),
    },
  } satisfies TableRowBlockObject;
};

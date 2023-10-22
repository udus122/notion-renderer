import { convertResponseToRichText } from "../richText/richText.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { TableRowBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type TableRowBlockObject = TableRowBlockObjectResponse & {
  table_row: {
    cells: Array<Array<RichTextItem>>;
  };
};

export type TableCellBlockObjectComponent =
  TableRowBlockObject["table_row"]["cells"][number];

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

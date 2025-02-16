import { convertResponseToRichText } from "../../richText/richText.js";

import type { TableRowBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { TableRowBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTableRowResponseToBlock = async (
  block: TableRowBlockObjectResponse,
  client: Client,
): Promise<TableRowBlockObject> => {
  return {
    ...block,
    table_row: {
      cells: await Promise.all(
        block.table_row.cells.map(
          async (cell) => await convertResponseToRichText(cell, client),
        ),
      ),
    },
  } satisfies TableRowBlockObject;
};

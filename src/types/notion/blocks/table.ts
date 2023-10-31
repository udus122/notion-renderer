import type { TableRowBlockObject } from "./tableRow.js";
import type { BlockBlockProps } from "./block.js";
import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};

export type TableBlockProps = BlockBlockProps<TableBlockObject>;

export type TableBlock = ComponentType<TableBlockProps>;

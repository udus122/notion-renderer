import type { TableRowBlockObject } from "./tableRow.js";
import type { BlockProps } from "../common.js";
import type { TableBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};

export type TableBlockProps = BlockProps<TableBlockObject>;

export type TableBlock = ComponentType<TableBlockProps>;

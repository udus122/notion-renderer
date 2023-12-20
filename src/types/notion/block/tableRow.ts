import type { BlockBlockProps } from "./block.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { TableRowBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TableRowBlockObject = TableRowBlockObjectResponse & {
  table_row: {
    cells: Array<Array<RichTextItem>>;
  };
};

export type TableRowBlockProps = BlockBlockProps<TableRowBlockObject>;

export type TableRowBlock = ComponentType<TableRowBlockProps>;

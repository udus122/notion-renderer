import type { BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type { TableRowBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type TableRowBlockObject = TableRowBlockObjectResponse & {
  table_row: {
    cells: Array<Array<RichTextItemType>>;
  };
};

export type TableRowBlockProps = BlockBlockProps<TableRowBlockObject>;

export type TableRowBlock = ComponentType<TableRowBlockProps>;

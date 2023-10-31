import type { ColumnBlockObject } from "./column.js";
import type { Overwrite } from "../../utils.js";
import type { BlockBlockProps } from "./block.js";
import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ColumnListBlockObject = Overwrite<
  ColumnListBlockObjectResponse,
  {
    column_list: {
      columns?: Array<ColumnBlockObject>;
    };
  }
>;

export type ColumnListBlockProps = BlockBlockProps<ColumnListBlockObject>;

export type ColumnListBlock = ComponentType<ColumnListBlockProps>;

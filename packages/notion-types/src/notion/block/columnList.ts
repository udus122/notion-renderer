import type { BlockBlockProps } from "./block";
import type { ColumnBlockObject } from "./column";
import type { Overwrite } from "../../utils";
import type { ColumnListBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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

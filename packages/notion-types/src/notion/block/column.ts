import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { Overwrite } from "../../utils";
import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type ColumnBlockObject = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockBlockObject> };
  }
>;
export type ColumnBlockProps = BlockBlockProps<ColumnBlockObject>;

export type ColumnBlock = ComponentType<ColumnBlockProps>;

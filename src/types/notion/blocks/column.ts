import type { BlockBlockObject } from "./block.js";
import type { Overwrite } from "../../utils.js";
import type { BlockBlockProps } from "./block.js";
import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ColumnBlockObject = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockBlockObject> };
  }
>;
export type ColumnBlockProps = BlockBlockProps<ColumnBlockObject>;

export type ColumnBlock = ComponentType<ColumnBlockProps>;

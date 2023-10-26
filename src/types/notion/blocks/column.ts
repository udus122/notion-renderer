import type { BlockBlockObject } from "./block.js";
import type { Overwrite } from "../../utils.js";
import type { BlockProps } from "../common.js";
import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ColumnBlockObject = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockBlockObject> };
  }
>;
export type ColumnBlockProps = BlockProps<ColumnBlockObject>;

export type ColumnBlock = ComponentType<ColumnBlockProps>;

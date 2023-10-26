import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockBlockObject> };
  };

export type NumberedListItemBlockProps =
  BlockProps<NumberedListItemBlockObject>;

export type NumberedListItemBlock = ComponentType<NumberedListItemBlockProps>;

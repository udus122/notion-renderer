import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockBlockObject> };
  };

export type NumberedListItemBlockProps =
  BlockBlockProps<NumberedListItemBlockObject>;

export type NumberedListItemBlock = ComponentType<NumberedListItemBlockProps>;

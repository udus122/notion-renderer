import type { NumberedListItemBlockObject } from "./numberedListItem.js";
import type { BlockProps } from "../common.js";
import type { ComponentType } from "react";

export type NumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};

export type NumberedListBlockProps = BlockProps<NumberedListBlockObject>;

export type NumberedListBlock = ComponentType<NumberedListBlockProps>;

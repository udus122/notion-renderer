import type { BlockBlockProps } from "./block";
import type { NumberedListItemBlockObject } from "./numberedListItem";
import type { ComponentType } from "react";

export type NumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};

export type NumberedListBlockProps = BlockBlockProps<NumberedListBlockObject>;

export type NumberedListBlock = ComponentType<NumberedListBlockProps>;

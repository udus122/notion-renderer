import type { BulletedListItemBlockObject } from "./bulletedListItem.js";
import type { BlockProps } from "../common.js";
import type { ComponentType } from "react";

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObject>;
  };
};

export type BulletedListBlockProps = BlockProps<BulletedListBlockObject>;

export type BulletedListBlock = ComponentType<BulletedListBlockProps>;

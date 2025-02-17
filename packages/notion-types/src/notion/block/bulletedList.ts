import type { BlockBlockProps } from "./block";
import type { BulletedListItemBlockObject } from "./bulletedListItem";
import type { ComponentType } from "react";

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObject>;
  };
};

export type BulletedListBlockProps = BlockBlockProps<BulletedListBlockObject>;

export type BulletedListBlock = ComponentType<BulletedListBlockProps>;

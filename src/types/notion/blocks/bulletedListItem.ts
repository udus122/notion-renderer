import type { BlockBlockObject } from "./block.js";
import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      rich_text: Array<RichTextItem>;
      children?: Array<BlockBlockObject>;
    };
  };

export type BulletedListItemBlockProps =
  BlockProps<BulletedListItemBlockObject>;

export type BulletedListItemBlock = ComponentType<BulletedListItemBlockProps>;
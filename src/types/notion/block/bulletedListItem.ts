import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { RichTextItemType } from "../richText/richTextItem.js";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      rich_text: Array<RichTextItemType>;
      children?: Array<BlockBlockObject>;
    };
  };

export type BulletedListItemBlockProps =
  BlockBlockProps<BulletedListItemBlockObject>;

export type BulletedListItemBlock = ComponentType<BulletedListItemBlockProps>;

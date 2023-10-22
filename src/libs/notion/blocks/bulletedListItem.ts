import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { RichTextItem } from "../richText/richTextItem.js";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockObject } from "src/index.js";

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObject>;
  };
};

export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      rich_text: Array<RichTextItem>;
      children?: Array<BlockObject>;
    };
  };

export const convertBulletedListItemResponseToBlock = async (
  block: BulletedListItemBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      bulleted_list_item: {
        ...block.bulleted_list_item,
        rich_text: await convertResponseToRichText(
          block.bulleted_list_item.rich_text
        ),
        children,
      },
    } satisfies BulletedListItemBlockObject;
  }
  return {
    ...block,
    bulleted_list_item: {
      ...block.bulleted_list_item,
      rich_text: await convertResponseToRichText(
        block.bulleted_list_item.rich_text
      ),
    },
  } satisfies BulletedListItemBlockObject;
};

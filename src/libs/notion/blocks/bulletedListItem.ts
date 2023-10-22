import { fetchBlocks } from "./blocks.js";

import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BulletedListItemBlockObject } from "src/components/Blocks/BulletedListItem.js";

export const convertBulletedListItemResponseToBlock = async (
  block: BulletedListItemBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      bulleted_list_item: {
        ...block.bulleted_list_item,
        children,
      },
    } satisfies BulletedListItemBlockObject;
  }
  return {
    ...block,
  } satisfies BulletedListItemBlockObject;
};

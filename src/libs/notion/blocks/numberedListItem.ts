import { fetchBlocks } from "./blocks.js";

import type { BlockObject } from "./blocks.js";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type NumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};

export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockObject> };
  };

export const convertNumberedListItemResponseToBlock = async (
  block: NumberedListItemBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      numbered_list_item: {
        ...block.numbered_list_item,
        children,
      },
    } satisfies NumberedListItemBlockObject;
  }
  return {
    ...block,
  } satisfies NumberedListItemBlockObject;
};

import { fetchBlocks } from "./blocks.js";

import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { NumberedListItemBlockObject } from "src/components/Blocks/NumberedListItem.js";

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

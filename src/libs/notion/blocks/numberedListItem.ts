import { fetchBlockList } from "./blocks.js";

import type { NumberedListItemBlockObject } from "../../../types/notion/blocks/numberedListItem.js";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertNumberedListItemResponseToBlock = async (
  block: NumberedListItemBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockList(block.id);
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

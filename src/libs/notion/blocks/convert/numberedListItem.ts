import { fetchBlockList } from "../fetchBlockList.js";

import type { NumberedListItemBlockObject } from "../../../../types/notion/block/numberedListItem.js";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertNumberedListItemResponseToBlock = async (
  block: NumberedListItemBlockObjectResponse,
): Promise<NumberedListItemBlockObject> => {
  if (block.has_children) {
    const children = await fetchBlockList({ block_id: block.id });
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

import { fetchBlockList } from "../fetchBlockList.js";

import type { NumberedListItemBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertNumberedListItemResponseToBlock = async (
  block: NumberedListItemBlockObjectResponse,
  client: Client,
): Promise<NumberedListItemBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        numbered_list_item: {
          ...block.numbered_list_item,
          children: data,
        },
      } satisfies NumberedListItemBlockObject;
    }
  }

  return {
    ...block,
  } satisfies NumberedListItemBlockObject;
};

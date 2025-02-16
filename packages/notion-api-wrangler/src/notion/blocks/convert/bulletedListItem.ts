import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { BulletedListItemBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertBulletedListItemResponseToBlock = async (
  block: BulletedListItemBlockObjectResponse,
  client: Client,
): Promise<BulletedListItemBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        bulleted_list_item: {
          ...block.bulleted_list_item,
          rich_text: await convertResponseToRichText(
            block.bulleted_list_item.rich_text,
            client,
          ),
          children: data,
        },
      } satisfies BulletedListItemBlockObject;
    }
  }

  return {
    ...block,
    bulleted_list_item: {
      ...block.bulleted_list_item,
      rich_text: await convertResponseToRichText(
        block.bulleted_list_item.rich_text,
        client,
      ),
    },
  } satisfies BulletedListItemBlockObject;
};

import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { BulletedListItemBlockObject } from "../../../../types/notion/block/bulletedListItem.js";
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertBulletedListItemResponseToBlock = async (
  block: BulletedListItemBlockObjectResponse,
): Promise<BulletedListItemBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      return {
        ...block,
        bulleted_list_item: {
          ...block.bulleted_list_item,
          rich_text: await convertResponseToRichText(
            block.bulleted_list_item.rich_text,
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
      ),
    },
  } satisfies BulletedListItemBlockObject;
};

import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { BulletedListItemBlockObject } from '@udus/notion-types';
import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertBulletedListItemResponseToBlock = async (
  block: BulletedListItemBlockObjectResponse,
  options: FetchOptions,
): Promise<BulletedListItemBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        bulleted_list_item: {
          ...block.bulleted_list_item,
          rich_text: await convertResponseToRichText(
            block.bulleted_list_item.rich_text,
            options,
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
        options,
      ),
    },
  } satisfies BulletedListItemBlockObject;
};

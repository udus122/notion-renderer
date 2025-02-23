import { fetchBlockList } from '../fetchBlockList';

import type { NumberedListItemBlockObject } from '@udus/notion-types';
import type { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertNumberedListItemResponseToBlock = async (
  block: NumberedListItemBlockObjectResponse,
  options: FetchOptions,
): Promise<NumberedListItemBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

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

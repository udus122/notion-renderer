import { fetchBlockList } from '../fetchBlockList';

import type { ColumnBlockObject } from '@udus/notion-types';
import type { ColumnBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertColumnResponseToBlock = async (
  block: ColumnBlockObjectResponse,
  option: FetchOptions,
): Promise<ColumnBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, option);

    if (ok) {
      return {
        ...block,
        column: {
          ...block.column,
          children: data,
        },
      };
    }
  }

  return { ...block } satisfies ColumnBlockObject;
};

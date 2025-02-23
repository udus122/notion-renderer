import { notNullish } from '../../../utils';
import { fetchBlockList } from '../fetchBlockList';

import type { ColumnBlockObject } from '@udus/notion-types';
import type { ColumnListBlockObject } from '@udus/notion-types';
import type { ColumnListBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertColumnListResponseToBlock = async (
  block: ColumnListBlockObjectResponse,
  options: FetchOptions,
): Promise<ColumnListBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      const columns = data.filter(
        (block): block is ColumnBlockObject =>
          notNullish(block) && block.type === 'column',
      );

      return {
        ...block,
        column_list: {
          ...block.column_list,
          columns,
        },
      } satisfies ColumnListBlockObject;
    }
  }

  return {
    ...block,
  } satisfies ColumnListBlockObject;
};

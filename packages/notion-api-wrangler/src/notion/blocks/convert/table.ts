import { notNullish } from '../../../utils';
import { fetchBlockList } from '../fetchBlockList';

import type { TableBlockObject } from '@udus/notion-types';
import type { TableRowBlockObject } from '@udus/notion-types';
import type { TableBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertTableResponseToBlock = async (
  block: TableBlockObjectResponse,
  options: FetchOptions,
): Promise<TableBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      const table_rows = data.filter(
        (block): block is TableRowBlockObject =>
          notNullish(block) && block.type === 'table_row',
      );

      return {
        ...block,
        table: {
          ...block.table,
          table_rows,
        },
      } satisfies TableBlockObject;
    }
  }

  return {
    ...block,
  } satisfies TableBlockObject;
};

import { convertResponseToRichText } from '../../richText/richText';

import type { TableRowBlockObject } from '@udus/notion-types';
import type { TableRowBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertTableRowResponseToBlock = async (
  block: TableRowBlockObjectResponse,
  options: FetchOptions,
): Promise<TableRowBlockObject> => {
  return {
    ...block,
    table_row: {
      cells: await Promise.all(
        block.table_row.cells.map(
          async (cell) => await convertResponseToRichText(cell, options),
        ),
      ),
    },
  } satisfies TableRowBlockObject;
};

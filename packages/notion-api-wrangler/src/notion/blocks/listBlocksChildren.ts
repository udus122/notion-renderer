import { withBackOff } from '../../utils/api';
import type {
  ListBlockChildrenResponseResults,
  Result,
} from '@udus/notion-types';

import type { ListBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints';

import type { FetchOptions } from '../../types';
import { withQueue } from '../../utils/queue';

export const listBlockChildren = async (
  args: ListBlockChildrenParameters,
  { client }: FetchOptions,
): Promise<Result<ListBlockChildrenResponseResults>> => {
  try {
    const response = await withQueue(withBackOff(client.blocks.children.list))(
      args,
    );

    let blockList = response.results;
    if (response.next_cursor) {
      const nextResults = await listBlockChildren(
        { ...args, start_cursor: response.next_cursor },
        { client },
      );
      if (nextResults.ok) {
        blockList = [...blockList, ...nextResults.data];
      }
    }
    return { ok: true, data: blockList };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

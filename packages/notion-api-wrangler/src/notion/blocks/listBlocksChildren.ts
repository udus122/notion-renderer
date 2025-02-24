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
  const result = await withQueue(withBackOff(client.blocks.children.list))(
    args,
  );

  if (!result.ok) {
    return result;
  }

  let blockList = result.data.results;

  if (result.data.next_cursor) {
    const nextResults = await listBlockChildren(
      { ...args, start_cursor: result.data.next_cursor },
      { client },
    );

    if (nextResults.ok) {
      blockList = [...blockList, ...nextResults.data];
    }
  }

  return { ok: true, data: blockList };
};

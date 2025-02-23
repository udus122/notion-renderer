import { withBackOff } from '../../utils/api';
import type {
  ListBlockChildrenResponseResults,
  Result,
} from '@udus/notion-types';

import type { ListBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints';

import type { FetchOptions } from '../../types';

export const listBlockChildren = async (
  args: ListBlockChildrenParameters,
  { client, queue }: FetchOptions,
): Promise<Result<ListBlockChildrenResponseResults>> => {
  const result = await queue.add(
    () => withBackOff(client.blocks.children.list)(args),
    {
      throwOnTimeout: true,
    },
  );

  if (!result.ok) {
    return result;
  }

  let blockList = result.data.results;

  if (result.data.next_cursor) {
    const nextResults = await listBlockChildren(
      { ...args, start_cursor: result.data.next_cursor },
      { client, queue },
    );

    if (nextResults.ok) {
      blockList = [...blockList, ...nextResults.data];
    }
  }

  return { ok: true, data: blockList };
};

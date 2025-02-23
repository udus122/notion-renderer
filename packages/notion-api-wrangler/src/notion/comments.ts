import { withBackOff } from '../utils/api';

import type {
  ListCommentsParameters,
  ListCommentsResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../types';

export const listComments = async (
  args: ListCommentsParameters,
  { client, queue }: FetchOptions,
): Promise<ListCommentsResponse['results']> => {
  const { ok, data } = await queue.add(
    () => withBackOff(client.comments.list)(args),
    { throwOnTimeout: true },
  );

  if (!ok) {
    return [];
  }

  if (data.next_cursor) {
    const nextResults = await listComments(
      { ...args, start_cursor: data.next_cursor },
      { client, queue },
    );
    data.results = [...data.results, ...nextResults];
  }
  return data.results;
};

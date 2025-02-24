import { withBackOff } from '../utils/api';

import type {
  ListCommentsParameters,
  ListCommentsResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../types';
import { withQueue } from '../utils/queue';

export const listComments = async (
  args: ListCommentsParameters,
  { client }: FetchOptions,
): Promise<ListCommentsResponse['results']> => {
  const { ok, data } = await withQueue(withBackOff(client.comments.list))(args);

  if (!ok) {
    return [];
  }

  if (data.next_cursor) {
    const nextResults = await listComments(
      { ...args, start_cursor: data.next_cursor },
      { client },
    );
    data.results = [...data.results, ...nextResults];
  }
  return data.results;
};

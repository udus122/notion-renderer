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
  try {
    const response = await withQueue(withBackOff(client.comments.list))(args);

    if (response.next_cursor) {
      const nextResults = await listComments(
        { ...args, start_cursor: response.next_cursor },
        { client },
      );
      response.results = [...response.results, ...nextResults];
    }
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

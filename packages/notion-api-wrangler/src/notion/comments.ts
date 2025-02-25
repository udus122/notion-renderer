import { withBackOff } from '../utils/backoff';

import type {
  ListCommentsParameters,
  ListCommentsResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../types';

export const listComments = async (
  args: ListCommentsParameters,
  { client, queue }: FetchOptions,
): Promise<ListCommentsResponse['results']> => {
  try {
    const response = await queue.add(() =>
      withBackOff(client.comments.list)(args),
    );

    if (response.next_cursor) {
      const nextResults = await listComments(
        { ...args, start_cursor: response.next_cursor },
        { client, queue },
      );
      response.results = [...response.results, ...nextResults];
    }
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

import { withBackOff } from '../../utils/api';

import type {
  GetPagePropertyParameters,
  GetPagePropertyResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { Result, FetchOptions } from '../../types';

export const retrievePageProperty = async (
  args: GetPagePropertyParameters,
  { client, queue }: FetchOptions,
): Promise<Result<GetPagePropertyResponse>> => {
  const result = await queue.add(
    () => withBackOff(client.pages.properties.retrieve)(args),
    { throwOnTimeout: true },
  );

  if (!result.ok) {
    return result;
  }

  if (result.data.object === 'list') {
    if (result.data.next_cursor) {
      const nextResult = await retrievePageProperty(
        { ...args, start_cursor: result.data.next_cursor },
        { client, queue },
      );

      if (nextResult.ok && nextResult.data.object === 'list') {
        const nextPropertyList = nextResult.data.results;
        result.data.results = [...result.data.results, ...nextPropertyList];
      }
    }
  }

  return result;
};

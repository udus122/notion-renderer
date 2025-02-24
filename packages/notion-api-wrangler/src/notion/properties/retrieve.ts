import { withBackOff } from '../../utils/api';

import type {
  GetPagePropertyParameters,
  GetPagePropertyResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { Result, FetchOptions } from '../../types';
import { withQueue } from '../../utils/queue';

export const retrievePageProperty = async (
  args: GetPagePropertyParameters,
  { client }: FetchOptions,
): Promise<Result<GetPagePropertyResponse>> => {
  const result = await withQueue(withBackOff(client.pages.properties.retrieve))(
    args,
  );

  if (!result.ok) {
    return result;
  }

  if (result.data.object === 'list') {
    if (result.data.next_cursor) {
      const nextResult = await retrievePageProperty(
        { ...args, start_cursor: result.data.next_cursor },
        { client },
      );

      if (nextResult.ok && nextResult.data.object === 'list') {
        const nextPropertyList = nextResult.data.results;
        result.data.results = [...result.data.results, ...nextPropertyList];
      }
    }
  }

  return result;
};

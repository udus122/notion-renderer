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
  try {
    const response = await queue.add(() =>
      withBackOff(client.pages.properties.retrieve)(args),
    );

    if (response.object === 'list') {
      if (response.next_cursor) {
        const nextResult = await retrievePageProperty(
          { ...args, start_cursor: response.next_cursor },
          { client, queue },
        );
        if (nextResult.ok && nextResult.data.object === 'list') {
          const nextPropertyList = nextResult.data.results;
          response.results = [...response.results, ...nextPropertyList];
        }
      }
    }
    return { ok: true, data: response };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

import { withBackOff } from '../../utils/api';

import type { Result } from '@udus/notion-types';
import type {
  GetPageParameters,
  GetPageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const retrievePage = async (
  args: GetPageParameters,
  { client, queue }: FetchOptions,
): Promise<Result<GetPageResponse>> => {
  const result = await queue.add(
    () => withBackOff(client.pages.retrieve)(args),
    { throwOnTimeout: true },
  );

  return result;
};

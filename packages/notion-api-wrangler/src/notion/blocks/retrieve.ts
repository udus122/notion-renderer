import { withBackOff } from '../../utils/api';

import type { Result } from '@udus/notion-types';
import type {
  GetBlockParameters,
  GetBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const retrieveBlock = async (
  args: GetBlockParameters,
  { queue, client }: FetchOptions,
): Promise<Result<GetBlockResponse>> => {
  const result = await queue.add(
    () => withBackOff(client.blocks.retrieve)(args),
    { throwOnTimeout: true },
  );

  return result;
};

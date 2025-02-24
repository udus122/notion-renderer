import type { Result } from '@udus/notion-types';
import type {
  GetBlockParameters,
  GetBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withQueue } from '../../utils/queue';
import { withBackOff } from '../../utils/api';

export const retrieveBlock = async (
  args: GetBlockParameters,
  { client }: FetchOptions,
): Promise<Result<GetBlockResponse>> => {
  const result = await withQueue(withBackOff(client.blocks.retrieve))(args);
  return result;
};

import type { Result } from '@udus/notion-types';
import type {
  GetBlockParameters,
  GetBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withBackOff } from '../../utils/backoff';

export const retrieveBlock = async (
  args: GetBlockParameters,
  { client, queue }: FetchOptions,
): Promise<Result<GetBlockResponse>> => {
  try {
    const result = await queue.add(() =>
      withBackOff(client.blocks.retrieve)(args),
    );
    return { ok: true, data: result };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

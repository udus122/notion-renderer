import type { Result } from '@udus/notion-types';
import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withBackOff } from '../../utils/api';
import { withQueue } from '../../utils/queue';

export const retrieveDatabase = async (
  args: GetDatabaseParameters,
  { client }: FetchOptions,
): Promise<Result<GetDatabaseResponse>> => {
  try {
    const response = await withQueue(withBackOff(client.databases.retrieve))(
      args,
    );
    return { ok: true, data: response };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

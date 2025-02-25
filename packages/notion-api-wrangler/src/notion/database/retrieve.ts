import type { Result } from '@udus/notion-types';
import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withBackOff } from '../../utils/backoff';

export const retrieveDatabase = async (
  args: GetDatabaseParameters,
  { client, queue }: FetchOptions,
): Promise<Result<GetDatabaseResponse>> => {
  try {
    const response = await queue.add(() =>
      withBackOff(client.databases.retrieve)(args),
    );
    return { ok: true, data: response };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

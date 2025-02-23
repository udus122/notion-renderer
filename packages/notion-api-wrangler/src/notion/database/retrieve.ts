import { withBackOff } from '../../utils/api';

import type { Result } from '@udus/notion-types';

import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const retrieveDatabase = async (
  args: GetDatabaseParameters,
  { client, queue }: FetchOptions,
): Promise<Result<GetDatabaseResponse>> => {
  const result = await queue.add(
    () => withBackOff(client.databases.retrieve)(args),
    { throwOnTimeout: true },
  );
  return result;
};

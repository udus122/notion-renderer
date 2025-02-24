import { withBackOff } from '../../utils/api';

import type { Result } from '@udus/notion-types';

import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withQueue } from '../../utils/queue';

export const retrieveDatabase = async (
  args: GetDatabaseParameters,
  { client }: FetchOptions,
): Promise<Result<GetDatabaseResponse>> => {
  const result = await withQueue(withBackOff(client.databases.retrieve))(args);
  return result;
};

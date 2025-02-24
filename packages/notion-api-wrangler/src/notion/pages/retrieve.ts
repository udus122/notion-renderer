import { withBackOff } from '../../utils/api';

import type { Result } from '@udus/notion-types';
import type {
  GetPageParameters,
  GetPageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withQueue } from '../../utils/queue';

export const retrievePage = async (
  args: GetPageParameters,
  { client }: FetchOptions,
): Promise<Result<GetPageResponse>> => {
  const result = await withQueue(withBackOff(client.pages.retrieve))(args);

  return result;
};

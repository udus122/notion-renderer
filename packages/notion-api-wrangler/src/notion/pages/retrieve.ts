import type { Result } from '@udus/notion-types';
import type {
  GetPageParameters,
  GetPageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withBackOff } from '../../utils/api';
import { withQueue } from '../../utils/queue';

export const retrievePage = async (
  args: GetPageParameters,
  { client }: FetchOptions,
): Promise<Result<GetPageResponse>> => {
  try {
    const response = await withQueue(withBackOff(client.pages.retrieve))(args);
    return { ok: true, data: response };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

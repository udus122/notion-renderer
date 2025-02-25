import type { Result } from '@udus/notion-types';
import type {
  GetPageParameters,
  GetPageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';
import { withBackOff } from '../../utils/api';

export const retrievePage = async (
  args: GetPageParameters,
  { client, queue }: FetchOptions,
): Promise<Result<GetPageResponse>> => {
  try {
    const response = await queue.add(() =>
      withBackOff(client.pages.retrieve)(args),
    );
    return { ok: true, data: response };
  } catch (error) {
    return { ok: false, data: error as Error };
  }
};

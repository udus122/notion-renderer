import type { UnsupportedBlockObject } from '@udus/notion-types';
import type { UnsupportedBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertUnsupportedResponseToBlock = async (
  block: UnsupportedBlockObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): Promise<UnsupportedBlockObject> => {
  return { ...block } satisfies UnsupportedBlockObject;
};

import type { DividerBlockObject } from '@udus/notion-types';
import type { DividerBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): Promise<DividerBlockObject> => {
  return { ...block } satisfies DividerBlockObject;
};

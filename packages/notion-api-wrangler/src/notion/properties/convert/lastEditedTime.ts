import type { LastEditedTimePropertyItemObject } from '@udus/notion-types';
import type { LastEditedTimePropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToLastEditedTimePropertyItem = (
  property: LastEditedTimePropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): LastEditedTimePropertyItemObject => {
  return {
    ...property,
  } satisfies LastEditedTimePropertyItemObject;
};

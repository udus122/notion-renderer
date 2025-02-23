import type { CreatedTimePropertyItemObject } from '@udus/notion-types';
import type { CreatedTimePropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToCreatedTimePropertyItem = (
  property: CreatedTimePropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): CreatedTimePropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedTimePropertyItemObject;
};

import type { UniqueIdPropertyItemObject } from '@udus/notion-types';
import type { UniqueIdPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToUniqueIdPropertyItem = (
  property: UniqueIdPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): UniqueIdPropertyItemObject => {
  return {
    ...property,
  } satisfies UniqueIdPropertyItemObject;
};

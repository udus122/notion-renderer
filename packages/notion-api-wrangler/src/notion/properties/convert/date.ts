import type { DatePropertyItemObject } from '@udus/notion-types';
import type { DatePropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToDatePropertyItem = (
  property: DatePropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): DatePropertyItemObject => {
  return {
    ...property,
  } satisfies DatePropertyItemObject;
};

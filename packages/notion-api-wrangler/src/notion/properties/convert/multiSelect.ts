import type { MultiSelectPropertyItemObject } from '@udus/notion-types';
import type { MultiSelectPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToMultiSelectPropertyItem = (
  property: MultiSelectPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): MultiSelectPropertyItemObject => {
  return {
    ...property,
  } satisfies MultiSelectPropertyItemObject;
};

import type { SelectPropertyItemObject } from '@udus/notion-types';
import type { SelectPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToSelectPropertyItem = (
  property: SelectPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): SelectPropertyItemObject => {
  return {
    ...property,
  } satisfies SelectPropertyItemObject;
};

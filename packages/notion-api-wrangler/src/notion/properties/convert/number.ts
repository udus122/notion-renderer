import type { NumberPropertyItemObject } from '@udus/notion-types';
import type { NumberPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToNumberPropertyItem = (
  property: NumberPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): NumberPropertyItemObject => {
  return {
    ...property,
  } satisfies NumberPropertyItemObject;
};

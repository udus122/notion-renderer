import type { StatusPropertyItemObject } from '@udus/notion-types';
import type { StatusPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToStatusPropertyItem = (
  property: StatusPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): StatusPropertyItemObject => {
  return {
    ...property,
  } satisfies StatusPropertyItemObject;
};

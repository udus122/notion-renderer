import type { CreatedByPropertyItemObject } from '@udus/notion-types';
import type { CreatedByPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToCreatedByPropertyItem = (
  property: CreatedByPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): CreatedByPropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedByPropertyItemObject;
};

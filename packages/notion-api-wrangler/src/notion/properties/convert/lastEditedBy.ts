import type { LastEditedByPropertyItemObject } from '@udus/notion-types';
import type { LastEditedByPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToLastEditedByPropertyItem = (
  property: LastEditedByPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): LastEditedByPropertyItemObject => {
  return {
    ...property,
  } satisfies LastEditedByPropertyItemObject;
};

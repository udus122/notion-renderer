import type { UrlPropertyItemObject } from '@udus/notion-types';
import type { UrlPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToUrlPropertyItem = (
  property: UrlPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): UrlPropertyItemObject => {
  return {
    ...property,
  } satisfies UrlPropertyItemObject;
};

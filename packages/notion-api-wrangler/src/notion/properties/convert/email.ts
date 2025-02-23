import type { EmailPropertyItemObject } from '@udus/notion-types';
import type { EmailPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToEmailPropertyItem = (
  property: EmailPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): EmailPropertyItemObject => {
  return {
    ...property,
  } satisfies EmailPropertyItemObject;
};

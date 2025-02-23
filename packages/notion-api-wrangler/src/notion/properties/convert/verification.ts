import type { VerificationPropertyItemObject } from '@udus/notion-types';
import type { VerificationPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToVerificationPropertyItem = (
  property: VerificationPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): VerificationPropertyItemObject => {
  return {
    ...property,
  } satisfies VerificationPropertyItemObject;
};

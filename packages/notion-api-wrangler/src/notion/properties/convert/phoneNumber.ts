import type { PhoneNumberPropertyItemObject } from '@udus/notion-types';
import type { PhoneNumberPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToPhoneNumberPropertyItem = (
  property: PhoneNumberPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): PhoneNumberPropertyItemObject => {
  return {
    ...property,
  } satisfies PhoneNumberPropertyItemObject;
};

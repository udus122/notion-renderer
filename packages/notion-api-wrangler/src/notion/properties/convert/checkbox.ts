import type { CheckboxPropertyItemObject } from '@udus/notion-types';
import type { CheckboxPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToCheckboxPropertyItem = (
  property: CheckboxPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): CheckboxPropertyItemObject => {
  return {
    ...property,
  } satisfies CheckboxPropertyItemObject;
};

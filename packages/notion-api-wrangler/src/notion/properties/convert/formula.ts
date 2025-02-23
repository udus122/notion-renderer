import type { FormulaPropertyItemObject } from '@udus/notion-types';
import type { FormulaPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToFormulaPropertyItem = (
  property: FormulaPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): FormulaPropertyItemObject => {
  return {
    ...property,
  } satisfies FormulaPropertyItemObject;
};

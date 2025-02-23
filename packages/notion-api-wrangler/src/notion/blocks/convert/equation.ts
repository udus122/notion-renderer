import type { EquationBlockObject } from '@udus/notion-types';
import type { EquationBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertEquationResponseToBlock = async (
  block: EquationBlockObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): Promise<EquationBlockObject> => {
  return { ...block } satisfies EquationBlockObject;
};

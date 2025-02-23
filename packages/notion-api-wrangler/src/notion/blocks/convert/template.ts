import type { TemplateBlockObject } from '@udus/notion-types';
import type { TemplateBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertTemplateResponseToBlock = async (
  block: TemplateBlockObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): Promise<TemplateBlockObject> => {
  return { ...block } satisfies TemplateBlockObject;
};

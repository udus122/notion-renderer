import type { TableOfContentsBlockObject } from '@udus/notion-types';
import type { TableOfContentsBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertTableOfContentsResponseToBlock = async (
  block: TableOfContentsBlockObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): Promise<TableOfContentsBlockObject> => {
  return { ...block } satisfies TableOfContentsBlockObject;
};

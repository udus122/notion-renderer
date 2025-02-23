import type { FilesPropertyItemObject } from '@udus/notion-types';
import type { FilesPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToFilesPropertyItem = (
  property: FilesPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): FilesPropertyItemObject => {
  return {
    ...property,
  } satisfies FilesPropertyItemObject;
};

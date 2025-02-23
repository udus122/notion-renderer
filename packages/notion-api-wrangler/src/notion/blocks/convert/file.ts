import { convertResponseToRichText } from '../../richText/richText';

import type { FileBlockObject } from '@udus/notion-types';
import type { FileBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertFileResponseToBlock = async (
  block: FileBlockObjectResponse,
  options: FetchOptions,
): Promise<FileBlockObject> => {
  return {
    ...block,
    file: {
      ...block.file,
      caption: await convertResponseToRichText(block.file.caption, options),
    },
  } satisfies FileBlockObject;
};

import { convertResponseToRichText } from '../../richText/richText';

import type { CodeBlockObject } from '@udus/notion-types';
import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertCodeResponseToBlock = async (
  block: CodeBlockObjectResponse,
  options: FetchOptions,
): Promise<CodeBlockObject> => {
  return {
    ...block,
    code: {
      ...block.code,
      rich_text: await convertResponseToRichText(block.code.rich_text, options),
      caption: await convertResponseToRichText(block.code.caption, options),
    },
  } satisfies CodeBlockObject;
};

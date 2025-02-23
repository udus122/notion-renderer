import { convertResponseToRichTextItem } from './richTextItem';

import type { RichTextType } from '@udus/notion-types';

import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../types';

export const convertResponseToRichText = async (
  response: Array<RichTextItemResponse>,
  options: FetchOptions,
): Promise<RichTextType> => {
  return (await Promise.all(
    response.map(async (item) => {
      return await convertResponseToRichTextItem(item, options);
    }),
  )) satisfies RichTextType;
};

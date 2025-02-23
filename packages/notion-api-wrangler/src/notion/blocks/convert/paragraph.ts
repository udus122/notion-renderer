import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { ParagraphBlockObject } from '@udus/notion-types';
import type { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertParagraphResponseToBlock = async (
  block: ParagraphBlockObjectResponse,
  options: FetchOptions,
): Promise<ParagraphBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        paragraph: {
          ...block.paragraph,
          rich_text: await convertResponseToRichText(
            block.paragraph.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies ParagraphBlockObject;
    }
  }

  return {
    ...block,
    paragraph: {
      ...block.paragraph,
      rich_text: await convertResponseToRichText(
        block.paragraph.rich_text,
        options,
      ),
    },
  } satisfies ParagraphBlockObject;
};

import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { Heading3BlockObject } from '@udus/notion-types';
import type { Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertHeading3ResponseToBlock = async (
  block: Heading3BlockObjectResponse,
  options: FetchOptions,
): Promise<Heading3BlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        heading_3: {
          ...block.heading_3,
          rich_text: await convertResponseToRichText(
            block.heading_3.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies Heading3BlockObject;
    }
  }

  return {
    ...block,
    heading_3: {
      ...block.heading_3,
      rich_text: await convertResponseToRichText(
        block.heading_3.rich_text,
        options,
      ),
    },
  } satisfies Heading3BlockObject;
};

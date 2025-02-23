import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { Heading2BlockObject } from '@udus/notion-types';
import type { Heading2BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertHeading2ResponseToBlock = async (
  block: Heading2BlockObjectResponse,
  options: FetchOptions,
): Promise<Heading2BlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        heading_2: {
          ...block.heading_2,
          rich_text: await convertResponseToRichText(
            block.heading_2.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies Heading2BlockObject;
    }
  }

  return {
    ...block,
    heading_2: {
      ...block.heading_2,
      rich_text: await convertResponseToRichText(
        block.heading_2.rich_text,
        options,
      ),
    },
  } satisfies Heading2BlockObject;
};

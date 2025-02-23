import { convertResponseToRichText } from '../../richText/richText';
import { fetchBlockList } from '../fetchBlockList';

import type { QuoteBlockObject } from '@udus/notion-types';
import type { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertQuoteResponseToBlock = async (
  block: QuoteBlockObjectResponse,
  options: FetchOptions,
): Promise<QuoteBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id }, options);

    if (ok) {
      return {
        ...block,
        quote: {
          ...block.quote,
          rich_text: await convertResponseToRichText(
            block.quote.rich_text,
            options,
          ),
          children: data,
        },
      } satisfies QuoteBlockObject;
    }
  }

  return {
    ...block,
    quote: {
      ...block.quote,
      rich_text: await convertResponseToRichText(
        block.quote.rich_text,
        options,
      ),
    },
  } satisfies QuoteBlockObject;
};

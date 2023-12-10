import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlockList } from "./blocks.js";

import type { QuoteBlockObject } from "../../../types/notion/blocks/quote.js";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertQuoteResponseToBlock = async (
  block: QuoteBlockObjectResponse,
) => {
  if (block.has_children) {
    const children = await fetchBlockList({ block_id: block.id });
    return {
      ...block,
      quote: {
        ...block.quote,
        rich_text: await convertResponseToRichText(block.quote.rich_text),
        children,
      },
    } satisfies QuoteBlockObject;
  }
  return {
    ...block,
    quote: {
      ...block.quote,
      rich_text: await convertResponseToRichText(block.quote.rich_text),
    },
  } satisfies QuoteBlockObject;
};

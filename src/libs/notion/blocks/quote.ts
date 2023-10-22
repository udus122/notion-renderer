import { fetchBlocks } from "./blocks.js";

import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { QuoteBlockObject } from "src/components/Blocks/Quote.js";

export const convertQuoteResponseToBlock = async (
  block: QuoteBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      quote: {
        ...block.quote,
        children,
      },
    } satisfies QuoteBlockObject;
  }
  return {
    ...block,
  } satisfies QuoteBlockObject;
};

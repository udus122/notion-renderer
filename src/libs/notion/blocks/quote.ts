import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlocks } from "./blocks.js";

import type { BlockObject } from "./blocks.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};

export const convertQuoteResponseToBlock = async (
  block: QuoteBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
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

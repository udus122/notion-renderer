import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { QuoteBlockObject } from "../../../../types/notion/block/quote.js";
import type { Client } from "@notionhq/client";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertQuoteResponseToBlock = async (
  block: QuoteBlockObjectResponse,
  client: Client,
): Promise<QuoteBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        quote: {
          ...block.quote,
          rich_text: await convertResponseToRichText(
            block.quote.rich_text,
            client,
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
      rich_text: await convertResponseToRichText(block.quote.rich_text, client),
    },
  } satisfies QuoteBlockObject;
};

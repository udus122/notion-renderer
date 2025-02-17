import { convertResponseToRichText } from "../../richText/richText";
import { fetchBlockList } from "../fetchBlockList";

import type { QuoteBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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

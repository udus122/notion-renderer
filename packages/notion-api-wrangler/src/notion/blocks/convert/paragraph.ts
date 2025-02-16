import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ParagraphBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertParagraphResponseToBlock = async (
  block: ParagraphBlockObjectResponse,
  client: Client,
): Promise<ParagraphBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        paragraph: {
          ...block.paragraph,
          rich_text: await convertResponseToRichText(
            block.paragraph.rich_text,
            client,
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
        client,
      ),
    },
  } satisfies ParagraphBlockObject;
};

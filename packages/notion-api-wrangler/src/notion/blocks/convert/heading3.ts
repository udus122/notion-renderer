import { convertResponseToRichText } from "../../richText/richText";
import { fetchBlockList } from "../fetchBlockList";

import type { Heading3BlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertHeading3ResponseToBlock = async (
  block: Heading3BlockObjectResponse,
  client: Client,
): Promise<Heading3BlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        heading_3: {
          ...block.heading_3,
          rich_text: await convertResponseToRichText(
            block.heading_3.rich_text,
            client,
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
        client,
      ),
    },
  } satisfies Heading3BlockObject;
};

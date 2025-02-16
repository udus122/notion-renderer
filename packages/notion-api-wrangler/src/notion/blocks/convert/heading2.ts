import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { Heading2BlockObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertHeading2ResponseToBlock = async (
  block: Heading2BlockObjectResponse,
  client: Client,
): Promise<Heading2BlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        heading_2: {
          ...block.heading_2,
          rich_text: await convertResponseToRichText(
            block.heading_2.rich_text,
            client,
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
        client,
      ),
    },
  } satisfies Heading2BlockObject;
};

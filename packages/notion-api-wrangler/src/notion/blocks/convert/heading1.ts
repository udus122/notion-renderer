import { convertResponseToRichText } from "../../richText/richText";
import { fetchBlockList } from "../fetchBlockList";

import type { Heading1BlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertHeading1ResponseToBlock = async (
  block: Heading1BlockObjectResponse,
  client: Client,
): Promise<Heading1BlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        heading_1: {
          ...block.heading_1,
          rich_text: await convertResponseToRichText(
            block.heading_1.rich_text,
            client,
          ),
          children: data,
        },
      } satisfies Heading1BlockObject;
    }
  }

  return {
    ...block,
    heading_1: {
      ...block.heading_1,
      rich_text: await convertResponseToRichText(
        block.heading_1.rich_text,
        client,
      ),
    },
  } satisfies Heading1BlockObject;
};

import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { CalloutBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertCalloutResponseToBlock = async (
  block: CalloutBlockObjectResponse,
  client: Client,
): Promise<CalloutBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        callout: {
          ...block.callout,
          rich_text: await convertResponseToRichText(
            block.callout.rich_text,
            client,
          ),
          children: data,
        },
      } satisfies CalloutBlockObject;
    }
  }

  return {
    ...block,
    callout: {
      ...block.callout,
      rich_text: await convertResponseToRichText(
        block.callout.rich_text,
        client,
      ),
    },
  } satisfies CalloutBlockObject;
};

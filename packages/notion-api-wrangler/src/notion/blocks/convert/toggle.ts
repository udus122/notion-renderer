import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ToggleBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToggleResponseToBlock = async (
  block: ToggleBlockObjectResponse,
  client: Client,
): Promise<ToggleBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        toggle: {
          ...block.toggle,
          rich_text: await convertResponseToRichText(
            block.toggle.rich_text,
            client,
          ),
          children: data,
        },
      } satisfies ToggleBlockObject;
    }
  }

  return {
    ...block,
    toggle: {
      ...block.toggle,
      rich_text: await convertResponseToRichText(
        block.toggle.rich_text,
        client,
      ),
    },
  } satisfies ToggleBlockObject;
};

import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ToDoBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToDoResponseToBlock = async (
  block: ToDoBlockObjectResponse,
  client: Client,
): Promise<ToDoBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        to_do: {
          ...block.to_do,
          rich_text: await convertResponseToRichText(
            block.to_do.rich_text,
            client,
          ),
          children: data,
        },
      } satisfies ToDoBlockObject;
    }
  }

  return {
    ...block,
    to_do: {
      ...block.to_do,
      rich_text: await convertResponseToRichText(block.to_do.rich_text, client),
    },
  } satisfies ToDoBlockObject;
};

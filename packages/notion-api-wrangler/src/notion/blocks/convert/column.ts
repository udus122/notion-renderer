import { fetchBlockList } from "../fetchBlockList";

import type { ColumnBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { ColumnBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertColumnResponseToBlock = async (
  block: ColumnBlockObjectResponse,
  client: Client,
): Promise<ColumnBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList(client, { block_id: block.id });

    if (ok) {
      return {
        ...block,
        column: {
          ...block.column,
          children: data,
        },
      };
    }
  }

  return { ...block } satisfies ColumnBlockObject;
};

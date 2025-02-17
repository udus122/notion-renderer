import { callAPIWithBackOff } from "../../utils/api";
import type { ListBlockChildrenResponseResults, Result } from "@udus/notion-types";

import type { Client } from "@notionhq/client";
import type {
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const listBlockChildren = async (
  client: Client,
  args: ListBlockChildrenParameters,
): Promise<Result<ListBlockChildrenResponseResults>> => {
  const result = await callAPIWithBackOff<
    ListBlockChildrenParameters,
    ListBlockChildrenResponse
  >(client.blocks.children.list, args);

  if (!result.ok) {
    return result;
  }

  let blockList = result.data.results;

  if (result.data.next_cursor) {
    const nextResults = await listBlockChildren(client, {
      ...args,
      start_cursor: result.data.next_cursor,
    });

    if (nextResults.ok) {
      blockList = [...blockList, ...nextResults.data];
    }
  }

  return { ok: true, data: blockList };
};

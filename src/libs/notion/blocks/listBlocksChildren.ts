import { callAPIWithBackOffAndCache } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { ListBlockChildrenResponseResults } from "../../../types/notion/common/common.js";
import type { Result } from "../../../types/utils.js";
import type {
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const listBlockChildren = async (
  args: ListBlockChildrenParameters,
): Promise<Result<ListBlockChildrenResponseResults>> => {
  const result = await callAPIWithBackOffAndCache<
    ListBlockChildrenParameters,
    ListBlockChildrenResponse
  >(notion.blocks.children.list, args);

  if (!result.ok) {
    return result;
  }

  let blockList = result.data.results;

  if (result.data.next_cursor) {
    const nextResults = await listBlockChildren({
      ...args,
      start_cursor: result.data.next_cursor,
    });

    if (nextResults.ok) {
      blockList = [...blockList, ...nextResults.data];
    }
  }

  return { ok: true, data: blockList };
};

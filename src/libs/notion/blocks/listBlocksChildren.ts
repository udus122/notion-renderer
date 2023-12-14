import { callAPIWithBackOff } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { ListBlockChildrenResponseResults } from "../../../types/notion/common/common.js";
import type {
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const listBlockChildren = async (
  args: ListBlockChildrenParameters,
): Promise<ListBlockChildrenResponseResults> => {
  const { ok, data } = await callAPIWithBackOff<
    ListBlockChildrenParameters,
    ListBlockChildrenResponse
  >(notion.blocks.children.list, args);

  if (!ok) {
    return [];
  }

  if (data.next_cursor) {
    const nextResults = await listBlockChildren({
      ...args,
      start_cursor: data.next_cursor,
    });
    data.results = [...data.results, ...nextResults];
  }

  return data.results;
};

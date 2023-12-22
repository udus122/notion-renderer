import { callAPIWithBackOffAndCache } from "../utils/api.js";

import type { Client } from "@notionhq/client";
import type {
  ListCommentsParameters,
  ListCommentsResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const listComments = async (
  client: Client,
  args: ListCommentsParameters,
): Promise<ListCommentsResponse["results"]> => {
  const { ok, data } = await callAPIWithBackOffAndCache<
    ListCommentsParameters,
    ListCommentsResponse
  >(client.comments.list, args);

  if (!ok) {
    return [];
  }

  if (data.next_cursor) {
    const nextResults = await listComments(client, {
      ...args,
      start_cursor: data.next_cursor,
    });
    data.results = [...data.results, ...nextResults];
  }
  return data.results;
};

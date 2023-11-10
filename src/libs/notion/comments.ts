import { callAPIWithBackOff } from "../utils.js";

import { notion } from "./auth.js";

import type {
  ListCommentsParameters,
  ListCommentsResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const listComments = async (
  args: ListCommentsParameters
): Promise<ListCommentsResponse["results"]> => {
  const { ok, data } = await callAPIWithBackOff<
    ListCommentsParameters,
    ListCommentsResponse
  >(notion.comments.list, args);

  if (!ok) {
    return [];
  }

  if (data.next_cursor) {
    const nextResults = await listComments({
      ...args,
      start_cursor: data.next_cursor,
    });
    data.results = [...data.results, ...nextResults];
  }
  return data.results;
};

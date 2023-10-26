import { callAPIWithBackOff } from "../utils.js";

import { notion } from "./auth.js";

import type {
  ListCommentsParameters,
  ListCommentsResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const listComments = async (
  args: ListCommentsParameters
): Promise<ListCommentsResponse["results"]> => {
  const { payload, error } = await callAPIWithBackOff<
    ListCommentsParameters,
    ListCommentsResponse
  >(notion.comments.list, args);

  if (!error) {
    if (payload.next_cursor) {
      const nextResults = await listComments({
        ...args,
        start_cursor: payload.next_cursor,
      });
      payload.results = [...payload.results, ...nextResults];
    }

    return payload.results;
  }
  return [];
};

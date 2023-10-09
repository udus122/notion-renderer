import {
  Client,
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

import type { Result } from "@/types/utils";
import type {
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const callAPIWithBackOff = async <Args, Item>(
  func: (args: Args) => Promise<Item>,
  args: Args,
  retryCount = 3,
  waitingTimeMS = 1000
): Promise<Result<Item>> => {
  if (retryCount < 1) {
    return {
      payload: undefined,
      error: new Error("retry count exceeded."),
    };
  }

  try {
    const payload = await func({ ...args });
    return {
      payload,
      error: undefined,
    };
  } catch (error) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case APIErrorCode.RateLimited:
        case APIErrorCode.ConflictError:
        case APIErrorCode.InternalServerError:
        case APIErrorCode.ServiceUnavailable:
        case ClientErrorCode.ResponseError:
        case ClientErrorCode.RequestTimeout: {
          console.log(`retry with error. error code: ${error.code}`);
          if (waitingTimeMS > 0) {
            await new Promise((resolve) => setTimeout(resolve, waitingTimeMS));
          }
          const { payload, error: retryError } = await callAPIWithBackOff(
            func,
            { ...args },
            retryCount--
          );
          if (!retryError) {
            return {
              payload,
              error: undefined,
            };
          }
          break;
        }
        default:
          break;
      }
      return {
        payload: undefined,
        error,
      };
    }
  }
  return {
    payload: undefined,
    error: new Error("Notion api call was failed with unknown error."),
  };
};

export const listBlockChildren = async (
  args: ListBlockChildrenParameters
): Promise<ListBlockChildrenResponse["results"]> => {
  const { payload, error } = await callAPIWithBackOff<
    ListBlockChildrenParameters,
    ListBlockChildrenResponse
  >(notion.blocks.children.list, args);

  if (!error) {
    if (payload.next_cursor) {
      const nextResults = await listBlockChildren({
        ...args,
        start_cursor: payload.next_cursor,
      });
      payload.results = [...payload.results, ...nextResults];
    }

    return payload.results;
  }
  return [];
};

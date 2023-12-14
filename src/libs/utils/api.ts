import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

import type { Result } from "../../types/utils.js";

export const callAPIWithBackOff = async <Args, Item>(
  func: (args: Args) => Promise<Item>,
  args: Args,
  retryCount = 3,
  waitingTimeMS = 3000,
): Promise<Result<Item>> => {
  if (retryCount < 1) {
    return {
      ok: false,
      data: new Error("retry count exceeded."),
    };
  }

  try {
    const data = await func({ ...args });
    return {
      ok: true,
      data,
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
          const { ok, data } = await callAPIWithBackOff(
            func,
            { ...args },
            retryCount--,
          );
          if (ok) {
            return {
              ok,
              data,
            };
          }
          break;
        }
        default:
          break;
      }
      return {
        ok: false,
        data: error,
      };
    }
  }
  return {
    ok: false,
    data: new Error("Notion api call was failed with unknown error."),
  };
};

import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

import { exponentialBackoffFactory } from "./backoff";

import type { Result } from "@udus/notion-types";

const exponentialBackoff = exponentialBackoffFactory(64, undefined, 300);

export const callAPIWithBackOff = async <Args, Item>(
  func: (args: Args) => Promise<Item>,
  args: Args,
  retryCount = 5,
): Promise<Result<Item>> => {
  try {
    const data = await func({ ...args });
    return {
      ok: true,
      data,
    };
  } catch (error) {
    console.error(
      `error occured with this parameter: ${JSON.stringify({
        func: func.name,
        args,
        error,
      })}`,
    );
    if (isNotionClientError(error)) {
      switch (error.code) {
        case APIErrorCode.RateLimited:
        case APIErrorCode.ConflictError:
        case APIErrorCode.InternalServerError:
        case APIErrorCode.ServiceUnavailable:
        case ClientErrorCode.ResponseError:
        case ClientErrorCode.RequestTimeout: {
          console.error("start retrying...");
          if (retryCount < 1) {
            return {
              ok: false,
              data: new Error("retry count exceeded.", { cause: error }),
            };
          }
          await exponentialBackoff();
          const newRetryCount = retryCount - 1;
          const { ok, data } = await callAPIWithBackOff(
            func,
            { ...args },
            newRetryCount,
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

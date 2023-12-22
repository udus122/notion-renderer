import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

import { exponentialBackoffFactory } from "./backoff.js";

import type { Result } from "../../types/utils.js";

const exponentialBackoff = exponentialBackoffFactory();

export const callAPIWithBackOff = async <Args, Item>(
  func: (args: Args) => Promise<Item>,
  args: Args,
  retryCount: number = 5,
): Promise<Result<Item>> => {
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
          if (retryCount < 1) {
            return {
              ok: false,
              data: new Error("retry count exceeded.", { cause: error }),
            };
          }
          await exponentialBackoff();
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

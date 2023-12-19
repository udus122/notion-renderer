import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

import { exponentialBackoffFactory } from "./backoff.js";
import { withCache } from "./cache.js";

import type { Result } from "../../types/utils.js";

const exponentialBackoff = exponentialBackoffFactory();

export const callAPIWithBackOffAndCache = async <Args, Item>(
  func: (args: Args) => Promise<Item>,
  args: Args,
  retryCount: number = 5,
  cacheDir: string = ".cache",
): Promise<Result<Item>> => {
  try {
    const data = await withCache(func, cacheDir)({ ...args });
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
          const { ok, data } = await callAPIWithBackOffAndCache(
            func,
            { ...args },
            retryCount--,
            cacheDir,
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

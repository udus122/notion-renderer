import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

import { hash, isAvailableCache, readCache, writeCache } from "./utils.js";

import type { Result } from "../../types/utils.js";

const cacheDir = process.env.NOTION_RENDERER_CACHEDIR ?? ".cache";

export const withCache = <Args, Item>(
  func: (args: Args) => Promise<Item>,
): ((args: Args) => Promise<Item>) => {
  const funcWithCache = async (args: Args): Promise<Item> => {
    const key = hash(JSON.stringify({ func: func.name, args }));
    const cachePath = `${cacheDir}/${key}`;

    try {
      if (await isAvailableCache(cachePath, 600)) {
        const cache = await readCache<Item>(cachePath);
        return cache;
      }
    } catch (_) {
      /* not fatal */
    }
    const res = await func({ ...args });
    await writeCache(cachePath, res);
    return res;
  };

  return funcWithCache;
};

export const callAPIWithBackOffAndCache = async <Args, Item>(
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
    const data = await withCache(func)({ ...args });
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

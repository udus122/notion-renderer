import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";
import openGraphScraper from "open-graph-scraper";

import type { Result } from "../types/utils.js";

export const callAPIWithBackOff = async <Args, Item>(
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

export const notNullNorUndefined = <T>(v: T | null | undefined): v is T => {
  return v !== null && v !== undefined;
};
export const scrapeOgMeta = async (
  url: string
): Promise<
  | {
      title?: string;
      description?: string;
      image?: {
        url: string;
        type?: string;
        width?: number;
        height?: number;
      };
      icon?: string;
    }
  | undefined
> => {
  // @ts-expect-error: because open-graph-scraper have type error with moduleResolution node16 but it works.
  const { error, result } = await openGraphScraper({ url });
  if (!error) {
    const { ogTitle, ogDescription, ogImage, favicon } = result;
    return {
      title: ogTitle ?? null,
      description: ogDescription ?? null,
      image: ogImage ? ogImage[0] : null,
      icon: favicon ?? null,
    };
  }
  return undefined;
};

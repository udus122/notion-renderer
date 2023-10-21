import {
  extract as extractSiteMeta,
  type ArticleData,
  type ParserOptions,
  type FetchOptions,
} from "@extractus/article-extractor";
import {
  extract as extractOembed,
  type LinkTypeData,
  type Params,
  type PhotoTypeData,
  type RichTypeData,
  type VideoTypeData,
} from "@extractus/oembed-extractor";
import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from "@notionhq/client";

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

export const fetchSiteMeta = async (
  url: string,
  parserOptions?: ParserOptions | undefined,
  fetchOptions?: FetchOptions | undefined
): Promise<Result<ArticleData>> => {
  try {
    const article = await extractSiteMeta(url, parserOptions, fetchOptions);
    if (article) {
      return { payload: article, error: undefined };
    }
  } catch (error) {
    return { payload: undefined, error: error as Error };
  }
  return { payload: undefined, error: new Error("article is null.") };
};

export const fetchOembed = async (
  url: string,
  params: Params = {}
): Promise<
  Result<LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData>
> => {
  try {
    const oembed = (await extractOembed(url, params)) as
      | LinkTypeData
      | PhotoTypeData
      | VideoTypeData
      | RichTypeData;
    return { payload: oembed, error: undefined };
  } catch (error) {
    return {
      payload: undefined,
      error: error as Error,
    };
  }
};

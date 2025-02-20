import {
  type ParserOptions,
  type FetchOptions,
  type ArticleData,
  extract,
} from "@extractus/article-extractor";

import type { Result } from "@udus/notion-types";

export const fetchSiteMeta = async (
  url: string,
  parserOptions?: ParserOptions | undefined,
  fetchOptions?: FetchOptions | undefined,
): Promise<Result<ArticleData>> => {
  try {
    const data = await extract(url, parserOptions, fetchOptions);
    if (data) {
      return { ok: true, data };
    }
  } catch (error) {
    return { ok: false, data: error as Error };
  }
  return { ok: false, data: new Error("article is null.") };
};

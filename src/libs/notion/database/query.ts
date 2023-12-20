import { isFullPage } from "@notionhq/client";

import { notUndefined } from "../../../libs/utils/utils.js";
import { callAPIWithBackOffAndCache } from "../../utils/api.js";
import { notion } from "../auth.js";
import { convertResponseToPage } from "../index.js";

import type { PageObject } from "../../../types/notion/page.js";
import type { Result } from "../../../types/utils.js";
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const queryDatabase = async (
  args: QueryDatabaseParameters,
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await callAPIWithBackOffAndCache<
    QueryDatabaseParameters,
    QueryDatabaseResponse
  >(notion.databases.query, args);

  return result;
};

export const fetchDatabaseItems = async (
  args: QueryDatabaseParameters,
): Promise<Result<PageObject[]>> => {
  const { ok, data } = await queryDatabase(args);

  if (ok) {
    const pages = (
      await Promise.all(
        data.results.map(async (page) => {
          if (!isFullPage(page)) return;

          const converted = convertResponseToPage(page);
          return converted;
        }),
      )
    ).filter(notUndefined);
    return { ok: true, data: pages };
  }
  return { ok: false, data: new Error("Failed to fetch database items") };
};

export const queryAllDatabaseItems = async (
  args: QueryDatabaseParameters,
): Promise<PageObject[]> => {
  const { ok, data } = await queryDatabase(args);
  if (!ok) {
    return [];
  }

  // TODO: convertResponseToPageを使って型変換する
  const results = data.results as Array<PageObject>;

  if (!data.next_cursor) {
    return results;
  }

  const nextResults = await queryAllDatabaseItems({
    ...args,
    start_cursor: data.next_cursor,
  });
  return [...results, ...nextResults];
};

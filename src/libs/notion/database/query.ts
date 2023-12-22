import { Client, isFullPage } from "@notionhq/client";

import { notUndefined } from "../../../libs/utils/utils.js";
import { callAPIWithBackOff } from "../../utils/api.js";
import { convertResponseToPage } from "../index.js";

import type { PageObject } from "../../../types/notion/page.js";
import type { Result } from "../../../types/utils.js";
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const queryDatabase = async (
  client: Client,
  args: QueryDatabaseParameters,
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    QueryDatabaseParameters,
    QueryDatabaseResponse
  >(client.databases.query, args);

  return result;
};

export const fetchDatabaseItems = async (
  client: Client,
  args: QueryDatabaseParameters,
): Promise<Result<PageObject[]>> => {
  const { ok, data } = await queryDatabase(client, args);

  if (ok) {
    const pages = (
      await Promise.all(
        data.results.map(async (page) => {
          if (!isFullPage(page)) return;

          const converted = convertResponseToPage(page, client);
          return converted;
        }),
      )
    ).filter(notUndefined);
    return { ok: true, data: pages };
  }
  return { ok: false, data: new Error("Failed to fetch database items") };
};

export const queryAllDatabaseItems = async (
  client: Client,
  args: QueryDatabaseParameters,
): Promise<PageObject[]> => {
  const { ok, data } = await queryDatabase(client, args);
  if (!ok) {
    return [];
  }

  // TODO: convertResponseToPageを使って型変換する
  const results = data.results as Array<PageObject>;

  if (!data.next_cursor) {
    return results;
  }

  const nextResults = await queryAllDatabaseItems(client, {
    ...args,
    start_cursor: data.next_cursor,
  });
  return [...results, ...nextResults];
};

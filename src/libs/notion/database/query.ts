import { callAPIWithBackOff } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { Result } from "../../../types/utils.js";
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { PageObject } from "src/types/notion/pages/page.js";

export const queryDatabase = async (
  args: QueryDatabaseParameters,
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    QueryDatabaseParameters,
    QueryDatabaseResponse
  >(notion.databases.query, args);

  return result;
};

export const queryAllDatabaseItems = async (
  args: QueryDatabaseParameters,
): Promise<Array<PageObject>> => {
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

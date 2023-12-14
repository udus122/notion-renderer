import { queryDatabase } from "./queryDatabase.js";

import type { PageObject } from "../../types/notion/pages/page.js";
import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchAllDatabaseItems = async (
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

  const nextResults = await fetchAllDatabaseItems({
    ...args,
    start_cursor: data.next_cursor,
  });
  return [...results, ...nextResults];
};

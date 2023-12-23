import { Client, isFullPage } from "@notionhq/client";

import { notUndefined } from "../../../libs/utils/utils.js";
import { callAPIWithBackOff } from "../../utils/api.js";
import { convertResponseToPage } from "../index.js";

import type { QueryDatabaseObject } from "../../../types/notion/database.js";
import type { Result } from "../../../types/utils.js";
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const queryDatabase = async (
  client: Client,
  args: QueryDatabaseParameters
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    QueryDatabaseParameters,
    QueryDatabaseResponse
  >(client.databases.query, args);

  return result;
};

export const fetchDatabaseItems = async (
  client: Client,
  args: QueryDatabaseParameters
): Promise<Result<QueryDatabaseObject>> => {
  const { ok, data } = await queryDatabase(client, args);

  if (!ok) {
    return { ok, data };
  }

  const pages = (
    await Promise.all(
      data.results.map(async (page) => {
        if (!isFullPage(page)) return;

        const converted = convertResponseToPage(page, client);
        return converted;
      })
    )
  ).filter(notUndefined);

  return {
    ok: true,
    data: {
      ...data,
      results: pages,
    },
  };
};

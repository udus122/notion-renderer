import { type Client, isFullPage } from "@notionhq/client";

import { notUndefined } from "../../utils/utils";
import { callAPIWithBackOff } from "../../utils/api";
import { convertResponseToPage } from "../index";

import type { QueryDatabaseObject } from "@udus/notion-types";
import type { Result } from "@udus/notion-types";
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

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
      }),
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

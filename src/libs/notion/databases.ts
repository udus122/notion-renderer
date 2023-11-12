import { isFullDatabase } from "@notionhq/client";

import { callAPIWithBackOff } from "../utils.js";

import { notion } from "./auth.js";

import type { Result } from "../../types/utils.js";
import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrieveDatabase = async (
  args: GetDatabaseParameters
): Promise<GetDatabaseResponse | undefined> => {
  const { ok, data } = await callAPIWithBackOff<
    GetDatabaseParameters,
    GetDatabaseResponse
  >(notion.databases.retrieve, args);

  if (!ok) {
    return;
  }
  return data;
};

export const fetchDatabase = async (databaseId: string) => {
  const database = await retrieveDatabase({ database_id: databaseId });
  if (!database) {
    return;
  }
  if (!isFullDatabase(database)) {
    return;
  }
  return database;
};

export const queryDatabase = async (
  args: QueryDatabaseParameters
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    QueryDatabaseParameters,
    QueryDatabaseResponse
  >(notion.databases.query, args);

  return result;
};

export const fetchAllDatabaseItems = async (
  args: QueryDatabaseParameters
): Promise<QueryDatabaseResponse["results"]> => {
  const { ok, data } = await queryDatabase(args);
  if (!ok) {
    return [];
  }

  if (data.next_cursor) {
    const nextResults = await fetchAllDatabaseItems({
      ...args,
      start_cursor: data.next_cursor,
    });
    data.results = [...data.results, ...nextResults];
  }

  return data.results;
};

import "dotenv/config";

const res = await fetchAllDatabaseItems({
  database_id: "9a93d3be9ef944718a181572525eb5b3",
  // filter: {
  //   and: [
  //     {
  //       property: "Tags",
  //       multi_select: {
  //         contains: "tag1",
  //       },
  //     },
  //   ],
  // },
  filter_properties: [
    "title", // Name
    "USxG", // Created time
    "iTg%3D", // Status
    "k%3FXm", // Tags
  ],
  sorts: [
    {
      property: "Unique Id",
      direction: "ascending",
    },
  ],
  page_size: 25,
});
console.log(JSON.stringify(res, null, 2));

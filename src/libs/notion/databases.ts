import { isFullDatabase } from "@notionhq/client";

import { callAPIWithBackOff } from "../utils.js";

import { notion } from "./auth.js";

import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
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

import { callAPIWithBackOff } from "../../utils/api";

import type { Result } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const retrieveDatabase = async (
  client: Client,
  args: GetDatabaseParameters,
): Promise<Result<GetDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    GetDatabaseParameters,
    GetDatabaseResponse
  >(client.databases.retrieve, args);

  return result;
};

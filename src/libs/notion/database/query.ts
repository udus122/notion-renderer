import { callAPIWithBackOff } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { Result } from "../../../types/utils.js";
import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const queryDatabase = async (
  args: QueryDatabaseParameters,
): Promise<Result<QueryDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    QueryDatabaseParameters,
    QueryDatabaseResponse
  >(notion.databases.query, args);

  return result;
};

import { callAPIWithBackOff } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { Result } from "../../../types/utils.js";
import type {
  GetDatabaseParameters,
  GetDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrieveDatabase = async (
  args: GetDatabaseParameters,
): Promise<Result<GetDatabaseResponse>> => {
  const result = await callAPIWithBackOff<
    GetDatabaseParameters,
    GetDatabaseResponse
  >(notion.databases.retrieve, args);

  return result;
};

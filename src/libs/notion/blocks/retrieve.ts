import { callAPIWithBackOffAndCache } from "../../utils/api.js";

import type { Result } from "../../../types/utils.js";
import type { Client } from "@notionhq/client";
import type {
  GetBlockParameters,
  GetBlockResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrieveBlock = async (
  client: Client,
  args: GetBlockParameters,
): Promise<Result<GetBlockResponse>> => {
  const result = await callAPIWithBackOffAndCache<
    GetBlockParameters,
    GetBlockResponse
  >(client.blocks.retrieve, args);

  return result;
};

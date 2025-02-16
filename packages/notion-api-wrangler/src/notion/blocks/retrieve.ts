import { callAPIWithBackOff } from "../../utils/api.js";

import type { Result } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type {
  GetBlockParameters,
  GetBlockResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrieveBlock = async (
  client: Client,
  args: GetBlockParameters,
): Promise<Result<GetBlockResponse>> => {
  const result = await callAPIWithBackOff<GetBlockParameters, GetBlockResponse>(
    client.blocks.retrieve,
    args,
  );

  return result;
};

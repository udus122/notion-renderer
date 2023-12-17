import { callAPIWithBackOffAndCache } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { Result } from "../../../types/utils.js";
import type {
  GetBlockParameters,
  GetBlockResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrieveBlock = async (
  args: GetBlockParameters,
): Promise<Result<GetBlockResponse>> => {
  const result = await callAPIWithBackOffAndCache<
    GetBlockParameters,
    GetBlockResponse
  >(notion.blocks.retrieve, args);

  return result;
};

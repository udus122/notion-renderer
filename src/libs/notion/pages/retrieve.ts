import { callAPIWithBackOffAndCache } from "../../utils/api.js";

import type { Result } from "../../../types/utils.js";
import type { Client } from "@notionhq/client";
import type {
  GetPageParameters,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrievePage = async (
  client: Client,
  args: GetPageParameters,
): Promise<Result<GetPageResponse>> => {
  const result = await callAPIWithBackOffAndCache<
    GetPageParameters,
    GetPageResponse
  >(client.pages.retrieve, args);

  return result;
};

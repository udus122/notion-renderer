import { callAPIWithBackOff } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { Result } from "../../../types/utils.js";
import type {
  GetPageParameters,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrievePage = async (
  args: GetPageParameters,
): Promise<Result<GetPageResponse>> => {
  const result = await callAPIWithBackOff<GetPageParameters, GetPageResponse>(
    notion.pages.retrieve,
    args,
  );

  return result;
};

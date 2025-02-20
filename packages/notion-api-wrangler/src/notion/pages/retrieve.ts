import { callAPIWithBackOff } from "../../utils/api";

import type { Result } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type {
  GetPageParameters,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const retrievePage = async (
  client: Client,
  args: GetPageParameters,
): Promise<Result<GetPageResponse>> => {
  const result = await callAPIWithBackOff<GetPageParameters, GetPageResponse>(
    client.pages.retrieve,
    args,
  );

  return result;
};

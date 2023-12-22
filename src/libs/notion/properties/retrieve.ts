import { callAPIWithBackOff } from "../../utils/api.js";

import type { Result } from "../../../types/utils.js";
import type { Client } from "@notionhq/client";
import type {
  GetPagePropertyParameters,
  GetPagePropertyResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrievePageProperty = async (
  client: Client,
  args: GetPagePropertyParameters,
): Promise<Result<GetPagePropertyResponse>> => {
  const result = await callAPIWithBackOff<
    GetPagePropertyParameters,
    GetPagePropertyResponse
  >(client.pages.properties.retrieve, args);

  if (!result.ok) {
    return result;
  }

  if (result.data.object === "list") {
    if (result.data.next_cursor) {
      const nextResult = await retrievePageProperty(client, {
        ...args,
        start_cursor: result.data.next_cursor,
      });

      if (nextResult.ok && nextResult.data.object === "list") {
        const nextPropertyList = nextResult.data.results;
        result.data.results = [...result.data.results, ...nextPropertyList];
      }
    }
  }

  return result;
};

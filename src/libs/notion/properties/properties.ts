import { callAPIWithBackOffAndCache } from "../../utils/api.js";
import { notion } from "../auth.js";

import type { Result } from "../../../types/utils.js";
import type {
  GetPagePropertyParameters,
  GetPagePropertyResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrievePageProperty = async (
  args: GetPagePropertyParameters,
): Promise<Result<GetPagePropertyResponse>> => {
  const result = await callAPIWithBackOffAndCache<
    GetPagePropertyParameters,
    GetPagePropertyResponse
  >(notion.pages.properties.retrieve, args);

  if (!result.ok) {
    return result;
  }

  if (result.data.object === "list") {
    if (result.data.next_cursor) {
      const nextResult = await retrievePageProperty({
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

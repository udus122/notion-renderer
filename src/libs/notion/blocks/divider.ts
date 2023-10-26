import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { DividerBlockObject } from "src/types/notion.js";

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse
) => {
  return { ...block } satisfies DividerBlockObject;
};

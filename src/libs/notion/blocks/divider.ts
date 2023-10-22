import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { DividerBlockObject } from "src/components/Blocks/Divider.js";

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse
) => {
  return { ...block } satisfies DividerBlockObject;
};

import type { DividerBlockObject } from "../../../types/notion/blocks/divider.js";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse,
): Promise<DividerBlockObject> => {
  return { ...block } satisfies DividerBlockObject;
};

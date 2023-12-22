import type { DividerBlockObject } from "../../../../types/notion/block/divider.js";
import type { Client } from "@notionhq/client";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse,
  client: Client,
): Promise<DividerBlockObject> => {
  return { ...block } satisfies DividerBlockObject;
};

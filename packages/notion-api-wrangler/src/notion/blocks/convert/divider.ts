import type { DividerBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse,
  client: Client,
): Promise<DividerBlockObject> => {
  return { ...block } satisfies DividerBlockObject;
};

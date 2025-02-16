import type { LastEditedByPropertyItemObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { LastEditedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToLastEditedByPropertyItem = (
  property: LastEditedByPropertyItemObjectResponse,
  client: Client,
): LastEditedByPropertyItemObject => {
  return {
    ...property,
  } satisfies LastEditedByPropertyItemObject;
};

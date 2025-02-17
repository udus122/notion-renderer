import type { CreatedByPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { CreatedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToCreatedByPropertyItem = (
  property: CreatedByPropertyItemObjectResponse,
  client: Client,
): CreatedByPropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedByPropertyItemObject;
};

import type { CreatedByPropertyItemObject } from "../../../../types/notion/property/createdBy.js";
import type { Client } from "@notionhq/client";
import type { CreatedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToCreatedByPropertyItem = (
  property: CreatedByPropertyItemObjectResponse,
  client: Client,
): CreatedByPropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedByPropertyItemObject;
};

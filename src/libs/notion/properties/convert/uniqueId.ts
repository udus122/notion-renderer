import type { UniqueIdPropertyItemObject } from "../../../../types/notion/property/uniqueId.js";
import type { Client } from "@notionhq/client";
import type { UniqueIdPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToUniqueIdPropertyItem = (
  property: UniqueIdPropertyItemObjectResponse,
  client: Client,
): UniqueIdPropertyItemObject => {
  return {
    ...property,
  } satisfies UniqueIdPropertyItemObject;
};

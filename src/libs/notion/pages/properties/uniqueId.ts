import type { UniqueIdPropertyItemObject } from "../../../../types/notion/pages/properties/uniqueId.js";
import type { UniqueIdPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToUniqueIdPropertyItem = (
  property: UniqueIdPropertyItemObjectResponse,
): UniqueIdPropertyItemObject => {
  return {
    ...property,
  } satisfies UniqueIdPropertyItemObject;
};

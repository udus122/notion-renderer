import type { CreatedByPropertyItemObject } from "../../../../types/notion/pages/properties/createdBy.js";
import type { CreatedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToCreatedByPropertyItem = (
  property: CreatedByPropertyItemObjectResponse,
): CreatedByPropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedByPropertyItemObject;
};

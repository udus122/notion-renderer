import type { CreatedTimePropertyItemObject } from "../../../../types/notion/pages/properties/createdTime.js";
import type { CreatedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToCreatedTimePropertyItem = (
  property: CreatedTimePropertyItemObjectResponse,
): CreatedTimePropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedTimePropertyItemObject;
};

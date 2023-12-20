import type { LastEditedTimePropertyItemObject } from "../../../../types/notion/property/lastEditedTime.js";
import type { LastEditedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToLastEditedTimePropertyItem = (
  property: LastEditedTimePropertyItemObjectResponse,
): LastEditedTimePropertyItemObject => {
  return {
    ...property,
  } satisfies LastEditedTimePropertyItemObject;
};

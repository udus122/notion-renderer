import type { DatePropertyItemObject } from "../../../../types/notion/pages/properties/date.js";
import type { DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToDatePropertyItem = (
  property: DatePropertyItemObjectResponse
): DatePropertyItemObject => {
  return {
    ...property,
  } satisfies DatePropertyItemObject;
};

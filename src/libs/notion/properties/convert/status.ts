import type { StatusPropertyItemObject } from "../../../../types/notion/pages/properties/status.js";
import type { StatusPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToStatusPropertyItem = (
  property: StatusPropertyItemObjectResponse,
): StatusPropertyItemObject => {
  return {
    ...property,
  } satisfies StatusPropertyItemObject;
};

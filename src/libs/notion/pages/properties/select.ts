import type { SelectPropertyItemObject } from "../../../../types/notion/pages/properties/select.js";
import type { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToSelectPropertyItem = (
  property: SelectPropertyItemObjectResponse
): SelectPropertyItemObject => {
  return {
    ...property,
  } satisfies SelectPropertyItemObject;
};

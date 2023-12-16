import type { MultiSelectPropertyItemObject } from "../../../../types/notion/pages/properties/multiSelect.js";
import type { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToMultiSelectPropertyItem = (
  property: MultiSelectPropertyItemObjectResponse,
): MultiSelectPropertyItemObject => {
  return {
    ...property,
  } satisfies MultiSelectPropertyItemObject;
};

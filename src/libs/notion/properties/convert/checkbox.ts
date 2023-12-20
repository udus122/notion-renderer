import type { CheckboxPropertyItemObject } from "../../../../types/notion/property/checkbox.js";
import type { CheckboxPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToCheckboxPropertyItem = (
  property: CheckboxPropertyItemObjectResponse,
): CheckboxPropertyItemObject => {
  return {
    ...property,
  } satisfies CheckboxPropertyItemObject;
};

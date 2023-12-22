import type { CheckboxPropertyItemObject } from "../../../../types/notion/property/checkbox.js";
import type { Client } from "@notionhq/client";
import type { CheckboxPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToCheckboxPropertyItem = (
  property: CheckboxPropertyItemObjectResponse,
  client: Client,
): CheckboxPropertyItemObject => {
  return {
    ...property,
  } satisfies CheckboxPropertyItemObject;
};

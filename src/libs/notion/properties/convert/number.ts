import type { NumberPropertyItemObject } from "../../../../types/notion/property/number.js";
import type { NumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToNumberPropertyItem = (
  property: NumberPropertyItemObjectResponse,
): NumberPropertyItemObject => {
  return {
    ...property,
  } satisfies NumberPropertyItemObject;
};

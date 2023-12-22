import type { NumberPropertyItemObject } from "../../../../types/notion/property/number.js";
import type { Client } from "@notionhq/client";
import type { NumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToNumberPropertyItem = (
  property: NumberPropertyItemObjectResponse,
  client: Client,
): NumberPropertyItemObject => {
  return {
    ...property,
  } satisfies NumberPropertyItemObject;
};

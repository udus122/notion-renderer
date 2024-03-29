import type { DatePropertyItemObject } from "../../../../types/notion/property/date.js";
import type { Client } from "@notionhq/client";
import type { DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToDatePropertyItem = (
  property: DatePropertyItemObjectResponse,
  client: Client,
): DatePropertyItemObject => {
  return {
    ...property,
  } satisfies DatePropertyItemObject;
};

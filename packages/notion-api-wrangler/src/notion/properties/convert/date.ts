import type { DatePropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToDatePropertyItem = (
  property: DatePropertyItemObjectResponse,
  client: Client,
): DatePropertyItemObject => {
  return {
    ...property,
  } satisfies DatePropertyItemObject;
};

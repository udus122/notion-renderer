import type { UniqueIdPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { UniqueIdPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToUniqueIdPropertyItem = (
  property: UniqueIdPropertyItemObjectResponse,
  client: Client,
): UniqueIdPropertyItemObject => {
  return {
    ...property,
  } satisfies UniqueIdPropertyItemObject;
};

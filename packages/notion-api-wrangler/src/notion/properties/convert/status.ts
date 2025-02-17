import type { StatusPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { StatusPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToStatusPropertyItem = (
  property: StatusPropertyItemObjectResponse,
  client: Client,
): StatusPropertyItemObject => {
  return {
    ...property,
  } satisfies StatusPropertyItemObject;
};

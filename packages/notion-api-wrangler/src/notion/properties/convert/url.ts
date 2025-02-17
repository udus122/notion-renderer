import type { UrlPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { UrlPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToUrlPropertyItem = (
  property: UrlPropertyItemObjectResponse,
  client: Client,
): UrlPropertyItemObject => {
  return {
    ...property,
  } satisfies UrlPropertyItemObject;
};

import type { SelectPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToSelectPropertyItem = (
  property: SelectPropertyItemObjectResponse,
  client: Client,
): SelectPropertyItemObject => {
  return {
    ...property,
  } satisfies SelectPropertyItemObject;
};

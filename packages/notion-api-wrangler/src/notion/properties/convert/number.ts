import type { NumberPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { NumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToNumberPropertyItem = (
  property: NumberPropertyItemObjectResponse,
  client: Client,
): NumberPropertyItemObject => {
  return {
    ...property,
  } satisfies NumberPropertyItemObject;
};

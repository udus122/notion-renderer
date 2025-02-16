import type { MultiSelectPropertyItemObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToMultiSelectPropertyItem = (
  property: MultiSelectPropertyItemObjectResponse,
  client: Client,
): MultiSelectPropertyItemObject => {
  return {
    ...property,
  } satisfies MultiSelectPropertyItemObject;
};

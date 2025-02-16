import type { CreatedTimePropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { CreatedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToCreatedTimePropertyItem = (
  property: CreatedTimePropertyItemObjectResponse,
  client: Client,
): CreatedTimePropertyItemObject => {
  return {
    ...property,
  } satisfies CreatedTimePropertyItemObject;
};

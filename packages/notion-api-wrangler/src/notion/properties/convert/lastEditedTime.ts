import type { LastEditedTimePropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { LastEditedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToLastEditedTimePropertyItem = (
  property: LastEditedTimePropertyItemObjectResponse,
  client: Client,
): LastEditedTimePropertyItemObject => {
  return {
    ...property,
  } satisfies LastEditedTimePropertyItemObject;
};

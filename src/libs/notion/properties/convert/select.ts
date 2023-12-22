import type { SelectPropertyItemObject } from "../../../../types/notion/property/select.js";
import type { Client } from "@notionhq/client";
import type { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToSelectPropertyItem = (
  property: SelectPropertyItemObjectResponse,
  client: Client,
): SelectPropertyItemObject => {
  return {
    ...property,
  } satisfies SelectPropertyItemObject;
};

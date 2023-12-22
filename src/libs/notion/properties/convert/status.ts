import type { StatusPropertyItemObject } from "../../../../types/notion/property/status.js";
import type { Client } from "@notionhq/client";
import type { StatusPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToStatusPropertyItem = (
  property: StatusPropertyItemObjectResponse,
  client: Client,
): StatusPropertyItemObject => {
  return {
    ...property,
  } satisfies StatusPropertyItemObject;
};

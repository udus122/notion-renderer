import type { EmailPropertyItemObject } from "../../../../types/notion/property/email.js";
import type { Client } from "@notionhq/client";
import type { EmailPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToEmailPropertyItem = (
  property: EmailPropertyItemObjectResponse,
  client: Client,
): EmailPropertyItemObject => {
  return {
    ...property,
  } satisfies EmailPropertyItemObject;
};

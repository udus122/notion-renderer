import type { EmailPropertyItemObject } from "../../../../types/notion/pages/properties/email.js";
import type { EmailPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToEmailPropertyItem = (
  property: EmailPropertyItemObjectResponse
): EmailPropertyItemObject => {
  return {
    ...property,
  } satisfies EmailPropertyItemObject;
};

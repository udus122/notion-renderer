import type { VerificationPropertyItemObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { VerificationPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToVerificationPropertyItem = (
  property: VerificationPropertyItemObjectResponse,
  client: Client,
): VerificationPropertyItemObject => {
  return {
    ...property,
  } satisfies VerificationPropertyItemObject;
};

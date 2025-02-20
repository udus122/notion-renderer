import type { VerificationPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { VerificationPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToVerificationPropertyItem = (
  property: VerificationPropertyItemObjectResponse,
  client: Client,
): VerificationPropertyItemObject => {
  return {
    ...property,
  } satisfies VerificationPropertyItemObject;
};

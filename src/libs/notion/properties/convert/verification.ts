import type { VerificationPropertyItemObject } from "../../../../types/notion/pages/properties/verification.js";
import type { VerificationPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToVerificationPropertyItem = (
  property: VerificationPropertyItemObjectResponse,
): VerificationPropertyItemObject => {
  return {
    ...property,
  } satisfies VerificationPropertyItemObject;
};

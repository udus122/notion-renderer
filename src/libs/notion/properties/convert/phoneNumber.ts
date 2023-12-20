import type { PhoneNumberPropertyItemObject } from "../../../../types/notion/property/phoneNumber.js";
import type { PhoneNumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPhoneNumberPropertyItem = (
  property: PhoneNumberPropertyItemObjectResponse,
): PhoneNumberPropertyItemObject => {
  return {
    ...property,
  } satisfies PhoneNumberPropertyItemObject;
};

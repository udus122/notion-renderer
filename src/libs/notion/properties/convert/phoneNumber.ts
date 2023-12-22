import type { PhoneNumberPropertyItemObject } from "../../../../types/notion/property/phoneNumber.js";
import type { Client } from "@notionhq/client";
import type { PhoneNumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPhoneNumberPropertyItem = (
  property: PhoneNumberPropertyItemObjectResponse,
  client: Client,
): PhoneNumberPropertyItemObject => {
  return {
    ...property,
  } satisfies PhoneNumberPropertyItemObject;
};

import type { CheckboxPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { CheckboxPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToCheckboxPropertyItem = (
  property: CheckboxPropertyItemObjectResponse,
  client: Client,
): CheckboxPropertyItemObject => {
  return {
    ...property,
  } satisfies CheckboxPropertyItemObject;
};

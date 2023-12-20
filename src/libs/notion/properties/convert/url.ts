import type { UrlPropertyItemObject } from "../../../../types/notion/property/url.js";
import type { UrlPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToUrlPropertyItem = (
  property: UrlPropertyItemObjectResponse,
): UrlPropertyItemObject => {
  return {
    ...property,
  } satisfies UrlPropertyItemObject;
};

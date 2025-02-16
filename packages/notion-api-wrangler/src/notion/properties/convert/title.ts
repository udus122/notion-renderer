import type { TitlePropertyItemObject } from "@repo/notion-types";
import type { Overwrite } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToTitlePropertyItem = (
  property: TitlePropertyItemObjectResponse,
  client: Client,
): TitlePropertyItemObject => {
  return {
    ...property,
    title: Array.isArray(property.title) ? property.title : [property.title],
  } satisfies TitlePropertyItemObject;
};

export const convertListResponseToTitlePropertyItem = (
  list: Overwrite<
    PropertyItemPropertyItemListResponse,
    {
      property_item: Extract<
        PropertyItemPropertyItemListResponse["property_item"],
        { type: "title" }
      >;
    }
  >,
  client: Client,
): TitlePropertyItemObject => {
  const titlePropertyItemObject = {
    ...list.property_item,
    title: list.results.filter(isTitleTypeObject).map((result) => result.title),
  } satisfies TitlePropertyItemObject;

  return titlePropertyItemObject;
};

export const isTitleTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is TitlePropertyItemObjectResponse => obj.type === "title";

import type { TitlePropertyItemObject } from "../../../../types/notion/pages/properties/title.js";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { Overwrite } from "src/types/utils.js";

export const convertResponseToTitlePropertyItem = (
  property: TitlePropertyItemObjectResponse,
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

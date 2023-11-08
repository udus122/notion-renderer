import type { PageObject } from "./types/notion/pages/page.js";
import type { Properties } from "./types/notion/pages/properties/properties.js";
import type { TitlePropertyItemObject } from "./types/notion/pages/properties/title.js";
import type { RichText } from "./types/notion/richText/richText.js";
import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const splitTitleAndOtherProperties = (
  properties: Properties | PageObjectResponse["properties"]
) => {
  let title: TitlePropertyItemObject | undefined;
  const other: Properties = {};

  Object.entries(properties).forEach(([key, value]) => {
    if (isTitleProperty(value)) {
      title = value;
    } else {
      other[key] = value;
    }
  });

  return { title, other };
};

export const extractTitle = (
  pageOrDatabase: PageObject | PageObjectResponse | DatabaseObjectResponse
): RichText | RichTextItemResponse[] => {
  if (pageOrDatabase.object === "page") {
    const { title } = splitTitleAndOtherProperties(pageOrDatabase.properties);
    return title?.title ?? [];
  }

  if (pageOrDatabase.object === "database") {
    return pageOrDatabase.title;
  }

  return [];
};

export const isTitleProperty = (
  property: PageObjectResponse["properties"][string] | Properties[string]
): property is TitlePropertyItemObject => property.type === "title";

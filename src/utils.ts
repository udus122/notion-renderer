import type {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type TitleProperty = Extract<
  PageObjectResponse["properties"][string],
  { type: "title" }
>;

export const extractTitle = (
  pageOrDatabase: PageObjectResponse | DatabaseObjectResponse
) => {
  if (pageOrDatabase.object === "page") {
    return extractTitlePropertyFromPage(pageOrDatabase.properties)?.title ?? [];
  }

  if (pageOrDatabase.object === "database") {
    return pageOrDatabase.title;
  }

  return [];
};

export const extractTitlePropertyFromPage = (
  page_properties: PageObjectResponse["properties"]
) => {
  for (const property of Object.values(page_properties)) {
    if (isTitleProperty(property)) {
      return property;
    }
  }
  return;
};

export const isTitleProperty = (
  property: PageObjectResponse["properties"][string]
): property is TitleProperty => property.type === "title";

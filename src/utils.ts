import type {
  PageObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export function extractTitleProperty(
  page_or_database: PageObjectResponse | DatabaseObjectResponse
) {
  if (page_or_database.object === "database") {
    return page_or_database.title;
  }
  if (page_or_database.object === "page") {
    return Object.values(page_or_database.properties).filter(
      (
        property
      ): property is Extract<
        PageObjectResponse["properties"][string],
        { type: "title" }
      > => property.type === "title"
    )[0].title;
  }
  return [];
}

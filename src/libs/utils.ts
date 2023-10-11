import type {
  PageObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export function extractTitleProperty(
  page_or_database: PageObjectResponse | DatabaseObjectResponse
) {
  return Object.values(page_or_database.properties).filter(
    (
      property
    ): property is Extract<
      PageObjectResponse["properties"][string],
      { type: "title" }
    > => property.type === "title"
  )[0];
}

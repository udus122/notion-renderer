import { callAPIWithBackOff } from "../../utils.js";
import { notion } from "../auth.js";
import { convertResponseToRichText } from "../richText/richText.js";

import type { PeoplePropertyItemObject } from "../../../types/notion/propertyItem/people.js";
import type { RelationPropertyItemObject } from "../../../types/notion/propertyItem/relation.js";
import type { RichTextPropertyItemObject } from "../../../types/notion/propertyItem/richText.js";
import type { RollupPropertyItemObject } from "../../../types/notion/propertyItem/rollup.js";
import type { TitlePropertyItemObject } from "../../../types/notion/propertyItem/title.js";
import type {
  GetPagePropertyParameters,
  GetPagePropertyResponse,
  PeoplePropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RelationPropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrievePageProperty = async (
  args: GetPagePropertyParameters
): Promise<GetPagePropertyResponse | undefined> => {
  const { payload, error } = await callAPIWithBackOff<
    GetPagePropertyParameters,
    GetPagePropertyResponse
  >(notion.pages.properties.retrieve, args);

  if (error) {
    return;
  }

  if (payload.object === "list") {
    if (payload.next_cursor) {
      const nextResults = (await retrievePageProperty({
        ...args,
        start_cursor: payload.next_cursor,
      })) as PropertyItemPropertyItemListResponse | undefined;
      if (nextResults) {
        payload.results = [...payload.results, ...nextResults.results];
      }
    }
  }

  return payload;
};

export const fetchPageProperty = async (pageId: string, propertyId: string) => {
  const pageProperty = await retrievePageProperty({
    page_id: pageId,
    property_id: propertyId,
  });

  if (!pageProperty) {
    return;
  }

  if (pageProperty.object === "property_item") {
    return pageProperty;
  }

  if (pageProperty.object === "list") {
    const { property_item, results } = pageProperty;

    switch (property_item.type) {
      case "title": {
        return {
          ...property_item,
          title: await convertResponseToRichText(
            (results as TitlePropertyItemObjectResponse[]).map(
              (result) => result.title
            )
          ),
        } satisfies TitlePropertyItemObject;
      }
      case "rich_text": {
        return {
          ...property_item,
          rich_text: await convertResponseToRichText(
            (results as RichTextPropertyItemObjectResponse[]).map(
              (result) => result.rich_text
            )
          ),
        } satisfies RichTextPropertyItemObject;
      }
      case "people": {
        return {
          ...property_item,
          people: (results as PeoplePropertyItemObjectResponse[]).map(
            (result) => result.people
          ),
        } satisfies PeoplePropertyItemObject;
      }
      case "relation": {
        return {
          ...property_item,
          relation: (results as RelationPropertyItemObjectResponse[]).map(
            (result) => result.relation
          ),
          // relation: await (
          //   results as RelationPropertyItemObjectResponse[]
          // ).reduce<Promise<RelationPropertyItemObjectRelationItem>>(
          //   async (prev, cur) => {
          //     const page = await fetchPage(cur.relation.id);
          //     return [
          //       ...(await prev),
          //       {
          //         ...cur.relation,
          //         page,
          //       },
          //     ];
          //   },
          //   Promise.resolve([])
          // ),
        } satisfies RelationPropertyItemObject;
      }
      case "rollup": {
        return {
          ...property_item,
        } satisfies RollupPropertyItemObject;
      }
      default:
        break;
    }
    return pageProperty;
  }
  return;
};

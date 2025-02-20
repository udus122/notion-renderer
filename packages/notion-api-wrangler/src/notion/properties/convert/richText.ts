import type { RichTextPropertyItemObject } from "@udus/notion-types";
import type { Overwrite } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RichTextPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToRichTextPropertyItem = (
  property: RichTextPropertyItemObjectResponse,
  client: Client,
): RichTextPropertyItemObject => {
  return {
    ...property,
    rich_text: Array.isArray(property.rich_text)
      ? property.rich_text
      : [property.rich_text],
  } satisfies RichTextPropertyItemObject;
};

export const convertListResponseToRichTextPropertyItem = (
  list: Overwrite<
    PropertyItemPropertyItemListResponse,
    {
      property_item: Extract<
        PropertyItemPropertyItemListResponse["property_item"],
        { type: "rich_text" }
      >;
    }
  >,
  client: Client,
): RichTextPropertyItemObject => {
  const rich_textPropertyItemObject = {
    ...list.property_item,
    rich_text: list.results
      .filter(isRichTextTypeObject)
      .map((result) => result.rich_text),
  } satisfies RichTextPropertyItemObject;

  return rich_textPropertyItemObject;
};

export const isRichTextTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is RichTextPropertyItemObjectResponse => obj.type === "rich_text";

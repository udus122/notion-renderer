import type { RichTextPropertyItemObject } from '@udus/notion-types';
import type { Overwrite } from '@udus/notion-types';
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RichTextPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToRichTextPropertyItem = (
  property: RichTextPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
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
        PropertyItemPropertyItemListResponse['property_item'],
        { type: 'rich_text' }
      >;
    }
  >,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
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
): obj is RichTextPropertyItemObjectResponse => obj.type === 'rich_text';

import type { TitlePropertyItemObject } from '@udus/notion-types';
import type { Overwrite } from '@udus/notion-types';
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  TitlePropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToTitlePropertyItem = (
  property: TitlePropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
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
        PropertyItemPropertyItemListResponse['property_item'],
        { type: 'title' }
      >;
    }
  >,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): TitlePropertyItemObject => {
  const titlePropertyItemObject = {
    ...list.property_item,
    title: list.results.filter(isTitleTypeObject).map((result) => result.title),
  } satisfies TitlePropertyItemObject;

  return titlePropertyItemObject;
};

export const isTitleTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is TitlePropertyItemObjectResponse => obj.type === 'title';

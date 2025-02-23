import type { PeoplePropertyItemObject } from '@udus/notion-types';
import type { Overwrite } from '@udus/notion-types';
import type {
  PeoplePropertyItemObjectResponse,
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToPeoplePropertyItem = (
  property: PeoplePropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): PeoplePropertyItemObject => {
  const peoplePropertyItemObject = {
    ...property,
    people: Array.isArray(property.people)
      ? property.people
      : [property.people],
  } satisfies PeoplePropertyItemObject;
  return peoplePropertyItemObject;
};

export const convertListResponseToPeoplePropertyItem = (
  list: Overwrite<
    PropertyItemPropertyItemListResponse,
    {
      property_item: Extract<
        PropertyItemPropertyItemListResponse['property_item'],
        { type: 'people' }
      >;
    }
  >,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): PeoplePropertyItemObject => {
  const peoplePropertyItemObject = {
    ...list.property_item,
    people: list.results
      .filter(isPeopleTypeObject)
      .map((result) => result.people),
  } satisfies PeoplePropertyItemObject;

  return peoplePropertyItemObject;
};

export const isPeopleTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is PeoplePropertyItemObjectResponse => obj.type === 'people';

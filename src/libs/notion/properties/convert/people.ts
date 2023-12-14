import type { PeoplePropertyItemObject } from "../../../../types/notion/pages/properties/people.js";
import type { Overwrite } from "../../../../types/utils.js";
import type {
  PeoplePropertyItemObjectResponse,
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPeoplePropertyItem = (
  property: PeoplePropertyItemObjectResponse,
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
        PropertyItemPropertyItemListResponse["property_item"],
        { type: "people" }
      >;
    }
  >,
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
): obj is PeoplePropertyItemObjectResponse => obj.type === "people";

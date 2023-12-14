import { isFullPage } from "@notionhq/client";

import { retrievePage } from "../pages.js";

import type {
  RelationItem,
  RelationPropertyItemObject,
} from "../../../../types/notion/pages/properties/relation.js";
import type { Overwrite } from "../../../../types/utils.js";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RelationPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRelationPropertyItem = (
  property: RelationPropertyItemObjectResponse,
): RelationPropertyItemObject => {
  return {
    ...property,
    relation: Array.isArray(property.relation)
      ? property.relation
      : [property.relation],
  } satisfies RelationPropertyItemObject;
};

export const convertListResponseToRelationPropertyItem = async (
  list: Overwrite<
    PropertyItemPropertyItemListResponse,
    {
      property_item: Extract<
        PropertyItemPropertyItemListResponse["property_item"],
        { type: "relation" }
      >;
    }
  >,
): Promise<RelationPropertyItemObject> => {
  const relationPropertyItemObject = {
    ...list.property_item,
    relation: await list.results
      .filter(isRelationTypeObject)
      .reduce<Promise<Array<RelationItem>>>(async (prev, cur) => {
        const { ok, data: page } = await retrievePage({
          page_id: cur.relation.id,
        });

        if (!ok || !isFullPage(page)) {
          return prev;
        }

        return [
          ...(await prev),
          {
            ...cur.relation,
            page,
          } satisfies RelationItem,
        ];
      }, Promise.resolve([])),
  } satisfies RelationPropertyItemObject;

  return relationPropertyItemObject;
};

export const isRelationTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is RelationPropertyItemObjectResponse => obj.type === "relation";

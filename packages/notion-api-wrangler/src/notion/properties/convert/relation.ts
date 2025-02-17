import { type Client, isFullPage } from "@notionhq/client";

import { retrievePage } from "../../pages/retrieve";

import type {
  RelationItem,
  RelationPropertyItemObject,
} from "@udus/notion-types";
import type { Overwrite } from "@udus/notion-types";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RelationPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToRelationPropertyItem = (
  property: RelationPropertyItemObjectResponse,
  client: Client,
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
  client: Client,
): Promise<RelationPropertyItemObject> => {
  const relationPropertyItemObject = {
    ...list.property_item,
    relation: await list.results
      .filter(isRelationTypeObject)
      .reduce<Promise<Array<RelationItem>>>(async (prev, cur) => {
        const { ok, data: page } = await retrievePage(client, {
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

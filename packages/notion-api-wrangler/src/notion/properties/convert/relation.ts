import { isFullPage } from '@notionhq/client';

import { retrievePage } from '../../pages/retrieve';

import type {
  RelationItem,
  RelationPropertyItemObject,
} from '@udus/notion-types';
import type { Overwrite } from '@udus/notion-types';
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RelationPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToRelationPropertyItem = (
  property: RelationPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
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
        PropertyItemPropertyItemListResponse['property_item'],
        { type: 'relation' }
      >;
    }
  >,
  options: FetchOptions,
): Promise<RelationPropertyItemObject> => {
  const relationPropertyItemObject = {
    ...list.property_item,
    relation: await list.results
      .filter(isRelationTypeObject)
      .reduce<Promise<Array<RelationItem>>>(async (prev, cur) => {
        const { ok, data: page } = await retrievePage(
          { page_id: cur.relation.id },
          options,
        );

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
): obj is RelationPropertyItemObjectResponse => obj.type === 'relation';

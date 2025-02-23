import type { RollupPropertyItemObject } from '@udus/notion-types';
import type { Overwrite } from '@udus/notion-types';
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RollupPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToRollupPropertyItem = (
  property: RollupPropertyItemObjectResponse,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): RollupPropertyItemObject => {
  return {
    ...property,
  } satisfies RollupPropertyItemObject;
};

export const convertListResponseToRollupPropertyItem = (
  list: Overwrite<
    PropertyItemPropertyItemListResponse,
    {
      property_item: Extract<
        PropertyItemPropertyItemListResponse['property_item'],
        { type: 'rollup' }
      >;
    }
  >,
  // biome-ignore lint/correctness/noUnusedVariables: Set to maintain consistency with other functions, but not used
  options: FetchOptions,
): RollupPropertyItemObject => {
  const rollupPropertyItemObject = {
    ...list.property_item,
  } satisfies RollupPropertyItemObject;

  return rollupPropertyItemObject;
};

export const isRollupTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is RollupPropertyItemObjectResponse => obj.type === 'rollup';

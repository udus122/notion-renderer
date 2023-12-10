import type { RollupPropertyItemObject } from "../../../../types/notion/pages/properties/rollup.js";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RollupPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { Overwrite } from "src/types/utils.js";

export const convertResponseToRollupPropertyItem = (
  property: RollupPropertyItemObjectResponse,
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
        PropertyItemPropertyItemListResponse["property_item"],
        { type: "rollup" }
      >;
    }
  >,
): RollupPropertyItemObject => {
  const rollupPropertyItemObject = {
    ...list.property_item,
  } satisfies RollupPropertyItemObject;

  return rollupPropertyItemObject;
};

export const isRollupTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is RollupPropertyItemObjectResponse => obj.type === "rollup";

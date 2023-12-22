import type { RollupPropertyItemObject } from "../../../../types/notion/property/rollup.js";
import type { Overwrite } from "../../../../types/utils.js";
import type { Client } from "@notionhq/client";
import type {
  PropertyItemObjectResponse,
  PropertyItemPropertyItemListResponse,
  RollupPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToRollupPropertyItem = (
  property: RollupPropertyItemObjectResponse,
  client: Client,
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
  client: Client,
): RollupPropertyItemObject => {
  const rollupPropertyItemObject = {
    ...list.property_item,
  } satisfies RollupPropertyItemObject;

  return rollupPropertyItemObject;
};

export const isRollupTypeObject = (
  obj: PropertyItemObjectResponse,
): obj is RollupPropertyItemObjectResponse => obj.type === "rollup";

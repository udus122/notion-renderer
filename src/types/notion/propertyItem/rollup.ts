import type { PropertyItemProps } from "./propertyItem.js";
import type { PartialBy } from "../../../types/utils.js";
import type { RollupPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RollupFunction =
  RollupPropertyItemObjectResponse["rollup"]["function"];

export type RollupPropertyItemObject = PartialBy<
  RollupPropertyItemObjectResponse,
  "object"
>;

export type RollupPropertyItemProps =
  PropertyItemProps<RollupPropertyItemObject> & {
    format?: string;
  };

export type RollupPropertyItemComponent =
  ComponentType<RollupPropertyItemProps>;

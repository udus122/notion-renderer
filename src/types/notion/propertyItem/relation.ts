import type { PropertyItemProps } from "./propertyItem.js";
import type { Overwrite, PartialBy } from "../../../types/utils.js";
import type { RelationPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RelationPropertyItemObject = PartialBy<
  Overwrite<
    RelationPropertyItemObjectResponse,
    { relation: Array<RelationPropertyItemObjectResponse["relation"]> }
  >,
  "object"
>;

export type RelationPropertyItemProps =
  PropertyItemProps<RelationPropertyItemObject>;

export type RelationPropertyItemComponent =
  ComponentType<RelationPropertyItemProps>;

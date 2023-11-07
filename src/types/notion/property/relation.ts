import type { PropertyItemProps } from "./propertyItem.js";
import type { Overwrite, PartialBy } from "../../utils.js";
import type {
  PageObjectResponse,
  RelationPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RelationItem = RelationPropertyItemObjectResponse["relation"] & {
  page?: PageObjectResponse;
};

export type RelationPropertyItemObjectRelationItem = Array<RelationItem>;

export type RelationPropertyItemObject = PartialBy<
  Overwrite<
    RelationPropertyItemObjectResponse,
    {
      relation: RelationPropertyItemObjectRelationItem;
    }
  >,
  "object"
>;

export type RelationPropertyItemProps =
  PropertyItemProps<RelationPropertyItemObject>;

export type RelationPropertyItemComponent =
  ComponentType<RelationPropertyItemProps>;

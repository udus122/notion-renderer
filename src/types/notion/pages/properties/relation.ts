import type { PropertyItemProps } from "./properties.js";
import type { Overwrite, PartialBy } from "../../../utils.js";
import type {
  PageObjectResponse,
  RelationPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RelationItem = RelationPropertyItemObjectResponse["relation"] & {
  page?: PageObjectResponse;
};

export type RelationPropertyItemObject = PartialBy<
  Overwrite<
    RelationPropertyItemObjectResponse,
    {
      relation: Array<RelationItem>;
    }
  >,
  "object"
>;

export type RelationPropertyItemProps =
  PropertyItemProps<RelationPropertyItemObject>;

export type RelationPropertyItemComponent =
  ComponentType<RelationPropertyItemProps>;

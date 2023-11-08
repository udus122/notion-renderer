import type { PropertyItemProps } from "./propertyItem.js";
import type { Overwrite, PartialBy } from "../../../utils.js";
import type { PageObject } from "../page.js";
import type { RelationPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RelationItem = RelationPropertyItemObjectResponse["relation"] & {
  page?: PageObject;
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

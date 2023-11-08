import type { PropertyItemProps } from "./propertyItem.js";
import type { NumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type NumberPropertyItemObject = NumberPropertyItemObjectResponse;

export type NumberPropertyItemProps =
  PropertyItemProps<NumberPropertyItemObject>;

export type NumberPropertyItemComponent =
  ComponentType<NumberPropertyItemProps>;

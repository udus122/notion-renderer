import type { PropertyItemProps } from "./propertyItem.js";
import type { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type MultiSelectPropertyItemObject =
  MultiSelectPropertyItemObjectResponse;

export type MultiSelectPropertyItemProps =
  PropertyItemProps<MultiSelectPropertyItemObject>;

export type MultiSelectPropertyItemComponent =
  ComponentType<MultiSelectPropertyItemProps>;

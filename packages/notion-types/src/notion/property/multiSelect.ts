import type { PropertyItemProps } from "./properties";
import type { MultiSelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type MultiSelectPropertyItemObject =
  MultiSelectPropertyItemObjectResponse;

export type MultiSelectPropertyItemProps =
  PropertyItemProps<MultiSelectPropertyItemObject>;

export type MultiSelectPropertyItemComponent =
  ComponentType<MultiSelectPropertyItemProps>;

import type { PropertyItemProps } from "./properties";
import type { NumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type NumberPropertyItemObject = NumberPropertyItemObjectResponse;

export type NumberPropertyItemProps =
  PropertyItemProps<NumberPropertyItemObject>;

export type NumberPropertyItemComponent =
  ComponentType<NumberPropertyItemProps>;

import type { PropertyItemProps } from "./properties";
import type { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type SelectPropertyItemObject = SelectPropertyItemObjectResponse;

export type SelectPropertyItemProps =
  PropertyItemProps<SelectPropertyItemObject>;

export type SelectPropertyItemComponent =
  ComponentType<SelectPropertyItemProps>;

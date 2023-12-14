import type { PropertyValueProps } from "./properties.js";
import type { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type SelectPropertyItemObject = SelectPropertyItemObjectResponse;

export type SelectPropertyItemProps =
  PropertyValueProps<SelectPropertyItemObject>;

export type SelectPropertyItemComponent =
  ComponentType<SelectPropertyItemProps>;

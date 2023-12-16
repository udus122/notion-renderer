import type { PropertyValueProps } from "./properties.js";
import type { CheckboxPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CheckboxPropertyItemObject = CheckboxPropertyItemObjectResponse;

export type CheckboxPropertyItemProps =
  PropertyValueProps<CheckboxPropertyItemObject>;

export type CheckboxPropertyItemComponent =
  ComponentType<CheckboxPropertyItemProps>;

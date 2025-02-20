import type { PropertyItemProps } from "./properties";
import type { CheckboxPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type CheckboxPropertyItemObject = CheckboxPropertyItemObjectResponse;

export type CheckboxPropertyItemProps =
  PropertyItemProps<CheckboxPropertyItemObject>;

export type CheckboxPropertyItemComponent =
  ComponentType<CheckboxPropertyItemProps>;

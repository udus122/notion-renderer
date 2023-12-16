import type { PropertyItemProps } from "./properties.js";
import type { StatusPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type StatusPropertyItemObject = StatusPropertyItemObjectResponse;

export type StatusPropertyItemProps =
  PropertyItemProps<StatusPropertyItemObject>;

export type StatusPropertyItemComponent =
  ComponentType<StatusPropertyItemProps>;

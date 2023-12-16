import type { PropertyValueProps } from "./properties.js";
import type { UniqueIdPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type UniqueIdPropertyItemObject = UniqueIdPropertyItemObjectResponse;

export type UniqueIdPropertyItemProps =
  PropertyValueProps<UniqueIdPropertyItemObject>;

export type UniqueIdPropertyItemComponent =
  ComponentType<UniqueIdPropertyItemProps>;

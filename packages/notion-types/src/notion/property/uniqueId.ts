import type { PropertyItemProps } from "./properties";
import type { UniqueIdPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type UniqueIdPropertyItemObject = UniqueIdPropertyItemObjectResponse;

export type UniqueIdPropertyItemProps =
  PropertyItemProps<UniqueIdPropertyItemObject>;

export type UniqueIdPropertyItemComponent =
  ComponentType<UniqueIdPropertyItemProps>;

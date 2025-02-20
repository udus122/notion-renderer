import type { PropertyItemProps } from "./properties";
import type { CreatedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type CreatedTimePropertyItemObject =
  CreatedTimePropertyItemObjectResponse;

export type CreatedTimePropertyItemProps =
  PropertyItemProps<CreatedTimePropertyItemObject> & {
    format?: string;
  };

export type CreatedTimePropertyItemComponent =
  ComponentType<CreatedTimePropertyItemProps>;

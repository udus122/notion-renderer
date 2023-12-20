import type { PropertyItemProps } from "./properties.js";
import type { CreatedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CreatedTimePropertyItemObject =
  CreatedTimePropertyItemObjectResponse;

export type CreatedTimePropertyItemProps =
  PropertyItemProps<CreatedTimePropertyItemObject> & {
    format?: string;
  };

export type CreatedTimePropertyItemComponent =
  ComponentType<CreatedTimePropertyItemProps>;

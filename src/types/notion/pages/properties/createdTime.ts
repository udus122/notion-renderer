import type { PropertyValueProps } from "./properties.js";
import type { CreatedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CreatedTimePropertyItemObject =
  CreatedTimePropertyItemObjectResponse;

export type CreatedTimePropertyItemProps =
  PropertyValueProps<CreatedTimePropertyItemObject> & {
    format?: string;
  };

export type CreatedTimePropertyItemComponent =
  ComponentType<CreatedTimePropertyItemProps>;

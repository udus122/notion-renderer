import type { PropertyItemProps } from "./properties.js";
import type { LastEditedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type LastEditedTimePropertyItemObject =
  LastEditedTimePropertyItemObjectResponse;

export type LastEditedTimePropertyItemProps =
  PropertyItemProps<LastEditedTimePropertyItemObject> & {
    format?: string;
  };

export type LastEditedTimePropertyItemComponent =
  ComponentType<LastEditedTimePropertyItemProps>;

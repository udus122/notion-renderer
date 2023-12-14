import type { PropertyValueProps } from "./properties.js";
import type { LastEditedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type LastEditedTimePropertyItemObject =
  LastEditedTimePropertyItemObjectResponse;

export type LastEditedTimePropertyItemProps =
  PropertyValueProps<LastEditedTimePropertyItemObject> & {
    format?: string;
  };

export type LastEditedTimePropertyItemComponent =
  ComponentType<LastEditedTimePropertyItemProps>;

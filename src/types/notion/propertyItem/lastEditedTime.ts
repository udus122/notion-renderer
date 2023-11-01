import type { PropertyItemProps } from "./propertyItem.js";
import type { LastEditedTimePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type LastEditedTimePropertyItemObject =
  LastEditedTimePropertyItemObjectResponse;

export type LastEditedTimePropertyItemProps =
  PropertyItemProps<LastEditedTimePropertyItemObject>;

export type LastEditedTimePropertyItemComponent =
  ComponentType<LastEditedTimePropertyItemProps>;

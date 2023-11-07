import type { PropertyItemProps } from "./propertyItem.js";
import type { DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type DatePropertyItemObject = DatePropertyItemObjectResponse;

export type DatePropertyItemProps =
  PropertyItemProps<DatePropertyItemObject> & {
    format?: string;
  };

export type DatePropertyItemComponent = ComponentType<DatePropertyItemProps>;

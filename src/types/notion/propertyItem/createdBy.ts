import type { PropertyItemProps } from "./propertyItem.js";
import type { CreatedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type CreatedByPropertyItemObject = CreatedByPropertyItemObjectResponse;

export type CreatedByPropertyItemProps =
  PropertyItemProps<CreatedByPropertyItemObject>;

export type CreatedByPropertyItemComponent =
  ComponentType<CreatedByPropertyItemProps>;

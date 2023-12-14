import type { PropertyValueProps } from "./properties.js";
import type { LastEditedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type LastEditedByPropertyItemObject =
  LastEditedByPropertyItemObjectResponse;

export type LastEditedByPropertyItemProps =
  PropertyValueProps<LastEditedByPropertyItemObject>;

export type LastEditedByPropertyItemComponent =
  ComponentType<LastEditedByPropertyItemProps>;

import type { PropertyItemProps } from "./properties";
import type { LastEditedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type LastEditedByPropertyItemObject =
  LastEditedByPropertyItemObjectResponse;

export type LastEditedByPropertyItemProps =
  PropertyItemProps<LastEditedByPropertyItemObject>;

export type LastEditedByPropertyItemComponent =
  ComponentType<LastEditedByPropertyItemProps>;

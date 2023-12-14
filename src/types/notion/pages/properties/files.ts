import type { PropertyValueProps } from "./properties.js";
import type { FilesPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type FilesPropertyItemObject = FilesPropertyItemObjectResponse;

export type FilesPropertyItemProps =
  PropertyValueProps<FilesPropertyItemObject>;

export type FilesPropertyItemComponent = ComponentType<FilesPropertyItemProps>;

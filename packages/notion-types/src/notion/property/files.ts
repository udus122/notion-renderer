import type { PropertyItemProps } from "./properties";
import type { FilesPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type FilesPropertyItemObject = FilesPropertyItemObjectResponse;

export type FilesPropertyItemProps = PropertyItemProps<FilesPropertyItemObject>;

export type FilesPropertyItemComponent = ComponentType<FilesPropertyItemProps>;

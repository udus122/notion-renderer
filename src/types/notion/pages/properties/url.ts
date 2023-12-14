import type { PropertyValueProps } from "./properties.js";
import type { UrlPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type UrlPropertyItemObject = UrlPropertyItemObjectResponse;

export type UrlPropertyItemProps = PropertyValueProps<UrlPropertyItemObject>;

export type UrlPropertyItemComponent = ComponentType<UrlPropertyItemProps>;

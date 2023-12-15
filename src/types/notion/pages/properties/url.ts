import type { PropertyItemProps } from "./properties.js";
import type { UrlPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type UrlPropertyItemObject = UrlPropertyItemObjectResponse;

export type UrlPropertyItemProps = PropertyItemProps<UrlPropertyItemObject>;

export type UrlPropertyItemComponent = ComponentType<UrlPropertyItemProps>;

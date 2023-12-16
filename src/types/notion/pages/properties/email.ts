import type { PropertyValueProps } from "./properties.js";
import type { EmailPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type EmailPropertyItemObject = EmailPropertyItemObjectResponse;

export type EmailPropertyItemProps =
  PropertyValueProps<EmailPropertyItemObject>;

export type EmailPropertyItemComponent = ComponentType<EmailPropertyItemProps>;

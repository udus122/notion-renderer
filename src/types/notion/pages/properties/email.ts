import type { PropertyItemProps } from "./propertyItem.js";
import type { EmailPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type EmailPropertyItemObject = EmailPropertyItemObjectResponse;

export type EmailPropertyItemProps = PropertyItemProps<EmailPropertyItemObject>;

export type EmailPropertyItemComponent = ComponentType<EmailPropertyItemProps>;

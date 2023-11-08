import type { PropertyItemProps } from "./propertyItem.js";
import type { PhoneNumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type PhoneNumberPropertyItemObject =
  PhoneNumberPropertyItemObjectResponse;

export type PhoneNumberPropertyItemProps =
  PropertyItemProps<PhoneNumberPropertyItemObject>;

export type PhoneNumberPropertyItemComponent =
  ComponentType<PhoneNumberPropertyItemProps>;

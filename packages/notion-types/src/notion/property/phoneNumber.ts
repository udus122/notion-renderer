import type { PropertyItemProps } from "./properties";
import type { PhoneNumberPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type PhoneNumberPropertyItemObject =
  PhoneNumberPropertyItemObjectResponse;

export type PhoneNumberPropertyItemProps =
  PropertyItemProps<PhoneNumberPropertyItemObject>;

export type PhoneNumberPropertyItemComponent =
  ComponentType<PhoneNumberPropertyItemProps>;

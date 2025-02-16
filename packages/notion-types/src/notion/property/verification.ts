import type { PropertyItemProps } from "./properties.js";
import type { VerificationPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type VerificationPropertyItemObject =
  VerificationPropertyItemObjectResponse;

export type VerificationPropertyItemProps =
  PropertyItemProps<VerificationPropertyItemObject>;

export type VerificationPropertyItemComponent =
  ComponentType<VerificationPropertyItemProps>;

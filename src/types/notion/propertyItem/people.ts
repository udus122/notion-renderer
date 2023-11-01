import type { PropertyItemProps } from "./propertyItem.js";
import type { PeoplePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";
import type { Overwrite } from "src/types/utils.js";

export type PeoplePropertyItemObject = Overwrite<
  PeoplePropertyItemObjectResponse,
  { people: Array<PeoplePropertyItemObjectResponse["people"]> }
>;

export type PeoplePropertyItemProps =
  PropertyItemProps<PeoplePropertyItemObject>;

export type PeoplePropertyItemComponent =
  ComponentType<PeoplePropertyItemProps>;

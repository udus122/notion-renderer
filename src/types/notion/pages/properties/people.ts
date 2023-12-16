import type { PropertyItemProps } from "./properties.js";
import type { Overwrite, PartialBy } from "../../../../types/utils.js";
import type { PeoplePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type PeoplePropertyItemObject = PartialBy<
  Overwrite<
    PeoplePropertyItemObjectResponse,
    { people: Array<PeoplePropertyItemObjectResponse["people"]> }
  >,
  "object"
>;

export type PeoplePropertyItemProps =
  PropertyItemProps<PeoplePropertyItemObject>;

export type PeoplePropertyItemComponent =
  ComponentType<PeoplePropertyItemProps>;

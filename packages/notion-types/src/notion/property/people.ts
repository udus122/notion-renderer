import type { PropertyItemProps } from "./properties";
import type { Overwrite, PartialBy } from "../../utils";
import type { PeoplePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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

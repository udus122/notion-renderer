import type { PropertyItemProps } from "./properties";
import type { PartialBy } from "../../utils";
import type { RollupPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type RollupFunction =
  RollupPropertyItemObjectResponse["rollup"]["function"];

export type RollupPropertyItemObject = PartialBy<
  RollupPropertyItemObjectResponse,
  "object"
>;

export type RollupPropertyItemProps =
  PropertyItemProps<RollupPropertyItemObject> & {
    format?: string;
  };

export type RollupPropertyItemComponent =
  ComponentType<RollupPropertyItemProps>;

import type { PropertyItemProps } from "./properties.js";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type FormulaPropertyItemObject = FormulaPropertyItemObjectResponse;

export type FormulaPropertyItemProps =
  PropertyItemProps<FormulaPropertyItemObject> & {
    format?: string;
  };

export type FormulaPropertyItemComponent =
  ComponentType<FormulaPropertyItemProps>;

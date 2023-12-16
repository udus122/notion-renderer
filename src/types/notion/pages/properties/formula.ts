import type { PropertyValueProps } from "./properties.js";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type FormulaPropertyItemObject = FormulaPropertyItemObjectResponse;

export type FormulaPropertyItemProps =
  PropertyValueProps<FormulaPropertyItemObject> & {
    format?: string;
  };

export type FormulaPropertyItemComponent =
  ComponentType<FormulaPropertyItemProps>;

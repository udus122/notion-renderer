import type { PropertyItemProps } from "./properties";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type FormulaPropertyItemObject = FormulaPropertyItemObjectResponse;

export type FormulaPropertyItemProps =
  PropertyItemProps<FormulaPropertyItemObject> & {
    format?: string;
  };

export type FormulaPropertyItemComponent =
  ComponentType<FormulaPropertyItemProps>;

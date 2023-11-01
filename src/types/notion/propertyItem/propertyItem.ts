import type { CheckboxPropertyItemObject } from "./checkbox.js";
import type { ComponentType } from "react";

export type PropertyItemObject = CheckboxPropertyItemObject;

export type PropertyItemProps<
  T extends PropertyItemObject = PropertyItemObject
> = {
  propertyItem: T;
};

export type PropertyItemComponent = ComponentType<PropertyItemProps>;

import type { CheckboxPropertyItemObject } from "./checkbox.js";
import type { RichTextPropertyItemObject } from "./richText.js";
import type { ComponentType } from "react";

export type PropertyItemObject =
  | CheckboxPropertyItemObject
  | RichTextPropertyItemObject;

export type PropertyItemProps<
  T extends PropertyItemObject = PropertyItemObject
> = {
  propertyItem: T;
};

export type PropertyItemComponent = ComponentType<PropertyItemProps>;

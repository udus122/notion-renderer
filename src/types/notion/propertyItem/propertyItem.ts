import type { CheckboxPropertyItemObject } from "./checkbox.js";
import type { NumberPropertyItemObject } from "./number.js";
import type { RichTextPropertyItemObject } from "./richText.js";
import type { TitlePropertyItemObject } from "./title.js";
import type { UrlPropertyItemObject } from "./url.js";
import type { ComponentType } from "react";

export type PropertyItemObject =
  | CheckboxPropertyItemObject
  | RichTextPropertyItemObject
  | TitlePropertyItemObject
  | UrlPropertyItemObject
  | NumberPropertyItemObject;

export type PropertyItemProps<
  T extends PropertyItemObject = PropertyItemObject
> = {
  propertyItem: T;
};

export type PropertyItemComponent = ComponentType<PropertyItemProps>;

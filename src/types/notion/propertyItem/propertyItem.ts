import type { CheckboxPropertyItemObject } from "./checkbox.js";
import type { EmailPropertyItemObject } from "./email.js";
import type { NumberPropertyItemObject } from "./number.js";
import type { PhoneNumberPropertyItemObject } from "./phoneNumber.js";
import type { RichTextPropertyItemObject } from "./richText.js";
import type { SelectPropertyItemObject } from "./select.js";
import type { TitlePropertyItemObject } from "./title.js";
import type { UrlPropertyItemObject } from "./url.js";
import type { ComponentType } from "react";

export type PropertyItemObject =
  | CheckboxPropertyItemObject
  | EmailPropertyItemObject
  | NumberPropertyItemObject
  | PhoneNumberPropertyItemObject
  | RichTextPropertyItemObject
  | SelectPropertyItemObject
  | TitlePropertyItemObject
  | UrlPropertyItemObject;

export type PropertyItemProps<
  T extends PropertyItemObject = PropertyItemObject
> = {
  propertyItem: T;
};

export type PropertyItemComponent = ComponentType<PropertyItemProps>;

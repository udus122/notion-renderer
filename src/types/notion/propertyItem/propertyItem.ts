import type { CheckboxPropertyItemObject } from "./checkbox.js";
import type { CreatedTimePropertyItemObject } from "./createdTime.js";
import type { DatePropertyItemObject } from "./date.js";
import type { EmailPropertyItemObject } from "./email.js";
import type { LastEditedTimePropertyItemObject } from "./lastEditedTime.js";
import type { MultiSelectPropertyItemObject } from "./multiSelect.js";
import type { NumberPropertyItemObject } from "./number.js";
import type { PeoplePropertyItemObject } from "./people.js";
import type { PhoneNumberPropertyItemObject } from "./phoneNumber.js";
import type { RichTextPropertyItemObject } from "./richText.js";
import type { SelectPropertyItemObject } from "./select.js";
import type { StatusPropertyItemObject } from "./status.js";
import type { TitlePropertyItemObject } from "./title.js";
import type { UrlPropertyItemObject } from "./url.js";
import type { ComponentType } from "react";

export type PropertyItemObject =
  | CheckboxPropertyItemObject
  | CreatedTimePropertyItemObject
  | DatePropertyItemObject
  | EmailPropertyItemObject
  | LastEditedTimePropertyItemObject
  | MultiSelectPropertyItemObject
  | NumberPropertyItemObject
  | PeoplePropertyItemObject
  | PhoneNumberPropertyItemObject
  | RichTextPropertyItemObject
  | SelectPropertyItemObject
  | StatusPropertyItemObject
  | TitlePropertyItemObject
  | UrlPropertyItemObject;

export type PropertyItemProps<
  T extends PropertyItemObject = PropertyItemObject
> = {
  propertyItem: T;
};

export type PropertyItemComponent = ComponentType<PropertyItemProps>;

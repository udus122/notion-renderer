import type { CheckboxPropertyItemObject } from "./checkbox.js";
import type { CreatedByPropertyItemObject } from "./createdBy.js";
import type { CreatedTimePropertyItemObject } from "./createdTime.js";
import type { DatePropertyItemObject } from "./date.js";
import type { EmailPropertyItemObject } from "./email.js";
import type { FilesPropertyItemObject } from "./files.js";
import type { FormulaPropertyItemObject } from "./formula.js";
import type { LastEditedByPropertyItemObject } from "./lastEditedBy.js";
import type { LastEditedTimePropertyItemObject } from "./lastEditedTime.js";
import type { MultiSelectPropertyItemObject } from "./multiSelect.js";
import type { NumberPropertyItemObject } from "./number.js";
import type { PeoplePropertyItemObject } from "./people.js";
import type { PhoneNumberPropertyItemObject } from "./phoneNumber.js";
import type { RelationPropertyItemObject } from "./relation.js";
import type { RichTextPropertyItemObject } from "./richText.js";
import type { RollupPropertyItemObject } from "./rollup.js";
import type { SelectPropertyItemObject } from "./select.js";
import type { StatusPropertyItemObject } from "./status.js";
import type { TitlePropertyItemObject } from "./title.js";
import type { UniqueIdPropertyItemObject } from "./uniqueId.js";
import type { UrlPropertyItemObject } from "./url.js";
import type { VerificationPropertyItemObject } from "./verification.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type PropertyName = string;

export type PropertyItemObjectResponse =
  PageObjectResponse["properties"][string];

export type PropertyItemType =
  | CheckboxPropertyItemObject
  | CreatedByPropertyItemObject
  | CreatedTimePropertyItemObject
  | DatePropertyItemObject
  | EmailPropertyItemObject
  | FilesPropertyItemObject
  | FormulaPropertyItemObject
  | LastEditedTimePropertyItemObject
  | LastEditedByPropertyItemObject
  | MultiSelectPropertyItemObject
  | NumberPropertyItemObject
  | PeoplePropertyItemObject
  | PhoneNumberPropertyItemObject
  | RelationPropertyItemObject
  | RichTextPropertyItemObject
  | RollupPropertyItemObject
  | SelectPropertyItemObject
  | StatusPropertyItemObject
  | TitlePropertyItemObject
  | UniqueIdPropertyItemObject
  | UrlPropertyItemObject
  | VerificationPropertyItemObject;

export type PropertyItemProps<T extends PropertyItemType = PropertyItemType> = {
  propertyItem: T;
};

export type PropertyItemComponent = ComponentType<PropertyItemProps>;

export type PropertiesType = Record<PropertyName, PropertyItemType>;

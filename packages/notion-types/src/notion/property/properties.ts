import type { CheckboxPropertyItemObject } from "./checkbox";
import type { CreatedByPropertyItemObject } from "./createdBy";
import type { CreatedTimePropertyItemObject } from "./createdTime";
import type { DatePropertyItemObject } from "./date";
import type { EmailPropertyItemObject } from "./email";
import type { FilesPropertyItemObject } from "./files";
import type { FormulaPropertyItemObject } from "./formula";
import type { LastEditedByPropertyItemObject } from "./lastEditedBy";
import type { LastEditedTimePropertyItemObject } from "./lastEditedTime";
import type { MultiSelectPropertyItemObject } from "./multiSelect";
import type { NumberPropertyItemObject } from "./number";
import type { PeoplePropertyItemObject } from "./people";
import type { PhoneNumberPropertyItemObject } from "./phoneNumber";
import type { RelationPropertyItemObject } from "./relation";
import type { RichTextPropertyItemObject } from "./richText";
import type { RollupPropertyItemObject } from "./rollup";
import type { SelectPropertyItemObject } from "./select";
import type { StatusPropertyItemObject } from "./status";
import type { TitlePropertyItemObject } from "./title";
import type { UniqueIdPropertyItemObject } from "./uniqueId";
import type { UrlPropertyItemObject } from "./url";
import type { VerificationPropertyItemObject } from "./verification";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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

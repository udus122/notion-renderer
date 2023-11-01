import type { PropertyItemProps } from "./propertyItem.js";
import type { Overwrite } from "../../utils.js";
import type { RichText } from "../richText/richText.js";
import type { RichTextPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RichTextPropertyItemObject = Overwrite<
  RichTextPropertyItemObjectResponse,
  {
    rich_text: RichText;
  }
>;

export type RichTextPropertyItemProps =
  PropertyItemProps<RichTextPropertyItemObject>;

export type RichTextPropertyItemComponent =
  ComponentType<RichTextPropertyItemProps>;

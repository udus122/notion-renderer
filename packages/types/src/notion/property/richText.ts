import type { PropertyItemProps } from "./properties.js";
import type { Overwrite, PartialBy } from "../../utils.js";
import type { RichTextType } from "../richText/richText.js";
import type { RichTextPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type RichTextPropertyItemObject = PartialBy<
  Overwrite<
    RichTextPropertyItemObjectResponse,
    {
      rich_text: RichTextType;
    }
  >,
  "object"
>;

export type RichTextPropertyItemProps =
  PropertyItemProps<RichTextPropertyItemObject>;

export type RichTextPropertyItemComponent =
  ComponentType<RichTextPropertyItemProps>;

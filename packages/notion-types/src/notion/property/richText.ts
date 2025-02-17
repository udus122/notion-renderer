import type { PropertyItemProps } from "./properties";
import type { Overwrite, PartialBy } from "../../utils";
import type { RichTextType } from "../richText/richText";
import type { RichTextPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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

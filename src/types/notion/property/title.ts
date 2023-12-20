import type { PropertyItemProps } from "./properties.js";
import type { Overwrite, PartialBy } from "../../utils.js";
import type { RichTextType } from "../richText/richText.js";
import type { TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TitlePropertyItemObject = PartialBy<
  Overwrite<
    TitlePropertyItemObjectResponse,
    {
      title: RichTextType;
    }
  >,
  "object"
>;

export type TitlePropertyItemProps = PropertyItemProps<TitlePropertyItemObject>;

export type TitlePropertyItemComponent = ComponentType<TitlePropertyItemProps>;

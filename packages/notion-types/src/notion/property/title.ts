import type { PropertyItemProps } from "./properties";
import type { Overwrite, PartialBy } from "../../utils";
import type { RichTextType } from "../richText/richText";
import type { TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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

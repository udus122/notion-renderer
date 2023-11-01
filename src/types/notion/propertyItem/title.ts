import type { PropertyItemProps } from "./propertyItem.js";
import type { Overwrite } from "../../utils.js";
import type { RichText } from "../richText/richText.js";
import type { TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TitlePropertyItemObject = Overwrite<
  TitlePropertyItemObjectResponse,
  {
    title: RichText;
  }
>;

export type TitlePropertyItemProps = PropertyItemProps<TitlePropertyItemObject>;

export type TitlePropertyItemComponent = ComponentType<TitlePropertyItemProps>;

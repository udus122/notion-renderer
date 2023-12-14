import type { PropertyValueProps } from "./properties.js";
import type { Overwrite, PartialBy } from "../../../utils.js";
import type { RichText } from "../../richText/richText.js";
import type { TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TitleItem = RichText;

export type TitlePropertyItemObject = PartialBy<
  Overwrite<
    TitlePropertyItemObjectResponse,
    {
      title: TitleItem;
    }
  >,
  "object"
>;

export type TitlePropertyItemProps =
  PropertyValueProps<TitlePropertyItemObject>;

export type TitlePropertyItemComponent = ComponentType<TitlePropertyItemProps>;

import type { PropertyItemProps } from "./propertyItem.js";
import type { Overwrite, PartialBy } from "../../../utils.js";
import type { RichText } from "../../richText/richText.js";
import type { TitlePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TitlePropertyItemObject = PartialBy<
  Overwrite<
    TitlePropertyItemObjectResponse,
    {
      title: RichText;
    }
  >,
  "object"
>;

export type TitlePropertyItemProps = PropertyItemProps<TitlePropertyItemObject>;

export type TitlePropertyItemComponent = ComponentType<TitlePropertyItemProps>;

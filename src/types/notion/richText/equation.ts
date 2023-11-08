import type { RichTextItemProps } from "./richTextItem.js";
import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type EquationRichTextItemObject = EquationRichTextItemResponse & {
  id?: string;
};

export type EquationRichTextItemProps =
  RichTextItemProps<EquationRichTextItemObject>;

export type EquationRichTextItem = ComponentType<EquationRichTextItemProps>;

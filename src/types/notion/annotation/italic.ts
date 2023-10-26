import type { RichTextItem } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type ItalicAnnotationItemProps = ComponentProps<"em"> & {
  richTextItem?: RichTextItem;
};

export type ItalicAnnotationItem = ComponentType<ItalicAnnotationItemProps>;

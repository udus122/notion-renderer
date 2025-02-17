import type { RichTextItemType } from "../richText/richTextItem";
import type { ComponentProps, ComponentType } from "react";

export type ItalicAnnotationItemProps = ComponentProps<"em"> & {
  richTextItem?: RichTextItemType;
};

export type ItalicAnnotationItem = ComponentType<ItalicAnnotationItemProps>;

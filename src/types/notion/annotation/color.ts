import type { RichTextItemType } from "../richText/richTextItem.js";
import type { ComponentType } from "react";

export type ColorAnnotationItemProps = React.ComponentProps<"span"> & {
  richTextItem: RichTextItemType;
};

export type ColorAnnotationItem = ComponentType<ColorAnnotationItemProps>;

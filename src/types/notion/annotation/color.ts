import type { RichTextItem } from "../richText/richTextItem.js";
import type { ComponentType } from "react";

export type ColorAnnotationItemProps = React.ComponentProps<"span"> & {
  richTextItem: RichTextItem;
};

export type ColorAnnotationItem = ComponentType<ColorAnnotationItemProps>;

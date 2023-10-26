import type { RichTextItem } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type BoldAnnotationItemProps = ComponentProps<"strong"> & {
  richTextItem?: RichTextItem;
};

export type BoldAnnotationItem = ComponentType<BoldAnnotationItemProps>;

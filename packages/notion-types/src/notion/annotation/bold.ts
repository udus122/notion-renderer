import type { RichTextItemType } from "../richText/richTextItem";
import type { ComponentProps, ComponentType } from "react";

export type BoldAnnotationItemProps = ComponentProps<"strong"> & {
  richTextItem?: RichTextItemType;
};

export type BoldAnnotationItem = ComponentType<BoldAnnotationItemProps>;

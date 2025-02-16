import type { RichTextItemType } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type StrikethroughAnnotationItemProps = ComponentProps<"del"> & {
  richTextItem?: RichTextItemType;
};

export type StrikethroughAnnotationItem =
  ComponentType<StrikethroughAnnotationItemProps>;

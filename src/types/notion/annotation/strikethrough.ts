import type { RichTextItem } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type StrikethroughAnnotationItemProps = ComponentProps<"del"> & {
  richTextItem?: RichTextItem;
};

export type StrikethroughAnnotationItem =
  ComponentType<StrikethroughAnnotationItemProps>;

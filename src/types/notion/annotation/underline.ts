import type { RichTextItem } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type UnderlineAnnotationItemProps = ComponentProps<"u"> & {
  richTextItem?: RichTextItem;
};

export type UnderlineAnnotationItem =
  ComponentType<UnderlineAnnotationItemProps>;

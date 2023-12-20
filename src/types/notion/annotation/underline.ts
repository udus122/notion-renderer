import type { RichTextItemType } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type UnderlineAnnotationItemProps = ComponentProps<"u"> & {
  richTextItem?: RichTextItemType;
};

export type UnderlineAnnotationItem =
  ComponentType<UnderlineAnnotationItemProps>;

import type { RichTextItem } from "../richText/richTextItem.js";
import type { ComponentProps, ComponentType } from "react";

export type CodeAnnotationItemProps = ComponentProps<"code"> & {
  richTextItem?: RichTextItem;
};

export type CodeAnnotationItem = ComponentType<CodeAnnotationItemProps>;

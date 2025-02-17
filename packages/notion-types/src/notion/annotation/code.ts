import type { RichTextItemType } from "../richText/richTextItem";
import type { ComponentProps, ComponentType } from "react";

export type CodeAnnotationItemProps = ComponentProps<"code"> & {
  richTextItem?: RichTextItemType;
};

export type CodeAnnotationItem = ComponentType<CodeAnnotationItemProps>;

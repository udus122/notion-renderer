import type { BoldAnnotationItem } from "../annotation/bold.js";
import type { CodeAnnotationItem } from "../annotation/code.js";
import type { ColorAnnotationItem } from "../annotation/color.js";
import type { ItalicAnnotationItem } from "../annotation/italic.js";
import type { StrikethroughAnnotationItem } from "../annotation/strikethrough.js";
import type { UnderlineAnnotationItem } from "../annotation/underline.js";

export type AnnotationItemMapper = Partial<{
  bold: BoldAnnotationItem;
  underline: UnderlineAnnotationItem;
  strikethrough: StrikethroughAnnotationItem;
  italic: ItalicAnnotationItem;
  code: CodeAnnotationItem;
  color: ColorAnnotationItem;
}>;

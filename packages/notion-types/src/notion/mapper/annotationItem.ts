import type { BoldAnnotationItem } from "../annotation/bold";
import type { CodeAnnotationItem } from "../annotation/code";
import type { ColorAnnotationItem } from "../annotation/color";
import type { ItalicAnnotationItem } from "../annotation/italic";
import type { StrikethroughAnnotationItem } from "../annotation/strikethrough";
import type { UnderlineAnnotationItem } from "../annotation/underline";

export type AnnotationItemMapper = Partial<{
  bold: BoldAnnotationItem;
  underline: UnderlineAnnotationItem;
  strikethrough: StrikethroughAnnotationItem;
  italic: ItalicAnnotationItem;
  code: CodeAnnotationItem;
  color: ColorAnnotationItem;
}>;

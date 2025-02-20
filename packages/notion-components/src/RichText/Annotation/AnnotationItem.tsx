import { useMapper } from "../../hooks";

import { Bold } from "./Bold";
import { Color } from "./Color";
import { InlineCode } from "./InlineCode";
import { Italic } from "./Italic";
import { Strikethrough } from "./Strikethrough";
import { Underline } from "./Underline";

import type { RichTextItemType } from "@udus/notion-types";
import type { FC, ReactNode } from "react";

export const AnnotationItem: FC<{
  richTextItem: RichTextItemType;
  children: ReactNode;
}> = ({ richTextItem, children }) => {
  const { annotationMapper } = useMapper();

  const mapper = {
    bold: Bold,
    underline: Underline,
    strikethrough: Strikethrough,
    italic: Italic,
    code: InlineCode,
    color: Color,
    ...annotationMapper,
  };

  let element = children;

  if (richTextItem.annotations.bold) {
    const BoldAnnotation = mapper.bold;
    element = (
      <BoldAnnotation richTextItem={richTextItem}>{element}</BoldAnnotation>
    );
  }
  if (richTextItem.annotations.italic) {
    const ItalicAnnotation = mapper.italic;
    element = (
      <ItalicAnnotation richTextItem={richTextItem}>{element}</ItalicAnnotation>
    );
  }
  if (richTextItem.annotations.strikethrough) {
    const StrikethroughAnnotation = mapper.strikethrough;
    element = (
      <StrikethroughAnnotation richTextItem={richTextItem}>
        {element}
      </StrikethroughAnnotation>
    );
  }
  if (richTextItem.annotations.underline) {
    const UnderlineAnnotation = mapper.underline;
    element = (
      <UnderlineAnnotation richTextItem={richTextItem}>
        {element}
      </UnderlineAnnotation>
    );
  }
  if (richTextItem.annotations.code) {
    const InlineCodeAnnotation = mapper.code;
    element = (
      <InlineCodeAnnotation richTextItem={richTextItem}>
        {element}
      </InlineCodeAnnotation>
    );
  }
  if (richTextItem?.annotations.color) {
    const ColorAnnotation = mapper.color;
    element = (
      <ColorAnnotation richTextItem={richTextItem}>{element}</ColorAnnotation>
    );
  }
  return element;
};

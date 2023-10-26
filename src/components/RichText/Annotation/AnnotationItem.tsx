import { useMapper } from "../../Mapper/hooks.js";

import { Bold } from "./Bold.js";
import { Color } from "./Color.js";
import { InlineCode } from "./InlineCode.js";
import { Italic } from "./Italic.js";
import { Strikethrough } from "./Strikethrough.js";
import { Underline } from "./Underline.js";

import type { RichTextItem } from "../../../types/notion.js";
import type React from "react";

export const AnnotationItem: React.FC<{
  richTextItem: RichTextItem;
  children: React.ReactNode;
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
    const BoldAnnotation = mapper["bold"];
    element = (
      <BoldAnnotation richTextItem={richTextItem}>{element}</BoldAnnotation>
    );
  }
  if (richTextItem.annotations.italic) {
    const ItalicAnnotation = mapper["italic"];
    element = (
      <ItalicAnnotation richTextItem={richTextItem}>{element}</ItalicAnnotation>
    );
  }
  if (richTextItem.annotations.strikethrough) {
    const StrikethroughAnnotation = mapper["strikethrough"];
    element = (
      <StrikethroughAnnotation richTextItem={richTextItem}>
        {element}
      </StrikethroughAnnotation>
    );
  }
  if (richTextItem.annotations.underline) {
    const UnderlineAnnotation = mapper["underline"];
    element = (
      <UnderlineAnnotation richTextItem={richTextItem}>
        {element}
      </UnderlineAnnotation>
    );
  }
  if (richTextItem.annotations.code) {
    const InlineCodeAnnotation = mapper["code"];
    element = (
      <InlineCodeAnnotation richTextItem={richTextItem}>
        {element}
      </InlineCodeAnnotation>
    );
  }
  if (richTextItem?.annotations.color) {
    const ColorAnnotation = mapper["color"];
    element = (
      <ColorAnnotation richTextItem={richTextItem}>{element}</ColorAnnotation>
    );
  }
  return element;
};

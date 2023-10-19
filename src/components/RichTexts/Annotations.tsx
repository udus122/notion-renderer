import { Bold } from "./Bold.js";
import { Color } from "./Color.js";
import { InlineCode } from "./InlineCode.js";
import { Italic } from "./Italic.js";
import { Strikethrough } from "./Strikethrough.js";
import { Underline } from "./Underline.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

const defaultAnnotationMapper = {
  color: Color,
  bold: Bold,
  italic: Italic,
  strikethrough: Strikethrough,
  underline: Underline,
  code: InlineCode,
};

export const Annotations: React.FC<{
  richTextItem: RichTextItemResponse;
  children: React.ReactNode;
  customAnnotationMapper?: object;
}> = ({ richTextItem, children, customAnnotationMapper = {} }) => {
  const annotationMapper = {
    ...defaultAnnotationMapper,
    ...customAnnotationMapper,
  };

  let element = children;

  if (richTextItem.annotations.bold) {
    const BoldAnnotation = annotationMapper["bold"];
    element = (
      <BoldAnnotation richTextItem={richTextItem}>{element}</BoldAnnotation>
    );
  }
  if (richTextItem.annotations.italic) {
    const ItalicAnnotation = annotationMapper["italic"];
    element = (
      <ItalicAnnotation richTextItem={richTextItem}>{element}</ItalicAnnotation>
    );
  }
  if (richTextItem.annotations.strikethrough) {
    const StrikethroughAnnotation = annotationMapper["strikethrough"];
    element = (
      <StrikethroughAnnotation richTextItem={richTextItem}>
        {element}
      </StrikethroughAnnotation>
    );
  }
  if (richTextItem.annotations.underline) {
    const UnderlineAnnotation = annotationMapper["underline"];
    element = (
      <UnderlineAnnotation richTextItem={richTextItem}>
        {element}
      </UnderlineAnnotation>
    );
  }
  if (richTextItem.annotations.code) {
    const InlineCodeAnnotation = annotationMapper["code"];
    element = (
      <InlineCodeAnnotation richTextItem={richTextItem}>
        {element}
      </InlineCodeAnnotation>
    );
  }
  if (richTextItem?.annotations.color) {
    const ColorAnnotation = annotationMapper["color"];
    element = (
      <ColorAnnotation richTextItem={richTextItem}>{element}</ColorAnnotation>
    );
  }
  return <>{element}</>;
};

import { Bold } from "./Bold";
import { Color } from "./Color";
import { InlineCode } from "./InlineCode";
import { Italic } from "./Italic";
import { Link } from "./Link";
import { Strikethrough } from "./Strikethrough";
import { Underline } from "./Underline";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

const defaultAnnotationMapper = {
  color: Color,
  bold: Bold,
  italic: Italic,
  strikethrough: Strikethrough,
  underline: Underline,
  code: InlineCode,
  link: Link,
};

// FIXME: cannot customize annotation order
export const RichTextAnnotation: React.FC<{
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
    const Underline = annotationMapper["underline"];
    element = <Underline richTextItem={richTextItem}>{element}</Underline>;
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
  if (richTextItem.href) {
    const LinkAnnotation = annotationMapper["link"];
    element = (
      <LinkAnnotation richTextItem={richTextItem}>{element}</LinkAnnotation>
    );
  }
  return <>{element}</>;
};

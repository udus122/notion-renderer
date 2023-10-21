import { Bold } from "./Bold.js";
import { Color } from "./Color.js";
import { InlineCode } from "./InlineCode.js";
import { Italic } from "./Italic.js";
import { Strikethrough } from "./Strikethrough.js";
import { Underline } from "./Underline.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const Annotation: React.FC<{
  richTextItem: RichTextItemResponse;
  children: React.ReactNode;
  annotationMapper?: object;
}> = ({ richTextItem, children, annotationMapper }) => {
  const mapper = {
    color: Color,
    bold: Bold,
    italic: Italic,
    strikethrough: Strikethrough,
    underline: Underline,
    code: InlineCode,
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
  return <>{element}</>;
};

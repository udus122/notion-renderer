import { useMapper } from "../../mapper.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const Annotation: React.FC<{
  richTextItem: RichTextItemResponse;
  children: React.ReactNode;
}> = ({ richTextItem, children }) => {
  const { annotationMapper } = useMapper();

  let element = children;
  // TODO: ここをObject.entriesとreduceで書き換える
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

import { AnnotationProvider } from "../../Mapper/Annotation.js";

import { AnnotationItem } from "./AnnotationItem.js";

import type { ReactNode } from "react";
import type { RichTextItem } from "src/types/notion/richText/richTextItem.js";

type Props = {
  richTextItem: RichTextItem;
  children: ReactNode;
  annotationMapper?: object;
};

export const Annotation: React.FC<Props> = ({
  richTextItem,
  children,
  annotationMapper,
}) => {
  return (
    <span className="notion_annnotation">
      <AnnotationProvider mapper={annotationMapper}>
        <AnnotationItem richTextItem={richTextItem}>{children}</AnnotationItem>
      </AnnotationProvider>
    </span>
  );
};

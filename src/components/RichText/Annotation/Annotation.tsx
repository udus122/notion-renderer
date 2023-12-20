import { AnnotationItemProvider } from "../../Mapper/Annotation.js";

import { AnnotationItem } from "./AnnotationItem.js";

import type { AnnotationItemMapper } from "../../../types/notion/mapper/annotationItem.js";
import type { RichTextItemType } from "../../../types/notion/richText/richTextItem.js";
import type { ReactNode } from "react";

type Props = {
  richTextItem: RichTextItemType;
  children: ReactNode;
  annotationMapper?: AnnotationItemMapper;
};

export const Annotation: React.FC<Props> = ({
  richTextItem,
  children,
  annotationMapper,
}) => {
  return (
    <span className="notion-annnotation">
      <AnnotationItemProvider mapper={annotationMapper}>
        <AnnotationItem richTextItem={richTextItem}>{children}</AnnotationItem>
      </AnnotationItemProvider>
    </span>
  );
};

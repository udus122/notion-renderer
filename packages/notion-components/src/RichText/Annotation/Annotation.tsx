import { AnnotationItemProvider } from "../../Mapper/Annotation";

import { AnnotationItem } from "./AnnotationItem";

import type { AnnotationItemMapper } from "@udus/notion-types";
import type { RichTextItemType } from "@udus/notion-types";
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

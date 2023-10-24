import { useContext } from "react";

import { AnnotationContext } from "./Mapper/Annotation.js";
import { BlockContext } from "./Mapper/Block.js";
import { LinkContext } from "./Mapper/Link.js";
import { RichTextItemContext } from "./Mapper/RichText.js";

export const useMapper = () => {
  const blockMapper = useContext(BlockContext);
  const richTextItemMapper = useContext(RichTextItemContext);
  const annotationMapper = useContext(AnnotationContext);
  const Link = useContext(LinkContext);
  return {
    blockMapper,
    richTextItemMapper,
    annotationMapper,
    Link,
  };
};

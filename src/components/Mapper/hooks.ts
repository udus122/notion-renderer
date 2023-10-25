import { useContext } from "react";

import {
  AnnotationContext,
  BlockContext,
  LinkContext,
  RichTextItemContext,
} from "./context.js";

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

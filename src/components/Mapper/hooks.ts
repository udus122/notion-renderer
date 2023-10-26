import { useContext } from "react";
import { createContext, type ComponentType } from "react";

import { Link } from "../Link.js";
import { type LinkProps } from "src/types/notion/link.js";

export const AnnotationContext = createContext({});

export const BlockContext = createContext({});

export const LinkContext = createContext<ComponentType<LinkProps>>(Link);

export const RichTextItemContext = createContext({});

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

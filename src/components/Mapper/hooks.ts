import { createContext, useContext, type ComponentType } from "react";

import { Link } from "../Link.js";

import type { LinkProps } from "../../types/notion/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../../types/notion/mapper/block.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";

export const AnnotationContext = createContext<AnnotationItemMapper>({});

export const BlockContext = createContext<BlockMapper>({});

export const LinkContext = createContext<ComponentType<LinkProps>>(Link);

export const RichTextItemContext = createContext<RichTextItemMapper>({});

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

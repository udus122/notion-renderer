import { createContext, useContext, type ComponentType } from "react";

import { Link } from "../Common/Link.js";

import type { LinkProps } from "../../types/notion/common/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../../types/notion/mapper/block.js";
import type { PropertyItemMapper } from "../../types/notion/mapper/propertyItem.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";

export const AnnotationContext = createContext<AnnotationItemMapper>({});

export const BlockContext = createContext<BlockMapper>({});

export const LinkContext = createContext<ComponentType<LinkProps>>(Link);

export const PropertyItemContext = createContext<PropertyItemMapper>({});

export const RichTextItemContext = createContext<RichTextItemMapper>({});

export const useMapper = () => {
  const annotationMapper = useContext(AnnotationContext);
  const blockMapper = useContext(BlockContext);
  const Link = useContext(LinkContext);
  const propertyItemMapper = useContext(PropertyItemContext);
  const richTextItemMapper = useContext(RichTextItemContext);
  return {
    annotationMapper,
    blockMapper,
    Link,
    propertyItemMapper,
    richTextItemMapper,
  };
};

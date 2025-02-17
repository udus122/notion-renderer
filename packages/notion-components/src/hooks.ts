import { createContext, useContext, type ComponentType } from "react";

import { Link } from "./Common/Link";

import type { BlockBlockObject } from "../types/notion/block/block";
import type { LinkProps } from "../types/notion/common/link";
import type { AnnotationItemMapper } from "../types/notion/mapper/annotationItem";
import type { BlockMapper } from "../types/notion/mapper/block";
import type { PropertyItemMapper } from "../types/notion/mapper/propertyItem";
import type { RichTextItemMapper } from "../types/notion/mapper/richTextItem";

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

export const BlocksContext = createContext<Array<BlockBlockObject>>([]);

export const useBlocks = () => {
  return useContext(BlocksContext);
};

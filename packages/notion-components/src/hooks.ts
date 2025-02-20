import { createContext, useContext, type ComponentType } from "react";

import { Link } from "./Common/Link";

import type {
  BlockBlockObject,
  LinkProps,
  AnnotationItemMapper,
  BlockMapper,
  PropertyItemMapper,
  RichTextItemMapper,
} from "@udus/notion-types";

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

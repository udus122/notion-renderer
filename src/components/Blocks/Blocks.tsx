import React from "react";

import { type LinkProps } from "../Link.js";
import {
  defaultBlockMapper,
  LinkComponentMapper,
  AnnotationMapper,
  defaultAnnotationMapper,
  RichTextItemMapper,
  defaultRichTextItemMapper,
  BlockMapper,
} from "../mapper.js";

import { Block } from "./Block.js";

import type { BlockObject } from "@udus/notion-libs";

type Props = {
  blocks: Array<BlockObject>;
  blockMapper?: object;
  richTextItemMapper?: object;
  annotationMapper?: object;
  LinkComponent?: React.ComponentType<LinkProps>;
};

export const Blocks: React.FC<Props> = function ({
  blocks,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) {
  return (
    <BlockMapperProvider mapper={blockMapper}>
      <RichTextItemMapperProvider mapper={richTextItemMapper}>
        <AnnotationMapperProvider mapper={annotationMapper}>
          <LinkComponentProvider component={LinkComponent}>
            {blocks.map((block) => {
              return <Block key={block.id} block={block} blocks={blocks} />;
            })}
          </LinkComponentProvider>
        </AnnotationMapperProvider>
      </RichTextItemMapperProvider>
    </BlockMapperProvider>
  );
};

const BlockMapperProvider: React.FC<{
  mapper?: object;
  children: React.ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }
  return (
    <BlockMapper.Provider value={{ ...defaultBlockMapper, ...mapper }}>
      {children}
    </BlockMapper.Provider>
  );
};

const RichTextItemMapperProvider: React.FC<{
  mapper?: object;
  children: React.ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }
  return (
    <RichTextItemMapper.Provider
      value={{ ...defaultRichTextItemMapper, ...mapper }}
    >
      {children}
    </RichTextItemMapper.Provider>
  );
};

const AnnotationMapperProvider: React.FC<{
  mapper?: object;
  children: React.ReactNode;
}> = ({ mapper, children }) => {
  if (!mapper) {
    return children;
  }
  return (
    <AnnotationMapper.Provider
      value={{ ...defaultAnnotationMapper, ...mapper }}
    >
      {children}
    </AnnotationMapper.Provider>
  );
};

const LinkComponentProvider: React.FC<{
  component?: React.ComponentType<LinkProps>;
  children: React.ReactNode;
}> = ({ component: value, children }) => {
  if (!value) {
    return children;
  }
  return (
    <LinkComponentMapper.Provider value={value}>
      {children}
    </LinkComponentMapper.Provider>
  );
};

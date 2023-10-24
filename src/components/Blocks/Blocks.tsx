import React from "react";

import { type LinkProps } from "../Link.js";
import {
  LinkComponentMapper,
  AnnotationMapper,
  RichTextItemMapper,
  BlockMapper,
  useMapper,
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

  const { blockMapper } = useMapper();

  return (
    <BlockMapper.Provider value={{ ...blockMapper, ...mapper }}>
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
  const { richTextItemMapper } = useMapper();
  return (
    <RichTextItemMapper.Provider value={{ ...richTextItemMapper, ...mapper }}>
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
  const { annotationMapper } = useMapper();
  return (
    <AnnotationMapper.Provider value={{ ...annotationMapper, ...mapper }}>
      {children}
    </AnnotationMapper.Provider>
  );
};

const LinkComponentProvider: React.FC<{
  component?: React.ComponentType<LinkProps>;
  children: React.ReactNode;
}> = ({ component, children }) => {
  if (!component) {
    return children;
  }

  return (
    <LinkComponentMapper.Provider value={component}>
      {children}
    </LinkComponentMapper.Provider>
  );
};

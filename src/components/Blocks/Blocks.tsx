import React from "react";

import { type LinkProps } from "../Link.js";
import { AnnotationProvider } from "../Mapper/Annotation.js";
import { BlockProvider } from "../Mapper/Block.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

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
    <BlockProvider mapper={blockMapper}>
      <RichTextItemProvider mapper={richTextItemMapper}>
        <AnnotationProvider mapper={annotationMapper}>
          <LinkProvider link={LinkComponent}>
            {blocks.map((block) => {
              return <Block key={block.id} block={block} blocks={blocks} />;
            })}
          </LinkProvider>
        </AnnotationProvider>
      </RichTextItemProvider>
    </BlockProvider>
  );
};

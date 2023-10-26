import React from "react";

import { type LinkProps } from "src/types/notion/link.js";

import { AnnotationProvider } from "../Mapper/Annotation.js";
import { BlockProvider } from "../Mapper/Block.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { Block } from "./Block.js";

import type { BlockBlockObject } from "../../types/notion/blocks/block.js";

type Props = {
  blocks: Array<BlockBlockObject>;
  blockMapper?: object;
  richTextItemMapper?: object;
  annotationMapper?: object;
  LinkComponent?: React.ComponentType<LinkProps>;
};

export const BlockList: React.FC<Props> = function ({
  blocks,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) {
  return (
    <div className="notion_block_list">
      <BlockProvider mapper={blockMapper}>
        <RichTextItemProvider mapper={richTextItemMapper}>
          <AnnotationProvider mapper={annotationMapper}>
            <LinkProvider link={LinkComponent}>
              {blocks.map((block) => {
                return (
                  block !== null && (
                    <Block
                      key={block ? block.id : null}
                      block={block}
                      blocks={blocks}
                    />
                  )
                );
              })}
            </LinkProvider>
          </AnnotationProvider>
        </RichTextItemProvider>
      </BlockProvider>
    </div>
  );
};

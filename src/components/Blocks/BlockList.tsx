import React from "react";

import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { BlockProvider } from "../Mapper/Block.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { Block } from "./Block.js";

import type { BlockBlockObject } from "../../types/notion/blocks/block.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../../types/notion/mapper/block.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { LinkProps } from "src/types/notion/link.js";

type Props = {
  blocks: Array<BlockBlockObject>;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
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
          <AnnotationItemProvider mapper={annotationMapper}>
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
          </AnnotationItemProvider>
        </RichTextItemProvider>
      </BlockProvider>
    </div>
  );
};

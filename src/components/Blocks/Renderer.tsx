import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { BlockProvider } from "../Mapper/Block.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { BlockList } from "./BlockList.js";

import type { BlockBlockObject } from "../../types/notion/blocks/block.js";
import type { LinkProps } from "../../types/notion/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../../types/notion/mapper/block.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { FC } from "react";

type Props = {
  blocks: Array<BlockBlockObject>;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
  theme?: "light" | "dark";
};

export const BlockRenderer: FC<Props> = ({
  blocks,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
  theme = "light",
}) => {
  return (
    <div className={`notion-root notion-${theme}`}>
      <BlockProvider mapper={blockMapper}>
        <RichTextItemProvider mapper={richTextItemMapper}>
          <AnnotationItemProvider mapper={annotationMapper}>
            <LinkProvider link={LinkComponent}>
              <BlockList blocks={blocks} />
            </LinkProvider>
          </AnnotationItemProvider>
        </RichTextItemProvider>
      </BlockProvider>
    </div>
  );
};

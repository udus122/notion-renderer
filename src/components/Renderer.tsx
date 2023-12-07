"use client";

import { BlockList } from "./Blocks/BlockList.js";
import { AnnotationItemProvider } from "./Mapper/Annotation.js";
import { BlockProvider } from "./Mapper/Block.js";
import { LinkProvider } from "./Mapper/Link.js";
import { PropertyItemProvider } from "./Mapper/Property.js";
import { RichTextItemProvider } from "./Mapper/RichText.js";
import { Page } from "./Page/Page.js";

import type { BlockBlockObject } from "./../types/notion/blocks/block.js";
import type { LinkProps } from "./../types/notion/common/link.js";
import type { AnnotationItemMapper } from "./../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "./../types/notion/mapper/block.js";
import type { RichTextItemMapper } from "./../types/notion/mapper/richTextItem.js";
import type { PropertyItemMapper } from "../types/notion/mapper/propertyItem.js";
import type { PageObject } from "../types/notion/pages/page.js";
import type { FC } from "react";

type Props = {
  page?: PageObject;
  blocks?: Array<BlockBlockObject>;
  displayProperties?: Array<string>;
  propertyMapper?: PropertyItemMapper;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
  theme?: "light" | "dark";
};

export const BlockRenderer: FC<Props> = ({
  page,
  blocks,
  displayProperties,
  propertyMapper,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
  theme = "light",
}) => {
  return (
    <div className={`notion-root notion-${theme}`}>
      {page && (
        <PropertyItemProvider mapper={propertyMapper}>
          <Page page={page} displayProperties={displayProperties} />
        </PropertyItemProvider>
      )}
      {blocks && (
        <BlockProvider mapper={blockMapper}>
          <RichTextItemProvider mapper={richTextItemMapper}>
            <AnnotationItemProvider mapper={annotationMapper}>
              <LinkProvider link={LinkComponent}>
                <BlockList blocks={blocks} />
              </LinkProvider>
            </AnnotationItemProvider>
          </RichTextItemProvider>
        </BlockProvider>
      )}
    </div>
  );
};

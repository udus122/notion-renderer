import React from "react";

import { Link, type LinkProps } from "../Link.js";

import { Block } from "./Block.js";
import {
  defaultBlockMapper,
  LinkMapper,
  AnnotationMapper,
  defaultAnnotationMapper,
  RichTextMapper,
  defaultRichTextMapper,
  BlockMapper,
} from "./mapper.js";

import type { BlockObject } from "../index.js";

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
  LinkComponent = Link,
}) {
  return (
    // TODO: Blocksを重ねた時に、2回目のBlocksにはmapperを渡さなくても、エラーが出ないようにする
    // ex. mapperがundefinedの場合は、Providerを外す
    // Provider用のContainerコンポーネントを作って、そこで判定する
    <BlockMapper.Provider value={{ ...defaultBlockMapper, ...blockMapper }}>
      <RichTextMapper.Provider
        value={{ ...defaultRichTextMapper, ...richTextItemMapper }}
      >
        <AnnotationMapper.Provider
          value={{ ...defaultAnnotationMapper, ...annotationMapper }}
        >
          <LinkMapper.Provider value={LinkComponent}>
            {blocks.map((block) => {
              return <Block key={block.id} block={block} blocks={blocks} />;
            })}
          </LinkMapper.Provider>
        </AnnotationMapper.Provider>
      </RichTextMapper.Provider>
    </BlockMapper.Provider>
  );
};

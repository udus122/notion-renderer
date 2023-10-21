import { Link } from "../Link.js";

import { Block, type BlockObject } from "./Block.js";

import type { BlockProps } from "src/types/utils.js";

type Props = Omit<BlockProps<BlockObject>, "block">;

export const Blocks: React.FC<Props> = function ({
  blocks,
  blockMapper = {},
  richTextItemMapper: richTextMapper = {},
  annotationMapper = {},
  LinkComponent = Link,
}) {
  return (
    <>
      {blocks.map((block) => {
        return (
          <Block
            key={block.id}
            block={block}
            blocks={blocks}
            blockMapper={blockMapper}
            richTextItemMapper={richTextMapper}
            annotationMapper={annotationMapper}
            LinkComponent={LinkComponent}
          />
        );
      })}
    </>
  );
};

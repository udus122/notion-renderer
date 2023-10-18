import { Block } from "./Block.js";

import type { BlockObjectComponent } from "@/types/components.js";

type Props = {
  blocks: Array<BlockObjectComponent>;
  customBlockComponentMapper?: object;
};

export const Blocks: React.FC<Props> = function ({
  blocks,
  customBlockComponentMapper = {},
}) {
  return (
    <>
      {blocks.map((block) => {
        return (
          <Block
            key={block.id}
            block={block}
            blocks={blocks}
            customBlockComponentMapper={customBlockComponentMapper}
          />
        );
      })}
    </>
  );
};

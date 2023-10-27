import { Block } from "./Block.js";

import type { BlockBlockObject } from "../../types/notion/blocks/block.js";
import type { FC } from "react";

type Props = {
  blocks: Array<BlockBlockObject>;
};

export const BlockList: FC<Props> = ({ blocks }) => {
  return (
    <div className="notion_block_list">
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
    </div>
  );
};

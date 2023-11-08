import { BlocksContext } from "../hooks.js";

import { Block } from "./Block.js";

import type { BlockBlockObject } from "../../types/notion/blocks/block.js";
import type { FC } from "react";

type Props = {
  blocks: Array<BlockBlockObject>;
};

export const BlockList: FC<Props> = ({ blocks }) => {
  return (
    <div className="notion-block-list">
      <BlocksContext.Provider value={blocks}>
        {blocks.map((block) => {
          return (
            block !== null && (
              <Block key={block ? block.id : null} block={block} />
            )
          );
        })}
      </BlocksContext.Provider>
    </div>
  );
};

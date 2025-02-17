import { BlocksContext } from "../hooks";

import { Block } from "./Block";

import type { BlockBlockObject } from "@udus/notion-types";
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

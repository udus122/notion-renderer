import { Block } from "./Block.js";
import { BlockList } from "./BlockList.js";

import type { SyncedBlockBlock } from "../../types/notion/blocks/syncedBlock.js";

export const SyncedBlock: SyncedBlockBlock = ({ block, blocks }) => {
  return (
    <div className="notion-synced-block">
      {block.synced_block.synced_from === null
        ? block.synced_block.children && (
            <div className={"notion-synced-block-original"}>
              <BlockList blocks={block.synced_block.children} />
            </div>
          )
        : block.synced_block.synced_from.block && (
            <div className={"notion-synced-block-duplicated"}>
              <Block
                block={block.synced_block.synced_from.block}
                blocks={blocks}
              />
            </div>
          )}
    </div>
  );
};

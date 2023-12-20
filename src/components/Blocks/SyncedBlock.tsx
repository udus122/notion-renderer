import { Block } from "./Block.js";
import { BlockList } from "./BlockList.js";

import type { SyncedBlockBlock } from "../../types/notion/block/syncedBlock.js";

export const SyncedBlock: SyncedBlockBlock = ({ block }) => {
  return (
    <div className="notion-block notion-synced-block">
      {block.synced_block.synced_from === null
        ? block.synced_block.children && (
            <div className={"notion-synced-block-original"}>
              <BlockList blocks={block.synced_block.children} />
            </div>
          )
        : block.synced_block.synced_from.block && (
            <div className={"notion-synced-block-duplicated"}>
              <Block block={block.synced_block.synced_from.block} />
            </div>
          )}
    </div>
  );
};

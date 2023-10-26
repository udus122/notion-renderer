import { Block } from "./Block.js";
import { BlockList } from "./BlockList.js";

import type { SyncedBlockBlock } from "../../types/notion/blocks/syncedBlock.js";

export const SyncedBlock: SyncedBlockBlock = ({ block, blocks }) => {
  return (
    <div className="notion_synced_block">
      {block.synced_block.synced_from === null
        ? block.synced_block.children && (
            <div className={"notion_synced_block_original"}>
              <BlockList blocks={block.synced_block.children} />
            </div>
          )
        : block.synced_block.synced_from.block && (
            <div className={"notion_synced_block_duplicated"}>
              <Block
                block={block.synced_block.synced_from.block}
                blocks={blocks}
              />
            </div>
          )}
    </div>
  );
};

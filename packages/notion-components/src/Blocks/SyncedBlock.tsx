import { Block } from "./Block";
import { BlockList } from "./BlockList";

import type { SyncedBlockBlock } from "@udus/notion-types";

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

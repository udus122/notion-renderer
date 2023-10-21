import { Block } from "./Block.js";
import { Blocks } from "./Blocks.js";

import type { SyncedBlockBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<SyncedBlockBlockObject>;

export const SyncedBlock: React.FC<Props> = ({ block, blocks, mapper }) => {
  return (
    <div className="notion_synced_block">
      {block.synced_block.synced_from === null
        ? block.synced_block.children && (
            <div className={"notion_synced_block_original"}>
              <Blocks blocks={block.synced_block.children} />
            </div>
          )
        : block.synced_block.synced_from.block && (
            <div className={"notion_synced_block_duplicated"}>
              <Block
                block={block.synced_block.synced_from.block}
                blocks={blocks}
                mapper={mapper}
              />
            </div>
          )}
    </div>
  );
};

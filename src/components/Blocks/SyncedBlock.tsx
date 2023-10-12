import { Block } from "./Block";
import { Blocks } from "./Blocks";

import type {
  BlockComponentProps,
  SyncedBlockBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<SyncedBlockBlockObjectComponent>;

export const SyncedBlock: React.FC<Props> = ({ block }) => {
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
              <Block block={block.synced_block.synced_from.block} />
            </div>
          )}
    </div>
  );
};

import { Block, type BlockObject } from "./Block.js";
import { Blocks } from "./index.js";

import type { SyncedBlockBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { IdRequest } from "src/types/notion.js";
import type { BlockProps } from "src/types/utils.js";

export type SyncedBlockBlockObject = SyncedBlockBlockObjectResponse & {
  synced_block: {
    synced_from: {
      type: "block_id";
      block_id: IdRequest;
      block?: BlockObject | null;
    } | null;
    children?: Array<BlockObject> | null;
  };
};

type Props = BlockProps<SyncedBlockBlockObject>;

export const SyncedBlock: React.FC<Props> = ({
  block,
  blocks,
  richTextMapper: mapper,
}) => {
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
                richTextMapper={mapper}
              />
            </div>
          )}
    </div>
  );
};

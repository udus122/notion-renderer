import { fetchBlocks, fetchBlock } from "./blocks.js";

import type { BlockObject } from "./blocks.js";
import type { IdRequest } from "../../../types/notion.js";
import type { SyncedBlockBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

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

export const convertSyncedBlockResponseToBlock = async (
  block: SyncedBlockBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    if (block.synced_block.synced_from) {
      const duplicatedBlock = await fetchBlock(
        block.synced_block.synced_from.block_id
      );
      return {
        ...block,
        synced_block: {
          ...block.synced_block,
          synced_from: {
            ...block.synced_block.synced_from,
            block: duplicatedBlock,
          },
          children: children.length === 0 ? null : children,
        },
      } satisfies SyncedBlockBlockObject;
    }
    return {
      ...block,
      synced_block: {
        ...block.synced_block,
        children,
      },
    } satisfies SyncedBlockBlockObject;
  }
  return { ...block } satisfies SyncedBlockBlockObject;
};

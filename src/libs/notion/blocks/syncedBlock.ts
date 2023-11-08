import { fetchBlockList, fetchBlock } from "./blocks.js";

import type { SyncedBlockBlockObject } from "../../../types/notion/blocks/syncedBlock.js";
import type { SyncedBlockBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertSyncedBlockResponseToBlock = async (
  block: SyncedBlockBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlockList(block.id);
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
            block: duplicatedBlock ?? null,
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

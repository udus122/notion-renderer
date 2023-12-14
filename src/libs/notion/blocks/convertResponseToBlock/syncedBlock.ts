import { fetchBlock } from "../fetchBlock.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { SyncedBlockBlockObject } from "../../../../types/notion/blocks/syncedBlock.js";
import type { SyncedBlockBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertSyncedBlockResponseToBlock = async (
  block: SyncedBlockBlockObjectResponse,
): Promise<SyncedBlockBlockObject> => {
  if (!block.has_children) {
    return block satisfies SyncedBlockBlockObject;
  }

  const children = await fetchBlockList({ block_id: block.id });

  if (block.synced_block.synced_from) {
    const { ok, data } = await fetchBlock({
      block_id: block.synced_block.synced_from.block_id,
    });

    if (ok) {
      return {
        ...block,
        synced_block: {
          ...block.synced_block,
          synced_from: {
            ...block.synced_block.synced_from,
            block: data,
          },
          children: children,
        },
      } satisfies SyncedBlockBlockObject;
    }
  }

  return {
    ...block,
    synced_block: {
      ...block.synced_block,
      children,
    },
  } satisfies SyncedBlockBlockObject;
};

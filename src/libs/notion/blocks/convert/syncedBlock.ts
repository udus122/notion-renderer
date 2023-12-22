import { fetchBlock } from "../fetch.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { SyncedBlockBlockObject } from "../../../../types/notion/block/syncedBlock.js";
import type { Client } from "@notionhq/client";
import type { SyncedBlockBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertSyncedBlockResponseToBlock = async (
  block: SyncedBlockBlockObjectResponse,
  client: Client,
): Promise<SyncedBlockBlockObject> => {
  if (!block.has_children) {
    return block satisfies SyncedBlockBlockObject;
  }

  const { ok: okFetchBlockList, data: children } = await fetchBlockList(
    client,
    {
      block_id: block.id,
    },
  );

  if (okFetchBlockList) {
    if (block.synced_block.synced_from) {
      const { ok: okFetchBlock, data: syncedFrom } = await fetchBlock(client, {
        block_id: block.synced_block.synced_from.block_id,
      });

      if (okFetchBlock) {
        return {
          ...block,
          synced_block: {
            ...block.synced_block,
            synced_from: {
              ...block.synced_block.synced_from,
              block: syncedFrom,
            },
            children,
          },
        } satisfies SyncedBlockBlockObject;
      }
    }
  }

  return {
    ...block,
    synced_block: {
      ...block.synced_block,
      children: [],
    },
  } satisfies SyncedBlockBlockObject;
};

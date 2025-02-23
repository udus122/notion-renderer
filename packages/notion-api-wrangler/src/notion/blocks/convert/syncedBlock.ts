import { fetchBlock } from '../fetch';
import { fetchBlockList } from '../fetchBlockList';

import type { SyncedBlockBlockObject } from '@udus/notion-types';
import type { SyncedBlockBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertSyncedBlockResponseToBlock = async (
  block: SyncedBlockBlockObjectResponse,
  options: FetchOptions,
): Promise<SyncedBlockBlockObject> => {
  if (!block.has_children) {
    return block satisfies SyncedBlockBlockObject;
  }

  const { ok: okFetchBlockList, data: children } = await fetchBlockList(
    { block_id: block.id },
    options,
  );

  if (okFetchBlockList) {
    if (block.synced_block.synced_from) {
      const { ok: okFetchBlock, data: syncedFrom } = await fetchBlock(
        {
          block_id: block.synced_block.synced_from.block_id,
        },
        options,
      );

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

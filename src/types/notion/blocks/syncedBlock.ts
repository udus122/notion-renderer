import type { BlockBlockObject, BlockBlockProps } from "./block.js";
import type { IdRequest } from "../common.js";
import type { SyncedBlockBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type SyncedBlockBlockObject = SyncedBlockBlockObjectResponse & {
  synced_block: {
    synced_from: {
      type: "block_id";
      block_id: IdRequest;
      block?: BlockBlockObject | null;
    } | null;
    children?: Array<BlockBlockObject> | null;
  };
};

export type SyncedBlockBlockProps = BlockBlockProps<SyncedBlockBlockObject>;

export type SyncedBlockBlock = ComponentType<SyncedBlockBlockProps>;

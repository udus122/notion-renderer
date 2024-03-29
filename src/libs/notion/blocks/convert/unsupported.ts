import type { UnsupportedBlockObject } from "../../../../types/notion/block/unsupported.js";
import type { Client } from "@notionhq/client";
import type { UnsupportedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertUnsupportedResponseToBlock = async (
  block: UnsupportedBlockObjectResponse,
  client: Client,
): Promise<UnsupportedBlockObject> => {
  return { ...block } satisfies UnsupportedBlockObject;
};

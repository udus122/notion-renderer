import type { UnsupportedBlockObject } from "../../../../types/notion/block/unsupported.js";
import type { UnsupportedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertUnsupportedResponseToBlock = async (
  block: UnsupportedBlockObjectResponse,
): Promise<UnsupportedBlockObject> => {
  return { ...block } satisfies UnsupportedBlockObject;
};

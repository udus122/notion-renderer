import type { UnsupportedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { UnsupportedBlockObject } from "src/components/Blocks/Unsupported.js";

export const convertUnsupportedResponseToBlock = async (
  block: UnsupportedBlockObjectResponse
) => {
  return { ...block } satisfies UnsupportedBlockObject;
};

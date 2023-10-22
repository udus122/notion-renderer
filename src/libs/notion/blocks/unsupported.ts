import type { UnsupportedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type UnsupportedBlockObject = UnsupportedBlockObjectResponse;

export const convertUnsupportedResponseToBlock = async (
  block: UnsupportedBlockObjectResponse
) => {
  return { ...block } satisfies UnsupportedBlockObject;
};

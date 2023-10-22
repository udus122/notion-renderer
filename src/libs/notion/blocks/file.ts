import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { FileBlockObject } from "src/components/Blocks/File.js";

export const convertFileResponseToBlock = async (
  block: FileBlockObjectResponse
) => {
  return { ...block } satisfies FileBlockObject;
};

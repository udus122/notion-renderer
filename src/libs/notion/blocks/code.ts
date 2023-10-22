import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { CodeBlockObject } from "src/components/Blocks/Code.js";

export const convertCodeResponseToBlock = async (
  block: CodeBlockObjectResponse
) => {
  return { ...block } satisfies CodeBlockObject;
};
